#!/usr/bin/env node
// NEXUS Operator front-end QA audit.
//
//   python3 -m http.server 8791 --bind 127.0.0.1 &      (from the repo root)
//   node tools/qa/audit.js [out.json] [--only=substring]
//
// Walks every page type at 1280x900 and 390x844 with seeded localStorage states, drives the
// page clock forward so long typewriter sequences finish quickly, and reports:
//   - console errors, page errors, unhandled rejections, failed / 4xx requests
//   - horizontal overflow
//   - controls that are invisible but still clickable or keyboard-focusable
//   - size/position changes of tracked boxes while text is typed (box growth, layout shift)
//   - Chrome layout-shift entries
//   - flow checks: hidden "begin" buttons, lesson soft-lock, double-fired transitions
// Exit code 1 if any check fails.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const BASE = process.env.QA_BASE || 'http://127.0.0.1:8791/';
const OUT = process.argv.slice(2).find((a) => !a.startsWith('--'));
const ONLY = (process.argv.find((a) => a.startsWith('--only=')) || '').slice(7);
const PROBE = fs.readFileSync(path.join(__dirname, 'probe.js'), 'utf8');

const VIEWPORTS = { desktop: { width: 1280, height: 900 }, phone: { width: 390, height: 844 } };

const partial = { precourse_complete: true, badge_system_online: true, mod1_complete: true, badge_boot_sequence: true };
const all = {};
['precourse', 'mod1', 'mod2', 'mod3', 'mod4', 'mod5', 'mod6'].forEach((k) => (all[k + '_complete'] = true));
const STATES = {
  fresh: {},
  firstHub: { nexus_intro_seen_operator: 'true', nexus_current_operator: 'operator' },
  returning: {
    nexus_intro_seen_operator: 'true', nexus_current_operator: 'operator', nexus_hub_visited_operator: 'true',
    nexus_operator: JSON.stringify(partial),
    nexus_last_page_operator: JSON.stringify({ url: '/module-2/lesson-2-2.html', title: 'Give It What It Needs' }),
    'nexus_notes_/pre-course/lesson-0-1.html': 'my note <b>not html</b>',
  },
  allDone: {
    nexus_intro_seen_operator: 'true', nexus_current_operator: 'operator', nexus_hub_visited_operator: 'true',
    nexus_operator: JSON.stringify(all),
  },
  finished: {
    nexus_intro_seen_operator: 'true', nexus_current_operator: 'operator', nexus_hub_visited_operator: 'true',
    nexus_operator: JSON.stringify(all), nexus_machine_activated: 'true',
  },
};

// page, state, ms of (fake) time to watch, boxes to track for size/position changes while watching
const PAGES = [
  { url: 'index.html', state: 'fresh', ms: 1500, expectUrl: /ciro-intro\.html$/ },
  { url: 'index.html', state: 'returning', ms: 1500, expectUrl: /hub\.html$/ },
  { url: 'ciro-intro.html', state: 'fresh', ms: 0, flow: 'ciroIntro',
    track: ['.tx-header', '#tx-name', '#tx-panel > .tx-header + *', '#begin-btn'] },
  { url: 'hub.html', state: 'firstHub', ms: 14000, track: ['.ciro-widget', '.progress-section'] },
  { url: 'hub.html', state: 'returning', ms: 8000, track: ['.ciro-widget', '.modules-section'] },
  { url: 'hub.html', state: 'finished', ms: 6000, track: ['.ciro-widget'] },
  { url: 'pre-course/module-intro.html', state: 'returning', ms: 16000, flow: 'intro', track: ['.ciro-tx-panel', '#begin-btn'] },
  { url: 'module-2/intro.html', state: 'returning', ms: 22000, flow: 'intro', track: ['.ciro-tx-panel', '#begin-btn'] },
  { url: 'pre-course/lesson-0-1.html', state: 'returning', ms: 2500, flow: 'lesson', track: ['.video-wrapper', '.task-box'] },
  { url: 'module-1/lesson-1-1.html', state: 'returning', ms: 2500, flow: 'lesson', track: ['.video-wrapper'] },
  { url: 'module-3/lesson-3-1.html?dev', state: 'returning', ms: 2500, flow: 'lesson' },
  { url: 'module-2/challenge.html', state: 'returning', ms: 2500 },
  { url: 'module-2/complete.html', state: 'returning', ms: 14000, flow: 'complete', track: ['.debrief-wrap', '#hub-cta'] },
  { url: 'module-6/complete.html?dev', state: 'finished', ms: 30000, flow: 'complete', track: ['.debrief-wrap', '#hub-cta'] },
  { url: 'machine/input.html', state: 'finished', ms: 6000 },
  { url: 'machine/input.html', state: 'allDone', ms: 6000 },
  { url: 'machine/activated.html', state: 'allDone', ms: 60000, track: ['#act-headline'] },
  { url: 'machine/activated.html', state: 'finished', ms: 6000 },
  { url: 'bonus/vault.html', state: 'returning', ms: 4000 },
  { url: '404.html', state: 'returning', ms: 6000, track: ['.ciro-widget'] },
];

const EXTERNAL = /fonts\.(googleapis|gstatic)\.com|youtube(-nocookie)?\.com|ytimg\.com|googlevideo\.com|doubleclick|google\.com/;

function seedScript(state) {
  return `(() => { try {
    if (sessionStorage.getItem('__qa_seeded')) return;
    sessionStorage.setItem('__qa_seeded', '1');
    localStorage.clear();
    const s = ${JSON.stringify(STATES[state])};
    for (const k in s) localStorage.setItem(k, s[k]);
  } catch (e) {} })();`;
}

async function advance(page, ms, step, onStep) {
  for (let t = 0; t < ms; t += step) {
    await page.clock.runFor(step);
    await page.waitForTimeout(8); // let the compositor paint so layout-shift entries are recorded
    if (onStep) await onStep(t + step);
  }
}

async function runPage(browser, spec, vpName) {
  const ctx = await browser.newContext({ viewport: VIEWPORTS[vpName], deviceScaleFactor: 1 });
  const issues = [];
  const notes = [];
  const page = await ctx.newPage();
  await page.addInitScript(seedScript(spec.state));
  await page.addInitScript(PROBE);
  await page.clock.install();
  page.on('console', (m) => {
    if (m.type() === 'error') {
      const loc = m.location() && m.location().url || '';
      if (EXTERNAL.test(loc) || EXTERNAL.test(m.text())) return;
      issues.push('console.error: ' + m.text().slice(0, 200));
    }
  });
  page.on('pageerror', (e) => issues.push('pageerror: ' + e.message.slice(0, 200)));
  const navs = [];
  page.on('request', (r) => { if (r.isNavigationRequest() && r.frame() === page.mainFrame()) navs.push(r.url()); });
  page.nav = navs;
  page.on('requestfailed', (r) => {
    const f = r.failure() && r.failure().errorText || '';
    if (r.isNavigationRequest() && /ERR_ABORTED/.test(f)) return; // we cut navigations short on purpose
    if (EXTERNAL.test(r.url())) return;
    if (/ERR_ABORTED/.test(f) && /\.(mp3|wav)$/.test(r.url())) return; // media range requests get aborted normally
    issues.push('requestfailed: ' + r.url().replace(BASE, '/') + ' ' + f);
  });
  page.on('response', (r) => {
    if (r.status() >= 400 && !EXTERNAL.test(r.url())) issues.push('HTTP ' + r.status() + ': ' + r.url().replace(BASE, '/'));
  });

  await page.goto(BASE + spec.url, { waitUntil: 'domcontentloaded' });
  await page.clock.runFor(300);

  const tracked = {};
  const hidden = new Map();
  const sample = async () => {
    const res = await page.evaluate((sels) => ({
      boxes: sels.map((s) => window.__qa && window.__qa.box(s)),
      hidden: window.__qa ? window.__qa.hiddenInteractive() : [],
    }), spec.track || []);
    (spec.track || []).forEach((s, i) => {
      const b = res.boxes[i];
      if (!b) return;
      (tracked[s] = tracked[s] || []).push(b);
    });
    for (const h of res.hidden) {
      const k = h.el + (h.clickable ? ' [clickable]' : '') + (h.focusable ? ' [focusable]' : '');
      hidden.set(k, (hidden.get(k) || 0) + 1);
    }
  };

  if (spec.flow === 'ciroIntro') await flowCiroIntro(page, sample, issues, notes);
  else if (spec.ms) await advance(page, spec.ms, 100, sample);
  await sample();

  if (spec.flow === 'intro') await flowIntro(page, issues, notes);
  if (spec.flow === 'lesson') await flowLesson(page, issues, notes);
  if (spec.flow === 'complete') await flowComplete(page, issues, notes);

  if (spec.expectUrl && !spec.expectUrl.test(page.url())) issues.push('routing: ended on ' + page.url().replace(BASE, '/'));

  const end = await page.evaluate(() => window.__qa ? {
    overflow: window.__qa.overflow(),
    shifts: window.__qa.shifts,
    fontTimes: window.__qa.fontTimes,
    plays: window.__qa.plays,
    rejections: window.__qa.rejections,
  } : null).catch(() => null);

  if (end) {
    if (end.overflow.scrollWidth > end.overflow.clientWidth + 1)
      issues.push('horizontal overflow: scrollWidth ' + end.overflow.scrollWidth + ' > ' + end.overflow.clientWidth + ' (' + end.overflow.wide.join(', ') + ')');
    end.rejections.forEach((r) => issues.push('unhandled rejection: ' + r));
    // shifts within 150ms after a web font finished loading are the font swap (reported as a note)
    const isFont = (s) => end.fontTimes.some((f) => s.t >= f - 20 && s.t <= f + 150);
    const real = end.shifts.filter((s) => !isFont(s));
    const fontCls = end.shifts.filter(isFont).reduce((a, s) => a + s.value, 0);
    if (fontCls > 0.01) notes.push('font-swap shift ' + fontCls.toFixed(3));
    const cls = real.reduce((a, s) => a + s.value, 0);
    if (cls > 0.01) {
      const by = {};
      real.forEach((s) => s.nodes.forEach((n) => (by[n] = (by[n] || 0) + s.value)));
      issues.push('layout shift CLS=' + cls.toFixed(3) + ' (first at ' + real[0].t + 'ms) from ' + Object.entries(by).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([n, v]) => n + ' ' + v.toFixed(3)).join('; '));
    }
  }
  // a control seen invisible-but-interactive in 3+ samples (>=300ms) counts; a single sample is just the first frame of its own fade-in
  for (const [k, n] of hidden) if (n >= 3) issues.push('hidden but interactive: ' + k);
  for (const s in tracked) {
    const arr = tracked[s];
    const hs = [...new Set(arr.map((b) => b.h))];
    const ys = [...new Set(arr.map((b) => b.y))];
    if (hs.length > 2) issues.push('box resized while animating: ' + s + ' heights ' + summarise(hs));
    if (ys.length > 2) issues.push('box moved while animating: ' + s + ' y ' + summarise(ys));
  }
  await ctx.close();
  return { page: spec.url, state: spec.state, viewport: vpName, issues, notes };
}

// Run the page clock, give a started navigation a moment, and report whether one happened.
async function navigatedDuring(page, ms) {
  const n = page.nav.length;
  await page.clock.runFor(ms);
  await page.waitForTimeout(400);
  return page.nav.length > n ? page.nav[page.nav.length - 1].replace(BASE, '/') : null;
}

function summarise(v) {
  return v.length > 6 ? v.slice(0, 3).join(',') + ' … ' + v.slice(-2).join(',') + ' (' + v.length + ' sizes)' : v.join(',');
}

// Clicking where the begin button will appear, before it has appeared, must do nothing.
async function flowIntro(page, issues, notes) {
  // fresh load, then click the hidden button position immediately
  const url = page.url();
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.clock.runFor(1200);
  const b = await page.evaluate(() => window.__qa.box('#begin-btn'));
  await page.mouse.click(b.x + b.w / 2, b.y - (await page.evaluate(() => scrollY)) + b.h / 2);
  await page.keyboard.press('Tab'); await page.keyboard.press('Tab'); await page.keyboard.press('Tab');
  const focused = await page.evaluate(() => document.activeElement && document.activeElement.id);
  if (focused === 'begin-btn') issues.push('flow: begin button takes keyboard focus before it is shown');
  const nav = await navigatedDuring(page, 4000);
  if (nav) issues.push('flow: clicking the not-yet-visible begin button navigated to ' + nav);
  else notes.push('hidden begin button click ignored');
}

async function flowLesson(page, issues, notes) {
  const url = page.url();
  await page.evaluate(() => { try { localStorage.removeItem('nexus_task_' + location.pathname); } catch (e) {} });
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.clock.runFor(800);
  // 1. invisible "continue anyway" link must not be clickable before the hint is shown
  const a = await page.evaluate(() => window.__qa.box('#nav-anyway'));
  if (a && a.w) {
    await page.evaluate((y) => window.scrollTo(0, y - 300), a.y);
    const sy = await page.evaluate(() => scrollY);
    await page.mouse.click(a.x + a.w / 2, a.y - sy + a.h / 2);
    if (await navigatedDuring(page, 3500)) { issues.push('flow: invisible "continue anyway" link navigated before the hint was shown'); await page.goto(url); await page.clock.runFor(500); }
  }
  // 2. locked next must not navigate, must show hint
  await page.click('#next-btn');
  if (await navigatedDuring(page, 3500)) { issues.push('flow: locked next navigated'); return; }
  const shown = await page.evaluate(() => document.getElementById('nav-hint').classList.contains('show'));
  if (!shown) issues.push('flow: hint not shown after locked next click');
  // 3. mark done -> unlocked, persisted across reload, next navigates
  await page.click('#task-done-btn');
  const st = await page.evaluate(() => ({ locked: document.getElementById('next-btn').classList.contains('locked'), done: document.getElementById('task-box').classList.contains('done') }));
  if (st.locked || !st.done) issues.push('flow: mark task done did not unlock next ' + JSON.stringify(st));
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.clock.runFor(300);
  const st2 = await page.evaluate(() => document.getElementById('next-btn').classList.contains('locked'));
  if (st2) issues.push('flow: task state not restored on reload');
  // 4. a double activation of next must start one transition, not two
  await page.focus('#next-btn');
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  await page.clock.runFor(200);
  const trans = await page.evaluate(() => window.__qa.plays.filter((p) => /transition-\d/.test(p.src)).length).catch(() => -1);
  if (trans > 1) issues.push('flow: double activation fired ' + trans + ' transitions');
  notes.push('lesson soft-lock ok; transitions on double Enter: ' + trans);
}

async function flowComplete(page, issues) {
  const url = page.url();
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.clock.runFor(1500);
  const b = await page.evaluate(() => window.__qa.box('#hub-cta a'));
  if (b) {
    const sy = await page.evaluate(() => scrollY);
    await page.mouse.click(b.x + b.w / 2, b.y - sy + b.h / 2);
    const nav = await navigatedDuring(page, 3500);
    if (nav) issues.push('flow: clicking the not-yet-visible button navigated to ' + nav);
  }
}

async function flowCiroIntro(page, sample, issues, notes) {
  // before power-on: hidden buttons must not be clickable
  const url = page.url();
  const b = await page.evaluate(() => window.__qa.box('#begin-btn'));
  await page.mouse.click(b.x + b.w / 2, b.y - (await page.evaluate(() => scrollY)) + b.h / 2);
  if (await navigatedDuring(page, 4000)) { issues.push('flow: hidden "Enter NEXUS Academy" clickable before power-on'); await page.goto(url); await page.clock.runFor(300); }
  await sample();
  await page.click('#power-btn');
  // whole first phase; sample while typing
  let waited = 0;
  while (waited < 90000) {
    await advance(page, 500, 100, sample);
    waited += 500;
    if (await page.evaluate(() => document.getElementById('nexus-btn').classList.contains('visible'))) break;
  }
  notes.push('phase 1 took ~' + waited + 'ms (fake clock)');
  await advance(page, 1500, 100, sample);
  await page.click('#nexus-btn');
  waited = 0;
  while (waited < 90000) {
    await advance(page, 500, 100, sample);
    waited += 500;
    if (await page.evaluate(() => document.getElementById('begin-btn').classList.contains('visible'))) break;
  }
  await advance(page, 1500, 100, sample);
}

(async () => {
  const browser = await chromium.launch();
  const results = [];
  for (const spec of PAGES) {
    if (ONLY && !spec.url.includes(ONLY)) continue;
    for (const vp of Object.keys(VIEWPORTS)) {
      let r;
      try { r = await runPage(browser, spec, vp); } catch (e) { r = { page: spec.url, state: spec.state, viewport: vp, issues: ['audit error: ' + e.message.split('\n')[0]], notes: [] }; }
      results.push(r);
      const tag = `${r.page} [${r.state}] @${vp}`;
      if (r.issues.length) { console.log('FAIL ' + tag); r.issues.forEach((i) => console.log('     - ' + i)); }
      else console.log('ok   ' + tag + (r.notes.length ? '  (' + r.notes.join('; ') + ')' : ''));
    }
  }
  await browser.close();
  if (OUT) fs.writeFileSync(OUT, JSON.stringify(results, null, 2));
  const n = results.reduce((a, r) => a + r.issues.length, 0);
  console.log('\n' + n + ' issue(s) across ' + results.length + ' page runs');
  process.exit(n ? 1 : 0);
})();
