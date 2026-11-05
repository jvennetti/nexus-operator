# Lesson page

Lesson 2.1 on the nexus-open lesson page, with a task added.

The order is the same as nexus-open: the title box, the video with its timestamp bar (only when a lesson has a video), notes, Key Takeaways, then Previous/Next. The task box sits right after the brief. When you press "Mark task done" it folds into one green "Task done" line, and you can reopen it with "Show task". Next stays dimmed until the task is done, with a "continue anyway" link.

Screenshots: `lesson-desktop.png`, `lesson-phone.png`, and the `-done` versions.

## Test: nexus-academy lesson 1.3 with a task

`lesson-1-3-task.html` is a copy of nexus-academy's `module-1/lesson-1-3.html` with a task added after the video. Everything else, including the timestamp bar and notes, is the original page. The original in nexus-academy is not changed.

Screenshots: `lesson-1-3-task-desktop.png`, `lesson-1-3-task-phone.png`, and the `-done` versions.

(The pages and screenshots above are on the `claude/lesson-design-options` branch.)

## v2: the lesson template

`templates/lesson.html` now builds every lesson page in the approved layout. `build.py` is unchanged; it already stopped emitting the credit and note block in 0690943.

### What the page does, top to bottom

1. **Top box**: the title and the description (the `## Brief` section). There is no kicker line. `{{MODE}}` and `{{DURATION}}` are kept as `data-` attributes on the box, so nothing visible renders.
2. **Video row**: at 900px and wider, the embed takes about two thirds of the row and the **Notes** panel the other third. The panel matches the video's height exactly and its textarea scrolls inside it. The row is 1040px wide, a little wider than the text column, so the video isn't too small. Below 900px the two stack, video first.
   - Notes save automatically to `nexus_notes_<path>`. That is the same key as before, so the hub's "Your Notes" still works.
   - **+ Save timestamp** reads the player's current time through the YouTube IFrame API and inserts `[m:ss] ` at the cursor, starting a new line. Every `[m:ss]` in the notes shows as a chip under the textarea, with the time and the first words after it. Clicking a chip seeks the video to that time and plays it. The button stays disabled until the API reports that the player is ready.
   - **Auto-resume**: while the video plays, its position is saved to `nexus_video_pos_<path>` every 5 s, on pause and when you leave the page. It is cleared when the clip ends. On the next visit, if the saved position is more than 10 s past the clip start and before its end, the embed's `start` is rewritten to that position before the iframe loads, so resume works even if the API is blocked. A **Resume from m:ss** chip then appears under the video; clicking it seeks there, plays, and hides the chip. Nothing else sits under the video.
   - A lesson without a video shows the Notes panel full width under the top box, with no timestamp button and no API load.
3. **Key Takeaways**.
4. A thin divider with a small diamond.
5. **Your Challenge**: the bracket-corner box from `lesson-1-3-task.html`, with the 2px gradient top line from the option A page and a slow 4.5 s pulsing blue glow. It shows no time estimate; `{{TASK_TIME}}` is kept as a `data-` attribute. Inside: the intro line, numbered steps with sub-lists and copyable prompts, the "Mark this done when..." line, then **Mark challenge done** and the skip button where a lesson has one. When the challenge is marked done, the glow stops and the box folds into one green "✓ Challenge done · Show challenge" line. That line is a button that opens and closes the box. With `prefers-reduced-motion`, the glow is static and the fold isn't animated.
6. **Previous / Next**: Next is dimmed until the challenge is done. Pressing it while dimmed shakes it and shows "continue anyway", as in the QA-fixed version.

The ids and functions that the hub and the QA audit rely on haven't changed: `task-box`, `task-done-btn`, `task-done-label`, `markTaskDone`, `skipTask`, `TASK_KEY`, `next-btn`, `nav-hint` and `nav-anyway`.

The QA fixes still hold:
- The hidden "continue anyway" link stays `visibility:hidden` until it is shown.
- Once the challenge has folded, its body is `visibility:hidden`, so its Copy buttons can't be reached with Tab.
- The resume chip, the chip list and the timestamp button on no-video lessons are hidden with `hidden`, not with opacity.
- The no-video class and the resume decision are set by an inline script before the first paint, so nothing moves.
- `nexus-transition.js` still loads render-blocking in `<head>`.

The shell's fixed `width:1280px` is now `max-width:1280px`. This also removes the horizontal scrolling between 769 and 1279px.

### Screenshots (1280×900 and 390×844, at 2×)

- `v2-lesson-2-1-desktop.png`, `v2-lesson-2-1-desktop-done.png`
- `v2-lesson-2-1-phone.png`, `v2-lesson-2-1-phone-done.png`
- `v2-lesson-3-1-desktop.png`, `v2-lesson-3-1-desktop-done.png`
- `v2-lesson-3-1-phone.png`, `v2-lesson-3-1-phone-done.png`

The embed is black in the phone shots because YouTube hadn't drawn its thumbnail when they were taken.

### What was checked (Playwright, Chromium)

- The page logs no console errors and throws no page errors. The one console error on 2.1 comes from the YouTube iframe itself (a "compute-pressure" permissions-policy message).
- There is no horizontal scroll at 390px. At phone width, every visible button and link outside the body text is at least 44px tall.
- The YouTube IFrame API **did load** in the sandbox. The player reported ready, the timestamp button became enabled, and `getCurrentTime()` returned the clip start (112 s).
- Notes and timestamps, tested with a stubbed player: `[2:05] ` was inserted at the cursor on a new line, the notes were saved under `nexus_notes_<path>`, the chip appeared and seeked to 125 s, and the position was saved within 5 s while the stub reported "playing".
- Resume: a saved 200 s gives `start=200&end=335` and "Resume from 3:20". A saved 115 s (within 10 s of the 112 s start) and a saved 400 s (past the 335 s end) give no resume and keep the original `start=112`.
- No-video case, tested on a temporary copy of 2.1 with the embed removed: the notes panel is full width, there is no timestamp button, and the API script doesn't load.
- Fold: after "Mark challenge done" the box has the `.done` class, Next unlocks, the glow animation is `none`, and no control inside the folded body is visible or reachable with Tab.
- `tools/qa/audit.js` reports 5 findings across 40 runs, all of them accepted font-swap or activation-feed findings. All six lesson runs are clean, including the soft-lock flow. On the same machine the base commit gave 9: the extra findings were timing noise, plus a phone `.task-box` resize on lesson 0.1 that no longer happens. `tools/qa/check_links.py` finds 0 unresolved paths.

### Check in a real browser

Headless Chromium can't play YouTube video: the player went to buffering, then back to unstarted. These need checking by hand:

- Press play, wait about 10 s, then press **+ Save timestamp**. The inserted time should match the player.
- Click a timestamp chip. The video should jump to that time and play.
- Watch past the first 10 s, then reload. The video should be cued at that point and "Resume from m:ss" should show. Clicking the chip should seek there and play.
- Let a clip reach its `end`, then reload. There should be no resume chip.
- Block the API (for example with an ad blocker that blocks `youtube.com/iframe_api`). The timestamp button should stay disabled. The timestamp chips and the resume chip should fall back to reloading the embed at that time with autoplay, and resume on load should still work.
