# Video picks (step 1 result, 2026-11-05)

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
