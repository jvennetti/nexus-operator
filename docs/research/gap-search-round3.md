# Gap search, round 3: better videos for 2.5, 3.3, 4.2, 6.1

Run 2026-11-05, 07:24–07:45 UTC. Same process as `video-research.md`: metadata, top 25 comment threads by relevance (creator comments set aside), +praise/−complaint tally, two telling quotes, 1–10 meat-per-minute score. No youtube.com pages were fetched. Every id already in `video-research-results.md`, `gap-search*.md` or `video-picks.md` was skipped (marked SEEN at discovery and not re-scored). Scores rest on titles, chapters, descriptions and comments only. No transcripts were read.

**Discovery note.** The API `search` endpoint worked off and on before the 08:00 UTC reset: 7 calls returned results and 3 returned HTTP 429. None of the 429s was retried as the same call. Tags:
- **(API)**: an API `search` that returned results.
- **(WS)**: the WebSearch tool. It mostly returned blog posts and only a few YouTube ids.
- **(CH)**: `playlistItems` on the uploads of 19 known channels (Claude, Anthropic, Kevin Stratvert, Tristen O'Brien, Futurepedia, Teacher's Tech, Mstimaj, Nick Saraev, Dylan Davis, Simpletivity, Jeff Su, Tiago Forte, Ali Abdaal, Grace Leung, Matt Wolfe, AI Advantage, Austin Marchese, Holly Cope, Vika Taylor), filtered to uploads since 2026-07-01. The Tristen O'Brien and Austin Marchese uploads playlists returned nothing.

## Summary

| Lesson | Current pick | Best new candidate | Verdict | Why |
|---|---|---|---|---|
| 2.5 Make Things, Not Just Text | `FgwrGj_RJBg` TechBrothersIT 0:00–2:40, no audience evidence | `QBClwotyT3Y` "Stop Watching Tutorials - Build These 4 Claude Artifacts to 10x Output", Austin Marchese, 15:47 (clip 0:00–2:03), 2026-10-29, (API) | **Beats** (needs transcript) | Post-rebuild. Chapter 1 builds a "map where your time goes" tracker that he says he runs every day. 64k views, +10/−0 of 25, and one viewer says "i just built the time manager/tracker". Runner-up: Kevin Stratvert `1PRcdCu8n6M` (pre-rebuild, 160k views, +7/−2) for a beginner click-through. |
| 3.3 A Morning With Claude | `D5nZOUfac_0` Nexus 3:05–8:30 | `XIZtdBPVzEc` "I Turned Claude Into My Personal Assistant - Here's How", Tim Harris AI, 5:03, 2026-10-21, (API) | **Loses** | No post-rebuild video shows a morning run in Chat with Gmail and Calendar under 20 minutes. Tim Harris is post-rebuild and shows a morning brief, but Zapier MCP fills 1:30–2:36 and the brief itself is 34 seconds (2:36–3:10). Everything else is a scheduled task, Cowork, Claude Duet, the terminal or a funnel. Keep the current pick. |
| 4.2 Folders Are Memory | `qPG5zQCSlTs` signalstack 0:00–0:55, 4/10 | `j9eiZcBkNg0` "How to Set Up a Personal Knowledge Base Using Claude Code (Step-by-Step Guide)", Santiago "Jimmy" Garcia III, 5:47, 2026-10-19, (API) | **Beats on fit, unproven** | The lesson in under 6 minutes: "one folder of text files that Claude reads at the start of every session", with a boot file, a reading folder, three homes for what comes in, "ask it", and a weekly check. But it has 106 views and 0 audience comments, it's unknown whether it uses the desktop Code tab or the terminal, and step 1 is CLAUDE.md, which overlaps 4.3. |
| 6.1 Choose Your Workflow | `vatOVZbumk0` Dylan Davis 3:04–10:23, 7/10 | `gYk_hp3goAY` "Map the Workflow Before You Pick the Tool", CertainOps, 11:01, 2026-09-28, (API) | **Loses** (long shot on topic) | It's the only video that teaches a one-page workflow map (trigger, inputs, steps split into automation / AI / human review, output, owner). But it has 28 views and 0 comments, and its business-ops framing may not suit non-technical learners. Nothing has audience evidence that beats a 7/10 pick whose transcript has been read. |

---

## 2.5 Make Things, Not Just Text

Outcome: a non-developer asks Claude in chat for a small interactive tool as an artifact, iterates with plain-language notes, then actually uses it.

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `QBClwotyT3Y` (API) | Stop Watching Tutorials - Build These 4 Claude Artifacts to 10x Output | Austin Marchese | 15:47 | 2026-10-29 | 64,171 | 989 | +10 / −0 of 25 | "super helpful video thanks i just built the time manager/tracker" · "Super Helpful! … These 4 artifacts are going into use this week." | **7** (clip 0:00–2:03). Post-rebuild, and Artifact 1 is a time-mapping tool he builds and uses daily, which is the lesson's "build it, then use it". From 9:57 it turns into lead magnets and selling micro-tools, so play the clip only. Transcript must confirm the build happens in Chat and with plain-language iteration. |
| `1PRcdCu8n6M` (API, CH, WS) | How to Use Claude Artifacts (Beginner Tutorial) | Kevin Stratvert | 12:42 | 2026-09-03 | 160,419 | 1,445 | +7 / −2 of 24 | "Truly enjoy your tutorials and teaching style. One of the best." · "I opened this video to learn building LIVE ARTIFACT which you never explained … Feels like my 13 minutes got wasted." | **7** (clip 1:00–7:53). A calm click-through: first artifact, upload your own data, customize, edit with annotations, publish, manage, then Claude inside the artifact and saving data between sessions. Pre-rebuild, but making and editing artifacts in Chat still works the same. The sponsored Zapier MCP section (9:45 on) and the Live Artifacts tease are outside the clip. Its demo is a sales dashboard, not a personal tool. |
| `g9qr22KyDaY` (API, CH) | Claude Artifacts Explained: 7 REAL Use Cases (Fall 2026 Update) | Vika Taylor | 14:09 | 2026-10-28 | 5,825 | 64 | +3 / −0 of 3 | "You were thorough, but you made it easy to comprehend." · "Very well explained!" | **6**. Post-rebuild, covering the new types (Docs, Slides, Design, Dashboards, Motion, custom apps). The closest to the brief is 9:40–11:14, a trip-planner app with saved storage. Mostly a use-case tour; little iterate-then-use. |
| `AtBMFVDkQH4` (API) | Claude Artifacts Tutorial: Build Your First App in 9 Minutes | AI Bri | 9:16 | 2026-08-07 | 1,840 | 36 | +1 / −0 of 1 | "I ❤ AI Bri!" | **6** on fit (clip 0:43–3:39: "your first artifact (tip calculator)", "build one you'd actually keep", "the prompt is the whole job"). Pre-rebuild, and no audience evidence. Fallback if the top two fail on transcript. |
| `OuC6eIiAta0` (API) | How to Use Claude Artifacts (Beginner to Pro) | Tenex | 12:26 | 2026-09-29 | 6,328 | 61 | +2 / −0 of 4 | "thank you for sharing" · "Thanks for video" | **5**. Covers a memo, deck, flashcard study guide with AI grading and a dashboard, ending with "Turn one weekly task into an Artifact" (12:00). Broad tour, team-oriented, thin evidence. |
| `gf50PAw7R_w` (API) | Claude Artifacts Tutorial - Build Apps, Documents, and Dashboards | Howfinity | 8:08 | 2026-07-29 | 30,256 | 337 | +2 / −1 of 7 | "Thank you, very informative." · "this has been available for very long and most people know about this." | **5**. Pre-rebuild explainer of types and templates; the "templates" one viewer can't find suggest UI drift. |
| `JGI_YRGoX78` (API, CH) | Claude Artifacts Aren't Files Anymore | Dylan Davis | 11:04 | 2026-10-05 | 12,602 | 130 | +0 / −2 of 3 | "I feel like you weren't clear as to the why it needs to be short lived." · "This sounds like a severe lock-in effect into Anthropic" | **4**. A concept talk on artifacts as short-lived tools, not a build. |

Disqualified:
- `miTlx4Xsm9o` She Builds Empires, "2027 Digital Planner": a make-money funnel ("sell digital tools … $27 to $47"). The comments are keyword-bait ("Prompt").
- `W9H2IqxW2iE` Adam Vincent, "AI Money Coach": Cowork-centred ("Open Claude Cowork & Find Your Artifact"). The comments are keyword-bait ("coach").
- `CcI6oS5AyR4` Wise Twinz, life dashboard: Claude Code plus VS Code, Vercel and Supabase. A developer stack at 18:09.
- `AYQiDc0BV4o` The Tech Girl: "Build & Monetize". A make-money funnel, and it's Claude Code.
- `COJAZQM1aeQ` Claude, "Build an App With Claude Design": a designer working in Claude Code on a repo.
- `_Ui4ZkYm4ho` Claude, "Introducing Claude Dashboards and Claude Motion": a 1:22 launch ad.
- `dVEcayatGVs` FuturMinds (WS): a live dashboard from May 2026, before the rebuild, with 1 comment. Not vetted further.
- No views or comments (under 500 views, 0–1 comments), not vetted: `XBmhTezTpdA`, `HRCNkYXbuiM`, `kSO6xJngVUI`, `UEvF2_QwLoM`, `1n53KxUuYbI`, `oCE3C6iKkOQ`, `1ALjkrUorog`, `a_ACkl2YW6g`, `tKTPX1Z7pDY`, `5NyModhtE94`, `hq-wNhedxTg`, `D7WR79FHk9Y`, `GVQvawdk3sM`, `WAOcv9NmJJY`, `EhKxA7M10Fg`, `DeT0dDGFkTo`, `KHhLxEVZoUs`, `MgS2dBEaktg`, `xs4pUJHHJfs`, `yYat8BPu3b0`, `YxjIJfENBxE`.
- Over 20 minutes: `cybUQYYjANU` (30:19), `iWIItIIze1U` (31:23). Both are post-rebuild but have no views.
- `fp_sMnuRFrU` Wharton (WS): 14:45, 0 comments, a webinar recording.

Queries:
1. API `search` "claude artifacts build an app no code" (publishedAfter 2026-06-01): answered.
2. API `search` "claude artifacts tutorial interactive tool" (after 2026-09-15): answered.
3. API `search` "I built a habit tracker with Claude artifact": **429**.
4. WS "youtube claude artifact habit tracker build no code 2026": `fp_sMnuRFrU` and blog posts only.
5. WS "youtube claude interactive artifact tutorial 2026 calculator checklist quiz tool I use every day": no usable ids.
6. WS "youtube.com/watch "claude" artifact "I built" tracker OR calculator OR dashboard non-coder use it every day": `dVEcayatGVs`, `CcI6oS5AyR4`, `yYat8BPu3b0`, `W9H2IqxW2iE`, `YxjIJfENBxE`.
- CH: Claude, Kevin Stratvert, Dylan Davis and Vika Taylor uploads.

## 3.3 A Morning With Claude

Outcome: a real morning routine run in **Chat** with the Gmail and Calendar connectors: triage, plan, drafts left as drafts, meeting prep. Post-rebuild.

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `XIZtdBPVzEc` (API) | I Turned Claude Into My Personal Assistant - Here's How | Tim Harris AI | 5:03 | 2026-10-21 | 1,116 | 12 | +1 / −0 of 1 | "Definitely going to try this workflow!" | **4**. Post-rebuild, and shows connectors, Gmail, Calendar and Trello in chat (0:40–1:30) and a morning brief (2:36–3:10). But Zapier MCP fills 1:30–2:36 and the brief section is 34 seconds. A clip can't hold both chat segments without the Zapier part. |
| `Ra_HPrdTluE` (API) | Claude drafts your email replies, you press send (5 steps for Gmail + Calendar) | Keith Rainville | 0:57 | 2026-10-12 | 138 | 0 | 0 read | (none) | **3**. Right safety model ("ask which emails need a reply", "a draft using only facts you give it", "check names, dates and numbers, then you send it"), but 57 seconds and no routine. Better as a 3.1 caption idea. |
| `-k7uzCDOu4g` (API) | How I Turned Claude Into My Personal Assistant (Full Guide) | Richard Yu AI | 5:28 | 2026-09-04 | 1,340 | 9 | 0 read | (none) | **3**. Pre-rebuild. "Brain, context, tools, schedule", and the schedule part is the point, which is 5.3's job. No evidence. |
| `g3e0m8nrQa4` (API) | How I Turned Claude Into My Personal Assistant (for 2027) | Albert Olgaard | 11:54 | 2026-10-17 | 38,890 | 317 | +1 / −2 of 6 | "Looks to me just like an automatic Mail bot - dont understand the real benefit of it." · "whats with the intense music" | **2**. A funnel (Skool "AI Business in 30 Days", Instantly and GoHighLevel affiliate links). Disqualified as make-money. |
| `qRArO29OJ4I` (API) | Claude Duet Got Me to Inbox Zero (110 Emails, 3 Inboxes) | Leslie Samuel | 6:59 | 2026-11-01 | 281 | 2 | +1 / −0 of 1 | "I accomplished that (In Box Zero) for the first time ever today." | **3**. A good, honest inbox session ("It wasn't perfect"), but in **Claude Duet**, the new proactive agent, not in Chat. Off-product for this lesson. Worth watching if the course ever covers Duet. |
| `-zobBsIs7lc` (API) | I Gave Claude My Calendar. Now It Runs My Day (Full Build) | Benza AI | 10:01 | 2026-09-18 | 435 | 4 | 0 of 1 returned | (none) | **Disqualified**: Google Workspace CLI, computer use and "Claude Code in the terminal" (6:20). |

Disqualified or off-outcome:
- `2_9KY9mejX0` Benza AI and `KNBJtgoyUz8` ProgrammingKnowledge2: cloud Routines and scheduled tasks, which is 5.3. `KNBJtgoyUz8` is also Cowork.
- `8JyUxjtf2oc` Mailtrap: a "Routines" short.
- `Roz2Orn2nbI` (12 views), `5WARsBONbq4` (0:35), `pg_hmv9NodA` (0:43), `FpdQ5iaF0Aw` (0:29): shorts or no audience, all about scheduled briefs.
- `wezYJ1LMZ9g` Mastering Claude AI "Connectors 101": 30:28.
- `o3wXvOAuqNM`, `0PUR5Q_WQzI`, `ZZki702VdRU`: under 35 views, generic setup.
- `-Bv72hPFkio` One Official (WS): 2025, a skill build, 0 comments.
- Claude Duet explainers (`q-eKAuaszjA`, `KKQAvxlNK48`, `UJBFyNEtBHA`, `5kHXFfOKlXo`): not Chat.

Queries:
1. API `search` "my morning routine with Claude gmail calendar" (after 2026-09-01): answered.
2. API `search` "claude daily briefing gmail calendar connectors chat" (after 2026-10-15): answered. Nearly all results were Claude Duet.
3. WS "youtube "claude" morning routine gmail calendar connectors daily briefing chat": `wnTAJhD_x7A` (SEEN), `-Bv72hPFkio`, `D5nZOUfac_0` (current pick), blogs.
4. WS "youtube run my day with Claude 2026 gmail calendar triage draft replies": blogs only.
5. WS "youtube.com "Claude" daily briefing Gmail Google Calendar connector chat November 2026": blogs only.
6. WS "youtube.com/watch claude "morning" routine connectors gmail calendar "drafts" 2026 tutorial non-technical": blogs only. One useful fact: a guide says connectors are under **Customize → Connectors** in the desktop app.
- CH: Kevin Stratvert (only pre-rebuild Cowork/M365 videos), Simpletivity, Jeff Su: nothing on topic.

**Finding:** after the rebuild, morning-brief creators moved to **Claude Duet** (launched 2026-10-21) or to scheduled tasks. Nobody is filming a by-hand morning routine in Chat. Keep `D5nZOUfac_0` and re-search around 2026-12-01.

## 4.2 Folders Are Memory

Outcome: a non-coder's workspace folder in the desktop Code tab as persistent memory: reference files, naming, "what's in this folder?", and files that survive across sessions.

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `j9eiZcBkNg0` (API) | How to Set Up a Personal Knowledge Base Using Claude Code (Step-by-Step Guide) 2027 | Santiago "Jimmy" Garcia III | 5:47 | 2026-10-19 | 106 | 6 | 0 of 0 (the only comment is the creator's gumroad plug) | (none) | **6** on fit. "One folder of text files that Claude reads at the start of every session, so it already knows who I am, what I decided, and what I saved." Chapters: before/after, the folder, CLAUDE.md boot file, a place for what you read, three homes for what comes in, "ask it", "keep it honest". Unknowns: desktop app or terminal, and how much it repeats 4.3. Optional Obsidian Web Clipper. |
| `-SsAwIkW9rI` (API) | Complete Guide to building an AI Second Brain with Claude | Ray Fu | 11:59 | 2026-10-21 | 61,839 | 789 | +2 / −0 of 25 (the other 23 are giveaway entries) | "Working in the tech field this is going to help not having to explain things over again" · "just randomly scrolled and found the master piece" | **4**. Post-rebuild and popular, but it's built on Obsidian and the comments are entries in a "free Max subscription" giveaway ("comment one use case"), so they say nothing about clarity. The description links a Skool "make money" community. Only worth a transcript look if it uses the desktop Code tab on a plain folder. |
| `peP_o66u-vM` (CH) | Stop Organizing Files Yourself. | Jeff Su | 14:37 | 2026-09-29 | 194,802 | 2,223 | +14 / −1 of 24 | "Jeff is the GOAT of AI organization and structure." · "Please now with a local approach … you share all your sensitive data with those companies" | **4** for this lesson. Excellent teaching on a "file management rulebook" (1:35–6:40), but the demo is in ChatGPT Work with a Dropbox sponsor segment, and it promotes his Cowork Academy. A rulebook is a naming convention, not folder-as-memory. A source idea for the 4.2 brief, not the video. |
| `Puzgmzv7t3Q` (API) | Build a Better Claude Second Brain than 99% | Ben AI | 18:19 | 2026-09-07 | 44,669 | 483 | +1 / −5 of 14 | "The first link to the setup skills does nothing" · "Why are you guys always selling a second brain…" | **3**. Pre-rebuild, a funnel to his accelerator and app, and the comments complain about broken lead-magnet links. |
| `CwL_XeedKw4` (API) | I Gave Claude a Second Brain (It Remembers Everything) | Leon van Zyl | 10:44 | 2026-09-29 | 4,624 | 51 | +0 / −3 of 6 | "At $700/mth I'll keep my Obsidian" · "uhg, and get vendor locked in, no thanks." | **Disqualified**: Cowork setup (4:06) plus a sponsored paid RAG product and MCP. |
| `H6x2sooRVOQ` (CH) | Give your AI perfect memory in 3 steps | Jeff Su | 1:04 | 2026-09-02 | 18,838 | 409 | +3 / −0 of 10 | "you, by far, explain things better than anyone on all things AI" · "Particularly helping us become Claude cowork superusers!" | **Disqualified**: a Cowork-centred short promoting a Cowork toolkit. |
| `XQuRgVP9-Sc` (CH) | Stop Wasting Hours Looking for Files. Try This. | The AI Advantage | 2:38 | 2026-11-03 | 7,806 | 118 | 0 / 0 of 6 | "Does anyone know if the search runs fully on th…" | **Disqualified**: an ad for a third-party file-search app (DigUp). |

Disqualified or off-outcome:
- Over 20 minutes: `OAvNR8XN1oU` Leo Kane "8 Folders + Claude Code" (26:31, 1 comment; its title is the right idea), `avIgPUPX8fo` RyMac (37:18), `pXHpUyC54uQ` Ben AI (29:45), `0Gq9Y8Vzevc` David Bitton (21:15), `Wzv_cSUvxgA` ICOR (20:42), `PxpVh7Dsw1M` ICOR (28:33).
- Obsidian or terminal second-brain builds with no audience: `eFxNtcv-OOk`, `O1pad4kwWew`, `G705ulIPrWk`, `IyNAFqGNm1Y`, `4z2i6UsQG1k`, `LYgV2wPU5DQ`, `Bq1g5gXxicM`.
- File-cleanup shorts (not memory): `cyO5fP_-mVM` (0:45), `MNp0zSUqrMY` (0:07), `Dj4NzRgETUE` (0:34). Upskill-Education file-automation series (`mAVxqx8UJsM`, `rNAdDfTM5_Y`, `TA1o-Z-eZ-k`).
- `SxAuS_yAbHA` Adventures in CRE (WS): MCP filesystem setup, pre-rebuild.
- `AYQiDc0BV4o`: a monetize funnel.
- No audience: `cAVviwPwBdg` Kokou G. "I Built a Claude Code Second Brain. Then 4 Things Broke." (36 views, an honest angle worth a re-check later), `IOX5eKtG8Tk` (43 views), `os9OxhKHPIA` (35 views), `p0Yx40oGd8U` (302 views, desktop features part 1), `wnSIIVqS48A` (17:53, 40 views).

Queries:
1. API `search` "claude code desktop app organize my files folder for beginners" (after 2026-10-01): 429 on the first try, answered on the second.
2. API `search` "claude code second brain folder non technical" (after 2026-09-01): answered.
3. WS "youtube claude code desktop app folder as memory non technical second brain": blogs only.
4. WS "youtube "claude code" desktop app beginners organize files folder workspace CLAUDE.md non-coder 2026": `SxAuS_yAbHA` plus already-seen ids.
5. WS "youtube "Code tab" Claude desktop folder memory files persist between sessions beginners about-me file": docs and blogs only.
- CH: Jeff Su, AI Advantage, Mstimaj, Dylan Davis, Nick Saraev. Mstimaj has "What is a CLAUDE.md file used for?" (`bC2uzYEufMg`, 4.3 territory) and terminal folder basics. Nothing for 4.2.

## 6.1 Choose Your Workflow

Outcome: map one recurring piece of work as input → steps → output → destination, and choose what to automate first, for non-technical people.

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `gYk_hp3goAY` (API) | Map the Workflow Before You Pick the Tool | CertainOps | 11:01 | 2026-09-28 | 28 | 1 | 0 of 0 | (none) | **5** on fit. A one-page map in ten steps (name, purpose, trigger, inputs, an ordinary-automation / AI-assisted / human-review split, output, success check, failure signals, recovery, owner) and a full worked example. Closest to the lesson's four questions, but zero audience, and the framing is business operations. |
| `aR4sENYDe5k` (CH) | AI Is Making You Build Things You Don't Need | Dylan Davis | 11:17 | 2026-09-21 | 6,744 | 88 | +2 / −2 of 7 | "the harder question becomes what's actually worth building in the first place" · "almost all of them have a 'negative tilt.'" | **4**. About choosing whether to build at all (simple beats the app). A choosing angle, but no mapping. |
| `iLmykhISoZc` (API) | Before You Automate Anything With AI, Do This First | Joe Stolte | 12:04 | 2026-10-28 | 168 | 1 | +1 / −0 of 1 | "Very valuable!" | **3**. "Should this task even exist?" is the current pick's point, made with less evidence, plus a funnel to his paid programme. |
| `0a5tpONqbpQ` (API) | What to Automate First With AI at a Nonprofit | If Possible AI | 4:28 | 2026-11-02 | 0 | 0 | 0 | (none) | **3**. A good rule of thumb ("if you catch yourself thinking 'I don't want to do that'… start there") but no mapping and no audience. |
| `ywtt3mpBi9k` (API) | Map Your Workflow Before You Automate | Little Thing Called Life (MyGuyGus) | 9:53 | 2026-10-15 | 56 | 2 | 0 / 0 of 1 | "I like this video for its quirkiness" | **3**. Covers mapping steps, ownership, cutting steps, and rules vs AI vs human. Team-focused skit format, no evidence. |
| `ulC-NOdLdso` (CH) | How Many AIs Are Working for You Right Now? | Dylan Davis | 14:21 | 2026-09-26 | 11,332 | 134 | +0 / −2 of 7 | "this approach will not safe you time unless you kill the concept of human in the loop" | **2**. About running parallel agents. Off-outcome. |
| `YvOC2dwejkw` (CH) | AI Has 3 Jobs. Most People Only Use One. | Dylan Davis | 13:28 | 2026-09-07 | 12,403 | 111 | +1 / −1 of 3 | "a really important addition is to get the AI to explain its reasoning" | **3**. A taxonomy of AI jobs, not workflow mapping. |
| `2mv4E00cAV4` (API) | Want to Automate With AI? Build These 5 Habits First | AI-Driven Marketer | 11:37 | 2026-10-23 | 171 | 2 | 0 | (none) | **2**. A podcast clip about habits for marketers. |

Disqualified or off-outcome:
- Make-money or agency funnels: `i4z0kCcByY8`, `Dgs1tQngbec`, `s0T6YLsCLKs`, `r1me8dwaMJQ`, `w-XPlC3a2oI`, `axcdIUZYZ0k`.
- Agent-build tutorials (n8n or other tools): `m7oLuUo7DBo`, `7ReHiROdPbE`, `SFhTgNOdg40`, `rCkYVxOX-dI`, `Bm84BAtOfQw`.
- Cowork or Routines guides: `SNo_recKZyY`, `w4MbjaMFrAM`.
- Shorts under 1:10 with no audience: `YTEEJ7-u4FI`, `ZoZ_sT9uEjw`, `ss61xR87Vx0`, `E2W3-CVVktI`, `D4pZrbLFJQo`, `YvlgHPEYn7k`, `tilshEHFfuo`.
- `CwcPxvim4nA` Noman: 7 views.

Queries:
1. API `search` "map your workflow before automating with AI" (after 2026-01-01): answered.
2. API `search` "what to automate first with AI" (after 2026-03-01): answered.
3. API `search` "document your process before automating with Claude": **429**.
4. WS "youtube map your workflow before automating with AI what to automate first process input output": consultancy blogs only.
5. WS "youtube how to decide what to automate first with AI audit your recurring tasks non-technical 2026": blogs only. It did give a useful framing for the brief: score tasks by frequency × time × error cost, start with low-judgment work, and ship draft-and-approve first.
- CH: Dylan Davis (all uploads since July), Grace Leung, Matt Wolfe, Tiago Forte, Ali Abdaal. Nothing teaches the map.

---

## Shortlist for transcript fetch

```python
SHORTLIST_ROUND3 = {
    "2.5": ["QBClwotyT3Y", "1PRcdCu8n6M"],   # Austin Marchese 0:00–2:03 (post-rebuild, builds + uses a tracker); Kevin Stratvert 1:00–7:53 (beginner click-through, pre-rebuild)
    "3.3": [],                               # nothing beats D5nZOUfac_0; re-search ~2026-12-01
    "4.2": ["j9eiZcBkNg0", "-SsAwIkW9rI"],   # exact-fit folder walkthrough (check desktop vs terminal, overlap with 4.3); Ray Fu only if it uses a plain folder in the Code tab
    "6.1": ["gYk_hp3goAY"],                  # long shot: best topic fit, zero audience; keep vatOVZbumk0 unless the transcript is clearly better
}
```

Fallbacks not shortlisted: 2.5 `AtBMFVDkQH4` AI Bri 0:43–3:39 (exact fit, pre-rebuild, no evidence), `g9qr22KyDaY` Vika Taylor 9:40–11:14 (post-rebuild trip-planner app).
