# Gap search, Modules 1–3: videos for 1.2, 2.2, 3.1 (re-sweep), 3.2, 3.3

Run 2026-11-05. Same process as `video-research.md`: metadata, top 25 comment threads by relevance (creator comments set aside), +praise/−complaint tally, two telling quotes, 1–10 meat-per-minute score. No youtube.com pages were fetched. No id already in `video-research-results.md` was re-scored. Scores rest on titles, chapters, descriptions and comments. No transcripts were read.

**Discovery note: the YouTube search quota ran out.** The `search` endpoint returned HTTP 429 (`defaultSearchListPerDayPerProject`, 100/day, exhausted). Two API searches succeeded before the coordinator ruled that no more search calls be made. Candidates after that came from three sources:
- **(API)**: the two API searches that succeeded.
- **(WS)**: WebSearch restricted to youtube.com.
- **(CH)**: the API's `channels`, `playlists` and `playlistItems` endpoints, used to list uploads from known channels and Anthropic's AI Fluency playlists.

Metadata and comments always came from the API's `videos` and `commentThreads` endpoints. Two creator slide pages (`d-squared70.github.io`) were blocked by the session's network allowlist, so the Dylan Davis contents could not be checked.

**Rebuild note.** The official Claude channel posted "Claude Cowork and chat are now one Claude" (`qMUf-jwSpMo`) on 2026-09-16, so the merge began rolling out before 2026-10-20. That matches the earlier finding that the rollout ran from September to November. No Gmail/Calendar, work-tool or "morning with Claude" walkthrough published after 2026-10-20 turned up from any source.

## Summary

| Lesson | Best candidate | Second | Verdict | Why |
|---|---|---|---|---|
| 1.2 Director, Not Doer | `DmgujoZ1mmk` "Lesson 6: A closer look at Description" (AI Fluency), Anthropic, 4:22, 2025-06-12 | `wmCXIPlllpA` "Your AI UX Intern", NNgroup, 4:23, 2025-04-02 | **Other angle**: frame the brief as *Description* (what you want, how to approach it, how Claude should behave). The pushback and review steps stay in the text. | It teaches the brief and nothing else, with 556k views. The comments complain about the scripted delivery, not the content. "Lesson 5" is an exercise, not a video (confirmed by the creator), so Lesson 6 is the one to use. |
| 2.2 Give It What It Needs | `Zzn-g8lvLMA` "Data analysis with AI" (AI Fluency for nonprofits), Anthropic, 7:10, 2025-12-02 | `PwUr0fowN1I` "Upload Documents to Claude AI", Data Science Basics, 13:37, 2026-02-20 | **Other angle**: build the task around one real, messy file handed over whole, with Claude doing the reading. | 1.1M views, and the comments praise how clear it is ("very clear and concise explanation with very vivid examples"). The exact-topic video (`PwUr…`) covers PDF, image, screenshot and spreadsheet uploads, but has 0 comments and shows Sonnet 4.6. |
| 3.1 Inbox and Calendar (re-sweep) | `LNpOyx4DOJ4` "How to Use Claude in your Gmail", Holly Cope, 6:44, 2026-08-30 (pre-rebuild) | `dMC8p2sJ7gY` Checkmark Academy, 4:08, 2026-03-22 (Calendar only) | **Exact fit (pre-rebuild)**. The chat behaviour still holds. Its Settings-based setup (5:58) is out of date. Play 0:00–3:42. | A live demo of the lesson's asks: triage by urgency, a calendar-availability check, a reply drafted "safely", and tone matching. It has 370 views and 0 comments, so there's no audience evidence. The re-sweep found nothing new after 2026-10-20. The earlier pick `r6axtiq5-mM` now has 4 views and 1 comment. |
| 3.2 Connect Your Work Tools | `BKzEVhT2054` "How I Use Claude to Automate My Entire Notion Workspace", Benjamin Preston, 5:14, 2026-06-18 (pre-rebuild) | `8cdVubYQjKY` "How to Connect Claude to Notion", AyyazTech, 4:45, 2026-05-30 | **Exact fit (pre-rebuild)** | Raw meeting notes become a Notion page with a status, which is the lesson's "carry it across" move. It also shows per-page permission scoping and that the connector cannot delete. 11.7k views, 1 comment (a question). |
| 3.3 A Morning With Claude | `D5nZOUfac_0` "Set Up a Daily Morning Brief with Claude AI", Nexus, 15:11, 2026-05-29 (pre-rebuild), 2:57–8:18 only | `LNpOyx4DOJ4` Holly Cope 0:00–5:20, if 3.1 keeps `r6axtiq5-mM` | **Other angle**: reframe the lesson as writing one standing morning-brief prompt (read full threads, check sent mail, a fixed output format), then running it by hand in chat each morning. | The prompt-anatomy segment is tool-agnostic and +3/−0 of 3. The rest is set up as a Cowork scheduled task (1:26–2:57, 8:18–9:56), which counts as borderline Cowork-centred, so play only the segment. No true "day in the life with connectors" video under 20 minutes was found. |

---

## 1.2 Director, Not Doer

Outcome: brief like a manager (outcome, context, audience, what good looks like), review and send notes, push through hedging.

Disqualified:
- `cBdFhHyEW4Y` AI Advantage "How You Delegate to AI in 2026": off-topic. It demos Claude learning a task by watching the screen, then covers ChatGPT news.
- `wt9TOegECFY` Mollick on Prof G: about CEO strategy, not working with AI.
- `Xoj0GGu0-aw` Mollick and Kantrowitz: 63 min.
- `TCEezenNt1w`: 29 min.
- `pXBvZZLQgXU` "Delegate Your First Task to AI": 25 min, and it's Claude Code.
- `l3edTtf4dU8`: 1:31 product ad.
- `SDv2MHdsCjw`: 1:08 hook, no demonstration.
- `d4f1jqb3Yis` Big Think "4 scenarios": about the future of AI, not working with it.
- Mollick book summaries from the API search (`2cR185Oau9k`, `i2D6G8yT9jo`, `1AdToJo1a_0`, `ZCm6wUikum0`, `SHMtfUa-IJ4` and others): third-party summaries with under 5k views and almost no comments.
- `gSMzQbOqYho`: an AI-voiced novelty.
- `MGpstja30PY`: podcast clip about strategy.

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `DmgujoZ1mmk` (WS, CH) | Lesson 6: A closer look at Description (AI Fluency) | Anthropic | 4:22 | 2025-06-12 | 556,041 | 1,157 | +4 / −5 of 20 | "clearly explaining the process of… communicating with AI in a common-sense manner" / "The narrator is literally reading from the script" | **7** The whole runtime is on describing the outcome, the process and Claude's behaviour, which is the brief. It has no pushback or review step. The complaints are all about delivery. |
| `wmCXIPlllpA` (WS) | Your AI UX Intern | NNgroup | 4:23 | 2025-04-02 | 12,396 | 446 | comments disabled | — | **6** "Treat their work as a first pass, double-check their facts, and provide specific instructions". This is the manager frame in 4 minutes. Its examples are UX work, and it has a 3.6% like ratio. |
| `Y0KidGr9Z2Y` (CH) | Lesson 8: A closer look at Discernment (AI Fluency) | Anthropic | 5:23 | 2025-06-12 | 489,032 | 1,006 | +2 / −5 of 13 | "the content on Discernment is genuinely valuable and well-structured" / "So off putting watching him just read the script" | **6** Teaches the "review the draft like a manager" half. Same delivery complaint as Lesson 6. |
| `CVyoaXiUQn0` (CH) | I Say the Same 7 Phrases to ChatGPT & Claude Every Day | Dylan Davis | 11:02 | 2026-10-26 | 9,142 | 236 | +5 / −1 of 9 | "consistently ranking in the top usefulness and conciseness of YT vids" / "If you're saying the same seven phrases everyday, why don't you just tell AI to do that for you" | **5** Likely covers follow-up and pushback phrasing. The contents couldn't be verified (slides blocked). There's a coaching funnel in the description. |
| `pEUn-a3Swks` (CH) | Anthropic's Staff Don't Have Better Prompts. They Do This | Dylan Davis | 14:50 | 2026-10-31 | 28,685 | 596 | +9 / −4 of 17 | "Okay wow this one is amazing… Stealing it" / "Making a skill for anything you do multiple times is terrible advice" | **5** Includes "keep working till you find a way" (push through) and an answer-format habit. Leans toward skills and workflow habits, which belong in Module 5. |
| `dTVLDjsXSMQ` (WS) | The Agent Shift: Ethan Mollick on Managing AI Like a Team Member | Valence | 2:34 | 2026-03-09 | 368 | 3 | 0 | — | **4** On-message ("assign the work to AI and audit the result"), but it's a clip with no worked example and no evidence. |
| `sdkF1OHGdZc` (WS) | How I Give ChatGPT & Claude the Same Business Context | Leslie Samuel | 3:44 | 2026-09-20 | 411 | 6 | +1 / −0 of 2 | "I certainly have a few docs loaded in my Claude… It saves so much time." | **3** About standing context docs, which fits 2.4 better. |
| `nOrvD4XApaE` (WS) | Why Delegation Fails When You "Delegate" to AI | RADical Success with Angie Dobransky | 5:35 | 2026-08-03 | 11 | 1 | 0 | — | **3** Right title, no evidence. Not vetted further. |

Queries run (1.2):
1. API search `Anthropic AI Fluency Description` (medium): **429 quota error**. One retry also returned 429.
2. API search `treat AI like a new employee how to delegate to AI brief` (medium, after 2025-01-01): **429 quota error**.
3. API search `Ethan Mollick co-intelligence talk` (medium): OK, 15 results.
4. WS `youtube Anthropic AI Fluency "Description" lesson video`
5. WS `youtube treat AI like a new employee intern how to delegate to AI manager brief`
6. WS `youtube Ethan Mollick treat AI like a person give it context feedback short talk`
7. WS `youtube how to delegate to AI like a manager give feedback on draft push back Claude ChatGPT`

That's five searches that returned results (one API, four WS). The two 429s returned nothing. Also listed: the AI Fluency Course playlist `PLf2m23nhTg1NjL3-jL3s0qZCYzO07ZQPv` and Dylan Davis uploads since 2026-10-15 (CH).

## 2.2 Give It What It Needs

Outcome: get real material in (files, whole threads, screenshots, spreadsheets) without tidying first.

Disqualified:
- `HC7Eq90bR9Y` Christine Payton: Claude Code writes a Python extraction script. That's a build, not handing material to chat.
- `9OsKjq_rVXc` Kevin Stratvert "Claude for Excel": an Excel add-in with an affiliate link, not chat.
- `vMo-yRCN3QM`, `gYuYpzEzH1Y`: Cowork-centred.
- `cl5Oudk3Hjo`, `fRWNG0Id9Vg`: Claude Design and artifacts, off-topic.
- `pbvl2MAWXvI`: Gmail-to-Excel connector build, 15:27, off-topic.
- `7tfqvThfY2Q`: Hindi/Urdu.
- `FeARLMEvw1o`: Excel automation hook.
- `ufpeZDMy4rw`: 31 views, generic "ChatGPT and AI tools" outline.
- `6aU7mqPyz4Q`, `TQqB9m7OSsc`, `37JrgawwoUo`, `2egYbUAyXI8`, `94Rr7sklMQQ`, `AneqAQieM54`, `d0RhJkS9Gdw`, `ieZIFHqPHDQ`: 2-minute "click the paperclip" clips with 0 comments.
- `KIHpFS0kmTg`, `PjKsrBRwu7g`, `MxgGKl438Qw`: under 60 views, no evidence.
- `VCGPy_tBcGA`, `XnpXkWwopbk`, `OLihzMI7KOM`: terminal Claude Code.

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `Zzn-g8lvLMA` (CH) | Data analysis with AI (AI Fluency for nonprofits, video 6) | Anthropic | 7:10 | 2025-12-02 | 1,139,546 | 3,498 | +7 / −2 of 25 | "That's a very clear and concise explanation with very vivid examples" / "Please try to ar-ti-cu-la-te... I understood....10%" | **6** A worked example of handing Claude real program data and checking what comes back. Other angle: spreadsheets only, with a nonprofit framing. Several comments raise privacy, which is worth one line in the brief. |
| `PwUr0fowN1I` (API) | Upload Documents to Claude AI: Files, Images & Data Analysis | Data Science Basics \| AI | 13:37 | 2026-02-20 | 5,373 | 33 | 0 | — | **5** Chapters match the brief exactly: PDF, images (charts, handwriting, screenshots, errors), CSV/Excel, comparing two documents. No audience evidence, shows Sonnet 4.6, and 13.5 minutes long. |
| `OQzANXIckWo` (CH) | Writing with AI (AI Fluency for nonprofits, video 4) | Anthropic | 7:15 | 2025-12-02 | 20,654 | 56 | +1 / −0 of 1 | "'Giving AI examples of past work and style' is a great tip" | **5** Covers the lesson's second half ("attach an example of what good looks like"). Nonprofit framing, thin evidence. |
| `JMIHLk8ps-I` (API) | What Claude Can And Can't Read From Your Files | Real Life with Lou | 11:08 | 2026-08-29 | 81 | 0 | creator only | Creator: "a screenshot pasted inside a Word document doesn't reach it" | **4** A useful plain-English list of what Claude can read and where it falls short. Needs checking against current limits. No audience. |
| `AuZU-SWmYVA` (API) | Upload a Messy CSV and Get Answers You Can Trust | AI Tech | 10:28 | 2026-10-16 | 25 | 2 | 0 | — | **4** The title is the lesson's "don't tidy first" rule. No evidence. Not vetted. |
| `XxJ5QA8e29Y` (API) | File Uploads on Claude: PDFs, Images, CSVs, Code in One Chat | Cognitive Capital | 4:05 | 2026-06-02 | 33 | 0 | 0 | — | **4** Formats, plus when to attach to a chat vs. a Project. Newsletter funnel, no evidence. |
| `w88IUPpjQp0` (WS) | How to Use Claude with Large Documents | Learn AI Tools | 3:57 | 2026-07-19 | 1,638 | 8 | creator promo only | — | **3** A generic SEO-template description. |
| `2wURKYZafpM` (API) | Claude AI Level 2: File Uploads, Web Search & Deep Research | DAC - Data Analytics Cloud | 7:12 | 2026-09-27 | 98 | 2 | 0 | — | **3** Only about a third of it is uploads. |
| `_pUqmwAyJzM` (WS) | How to Upload Files to Claude AI [2026 Full Guide] | BM Tech Tutorials | 2:58 | 2026-03-09 | 1,957 | 9 | +0 / −0 of 1 | "Love your accent - I don't even know what you offering" | **2** The description reads like it was machine-written. Shows only the upload click. |

Queries run (2.2):
1. API search `Claude upload files PDF spreadsheet screenshot analyze` (medium, after 2026-01-01): OK, 15 results.
2. WS `youtube Claude give context upload files paste email thread screenshot tutorial 2026`
3. WS `youtube give AI context files examples "context" better results Claude documents spreadsheet screenshot real work`
4. WS `youtube Claude analyze PDF spreadsheet screenshot beginner chat attach files what Claude can read`

Also listed: the AI Fluency for nonprofits playlist `PLf2m23nhTg1MjwozACw3ufAc3CUpfOBWO` (CH). No search found a video about pasting a whole email thread.

## 3.1 Connect Your Inbox and Calendar (post-rebuild re-sweep)

Re-sweep result: **no Gmail/Calendar connector video published on or after 2026-10-20 beyond the ones already scored** (`r6axtiq5-mM`, `Bm3kges7l1Q`, `dW4AZLGQiKw`, `Hch4XDHbJzc`). Rechecked stats today: 4, 15, 17 and 27 views; 0–1 comments each. Their table row is not re-scored. The rows below are pre-rebuild videos that the first pass missed.

Disqualified:
- `idJQMJwHtyM` Claude official "Claude for Google Workspace" (2026-10-06): off-topic. It's the Docs/Sheets/Slides add-on, not Gmail/Calendar.
- `kedQfInhwoM`, `OUpJbWI7nV0`, `svOps39vJSk`: MCP setup.
- `8g7Zo2gSLwM` (German), `u29ZSfhPFo0` (Spanish), `CW6ESut728s` (Italian): not English.
- `6AdzrQHVw_w`, `Ho7iFRxOZtk`: about 1 minute, no evidence.
- `k1rr2JqFmkw`: Sheetify CRM promo, Calendar only.
- `itVCcbaHJK4`, `qp_83j4va7U`, `qhGYFXMbUFI`: "Chat + Cowork merged" news, not connector walkthroughs.

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `LNpOyx4DOJ4` (WS) | How to Use Claude in your Gmail | Holly Cope | 6:44 | 2026-08-30 | 370 | 1 | 0 | — | **6** The chapters are the lesson's task: Gmail triage by urgency (0:51), a calendar-availability check plus a reply drafted "safely" (1:38), tone (2:56), and connector setup (5:58). It also previews a Skill (4:15). Pre-rebuild setup path, advisory-firm sign-off, no audience evidence. |
| `dMC8p2sJ7gY` (WS) | How to Connect Google Calendar to Claude AI (Step by Step) | Checkmark Academy | 4:08 | 2026-03-22 | 1,579 | 3 | +0 / −0 of 1 | "Can I build a Claude agent that synchronizes a Google calendar with a STX salon server calendar?" | **4** Shows the permissions screen and then real calendar asks. Calendar only. Shows the old "Settings → Connectors" path. |
| `Ug1_3PJJna8` (WS) | Claude AI Manages My Google Calendar Now! | Rakin Jakaria | 10:29 | 2026-03-17 | 2,473 | 29 | creator promo, plus 1 "make extra money?" | — | **3** Calendar asks (conflicts, weekly summary, morning schedule). Skool community funnel in description and comments. |
| `XVLvu-93jbw` (WS) | Claude Gmail Connector Tutorial | Sheetify CRM | 3:05 | 2026-05-21 | 9,443 | 38 | 0 | — | **3** Gmail only. A vendor's template promo makes up a large part of it. |
| `sBdPnK8pucY` (WS) | How to Use Claude Connectors: Tutorial for Beginners (2026) | Educational Hub | 9:21 | 2026-06-18 | 1,436 | 6 | +1 / −0 of 1 | "very solid information" | **2** Same title and publish date as Kevin Stratvert's `FpRNId-jeTQ`, tagged `#stratvert`. Probably a re-cut. Avoid. |

Queries run (3.1):
1. WS `youtube Claude connectors Gmail Google Calendar new desktop app November 2026`
2. WS `youtube Claude 2.0 connectors tutorial Gmail Google Calendar "Customize" connectors new Claude app`
3. WS `youtube "Claude" new app Chat tab connectors Gmail calendar "scheduled tasks" Cowork merged` (also used for 3.3)

The API `search` with `publishedAfter=2026-10-20` could not run because the quota was exhausted. In its place, uploads since about 2026-10-15 were listed (CH) for: Claude (official), Anthropic, Kevin Stratvert, Futurepedia, Teacher's Tech, Not a Computer Person, Mstimaj, Dylan Davis, Nick Saraev, Simpletivity and Benjamin Preston. None was a Gmail/Calendar walkthrough. Tristen O'Brien and Matthew Esposito had no uploads in that window. `@AIMadeSimple` resolves to a different channel ("AI101"). `@ClipCookie` had 0 uploads in the window. No handle exists for Cynked AI.

## 3.2 Connect Your Work Tools

Disqualified:
- `xVTBi8bPY-I` George Vlasyev: MCP server on a VPS, with affiliate links.
- `0sMpsbkCfRY` Chris Punt: Notion MCP setup across Cowork and Code.
- `uGOFjjM2ZUk`: 2025 MCP integration.
- `4beIuzJkJX0`: "Slack + Claude MCP Connector Setup", MCP-setup framing, 0 comments.
- `DoDqy5ZGjY4`: a Fellow sponsor demo (mainly an ad).
- `6_DyEOWPO9U`: Gemini-in-Gmail-led.
- `0yp3BHEJ8vo`: 2025 Klaviyo e-commerce.
- `J9GNCMXOlN8`, `gcH01QppIw4`, `HPq2Hyj4egQ`, `eizTbcZAYm0`, `QniKP7mIPDQ`: under 2:20, 0 comments.
- `QVFug46N96k`: a general install guide (9:16) in which connectors are one part.

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `BKzEVhT2054` (WS) | How I Use Claude to Automate My Entire Notion Workspace | Benjamin Preston | 5:14 | 2026-06-18 | 11,697 | 84 | +0 / −0 of 1 | "How were you able to constrain or select the project / page that you wanted it to work in? I didn't see that part" | **7** Opens on "the copy-paste courier job you never applied for". Then a per-page permission step (1:19), raw notes turned into a Notion page (2:13), "Claude cannot delete" (3:19), and honest limits (4:05). Close to the lesson's own argument. The viewer's question suggests the scoping step is quick. |
| `8cdVubYQjKY` (WS) | How to Connect Claude to Notion — Complete Setup Guide 2026 | AyyazTech | 4:45 | 2026-05-30 | 10,157 | 56 | +1 / −0 of 2 | "very useful. i couldnt get notion to connect until i watched this." / "To manage or delete tasks, connect to the Claude Browser Extension" | **6** Add the connector, authorize, verify, create tasks, "allow once vs always allow" (2:18), update a page, the delete limit. Covers setup and permissions well. Light on carrying information across tools. |
| `Grau4BD4oXs` (WS) | How to Connect Claude with ClickUp (Step by Step) 2026 | Checkmark Academy | 9:07 | 2026-04-07 | 3,779 | 34 | +0 / −1 of 1 | "Claude and clickup was working perfectly until I changed into Claude teams plan. Then I got blocked" | **5** "Turn emails into tasks" is the lesson's first example, and ClickUp is the lesson's named tool. Also docs and standups. No chapters, thin evidence. |
| `daqu67Le0tU` (WS) | How to Connect Asana to Claude AI (Step-by-Step) 2026 | Checkmark Academy | 9:03 | 2026-04-27 | 2,739 | 23 | 0 | — | **5** Approving permissions, checking urgent tasks, meeting notes and PDFs turned into tasks, a weekly client report. Calls it the "official MCP connector" in passing. No evidence. |
| `zzC4neLenDE` (WS) | How to Connect Notion to Claude AI (Step by Step) | Checkmark Academy | 2:43 | 2026-03-25 | 8,646 | 60 | +1 / −1 of 2 | "Thanks for you explanation, very useful" / "When I search Notion, it says owner approval is required." | **4** Setup only (old Settings path). |
| `q8MPoDF7zzA` (WS) | How To Connect Claude To Google Drive 2026 (Full Tutorial) | Stellar Media | 4:19 | 2026-08-24 | 236 | — | 0 | — | **3** Drive setup plus reading Docs, Sheets and Slides. No evidence. |
| `gmYGikf-Zaw` (WS) | How to Send Slack Messages Through Claude AI | Learn AI Tools | 3:34 | 2026-08-19 | 205 | 1 | 1 (creator promo) | — | **2** Template channel. Sending messages rather than reading. |
| `MXxsDqwvbWs` (WS) | How to Link Slack to Claude AI | Learn AI Tools | 2:26 | 2026-08-24 | 24 | 0 | 1 (creator promo) | — | **2** Setup only. |

Queries run (3.2):
1. WS `youtube Claude Notion connector tutorial`
2. WS `youtube Claude Google Drive connector Slack connector tutorial 2026`
3. WS `youtube Claude ClickUp Asana Linear connector create tasks from email tutorial` (no Linear result)

Also listed: Benjamin Preston uploads since 2026-06-01 (CH). Nothing on connectors after 2026-10-20.

## 3.3 A Morning With Claude

Disqualified:
- `I63Kigvr-h0`: 37 min, Cowork.
- `gh7TFGflnco`: 20:17.
- `w6jRdxmsSt4`, `KWtE9Kz5DqU`, `UnaxZoUE32o`: Cowork-centred.
- `KDyPHt4lW60` Nick Saraev "31 Life-Changing Ways": off-topic, a list of maker hacks with a Maker School funnel.
- `yasLwkxNnDk` Arrows: a vendor's sales-brief product demo.
- `3HVR4X1KqSM` Benjamin Preston: a Fellow sponsor demo (mainly an ad).
- `wnTAJhD_x7A`: 1:01 Short.
- `qdrcGH3ZXnY`, `zUpVHo-J168`: not English.
- `HIOQbAyebtM`: 2025 Notion MCP.

| id | Title | Channel | Length | Published | Views | Likes | Comments (+praise / −complaint of N read) | Two most telling comments | Score: meat per minute |
|---|---|---|---|---|---|---|---|---|---|
| `D5nZOUfac_0` (WS) | Set Up a Daily Morning Brief with Claude AI | Nexus | 15:11 | 2026-05-29 | 4,778 | 38 | +3 / −0 of 3 | "I added this to my morning brief, and made it instantly better." / "Really helpful video! Thanks" | **5** Overall. The 2:57–8:18 segment scores about 7: why data source order matters, reading every page of email, reading full threads rather than snippets, checking sent mail, a seven-section output, tone rules. The Cowork scheduled-task setup (1:26–2:57) and run (8:18–9:56) are pre-rebuild and belong to 5.3. It uses Obsidian for output. The prompt is public as a gist. |
| `LNpOyx4DOJ4` (WS) | How to Use Claude in your Gmail | Holly Cope | 6:44 | 2026-08-30 | 370 | 1 | 0 | — | **6** Its 0:00–5:20 is a real morning: triage, a calendar check, drafted replies, a "Morning Breakdown" skill. It's the better 3.3 fit if 3.1 keeps `r6axtiq5-mM`. Don't use it for both lessons. |
| `Ce2PB2qyLi0` (WS) | I have Automated my Morning AI Briefing using Claude Routine | Technical Potpourri by Sudipta Deb | 8:13 | 2026-04-23 | 4,160 | 24 | +1 / −0 of 2 | "your videos are very easy to understand" / "every day there's something new! It's overwhelming!" | **2** A news digest sent to Slack under the old "Routine" name. That's 5.3 territory, not a workday. |
| `ORK_OPCzVAM` (WS) | How To Use Claude AI For Meeting Prep (2026) | Digital Girl Reviews | 3:17 | 2026-05-12 | 34 | 0 | 0 | — | **3** Covers the Prep step only. No evidence. Not vetted. |

Queries run (3.3):
1. WS `youtube day in the life using Claude for work morning routine email calendar`
2. WS `youtube how I use Claude every day at work inbox triage meeting prep connectors non-technical`
3. WS `youtube how I run my week with Claude connectors Gmail calendar Notion workflow 2026`
4. The shared 3.1 query on the merged Chat app.

Also checked: Nick Saraev and Dylan Davis uploads since 2026-10-15 (CH).

## What could not be verified

- No transcripts. Every 3.x pick is pre-rebuild, and screen paths will show "Settings → Connectors" where the current app uses Customize → Connectors. The lead should check each against the current app.
- The 3.1, 3.2 and 3.3 leaders have 0–6 comments, so their scores rest on chapters and descriptions.
- The AI Fluency videos are from 2025 and use no product UI, so they should age well. Commenters consistently dislike the presenter reading from a script.
- If 1.2 uses `DmgujoZ1mmk`, the AI Fluency series appears three times in a row: 1.1 (Lesson 4), 1.2 (Lesson 6), 2.1 (Lesson 7). The lead may want to break that up.

## Shortlist for transcript fetch

```python
"1.2": ["DmgujoZ1mmk", "wmCXIPlllpA", "CVyoaXiUQn0"],
"2.2": ["Zzn-g8lvLMA", "PwUr0fowN1I", "OQzANXIckWo"],
"3.1": ["LNpOyx4DOJ4", "dMC8p2sJ7gY"],
"3.2": ["BKzEVhT2054", "8cdVubYQjKY", "Grau4BD4oXs"],
"3.3": ["D5nZOUfac_0", "LNpOyx4DOJ4"],
```
