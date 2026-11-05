# NEXUS Operator — Project Handoff

Read this first in any new session. Joshua Vennetti is the lead. Claude (Fable) runs the project session and makes decisions after research; Opus agents do research, reading, QA and bulk work and report back. The lead sees everything before it merges.

Last updated: 2026-11-05, end of the second session. Companion docs: `docs/video-picks.md` (every video decision), `docs/IMPROVE-LATER.md` (running list of known weak spots), `docs/research/` (all search, reader, QA and animation reports).

---

## 1. What this is

A free, public, gamified course that takes someone from "never opened Claude" to running one real piece of their work as a system with Claude. In the lead's words: "a Claude school… for people who want to get good at Claude one step at a time." Goal restated this session: "help someone get better at talking to AI and using it for their needs… build and talk to it… set them up to conquer any task."

Repos: `jvennetti/nexus-academy` (original, read-only time capsule, never modify), `jvennetti/nexus-open` (the shell this was seeded from), `jvennetti/nexus-operator` (this repo; live at https://nexusoperator.pages.dev from `main`; every pushed branch gets a Cloudflare preview).

## 2. How the lead works (rules)

- Decide for him after research. Present the decision and the why, briefly. Don't survey him with options.
- Show before merging. Nothing reaches `main` until he has seen it. Branch previews are how he looks.
- Agents are Opus; the lead session is Fable. One reader per module group, not per lesson.
- Keep side chats tight, named, producing real artifacts (reports in `docs/research/`), so they can be cleared any time. Decisions happen in the lead chat.
- Copy must read human. Run the `humanizer` and `structural-humanizer` skills on all copy. His own edits are the style guide (section 4).
- Challenges must not feel restrictive. Learners use their own work; "pick one of these or your own."

## 3. Decisions made this session (all recorded, all his)

- **No lesson stays text-only.** Where no video fits exactly, take another angle (a video that teaches the underlying skill) and reframe the lesson around it.
- **Best video regardless of creator.** The earlier "two lessons per creator" cap is dropped. Dylan Davis carries 4.5, 5.2, 6.1, 6.2, 6.3.
- **Every lesson = short description + video + challenge + takeaways.** Lesson tasks are now called challenges (template label, markdown `## Challenge`, build).
- **Operator List / Operator HQ / Operator Profile naming dropped.** The project is called **Nexus Academy**; the Module 1 chat is "My tasks"; later lessons say "a task you do the same way every week."
- **Module 6 has two tracks:** build a system (workflow: skill + connectors + scheduled task) or build an app (a personal tool in the Code tab). Learners may do both; the second earns the **OVERCLOCKED** badge (not yet in `course.json`). 4.4 is the first "you can build things" moment; 2.5 has them build a usable artifact tool.
- **Intermission pages** (CIRO plus a breath button, from nexus-academy) are dropped; modules are short enough.
- **CIRO and all animations get a full redesign** by an Opus agent (section 6). CIRO's words stay parked.
- Transcripts are fetched on the lead's desktop with `tools/fetch_transcripts_ytdlp.py` (yt-dlp, cookies.txt, backoff). The cloud can't read YouTube.

## 4. The copy style (from the lead's edits; follow it)

- **Description:** two or three plain sentences saying what the video is and what they'll get. It introduces; the video teaches. "Enjoy!" is fine.
- **Challenge:** one line naming the job, then numbered steps that apply what they just watched. Exact prompts in copy boxes (fenced code in the markdown). First-time click paths spelled out with arrows (Projects → Create new project). When the app's menus are uncertain, have the learner ask Claude ("tell Claude you want to connect Gmail; say yes when it asks"). No experiments, no side-by-side comparisons, no settings audits. End with "Mark this done when…" Bracketed notes for edge cases.
- **Takeaways:** three or four plain sentences a beginner can repeat. "Suggestion:" and "Warning:" labels are fine when honest.
- Forward pointers are good ("eventually you'll learn how to get emails you can send unedited").
- **Never narrate the reader.** Don't say what they feel, avoid, dread or keep putting off. Say what we're going to do today, give three concrete examples, and let them pick. "Today we're going to finish one real piece of your work. Pick something like a proposal, a reply that needs thought, or a plan for next month." Not "there's something you keep sliding to next week."
- **Missions** (module-end pages, "Complete Module N"): sections are What We're Going to Do (two paragraphs: the plan for today, and concrete examples to choose from), How We'll Do It (steps with full sentences, prompts to paste, tips and warnings inline), You're Done When (one sentence), optional Go Further and a fallback note.
- Never: em dashes, "not X, it's Y", stacked triples, bold-colon lists, teaching in the description, branded artifacts nobody asked for.

## 5. What's built (branch `claude/friendly-ramanujan-jrotfb`, PR 5, draft)

- `build.py`: `video_start`, `video_end` (seconds or m:ss), `video_credit`; emits `?start&end&enablejsapi=1` and a plain credit line; `## Challenge` section; numbered sub-lists inside steps.
- **All 24 lessons rewritten** in the section 4 style, each with its video (`docs/video-picks.md`, "Round 2 decisions" table has id, clip, score, caption notes). Total watch time about two hours.
- 31 transcripts in `transcripts/` (round 2 and 3); 42 round 1 transcripts live on branch `claude/video-research`.
- **QA audit:** 13 functional fixes to the shell (`docs/research/qa-audit.md`; re-test with `tools/qa/audit.js`). No design changes.
- `docs/IMPROVE-LATER.md`: the running list of weak material and app facts to verify.
- Module challenge pages (`content/challenges/mod*.md`) got a find-and-replace only; they still need the section 4 rewrite.

## 6. In flight when this was written

- **Animation and CIRO redesign** (Opus agent, worktree branch `worktree-agent-a850914aeffdfb039` under `.claude/worktrees/`). Brief: redraw CIRO cleanly with grouped SVG parts, real animation principles (easing, anticipation, follow-through, secondary motion, idle breathing), CIRO driving on its tread, applied to every animated page, `prefers-reduced-motion` respected, QA audit must stay at or under 7 findings, report at `docs/research/animation-redesign.md` with frame sequences under `docs/research/animation/`. **When it lands:** `git merge worktree-agent-a850914aeffdfb039` into the working branch, rebuild, push, and look at the branch preview. If the lead dislikes it, revert the single merge commit.

## 7. Things only the lead can check in the app

Listed in `docs/IMPROVE-LATER.md` under "App facts to verify." The ones that gate the most lessons: connectors path and native Gmail send; Code tab button labels, Manual vs Auto defaults, Windows and Git; Projects fields; artifacts buttons and whether saved data persists; the Scheduled sidebar and per-tool permissions.

## 8. Tooling facts

- Cloud sessions can't reach YouTube pages or transcripts (bot check; don't work around it). `YOUTUBE_API_KEY` is an environment secret: `search` is 100 calls/day (resets 08:00 UTC); `videos`, `commentThreads`, `playlistItems` are cheap and always work. When search is gone, discover ids by web search and vet through the cheap endpoints.
- Transcripts: on the lead's desktop, from `C:\Users\venne\nexus-operator`, with `cookies.txt` (git-ignored, exported from Chrome with "Get cookies.txt LOCALLY") in the repo root. The one-liner, run in PowerShell: pull the branch, `python tools/fetch_transcripts_ytdlp.py`, add, commit, push. Already-fetched ids are skipped.
- Cloudflare branch preview for the working branch: https://claude-friendly-ramanujan-jr.nexusoperator.pages.dev
- Playwright and Chromium are preinstalled in the cloud; `tools/qa/` has the audit scripts.

## 9. Next steps, in order

1. Lead reads the rebuilt lessons on the branch preview and marks anything off. Apply his notes; they become the style guide.
2. Merge the animation redesign when it lands (section 6); lead reviews on the preview.
3. Rewrite the six module challenge pages in the section 4 style; add the Module 6 two-track wording and the OVERCLOCKED badge to `course.json` and the hub.
4. Lead answers the app checks; fix any lesson text that depends on them.
5. Lesson page redesign (handoff step 2 from the first session): notes beside the video, auto-saved playback position, obvious copy buttons, centered distinctive challenge box, "Mission" naming for module-level challenges.
6. CIRO's words (step 3), when the lead says so.
7. Re-search the weak video slots around 2026-12-01 (list in `docs/IMPROVE-LATER.md`).
8. Merge PR 5 to `main` only on the lead's say.

## 10. Do not

- Touch `nexus-academy`. Merge anything without the lead seeing it. Rewrite CIRO's words. Re-host YouTube videos. Add a video id whose transcript hasn't been read. Hand-edit generated pages. Change `DEV_UNLOCK`.
