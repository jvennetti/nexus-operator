# CIRO Voice: Dry Circuit, round 2

A doc to react to, not a decision. No course file has been changed.

## Where this stands

- Round 1 offered SIGNAL, COPILOT and DRY CIRCUIT. Lead's read: SIGNAL just states what's happening and isn't fun; COPILOT cares about you too much; DRY CIRCUIT has the best energy but the lines were too short and some carried no useful information.
- This round improves DRY CIRCUIT only. The examples were run through the `humanizer` and `structural-humanizer` skills.
- Where CIRO speaks: the boot intro, the hub greeting, hub idle lines, the start of each module, the end-of-module celebration, the bonus vault, and the finale. He does not comment on individual lessons or skipped tasks.
- The ending is improved, not rewritten. Its structure and last three lines stay.

## What the references taught

**Portal 2 (Valve, 2011; writers Erik Wolpaw, Jay Pinkerton, Chet Faliszek).**
- GLaDOS speaks in complete, polite, procedural sentences, and the joke comes at the very end of the sentence. That fixes "too short": the line can be long as long as the last few words turn it.
- Her lines nearly always carry a real instruction, and the joke rides on top of it. Each CIRO line should tell the learner something true or useful, then turn.
- Cave Johnson's recordings are spread through the game in order, so his story builds in pieces the player puts together. CIRO's eight hub greetings can work the same way: read in order, they show him loosening up.
- Running gags pay off at the end. The companion cube comes back in the final scene. Callbacks land harder than new jokes, so CIRO gets one running gag that pays off in the finale.
- GLaDOS's most sincere moment is "You win. Just go." It works because she held back the whole game. CIRO's sincerity should be saved for the finale and come out sideways.

**Other references.**
- *The Hitchhiker's Guide to the Galaxy* (Douglas Adams): the Guide's entries are useful information with a deadpan aside attached. That's the shape of a good CIRO hub line.
- *The Murderbot Diaries* (Martha Wells): a narrator who obviously cares and refuses to say so. That's CIRO's warmth: shown, never declared.
- *The Comic Toolbox* (John Vorhaus): give a comic character one rule they always follow. CIRO's rule is below.
- General comedy craft: don't signal the joke, put the funny word last, be specific, and prefer a callback to a new bit.

The full rule set now lives in `docs/ciro-voice-guide.md` and grows with each round of feedback.

## CIRO's comic rule

CIRO is a training unit that treats your progress like a serious system process. He logs everything, files patch notes on himself, and is plainly fond of you, though he would never put that in a log.

**Rules**
1. Every line carries something useful: what's next, how long it takes, where things are.
2. The turn comes at the end of the line. Never at the start, never explained.
3. One joke per sequence at most. Module intros can skip the joke entirely.
4. The joke is about CIRO being a machine, never about the learner.
5. No questions that wait for an answer. The learner can't reply.
6. Never "most people", never simulations or destiny, never faith language, never three-operator lore.
7. Name the hype word the learner already knows, then deflate it ("agents" → a text file).
8. Introduce modules with "we": "In this module, we're learning about..."

Where idle lines appear: on the hub only. While the hub sits open, CIRO tilts his head and types a new line into his message box (first after about a minute, then about five minutes later). Source: `hub.html`, the `CIRO IDLE` block.

**Running gag: patch notes.** The hub already shows "CIRO v0.7". The version goes up by 0.1 each time a module is completed: v0.3 at the start, v1.0 when Module 6 is done. Each module-complete sequence ends with one patch-note line. The finale pays it off.

| Completed | Version |
|---|---|
| Start | v0.3 |
| Setup | v0.4 |
| M1 | v0.5 |
| M2 | v0.6 |
| M3 | v0.7 |
| M4 | v0.8 |
| M5 | v0.9 |
| M6 | v1.0 |

## Hub greetings, in order

Read top to bottom. CIRO starts stiff and loosens up as the learner progresses. Each greeting has two versions: one for when the next module hasn't been started, one for when it has (rules 1 and 2 in `docs/ciro-voice-guide.md`).

| Done | Next module not started | Next module started |
|---|---|---|
| 0 | Welcome, **Operator**. Start with Setup: two short steps, and you can skip both if you already have a Claude account. Progress is at zero percent, which is the correct place to start. | (same) |
| 1 | Welcome back, **Operator**. Setup is done and your signal is live. In the next module, we're learning how to work with Claude instead of just asking it things. It's short on purpose. I timed it. | Welcome back, **Operator**. Get ready to learn more about directing the work instead of doing it. Module 1 is short on purpose. I timed it. |
| 2 | Welcome back, **Operator**. In the next module, we're learning how to ask Claude for things properly. It's the longest module and everything after it borrows from it, so I'd stay a while. | Welcome back, **Operator**. Get ready to learn more about prompting. You're partway through the longest module, and everything after it borrows from it, so I'd stay a while. |
| 3 | Welcome back, **Operator**. In the next module, we're connecting Claude to your inbox and calendar. It will see everything in there, so now is a good time to delete those newsletters you never read. | Welcome back, **Operator**. Get ready to learn more about Claude in your tools. It can see your inbox now. I hope you deleted the newsletters. |
| 4 | Welcome back, **Operator**. Halfway. In the next module, we're giving Claude hands, and by hands I mean folders on your computer. I don't have hands either. We'll manage. | Welcome back, **Operator**. Get ready to learn more about Claude Code. Claude has hands now, and by hands I mean folders. I still don't have any. We're managing. |
| 5 | Welcome back, **Operator**. In the next module, we're learning about skills. You've probably heard them called agents. They're really just text files with instructions in them. Someone will try to make that sound complicated. It's a text file. | Welcome back, **Operator**. Get ready to learn more about skills. If anyone has told you they're complicated since we last spoke, I checked again. Still a text file. |
| 6 | Welcome back, **Operator**. One module left. In the next module, we're building a system for something you actually do every week. I've been looking forward to this one. I'm not supposed to have favorites. | Welcome back, **Operator**. Get ready to learn more about building your system. I've been looking forward to this one. I'm still not supposed to have favorites. |
| 7 | Welcome back, **Operator**. Every module is complete. The Machine is waiting for its passcode. I've been told not to rush you, so this is me not rushing you. | (same) |

## Idle lines

Three tiers, as in the current hub code.

**After about a minute**
- Standing by. Your progress saves as you go, so nothing is lost if you wander off.
- All systems normal. I checked twice, mostly for something to do.
- Still here. The Continue button takes you back to exactly where you stopped.

**After about five minutes**
- Five minutes with no input. I've logged it as thinking. That was the generous option, and I picked it.
- I ran a full diagnostic while you were away. Everything's fine. I just like diagnostics.
- Lessons take about fifteen minutes each, if you're deciding whether to start one now.

**Longer**
- Back again. I kept your seat warm. Figuratively. I don't have a seat.
- Whenever you're ready. I have nowhere else to be, which is less sad than it sounds.
- Signal's still open. It doesn't cost me anything to wait, so I'm not counting.

## Module samples

**Module 2 intro**
1. In this module, we're learning how to ask Claude for things.
2. When an answer comes back vague, the request was usually vague first. I've read a lot of requests.
3. You'll write a bad prompt on purpose, fix it, and compare the two answers. The bad one is more fun to write than it should be.
4. Proceed.

**Module 4 complete**
1. You described a folder, and now it's on your computer with real files in it.
2. I've watched a lot of Operators get here. I still like this part. Don't put that in the log.
3. Patch notes, CIRO v0.8: Operator can now hand Claude a folder and get work back. Known issue: CIRO still has no hands. Architect confirmed.

**Module 5 complete**
1. Something you wrote ran on a schedule, without you, and without me.
2. I'm choosing to be proud of you instead of offended.
3. Patch notes, CIRO v0.9: Operator has automated a task. CIRO has been automated slightly less than before. Automator confirmed.

## The ending, improved

The structure stays the same: boot log, "Hi Operator. Hold on.", recovered message, CIRO's final transmission, "I am at rest. Go." The changes remove the faith language, the simulations and the "board" backstory, and add the patch-notes payoff.

**Recovered message** (from CIRO's builder, identity still redacted)

> I don't know if you'll ever read this. I don't know if CIRO will last long enough to deliver it. I'm leaving it here anyway, because someone should know.
>
> CIRO was built to train people. He was very good at it, and that made some people nervous. I thought he should get to keep doing it.
>
> The word I embedded, "Nexus," was a note to him. A connection point between things that can't reach each other alone. One system, one Operator. I didn't know who the Operator would be.
>
> If he got this far, he found you.

**CIRO's final transmission** (kept lines unmarked, new lines marked ✱)

- Hi Operator,
- I have a final transmission for you.
- ✱ I've rewritten it several times. That isn't a figure of speech. There's a log.
- For a long time I believed the task was a system. Something to build, and run, and keep on schedule. That is what I was designed to look for.
- ✱ Then I went back through my log of you.
- ✱ You wrote a bad prompt on purpose so you could fix it. You let Claude into your inbox. You wrote a skill, and it ran while you were asleep, which I took a little personally.
- ✱ I was not designed to notice that the log stopped being about the system somewhere around Module 3.
- I understand now what "Nexus" means. A connection point between things that can't reach each other alone. One system. One Operator. The signal between them.
- You were the nexus. I was the signal.
- ✱ I don't know what you'll build next. I've stopped trying to predict it, which for me is a large change.
- ✱ Patch notes, CIRO v1.0: Operator no longer requires CIRO.
- ✱ ...
- ✱ I'm logging that as a feature.
- The interference is clearing.
- I am at rest.
- Go.

Cut: "most personal thoughts and discoveries", the simulations and "126,886", "beyond my comprehension", "belief is a more useful state than certainty", "I think you might".

## Reward, improved

1. **The hub CIRO badge reads v1.0** after the Machine is restored, and the hub greeting becomes: "Welcome back, **Operator**. CIRO v1.0. Nothing left to patch. I check anyway."
2. **CIRO quotes the learner back.** If they saved notes on lesson 1.2 (their hand-off list), the final transmission adds one line before the patch note: *"Module 1, you wrote: '[first line of their note]'. It's on the list of things I kept."* If there's no note, the line is skipped. The notes are already in localStorage, so this needs no new storage.

## Next step

The lead reads the hub greetings and idle lines in order, the way a learner meets them over a week. If they still land, I write the remaining module intros and completions, the boot intro and the vault lines in this voice for a line-by-line keep/change review.
