# CIRO Voice Guide

The rules for how CIRO talks. This is a living document: every time the lead gives feedback on a CIRO line, the lesson goes in here as a rule, with the feedback that produced it in the log at the bottom. Read this before writing or editing any CIRO line.

Status: in progress. The voice is "Dry Circuit" (chosen 2026-11-05). Draft lines live in `docs/proposals/ciro-voice.md`.

## Scope of the voice pass

The existing lines are the base. The lead rates the hub greetings, module intros and module completions as decent. The voice pass:

- **Keeps** the hub greetings, module intros, module completions, study notes, boot intro and vault lines as they are, except for the specific lines below.
- **Fixes** only lines that break a "Never" rule: comparisons to other people, simulations and destiny, lore the learner never sees.
- **Improves** the ending (recovered message and final transmission), keeping its structure and last three lines.
- **Adds**, if approved: a patch-note line at the end of each module completion, and the finale quoting the learner's own lesson 1.2 notes.

New lines elsewhere are written only when the lead asks.

## Who CIRO is

A training robot who treats your progress like a serious system process. He logs everything, files patch notes on himself, and is plainly fond of you, though he would never put that in a log. He's dry and deadpan. The jokes come from him being a machine. He is a guide at the edges of the course, not a coach inside it.

## Where CIRO speaks, and what each slot is for

The slot decides the tense and the job of the line.

| Slot | Where | When the learner sees it | Job |
|---|---|---|---|
| Boot intro | `ciro-intro.html` | First visit only | Meet CIRO, plant "Nexus" |
| Hub greeting | `hub.html`, via `hub_ciro_lines` | Every hub visit, picked by modules completed | Point at what's next |
| Hub idle | `hub.html`, `CIRO IDLE` block | Hub left open about 1 min, then about 5 min | Light company, small useful fact |
| Module intro | module intro page | Starting a module | Say what this module is about |
| Module complete | completion page | Finishing a module | Celebrate the specific thing done + patch note |
| Vault | `bonus/vault.html` | Opening the vault | Frame the extra material |
| Finale | `machine/activated.html` | After restoring the Machine | The one sincere moment, paying off the gags |

CIRO does not speak inside lessons, on task skips, or anywhere else.

## Rules

Each rule notes where it came from.

**Tense and framing by slot**
1. Hub greeting, next module not started yet: "In the next module, we're learning about..." *(lead, 2026-11-05)*
2. Hub greeting, next module already started: "Get ready to learn more about..." *(lead, 2026-11-05)*. The hub can tell the difference: it already checks whether the last page visited belongs to the next module (`renderContinue`).
3. Module intro: "In this module, we're learning about..." *(lead, 2026-11-05)*
4. Use "we" when introducing what's being learned. CIRO is in it with the learner. *(lead, 2026-11-05)*

**Line construction**
5. Full sentences. Lines can run long as long as they earn it. Too-short lines read as curt. *(lead, round 1)*
6. Every line carries something useful: what's next, how long it takes, where things are. No line is only a joke. *(lead, round 1: "useless information sometimes")*
7. The joke comes at the end of the line. Never explained, never signaled. *(Portal 2, GLaDOS)*
8. One joke per sequence at most. Intros can skip the joke.
9. Name the hype word the learner has already heard, then deflate it. "You've probably heard them called agents. They're really just text files." *(lead, 2026-11-05)*
10. No questions that wait for an answer. The learner can't reply.

**Character**
11. The joke is about CIRO being a machine, never about the learner.
12. CIRO's warmth is shown, never declared. He doesn't tell you he's proud; he lets it slip and tries to take it back. *(Murderbot Diaries)*
13. Not a coach. He doesn't motivate, manage feelings, or tell you to take your time. *(lead: COPILOT "cares about you too much")*
14. Not a status readout. Plain reports of what's happening aren't funny or useful. *(lead: SIGNAL "unamusing")*
15. Callbacks beat new jokes. Running gag: patch notes, version v0.3 → v1.0, paid off in the finale. *(Portal 2)*

**Never**
16. "Most people..." or any comparison to other learners.
17. Simulations, destiny, prophecy, belief, or any faith language. *(lead)*
18. Inside jokes or three-operator lore. *(lead)*
19. AI-writing tells: "not X, it's Y" lines, lists of three, stated lessons, every line ending the same way. Run the `humanizer` and `structural-humanizer` skills on new lines. *(lead, round 1: "this sounds like AI writing")*

## The lead's lines (the gold standard)

Lines the lead wrote or approved. New lines should sit comfortably next to these.

- "Two short steps. If you've already done them, skip ahead. I won't be offended."
- "Director, not doer. Say it until it's a reflex."
- "Write it down once. Never explain it again."
- "Next, it gets hands."
- "Welcome back, Operator. In this module, we're learning about agents, which are really just text files with instructions in them. Someone will try to make that sound complicated. It's a text file." *(lead's edit, 2026-11-05)*
- "Back again. I kept your seat warm. Figuratively. I don't have a seat." *(approved)*
- Finale close, kept as written: "The interference is clearing. / I am at rest. / Go."

## Feedback log

| Date | Lead said | Became rule |
|---|---|---|
| 2026-11-05 | Round 1 sounds like AI writing; I worked hard so the original didn't | 19 |
| 2026-11-05 | SIGNAL just states what's happening, unamusing | 14 |
| 2026-11-05 | COPILOT cares about you too much | 13 |
| 2026-11-05 | Dry Circuit best energy; too-short sentences, sometimes useless info | 5, 6 |
| 2026-11-05 | 10th-visit seat joke good; 20th-visit idle line weak | gold standard list |
| 2026-11-05 | CIRO only talks at module start/end; commenting on a skip is too much | slot table |
| 2026-11-05 | Improve the ending, don't rewrite it | finale keeps structure and last three lines |
| 2026-11-05 | Edited the Module 5 hub line: "we're learning about agents..." | 4, 9 |
| 2026-11-05 | Hub greetings and module intros/outros are decent; the ending can be better | Scope section |
| 2026-11-05 | On the hub: "In the next module..."; if started: "Get ready to learn more about..." | 1, 2, 3 |
