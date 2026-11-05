# Opus reader report, round 3: lessons 2.5, 4.2, 6.1 (2026-11-05)

Read all five round 3 transcripts in full with cat, plus `video-picks.md` (Round 2 decisions), `gap-search-round3.md`, the current-pick sections of `reader-round2-m2-3.md` (2.5), `reader-round2-m4.md` (4.2), `reader-round2-m6.md` (6.1), `reader-modules3-4.md` (4.3), and lessons 2-5, 4-2, 6-1. Nothing was fetched from the network.

## Bottom line

- **2.5:** **Kevin Stratvert `1PRcdCu8n6M` 0:43–8:59 beats** `FgwrGj_RJBg` (7 vs the current "weak" explainer). It is the only candidate where a non-developer builds a small tool in chat, uses it straight away, and makes it remember data between sessions. The UI is pre-rebuild, so the lead must check the button names. **Austin Marchese `QBClwotyT3Y` loses (3/10 for 0:00–2:03):** "Artifact 1" is not a time tracker. It is a one-off pie chart of your past Claude sessions that ends in skill suggestions, which pre-empts 5.1.
- **4.2:** **Santiago Garcia `j9eiZcBkNg0` 0:22–1:27 beats `qPG5zQCSlTs` narrowly (5 vs 4).** It has the same "folder of text files is the memory" thesis, told by a person with no false claims. Like the current pick, it is still a problem statement and not a demo. Everything from 1:28 on is 4.3 (CLAUDE.md, /init, @-imports) or power-user material. **Ray Fu `-SsAwIkW9rI` loses (3/10):** it uses Obsidian, the terminal at 8:09, a giveaway and a Skool plug.
- **6.1:** **CertainOps `gYk_hp3goAY` ties, so keep `vatOVZbumk0` 3:04–10:23 (6 vs 7).** CertainOps teaches the map itself (trigger, inputs, automation / AI / human steps, output) better than anything else found. But it has no audience evidence, a support-desk "pilot" framing, and from 5:52 it moves into 6.2/6.3 material. Borrow two of its ideas for the brief.

---

## 2.5 Make Things, Not Just Text

Current pick: `FgwrGj_RJBg` 0:00–2:40 (TechBrothersIT). It is a post-rebuild explainer of types, ways to create, editing and export. No one builds or uses a tool in it. The lead's direction asks for exactly that.

### QBClwotyT3Y, Austin Marchese, "Stop Watching Tutorials - Build These 4 Claude Artifacts to 10x Output" (15:47, 2026-10-29)
- 0:00–0:29 Artifact 1, "map where your time goes". Artifact defined as "essentially a website that Claude can launch". **Hype:** "99% of people aren't using it".
- 0:29–0:48 Run a prompt (shown on screen, not read aloud) that "will look at your **past Claude sessions**, visualize where you're spending your time, and then **suggest skills** you should create". You get a pie chart. **It is a one-off analysis, not a tracker you keep using.**
- 0:49–1:19 Inline comments on the artifact ("Let's do this / Don't do this"), sent back to Claude, then "Create the skills that I said to do". **Pre-empts 5.1 (skills).**
- 1:19–2:03 Planning with visuals, then a teaser for artifacts 2 to 4. "Since you're watching this, you're likely a business owner or a high-level operator."
- 2:04–3:26 Docs artifacts: edit inline, highlight text and ask Claude. This is fine for 2.5 but is click-level material the current pick already covers.
- 3:26–5:41 Team QA feedback artifact, the four-step ask / review / handoff / execute, and the "slop grenades" warning (good line: "don't send what you haven't read").
- **5:52–7:49 sponsor read for "Claude Duet"** (an Anthropic app, research preview, waitlist link).
- 7:53–9:56 Micro tools: "a tiny piece of software that has one specific job". A bartender cocktail lookup is only described, not built. An audit prompt is shown on screen. His feature-request board **depends on Slack and call-transcript connectors** (pre-empts 3.2).
- 9:58–11:14 Public share, then **lead magnets** for growing a newsletter (business marketing).
- **11:16–12:04 subscribe ask and Claude Max giveaway.** 12:04–15:10 Artifact 4: Instagram graphic mock-ups, then turning a style into a skill (5.1 again), then a résumé artifact. 15:10 to the end: outro and a plug for another video.
- Flags: hype, sponsor, giveaway, business-owner framing, skills and connectors pre-empted. No terminal. The UI is post-rebuild.
- The viewer comment "i just built the time manager/tracker" does not match the transcript. Nothing in the video tracks time going forward.
- **Score 3/10 for 0:00–2:03. Best segment is 7:53–9:56 (micro tools), 5/10:** the concept is on target, but the only build shown needs connectors.
- **Verdict: loses.** It does not show a learner-style tool being built and then used.

### 1PRcdCu8n6M, Kevin Stratvert, "How to Use Claude Artifacts (Beginner Tutorial)" (12:42, 2026-09-03, pre-rebuild)
- 0:00–0:31 Intro: "build apps, websites, dashboards, games, and interactive tools, all simply by describing what you want". Previews AI inside apps, saving data, connectors, publishing.
- 0:32–0:43 "Artifacts are available with a free account or with any of Claude's paid plans." (**check**)
- 0:43–1:26 Sidebar **Artifacts** (yours, shared with you, search). **New Artifact** "starts a new task". "It refers to the Artifact as a webpage… simply the foundation." "You can also create an Artifact directly from a regular Claude conversation."
- 1:26–2:31 Claude asks multiple-choice questions (type, style, focus, data source). He uploads a CSV through **+ → Add files or photos**.
- 2:31–3:20 He has to "publish the artifact" before it shows. The dashboard is interactive (hover shows numbers). "I didn't have to write any code."
- 3:20–3:57 Refines by prompting ("add a dark mode toggle"), and it works.
- 3:57–5:00 **Annotation tool** (top right): click one area, comment, then either **Send to Claude** or leave it as a comment.
- 5:00–6:16 **Share → anyone with the link → Share publicly**, choose a version, copy link. Sidebar → Artifacts → **Pin**. To keep editing, go back to the original chat under "**Chat and Tasks**". (**pre-rebuild UI names, check all of them**)
- 6:16–7:57 **Builds a small tool:** "AI-powered cookie naming tool… let the user enter the ingredients… generate five creative names". He **uses it** with his own ingredients, gives a one-time "continue" permission so it can call Claude, and gets five names. "We didn't have to set up an API or write any code."
- **7:58–8:59 Adds saving:** "Add the ability to save my favorite cookie names". Claude asks who should see the saved items. A star button appears and saved items persist: "when I come back later, my saved cookie ideas are still here. This makes it possible to build… **trackers**, project tools, customer lists." **This minute is the lead's "a tool you actually use".**
- 8:59–9:50 Slack connector button (MCP named). **Pre-empts 3.2.**
- **9:51–11:42 Zapier sponsor** (MCP server, Trello).
- 11:43–12:20 "Live artifacts" in the desktop app (pull current data, reload). 12:20 to the end: outro.
- Flags: **pre-rebuild UI** ("New Artifact", guided questions, "publish", "Chat and Tasks", annotation icon, "Share publicly"); the demo is a business (sales dashboard). No hype and no terminal. Sponsor and connectors sit outside the clip. The CSV dashboard (1:26–3:20) lightly echoes 2.2's "hand over raw material".
- Overlaps: annotate / Send to Claude matches the current pick's "Edit with Claude". Share and Pin are new. Connectors (3.2) and live artifacts are outside the clip.
- **Score 7/10 for 0:43–8:59** (8:16): calm, beginner-paced, and it ends on persistence. A shorter fallback is **6:16–8:59** (2:43, tool plus saving only), 6/10, because it opens with "just like we did earlier".
- **Verdict: beats the current pick.** It shows describing, building, using, changing and saving a tool, which the lead asked for. The current pick only explains features. Keep the TechBrothersIT points (types, export, the Capabilities toggle) as brief text if needed.

### Pick: `1PRcdCu8n6M` 0:43–8:59
- **video_note:** "Kevin builds a dashboard and a small tool just by describing them, then makes the tool remember what he saves; some buttons look different since the app was redesigned, but asking in chat works the same."
- **video_credit:** "How to Use Claude Artifacts (Beginner Tutorial), by Kevin Stratvert"

**Make the learner DO**
1. In a new chat in the Chat tab, paste: `Build me a simple habit tracker as an artifact. I want to track three habits: [habit 1], [habit 2], [habit 3]. One checkbox per habit per day for this week, a streak count for each habit, and a weekly percentage at the top. Calm, clean look. It must remember my ticks when I open it again tomorrow.` (Or swap in a tracker, calculator, checklist or quiz you need.)
2. Use it right away: tick today's boxes.
3. Change it twice: once in chat (`Add a dark mode toggle and a one-line note for each day`), and once by pointing at one part of the artifact and commenting on just that part, as Kevin does at 3:57.
4. Test the memory: close it, reopen it from the Artifacts list, and check your ticks are still there. If they are gone, paste `Make it save my data so it's still there when I reopen it.`
5. Pin it, open it every day this week, and on day three give Claude one change based on real use.

**Takeaways**
- You can build a small working tool just by describing it. No code.
- Change the whole thing by asking in chat, or point at one part and comment on just that part.
- Ask the tool to save your data and it will still be there next time.
- A tool is only worth building if you use it, so pin it and open it tomorrow.

**Brief must add:** the "what, who, contains, feels" frame and "style comes from context". Kevin has neither. The brief should also say that buttons were renamed in the redesign but asking in chat always works. It should drop the click-level type list the old pick carried, or keep it to one line.

### Facts the lead must check (2.5)
- Whether the sidebar still has **Artifacts**, and whether **New Artifact** still opens a guided-questions flow or is now templates or **Output**.
- Whether a separate "publish" step still exists before the artifact shows.
- What the annotation tool and **Send to Claude** are now called (the current pick says highlight → "Edit with Claude").
- Whether a saved-data artifact keeps data for **a solo Pro user** (and on Free) after closing and reopening, and what the "just me / everyone who opens it" choice looks like now.
- Whether an artifact that calls Claude still asks for a one-time "continue" permission.
- Whether Free accounts can make artifacts (0:38), and whether Settings → Capabilities "code execution and file creation" is still required.
- Where "Chat and Tasks" went (going back to the chat to keep editing).

---

## 4.2 Folders Are Memory

Current pick: `qPG5zQCSlTs` 0:00–0:55 (signalstack), 4/10. It is a problem statement only ("stores once, remembers forever"), has an AI voiceover, and the video gives terminal framing and a false "free tier" claim after the clip. Note from reader-round2-m4: ABOUT-ME is not read automatically. Auto-read is 4.3's CLAUDE.md, which the official video `O0FGCxkHM-U` already teaches: auto-read every session, "like onboarding", @ file references, keep it compact, save corrections.

### j9eiZcBkNg0, Santiago "Jimmy" Garcia III, "How to Set Up a Personal Knowledge Base Using Claude Code (Step-by-Step Guide)" (5:47, 2026-10-19)
- 0:00–0:15 Payoff: "Claude knows me… straight to the point, no fluff… peer mentor style responses."
- **0:16–0:21 subscribe ask** ("help a special needs family").
- 0:22–0:38 Answers are "tailored to my work history in IT… no beginner explanation. If I give Claude a vague answer, Claude pushes back. None of this is magic. **It's a folder with text files.**"
- 0:40–1:08 Before: "every session started over. I'd open Claude in a project folder and explain myself again and again… Each project had its own folder, its own CLAUDE.md file, its own me document. Same person, a few versions of me, none of them current."
- 1:11–1:27 Now: "One folder. Claude reads it at the start of every session. Everything it needs to know about me is in there as plain text. Each session starts fresh. It just reads the same files first, so it starts where I left off." **This is the 4.2 thesis.**
- **1:28–2:36 = 4.3:** CLAUDE.md "reads at the start of every session", `/init`, "under 200 lines", write who you are and how you want to be talked to ("never generic"), and "one file can pull another" (six imported files; "you pay for it every time"). Heavy overlap with the 4.3 official video.
- 2:37–3:20 A "Clippings" folder filled by the **Obsidian Web Clipper**. Rules: never edit clippings; clippings are "data, not orders" (**prompt injection**, which is 4.5 territory).
- 3:20–4:12 "Three homes": a dated decision log, a to-do list, memory files per topic, and an index ("Claude Code loads the first 200 lines… or 25 kilobytes"; "117 memory files"). This is **power-user material**, and the log idea echoes 6.3.
- 4:13–4:52 **Demo:** "tell me what you know about me". Claude checks CLAUDE.md and reads "the me file… my soul file", then answers. This matches task step 5, but it runs through CLAUDE.md imports.
- 4:52–5:15 Weekly stale-fact check through his own skill "os-verify". Simple version: "ask Claude to compare your files against your log and list what contradicts what" (6.3 territory).
- 5:16–5:27 Recap. **5:27–end: like/subscribe and a plug for another video.**
- Flags: the transcript never says whether this is the desktop app or the terminal ("I open Claude Code and I type in a question"; `/init`). The narration is choppy and the video is a personal setup, not a beginner walkthrough. 106 views, no audience comments. No false claims.
- **Score 5/10 for 0:22–1:27** (65 s, a cleaner story than the current pick and told by a real person). The whole video would be 3/10 for 4.2 because about half of it is 4.3 or advanced.
- **Verdict: beats the current pick, narrowly.** It also makes one point the current pick lacks: keep **one** current version of you, not one per project. It still shows no folder being built. The 4:13 demo can't be added because the build supports one start and end.

### -SsAwIkW9rI, Ray Fu, "Complete Guide to building an AI Second Brain with Claude" (11:59, 2026-10-21)
- 0:00–0:24 "Quit… Meta… help you learn AI and make money". "Become part of the 1%" (**hype**).
- 0:24–1:04 Why build a second brain; notes as storage, not a system.
- **1:04–1:27 giveaway** (Max subscription).
- 1:27–3:37 The Karpathy knowledge base, retrieval vs a persistent wiki, and a "programmer / codebase / IDE" analogy (**developer framing**).
- 3:37–4:22 Install Obsidian plus the Claude desktop app. **4:08–4:22 giveaway rules again.**
- 4:22–6:12 Obsidian vault: raw sources (read-only rule), a wiki (Claude-owned), index.md, log.md. "60% → 95% accuracy" (unsourced). CLAUDE.md with his "schema prompt" from the free guide (**lead magnet**).
- 6:12–7:37 Identity layer: user.md (who you are), soul.md (who the AI is), anti-AI-style.md. "Open Claude code… paste in the interview prompt from my guide… Claude creates these files for you." **This is the closest minute to 4.2's interview and ABOUT-ME, but it sits inside an Obsidian vault and depends on his guide.**
- 7:37–9:30 Web Clipper. **"Then in your terminal, all you do is type in this one command" (8:09).** Graph view. Save good answers back to the wiki.
- **9:31–10:10 Skool community plug** ("sell these automation systems… for 3 to 10K").
- 10:11–11:28 A cron morning briefing "in your terminal", a meeting-notes MCP, weekly health checks, and Obsidian Git auto-push to GitHub. **Developer-only**, and it pre-empts 3.3, 5.3 and Module 6.
- 11:28–end Recap and plugs.
- **Score 3/10.** It uses Obsidian, the terminal, giveaways and a Skool funnel. 6:12–7:37 is the only usable idea (user file plus "how the AI should talk to you" file plus an interview). Put it in the brief, not on screen.
- **Verdict: loses.**

### Pick: `j9eiZcBkNg0` 0:22–1:27
- **video_note:** "A minute on why one folder of plain text files makes Claude know you; he mentions CLAUDE.md, the file read automatically, which is lesson 4.3. Here you build what goes in the folder."
- **video_credit:** "How to Set Up a Personal Knowledge Base Using Claude Code, by Santiago Garcia"

**Make the learner DO**
1. Before the interview, write down the three things you re-explain most often ("explain myself again and again").
2. In the Code tab on `nexus-workspace`, run the lesson's interview prompt. When ABOUT-ME.md exists, check it has your three things, then add one line on how you want answers, as he does: `Add a line to ABOUT-ME.md: answers should be [straight to the point / detailed / friendly], and never generic.`
3. Copy in the three files you attach most often, then paste: `I added some files. Look at them and add a REFERENCE.md that describes what each one is and when to use it.`
4. Quit the app completely, reopen it on the same folder, and ask first `What's in this folder?`, then `Tell me what you know about me.` (his test), then `Which reference file would you use to write a client email?`
5. Open ABOUT-ME.md yourself, change one fact, start a new session and ask again. Claude's answer should use your edit.

**Takeaways**
- In Claude Code, Claude remembers you through the files in your folder, not through the chat.
- Every session starts fresh. Claude catches up by reading the same files.
- Keep one current note about you, not a different version for each project.
- Everything Claude "knows" is a file you can open and change yourself.

**Brief must not repeat:** "explain myself again"; "a folder with text files".
**Brief must add:** this is a plain folder in the Code tab with no Obsidian, clipper, index or log. ABOUT-ME is read when Claude looks through the folder; making it read automatically is 4.3 (one line, so his "reads it at the start of every session" doesn't mislead). Your job is deciding what belongs in the folder.

### Overlaps (4.2 candidates)
- Santiago 1:28–2:36 is 4.3: CLAUDE.md, /init, short file, @-pulling other files. The clip stops at 1:27.
- Santiago 2:37–3:20 (prompt injection) is 4.5. 3:20–4:12 and 4:52–5:15 (decision log, stale-fact check) are 6.3.
- Ray Fu cron and Git pre-empt 3.3, 5.3 and Module 6.

### Facts the lead must check (4.2)
- Watch 0:22–1:27 for what is on screen. If it is a terminal, it only matters as a picture, but note it.
- In the current Code tab: after quitting and reopening on the same folder, does "Tell me what you know about me" get answered from ABOUT-ME.md **without** a CLAUDE.md? (reader-round2-m4 expects yes, because Claude reads files when asked.)
- How to reopen the same folder in the Code tab (recent folders list or Open folder).

---

## 6.1 Choose Your Workflow

Current pick: `vatOVZbumk0` 3:04–10:23 (Dylan Davis), 7/10. Keep / cut / change, "does a person act on what this step produces?", and a seven-to-four-step proposal example. It shows no map and no tool. It needs a caption for its "full version 1" remark.

### gYk_hp3goAY, CertainOps, "Map the Workflow Before You Pick the Tool" (11:01, 2026-09-28)
- 0:00–0:17 Series recap ("first video… second video… picked the right first AI workflow").
- 0:17–0:57 Tool-first is backwards: "an automated version of a workflow nobody clearly defined".
- 0:57–1:28 "First define the workflow. Then choose the tool." Paper is fine. **Seven questions:** what starts it, what goes in, what steps, where AI helps, where a human reviews or decides, what output proves it's done, and what happens when it fails.
- 1:28–1:49 Example pilot from the previous video: AI draft replies to product questions, reviewed by a support lead, with a 70% acceptance target (**business-ops framing; refers back to an unseen video**).
- 1:49–2:37 Name it by what it does, "not the tool… Do not call it 'ChatGPT support bot'". Purpose: speed without losing control, so the tool must support drafts and approval.
- 2:37–3:16 Trigger: a new message, manually tagged at first. "That is a design choice, not a limitation." (This fits 6.1's "small version 1".)
- 3:16–3:52 **Inputs allowed, and inputs not allowed** (payment details, private history, internal notes). "What should the AI not see?"
- 3:52–5:21 **The split: ordinary automation** (move, label, notify, save; "usually does not need AI") **vs AI** (read, match, draft, cite source, flag uncertainty) **vs human** (approve, escalate, send). "AI for language work, and a human for judgment." **This is the "what to automate first" part, at step level.**
- 5:21–5:52 Output includes evidence: draft, source note, status, sent only after approval, log entry.
- 5:52–7:28 Success check (counts), failure signals and recovery (pause, review the last ten). **Pre-empts 6.2 (yes/no check) and 6.3 (refine, log).**
- 7:28–7:51 Named owner. 7:52–8:58 Ten-part recap, then tool-selection questions (approved sources, review stop, logs, "can we remove access later?").
- 8:58–9:47 Exercise: a 14-heading one-page map. **This is heavier than 6.1's four sections.**
- 9:48–10:35 "Reliability Six" (channel framework). **10:36–10:49 subscribe plus "free workflow map… in the channel bio".** Close: "Do not guess. Do not assume. Be certain."
- Flags: no UI, so nothing is outdated and there is no terminal. No hype. Only one plug, at the end. It may be text-to-speech or slide narration (very even, list-like cadence); **unverified**. 28 views and no comments. There is no "Destination" heading; the output step covers part of it ("a final sent reply… a log entry"). It does not cover choosing **which** workflow; that was his video 2.
- Overlaps: human review and draft-first echo 3.1 and 5.3. 5:52–7:51 pre-empts 6.2 and 6.3. The tool-selection questions fit 6.1's "which tools we'll need" line in the prompt.
- **Score 6/10 for 0:57–5:52** (4:55). It is the closest thing found to the lesson's map, and it is shorter than Dylan's clip. It loses a point for zero audience evidence, the support-desk pilot framing, possible synthetic narration, and the references back to his earlier videos.
- **Verdict: ties, so keep `vatOVZbumk0`.** Dylan is the read, concrete, 7/10 pick and covers the "is every step necessary?" task step. CertainOps covers the map, which the brief already teaches in text. Neither clearly beats the other. If the lead would rather show the map than the cut, swap to `gYk_hp3goAY` 0:57–5:52 with the caption "His example is a support inbox; map yours the same way: what starts it, what goes in, which steps are plain automation, which need Claude, which stay yours."

### Borrow for the 6.1 brief or task (no credit needed)
- In WORKFLOW.md, mark each step **Automation / Claude / Me**. Claude takes language work (read, summarise, draft, compare). Plain moving, saving and notifying needs no AI. Judgment and sending stay with you.
- Add an **"Inputs Claude should not see"** line under Input.
- Name the workflow by what it does, not the tool.
- Task prompt addition: `For each step, label it Automation, Claude, or Me, and add a line listing what Claude should NOT see.`

### Facts the lead must check (6.1)
- None in-app. If considering the swap, listen to 0:57–5:52 once for voice quality (human or text-to-speech).
