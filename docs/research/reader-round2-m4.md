# Opus reader report, round 2: lessons 4.1 (re-check), 4.2, 4.4, 4.5 (2026-11-05)

Read in full: `4.1_yTy8WV3Y9Nk`, `4.2_J0h3yuCnXqk`, `4.2_qPG5zQCSlTs`, `4.4_4hc5Z_QBno4`, `4.5_F-DARGKRKdQ`, `4.5_b8SV4U6fEIc`. Re-read for comparison: the round 1 transcript of `8c6JZ18W0Bo`, and the folder sections of `7zZy1QTvokM` (the 6.4 pick). Lessons 4-1, 4-2, 4-4, 4-5 and the mod4 challenge.

## Bottom line

| Lesson | Pick | Play | Score |
|---|---|---|---|
| 4.1 Chat Answers. Code Acts. | **Keep** `8c6JZ18W0Bo`, Nick Saraev | 0:24–1:58 | 6/10. Mstimaj is cleaner on the folder step, but he does more for 4.4, and the cap on lessons per creator applies |
| 4.2 Folders Are Memory | `qPG5zQCSlTs`, signalstack (other angle, weak) | 0:00–0:55 | 4/10. Dylan's video is about agents (instructions + connectors + trigger), not folder memory. It belongs in Module 6 |
| 4.4 Build Something Real | **`yTy8WV3Y9Nk`, Mstimaj** (moved from 4.1) | 1:44–6:07 | 7/10. Plan mode, the question panel, the plan with reasons, then Reject / Revise / Accept and a build that ticks itself off. `4hc5Z_QBno4` fails (2/10) |
| 4.5 Sessions, Permissions, Safety | `F-DARGKRKdQ`, Dylan Davis (other angle) | 7:01–10:51 | 7/10. Fallback: `b8SV4U6fEIc` 0:00–3:31 (5/10) |

**Creator load.** Dylan would hold 5.2 + 4.5. His 4.2 video should not be used for 4.2 in any case, because the fallback fits better. His 4.5 video beats the official fallback by a clear but not decisive margin (7 vs 5). If the Module 6 reader needs Dylan for two of 6.1–6.3, give 4.5 to the official clip and lose little. `J0h3yuCnXqk` is a strong **Module 6** candidate (see 4.2). Mstimaj would hold 4.4, plus 0.2 if `N890AspWgEw` is picked. That is two lessons, which is why 4.1 stays with Nick.

**Flags the lead must check before anything ships (details per lesson):**
1. **Does Chat now work on local folders?** `4hc5Z_QBno4` (Nov 1) shows "add folder" with read/write, per-folder instructions and a Manual / Auto / "Skip all approvals" selector. Dylan says the mode selector is the same "in Claude chat, co-work, Claude code". If Chat can edit local files, 4.1's premise ("Chat can't change files, Code can", which is also Nick's line) needs rewording.
2. **Is Auto now the default for new sessions?** Dylan, Oct 24: "in roughly a week or two, this is going to default to auto". Every Module 4 task assumes Manual, so 4.1 must tell the learner to switch.
3. **Folder button label.** Nick (Nov 1): "click on local, then open folder". Mstimaj (Nov 4): a button that says "this computer", then "choose this computer". The lesson text must match the app.
4. **What Manual prompts for.** Mstimaj: Manual "asks before every change **except edits**". Nick: "ask you every time it wants to make a change". The official video says file edits inside the project skip the auto-mode classifier. 4.1 step 5 ("Approve the permission prompt") depends on the answer.
5. **Deletes.** TechBrothersIT: "whatever the mode, Claude needs your explicit permission before it permanently deletes any file." Dylan agrees for Auto. Verify. If it is true, it is the strongest reassuring sentence in 4.5.

---

## 4.1 Chat Answers. Code Acts. (re-check)

### yTy8WV3Y9Nk, Mstimaj "How to Build a Website With Claude Code Desktop App" (7:14, 2026-11-04)
- 0:00–0:24 Hook: "you do not need to know how to build a website… describe the thing it is for." Code "is not a separate program… a tab at the top left."
- 0:27–0:51 The app opens on Chat ("greets you by name"). "Most people never leave it." Code tab: "the greeting is gone… It says new session and it asks you to describe a task."
- 0:53–1:43 New session → the **"this computer"** button at the bottom of the box → folder picker. "Remember the folder we made together, the education center?" is **a series reference**. Make a subfolder for the job. "Whatever gets built lands in there as real files on your own machine." The folder name beside "this computer" "is how you know it is pointed at the right place."
- 1:44–2:06 The mode selector "beside the model name at the bottom right": Auto, **Manual "asks before every change except edits"** (**conflicts with Nick, flag**), Plan, "which is the one we want."
- 2:06–2:53 One plain sentence about the thing, plus "ask it to go and find out what websites for places like yours already have… the difference between a guess and a design." Brand colours, or let it choose.
- 2:53–3:41 It reads the empty folder, searches the web, says how many pages it read, and returns a list of findings.
- 3:41–4:31 **Question panel**: a counter, a recommended answer pre-selected, other choices, "other" as a free box, then Skip/Next. "The questions a designer would ask you in a first meeting."
- 4:32–5:25 **The plan**: an ordered list with "why" beside each item. **Reject / Revise / Accept.** "Nothing has been written into your folder… the cheapest no you will ever get."
- 5:25–6:07 Accept: the plan turns into a checklist with a timer, and the site appears in a browser pane. The last item is "check it… on a desktop and on a phone." "Go and make a coffee" (**unclear what mode it builds in after Accept, flag**). A real site in your folder.
- 6:07–6:53 Website-specific: Code places pictures but doesn't make them (own photos, stock, or placeholders). "This website is not live."
- 6:53–end Recap. "Subscribe. No permission required." Band sting.
- No terminal, no ads, post-rebuild, calm. The voice may be synthetic, and the 0.2 search found the channel has under 50 views per video.

### Comparison with the current pick 8c6JZ18W0Bo 0:24–1:58
| | Nick 0:24–1:58 | Mstimaj 0:24–1:43 |
|---|---|---|
| Chat vs Code difference | Stated: "can't actually change any of your files. Claude Code can." | Implied only ("most people never leave it") |
| Folder step | One line: "local, then open folder" | Slow and careful, with a confirmation cue |
| How to ask | "describe the outcome and not the steps"; stop button; type a correction | None in clip |
| Modes | Manual / Plan / Auto with risk ("deleting files"); clip ends just before "I recommend… auto" | Outside the clip |
| Noise | Hook cut; agency funnel in description only | Series reference ("the education center") |

**Verdict: keep Nick.** Mstimaj is the better folder walkthrough, but Nick's clip carries the lesson's two ideas: Code changes files where Chat doesn't, and you ask for an outcome. Mstimaj's real value is the plan-mode sequence, which is 4.4 material. Using his video for 4.1 too would either cost 0.2 its only post-rebuild tour or break the two-lesson cap. If 0.2 does not take `N890AspWgEw`, 4.1 could switch to `yTy8WV3Y9Nk` 0:24–1:43 (6/10), with the brief adding the Chat/Code line and "describe the outcome".

**Pick: `8c6JZ18W0Bo` 0:24–1:58 (unchanged).**
- video_note: "Stop at the modes: in this module set the selector to Manual, not Auto, so you see every step before it happens."
- video_credit: "The World's Shortest Claude Code Course, by Nick Saraev". The title is from the round 1 metadata, not verified here. Check the exact YouTube title.

**Make the learner DO / Brief must not repeat / add:** unchanged from `reader-modules3-4.md`. One addition to "Brief must add": a short explanation of how to tell you're pointed at the right folder (its name shows next to the folder button). Mstimaj shows this well and Nick skips it.

**Facts to check:** flags 1–4 above. Also Windows and Git (still open from round 1).

---

## 4.2 Folders Are Memory

### J0h3yuCnXqk, Dylan Davis "An AI Agent Is Just a Folder With 3 Things Inside It" (11:37, 2026-07-08, pre-rebuild)
- 0:00–0:36 Hook: 200 definitions of agent; "a folder with three things… already inside… ChatGPT and Claude."
- 0:36–1:47 Chatbot answers, agent does work. Example: an overdue-invoice agent that pulls, ranks and drafts nudges.
- 1:49–2:13 The three things: **instructions (prompt or skill), connections, trigger**.
- **2:15–2:36 self-plug** (30-day series, "work with me").
- 2:37–3:11 Where it lives: Project or skill in the browser; a folder in "Claude co-work or Codex". **Cowork and Codex, not Code.**
- 3:17–4:11 Instructions: the invoice prompt; "my tone of voice… could be a skill" (**pre-empts 5.1**).
- 4:12–4:47 Connections, with read vs write per system: "draft them, not send them" (**repeats 3.1**).
- 4:50–6:11 Triggers: manual (a scheduled task set to manual, "run now"), time, event; start manual (**pre-empts 5.3, 6.2**).
- 6:12–7:28 "Two free parts": the model, and memory. "Have the AI write to files… an insights file… compounds over time." **This is the only folder-as-memory minute.** It also says "I've created multiple videos on this". ChatGPT memory aside.
- 7:28–8:24 Human in the loop for legal, financial or reputational risk; draft, review, send.
- 8:24–10:02 When to build one: "similar shape" each time, and frequency (**this is 6.1**).
- 10:04–10:59 Recap. **10:59–11:16 plug.** End card.
- No terminal, no UI shown in the transcript. Mostly about ChatGPT, Cowork and Codex.

**Fit for 4.2: poor.** His folder holds instructions, connectors and a trigger. It does not hold ABOUT-ME, reference and output. Mapping it onto 4.2 would need agent vocabulary to dominate, and it would pre-empt 3.x, 5.1, 5.3, 6.1 and 6.2. **Score for 4.2: 3/10.**
**For the Module 6 reader:** this is a strong candidate for **6.2** (1:49–6:11: skill + connectors + trigger, with "start manual") and for **6.1** (8:24–10:02: similar shape + frequency). His 4.2 video is weak for 4.2 and good for Module 6, so spending his 4.2 slot here would waste him.

### qPG5zQCSlTs, signalstack "I built a second brain with Claude Code" (3:52, 2026-04-17, pre-rebuild)
- 0:00–0:19 Hook: "Everyone's using AI wrong… a week later, it's gone… memory of a goldfish." Hype, but on point.
- 0:19–0:55 "It's not an AI problem, it's a storage problem." Three reasons: storage is scattered, nothing carries over between chats ("you re-explain your business… every single time"), and you do the copying. "A real second brain stores once, remembers forever, and works on your actual data." **This is exactly 4.2's thesis.**
- 0:55–1:51 The stack: Obsidian, Claude Code as an "**command line tool**" (**terminal framing**), sub-agents (**advanced, pre-empts Module 6**).
- 1:51–3:01 Named sub-agents (Alfred, Scribe, Atlas, Ledger) sharing one vault. "The content engine… generated the voiceover you're hearing" means the **narration is AI-generated**.
- 3:03–3:34 Minimum version: pick a vault, "**install Claude code. Free tier gets you started**" (**false**: Claude Code needs a paid plan, as 4.1 says), one instruction file: "who you are, what you work on, how you want it to talk" (= ABOUT-ME).
- 3:34–end Grow sub-agents from repeated patterns. "Starter template… links in the description" (**lead magnet plug**).

**Score for 4.2: 4/10 for 0:00–0:55.** It is a motivating problem statement and not a demo. Everything after 0:55 is terminal, Obsidian or sub-agents, or wrong.

### Pick: `qPG5zQCSlTs` 0:00–0:55 (other angle)
- **Reframe:** the lesson opens on "the storage problem". Every chat starts from zero because nothing is stored where Claude can read it. The folder is the fix: store it once, as files, and Claude reads it every time. ABOUT-ME, reference and output are the "store once" made concrete.
- video_note: "Under a minute on why AI forgets you. The fix he describes is the folder you build in this lesson; you don't need Obsidian or anything else he mentions later."
- video_credit: "I built a second brain with Claude Code, by signalstack"
- Honest caveat: this is the weakest pick in the module. Re-search ~2026-12-01 for a desktop Code-tab folder-setup demo. Untried ids from the gap search are `lTd3DwajYks` and `jn4foPHM62Q` ("step by step from an empty folder", 9:41).

**Make the learner DO:**
- Before the interview, write down the three things you re-explain most often in Chat (your role, your clients or projects, your tone). Then check that ABOUT-ME.md captured all three.
- Do the "scattered storage" fix literally: put copies of the three files you attach most often into the reference folder, and have Claude write REFERENCE.md.
- Ask Claude to save one thing it makes into the output folder. In a new session, ask "What did we make last time, and where is it?"
- Memory test in a fresh session: "Who am I and what do I do?" and "Which reference file would you use to write a client email?" Both should be answered from files.
- Delete nothing. Notice that everything Claude "knows" is now a file you can open and edit yourself.

**Brief must not repeat:** "every new chat starts from zero / you re-explain yourself"; "store once"; "scattered storage".
**Brief must add:**
- A plain folder in the Code tab is the whole system: no Obsidian, Notion export, sub-agents or command line.
- The ABOUT-ME/reference/working/output layout.
- Your job is deciding what belongs.
- **Important for 4.3:** the step-5 test works because Claude looks through the folder when you ask. It does not read ABOUT-ME automatically at the start of a session. That is what the instructions file in 4.3 is for. Say so in one line and leave the rest to 4.3.

**Overlaps:** the 6.4 pick (`7zZy1QTvokM` 10:15–10:37, "LLM knowledge base… folder system") restates 4.2 at a more advanced level, which is fine. Nick's 4.1 video describes CLAUDE.md as "memory" (2:24, outside the 4.1 clip). Keep "memory" meaning folder files in 4.2 and the auto-read file in 4.3.

**Facts to check:** none UI-specific. The video's "free tier" claim is outside the clip.

---

## 4.4 Build Something Real

### 4hc5Z_QBno4, TechBrothersIT "Claude Desktop App: Work with Files & Folders on Your Computer" (2:33, 2026-11-01)
- 0:01–0:16 Intro. 0:19–0:34 Install (macOS 11+, Windows 10+). 0:35 "Working with local folders needs a paid plan."
- 0:43–1:03 "In the desktop app, click **add folder**." Read and write directly. "**Give the folder its own instructions**."
- 1:05–1:27 The file job: "rename every invoice… to date, vendor, and amount, then build a summary spreadsheet." Narrated, not shown step by step. Other ideas: downloads, meeting notes → report, files → deck.
- 1:31–1:55 Mode selector: **Manual / Auto / "Skip all approvals"**. "Whatever the mode, Claude needs your explicit permission before it permanently deletes any file."
- 1:56–2:14 "Keep the desktop app open… while Claude works with your local files, your browser or computer use." Settings → Extensions.
- 2:15–end Recap, subscribe, next video on the built-in browser.

**Code tab or Chat?** Almost certainly **Chat's folder access**, not the Code tab. It never says "Code". It uses "add folder" rather than Code's folder button, offers per-folder instructions, uses a third mode named "Skip all approvals" where Code has Plan, and groups local files with "your browser or computer use" and desktop extensions (Chat-side features). It is a template-style channel that posts several narrated videos a day, and it demonstrates nothing. **Score: 2/10. Not usable.** It carries two facts for the lead (flags 1 and 5).

### Pick: `yTy8WV3Y9Nk` 1:44–6:07 (Mstimaj, read above under 4.1), other angle
- **Reframe:** 4.4's one new habit is "ask for it in steps: plan, simplest version, improve". The video shows the app's built-in way to do that: Plan mode, a question panel, a plan with reasons, and Reject / Revise / Accept before anything is written. The lesson's "first, show me a plan" prompt becomes "switch to Plan, describe the thing in one sentence, answer its questions, revise the plan, then accept."
- The example is a website. The brief says a page, a spreadsheet tool or a tidy-up script works the same way.
- video_note: "He builds a website; you'll build something from your own list. Watch the order: Plan mode, its questions, the plan with reasons, then Revise until it's right, and only then Accept."
- video_credit: "How to Build a Website With Claude Code Desktop App, by Mstimaj"
- Score 7/10: post-rebuild, Code tab, no terminal, no plugs, and the only video found that shows the plan-first loop in the desktop app.

**Make the learner DO:**
- Switch the mode selector to **Plan** before describing the thing. Afterwards, switch back to Manual (Module 4 rule; see flag below).
- Add his "do the research first" line to the request when it fits: "First look at what [tools/pages] like this usually include."
- Answer the question panel properly. Use "Other" at least once to give an answer it didn't offer.
- Read the plan's "why" column and press **Revise** at least once with a concrete cut ("drop X, I'll never use it"). Accept only when you would sign it.
- After the build, open the file from Finder/Explorer, not just the in-app preview. Then do the lesson's three rounds of notes and the "break it, say fix it" step, which the video doesn't cover.

**Brief must not repeat:** what Plan mode is; the question panel; Reject / Revise / Accept; "the cheapest no"; "describe the thing in one plain sentence".
**Brief must add:**
- The examples beyond websites.
- "Simplest version first", which the video doesn't say: he accepts a full plan.
- The three rounds of notes.
- "Paste the error and say fix it."
- How Plan relates to Manual. Plan is for deciding; after Accept, check which mode it builds in.
- A built page is a local file, not live. Publishing is out of scope.

**Overlaps:** none with 4.3 or Module 5. The 1:44–2:06 mode list repeats the end of Nick's 4.1 clip, which reinforces it. The web-research step makes Claude fetch pages, so expect permission prompts in Manual.

**Facts to check:**
- After Accept in Plan mode, does the build run without prompts (Auto / accept-edits) or under the previous mode?
- Is Manual's "except edits" true? (flag 4)
- Is the question panel and the Reject / Revise / Accept trio still the current UI?

**Fallback if the lead rejects Mstimaj:** none among the transcripts read. `TvLgqLRWnho` (receipts → expenses.csv, 8:18 on) teaches 4.4's job best but is terminal throughout. `P7-0grEB7nk` builds a tool in the old UI. Either way the lesson would carry a known-outdated video. Re-run the 4.4 search when the quota resets.

---

## 4.5 Sessions, Permissions, Safety

### F-DARGKRKdQ, Dylan Davis "I Stopped Clicking Approve in Claude. It Got Safer" (12:05, 2026-10-24, post-rebuild)
- 0:00–0:37 Auto becomes the default "starting next week". Auto can also skip the per-connector "always ask" setting. Promises "one setting that still holds and two easy habits."
- 0:37–1:36 The Auto/Manual selector "at the bottom of the chat box… Claude chat, Claude co-work, Claude code, all the same thing" (**check: in Chat too?**). It defaults to Manual now and to Auto "in roughly a week or two" (**flag 2**). "ChatGPT is fast following."
- 1:37–2:23 Auto approves safe actions and stops for unsafe ones, e.g. "delete something permanently". Two sets of permissions: the mode, and connector permissions.
- 2:23–2:47 "Why this is better than humans", setup.
- **2:47–3:07 self-plug.**
- 3:08–4:51 Anthropic studies: humans flagged unsafe actions 14% of the time vs AI 89%; humans click allow 95% of the time; people push back on 39% of plans but 3% of steps. "Focus on… before the AI starts and after it finishes." (**Numbers unverified. The official video says 97% approved.**)
- 4:51–7:00 Desktop demo: **+ → Connectors → Manage connectors → Gmail → Tool permissions**, read vs write, with always allow / needs approval / blocked, and Gmail send blocked (**repeats 3.1's task**). **Key nuance (6:38–7:00): in Auto, a "needs approval" connector action is decided by the AI and no longer guaranteed to prompt.** That matters for 3.1 and 5.3's draft-first rule.
- 7:01–7:39 Fix 1: block or require approval for send, delete and public share. "Don't be too strict."
- 7:40–9:05 Fix 2: a **golden copy**. The AI works on a copy until it has proven itself, then you merge back. Version history and trash in Drive/OneDrive/SharePoint (**not git**). "Claude CoWork… has access to all your files on your computer" (**Cowork, not Code. Code sees only the opened folder**). "These mistakes very rarely happen."
- 9:06–9:58 Fix 3: the review prompt: "**I didn't watch your work. I have 2 minutes to check this before I rely on it. Tell me what I need to look at most important first**… anything you changed or sent outside this chat and where to find it, anything you assumed instead of checked, anything you didn't finish. Leave out what's fine."
- 9:58–10:51 When to still use Manual: "5% or 10%" of tasks, for money, for "a file that doesn't have a backup", and "**really just for learning**… connecting an AI to a new system… and you just want to see what it can do."
- 10:51–11:40 Recap. **11:40–end plug**, end card.
- No terminal. Desktop app shown.

### b8SV4U6fEIc, Claude official "How auto mode works with Claude Code" (5:42, 2026-08-04, pre-rebuild)
- 0:00–0:25 "97% of permission prompts… get approved." **Approval fatigue** named.
- 0:25–0:48 Auto mode is introduced.
- 0:49–2:02 A separate **classifier** sees your messages and Claude's tool calls but not Claude's reasoning, and approves actions that match your intent. Examples use developer jargon ("pull request", "deleting remote branches", "force push to main"). Repeated denials make it pause and ask you.
- 2:03–2:46 A probe scans what Claude reads for hidden instructions (prompt injection). "Attack success rate… dropped to zero" in evals.
- 2:46–3:31 Rules first, then a tier check. "Read-only or recoverable" actions, "**editing files in your project**", skip the classifier. Shell commands, web fetches and anything outside go through it.
- 3:32–4:47 **Admin/developer configuration** (managed settings, environment field, soft and hard deny). Not for this audience.
- 4:48–5:18 Recap.
- 5:18–5:32 "**Start narrow. Watch what gets denied and then widen it from there.** For high-stakes operations… review Claude's actions yourself."
- 5:32–end Blog link.
- Terminal and developer framing in vocabulary, but no commands are spoken. The settings files from 3:32 are likely on screen.

**Scores for 4.5:** Dylan 7:01–10:51, **7/10**: concrete habits a non-coder can act on, and his own "Manual is for learning" supports the course's Manual-first rule. Official 0:00–3:31, **5/10**: accurate and plug-free, but pure mechanism with dev examples and no habits. Dylan's edge over the fallback is clear but not large. If Module 6 needs him twice, use the official clip.

### Pick: `F-DARGKRKdQ` 7:01–10:51 (other angle)
- **Reframe:** the lesson's permissions section becomes "safe habits first, lighter mode later". Work on copies, have an undo, and ask for a 2-minute review at the end. In his words, Manual is for learning and for files without a backup, which describes this module exactly. Auto is where you go once those habits are in place.
- video_note: "He runs most work in Auto mode; he also says Manual is for learning a new system and for files with no backup. That's you, this module. Take his three habits: work on a copy, keep an undo, ask for a two-minute review."
- video_credit: "I Stopped Clicking Approve in Claude. It Got Safer, by Dylan Davis"
- The clip starts "So, now that you understand the two categories of permissions". The brief must name them first: the mode selector (Manual/Plan/Auto) and each connector's tool permissions (from 3.1).
- Longer alternative, if the lead wants the approval-fatigue argument from the video itself: 3:08–10:51 (7:43). It adds the study numbers and the connector demo, which repeats 3.1 but includes the Auto nuance at 6:38.
- **Fallback:** `b8SV4U6fEIc` 0:00–3:31. Caption: "Skip the developer examples; the point is that people approve almost every prompt without reading, so we build habits that don't depend on reading every prompt. In this module, stay in Manual." Credit: "How auto mode works with Claude Code, by Claude".

**Make the learner DO:**
- **Golden copy:** confirm the workspace holds copies only. Make one "golden" original outside the folder for anything Claude edits in the challenge.
- **Undo:** the lesson's git setup is the version history he describes for Drive/OneDrive. Test it with the "test line" step.
- **2-minute review:** after any task, paste his prompt. Then add it to CLAUDE.md as a closing rule: "At the end of any task that changed files, tell me what to check first…"
- **Look at both permission layers:** confirm the mode selector says Manual, then open one connector's tool permissions and confirm send/delete are Needs approval or Blocked. Know that Auto would override "Needs approval".
- Keep the lesson's handoff and "two failed tries, stop" steps. The video doesn't cover sessions.

**Brief must not repeat:** golden copy; "version history / trash can undo"; the review prompt itself; "Manual for learning or no backup".
**Brief must add:**
- Sessions and HANDOFF.md. The video doesn't cover them. Keep this short, because the 5.2 pick (`xaQG-eD9d58`) covers handoffs in depth: don't pre-empt it.
- That git is how a plain folder gets the version history Drive gives for free.
- Scope: Code sees only the opened folder, unlike his Cowork remark.
- One sentence on approval fatigue, if the shorter clip is used: people approve 9 in 10 prompts without reading, so habits beat vigilance.
- When to move to Auto: after Module 4, once the copy/undo/review habits are in place.
- Never approve deletes or edits to originals.

**Overlaps:** the connector-permission demo (4:51–7:00) repeats 3.1, which is why it's outside the pick. The review prompt is close to 6.3's "check the output" habit, and fine to plant early. The handoff belongs to 5.2.

**Facts to check:**
- Flag 2: Auto as default, and when.
- Whether the mode selector also exists in Chat.
- Flag 5: deletes always ask.
- Whether Auto overrides a connector's "Needs approval" (Dylan 6:38–7:00). If yes, 3.1 and 5.3 must say "Blocked" for send, not "Needs approval", whenever Auto is on.
- Dylan's study figures (14/89/95/39/3) vs the official 97%. Quote neither in the brief unless sourced to Anthropic's blog.
- Where the learner reviews or revokes Code-tab permissions (task step 4 assumes a list exists).
