# Opus reader report: lessons 5.1, 5.2 and 5.3 (2026-11-05)

Read all 11 transcripts in full plus lessons 5-1, 5-2, 5-3, 4-3.

## Picks
- **5.1:** `O6tQ6V_P8a0`, 0:22–6:36.
- **5.2:** `xaQG-eD9d58`, 0:25–10:37. Runner-up `-uW5-TaVXu4`, 0:46–7:00.
- **5.3:** `6RXjpKXy2qk`, 0:00–8:17. The only post-rebuild, chat-user, on-task candidate. Thin audience evidence (37 views, 0 comments); the lead should watch it and click through his own app first.

## Problems in the current lesson copy
1. **5.1 task doesn't build a real skill.** It makes a `/skills` folder with a CLAUDE.md pointer. Both candidate videos show the product's own skill system (Customize → Skills in the app, or `.claude/skills/<name>/SKILL.md`). Official video: "The description is how Claude decides whether to use the skill." Drop the pointer; build a real skill.
2. **5.3 videos disagree on whether a scheduled task asks before it writes.** `6RXjpKXy2qk`: "By default Claude asks permission every single time it sends an email." `pg2d8HWSlS4`: "All your connectors are included by default and a routine can use every tool in them, even writes, without asking." The lead must check. If the second is true, "draft, don't send" in the instructions is the only safety net.
3. **5.3 brief breaks its own rule**: "send to the team" sits next to "draft, not send." The chosen video sets Gmail send to "always allow" and claims "the only thing it can do unattended is send you your own report." Not true: it can send to anyone; only the instructions stop it.
4. **5.2 says "early parts get crowded out."** More accurate: start and end get the most weight, the middle gets lost; compaction can also drop early instructions.

## 5.1 transcripts

### O6tQ6V_P8a0, Tristen O'Brien (7:00, 2026-05-24)
- 0:22–1:12 "A skill is a set of instructions that you save once"; reads the YAML definition aloud to show it's too technical: "There's a much easier way." 1:12–1:22 loads only when needed. 1:22–2:19 Settings → Capabilities → turn on "code execution and file creation," then Customize → Skills → + → Browse skills; Directory → Plugins. 2:19–2:43 skill creator asks you questions, formats and saves. 2:49–4:21 pizza catering demo: "Use the skill creator to build me a catering quote skill," gives menu, pricing, minimums, delivery fee, an example finished quote, and a rule for vague emails ("From what I gather, here is your quote" plus follow-up questions); afterwards the prompt is "Generate a quote for this order." 4:21–5:00 business ideas. 5:00 branded-voice plugin plug. 5:07–6:21 safety: read third-party skills; your own are safest. 6:21 works on all plans with code execution on.
- Chat users, desktop app, pre-rebuild; Customize still exists post-rebuild; the Capabilities toggle unconfirmed. Build is narrated, not shown. Score 7/10.

### bjdBVZa66oU, Claude official (2:54)
- "A skill is a markdown file that teaches Claude how to do something once"; SKILL.md; description is how Claude matches; personal skills in `~/.claude/skills`, project skills in `.claude/skills`; CLAUDE.md loads every time, skills on demand (name and description only); slash commands need typing, skills don't; "If you find yourself explaining the same thing… that's a skill waiting to be written." Developer examples throughout, no build. Score 7/10.

### 5.1 pick: O6tQ6V_P8a0, 0:22–6:36
Borrow one line from the official video: "The description is how Claude decides whether to use the skill."
Make the learner DO: do the task once by hand, then "Use the skill creator to turn what we just did into a skill" and answer its questions (check code execution and file creation is on first); feed it the real reference material, one finished example of good output, and a rule for vague/missing input; open the saved skill and edit the description so it says exactly when to use it; run it cold in a new session with only the trigger phrase and fresh input, fix the skill if it doesn't trigger; find where the skill lives.
Brief must not repeat: the definition beyond one line; the re-explaining problem; business examples; third-party safety; "only loads when needed." Brief keeps: CLAUDE.md is general, a skill is one task; "fix the skill, not the prompt."

## 5.2 transcripts

### -uW5-TaVXu4, Matt Pocock (9:33, 2025-10-22)
- Window = input plus output tokens; hard caps; models.dev tour; **lost in the middle** (start and end get priority), "Models just do better with less," clear chats regularly; terminal `/context`, `/clear`, `/compact` ("Clear should be your default"); MCP servers bloat context; $99 course plug at 8:58. Developer-aimed; concepts hold. Score 7/10.

### xaQG-eD9d58, Dylan Davis (17:49, 2026-01-17)
- Whiteboard analogy; degrades around 60%; **2:18–2:42 self-plug**; chart; **3:36–7:07 four warning signs** (ignored instructions, contradictions, forgotten facts, auto-compact notice); 7:07–8:56 Google AI Studio detour for token counting; **8:58–10:35 handoff**: ask the old chat to summarize what we've covered, decisions made, where we left off on the to-do list, and the specific ask for the next AI; paste into a new chat; 10:38–13:10 files (text cheap, PDFs vary, images/video/complex Excel expensive; one sheet as CSV); split hard tasks across tabs; "strategic summaries" for people who won't start fresh; plug at 17:10. Non-technical, plain language, some dated claims. Score 6/10 overall, ~8 for 0:25–10:37.

### eW3oTyfeWZ0, Claude official (3:31)
- Context is working memory; auto-compaction "could potentially lose details"; /compact, /clear, /context; put cross-session knowledge in CLAUDE.md; be specific; turn off unrelated MCP servers; subagents. Command reference, no "why." Score 6/10.

### 5.2 pick: xaQG-eD9d58, 0:25–10:37
Caption: names ChatGPT and Gemini, ideas are the same in Claude; skip the Google AI Studio part at 7:07–8:56; a 24-second plug at 2:18.
Make the learner DO: open an old long chat and find one of the four signs, write down which; ask for the handoff with his four parts, under 15 lines; start fresh, paste, give the next step, compare; next time give only the part of a big file that matters; move permanent rules into Project instructions or CLAUDE.md.
Brief must not repeat: the whiteboard explanation; warning signs; handoff mechanics; "don't paste everything." Brief keeps: standing context lives in files (ties to 2.4, 4.3, 5.1); a new Claude Code session re-reads CLAUDE.md; skip his "strategic summaries" and AI Studio tricks; don't claim Claude shows a context meter unless confirmed.

## 5.3 transcripts

### 6RXjpKXy2qk, Cynked AI (8:29, 2026-10-22, post-rebuild)
- 0:00–1:04 the problem and the finished report ("Needs a reply today / Has a date on it / Money / everything else"). Requirements: paid plan, Gmail, 10 minutes, no code. 1:30 Customize → Connectors → Gmail → Connect ("Read that screen properly"). Can't open attachments. **2:18–3:43 four-part instruction**: what to look at (last 24 hours); what to ignore (newsletters, notifications, receipts); the shape (four sections); the rules ("Use only what's in the emails. If something's unclear, say so… Don't reply to anyone, don't archive anything, don't mark anything read"); plus delivery. **3:43–5:00 "In the left sidebar there's Scheduled… they run on Claude's servers."** New task → describe it to Claude or set up manually; name, instructions, schedule (daily at 7; exact-hour tasks can start late); Advanced settings → Connectors (Gmail must be listed) and Notifications (tick Email). 5:00–6:02 permissions: Customize → Connectors → Gmail → tool permissions; "Do not switch that whole group to allow"; sets only send-email to always allow. 6:02 runs it now; reports what it skipped and flagged. 7:15 limits: attachments, tone ("reads what the sender wrote, not what they meant"), "do not give it permission to reply… Reading is safe. Writing is yours." Variants: Friday unanswered list, money-only, leads with draft replies "left as a draft, not sent."
- Calm, scripted (possibly synthetic voice; the lead should listen). Score 9/10. Another post-rebuild video (`2_9KY9mejX0`) confirms "New task → create with Claude / set up manually."

### U_cDKkDvPAQ, Tyler Germain (12:39, 2026-03-09)
- Hype opening; a scheduled task is a full Claude Code session with skills; runs locally only ("if your computer is sleeping… not going to run"); Code section → Scheduled tab → New task (name, description Claude never sees, prompt, permissions, folder, frequency); prompt can be just "run the daily stand-up skill"; "always allow for session." Pre-rebuild, developer-comfortable audience. Score 5/10. Useful: schedule a skill.

### D3pxbkPg0KE, Productive Dude (11:34, 2026-04-20)
- Routines tab (pre-rebuild); meeting-prep prompt with "If both buckets are empty, send nothing"; remove unneeded connectors; then 6.5 minutes of n8n and API; paid community plug. Score 5/10.

### 68BnH29qvAA, DesignCourse (5:18, 2026-04-16)
- Developer vlog: curl, Twilio, environment variables, discards emails. Score 3/10.

### pg2d8HWSlS4, zero cost ai (7:00, 2026-10-21, post-rebuild)
- "Routines are now called scheduled tasks. The old name still appears in the web address and in the /routines command." Research preview on paid plans. Prompt must be self-contained and define success. Created with `/schedule` in the terminal; list shared across web, desktop and CLI. **"Connectors are all included by default and can write without asking. Every run acts as you."** "A green status only means the session started and exited. It doesn't mean the work succeeded." Tips: scope access; schedule a few minutes past the hour; treat API text as data; minimum interval 1 hour. Developer-aimed. Score 5/10; excellent tips.

### 2_9KY9mejX0, Ben (Udemy) (~9:06, post-rebuild)
- "What used to be called routines… is now called schedule… a scheduled task." Show-and-tell of an advanced butler setup that sends autonomously; New task → create with Claude / set up manually (6:22–7:33); consulting funnel. Score 3/10.

### 5.3 pick: 6RXjpKXy2qk, whole (0:00–8:17)
Before confirming: the lead checks "Scheduled" in the sidebar, Advanced settings → Connectors and Notifications, and Gmail tool permissions; re-check views/comments ~2026-12-01. If it fails, text-only; no other candidate qualifies.
Make the learner DO: write the instruction in his four parts plus delivery (last 24 hours; what to ignore; four sections changed to their own questions; the rules); create it from Scheduled → New task or by asking Claude, a few minutes past the hour; in Advanced settings → Connectors confirm Gmail and remove connectors the task doesn't need ("every run acts as you"); press run now before trusting the schedule, read what it skipped and flagged; keep draft-first: leave reply/delete/label as they are, have it leave the report as a Gmail draft to yourself or use the Notifications email instead of always-allowing send; next day, open the run and read it, don't trust a green status.
Brief must not repeat: where Scheduled lives and the New task fields; Gmail connector setup; "runs on Claude's servers"; the four-part instruction; attachment and tone limits; "Reading is safe. Writing is yours." Brief keeps: schedule a skill; run it manually twice; paid plan required; fix "send to the team"; state plainly that an always-allowed send tool can send to anyone.
