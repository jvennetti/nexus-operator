# Video picks (step 1 result, 2026-11-05)

**Rule change, 2026-11-05 (lead):** no lesson stays text-only. Where no video teaches a lesson exactly, take another angle: a video that teaches the underlying skill, with the lesson reframed around it. Round 2 below applies that rule. Decisions made so far by Claude under the lead's "decide after research" instruction; the lead overrides anything he dislikes.

Source: 42 transcripts fetched by the lead, read in full by four Opus readers (one per module group), weighed against the comment and metadata evidence in `docs/video-research-results.md`. Nothing here is in a lesson yet. The lead confirms each pick before it goes in.

| Lesson | Pick | Play | Why | Open check |
|---|---|---|---|---|
| 0.2 Know Where Things Are | none (text-only) | | `r2vYObllqJU` is the web app in the old layout, never shows Settings or Chat vs Code, and its 1:19–2:03 iteration demo pre-empts 1.2. All post-rebuild videos are "what's new" lists for existing users. Fallback if the lead wants a video anyway: `r2vYObllqJU` 0:32–3:19. | Re-search ~2026-12-01 for a first-time desktop tour |
| 1.1 What Changed | `EljzyfdYkrc` Anthropic AI Fluency "Delegation" | whole (5:37) | Pure doing-vs-directing, no plugs, leaves 1.2 alone. Caption must define automation / augmentation / agency since it assumes the series. | |
| 2.1 Anatomy of a Good Prompt | `2YCaBqP8muw` Anthropic AI Fluency "Effective prompting" | 1:52–5:35 | That stretch is context (with goal and audience), examples, format, in order. After 5:35 it drifts into steps/role, and from 8:45 into 2.3's moves. | |
| 2.4 Projects | `w7_yWjYyxjE` Kevin Stratvert | 0:25–5:49 | Instructions, files, chat-only uploads, moving chats, all demonstrated. Post-rebuild transcripts confirm chat Projects are still instructions + files + chats (plus per-project memory, and a "goal" field on creation for some). | Lead: does your Projects page show a "goal" field, and any threads/coordinator? |
| 3.1 Connectors | none (text-only) | | Best candidate is half a Zapier ad and has no Calendar. Others are thin. | Lead: exact path to Connectors in the current app; can the native Gmail connector send, with approval? |
| 4.1 Chat Answers. Code Acts. | `8c6JZ18W0Bo` Nick Saraev | 0:24–1:58 | Only candidate that is desktop-only AND post-rebuild. After 2:00 he recommends Auto mode for everything (we teach Manual) and speed-runs Modules 4–5. Needs start/end support in build.py. | Lead: on Windows, does the Code tab need Git installed? |
| 4.3 The Instructions File | `O0FGCxkHM-U` Claude official | whole (3:01) | All substance. Caption: skip the code example at 0:55–1:33. Brief adds rules-vs-information, what not to put in, use the lesson prompt not /init. | |
| 5.1 What a Skill Actually Is | `O6tQ6V_P8a0` Tristen O'Brien | 0:22–6:36 | Plain-language definition, where skills live, and the "feed the skill creator" recipe. Task must build a real skill through the app, not a /skills folder with a CLAUDE.md pointer. | Lead: is "code execution and file creation" still a toggle? |
| 5.2 Context Management | `xaQG-eD9d58` Dylan Davis | 0:25–10:37 | Only non-technical candidate; its handoff tactic is the lesson's task. Contains a 24-second self-plug at 2:18 and names ChatGPT/Gemini. Runner-up `-uW5-TaVXu4` 0:46–7:00 if developer framing is acceptable. | |
| 5.3 Scheduled Tasks | `6RXjpKXy2qk` Cynked AI | whole (8:17) | Only post-rebuild, chat-user, on-task candidate: four-part instruction, Scheduled → New task, connectors and permissions, run now, honest limits. Thin audience evidence (37 views). Task must keep draft-first: he sets Gmail send to always-allow; we don't. | Lead: watch it once; confirm "Scheduled" in the sidebar and Gmail tool permissions |

Also: `7zZy1QTvokM` (Karpathy-method video the lead liked) goes in the Bonus Vault, pointed to from Module 6. It assumes Claude Code throughout (plan mode, CLAUDE.md, skills, hooks) and never teaches goal/context/format/example.

Total video time if all picks are confirmed: about 44 minutes across eight lessons.

## Build change needed

`build.py` embeds `?enablejsapi=1` only. Add `video_start` and `video_end` front matter (seconds) and emit `?start=N&end=M&enablejsapi=1`. Without it, clip picks play the whole video.

## Content corrections the readers found

- 5.1 task: replace the `/skills` folder + CLAUDE.md pointer with the app's own skill creation.
- 5.3 brief: "send to the team" contradicts draft-first; fix. State plainly that once a send tool is always-allowed, Claude can send to anyone; only the instructions stop it.
- 5.2 brief: "early parts get crowded out" should be "start and end get the most weight, the middle gets lost," plus compaction can drop early instructions.
- 3.1 brief: "Settings → Connectors" doesn't match any October-era video; verify the path.
- 2.4 brief: Claude does not see the project name or description; UI labels drift (knowledge / files / content, goal / description).
- Module 2 challenge: rename "Operator HQ" to "NEXUS" everywhere and move the profile-writing interview into 2.4; chat-based challenges run inside NEXUS, Claude Code challenges run in the workspace folder.

## Round 2 (2026-11-05): every lesson gets a video

Decided from already-read transcripts (in lessons now, on branch `claude/friendly-ramanujan-jrotfb`):

| Lesson | Pick | Play | Why |
|---|---|---|---|
| 0.1 Get Claude on Your Computer | `aDR571phdAs` Not a Computer Person | 0:58–4:16 | Sign-in, phone verification, phone app, official download page, fake-site warning. Cut before the prices. Caption overrides its "web is plenty" line. Download URL is `claude.com/download` (the `.ai` one redirects there). |
| 6.4 Tips From the Field | `7zZy1QTvokM` Austin Marchese (Karpathy method) | whole 13:19 (skip 8:15–8:47 plug) | The lead liked it; it assumes everything the course has taught by Module 6. Moves out of the Bonus Vault into the lesson. |

Candidates found by three Opus searchers (reports in `docs/research/gap-search*.md`), **transcripts not yet read**. Nothing goes into a lesson until the lead fetches the transcripts (`tools/fetch_transcripts.py`, round 2 list) and an Opus reader has read them. Best candidate first; the second is the fallback.

| Lesson | Best candidate | Fallback | Angle |
|---|---|---|---|
| 0.2 Know Where Things Are | `N890AspWgEw` Mstimaj "room by room" tour (7:05, 2026-10-20) | `r2vYObllqJU` 0:32–3:19 (old layout, lead's pick) | Only post-rebuild first-time tour found; 47 views, no comments |
| 1.2 Director, Not Doer | `DmgujoZ1mmk` Anthropic AI Fluency "Description" (4:22) | `wmCXIPlllpA` NNgroup "Your AI UX Intern" (4:23) | Teaches the brief (what you want, how to approach it, how Claude should behave). Review and push-through stay in text. Makes AI Fluency run 1.1, 1.2, 2.1 in a row. |
| 2.2 Give It What It Needs | `Zzn-g8lvLMA` Anthropic "Data analysis with AI" (7:10) | `PwUr0fowN1I` (13:37) | Reframe: hand Claude one real messy file whole |
| 2.3 Iterate and Push Back | `tk4Ljz9p-UI` Simpletivity "ask me 3–5 clarifying questions" (6:16) | `Y0KidGr9Z2Y` Anthropic AI Fluency "Discernment" | Nothing on pushing through hedges exists; that stays text |
| 2.5 Make Things, Not Just Text | `FgwrGj_RJBg` TechBrothersIT artifacts (2:50, post-rebuild) | `kJA3fQnntpY` official (sharing/editing, Team plans) | Search cut short by quota; re-run |
| 3.1 Connect Your Inbox and Calendar | `LNpOyx4DOJ4` Holly Cope (6:44), play 0:00–3:42 | `dMC8p2sJ7gY` (Calendar only) | Live triage, availability check, draft reply. Pre-rebuild; setup path from 5:58 is old |
| 3.2 Connect Your Work Tools | `BKzEVhT2054` Benjamin Preston, Notion (5:14) | `8cdVubYQjKY` AyyazTech Notion | Meeting notes → Notion page, scoping which pages Claude can touch |
| 3.3 A Morning With Claude | `D5nZOUfac_0` Nexus (15:11), play 2:57–8:18 | `LNpOyx4DOJ4` 0:00–5:20 if 3.1 uses something else | Reframe: write one standing morning-brief prompt, run it by hand each morning |
| 4.1 Chat Answers. Code Acts. | `8c6JZ18W0Bo` 0:24–1:58 (current pick) | `yTy8WV3Y9Nk` Mstimaj, Code tab, no terminal (post-rebuild) | Hold the fallback until its transcript is read |
| 4.2 Folders Are Memory | `J0h3yuCnXqk` Dylan Davis "An AI agent is just a folder with 3 things" (11:37) | `qPG5zQCSlTs` signalstack (3:52) | Reframe: about-me, reference, output folders are what Claude remembers |
| 4.4 Build Something Real | `4hc5Z_QBno4` (rename invoices, build a summary sheet) | none; search cut short by quota | Transcript must show the Code tab, not Chat folder access |
| 4.5 Sessions, Permissions, Safety | `F-DARGKRKdQ` Dylan Davis "I stopped clicking approve" (12:05, 2026-10-24) | `b8SV4U6fEIc` official "How auto mode works" (5:42) | Both argue for auto mode; reframe around approval fatigue: safe habits first, lighter mode later |
| 6.1 Choose Your Workflow | `vatOVZbumk0` Dylan Davis "You're automating steps you should delete", 3:04–10:23 | `HMaja1AlwMo` The Virtual Savvy (9:53) | Reframe: map it, then cut steps before you automate |
| 6.2 Build It | `IhhxRZDf2bo` Dylan Davis (15:10) | `AAYy-cgA4Kg` Jeremiah Peoples (7:49, pre-rebuild) | No post-rebuild video builds skill + connectors + schedule |
| 6.3 Run It, Then Refine It | `fgrJVdD12PA` Dylan Davis "Keep repeating mistakes you already fixed" (11:49) | `IhhxRZDf2bo` shared with 6.2 | Fix the skill, not the output |

Rule applied when reading (later dropped by the lead): one creator carries at most two lessons unless the transcripts leave no choice. Superseded: the lead ruled best video regardless of creator.

Round 3 (2026-11-05, `docs/research/gap-search-round3.md` and `reader-round3.md`): 2.5 and 4.2 replaced as above; 6.1 kept (CertainOps `gYk_hp3goAY` 0:57–5:52 tied; its map ideas go into the brief); 3.3 nothing better yet.

## Round 2 decisions (2026-11-05, after all 26 transcripts were read)

Every lesson has a video. Decided by Claude from the four round 2 reader reports (`docs/research/reader-round2-*.md`); the lead overrides anything he dislikes. "Weak" = scored under 6/10 or thin evidence; those four slots get a second search once the API quota resets, and are replaced if something better turns up. Times are what goes in `video_start` / `video_end`.

| Lesson | Pick | Play | Score | Note |
|---|---|---|---|---|
| 0.1 Get Claude on Your Computer | `aDR571phdAs` Not a Computer Person | 0:58–4:16 | 7 | In the lesson |
| 0.2 Know Where Things Are | `N890AspWgEw` Mstimaj | 0:02–4:47 | 7 | Calm first-time tour of the rebuilt app; task keeps rename, Settings, attach |
| 1.1 What Changed | `EljzyfdYkrc` Anthropic AI Fluency, Delegation | whole | 7 | In the lesson |
| 1.2 Director, Not Doer | `wmCXIPlllpA` NNgroup, "Your AI UX Intern" | 0:07–3:59 | 6 | Manager-and-new-hire frame plus "double-check the work". Push-through stays in text. AI Fluency "Description" rejected: it is 2.1 almost word for word |
| 2.1 Anatomy of a Good Prompt | `2YCaBqP8muw` Anthropic AI Fluency, Effective prompting | 1:52–5:35 | 8 | |
| 2.2 Give It What It Needs | `Zzn-g8lvLMA` Anthropic, Data analysis with AI | 0:19–5:42 | 6 | Other angle: hand over raw messy material, check against a known answer, note what Claude needed |
| 2.3 Iterate and Push Back | `tk4Ljz9p-UI` Simpletivity | 0:00–5:56 | 6 | "Ask me 3–5 clarifying questions." Demo is in Gemini; caption says it works the same in Claude. Borrow `k1dNyhqfsQ8`'s "put the first answer under pressure" into the task. Push-through is in no video; stays in text |
| 2.4 Projects | `w7_yWjYyxjE` Kevin Stratvert | 0:25–5:49 | 9 | |
| 2.5 Make Things, Not Just Text | `1PRcdCu8n6M` Kevin Stratvert, How to Use Claude Artifacts | 0:43–8:59 | 7 | Describes a small tool, uses it, has it save data that persists. Pre-rebuild UI ("New Artifact", publish, "Send to Claude"): lead checks the names. Fallback `FgwrGj_RJBg` 0:00–2:40 (post-rebuild explainer) |
| 3.1 Connect Your Inbox and Calendar | `LNpOyx4DOJ4` Holly Cope | 0:00–3:42 | 7 | Live triage, calendar check, "do not send, just draft". Drop the full morning briefing from the 3.1 task (3.3 owns it) |
| 3.2 Connect Your Work Tools | `BKzEVhT2054` Benjamin Preston | 0:00–5:00 | 7 | Meeting notes to a Notion page; start narrow; no delete |
| 3.3 A Morning With Claude | `D5nZOUfac_0` Nexus (the channel, not us) | 3:05–8:30 | other angle | Anatomy of a standing morning-brief prompt; caption must say the channel isn't NEXUS Operator. Round 3 found nothing post-rebuild in Chat (creators moved to Claude Duet or scheduled tasks); re-search ~2026-12-01 |
| 4.1 Chat Answers. Code Acts. | `8c6JZ18W0Bo` Nick Saraev | 0:24–1:58 | 5 | Kept; only current-UI video that says Chat can't change files, Code can |
| 4.2 Folders Are Memory | `j9eiZcBkNg0` Santiago Garcia | 0:22–1:27 | 5 | "A folder of text files; Claude starts where I left off." Still the weakest slot; the brief carries it. Lead watches once to confirm desktop app. Re-search ~2026-12-01; also check Mstimaj `yTy8WV3Y9Nk` 0:00–1:44 (the folder step) during the Module 4 rebuild |
| 4.3 The Instructions File | `O0FGCxkHM-U` Claude official | whole | 7 | |
| 4.4 Build Something Real | `yTy8WV3Y9Nk` Mstimaj | 1:44–6:07 | 7 | Plan-first loop in the Code tab: Plan mode, questions, plan, Reject/Revise/Accept. `4hc5Z_QBno4` is Chat folder access, not usable |
| 4.5 Sessions, Permissions, Safety | `F-DARGKRKdQ` Dylan Davis, "I stopped clicking approve" | 7:01–10:51 | 7 | Work on a copy, keep an undo, the two-minute review prompt, "Manual is for learning". Fallback `b8SV4U6fEIc` official 0:00–3:31 (5/10) |
| 5.1 What a Skill Actually Is | `O6tQ6V_P8a0` Tristen O'Brien | 0:22–6:36 | 7 | |
| 5.2 Context Management | `xaQG-eD9d58` Dylan Davis | 0:25–10:37 | 8 | |
| 5.3 Scheduled Tasks | `6RXjpKXy2qk` Cynked AI | whole | 9 | |
| 6.1 Choose Your Workflow | `vatOVZbumk0` Dylan Davis, "You're automating steps you should delete" | 3:04–10:23 | 7 | Map it, then cut steps before you automate; concrete seven-to-four-step proposal example. Fallback `HMaja1AlwMo` 2:23–4:08 (5/10) |
| 6.2 Build It | `IhhxRZDf2bo` Dylan Davis | 3:10–12:52 | 7 | Manual run to lean skill, test on past work, yes/no checklist, fix the skill in the smallest step |
| 6.3 Run It, Then Refine It | `fgrJVdD12PA` Dylan Davis | 0:00–11:26 | 8 | Every fix goes into the skill, instructions file or notes file; caption maps his `agents.md` to CLAUDE.md |
| 6.4 Tips From the Field | `7zZy1QTvokM` Austin Marchese | whole | 6 | Caption: the 6.2 checklist is a beginner version of his verifier layer |

Lead's rule (2026-11-05): **best video regardless of creator.** Spread as it stands: Dylan Davis 5 (4.5, 5.2, 6.1, 6.2, 6.3), Anthropic/Claude official 4 (1.1, 2.1, 2.2, 4.3), Mstimaj 2 (0.2, 4.4), everyone else 1. Total watch time about 2 hours across 24 lessons.

### Module 6 direction (lead, 2026-11-05)
Challenges must not feel restrictive. Module 6 becomes two tracks the learner chooses: **build a system** (recurring workflow: skill + connectors + scheduled task) or **build an app** (a personal tool in the Code tab: tracker, dashboard, mini site, with a folder and a CLAUDE.md). Same deliverable shape: version 2, a README a stranger can follow, a run log. 4.4 is the first "you can build things" moment. The learner may do both tracks; finishing the second earns an extra badge, **OVERCLOCKED** (add to `content/course.json` badges). Also (lead): 2.5 must have the learner build a simple tool as an artifact that they actually use afterwards; the 2.5 re-search targets a video of exactly that, not an artifacts explainer. Apply when Modules 2 and 6 are rebuilt.

### App facts the readers want checked (new this round)
Whether Chat can now edit local folders (4.1's premise); whether Auto is now the default mode; the folder button label ("Local → Open folder" vs "This computer"); what Manual prompts for; whether deletes always ask; whether Auto overrides a connector's "Needs approval"; whether Connectors sit in the + menu or Customize; whether the Output button and Artifacts tab exist and the toggle's name; whether Notion lets you choose pages; whether a skill can start a sub-agent grader in Chat; whether Claude Code reads AGENTS.md.
