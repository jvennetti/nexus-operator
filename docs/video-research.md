# Video Research — Step 1 of the course improvement plan

## The job

Pick at most one YouTube video per lesson for the lessons listed below. Everything else stays text-only on purpose. The owner's standard: full-on meat that hits the lesson's outcome, in clear helpful language, from someone who actually teaches it. Popular is fine. Hollow hooks, "promises the world" long-form, and anything showing an outdated Claude (Cowork, terminal-only Claude Code) are out. Official Anthropic videos get no preference beyond breaking ties.

## Tools

- `YOUTUBE_API_KEY` is an environment secret. Use the YouTube Data API v3 (`videos`, `commentThreads` with `order=relevance`, `search`). Do not fetch youtube.com pages directly: this environment is served a bot check, and working around it is not allowed.
- The API does not return transcripts. Transcripts are read by the owner, or by Claude in Chrome in the owner's browser, for finalists only.

## Process, per lesson

1. Pull metadata for every candidate: channel, duration, publish date, views, likes, comment count. Drop anything over 20 minutes or published before 2026 unless it's clearly timeless (perspective pieces only).
2. Run a `search` for the lesson topic and add up to three promising results to the pool.
3. Pull the top 25 comments by relevance for each survivor. Count praise for clarity / concision / helpfulness vs. complaints of clickbait / fluff / outdated / "where's the tutorial". Quote the two most telling comments.
4. Score each 1 to 10 for "meat per minute" with a one-line justification.
5. Report a table per lesson, then at most two finalists per lesson for transcript review. "None, keep text-only" is a valid result.
6. After the owner confirms picks: put the id in the lesson's `video:` front matter, add `video_note:` if only a section applies (give the start minute), and cut the lesson brief down so the video carries the teaching and the brief is two or three sentences of framing. Rebuild, verify, push.

## Lessons that get a video, with the starting candidate pool

These ids came from web search titles only. None has been watched or verified. Treat them as leads.

| Lesson | Outcome the video must teach | Candidate ids | Search terms |
|---|---|---|---|
| 0.2 Know Where Things Are | Tour of the Claude desktop app for a first-time user: new chat, sidebar, attaching files, settings, Chat vs Code | 0vZ_UVLhSQQ, sKJN4kAnJvA, -xEF5WrdIWs | claude desktop app tour beginners 2026 |
| 1.1 What Changed | Why AI changes how work gets done; the shift from doing to directing. Perspective, not tutorial | KfDZNRMOlto | how to think about using AI 2026 mindset |
| 2.1 Anatomy of a Good Prompt | Goal, context, format, example | ysPbXH0LpIE, Yj_ZI8E_wDw | how to write a good prompt claude beginners |
| 2.4 Projects | What a Project is, instructions vs knowledge, when to make one | GJ5jTgcbRHA, w7_yWjYyxjE, MLl41Q9p3Ps | claude projects tutorial |
| 3.1 Connect Your Inbox and Calendar | Connecting Gmail and Calendar, then using them in chat | _jjSS0qGFbI, FpRNId-jeTQ, XhFu-8Oii5g | claude connectors gmail calendar tutorial |
| 4.1 Chat Answers. Code Acts. | Claude Code in the desktop app for a non-technical person, no terminal | P7-0grEB7nk, s4g8xpgVdts, -YTot4fwNFY, inxAjCRHe2o | claude code desktop app beginners no terminal |
| 4.3 The Instructions File | What CLAUDE.md is and what belongs in it | h7QJL2_gEXA, i_OHQH4-M2Y | claude.md explained |
| 5.1 What a Skill Actually Is | A skill is a text file of instructions; how to write one | DB_t1v4xOfQ, 5G1IVbcOYMk, wO8EboopboU, iIXL1vm8Qp4 | claude skills explained beginners |
| 5.2 Context Management | What the context window is, why long chats degrade, what to do | RW3bQY7hbDc, UqsM9RxMTRo | context window explained simply |
| 5.3 Scheduled Tasks | Setting up a task that runs on a schedule in Claude | 9rkRHYe4vCk, Xtg6Af999lI, TGvYv32XetA, _zyEkFY64nw | claude scheduled tasks how to |

Lessons deliberately text-only: 0.1, 1.2, 2.2, 2.3, 2.5, 3.2, 3.3, 4.2, 4.4, 4.5, 6.1, 6.2, 6.3, 6.4. They teach habits, and a short brief plus the task does that better than watching someone else.

## After this step

The owner's order of work: (1) videos, (2) visual design of lesson pages, which currently have too much going on, (3) CIRO's language and tone, worked through with examples, (4) graphics and robot animation. Do not start (2) through (4) until (1) is confirmed.
