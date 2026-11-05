# NEXUS Operator — Curriculum Spec

## Who it's for

Someone who has heard of Claude, maybe opened it once, and wants to actually work with it. No technical background assumed. The end state: they run at least one real, recurring piece of their work as a system (connectors + a skill + a scheduled task, with Claude Code where files are involved), and they know how to build the next one.

## Design rules

- **Lesson = brief + (optional video) + task.** The task is mandatory. The next lesson is soft-locked until the task is marked done. A "continue anyway" link exists for honesty, not for routine use.
- **Videos are optional per lesson.** The brief carries the teaching. A video is added only when one exists that is better than the brief, is under 20 minutes, and will age acceptably. Product walkthroughs should come from official sources. Perspective pieces can come from creators.
- **Challenges use the learner's own work.** Each challenge includes a fallback for people without a job or business that generates the right kind of work.
- **Context management comes late (5.2)** because it only makes sense once the learner has hit the wall.
- **No lessons on:** MCP as a concept, Zapier, n8n, "agents" as a topic, Cowork, the terminal. Claude Code is taught inside the desktop app. Connectors are taught as "connect your daily tools," with MCP mentioned once as what's under the hood.
- **One running thread:** the Operator List (Module 1) → Operator Profile and Operator HQ project (Module 2) → the time-saved tally (Module 3) → the workspace (Module 4) → skills (Module 5) → the system (Module 6).

## Course map

| Module | Title | Lessons | Challenge | Badge |
|---|---|---|---|---|
| Pre | Setup | 0.1 Get Claude on Your Computer (skippable) · 0.2 Know Where Things Are (skippable) | none | SYSTEM ONLINE |
| 1 | The Operator Mindset | 1.1 What Changed · 1.2 Director, Not Doer | The Operator List: five tasks, what Claude needs for each, ranked | BOOT SEQUENCE |
| 2 | Speak Claude | 2.1 Anatomy of a Good Prompt (bad-prompt rewrite) · 2.2 Give It What It Needs · 2.3 Iterate and Push Back · 2.4 Projects · 2.5 Make Things, Not Just Text | Operator Profile + Operator HQ project + one real deliverable + one built thing | SIGNAL STEADY |
| 3 | Claude in Your Tools | 3.1 Connect Your Inbox and Calendar · 3.2 Connect Your Work Tools · 3.3 A Morning With Claude | A full real workday with Claude connected, with a time-saved tally | CONNECTED |
| 4 | Claude Code | 4.1 Chat Answers. Code Acts. · 4.2 Folders Are Memory · 4.3 The Instructions File · 4.4 Build Something Real · 4.5 Sessions, Permissions, Safety | One file-shaped task from the Operator List built as a tool, with a HOW-TO | ARCHITECT |
| 5 | Skills & Automation | 5.1 What a Skill Actually Is · 5.2 Context Management · 5.3 Scheduled Tasks | Two skills + one scheduled task run three times + a trust decision | AUTOMATOR |
| 6 | Build Your System | 6.1 Choose Your Workflow · 6.2 Build It · 6.3 Run It, Then Refine It · 6.4 Tips From the Field | Version 2 + SYSTEM.md read by a stranger + clean workspace + next-system plan | OPERATOR |

24 lessons. Roughly 6 to 8 hours of active work spread over three to four weeks, because Module 6 includes a week of running the system.

## Learning outcomes

By the end, the learner can:

1. Brief Claude with goal, context, format and example, and iterate until the output is usable.
2. Push through hedging and get the full version of what they asked for.
3. Keep standing context in Projects, `CLAUDE.md` and skills instead of re-explaining.
4. Connect email, calendar and one work tool, and carry information between them by asking.
5. Use Claude Code in the desktop app on a well-organized folder, with version history and a safe permission posture.
6. Write a skill from a task they've done manually, and schedule it.
7. Recognize a degraded conversation and hand off to a fresh one.
8. Map a workflow (input, steps, output, destination), build the simplest version, and refine it from a run log.

## What's deliberately deferred

- **Video selection.** Every lesson currently renders as Read + Do. A separate pass picks videos per lesson with the rules above; the build prints the list of lessons without one.
- **New CIRO lingo and graphics.** Dialogue has been rewritten to match the new content but the voice and SVG are inherited from the original. A branding pass is secondary to content.
- **Bonus Vault.** Currently holds the four videos from the original. Intended future use: tips, go-deeper material, and anything cut from lessons for length.
- **Paid / cohort versions.** Not built. The shell supports a roster via config if that's wanted later.

## Refreshing the course

When Claude changes:

1. Grep `content/` for the feature that changed.
2. Edit the markdown. Keep the task; usually only the brief's mechanics change.
3. `python3 build.py`, check the page, commit.

A quarterly pass should also re-check every video id still resolves and still matches the lesson.
