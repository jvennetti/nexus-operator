# Gap search: Modules 4 to 6 (4.2, 4.5, 6.1, 6.2, 6.3)

Run 2026-11-05. The lead ruled that no lesson stays text-only. 4.1 and 4.4 were covered by another agent. Ids already scored in `video-research-results.md` were not re-scored. The one overlap found was `omihvjf0A2k`, and it was skipped.

**How candidates were found.** The YouTube Data API `search` endpoint returned HTTP 429 ("Search Queries per day" quota exhausted) on the first query. Only the `videoDuration=short` half of 4.2's first query got through. After that, as the coordinator directed, ids came from two other places:
- **WS:** WebSearch restricted to youtube.com. The 11-character ids were taken from result URLs.
- **CH:** uploads listings via the API's `channels` and `playlistItems` endpoints. The channels listed were Claude (official), Dylan Davis, Mstimaj, Nick Saraev, Kevin Stratvert and Teacher's Tech. The `@tristenobrien` and Web Technology Institute handles did not resolve.

All metadata came from the API `videos` endpoint, and all comments from `commentThreads` (order=relevance, maxResults=25). No youtube.com page was fetched. Each id below is tagged with its source: (API), (WS) or (CH).

**Scoring.** Same method as `video-research-results.md`:
- The tally is keyword-based (+praise / −complaint), with the creator's own comments counted, and every section was read by eye.
- Meat per minute is scored from title, chapters, description and comments. It is not a transcript score.
- No transcripts were read.

## Summary

| Lesson | Best candidate | Second candidate | Verdict | Why |
|---|---|---|---|---|
| 4.2 Folders Are Memory | `J0h3yuCnXqk` "An AI Agent Is Just a Folder With 3 Things Inside It", Dylan Davis, 11:37, 2026-07-08 | `qPG5zQCSlTs` "I built a second brain with Claude Code", signalstack, 3:52, 2026-04-17 | **Other angle.** Reframe 4.2 as "a folder with three things in it is what Claude remembers": the video's three parts become ABOUT-ME, reference and output. Say once that the video calls this an "agent" and the course calls it a workspace. | No video teaches a non-technical workspace folder in the desktop app. Every "folder memory" video is Obsidian-centred, 15+ min and developer-paced, and their comments show non-coders getting stuck on git and plugins. Dylan is concept-only and tool-agnostic, from the same teacher as the 5.2 pick. |
| 4.5 Sessions, Permissions, Safety | `F-DARGKRKdQ` "I Stopped Clicking Approve in Claude. It Got Safer", Dylan Davis, 12:05, 2026-10-24 | `b8SV4U6fEIc` "How auto mode works with Claude Code", Claude (official), 5:42, 2026-08-04 | **Other angle.** Reframe the permissions section around approval fatigue: why clicking "allow" on autopilot is the real risk, and why the lesson's habits (read early prompts, version history first, never approve deletes or edits to originals) are the safe road to a lighter mode. | No desktop-app permissions, checkpoints and undo walkthrough exists with any evidence. Rewind and checkpoint content is all sub-minute Shorts or terminal, so it was dropped. Both picks are likely to argue *for* auto mode, which the brief has to frame. Official video: terminal/dev framing, but the concept (a classifier screens actions instead of you) transfers one-to-one. |
| 6.1 Choose Your Workflow | `vatOVZbumk0` "You're Automating Steps You Should Delete", Dylan Davis, 12:17, 2026-07-20 | `HMaja1AlwMo` "What Tasks Should I Automate with AI?", The Virtual Savvy, 9:53, 2026-08-27 | **Other angle.** Reframe 6.1 around "map it, then cut steps before you automate", which makes task step 3 ("is every step necessary?") the centre. | No video teaches input → steps → output → destination. Workflow-mapping videos are 23 to 47 min, enterprise or vendor demos, or have zero views. Dylan's "The process" chapter (3:04–10:23) is the closest teaching, but one of three comments calls it "abstract & vague". The second is topic-exact on choosing what to automate, but carries a cohort waitlist and has no comment evidence. |
| 6.2 Build It | `AAYy-cgA4Kg` "How To Automate Your Morning with Claude", Jeremiah Peoples, 7:49, 2026-05-28 | `IhhxRZDf2bo` "I Trained Claude to Work Exactly Like Me", Dylan Davis, 15:10, 2026-08-15 | **Other angle.** Watch one real recurring workflow built end to end in Claude Code, then build your own Version 1. The video's daily dashboard stands in for "your workflow". | No post-rebuild, non-technical build of "skill + connectors + schedule". The end-to-end official video (`eSP7PLTXNy8`) runs 22:04 and is about repos and PRs. Jeremiah shows the Claude Code UI, not the terminal (per a commenter), and builds a daily tool, but it predates the rebuild. |
| 6.3 Run It, Then Refine It | `fgrJVdD12PA` "ChatGPT & Claude Keep Repeating Mistakes You Already Fixed", Dylan Davis, 11:49, 2026-11-04 | `IhhxRZDf2bo` (as above) | **Close to exact on the core habit:** "every correction goes into the skill/file, not the output". The run-log and Version 2 parts stay in the brief. | The title is the lesson's core rule. It is two days old with three comments, so the evidence is thin. `IhhxRZDf2bo` is praised for "continuous improvement of skills" and could serve both 6.2 and 6.3 if the transcript confirms it. |

**Concentration risk:** four of the five best candidates are Dylan Davis, and so is the 5.2 pick (`xaQG-eD9d58`). His evidence is consistently thin: 3 to 8 comments per video, plus a strategy-call and coaching funnel in every description. He is non-technical and post-rebuild, which no one else here is. The lead should decide whether one creator carrying six lessons is acceptable.

**Overlap:** `Qta08CEKlnQ` (a handoff file fixes mid-task forgetting) covers the same HANDOFF.md idea as the 5.2 pick's 9:00 segment. Use it in 4.5 only if 5.2 changes.

---

## 4.2 Folders Are Memory

Outcome: a well-organised workspace folder is Claude Code's memory. That means files that persist, reference docs, naming, and "what's in this folder?" as the first question.

**Dropped:**
- Over 20 min: `XuRfik_tHd4` (23:32), `8V9tZwgjiRs` (71:53, 2025), `cwf2vEAigKA` (36:53), `rX6DLHlaOhU` (23:31), `r4nea7QCkfQ` (25:59).
- Cowork-centred: `qN1o36IlODA`, `ZnhSsgCbsM0`, `kpHMLjdglP4`, `yyl5BvLOWTs`.
- MCP-setup, 2025: `A9D8dyhE-Mo`.
- Shorts or under 2 min: `Uf_llIXqaAw` (1:54, 0 comments), `ZY7zzbjlGec`, `SSI216OV5p0`, `SpVgQ4m3m7s`, `ItK549rwUG8` (Zapier MCP plug).
- Genspark sponsor walkthrough, mainly an ad: `-8kiY5HV5Oo` (Kevin Stratvert).
- Low signal, not vetted:
  - `jn4foPHM62Q`: 9:41, "step by step from an empty folder", 0 comments. Watch list.
  - `Npchvg2cEKo`: 0 comments.
  - `zjrSoXtlunU`: mem0 sponsor.
  - `LP7bfT4vOlo`: Nick Saraev, 12:03, 174k views. Knowledge-base pipelines; Skool funnel.
  - `w5un2wibzYI`, `MRTrOyIDtJc`: Dylan Davis, 15:46 and 19:36. Same idea as the pick, but longer.
  - `KSfgkWJcsDc`: Mstimaj, terminal.
- Not relevant: `QlWolXd9sr0`, `SK7IFNO5rHk`.

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `J0h3yuCnXqk` (CH) | An AI Agent Is Just a Folder With 3 Things Inside It | Dylan Davis | 11:37 | 2026-07-08 | 6,209 | 242 | +2 / −0 of 7 | “Thanks, Dylan. You've made it easier to understand.” “I think you're dabbling between the fine lines of an Agent vs a Skill.” | **6** The title states the lesson's thesis: a folder holding instructions, context and outputs is what makes it work. Core chapter is 0:35–10:02. "Agent" framing needs a one-line reframe. Thin evidence. |
| `qPG5zQCSlTs` (WS) | I built a second brain with Claude Code | signalstack | 3:52 | 2026-04-17 | 10,032 | 370 | +8 / −1 of 11 | “Yes, great succinct video, but the actual starter template link is missing.” “Total gpt script. You can tell by all the "that's not x, that's y" after every sentence” | **5** Short and well liked: "notes that persist… memory". Concept, not a build. Possibly AI-scripted. Template link broken. |
| `lTd3DwajYks` (WS) | How I Set Up Obsidian with Claude Code | jaredrhod | 16:46 | 2026-07-23 | 21,949 | 533 | +17 / −2 of 25 | “Thank you for your intelligent, plain-spoken, approachable explanations.” “So this is the second video in a step by step series and it just starts by running the program without going over how to install it.” | **5** Best-loved comment section in the pool. But it's an Obsidian memory vault for an "agent", the second part of a series, and 17 min. One commenter: "why do u need obsidian when u can make Claude code create all the files in one folder". |
| `lnsExa1UbnM` (WS) | Build Your Second Brain With Claude Code, Karpathy's Method | AI for Work | 15:17 | 2026-04-06 | 21,425 | 317 | +3 / −0 of 9 | “Thanks for sharing, super clear explanation.” “What are use cases of using such systems?… seems pretty overengeniring comparing to tradditional ways” | **4** LLM wiki made of markdown files. Close idea, but Obsidian-based and 15 min. |
| `Y2rpFa43jTo` (WS) | Obsidian + Claude Code: The Second Brain Setup That Actually Works | Eric Tech | 17:09 | 2026-04-06 | 88,265 | 1,165 | +6 / −0 of 25 | “just a random guy that want to use second brain model and have no expiriance on coding… thats rly hard to actually understand” | **3** About half the comments are git or Obsidian sign-in trouble. Developer-paced; Skool funnel. |
| `gcefZCM1hjg` (WS) | I Connected Claude Code to Obsidian. Now It Runs My Whole Business. | Paul Borg | 9:23 | 2026-10-10 | 4,803 | 23 | +2 / −0 of 6 | “great stuff” “Sounds like the beginnings of AI-induced psychosis.” | **3** The description lists folder structure and "the file Claude reads first", which is on topic. No teaching signal in comments; 23 likes. |
| `-6pI70BwiSg` (API) | Claude Code Project Structure Explained — Every File and Folder You Need (2026) | Vamaze Tech | 2:45 | 2026-04-03 | 19,039 | 442 | +2 / −1 of 5 | “This is helpful for a finance guy ..” “There are 2 commands folders with different content in each” | **3** The `.claude/` config structure (developer), not a working folder. |
| `bCgJVG9cLCk` (API) | Claude Code File Management (6 🔑 Tips) | Charlie Automates | 2:55 | 2026-04-07 | 5,824 | 254 | +0 / −0 of 16 | All 16 comments read "AI Agent" (comment-to-get funnel). | **1** Comment-gated lead-gen funnel. |

Queries:
1. API `search` q="claude code organize files folder non technical", publishedAfter=2026-01-01. The `short` half returned 12 results; the `medium` half got 429.
2. WS "youtube Claude Code second brain markdown notes folder non-technical"
3. WS "youtube Claude Code obsidian vault memory folder"
4. WS "youtube Claude Code desktop app folder workspace organize files 2026"
5. CH uploads: Claude, Dylan Davis, Mstimaj, Nick Saraev, Kevin Stratvert, Teacher's Tech. These listings were shared across all lessons.

## 4.5 Sessions, Permissions, Safety

Outcome: permission modes, what to approve and what not to, new sessions and handoff, undo and version history.

Desktop vs terminal:
- `F-DARGKRKdQ`: unverified whether it's desktop or terminal. Dylan's audience is non-technical and it's post-rebuild.
- `b8SV4U6fEIc` and `xJQuF02NAK8`: terminal/dev framing. Permission and plan concepts transfer one-to-one, so a clip with no commands shown is acceptable.
- Rewind and checkpoints: every hit is a terminal Escape-Escape or `/rewind` Short. Nothing usable.

**Dropped:**
- Over 20 min: `-F_Z1E6G8n8` (31:58, git), `LpTMuRK8TkU` (84:28).
- Shorts or under 2 min: `b2WbSn43Isg` (0:58), `SKQbX9K-y90` (1:06), `Sb-Do_PdAcI` (0:54, tells you to allow Bypass), `o6PtAMG9bEY` (1:26, CLI SEO), `nyEQiy3udew` (1:33, "run without asking"), `rWaQSQEm_aY` (0:38), and the shorts `TGgNcKwch2Q`, `crf_PjHSF3M`, `D2YkzQso4oo`, `0YOHcH0VHlw`, `taJkknlRacU`, `D8h91y4VraY`, `pswbsDEx1k4`, `su7W3jZJFwQ`, `MSrLpoZRhHk`.
- 2025, third-party tools or Cursor: `uq4R6ZRfdmM`, `Kn58tTmPhqc`, `0nGwBAUFHMw`.
- Developer feature list: `BMG4c-QT8hI`.
- Low view counts, under 300: `vMRZlHC5uuQ`, `rzKCw6Tp37k`, `7JfMlF3J2ec`.
- Not returned by the `videos` endpoint (unavailable): `CT9xynq7WZM`.
- 0 comments, not vetted:
  - `9FX4OTs4wF8`: 6:30, all five modes, 279 views.
  - `b11OIjH-XUg`: Mstimaj, 1:22, plan mode with the four modes named "Auto, manual, accept edits, plan", 124 views. Watch list. Its naming matches the current app.
  - `uh6WJXKxKyI`: "Permissions Explained (Simply)", 7:48, 1 comment, which the API returned empty.

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `F-DARGKRKdQ` (CH) | I Stopped Clicking Approve in Claude. It Got Safer | Dylan Davis | 12:05 | 2026-10-24 | 4,890 | 75 | +2 / −0 of 5 | “This flips the usual advice on its head — most people assume more approvals always means safer. The idea that Claude checking its own steps catches things a tired human would wave through…” “My Claude and codex are in auto mode… yet Claude won't stop asking permisión for f-in everything” | **6** Post-rebuild, non-technical, and directly about the permission decision. Likely pro-auto, which conflicts with the brief's "earn your trust". Usable only with that framing. Transcript must confirm desktop and what it says about deletes. |
| `b8SV4U6fEIc` (CH) | How auto mode works with Claude Code | Claude | 5:42 | 2026-08-04 | 2,515,986 | 1,201 | +6 / −1 of 25 | “I always wondered why Claude Code started asking for fewer permissions after Auto Mode was released… Thanks for clearing that up!” “Yeah, but you didn't explain what the Classier actually is.” | **5** Official and short. Explains what screens actions when you don't. Dev and team configuration in the second half. Commenters joke about lost databases and stalled sessions. |
| `Qta08CEKlnQ` (CH) | ChatGPT & Claude Quietly Forget Mid-Task. One File Fixes It | Dylan Davis | 12:31 | 2026-10-19 | 8,369 | 173 | +1 / −0 of 4 | “This channel is close to #1 in being really helpful…” “How is this different from Instructions in a Claude Project? Also… account memory, and project memory?” | **5** Matches the brief's HANDOFF.md habit (sessions part only). Overlaps the 5.2 pick's handoff segment. |
| `xJQuF02NAK8` (CH) | The Explore → Plan → Code → Commit workflow in Claude Code | Claude | 3:12 | 2026-05-17 | 528,764 | 3,325 | +6 / −1 of 25 | “I'm a complete beginner to this… This series of videos assumes you already have one [codebase].” “Plan mode can make file edits… the harness does not enforce it at all.” | **4** Plan before acting, commit after. The commit half is the version-history idea, but it's framed for coders. A commenter disputes plan mode's read-only guarantee. |
| `mxU6Bp7GWP0` (WS) | Claude Code Keeps Asking for Permission? How to Stop the "Allow" Pop-Up | Absolute beginners | 1:51 | 2026-07-29 | 2,850 | 10 | +1 / −0 of 2 | “I was dying by clicking allow through long promps. It was so simple, you saved me” “this is BS.... AUTO mode is better” | **3** Explains "Allow once" vs "Always allow" in the desktop app: the brief's "allow kinds of actions you trust". Very short, thin evidence. |

Queries:
1. WS "youtube Claude Code permissions explained plan mode accept edits auto mode"
2. WS "youtube Claude Code checkpoints rewind undo changes"
3. WS "youtube Claude Code safety for beginners permissions desktop app git version history"
4. WS "youtube Claude desktop app Code tab "ask permissions" OR "accept edits" OR "rewind" November 2026"
5. CH uploads (Claude official: grep for permission/checkpoint/auto mode/plan; Dylan Davis; Mstimaj).

## 6.1 Choose Your Workflow

Outcome: choose one recurring piece of work and map it as input → steps → output → destination.

**Dropped:**
- Over 20 min: `-TOM1vyKuxM` (46:52, 50 views), `fSaTtJJUz5U` (23:31, 2025), `t5nGUzlUGEc` (23:57), `ktY1b2-OKRA` (22:34, CodeRabbit sponsor), `rZPN6Hd1X2g` (28:18), `iovigDx1e8c` (23:28).
- Mainly ads: `evXFML_Rnc0` (Matt Wolfe 1:02 plug for Bird; comments: "Nice plug", "All of these can be automated easily without AI"), `MXPAu65T46I` (ClickUp product tutorial, 2025, 1 comment).
- Shorts or under 2 min: `mLei7bNx9Mo` (0:22, but literally "input, process, output"), `fJoiR58lmOk` (2025), `Af-PEBvPSgg`, `w8rdVXWntXw`.
- 0 comments, not vetted: `YbLmdbN7WkY` (agentic ontology, 390 views), `0LJKWSttHU8`, `mJZ7XPv-Eoo` (Tango, "document before you automate", 3:31, 145 views; watch list), `rQLmbDOVyf0`.
- `V9fbwBvfB_8`: 14:36, 408 views, 1 comment.

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `vatOVZbumk0` (CH) | You're Automating Steps You Should Delete | Dylan Davis | 12:17 | 2026-07-20 | 2,940 | 94 | +2 / −1 of 3 | “Always good food for thought and new ways to approach what I'm doing.” “Waste of time vid; all abstract & vague. Nothing concrete for the viewer to take home.” | **6** "The process" (3:04–10:23) is about mapping work and cutting steps before automating, which is task step 3. Tool-agnostic and non-technical. One commenter calls it vague. |
| `HMaja1AlwMo` (WS) | What Tasks Should I Automate with AI? | The Virtual Savvy (Abbey Ashley) | 9:53 | 2026-08-27 | 2,120 | 48 | +0 / −0 of 3 | “What is the first task in your business that you are going to automate…? Join the AI Integrated Certification waitlist” (creator) “people are scared of AI but it's not AI vs Human.” | **5** Topic-exact for the choosing half: how to decide, the #1 mistake, and 15 example tasks from a solo business owner. Certification waitlist funnel. No viewer evidence. |
| `loVyP7TGq8E` (CH) | Claude Asked Me 15 Questions. Now It Decides Like Me | Dylan Davis | 13:18 | 2026-10-07 | 5,069 | 70 | +1 / −1 of 2 | “verbalizing can be slower…” “How can I make it clear to Claude that I prefer short, to-the-point answers?” | **4** "Let Claude interview you" is the mechanic in task step 2, but the subject is decision rules, not workflow maps. |
| `8rVQuZlRaqo` (CH) | A Practical AI Agent Workflow For Companies In 2027 (Guide) | Nick Saraev | 19:22 | 2026-07-14 | 66,557 | 1,643 | +12 / −2 of 25 | “A useful implementation lens is to define the agent's 'stop points' before designing its happy path: what it may execute, what it may recommend, and what must go to a human.” “You need to do a video on how to set something like this, especially the knowledge base.” | **3** Linear task-tagging for agent teams. Popular and practical, but team and PM-tool centred. Skool funnel. Almost 20 min. |

Queries:
1. WS "youtube how to design an AI workflow map your process before automating input steps output"
2. WS "youtube what to automate first with AI recurring tasks how to choose"
3. WS "youtube audit your week find tasks to automate with Claude or ChatGPT framework 2026"
4. WS "youtube how to decide which tasks to automate with AI frequency time matrix beginners"
5. WS "youtube SOP document your process before AI automation turn workflow into steps Claude"

## 6.2 Build It and 6.3 Run It, Then Refine It

Outcome:
- 6.2: get the steps right by hand, turn them into a skill, connect the ends, run twice, then schedule.
- 6.3: run for a week, put every correction into the skill, keep a run log, write Version 2.

**Dropped:**
- Over 20 min: `eSP7PLTXNy8` (official "Build a proactive agent workflow", 22:04, repos and PRs), `fIpl8nGQIIc` (29:00), `qpRFzXTHG48` (26:41, Skool funnel), `dTGF-AUpxAQ` (30:24), `mS5ojqQ7zzw` (29:16), `0K7X3nnbSw0` (21:23), `0v8U-0aSb-g` (52:58, terminal), `CJvZubfO2Uo` (34:37, VS Code).
- Cowork-centred: `jrfB3VY-wDo`. The official "Record A Skill With Claude" (1:42, 1.8M views) is otherwise the exact "do it by hand, then turn it into a skill" step, but the feature lives in Cowork's + menu. Comments: "How do you invoke the skill? You just blazed right over that part." `Y0OB8GJh6Pc` and `YxR6RtcOtd0` are also Cowork.
- Already scored in round 1 (5.3): `D3pxbkPg0KE`, `8Lwdm1GthjI`, `TGvYv32XetA`, `_zyEkFY64nw`, `9rkRHYe4vCk`.
- Developer or QA skills: `Rc7sH68RACU`, `9MnlL2Hu9IY`. 2025: `VEzK2vhj3Jg`.
- 0 comments, not vetted: `S0ow7MZTpFg` (weekly reporting with Claude, 8:48, 698 views).
- Not fetched or low signal: `yQdf4Jn0nAI`, `D7TIvqtSZQE`, `4_LecDzDsTc`, `ShmRImyJmT0`, `MZZCW179nKM`, `pw0bUFDmPks` (393 views).

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `fgrJVdD12PA` (CH) | ChatGPT & Claude Keep Repeating Mistakes You Already Fixed | Dylan Davis | 11:49 | 2026-11-04 | 2,771 | 68 | +2 / −0 of 3 | “Great video, thanks man” “How does master files and canonical rules play a role here?” | **6 (6.3)** The title is 6.3's core rule: fix it once, permanently. Two days old, so almost no evidence. |
| `IhhxRZDf2bo` (CH) | I Trained Claude to Work Exactly Like Me | Dylan Davis | 15:10 | 2026-08-15 | 3,823 | 138 | +2 / −0 of 4 | “this was really very helpful around the continuous improvement of skills and great prompt examples. I'm going to put this into practice.” “it would be great having a process/prompt… to get a subagent to verify automatically the quality of a AI answer” | **6 (6.2/6.3)** Turning your way of working into a skill, then improving it continuously. The only candidate that might cover both lessons. 15 min. |
| `AAYy-cgA4Kg` (WS) | How To Automate Your Morning with Claude | Jeremiah Peoples | 7:49 | 2026-05-28 | 3,045 | 71 | +4 / −1 of 11 | “thanks for showing the Claude code UI. I've been rooted in terminal” “Why don't you create a scheduled task inside Claude Cowork instead. Is there any benefit to using code?” | **5 (6.2)** One real recurring workflow (a daily dashboard from all his tools) built end to end in the Claude Code UI, in under 8 min. Pre-rebuild UI; affiliate link. |
| `DByAR5Su1Yw` (WS) | I Told Claude to "Make it better" 100 Times (It Went Too Far) | Nate Herk | 13:51 | 2026-10-30 | 545,660 | 5,298 | +8 / −1 of 25 | “'Better' needs a definition before round one, or each pass can add features and clutter while still feeling like progress.” “The core of this video isn't… if 100 iterations gives you a good result. It is the reflection on this method.” | **4 (6.3, perspective)** An experiment showing that iterating without criteria just adds clutter. That argues for 6.3's run log, but it's a website demo, not a workflow. Agency funnel. |
| `2Vcn2bAu2FA` (WS) | Claude Skills: Build Your Own AI Employees | Greg Isenberg | 19:59 | 2025-12-24 | 94,373 | 1,977 | +18 / −4 of 25 | “treating Claude Skills like employees with single responsibilities and strict output templates.” “I am on the free plan, and do not have the same choices as you have” | **4 (6.2)** Well liked and beginner-friendly skill setup. It's December 2025 UI ("enable Skills preview" in Settings → Capabilities), so outdated for a product walkthrough. Near the 20-min cap. |
| `CNYE5nQfRaQ` (WS) | Claude Code Patterns: Feedback loops | Delba | 5:57 | 2026-06-03 | 3,297 | 147 | +2 / −1 of 5 | “I use something similar: skill like orchestrator + skills for each step” “On older Claude models a tall page screenshot gets squeezed down…” | **3** Self-verification for coding tasks. Developer framing. |
| `vffWCu9ryIg` (WS) | How to Automate Boring Work with Claude Skills (No Coding) | FunzAI | 14:08 | 2026-08-22 | 394 | 10 | +0 / −0 of 1 | Creator comment only. | **3** The "weekly status report" pitch fits 6.2, but there is no evidence. |
| `jrfB3VY-wDo` (CH) | Record A Skill With Claude | Claude | 1:42 | 2026-08-03 | 1,821,606 | 1,885 | +4 / −1 of 24 | “Can we have this lady do more of the demo showcases please? She's very thorough” “How do you invoke the skill? You just blazed right over that part.” | **DQ** Cowork-centred (+ menu in Cowork). Listed because it's the only exact "do it by hand, then make it a skill" demo. Re-check if the feature moved into Chat after the merge. |

Queries:
1. WS "youtube build an AI workflow with Claude skills scheduled task end to end real example"
2. WS "youtube improve Claude skill over time feedback loop fix the skill not the output iterate"
3. WS "youtube I automated part of my job with Claude what I learned after running it for weeks"
4. WS "youtube audit your week find tasks to automate with Claude or ChatGPT framework 2026" (shared with 6.1)
5. CH uploads: Claude official, Dylan Davis, Nick Saraev, Teacher's Tech.

## Shortlist for transcript fetch

```python
"4.2": ["J0h3yuCnXqk", "qPG5zQCSlTs", "lTd3DwajYks"],
"4.5": ["F-DARGKRKdQ", "b8SV4U6fEIc", "Qta08CEKlnQ"],
"6.1": ["vatOVZbumk0", "HMaja1AlwMo", "loVyP7TGq8E"],
"6.2": ["IhhxRZDf2bo", "AAYy-cgA4Kg"],
"6.3": ["fgrJVdD12PA", "IhhxRZDf2bo", "DByAR5Su1Yw"],
```

What each transcript must answer:
- **4.2:** does Dylan's "folder" map onto ABOUT-ME, reference and output without agent jargon dominating?
- **4.5:** does `F-DARGKRKdQ` use the desktop app, and does it say anything about deletes or originals? Which start and end minutes avoid terminal commands in `b8SV4U6fEIc`?
- **6.1:** does 3:04–10:23 in `vatOVZbumk0` actually walk through mapping a process, or is it abstract?
- **6.2/6.3:** does `IhhxRZDf2bo` build and then refine a skill on real work? If so, it can serve both lessons.
