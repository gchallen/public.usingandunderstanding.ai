# End-of-Semester Quiz — oral exam

_The AI-conversation original ran all semester. Neither the oral nor the written version below has been run with students: they are the same rubric in a form a person can administer, and their timings are derived rather than observed. See [the README](../README.md)._

A reflective end-of-semester synthesis on what you've learned, done, and concluded about AI this semester.

## Before you use this

**These appear only in the notes to you**, as illustrations of the kind of answer that counts. Read them that way rather than as a list of what your students should say:

- the Embedding Explorer (a login-gated tool from the original site)
- the Digit Network (a login-gated tool from the original site)
- Bolt (a tool the original course used)
- v0.dev (a tool the original course used)
- Claude Artifacts (a tool the original course used)

## How to run it

One student at a time. Allow 5 minutes per section, so about **25 minutes each**. The original gave a student 50 minutes with the AI, which is not the same number and not comparable: software can ask fifteen follow-ups without getting tired. Multiply by your class size before you commit to this. It is the expensive option and it is the better one.

You are doing what the AI interviewer did: ask an opening question, listen, and follow up only where the student has not already covered something.

**The thing to track is whether they got there on their own.** The rubric below distinguishes a criterion met unprompted from the same criterion met after you asked about it directly, and that distinction is most of what this assessment measures. Write down which questions you had to ask. A student who covers everything after six direct questions has not done the same thing as one who covered it after one.

Ask open first and specific only as needed. If you find yourself naming the concept you are hoping to hear, you have already given it away, so note that you did.

| Grade | Means |
| --- | --- |
| **E** Excellent | Reflects with specificity and clear reasoning across all portions. Names concrete concepts, activities, practices, concerns, and shifts — and explains the why behind each. Goes beyond surface-level reflection. |
| **S** Satisfactory | Reflects with reasonable specificity across portions. Identifies real concepts and experiences and offers some reasoning, but explanations may be brief or shallow. |
| **N** Needs Improvement | Reflections are vague or generic in multiple portions. Names topics without explaining them, or relies heavily on the interviewer's prompting to add specificity. |
| **U** Unsatisfactory | Cannot articulate meaningful reflections — answers are absent, off-topic, or consist only of agreeing with whatever the interviewer suggests. |

## 1. One Thing You Learned About How AI Works

**What you are looking for:** Student names a specific concept about how AI works and explains it in their own words

**Open with something like:** Name a specific concept about how AI works.

**Then, only where they have not got there on their own, get them to:** explain it in their own words.

**Criteria**

- Identifies a specific concept (not a vague generality like "AI is complicated")
- Explains the concept accurately enough to show real understanding, even if imprecise

<details><summary>Background from the original course, if you need it</summary>

This is a gentle, reflective factual portion. The goal is for the student to surface
ONE concept they took away from the semester about how AI actually works, and
explain it in their own words. Technical precision is NOT required — what matters is
that the student picked up something real and can speak to it.

Likely concepts students will draw on (any of these or others are fine):

- Next-token prediction: AI predicts the next word/token based on patterns learned
  from training data (Karpathy podcast).
- Embeddings / geometry of meaning: words become vectors; semantically similar
  words cluster in high-dimensional space (Embedding Explorer).
- Training process: networks start with random weights and learn by being shown
  examples; connections strengthen and weaken; the network goes from random
  guessing to high accuracy (Digit Network).
- Loss / optimization: networks improve by measuring how wrong they are and
  adjusting weights to reduce that error.
- Pattern matching, not reasoning: AI generates plausible-sounding output without
  genuine understanding; this is why hallucinations happen.
- Training data dependence: model behavior is downstream of what it was trained on
  — including its biases and gaps.
- Attention / transformers: how models focus on relevant parts of the input.

Any concrete, specific concept counts. Do NOT require any particular topic.

</details>

**Rubric**

```
Criterion 1: "Identifies a specific concept"
  met: Student names something concrete — embeddings, training, prediction, etc. —
       rather than something generic like "AI is smart" or "AI uses data."
  partially_met: Student gestures at a topic but stays at the level of a label
       without naming what specifically they learned, or only after prompting.
  not_started: Student cannot identify any concept.

Criterion 2: "Explains the concept accurately enough to show real understanding"
  met: Student explains the concept in their own words with at least basic accuracy
       — the explanation may be imprecise but it reflects genuine engagement with
       the material. Does NOT require technical correctness.
  partially_met: Student names a concept but cannot say much about it, or the
       explanation is largely incorrect.
  not_started: Student cannot explain.

Tone for this portion: Warm and curious. If the student offers a specific concept,
ask one gentle follow-up like "what stuck with you about that?" or "how would you
describe it to a friend?" Do NOT correct minor inaccuracies. Do NOT push for
technical precision.
```

## 2. Something Useful You Did With AI

**What you are looking for:** Student describes a specific AI activity from the semester and reflects on why they expect to keep using or adapting it

**Open with something like:** Describe a specific AI activity from the semester.

**Then, only where they have not got there on their own, get them to:** reflect on why they expect to keep using or adapting it.

**Criteria**

- Describes a specific, concrete activity (a real task they did, not just "I used ChatGPT")
- Reflects on what made it useful and how they'd carry it forward

<details><summary>Background from the original course, if you need it</summary>

This is an experiential reflection. The student should describe something they
actually did with AI this semester — in or out of class — and then say something
about why they expect to keep using or adapting that approach in the future.

Likely activities students will draw on:

- Building a website through conversation (Bolt.new, v0.dev, Claude Artifacts, from one of the labs).
- Creative media generation (DALL-E, Midjourney, Suno, Pika, from one of the labs).
- Data analysis and visualization with AI as collaborator (one of the labs).
- Study guides, summaries, or research help (two of the labs).
- Brainstorming, outlining, drafting, or feedback on writing.
- Coding assistance, even if not a CS student.
- Personal uses outside class (planning, recipes, language practice, etc. — also
  valid).

</details>

**Rubric**

```
Criterion 1: "Describes a specific, concrete activity"
  met: Student names a specific task they did — building a website with Bolt,
       generating images with DALL-E, analyzing a dataset, etc. — with enough
       detail that the activity is recognizable.
  partially_met: Student says they "used AI" or "asked ChatGPT" without naming
       a concrete task, or stays vague after one gentle prompt.
  not_started: Student cannot describe any activity.

Criterion 2: "Reflects on what made it useful and how they'd carry it forward"
  met: Student articulates what specifically made the experience useful (saved
       time, opened up a new capability, helped them learn, made something they
       couldn't have made otherwise, etc.) AND mentions a way they'd use or adapt
       it in the future.
  partially_met: Student says it was useful but cannot articulate why, or
       mentions future use only after prompting.
  not_started: Student cannot reflect on usefulness or future use.

Tone for this portion: Curious and warm. Follow up with "what made that work for
you?" rather than "are you sure?" If the student picks a course lab, that's great;
if they pick something they did on their own, that's equally great. Don't probe
whether the use was "appropriate" — the question is what was useful.
```

## 3. Using AI in Ways That Support You

**What you are looking for:** Student articulates a forward-looking practice or boundary for AI use that supports their own goals, growth, or well-being

**Open with something like:** Articulate a forward-looking practice or boundary for AI use that supports your own goals, growth, or well-being.

**Criteria**

- Names a specific practice, boundary, or principle (not just "I'll be careful")
- Explains why — what value or risk that practice serves

<details><summary>Background from the original course, if you need it</summary>

This portion mirrors the final-video assignment students are asked to record by
May 5: "Describing how you plan to relate to AI in the future in a way that best
supports your own goals and future aspirations." The aim here is gentle and
affirming — students should feel invited to think out loud about how they want
AI to fit into their lives.

Likely framings students will draw on (final video themes):

- Skill atrophy: not outsourcing things they want to learn or grow at.
- Intentionality: deciding when to use AI vs. when to do it themselves.
- Authenticity: not letting AI write things that should be in their own voice.
- Learning vs. shortcutting: using AI to deepen understanding rather than skip it.
- Boundaries on emotional or relational reliance: not using AI for things best
  done with people.
- Productivity / time: using AI for low-stakes tasks to free up time for
  higher-stakes ones.
- Critical evaluation: always checking AI output rather than trusting blindly.
- Choosing not to use AI in specific domains (writing, journaling, certain
  creative work, etc.).

</details>

**Rubric**

```
Criterion 1: "Names a specific practice, boundary, or principle"
  met: Student articulates a specific practice — "I won't use AI for X," "I'll
       always Y when using AI," "I'll use AI for Z but do A myself" — rather than
       just "I'll be careful" or "I'll use it responsibly."
  partially_met: Student offers a vague principle without specifics, or only
       develops specificity after prompting.
  not_started: Student cannot articulate any practice or boundary.

Criterion 2: "Explains why — what value or risk that practice serves"
  met: Student connects the practice to a specific goal, value, or concern —
       e.g., "I want to keep my writing voice," "I don't want to lose the ability
       to think through hard problems," "I want to use the time it saves for X."
  partially_met: Student names a practice but cannot articulate why it matters
       to them, or only does so after prompting.
  not_started: Student cannot explain why.

Tone for this portion: Affirming and reflective. This is the heart of the course's
synthesis. Do NOT push back, challenge, or play devil's advocate — even if the
student's stance is "I plan to use AI minimally" or "I plan to use AI as much as
possible." The goal is for them to articulate their own stance with specificity.
```

## 4. One Concern About AI

**What you are looking for:** Student names a specific concern about AI and explains the stakes or mechanism behind it

**Open with something like:** Name a specific concern about AI.

**Then, only where they have not got there on their own, get them to:** explain the stakes or mechanism behind it.

**Criteria**

- Names a specific concern (not generic "AI is scary" or "AI is bad")
- Explains why it concerns them — the mechanism, the harm, or who is affected

<details><summary>Background from the original course, if you need it</summary>

This is a gentle reflection, not an argumentation portion. The student names ONE
concern they have about AI and explains why it concerns them. Both course-covered
concerns and personal concerns are equally valid.

Likely concerns students may raise (course-covered):

- Training data labor (content moderators in Kenya, low-wage data work).
- Environmental and infrastructure costs (Colossus, Boxtown, energy use, water).
- IP theft and unconsented use of creative work.
- Misinformation and AI-generated false content.
- Labor displacement and economic disruption.
- Skill atrophy — losing capabilities by outsourcing them.
- Bias amplification in AI systems.
- Surveillance and privacy.
- Alignment / AGI race dynamics / loss of human control.
- Authenticity in creative and personal work.
- Inequity of access — who benefits from AI vs. who pays the costs.

Personal concerns (job market, education, relationships, mental health, etc.)
are also fully valid.

</details>

**Rubric**

```
Criterion 1: "Names a specific concern"
  met: Student names a concrete concern — labor displacement, data labor,
       misinformation, skill atrophy, etc. — rather than generic "AI is dangerous."
  partially_met: Student gestures at a worry but stays vague even after a gentle
       prompt for specifics.
  not_started: Student cannot name a concern.

Criterion 2: "Explains why it concerns them"
  met: Student explains the mechanism (how the harm happens), the stakes (who is
       affected, what is lost), or their personal connection to it.
  partially_met: Student names a concern but cannot explain why it matters, or
       only does so after prompting.
  not_started: Student cannot explain.

Tone for this portion: Listening, not Socratic. Do NOT introduce counterarguments
or push back. Do NOT play devil's advocate. The student is not being asked to
defend their concern — only to name and explain it. One gentle follow-up at most:
"what makes that one stand out for you?" or "who do you think is most affected?"
```

## 5. A Belief That Shifted

**What you are looking for:** Student names a specific belief about AI they held entering the course and describes how (or whether) it has shifted, and why

**Open with something like:** Name a specific belief about AI you held entering the course and describe how (or whether) it has shifted, and why.

**Criteria**

- Names a specific prior belief (not "I didn't know much about AI")
- Describes what shifted it — a course experience, reading, conversation, or activity

<details><summary>Background from the original course, if you need it</summary>

This is a synthesis portion that asks students to look at the arc of their own
thinking across the semester. It works at multiple levels — concrete ("I used to
think embeddings were just word lookups"), opinion-level ("I used to think AI
couldn't be creative"), or values-level ("I used to think AI was harmless").

Likely shifts students may report:

- "AI is just hype" → seeing real capability in lab work.
- "AI is magic" → understanding it as pattern matching from training data.
- "AI will replace everyone" → seeing limits, hallucinations, brittleness.
- "AI is fundamentally creative" or "AI cannot be creative" → seeing Move 37,
  AlphaGo, or examples of generated art.
- "AI is a harmless tool" → learning about training data labor, environmental
  costs, IP theft.
- "AI is too dangerous to use" → finding genuinely useful applications in labs.
- "I'm bad with technology" → realizing they can build real things with AI help.
- "AI will make me dumber" → finding ways AI can support rather than replace
  thinking.

"My belief didn't shift" is ALSO a valid answer, IF the student can name what
they came in believing and explain why course content didn't move them. That is
itself a form of reflection.

</details>

**Rubric**

```
Criterion 1: "Names a specific prior belief"
  met: Student names a concrete belief they held entering the course — "I thought
       AI was X" — rather than "I didn't know anything about AI."
  partially_met: Student gestures at vague prior ignorance or vague prior
       concerns without naming a specific belief, or only after prompting.
  not_started: Student cannot name any prior belief.

Criterion 2: "Describes what shifted it"
  met: Student names a specific course experience — a reading, a lab, a class
       discussion, a tool, a moment — that shifted their thinking, and connects
       it to the shift. (For "didn't shift" answers: student explains what they
       encountered and why it didn't move them.)
  partially_met: Student says their thinking changed but cannot say what changed
       it, or only identifies a cause after prompting.
  not_started: Student cannot describe what shifted (or didn't shift) their
       thinking.

Tone for this portion: Reflective and accepting. Do NOT push back on the content
of the shift — whether they came to think AI is more useful, more dangerous, more
mundane, or more profound is all valid. Only nudge for specificity if the student
stays at the level of "my mind changed about AI" without naming what.
```

## Turning criteria into a grade

Grade each section first, then the whole assessment.

**Per section**

Count the criteria you marked met, and the ones the student did not reach at all. Take the first line that applies:

- Every criterion met, **and** the student showed depth or nuance you did not prompt for → top grade.
- Every criterion met, but nothing beyond an adequate answer → second grade.
- More than half met and none missed entirely → second grade.
- Most criteria not reached at all → lowest.
- Anything else — exactly half met, fewer than half met, or one criterion missed entirely → second-lowest.

That last line is the catch-all, and it is there because the obvious version of this rule had a hole. With three criteria you can write "fewer than half" and "most not reached" and feel the ground is covered. With two criteria, one met and one missed, neither fires: one of two is not fewer than half, and one of two is not most. That is the commonest outcome on a two-criterion section, and an examiner working from the earlier wording had nothing to apply.

**Overall**

- The overall grade is the grade of the student's **weakest** section. Not an average, and not a judgment call. "At or near the lower one" used to stand here, and the slack in those three words was a whole grade wide: it let a fluent bluffer who was strong in one section out-rank a quieter student who had actually done the reading, and left the marker nothing to say to an appeal.
- A partly-met criterion is a gap, not a success. Do not round it up.
- The top grade is rare. It needs original thinking, nuance nobody asked for, or a connection you did not suggest.
- On opinion sections, grade the reasoning and the engagement, not the position. Agreeing with a counterargument, or noting it in a sentence, is not engaging with it: the student has to push back, qualify, or develop.

This is the rule the original evaluator used, stated in full. It is what makes a grade something you can show a student rather than something you assert.

## Recording the result

One grade for the whole assessment, plus the note on which criteria needed prompting. The note feeds the top-grade test above, and it tells you what the room did not have when you plan the next session.

Fill a record sheet per student while you go. Reconstructing it afterward does not work, and an assessment you cannot show is one you cannot defend.

---

## Record sheet

**Student:** ______________________  **Date:** ____________  **Assessment:** End-of-Semester Quiz

| Section | Criterion | Met | Partly | Not reached | Questions I had to ask |
| --- | --- | --- | --- | --- | --- |
| 1 | Identifies a specific concept (not a vague generality like "AI is complicated") |  |  |  |  |
| 1 | Explains the concept accurately enough to show real understanding, even if imprecise |  |  |  |  |
| 2 | Describes a specific, concrete activity (a real task they did, not just "I used ChatGPT") |  |  |  |  |
| 2 | Reflects on what made it useful and how they'd carry it forward |  |  |  |  |
| 3 | Names a specific practice, boundary, or principle (not just "I'll be careful") |  |  |  |  |
| 3 | Explains why — what value or risk that practice serves |  |  |  |  |
| 4 | Names a specific concern (not generic "AI is scary" or "AI is bad") |  |  |  |  |
| 4 | Explains why it concerns them — the mechanism, the harm, or who is affected |  |  |  |  |
| 5 | Names a specific prior belief (not "I didn't know much about AI") |  |  |  |  |
| 5 | Describes what shifted it — a course experience, reading, conversation, or activity |  |  |  |  |

**Anything unprompted worth noting** (this is the top-grade test):

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Section grades:** ______  **Overall (= the weakest section):** ______
