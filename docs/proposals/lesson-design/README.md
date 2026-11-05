# Lesson page: three clean directions

Step 2 preparation. The lead's note on the current lesson page (`module-2/lesson-2-1.html`): "way too much going on." Each option below is a standalone, working page built on lesson 2.1. They use the same `nexus_task_<path>` and `nexus_notes_<path>` keys and the same soft lock on Next ("skip ahead" stays as the escape hatch). Nothing in `templates/` or any generated page was touched.

Open them locally: `python3 -m http.server` from the repo root, then `http://localhost:8000/docs/proposals/lesson-design/option-a.html` (and b, c). Screenshots are at 1400 wide (`*-desktop.png`) and 390 wide (`*-phone.png`). B and C have extra state shots (`-progress`, `-task`, `-done`).

The brief and step copy were trimmed by hand for these mocks so each layout can be judged at the length it wants. The real trimming happens in the markdown when the chosen template ships.

## Option A: Task at the centre

**Removes** the separate brief box, the separate takeaways box, the free-floating notes box and the two-card prev/next bar. **Keeps** everything on one scrolling page: a short "idea" block (one line, the four parts as four small tiles, the smart-stranger test) that merges brief and takeaways, then one large glowing task card. Notes become an answer field inside the last step, where the task already asks for them. One button does both jobs: "Mark task done", then it turns green and reads "Next: Give It What It Needs →". **Trade-off:** the smallest change from today and the easiest to build into the template, but it is still one long page on a phone. It is cleaner, not sequenced.

## Option B: Step by step

**Removes** the takeaways box, the notes box on the page and the prev/next cards. **Keeps** a three-paragraph brief, then the task shows only step 1. Checking a step collapses it to a one-line done row and reveals the next one, with a thin progress bar under the nav. Finishing the last step logs the task and reveals the Next button. Notes live in a slide-out drawer (bottom sheet on phone) behind a floating "Notes" pill. **Trade-off:** the strongest sense of momentum and the least on screen at any moment, but it needs a new localStorage key (`nexus_steps_<path>`), a learner can't scan the whole task up front, and the floating pill sits over content on small screens.

## Option C: Three screens

**Removes** scrolling between parts entirely: only one of Brief, Task or Done is ever on screen. **Keeps** a stepper (1 Brief, 2 Task, 3 Done) at the top. Brief is the title, the four parts as a clean table and the stranger test, with "Start the task →". Task is the steps and "Mark task done". Done is a check, "Task logged · Lesson unlocked", a single reflection question (this is where notes go) and "Next →". Takeaways are gone; the brief carries them. Returning learners land on Done. **Trade-off:** the literal match for "brief, then the task, then done" and the calmest page, but the brief is hidden while working (one tap back), and it is the biggest change to `build.py` and the template since the page becomes three panels.

## Decision

**Option C.** It is the only one where the learner truly sees one thing at a time, and the cost (brief one tap away during the task) is small for lessons this short. Steal A's single-button "done becomes next" idea for the Task screen if the extra Done screen feels slow in testing.
