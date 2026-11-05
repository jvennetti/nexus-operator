# Gap search: video candidates for 0.1, 0.2, 2.3, 2.5, 4.4 (+ 4.1 re-sweep)

Run 2026-11-05 with the YouTube Data API v3 only. No youtube.com pages fetched. Ids already in `video-research-results.md` were skipped (flagged and not re-scored). Comment counts are top 25 threads by relevance, creator's own comments excluded; tallies are by hand.

**API problem:** the daily `search` quota ran out partway through 2.3 (HTTP 429, `"Quota exceeded for quota metric 'Search Queries' and limit 'Search Queries per day'"`). 2.5 got one partial search; 4.4 got none. To keep going without `search`, I listed uploads/playlists of the official Claude and Anthropic channels and of three small channels that turned up topic-exact series, using `playlists` and `playlistItems` (same API, separate quota). Everything else used `videos` and `commentThreads` as specified. **Re-run the 2.5 and 4.4 searches when the quota resets** (queries listed under each lesson).

Rebuild date for product lessons: 2026-10-20. "Pre-rebuild" = published before that.

## Summary

| Lesson | Best candidate | Second | Verdict | Why |
|---|---|---|---|---|
| 0.1 Get Claude on Your Computer | `kuMfcvNOuHk` "How To Install Claude Desktop on Windows 11 (2026)", Aldo James, 3:06, 2026-03-29 | `9Li_6baapwc` "Claude Desktop App Tutorial: Install and sign in (1/9)", Opal from MemberPress AI, 2:13, 2026-10-15 | Candidate for transcript review (weak) | Aldo James has the most evidence (31k views, "thanks very easy download"), but it's Windows-only and pre-rebuild. Opal matches the brief exactly (install, sign in, Free-plan label) but has 3 views. Neither covers fake download sites well. Text-only is still a fair choice. |
| 0.2 Know Where Things Are | `N890AspWgEw` "Claude Desktop, room by room: the whole app explained", Mstimaj, 7:05, 2026-10-20 | none | Candidate for transcript review | The only post-rebuild video framed as a first-time tour rather than a what's-new list (Chat/Code tabs, + menu, Projects, name menu). 47 views, 0 comments: no evidence yet. |
| 2.3 Iterate and Push Back | `tk4Ljz9p-UI` "Add THIS Before Every AI Prompt!", Simpletivity, 6:16, 2026-06-02 | `Y0KidGr9Z2Y` "Lesson 8: A closer look at Discernment", Anthropic AI Fluency, 5:23, 2025-06-12 | Candidate for transcript review | Simpletivity teaches the "ask me 3–5 clarifying questions" move, with strong praise (+13/−1). Discernment is the AI Fluency lesson on judging output, but viewers complain about the delivery. Nothing found on pushing through hedges or refusals, so keep that part in text. |
| 2.5 Make Things, Not Just Text | `FgwrGj_RJBg` "Claude Artifacts Explained — Docs, Slides, Designs & More", TechBrothersIT, 2:50, 2026-10-24 | `kJA3fQnntpY` "Collaborate on artifacts in Claude", Claude (official), 2:40, 2026-11-04 | Candidate for transcript review (weak) | TechBrothersIT's chapter list is the brief almost line for line (types, three ways to create, edit, Artifacts tab, export), but it has 0 comments and comes from a channel that posts several videos a day. The official video covers sharing and editing only, for Team plans. Search was cut short by quota. |
| 4.4 Build Something Real | `4hc5Z_QBno4` "Claude Desktop App: Work with Files & Folders on Your Computer", TechBrothersIT, 2:33, 2026-11-01 | none | None, keep text-only (one transcript check) | It shows the right job (rename invoices, build a summary spreadsheet), but the description suggests the Chat side's "Add folder", not the Code tab. No search ran for 4.4 (quota). |
| 4.1 re-sweep | `yTy8WV3Y9Nk` "How to Build a Website With Claude Code Desktop App", Mstimaj, 7:14, 2026-11-04 | `uxuwkIyguh0` "How to Install Claude Code on Mac and Windows (No Terminal)", Chunk Chunk, 4:22, 2026-11-02 | Keep `-YTot4fwNFY`; hold these | Both are post-rebuild Code tab walkthroughs with no terminal, but each has under 40 views and 0 comments. Re-check around 2026-12-01. |

---

## 0.1 Get Claude on Your Computer

Outcome: make an account, download from claude.ai/download, sign in, avoid fake download sites, understand free vs paid.

Dropped without comment vetting:
- `14I2dIOzCqU`, `9Pg1ihh6yhk`, `gWiEj2y-l00`, `8x8Hfwwito8`: Claude Code install aimed at the terminal.
- `A90fK-VOsdw`, `YYr7hw5EAtk`, `jUYu_aAtbWY`, `gShl9NYDoF8`: Cowork.
- `HYadLbqZCck`, `lMe7wyO7HgI`, `ea-M-ppAma8`, `7jres_1-XwM`, `9qdfmAdRZWI`, `talxc-N7KqE`: "free Claude Pro" hacks and funnels.
- `AAFSso_2WS4`, `4k79XS7LmNY`, `XL1LnCpkMEo`, `_WOhoY6GiHY`, `B6_V1AKk8GQ`, `isPn4BgLEVE` and other Shorts under 1:00.
- `jCGrOwCwaIc`, `OMf9ftKlJ60`: off-topic (skills).
- `WtokCU_Hd0U`, `ftNYhk3RQ-M`: plan comparisons against ChatGPT, 13–15 min.

Already evaluated, skipped: `r2vYObllqJU`, `P7-0grEB7nk`, `ZyCxx96gQx4`, `pHr1O_Af5NA`, `tM0dwXhOv2o`, `Nql-5Ph3xZs`, `5aUgDDWd4-k`, `lTXeZSgOJLY`, `WdZjoMi6W7Y`.

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `kuMfcvNOuHk` | How To Install Claude Desktop on Windows 11 (2026) | Aldo James | 3:06 | 2026-03-29 | 30,911 | 138 | +4 / −0 of 6 | "thank you was very useful !" / "I was required to turn developer move on for my laptop, is that normal?" | **6** Chaptered: download page 0:29, installer 0:55, sign-in 1:20, then shortcuts and pinning. Windows only, no plans, no fake-site warning. Pre-rebuild; the install and sign-in steps still hold, but the app it opens shows the old tabs. |
| `9Li_6baapwc` | Claude Desktop App Tutorial: Install and sign in (1/9) | Opal from MemberPress AI | 2:13 | 2026-10-15 | 3 | 1 | 0 comments | No comments. | **7 on paper** Chapters match the brief: what the desktop app is 0:32, Mac and Windows install 0:54, sign-in 1:20, "Fixing the Free Plan Label" 1:39. No evidence at all. "Opal" may be an AI presenter (the channel also posts an Opal "power ballad"). Pre-rebuild by 5 days. |
| `WV-CpBD0zLs` | How to Download & Install Claude Desktop App on PC & Laptop | Gauging Gadgets | 1:56 | 2026-08-19 | 5,394 | 51 | +0 / −1 of 1 | "wheres the link i go to download it?!?!" | **5** Description: official source, installer, sign-in. Windows only, under 2 min, pre-rebuild. Heavy affiliate block in the description. |
| `Ey5lKY8pvxQ` | How To Download & Install Claude Desktop App - Full Guide | GuideRealm | 2:50 | 2026-04-11 | 24,720 | 198 | +1 / −0 of 2 | "Muito bom. Valeu." / "how to install it not on system drive?" | **4** Generic install clip; no sign-in or plan content stated. |
| `YNVERJUuE4M` | Download & Install Claude AI Desktop Right Now \| Windows Setup Guide | Zimist Coded | 4:12 | 2026-04-23 | 4,593 | 35 | +2 / −0 of 3 (low signal) | "well Structured, your videos always guide us step by step." / "Very appealing.  Nyc one" | **3** SEO-padded description; comments read as fan or engagement replies. |
| `wC3R7iXGUrQ` | How to Install Claude Desktop App [2026 Full Guide] | Behind Tools | 3:12 | 2026-02-08 | 18,364 | 59 | +1 / −1 of 3 | "useless doesn't work that way. shitty AI video, no usefull information, just some best case scenario." (7 likes) / "Claude forcefully installed in C drive and consumes 10 GB" | **2** AI-written description ("navigate the distribution portal"); top comment calls it an AI video. |
| `oTxNPO5FEX8` | Downloading the Claude Desktop App? Fake Ones on GitHub Hide Malware | Skill MD | 7:21 | 2026-10-29 | 44 | 2 | 0 comments | No comments. | **4** The only video on fake downloads (Check Point "Yoba" report, Oct 27). Description points to "Checks + commands", so it is too technical for a first-timer. Could serve as a source for one line of lesson copy. |
| `Cag67uTMRQs` | Claude Pro Worth It? What $20 Actually Buys You | Cem Eygi Media | 1:36 | 2026-09-21 | 3,542 | 23 | +1 / −0 of 2 | "Thanks" / "It's difficult to start a prompt then he stopped in middle because limit usage" | **5 for the plans part only** Free plan has memory, search, files; Pro is about 5x usage plus three paid-only tools. Under 2 min; plan facts may have moved since September. |
| `lmB7DSo_oOM` | Where do you actually get Claude Desktop? | Mstimaj | 1:28 | 2026-10-21 | 41 | 0 | 0 comments (9th comment pull; returned empty) | No comments. | **5** Post-rebuild. The download page and its "five ways in". Under 2 min. Pairs with `N890AspWgEw` from the same channel. |

Queries run (4):
1. `how to install Claude desktop app` (publishedAfter 2026-01-01; medium + short)
2. `claude ai sign up account download desktop app` (publishedAfter 2026-06-01)
3. `claude app setup beginner free vs pro plan` (publishedAfter 2026-06-01)
4. `download claude desktop app install sign in` (publishedAfter 2026-10-20)

---

## 0.2 Know Where Things Are (post-rebuild sweep, publishedAfter 2026-10-20)

Outcome: a calm first-time tour of the rebuilt app: new chat, sidebar, attaching files, Settings/profile, Chat vs Code.

Dropped without comment vetting:
- `ul7lJk_TYy0`: app-building, 18:08.
- `WUse7fDq2VQ`: German.
- `fs4PGGZmp_0`: construction niche.
- `9NhjdX7Vgd4`, `qlz2Ue6RXD4`, `26LvhRrzk2o`: "free" funnels.
- `bQ_8Eu-hWCs`, `EJV0MLPrv-o`, `ka_45uF-ho0`: animation and video off-topic.
- `x16fjP8jQs8`: Duet.
- Shorts.

Already evaluated, skipped: `tM0dwXhOv2o`, `J5EbL1UaqG8`, `9WTqqWBPCsk`, `yMnFHFf43Qg`.

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `N890AspWgEw` | Claude Desktop, room by room: the whole app explained | Mstimaj | 7:05 | 2026-10-20 | 47 | 0 | 0 comments | No comments. | **8 on paper** "for people who were handed this and never given a tour. Not a feature list." Covers the two tabs Chat and Code "and what happened to the third one", the chat box, the + menu, model/effort/permission, Projects, "your name at the bottom and the menu behind it", and the Code page. Matches the brief; zero evidence. |
| `hPaF5aXJ5bI` | FREE GUIDE - Using Claude Desktop for the First Time | Keira Nesdale | 11:38 | 2026-11-04 | 69 | 1 | 0 comments | No comments. | **4** Right title, but the description is boilerplate, so the content is unknown. |
| `5cyLm3a3DOE` | Everything New in Claude (2026): It's Not Just a Chatbot Anymore | AviPro AI | 8:28 | 2026-11-01 | 78 | 5 | +0 / −0 of 0 (1 creator comment) | Only the creator's pinned "Which of these updates will you actually use?" | **3** A what's-new list (Docs/Slides/Design, side chat, manager chat, mods) for existing users. Off-brief. |
| `s_OMb2dplXU` | Claude's Desktop App Changed: 9 Features to Use | Coding with Sela | 5:46 | 2026-10-28 | 170 | 0 | 0 comments | No comments. | **2** Disqualified: "The app screens are recreated for illustration", so it is not a real demo. Power-user list (Remote Control, split view, mods). |
| `Qr_6we5UvYs` | Claude 2.0 is Insane (All Updates Explained) | Rounieee | 10:33 | 2026-11-02 | 1,486 | 24 | +0 / −0 of 4 | "4.8k hype□ krdia" / "was video edited by claude itself?? :)" | **2** Copies Ben AI's title; developer what's-new list. |
| `Uv2YOMZOlPU` | Claude Desktop: Chat vs Code, what changes | Mstimaj | 1:47 | 2026-10-19 | 180 | 0 | 0 comments | No comments. | **5** Note only: one day before the floor and under 2 min. Exactly the Chat vs Code piece: "Most guides still describe three tabs. There are two." Its sibling `N1QTS-yktM4` (1:00, "Where the settings are") is metadata only. |

Queries run (2):
1. `claude desktop app tour for beginners` (publishedAfter 2026-10-20)
2. `how to use claude new desktop app chat and code tabs` (publishedAfter 2026-10-20)

Channel listing (API `playlistItems`, Mstimaj uploads) surfaced `Uv2YOMZOlPU`, `N1QTS-yktM4`, `lmB7DSo_oOM`.

---

## 2.3 Iterate and Push Back

Outcome: iterate on a draft with notes; ask Claude to ask you questions or write the prompt; push through when Claude hedges or says it can't.

Dropped without comment vetting:
- `FkYPiA5j_m8`, `mBvhXq2qVVY`, `teVYqQ-z1Ho`, `uvfDUBndBEY` ("Claude Courses"): unofficial reuploads of Anthropic course material.
- `WKBIynpvmBM`, `gUsr3_HTijE`, `KcXXRw3fk6Q`, `SxJZXmu3V4U`, `a_GQA2KL1sM` and others: Shorts under 1:00. Topic-exact, but no room to teach.
- `I2gdkrPCUrk`: "questions it wasn't supposed to answer", jailbreak bait, 14:37.
- Third query's other hits: off-topic (usage limits, Cowork).

Confirmed via the Anthropic AI Fluency playlist (API): there is no Lesson 9 ("Description-Discernment loop") video; a commenter on Lesson 8 says the same: "There is no lesson 9".

Already evaluated, skipped: `EljzyfdYkrc`, `2YCaBqP8muw`, `Yj_ZI8E_wDw`, `X3uum6W2xEI`.

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `tk4Ljz9p-UI` | Add THIS Before Every AI Prompt! (Gemini, ChatGPT, Claude) | Simpletivity with Scott Friesen | 6:16 | 2026-06-02 | 424,441 | 13,247 | +13 / −1 of 25 | "\"Ask me three to five clarifying questions so you are 99% certain of what I want you to do.\"" (330 likes) / "If only you used that 3-to-5 question trick on your video script, we might have saved about 95% of time." | **6** One technique, the lesson's "ask me questions first", taught clearly to a lay audience. Tool-agnostic, and comments suggest some examples are image prompts. Does not cover hedges or refusals. |
| `Y0KidGr9Z2Y` | Lesson 8: A closer look at Discernment \| AI Fluency: Framework & Foundations Course | Anthropic | 5:23 | 2025-06-12 | 489,032 | 1,006 | +3 / −4 of 13 | "the content on Discernment is genuinely valuable and well-structured. That said, I found it hard to stay engaged because the delivery felt quite script-dependent" (16 likes) / "So off putting watching him just read the script off of something" (27 likes) | **6** All on-outcome (judging the output, the process and the behaviour), no pitch, timeless. A concept talk with no demo, and the delivery draws complaints. |
| `k1dNyhqfsQ8` | This AI Prompt Sequence Fixes Every AI Answer You Get | Craig Does AI | 11:50 | 2026-03-05 | 3,937 | 228 | +6 / −0 of 9 | "Wish I had this 3 months ago, it would have made my efforts more productive." / "the regeneration of the [answer]... was gem" | **5** Iterating by pressure-testing answers (a branded 5-step "Surviving Answer Method"). On-topic for pushing back, but 12 minutes for one method. |
| `W5cga7xipRI` | Lesson 3B: Capabilities & limitations \| AI Fluency | Anthropic | 7:20 | 2025-06-12 | 697,927 | 1,833 | +9 / −1 of 22 | "this one is able to actually use REAL TERMS - context window, temperature, hallucinations" (11 likes) / "these comparisons such as \"a friend that...\" are misleading" | **4** Clear, but it explains why AI fails; it does not teach how to iterate. Tangential. |
| `qFxzM_0611A` | Master AI: Ask Smarter Questions, Not Just Prompts (2026 Guide) | Algotics Academy | 8:00 | 2026-01-25 | 215 | 2 | 0 comments | No comments. | **2** Buzzword description ("Strategic Orchestration", "interrogation"); probably AI-generated. |
| `YAS4ojuhbW4` | Stop Prompting Claude. Start Loop Engineering. | Austin Marchese | 12:15 | 2026-06-19 | 128,392 | 3,439 | +5 / −1 of 25 (most are "I'm building X" replies to a pinned prompt) | "Make me a billion dollars. Do not make any mistakes. Loop." (28 likes) / "I went through the process you described (with Claude\"s help) and it work really smooth." | **1** Disqualified: Claude Code automation loops, off-outcome; "$25M+ startup" playbook funnel. |

Queries run (4):
1. `AI Fluency discernment Anthropic` (no date floor)
2. `ask AI to ask you questions before answering prompt` (publishedAfter 2025-06-01)
3. `claude refuses says it can't do that how to push back` (publishedAfter 2025-06-01). The `short` bucket returned 429; `medium` returned only off-topic hits.
4. `iterate with Claude refine output give feedback on draft` (publishedAfter 2025-06-01)

---

## 2.5 Make Things, Not Just Text (Artifacts)

Outcome: what artifacts are in the rebuilt app (docs, slides, dashboards, designs, small tools); make one from a chat, edit, download/share. Beginner, non-developer.

Dropped:
- `fRWNG0Id9Vg` (AI Impact, 10:02, 2026-05-08, 77k views): Cowork "Live Artifacts" plus a Skool funnel.
- `nYJv6OKwXUU` (Behind Tools, 2:52, 2026-02-08): pre-rebuild, AI-written description, 0 comments. Score 2.
- `6qQPaA_qzX0`, `PFlrynHWl50`, `PZzef2P7RHs` (Techie Topia create/edit/download trio, 1:52–2:29, 2026-10-22, 3–11 views): boilerplate descriptions. Not vetted further.
- `3RW9IiG-IpM`, `AYX3_crVqis`, `Aah4DHk4po8`, `2nQO0y1NvqU`, `Ic5jc5IDSJM`: under 2:00 or general, single-digit evidence.

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `FgwrGj_RJBg` | Claude Artifacts Explained — Docs, Slides, Designs & More \| How to Claude #19 | TechBrothersIT | 2:50 | 2026-10-24 | 328 | 1 | 0 comments | No comments. | **7 on paper** The description lists the brief: what an artifact is; Docs/Slides/Design plus Dashboards/Motion; three ways to create one ("ask in chat, the Output button, the Artifacts tab"); edit by asking, directly, or with "Edit with Claude"; "private until you share"; export to Word/PowerPoint/PDF/HTML; the required setting. Risk: the channel posts several videos a day (41 "How to Claude" episodes in about 2 weeks), so the narration may be synthetic. |
| `kJA3fQnntpY` | Collaborate on artifacts in Claude | Claude (official) | 2:40 | 2026-11-04 | 58,819 | 741 | +2 / −2 of 25 (most off-topic: model-release demands, bot spam) | "Thank you for making my life easier ❤" / "Can still only be shared inside one team" | **5** Post-rebuild real walkthrough of sharing and editing (access levels, comments, "ask Claude to make the update"). Covers only the share/edit half, framed for Team plans. |
| `U2yV4MCDmM4` | How to Use Claude AI: The Basics in 7 Easy Steps (Beginner Tutorial 2026) | AI Made Simple | 3:20 | 2026-10-23 | 18 | 0 | 0 (1 creator comment) | Creator playlist link only. | **3** General basics; the artifacts step is about 25 s (1:53). Same channel as the 3.1 pick `r6axtiq5-mM`. |
| `2PvoyXCsi8U` | Claude AI Full Course for Beginners (FREE, 2026) | Simplified AI Tips | 3:36 | 2026-10-28 | 110 | 4 | +2 / −0 of 2 | "Very useful" / "Bahut achcha" | **2** "Full course" in 3.5 min; Projects and Artifacts share 38 s. |
| `qyd42_I48X8` | Claude Artifacts: Make Apps, Games & Charts Just by Asking \| Claude Ep 6 | AI Knowledge & Inspiration | 1:53 | 2026-10-31 | 47 | 2 | 0 comments (metadata only) | No comments. | **5** Beginner: describe it, change it by asking, "Publish it, and share the link". Small interactive tools only; under 2 min. |
| `NzcRprKWbD8` | Make presentations with Claude Slides | Claude (official) | 1:45 | 2026-10-01 | 51,232 | 1,091 | +3 / −1 of 12 | "something that is clear !" / "So tell me why we need Claude Slides?" | **3** A story (designer turns a voice memo into a deck), not a how-to. Under 2 min. |
| `To5nrYqvR44` | Meet Claude Slides, Claude Design and Claude Docs | Claude (official) | 1:35 | 2026-09-16 | 402,071 | 4,488 | +5 / −3 of 25 | "endless content, created by no one, read by no one, without thought" (947 likes) / "the revision loop is the part that got me. Being able to comment on the deck and have Claude fix it right there" | **2** Disqualified: launch promo, mainly an ad. Under 2 min; pre-rebuild. |
| `en0GuyhieQk` | Introducing Claude Dashboards and Claude Motion | Claude (official) | 1:22 | 2026-10-08 | 1,404,304 | 15,045 | +4 / −0 of 25 (rest is jokes about startups) | "Another day another 50 startups absolutely crushed by Claude" (3,505 likes) / "This video is clear and easy to follow I did not expect it to be this good." | **2** Disqualified: launch promo. Dashboards need a paid plan, Motion a Team plan. |

Queries run (1 of 4; quota):
1. `claude artifacts tutorial beginners` (publishedAfter 2026-10-20). Only the `short` bucket returned; the `medium` bucket and a retry got 429.
2. `claude make slides dashboard artifact` (publishedAfter 2026-10-20): **failed, 429**.

Not run: `claude artifacts tutorial 2026`, `claude artifacts beginners` (medium). Supplemented by listing the official Claude channel's uploads (`playlistItems`), which gave `kJA3fQnntpY`, `NzcRprKWbD8`, `To5nrYqvR44`, `en0GuyhieQk`.

---

## 4.4 Build Something Real (+ 4.1 post-rebuild re-sweep)

Outcome: Claude Code in the desktop app (Code tab, open folder) used by a non-developer on documents, spreadsheets, PDFs, folders. No terminal.

No search ran for this lesson: `claude code desktop app non technical files folder` (publishedAfter 2026-10-20) **failed with 429**. Pool is from hits on 0.1 and 0.2 queries plus channel listings. Already evaluated, skipped: `omihvjf0A2k`, `-YTot4fwNFY`, `8c6JZ18W0Bo`, `P7-0grEB7nk`, `TvLgqLRWnho`, `CtbfEK0x45k`, `kT3P1Gdrzzs`.

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `4hc5Z_QBno4` | Claude Desktop App: Work with Files & Folders on Your Computer \| How to Claude #34 | TechBrothersIT | 2:33 | 2026-11-01 | 187 | 2 | 0 comments (metadata only) | No comments. | **6 for 4.4's job, surface unclear** "A real file job: rename invoices and build a summary spreadsheet", approval modes, and "Claude always asks before permanently deleting files". It connects via "Add folder", plus folder instructions, which looks like the Chat side's folder access, not the Code tab. The transcript must settle which. |
| `yTy8WV3Y9Nk` | How to Build a Website With Claude Code Desktop App | Mstimaj | 7:14 | 2026-11-04 | 38 | 0 | 0 comments (metadata only) | No comments. | **6 for 4.1 / 4 for 4.4** Current Code tab: point at a real folder, plan mode, questions panel, "Reject, Revise and Accept". No code written. The job is a website, not documents. |
| `uxuwkIyguh0` | How to Install Claude Code on Mac and Windows (No Terminal) | Chunk Chunk: The Velocity Method | 4:22 | 2026-11-02 | 20 | 0 | 0 comments (metadata only) | No comments. | **5 for 4.1** "from claude.com/download to your first project folder"; price stated up front. Setup only; "lesson 1 of 167" course. |
| `ke_UZ4EvGzk` | Claude Tutorial for Beginner Module 8 - Claude Code for Non-Coders | Braintiful AI | 5:53 | 2026-10-28 | 27 | 1 | 0 comments (metadata only) | No comments. | **4** Right pitch ("five jobs it can do, and only one of them is coding", diff view, Accept/Reject). But the description says "three tabs — Chat, Cowork and Code (September 2026)", so it shows the pre-rebuild UI despite the date. |
| `74ok3syFY38` | Claude Code for Beginners: The Easiest Setup (No Terminal Needed) | Mubanga chanda AI | 12:06 | 2026-10-27 | 63 | 4 | 0 comments (metadata only) | No comments. | **4** Setup plus first task; agency pitch ("I build and sell AI systems"). |
| `Rn7NBA5YKmw` | Claude Code: Terminal or Desktop App? (Which One to Use) | Sean Johnson | 2:24 | 2026-10-28 | 96 | 1 | 0 comments (metadata only) | No comments. | **4 for 4.1** Framing only (same engine, two doors). "Meet AI Sean" suggests an avatar presenter. |
| `KyTtXorBl74` | "Claude 2.0"? What Actually Changed in Claude Code Desktop | ParseAI | 3:20 | 2026-10-30 | 50 | 1 | +0 / −0 of 0 (1 creator comment) | Creator's pinned poll only. | **2** Developer A/B test (API rate-limit job). Wrong audience. Useful fact for copy: the rebuilt Code tab shipped in app v2.42304.0 on 2026-10-15. |
| `nJv40KBsxsc` | Rename every photo on your computer with AI | Mstimaj | 1:36 | 2026-11-04 | 17 | 0 | 0 comments | No comments. | **1** Disqualified: "It runs in Command Prompt" (terminal). |

Queries run (0 succeeded):
1. `claude code desktop app non technical files folder` (publishedAfter 2026-10-20): **429**

To run once the quota resets: `claude code desktop app documents spreadsheet`, `claude code for business owners no coding desktop`, `claude code organize files folder tutorial`. All with publishedAfter 2026-10-20.

---

## Shortlist for transcript fetch

```python
    "0.1": ["kuMfcvNOuHk", "9Li_6baapwc"],
    "0.2": ["N890AspWgEw"],
    "2.3": ["tk4Ljz9p-UI", "Y0KidGr9Z2Y", "k1dNyhqfsQ8"],
    "2.5": ["FgwrGj_RJBg", "kJA3fQnntpY"],
    "4.4": ["4hc5Z_QBno4"],
    "4.1": ["yTy8WV3Y9Nk"],
```
