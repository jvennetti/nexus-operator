# Opus reader report: lessons 3.1, 4.1 and 4.3 (2026-11-05)

Read all 10 transcripts in full plus lessons 3-1, 3-2, 4-1, 4-2, 4-3.

**Build problem for any clip pick:** `build.py` embeds `?enablejsapi=1` only. Add `video_start` and `video_end` and emit `?start=N&end=M&enablejsapi=1`.

## 3.1 Connect Your Inbox and Calendar

### Bm3kges7l1Q (~3:00, Oct 23–Nov 3)
- Profile → Settings → Customize → connectors → Gmail → Connect → Google sign-in. Tools list (draft, filter, label, forward, get thread, reply). **Per-tool permissions**: block, or "needs approval" for reply and send (1:38–2:25). Tests "fetch my latest email." Delivery poor (says "CRO" for Claude). Score 5/10. The permission panel is the one thing no other candidate shows.

### FpRNId-jeTQ, Kevin Stratvert (5:54, June 2026)
- Sidebar Customize → Connectors → + → Browse ("over 200"). "By default, Claude has access to read-only tools… for any of the actions that modify your account… you'll have to give your approval." Prompt "review my inbox and tell me if there are any high-priority emails." Draft reply saved to Gmail, checked in Gmail. **3:07–5:48 Zapier sponsor** (nearly half). Says "Unlike the native Gmail connector, which created a draft… Zapier can actually send," which the October video contradicts (native send tool with approval toggle). No Calendar. Score 4/10 overall, 7/10 for 0:26–3:07.

### r6axtiq5-mM (2:00, Oct 23–Nov 3)
- "It only ever sees what you can see yourself… asks before doing anything that sends, deletes, or shares… available on every plan." "+ button in any chat → Connectors → Manage connectors"; toggle per chat from the plus menu. Gmail and Calendar ideas (find a time, create and move events), Drive, Docs, Slack, research mode. Narrated list, demonstrates nothing. Score 6/10.

### Verdict: text-only, confirmed.
Add to the task: open the Gmail connector's tool permissions and confirm send/reply are "Needs approval"; check Claude's draft in Gmail's Drafts folder before sending; Calendar: "Find a 30-minute slot this week when I'm free in the afternoon"; turn a connector off and on for a single chat from the **+** menu.

Flag: three videos show three different paths to Connectors (Settings → Customize; sidebar Customize → Connectors; + in chat → Connectors → Manage). Verify in the current app. Also verify native Gmail send.

## 4.1 Chat Answers. Code Acts.

### P7-0grEB7nk, Teacher's Tech (10:41, Apr 27)
- "you don't need NoodeJs. You don't need no Git" (1:28; viewers dispute). Three sidebar icons, "the checklist icon is co-work" (2:18). Routines, dashboard, Local/Select folder, model (Opus 4.7), effort. Permission mode "Accept edits" default, switches to "Ask permission," mentions Plan. Makes an empty folder: "anything I ask Claude to do will happen inside this folder. Nothing outside of it." Builds an HTML name picker; trust workspace; allow once/always. Built-in terminal pointed out (8:26). Usage limits. Clearest teaching, but old UI (Cowork icon, old mode names), builds a web app not documents, Git claim disputed. Score 7/10.

### 8c6JZ18W0Bo, Nick Saraev (4:50, Nov 1, post-rebuild)
- **0:00–0:24 viral hook** (millions, Mr. Beast). 0:24–0:52 download, tabs: "chat… can't actually change any of your files. Claude Code can." $20 plan. 0:52–1:33 "In the prompt box, click on local, then open folder"; plain English; "describe the outcome and not the steps"; stop button or type a correction. 1:34–2:00 modes Manual/Plan/Auto; **2:00 "I recommend sticking with auto for virtually everything."** Then model/effort, CLAUDE.md and /init, context and new session, diffs, browser pane, speed-run through skills, connectors, plugins, mods, sub-agents, Scheduled, remote control, artifacts; channel plug.
- Desktop-only and current; no terminal. 4.1 material is only 0:24–~2:00. Agency funnel in description. Score 5/10 for 4.1, but the only current-UI candidate.

### -YTot4fwNFY, ClipCookie (8:51, Jul 13)
- "make sure you select 'Code'"; folder; Trust Workspace; models; effort (repetitive); modes Manual, Accept Edits, Plan, Auto, Bypass ("just stick to Auto"); Plan mode accept/revise/reject; Play button preview; annotate; /clear. Desktop-only, no promotion, padded, steers to Auto, builds a to-do web app. Score 5/10.

### CtbfEK0x45k, TechPP (10:26, late Oct–Nov)
- Terminal from start to finish (winget Git, PATH, `claude doctor`, `cd`, `/help`, `!` shell, Esc Esc rewind, Shift+Tab modes, git commit). Disqualified. Useful fact: "Git for Windows is optional, but Anthropic recommends it" (1:08). Windows learners may hit a Git requirement in the desktop Code tab too; test before 4.1 ships.

### TvLgqLRWnho, Web Technology Institute "for Business Owners" (11:36, late Oct–Nov)
- Describes the desktop Code tab correctly but "In this video, I'll use the terminal" (4:23). Practice folder of copies; "What's in this folder?"; four-part request (Goal, Context, Limits, Done); CSV clean-up with a spot-check that catches Claude's own off-by-one; receipts PDFs → expenses.csv; permission rule; course plugs at 6:14 and 11:14. Excellent teaching for non-coders on documents, disqualified by the terminal. **Borrow for the brief:** "Don't point Claude Code at your real business files on day one… put copies in it"; "Starting with a question is the safest first step"; "Say yes to reading, and to creating new files. Read carefully before you allow changes to files you already have. And say no to deleting anything you didn't ask it to delete."

### Pick: 8c6JZ18W0Bo, 0:24–1:58 (end=118 ends cleanly on "risky, like potentially deleting files"), only with start/end support. Otherwise text-only until ~Dec 1.
Make the learner DO: find Local → Open folder in the prompt box and pick nexus-workspace; set the mode selector to Manual before the first request so the permission prompt appears; ask for an outcome, not steps ("Make a one-page summary of what this folder is for"); stop it mid-task and type a correction; open Finder/Explorer and confirm the file exists.
Brief must not repeat: Chat can't change files, Code can; how to pick a folder; "plain English"; the paid-plan line. Brief must add: ignore his Auto advice, use Manual in this module; copies only; ask a question before asking for changes; the yes/no permission rule above.

## 4.3 The Instructions File

### O0FGCxkHM-U, Claude official (3:01, May 10)
- "persistent memory about your project"; without it, "start fresh every single time… make assumptions"; markdown file at the root read "automatically every time you start a session… like an onboarding script"; "contents are appended to your own prompt"; `/init`. **0:55–1:33 Next.js/Tailwind/Drizzle example (jargon).** Project-level vs user-level; version control. Tip 1: when you correct Claude, "explicitly ask Claude to save this to memory." Tip 2: "use the @ symbol with the file path." Tip 3: "start off a project without a Claude.md file… see where you have to constantly course correct… keeps your Claude.md file compact." Close: "Start with your stack, your preferences, and then commands."
- No padding, no promotion. About 75% concept that transfers; the example and "version control" don't. Tip 3 conflicts with task step 1 (draft one now); reconcile: start small, grow from corrections. Score 7/10.

### h7QJL2_gEXA, GritAI Studio (6:39, Jan 25)
- Hook and series bumper to 0:58. "project memory… onboarding documentation." `/init` scans package.json. **1:58–3:14 memory hierarchy** (enterprise policy, project, .claude/rules, user memory, CLAUDE.local.md). "ask Claude to add it… or remember it"; /memory. **3:40–4:28 modular rules, glob patterns, @ imports.** Pro tips: /init first; keep it concise ("Don't make it a novel"); date learnings; subfolder CLAUDE.md; review periodically: "Please review our Claude MD file and highlight any parts we should simplify or remove" (6:10). Terminal/IDE framing. Score 5/10 for a non-coder.

### Pick: O0FGCxkHM-U, whole.
Caption: "Skip past the code example at 0:55 to 1:33 if it means nothing to you. Your 'stack' is your folder layout and how you like things written."
Make the learner DO: test it's read automatically by closing the session, starting a new one, and giving a task that triggers one rule without mentioning it; correct Claude once then "save that to CLAUDE.md"; add a line pointing to a reference file with @ ("For tone, follow @REFERENCE.md"); keep it compact, and close with "Review this CLAUDE.md and tell me what to simplify or remove."
Brief must not repeat: read automatically every session; "like onboarding"; "when you correct it, tell it to save the rule." Brief must add: rules vs information; what NOT to put in; the link to Project instructions in Chat; translation of the code example for a documents folder; use the lesson prompt, not /init; ignore user-level and version-control files; reconcile "start without one" with "draft small now."

## Separate risks
1. 3.1 settings path unverified.
2. Windows and Git for the desktop Code tab.
3. Native Gmail send: Lesson 3.1 step 4 assumes it works with approval.
