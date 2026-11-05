#!/usr/bin/env node
// Capture short real-time frame sequences of every animated page, for motion review.
//
//   python3 -m http.server 8793 --bind 127.0.0.1 &          (from the repo root)
//   node tools/qa/frames.js [base-url] [out-dir] [--only=name] [--reduced] [--vp=desktop|phone]
//
// Writes <out-dir>/<name>-<vp>-<n>.jpg (JPEG q60, deviceScaleFactor 1) and prints console errors.
// Real time, not a fake clock: CIRO's motion runs on requestAnimationFrame and CSS animations, and
// both have to be caught at the same moment for the frames to mean anything.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const args = process.argv.slice(2);
const pos = args.filter((a) => !a.startsWith('--'));
const BASE = pos[0] || 'http://127.0.0.1:8793/';
const OUT = pos[1] || 'docs/research/animation';
const ONLY = (args.find((a) => a.startsWith('--only=')) || '').slice(7);
const ONLY_VP = (args.find((a) => a.startsWith('--vp=')) || '').slice(5);
const REDUCED = args.includes('--reduced');
const VIEWPORTS = { desktop: { width: 1280, height: 900 }, phone: { width: 390, height: 844 } };

const partial = { precourse_complete: true, badge_system_online: true, mod1_complete: true, badge_boot_sequence: true };
const all = {};
['precourse', 'mod1', 'mod2', 'mod3', 'mod4', 'mod5', 'mod6'].forEach((k) => (all[k + '_complete'] = true));
const base = { nexus_intro_seen_operator: 'true', nexus_current_operator: 'operator' };
const STATES = {
  fresh: {},
  firstHub: base,
  returning: { ...base, nexus_hub_visited_operator: 'true', nexus_operator: JSON.stringify(partial) },
  allDone: { ...base, nexus_hub_visited_operator: 'true', nexus_operator: JSON.stringify(all) },
  finished: { ...base, nexus_hub_visited_operator: 'true', nexus_operator: JSON.stringify(all), nexus_machine_activated: 'true' },
};

// times are ms after DOMContentLoaded. `steps` entries can be numbers (shoot at that time) or
// {click: selector, at: ms} / {waitFor: selector} actions; `clip` limits the shot to a region.
const SPECS = [
  { name: 'ciro-intro', url: 'ciro-intro.html', state: 'fresh', steps: [
    300, { click: '#power-btn', at: 600 }, 900, 1500, 4600, 9500, 17500, 24000,
    { waitFor: '#nexus-btn.visible' }, { click: '#nexus-btn' }, 'rel:700', 'rel:5200'] },
  { name: 'hub-first', url: 'hub.html', state: 'firstHub', steps: [300, 1500, 1900, 2400, 3200, 6000, 9500, 13500] },
  { name: 'hub-return', url: 'hub.html', state: 'returning', steps: [150, 450, 800, 1200, 1700, 2600, 4200, 7000] },
  { name: 'precourse-intro', url: 'pre-course/module-intro.html', state: 'returning', steps: [250, 600, 1000, 1400, 1900, 2600, 3400, 7000] },
  { name: 'module-intro', url: 'module-2/intro.html', state: 'returning', steps: [250, 600, 1000, 1400, 1900, 2600, 3400, 9000] },
  { name: 'complete', url: 'module-2/complete.html', state: 'returning', steps: [300, 900, 1400, 1800, 2300, 3000, 6000, 12000] },
  { name: 'complete-final', url: 'module-6/complete.html?dev', state: 'finished', steps: [1400, 1800, 2300, 6000, 14000, 17000, 22000, 30000] },
  { name: 'machine-input', url: 'machine/input.html', state: 'allDone', steps: [200, 600, 1200, 2500, 4000] },
  { name: 'machine-activated', url: 'machine/activated.html', state: 'allDone', steps: [1500, 6000, 12000, 18000, 21000, 24000, 30000, 45000] },
  { name: 'machine-final', url: 'machine/activated.html', state: 'finished', steps: [300, 1200, 3000] },
  { name: 'vault', url: 'bonus/vault.html', state: 'returning', steps: [150, 450, 800, 1200, 1800, 2600, 4000, 6500] },
  { name: '404', url: '404.html', state: 'returning', steps: [150, 600, 1000, 1400, 1900, 2600, 3600, 6000] },
  { name: 'transition', url: 'bonus/vault.html', state: 'returning', transit: true, steps: [100, 450, 800, 1200, 1600, 2000, 2400, 2800] },
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  let errors = 0;
  for (const spec of SPECS) {
    if (ONLY && !spec.name.includes(ONLY)) continue;
    for (const vp of Object.keys(VIEWPORTS)) {
      if (ONLY_VP && vp !== ONLY_VP) continue;
      const ctx = await browser.newContext({ viewport: VIEWPORTS[vp], deviceScaleFactor: 1, reducedMotion: REDUCED ? 'reduce' : 'no-preference' });
      const page = await ctx.newPage();
      const seed = STATES[spec.state];
      await page.addInitScript(`try{if(!sessionStorage.__s){sessionStorage.__s=1;localStorage.clear();const s=${JSON.stringify(seed)};for(const k in s)localStorage.setItem(k,s[k]);}}catch(e){}`);
      page.on('console', (m) => { if (m.type() === 'error' && !/fonts\.g|youtube|ERR_|Failed to load resource/.test(m.text())) { errors++; console.log(`  [${spec.name}/${vp}] console.error: ${m.text().slice(0, 200)}`); } });
      page.on('pageerror', (e) => { errors++; console.log(`  [${spec.name}/${vp}] pageerror: ${e.message.slice(0, 200)}`); });
      await page.goto(BASE + spec.url, { waitUntil: 'domcontentloaded' });
      const t0 = Date.now();
      let n = 0, last = 0;
      const shoot = async () => {
        const f = path.join(OUT, `${spec.name}${REDUCED ? '-reduced' : ''}-${vp}-${++n}.jpg`);
        await page.screenshot({ path: f, type: 'jpeg', quality: 60 });
      };
      for (const st of spec.steps) {
        if (typeof st === 'number' || (typeof st === 'string' && st.startsWith('rel:'))) {
          const target = typeof st === 'number' ? st : last + Number(st.slice(4));
          const now = Date.now() - t0;
          if (target > now) await page.waitForTimeout(target - now);
          if (spec.transit && n === 0) await page.evaluate(() => window.nxTransit && window.nxTransit('../hub.html', true));
          await shoot();
          last = Date.now() - t0;
        } else if (st.click) {
          const now = Date.now() - t0;
          if (st.at && st.at > now) await page.waitForTimeout(st.at - now);
          await page.click(st.click).catch(() => {});
          last = Date.now() - t0;
        } else if (st.waitFor) {
          await page.waitForSelector(st.waitFor, { timeout: 60000 }).catch(() => {});
          await page.waitForTimeout(900);
          last = Date.now() - t0;
        }
      }
      console.log(`${spec.name}/${vp}: ${n} frames`);
      await ctx.close();
    }
  }
  await browser.close();
  console.log(errors ? `${errors} console/page errors` : 'no console or page errors');
})();
