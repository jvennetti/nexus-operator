# NEXUS Operator

A gamified, self-paced course that walks someone from "I have never opened Claude" to running their own small system with Claude Code, skills, connectors and scheduled tasks.

Six modules plus a short setup. Every lesson ends with something you actually do in Claude. Every module ends with a challenge on your own work. Finish the course and the Machine gives you something.

**Built around three rules:**

1. Watching is not learning. Every lesson has a task, and the next lesson stays locked until you've done it.
2. Videos are optional and few. Only the ones worth the time, under twenty minutes, official sources for anything that will change.
3. The content lives in markdown, the pages are generated. Refreshing the course when Claude changes is an edit and a build, not a rewrite.

## Run it locally

```bash
python3 build.py
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Edit the course

- Lessons: `content/lessons/`
- Challenges: `content/challenges/`
- Structure, badges, CIRO dialogue: `content/course.json`
- The spec and reasoning: `docs/curriculum.md`

Run `python3 build.py` after any change. See `CLAUDE.md` for conventions.
