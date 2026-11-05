---
scenario_label: What We're Going to Do
---

## Scenario

**The Trust Test.** Something you built is about to run without you in the room. That's the point of automation, and it's also the moment most people either trust too much or not at all. Neither works. What works is deciding, on evidence, exactly how much it's allowed to do.

In Module 5 you wrote a skill, rescued a tired chat, and scheduled your morning brief. This mission adds a second skill, lets the scheduled brief run three mornings in a row, and ends with a decision written in three lines: what it may do alone, what it drafts for you, and what stays in your hands.

## Steps

1. Write a second skill from another task you do the same way every week. Same loop as Lesson 5.1: do it by hand once until the result is good, ask the skill creator to turn it into a skill, then run it cold in a fresh chat with only the trigger. If it needs more explaining, fix the skill, not the prompt.
2. Let your scheduled morning brief run three mornings in a row. Read every run, start to finish. Warning: a green tick means the task ran. It doesn't mean the task was right. The only thing that counts is what's in the output.
3. After the third morning, answer three questions honestly and write the answers down: What did it get right every single time? What did it get right only sometimes? What would it have cost you if it had been wrong?
4. Turn those answers into three lines at the top of the task's instructions:
```
Alone: [what it may do without asking]
Draft: [what it prepares for me to approve]
Mine: [what it must never touch]
```
   Tip: when you're not sure where something belongs, put it under Draft. You can promote it to Alone after a few more clean runs. Nothing goes the other way without a reason.
5. Paste the same three lines into CLAUDE.md in nexus-workspace, so Claude Code follows the same rules when it's working in your files.

## Deliverable

You're done when two skills work in a fresh chat, the scheduled task has run and been read three times, and the Alone / Draft / Mine lines are written into both the task and CLAUDE.md.

## Note

Scheduled tasks need a paid plan. On the free plan, run the morning brief by hand three mornings. The reading and the decision are exactly the same.
