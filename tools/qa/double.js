#!/usr/bin/env node
// Press Enter twice on a transit link and count transition sounds started (should be 1).
//   node tools/qa/double.js [base-url]
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const BASE = process.argv[2] || 'http://127.0.0.1:8791/';
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext()).newPage();
  await p.addInitScript(`try{localStorage.setItem('nexus_intro_seen_operator','true');localStorage.setItem('nexus_hub_visited_operator','true');localStorage.setItem('nexus_operator',JSON.stringify({precourse_complete:true,mod1_complete:true}));}catch(e){}`);
  await p.addInitScript(fs.readFileSync(path.join(__dirname, 'probe.js'), 'utf8'));
  await p.goto(BASE + 'module-2/challenge.html');
  await p.waitForTimeout(800);
  await p.focus('.nav-back');
  await p.keyboard.press('Enter');
  await p.keyboard.press('Enter');
  await p.waitForTimeout(300);
  const n = await p.evaluate(() => window.__qa.plays.filter((x) => /transition-\d/.test(x.src)).length);
  console.log('transition sounds started by a double Enter:', n);
  await b.close();
  process.exit(n > 1 ? 1 : 0);
})();
