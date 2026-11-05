#!/usr/bin/env node
// Screenshot one page at given (fake-clock) times, for before/after visual comparison.
//   node tools/qa/snap.js <base-url> <page> <state> <outPrefix> <vp:desktop|phone> <ms,ms,...> [click-selector@ms]
// state is one of the audit.js seeds: fresh | firstHub | returning | finished
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const [base, pg, state, out, vp, times, click] = process.argv.slice(2);
const partial = { precourse_complete: true, badge_system_online: true, mod1_complete: true, badge_boot_sequence: true };
const all = {}; ['precourse', 'mod1', 'mod2', 'mod3', 'mod4', 'mod5', 'mod6'].forEach((k) => (all[k + '_complete'] = true));
const seeds = {
  fresh: {},
  firstHub: { nexus_intro_seen_operator: 'true' },
  returning: { nexus_intro_seen_operator: 'true', nexus_hub_visited_operator: 'true', nexus_operator: JSON.stringify(partial) },
  finished: { nexus_intro_seen_operator: 'true', nexus_hub_visited_operator: 'true', nexus_operator: JSON.stringify(all), nexus_machine_activated: 'true' },
};
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: vp === 'phone' ? { width: 390, height: 844 } : { width: 1280, height: 900 }, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  await p.addInitScript(`try{if(!sessionStorage.__s){sessionStorage.__s=1;localStorage.clear();const s=${JSON.stringify(seeds[state] || {})};for(const k in s)localStorage.setItem(k,s[k]);}}catch(e){}`);
  await p.clock.install();
  await p.goto(base + pg, { waitUntil: 'load' });
  await p.evaluate(() => document.fonts.ready);
  let t = 0;
  const [csel, cms] = click ? click.split('@') : [];
  for (const ms of times.split(',').map(Number)) {
    if (csel && t < +cms && ms >= +cms) { await p.clock.runFor(+cms - t); t = +cms; await p.click(csel); }
    await p.clock.runFor(ms - t); t = ms;
    await p.waitForTimeout(900); // let real-time CSS transitions settle
    const f = out + '-' + ms + '.png';
    fs.mkdirSync(path.dirname(f), { recursive: true });
    await p.screenshot({ path: f, fullPage: true });
    console.log(f);
  }
  await b.close();
})();
