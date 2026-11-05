# NEXUS Operator — Project Handoff

Read this first in any new session. It carries the project lead's thinking, the decisions made so far, and where things stand. Joshua is the lead. The direction below is his; the implementation choices are Claude's and are open to change.

---

## 1. Where this came from

- **`jvennetti/nexus-academy`** is the original course, built for a three-person core team. It is a time capsule and must never be modified. Read-only reference.
- **`jvennetti/nexus-open`** is a single-operator, public copy with inside jokes and the three-operator lore removed. It was the seed for this repo's shell.
- **`jvennetti/nexus-operator`** (this repo) is the rebuild. Live at https://nexusoperator.pages.dev, deployed automatically from `main` by Cloudflare Pages.

What the lead loved about the original and wants kept: the atmosphere, the gamification, the robot CIRO and his lingo, the hub with locked modules and badges, the machine finale. What was outdated: nearly all the content, which was 46 YouTube videos tied to early-2026 product UIs.

## 2. The lead's thinking, in his words where possible

**On what the course is.** "This course is for people who want to get good at Claude one step at a time." It is a learn-AI course, not a business course. It should "walk people through starting to use Claude, to using Claude Code and understanding skills, file systems, and tips and tricks."

**On how people learn.** "I don't think watching a TON of YouTube videos is necessarily the best way to learn. A mix of watching great content, only the best, and then also conquering real problems is the real way to start learning."

**On lessons.** Lesson plus task, agreed. His design for the prompt lesson: "have them copy a bad prompt that lacks context, put it in the chat. Then ask them to write a better prompt for the same outcome based on the rules they've learned, put that prompt in a new chat, and compare the results."

**On pushing back.** "If Claude says it can't do something, tell it you want it to do it! Usually or always it can. That's an important lesson for beginners." This is now taught in 1.2, 2.3 and 6.4.

**On the modules, his notes that reshaped the curriculum:**

- Workspace setup = make a Claude account, learn the interface, with a skip for people already set up.
- Module 1, mindset: "good but should be short and not waste time."
- Module 2, prompting: "how to prompt really well is good." Context management is "too technical when getting started... they can't even begin to understand context management if they're not building things yet." So it moved to 5.2.
- Module 3: "Cowork is outdated. Claude Chat and Claude Code are the only two interfaces now. Even Design is built into the chat." Connectors should be taught as "connect your Gmail, ClickUp... daily tools and let Claude work with you to make you more productive." "MCP is probably too much here. It's a concept that can be implemented by just telling Claude what you want." "Zapier is totally out of a job."
- Module 4: "Agents are not a real thing... it's better someone learns about what a skill actually is (just a text doc with instructions). Claude Code is good to start understanding." Design videos are outdated: "just tell it what you want to design and it'll do it." But "information about context and how to give it what it needs to design/write/build well is huge."
- Module 5 (old lead-gen): "All these sound old to me." Keep scheduled tasks: "have them schedule a task for something. Check their emails, send report, something."
- Module 6 (old selling): "Selling and delivering is huge but it doesn't have to do with learning AI... This should probably pivot somehow."
- Claude Code: "should just be Claude Code inside the desktop app. I don't see any reason to teach the Claude Code in terminal route."

**On content freedom.** "All the copy, and all the previous challenges/lessons are challengeable... almost all of it should change because we can make it better and more integrated." Branding: "the robot and robot lingo I wish would stay the same but Opus and Fable are so much more capable we could and should consider new lingo for him, and also new graphics even for the robot animation. That's secondary to good content though."

**On videos.** "Most of the videos will have to go." Plan what someone should learn first, then find videos for those things and attach them to tasks. "Keep it simple and clear and as concise as possible and only the necessary information." "Official from Anthropic is cool but might not be the best content in some situations." He wants real vetting: transcripts read, comments checked for "clear, concise, helpful" versus "viral hooks that promise the world and don't give the meat." "We need to structure full on MEAT that hits the points we've agreed on."

**On how he wants to work.** Step by step, in this order, not all at once:

1. Videos paired with tasks. Concise, only the necessary information.
2. Then design. The lesson page as first built has "way too much going on." Make it clean.
3. Then CIRO's language. He wants to talk through tone and work through examples before anything is locked in.
4. Then graphics and pages, including better animation for CIRO.

He also prefers decisions to be made for him after proper research, presented with what was decided and why, without long option surveys. Short messages.

## 3. What's built

- **Shell:** hub, CIRO intro, machine finale, bonus vault, audio, images, mobile styling. Copied from nexus-open.
- **Content as data:** `content/course.json` (structure, badges, CIRO lines), `content/lessons/*.md` (24 lessons), `content/challenges/*.md` (6 challenges). `python3 build.py` generates all pages and refreshes the hub's data block. Never hand-edit generated pages.
- **Lesson page:** brief, optional video, "Do This Now" task box with numbered steps and copyable prompt blocks, "Mark task done" button, notes, takeaways, prev/next. Next is soft-locked until the task is marked done, with a small "continue anyway" link.
- **Guards:** fresh visitors go to the intro; returning visitors go to the hub; deep links to locked modules bounce to the hub. Share link is just the root URL.
- **Curriculum:** see `docs/curriculum.md` for the module map, outcomes and design rules.

Current lesson list: Setup (0.1 account, 0.2 interface) · M1 Operator Mindset (1.1 What Changed, 1.2 Director Not Doer) · M2 Speak Claude (2.1 Anatomy of a Good Prompt, 2.2 Give It What It Needs, 2.3 Iterate and Push Back, 2.4 Projects, 2.5 Make Things) · M3 Claude in Your Tools (3.1 Inbox and Calendar, 3.2 Work Tools, 3.3 A Morning With Claude) · M4 Claude Code (4.1 Chat Answers Code Acts, 4.2 Folders Are Memory, 4.3 The Instructions File, 4.4 Build Something Real, 4.5 Sessions Permissions Safety) · M5 Skills and Automation (5.1 What a Skill Is, 5.2 Context Management, 5.3 Scheduled Tasks) · M6 Build Your System (6.1 Choose Your Workflow, 6.2 Build It, 6.3 Run It Then Refine It, 6.4 Tips From the Field).

The lead has not yet reviewed the lesson content line by line. Everything is a first draft. The briefs are currently longer than he wants; they'll be cut when videos are paired (step 1) and the page is simplified (step 2).

## 4. Current step: videos (step 1)

Full plan and candidate pool in `docs/video-research.md`. Summary:

- Ten lessons get at most one video: 0.2, 1.1, 2.1, 2.4, 3.1, 4.1, 4.3, 5.1, 5.2, 5.3. The other fourteen stay text-only on purpose.
- Candidate ids came from web search titles only. None has been watched or verified.
- Vetting uses the YouTube Data API via the `YOUTUBE_API_KEY` environment secret: metadata plus top comments by relevance. Transcripts come from the lead or Claude in Chrome, for finalists only.
- Do not fetch youtube.com pages directly from the cloud environment. It gets a bot check, and circumventing it is not allowed. Apify was considered and rejected for cost.
- Output expected: a table per lesson with evidence, at most two finalists per lesson, "none" allowed. The lead confirms picks before any id goes into a lesson.

## 5. Decisions already made that should not be relitigated

- Cloudflare Pages, not GitHub Pages. Project name `nexusoperator`. Custom domain is a future nice-to-have.
- Free course first. Paid version later, not now. When it comes: Cloudflare Access email allowlist in front of the same static site, plus Stripe or Lemon Squeezy, allowlist updated on payment. Not a membership platform.
- Challenges use the learner's own work, with a fictional fallback for people who don't have a job that generates it. No invented clients.
- Video rules: under 20 minutes, most of those minutes teaching, current app only, no preference for official sources beyond tie-breaking.
- `DEV_UNLOCK` stays false. Progress stays in localStorage. Honor system is fine for the free course.

## 6. Open items

- Step 1 video vetting (blocked on a session that can see `YOUTUBE_API_KEY`).
- Lead's line-by-line review of lesson content, especially 0.2, 3.1, 4.1, 5.3, which describe where things are in the Claude app.
- Bonus Vault still holds four videos from the original course. Intended future use: tips and go-deeper material.
- README should get a custom domain when one exists.
