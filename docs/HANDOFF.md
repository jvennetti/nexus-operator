# NEXUS Operator — Project Handoff

Read this first in any new session. It carries the project lead's thinking, instructions, open questions, every decision so far, the research done, and the exact next step. Joshua Vennetti is the lead. Claude (Fable) runs the project session; Opus subagents or sessions do research and bulk reading and report back. The lead makes the calls on anything that touches content, design or CIRO.

Last updated: 2026-11-05, second session (video round 2, build change, Module 1 rebuild, QA audit).

---

## 1. What this is

A free, public, gamified course that takes someone from "never opened Claude" to running one real, recurring piece of their work as a system with Claude. The lead's words: "It's a Claude school basically that helps people understand the benefits of AI, use Claude, and integrate it for themselves." And: "This course is for people who want to get good at Claude one step at a time."

Three repos:

- **`jvennetti/nexus-academy`**: the original, built for a three-person core team. Read-only time capsule. Never modify.
- **`jvennetti/nexus-open`**: a single-operator public copy with inside jokes removed. The shell this repo was seeded from.
- **`jvennetti/nexus-operator`** (this repo): the rebuild. Live at https://nexusoperator.pages.dev, auto-deployed from `main` by Cloudflare Pages.

## 2. How the lead wants to work (rules, in his words where possible)

- **Step by step, done right.** "We need to get step by step and improve things... things need to be done right." He got overwhelmed when four things were redesigned at scale without him: "I worked through so much human work to get copy non-AI, get designs looking good, that these redesigns and rewrites at scale without me feel overwhelming."
- **Order of work:** (1) videos paired with tasks, "keep it simple and clear and as concise as possible and only the necessary information"; (2) lesson page design; (3) CIRO's language, worked through with examples before anything is locked; (4) graphics and robot animation. Do not start a later step until the earlier one is confirmed.
- **Show before merging.** Nothing changes on the live site until he has seen it. Bring work one module at a time.
- **Decide for him after research.** Present the decision and the why, briefly. He asked not to be surveyed with options.
- **Models:** the lead session runs on Fable. "When you spawn agents to research or anything they should be Opus." One reader per module, not per lesson ("one per lesson seems insane").
- **Don't repeat lessons.** "I do need you to understand what each video says in order to create the best tasks/challenges, and so we don't repeat lessons." That's why transcripts were read in full.
- **He is in the loop with side sessions.** He talked directly to the Opus sessions. Read their transcripts (user messages) before assuming what they did was Claude's idea.

## 3. The lead's content direction

**Videos.** Rule from the second session: **no lesson stays text-only.** "If we can't find a good video for a spot, let's take another angle." "Most of the videos will have to go." Plan what someone should learn first, then find videos for those things, attached to tasks. Videos under 20 minutes, "only the best," full-on meat, no viral hooks that "promise the world and talk popular language without the meat." "Official from Anthropic is cool but might not be the best content in some situations." He vets by transcript and by comments praising clarity and concision. He wants a note kept that the interface-tour video should be replaced "once new videos come out better."

**Lessons.** Lesson plus task. His bad-prompt design: "have them copy a bad prompt that lacks context, put it in the chat. Then ask them to write a better prompt for the same outcome based on the rules they've learned, put that prompt in a new chat, and compare the results." And: "If Claude says it can't do something, tell it you want it to do it! Usually or always it can. That's an important lesson for beginners."

**Challenges.** "Build great challenges that interweave to create confidence in using Claude." Simple. His idea: in the Projects lesson, learners create a **NEXUS project** and do every later chat-based challenge inside it. Adopted.

**Modules, his notes:** setup = make an account and learn the interface, skippable. Module 1 mindset "short and not waste time." Module 2 prompting is the core; context management comes late because beginners "can't even begin to understand context management if they're not building things yet." "Cowork is outdated. Claude Chat and Claude Code are the only two interfaces now." Connectors taught as "connect your Gmail, ClickUp, daily tools." "MCP is probably too much here." "Zapier is totally out of a job." "Agents are not a real thing... better someone learns what a skill actually is (just a text doc with instructions)." Claude Code "should just be Claude Code inside the desktop app," never the terminal. Old Module 5 (lead gen) and Module 6 (selling) are gone: "it's a learn AI course."

**Self-hosting videos.** He asked to compress and embed videos directly. Answer given and accepted: no, re-hosting other people's YouTube videos is copyright infringement; embed instead. Creative Commons videos or his own recordings could be self-hosted.

**Lesson page.** Base it on the latest page from the design session (nexus-academy's lesson 1.3 layout with a task added, in `docs/proposals/lesson-design/`). He wants: notes next to the video; timestamps auto-saved (the player loads with the API enabled, so save position every few seconds and resume); plain-text credit under each video ("Title, by Creator," no link); "Your Task" centered with a distinctive design; keep the timestamp bar. He floated lesson, task, lesson, task as alternating pages. Claude recommended the separate task page. Not decided.

**CIRO.** Parked. "We'll work more on CIRO in the future and his words." The nexus-open hub greetings, intros and outros were "decent" and are the baseline; the ending is what he wants improved; idle messages belong on the hub only. The Opus voice session's work (PR 1, Dry Circuit direction, patch-notes running gag) stays open as reference. Flag: the live site already carries Claude's rewritten intro/completion lines for the new module themes; Claude offered to show original vs rewritten per module so the lead keeps what he wants.

**Paid version.** Later. When it comes: Cloudflare Access email allowlist in front of the same static site plus Stripe or Lemon Squeezy. Not a membership platform. Not now.

## 4. What's built

- **Shell** from nexus-open: hub, CIRO intro, machine finale, vault, audio, images, mobile styling injected by `nexus-transition.js`.
- **Content as data.** `content/course.json` (structure, badges, CIRO lines), `content/lessons/*.md` (24 lessons), `content/challenges/*.md` (6). `python3 build.py` generates every lesson, intro, challenge and completion page and rewrites the hub's data block. Never hand-edit generated pages.
- **Lesson template** (`templates/lesson.html`): brief, optional video, task box with numbered steps and copyable prompt blocks, "Mark task done," notes, takeaways, prev/next. Next is soft-locked until the task is marked done. The lead called this first version "way too much going on"; it will be replaced in step 2.
- **Routing.** Root URL sends newcomers to the intro and returning people to the hub. Deep links to locked modules bounce to the hub. No `?op=` parameter.
- **Curriculum**: `docs/curriculum.md`. Setup (0.1 account, 0.2 interface) · M1 Operator Mindset (1.1, 1.2) · M2 Speak Claude (2.1 prompt anatomy, 2.2 context, 2.3 iterate/push back, 2.4 Projects, 2.5 make things) · M3 Claude in Your Tools (3.1 inbox/calendar, 3.2 work tools, 3.3 a morning) · M4 Claude Code (4.1 first look, 4.2 folders are memory, 4.3 CLAUDE.md, 4.4 build something, 4.5 sessions/permissions) · M5 Skills and Automation (5.1 skills, 5.2 context, 5.3 scheduled tasks) · M6 Build Your System (6.1 choose, 6.2 build, 6.3 run and refine, 6.4 tips).

All lesson content is a first draft the lead has not reviewed line by line.

## 5. Open pull requests (all draft, none merged, none to merge without the lead)

- **PR 1** `claude/ciro-voice-options`: CIRO voice directions. Parked, reference only.
- **PR 2** `claude/content-tightening`: all 24 briefs cut by about half. The lead said "I have no idea if the lesson content tightening was on mission." Not merged. Use it as raw material when rewriting each module with its video, not as a wholesale merge.
- **PR 3** `claude/lesson-design-options`: the lesson page the lead directed (nexus-academy 1.3 layout plus task). Base for step 2.
- **PR 4** `claude/video-research`: research results, the transcript fetch script, and **42 transcripts in `transcripts/`** (fetched from the lead's desktop). Keep this branch; the transcripts are the evidence.

## 6. Step 1 status: video selection

Done: 106 candidates vetted by API metadata and top comments; 42 transcripts fetched; every transcript read in full by Opus readers; picks made. **Picks and reasoning are in `docs/video-picks.md`.** Summary:

| Lesson | Pick | Play |
|---|---|---|
| 0.2 | text-only for now (lead's provisional pick `r2vYObllqJU` is the web app, old layout, never shows Settings or Chat vs Code; fallback 0:32–3:19) | |
| 1.1 | `EljzyfdYkrc` Anthropic Delegation | whole 5:37 |
| 2.1 | `2YCaBqP8muw` Anthropic Effective prompting | 1:52–5:35 |
| 2.4 | `w7_yWjYyxjE` Stratvert Projects (lead's pick) | 0:25–5:49 |
| 3.1 | text-only | |
| 4.1 | `8c6JZ18W0Bo` Saraev | 0:24–1:58 |
| 4.3 | `O0FGCxkHM-U` Claude official CLAUDE.md | whole 3:01 |
| 5.1 | `O6tQ6V_P8a0` Tristen O'Brien skills | 0:22–6:36 |
| 5.2 | `xaQG-eD9d58` Dylan Davis context | 0:25–10:37 |
| 5.3 | `6RXjpKXy2qk` Cynked AI scheduled tasks | whole 8:17 |

`7zZy1QTvokM` (Karpathy method, lead liked it) goes to the Bonus Vault, linked from Module 6.

The lead did not confirm picks one by one; he asked Claude to decide after research and to find videos for every lesson. **Round 2 status and the per-lesson candidate table are in `docs/video-picks.md`.** 0.1 and 1.1 are in their lessons on the working branch; 6.4 is decided (`7zZy1QTvokM`); 15 lessons have candidates awaiting transcripts.

**Build change done:** `build.py` accepts `video_start`, `video_end` (seconds or m:ss) and `video_credit` and emits `?start=N&end=M&enablejsapi=1` plus a plain-text credit line under the player.

**Content corrections found by the readers** (apply when each module is rebuilt): 5.1 task must use the app's own skill creator, not a `/skills` folder with a CLAUDE.md pointer; 5.3 brief must not say "send to the team" next to "draft, not send," and must state that an always-allowed send tool can send to anyone; 5.2 "early parts get crowded out" should be "start and end get the most weight, the middle gets lost"; 3.1 "Settings → Connectors" path is unverified; 2.4 brief: Claude doesn't see the project name or description, labels drift; Module 2 challenge: rename "Operator HQ" to "NEXUS" and move the profile interview into 2.4.

## 7. Things only the lead can check in the current app (asked, not yet answered)

The Claude desktop app was rebuilt around 2026-10-20. These decide whether 0.2, 2.4, 3.1, 4.1 and 5.3 are accurate:

1. Projects: is there a "goal" field on creation; any threads or coordinator?
2. Connectors: exact click path; can the native Gmail connector send with approval?
3. Code tab on Windows: does it require Git?
4. Scheduled tasks: is "Scheduled" in the left sidebar; is there a per-tool permission list for Gmail; is "code execution and file creation" still a toggle (for 5.1)?

## 8. Tooling facts (so nobody re-learns them)

- The cloud environment can reach YouTube's DNS but YouTube serves it a bot check. Do not work around it. `WebFetch` can't reach youtube.com either.
- `YOUTUBE_API_KEY` is an environment secret (visible only in sessions started after it was added). Use the Data API for metadata, search and comments. It does not return transcripts.
- Transcripts come from the lead's desktop: `tools/fetch_transcripts.py` on branch `claude/video-research`, run in PowerShell with a single semicolon-chained line (he found step-by-step commands "way too much"). Python is installed there.
- The YouTube Data API search endpoint is limited to 100 searches a day (each costs 100 of the 10,000-unit quota); `videos`, `commentThreads` and `playlistItems` cost 1 unit each. When search is gone, discover ids by web search and vet them through the cheap endpoints.
- Transcripts round 2: `tools/fetch_transcripts.py` is now also on the working branch with the round 2 shortlist (27 ids). The lead runs it on his desktop and pushes `transcripts/` to the same branch.
- Apify is connected but on the free plan and over its monthly cap; transcript actor costs 1 cent per video. Not needed now that the script works.
- The lead's desktop has Remote Control folders listed but they are not offered to cloud sessions.
- Claude in Chrome runs in his browser and was used to set up Cloudflare Pages and the GitHub API key. It can read transcripts and comments if ever needed.
- Local Claude Code sessions on his desktop can run things with his home IP; cloud sessions cannot.
- Repo is public (made public so the local session could clone). Cloudflare project name `nexusoperator`.

## 9. Next steps, in order

1. Lead runs the round 2 transcript fetch on his desktop (one PowerShell line, given in chat) and pushes to `claude/friendly-ramanujan-jrotfb`. Then one Opus reader per module group reads them against the candidate table in `docs/video-picks.md` and the "one creator, two lessons" rule.
2. Lead looks at the rebuilt Pre-Course and Module 1 on the branch preview (https://claude-friendly-ramanujan-jr.nexusoperator.pages.dev) and at the QA fixes in the same PR. Merge only on his say.
3. Lead answers the four app checks in section 7 (they gate 0.2, 2.4, 3.1, 4.1, 5.3).
4. Rebuild Module 2 (NEXUS project in 2.4, challenge rename), then 3, 4, 5, 6, one at a time, each with its videos in and briefs cut to what the video doesn't say.
5. Re-run the 2.5 and 4.4 searches once the API quota resets; re-search 0.2 and any thin-evidence pick around 2026-12-01.
6. Then step 2 (lesson page), from PR 3's page, with notes by the video, auto-saved timestamps, credit line, centered distinctive task.
7. Then step 3 (CIRO) when the lead says so.

## 10. Do not

- Touch `nexus-academy`.
- Merge any PR or change the live site without the lead seeing it first.
- Spawn sessions or agents for redesigns or rewrites at scale. Research and reading, yes; wholesale content changes, no.
- Rewrite CIRO.
- Re-host YouTube videos.
- Add a video id to a lesson that hasn't had its transcript read.
