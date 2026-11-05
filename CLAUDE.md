# NEXUS Operator — Claude Instructions

Public, single-operator rebuild of NEXUS Academy. Static HTML/CSS/JS, no framework, no build dependencies beyond Python 3.

## Rules

- **Never touch `jvennetti/nexus-academy`.** It is a read-only time capsule. Read it for reference if needed; never push to it.
- **Content lives in `content/`, pages are generated.** Never hand-edit files in `pre-course/` or `module-*/`. Edit the markdown or `course.json`, then run `python3 build.py`.
- **`hub.html` is partly generated.** The `MODULES`, `BADGES` and `CIRO_LINES` blocks are rewritten by `build.py`. Everything else in the hub is hand-maintained.
- `DEV_UNLOCK` in `hub.html` stays `false`.
- Every lesson ends with a challenge. A lesson without a "## Challenge" section will fail the build on purpose.
- Videos are optional per lesson. A lesson with an empty `video:` renders as "Read + Do". Only add a video id once it has been watched and judged worth the learner's time (under 20 minutes, official source preferred for product walkthroughs).

## Layout

```
content/course.json          modules, badges, CIRO dialogue, lesson order
content/lessons/N-M.md       one file per lesson: front matter + ## Brief / ## Challenge / ## Takeaways
content/challenges/modN.md   one per module: ## Scenario / ## Setup? / ## Steps / ## Deliverable / ## Extension? / ## Note?
templates/*.html             page templates with {{PLACEHOLDERS}}
build.py                     generator
docs/curriculum.md           the course spec and the reasoning behind it
hub.html, ciro-intro.html, index.html, machine/, bonus/, audio/, images/, nexus-transition.js   the shell
```

## Lesson front matter

```
title:      Lesson title
duration:   ~15 min          (shown in the lesson header)
task_time:  15 min           (shown on the task box)
video:      YouTube id or empty
video_note: optional one-line caption under the video
skippable:  true/false       (adds a skip button that marks the challenge done)
skip_label: text for the skip button
```

## Conventions carried over from the shell

- Progress is in localStorage under `nexus_operator` (JSON), plus `nexus_task_<path>`, `nexus_notes_<path>`, `nexus_last_page_operator`, `nexus_intro_seen_operator`, `nexus_hub_visited_operator`, `nexus_machine_activated`.
- Pages in subdirectories reference root assets with `../`.
- `nexus-transition.js` stays at root and injects the mobile CSS for every page.

## Current step

Read `docs/HANDOFF.md` first: it carries the project lead's direction and all decisions. Then `docs/video-research.md`. Step 1 (videos) is in progress; steps 2 to 4 wait on it.

## Workflow

Develop on a `claude/*` branch, push, open a PR, squash-merge to `main`. Cloudflare Pages deploys `main` to https://nexusoperator.pages.dev automatically.
