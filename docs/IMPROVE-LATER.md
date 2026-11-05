# Improve later

Running list of material that is known to be weaker than it should be. Add to it; remove items when fixed. Last updated 2026-11-05.

## Videos (re-search around 2026-12-01, when post-redesign videos have a track record)
- **4.2 Folders Are Memory**: a 65-second clip (`j9eiZcBkNg0`), a thesis not a demo. Want: a non-coder setting up a folder in the desktop Code tab. Also check Mstimaj `yTy8WV3Y9Nk` 0:00–1:44 during the Module 4 rebuild.
- **3.3 A Morning With Claude**: `D5nZOUfac_0` is from the Cowork era and the channel name ("Nexus") needs a caption. Want: a morning run in Chat with Gmail and Calendar, post-redesign.
- **4.1 Chat Answers. Code Acts.**: a 94-second clip from a creator with an agency funnel. Want: a calm post-redesign Code-tab first look that says "Chat can't change files, Code can."
- **2.3 Iterate and Push Back**: the demo is in Gemini. Nothing anywhere shows Claude hedging and the user pushing through; if one appears, it goes here.
- **0.2 Know Where Things Are**: the pick is right but has 47 views. Check for a better-known tour.
- **2.5**: pre-redesign UI ("New Artifact", publish, "Send to Claude"). Replace when a post-redesign tool-building video exists.
- Round 1 and 2 search quotas were patchy; 4.4 alternatives were never searched with the API.

## App facts to verify (change the lesson text if wrong)
- Connectors path: via the + menu, Customize, or Settings? (Lessons now say "tell Claude you want to connect…" to dodge this.)
- Can the native Gmail connector send, and is "needs approval" the default?
- Code tab: button label "Local" vs "This computer"; does Windows need Git; what exactly Manual prompts for; is Auto now the default; do deletes always ask; does Auto override a connector's "needs approval".
- Projects: is there a "goal" field; Files vs Knowledge label; can chats be dragged into a project.
- Artifacts: Output button, Artifacts tab, name of the capabilities toggle; does saved artifact data persist for a solo Pro user (2.5 challenge depends on it).
- Scheduled: sidebar label, Advanced settings → Connectors and Notifications, per-tool permissions.
- Skills: "code execution and file creation" toggle; where the skill creator saves; whether "update the skill" works in Chat.
- 4.5 challenge asks Claude to "set up version history". Confirm what Claude Code does with that in the desktop app (git init vs app checkpoints) and reword if needed.

## Content
- Module challenge pages (`content/challenges/mod1–6.md`) got only a find-and-replace (Operator HQ → Nexus Academy, Operator List → task list). They need the same rewrite as the lessons: short scenario, numbered steps with exact prompts, plain deliverable.
- Module 6 two-track design (system or app) is in the lessons' words but not yet in `mod6.md`, the curriculum, or the hub. OVERCLOCKED badge not yet added to `course.json`.
- Module intro and completion CIRO lines still reference the old Module 5/6 themes in places; CIRO is parked, but check for contradictions once the lessons settle.
- `docs/curriculum.md` still describes the Operator List thread and the old 2.2/2.3 framing. Update after the lead signs off on the lesson copy.
- Lesson durations and task_time values are guesses. Adjust after a real run-through.
- 3.1 takeaway says Claude "has read your past emails"; true only once Gmail is connected and only for what it searched. Fine for beginners, revisit if it misleads.

## Shell
- Mission wording: the module-end page says "Complete Module N" but the hub cards and the lesson nav's "next" label may still say "Challenge" in places; finish the rename (`hub.html` MODULES block in build.py, templates/challenge.html nav).
- OVERCLOCKED badge is not in `course.json` or the hub yet.
- Lesson page v2 is done. Still to confirm in a real browser: auto-resume with a playing video; the glow on low-end phones.
- "No music?" button still overlaps the title on the phone hub (QA audit, accepted).
- Font-swap reflow at load (accepted).
- Intermission pages (CIRO plus a breath button, from nexus-academy) were dropped: modules are two to five lessons now. Revisit only if a module grows past five lessons.
