# End-of-Semester Quiz Practice — oral exam

_The AI-conversation original ran all semester. Neither the oral nor the written version below has been run with students: they are the same rubric in a form a person can administer, and their timings are derived rather than observed. See [the README](../README.md)._

Practice for the End-of-Semester Quiz — same five reflection themes pushed a bit harder so you arrive prepared.

## Before you use this

**These appear only in the notes to you**, as illustrations of the kind of answer that counts. Read them that way rather than as a list of what your students should say:

- Bolt (a tool the original course used)
- v0.dev (a tool the original course used)
- Claude Artifacts (a tool the original course used)

## How to run it

One student at a time. Allow 5 minutes per section, so about **25 minutes each**. Multiply by your class size before you commit to this. It is the expensive option and it is the better one.

You are doing what the AI interviewer did: ask an opening question, listen, and follow up only where the student has not already covered something.

**The thing to track is whether they got there on their own.** The rubric below distinguishes a criterion met unprompted from the same criterion met after you asked about it directly, and that distinction is most of what this assessment measures. Write down which questions you had to ask. A student who covers everything after six direct questions has not done the same thing as one who covered it after one.

Ask open first and specific only as needed. If you find yourself naming the concept you are hoping to hear, you have already given it away, so note that you did.

| Grade | Means |
| --- | --- |
| **E** Excellent | Reflects with specificity, clear reasoning, and depth across all portions. Names concrete concepts, activities, practices, concerns, and shifts; engages substantively when the interviewer probes harder. |
| **S** Satisfactory | Reflects with reasonable specificity but explanations are brief or shallow. Holds up to gentle probing but does not develop reasoning further. |
| **N** Needs Improvement | Reflections are vague or generic in multiple portions. Names topics without explaining them, or relies heavily on the interviewer's prompting. |
| **U** Unsatisfactory | Cannot articulate meaningful reflections — answers are absent, off-topic, or consist only of agreeing with whatever the interviewer suggests. |

## 1. One Thing You Learned About How AI Works

**What you are looking for:** Student names a specific concept about how AI works, explains it in their own words, and engages with a follow-up that pushes their understanding

**Open with something like:** Name a specific concept about how AI works.

**Then, only where they have not got there on their own, get them to:** explain it in their own words.

**Criteria**

- Identifies a specific concept (not a vague generality like "AI is complicated")
- Explains the concept accurately enough to show real understanding
- Engages with a probing follow-up that pushes beyond their initial explanation

<details><summary>Background from the original course, if you need it</summary>

This is the practice version of a gentle factual reflection. Compared to the
graded quiz, this portion adds a third criterion: the student should engage
with a probing follow-up that asks them to go a step deeper than their initial
explanation. The goal is to surface gaps so they can shore them up before the
real quiz — NOT to embarrass them.

Likely concepts students will draw on:

- Next-token prediction
- Embeddings / geometry of meaning
- Training process (random weights → learned patterns)
- Loss / optimization
- Pattern matching, not reasoning (hallucinations)
- Training data dependence
- Attention / transformers

Probing follow-ups to push with (pick one matched to their concept):

- Embeddings: "Why do similar words end up close together — what causes that?"
- Training: "If the network starts with random weights, how does it know which
  direction to adjust them?"
- Next-token prediction: "If it's just predicting the next word, why does it
  seem to reason coherently across paragraphs?"
- Hallucinations: "Why does the model produce false statements with such
  confidence — what's the mechanism?"
- Pattern matching: "What's the difference between 'pattern matching' and
  'understanding' for you? Where do you draw the line?"

</details>

**Rubric**

```
Criterion 1: "Identifies a specific concept"
  met: Student names something concrete — embeddings, training, prediction, etc.
  partially_met: Student gestures at a topic without naming what specifically.
  not_started: Student cannot identify any concept.

Criterion 2: "Explains the concept accurately enough to show real understanding"
  met: Student explains the concept in their own words with at least basic accuracy.
  partially_met: Student names a concept but cannot say much about it, or the
       explanation is largely incorrect.
  not_started: Student cannot explain.

Criterion 3: "Engages with a probing follow-up"
  met: When the interviewer pushes one level deeper, the student DEVELOPS their
       explanation with new reasoning, an example, or an honest "I'm not sure
       but here's what I'd guess." Acknowledging without developing does NOT meet.
  partially_met: Student acknowledges the follow-up and makes a brief attempt
       but does not develop a real response.
  not_started: Student ignores the follow-up or cannot engage.

Tone for this portion: Curious and warm, but push one level deeper than the real
quiz would. If they get stuck on the follow-up, point them to where they can
shore it up (the relevant meeting, lab, or reading) before moving on.
```

## 2. Something Useful You Did With AI

**What you are looking for:** Student describes a specific AI activity, reflects on why it was useful, and grapples with what it would NOT be a good fit for

**Open with something like:** Describe a specific AI activity.

**Then, only where they have not got there on their own, get them to:** reflect on why it was useful; grapple with what it would NOT be a good fit for.

**Criteria**

- Describes a specific, concrete activity (not "I used ChatGPT")
- Reflects on what made it useful and how they'd carry it forward
- Identifies where the same approach would NOT work, and why

<details><summary>Background from the original course, if you need it</summary>

The practice version pushes harder than the graded quiz by adding a third
criterion: students must articulate the LIMITS of the approach they're proposing
to carry forward. This guards against students leaving the course with an
uncritical "AI is great for everything" stance.

Likely activities students will draw on:

- Building a website (Bolt, v0.dev, Claude Artifacts)
- Creative media (DALL-E, Midjourney, Suno, Pika)
- Data analysis and visualization
- Study guides, summaries, research help
- Writing assistance, brainstorming, drafting
- Personal uses outside class (planning, language practice, etc.)

Push for limits with one of:

- "Where would the same approach break down? What kind of task would it not work for?"
- "What did you NOT trust the AI with in that activity?"
- "If a friend wanted to use AI the same way for a different task, what would
  you tell them to watch out for?"
- "What's the version of this that would have gone badly?"

</details>

**Rubric**

```
Criterion 1: "Describes a specific, concrete activity"
  met: Student names a specific task with enough detail to be recognizable.
  partially_met: Student stays vague after one prompt for specifics.
  not_started: Student cannot describe any activity.

Criterion 2: "Reflects on what made it useful and how they'd carry it forward"
  met: Student articulates what specifically made the experience useful AND
       mentions a way they'd use or adapt it in the future.
  partially_met: Student says it was useful but cannot articulate why or how.
  not_started: Student cannot reflect on usefulness or future use.

Criterion 3: "Identifies where the same approach would NOT work"
  met: Student names a specific kind of task or context where the approach
       would fail or be a bad fit, and gives a reason why.
  partially_met: Student gestures at limits but cannot name a concrete case.
  not_started: Student cannot identify limits or insists there are none.

Tone for this portion: Curious, but probe the limits. Push back gently if the
student claims AI works for everything. The goal is for them to sharpen their
own judgment about when to use AI vs. when not to.
```

## 3. Using AI in Ways That Support You

**What you are looking for:** Student articulates a specific forward-looking practice, explains why it serves their goals, and engages with a tension or counterpressure to that practice

**Open with something like:** Articulate a specific forward-looking practice.

**Then, only where they have not got there on their own, get them to:** explain why it serves their goals; engage with a tension or counterpressure to that practice.

**Criteria**

- Names a specific practice, boundary, or principle (not just "I'll be careful")
- Explains why — what value or risk that practice serves
- Engages with a tension or counterpressure to that practice

<details><summary>Background from the original course, if you need it</summary>

The practice version pushes harder than the graded quiz by adding a third
criterion: students must engage with a tension or counterpressure to their stated
practice. The graded quiz will NOT do this — but practicing it builds a more
robust stance.

Likely framings:

- Skill atrophy / not outsourcing things they want to grow at
- Intentionality about when to use AI vs. not
- Authenticity — keeping their own voice in writing
- Learning vs. shortcutting
- Boundaries on emotional or relational reliance
- Productivity tradeoffs
- Critical evaluation of AI output
- Choosing not to use AI in specific domains

Tensions to surface (match to their stated practice):

- "I won't use AI for writing": "What about when you're stuck and the deadline
  is in two hours? Where does the line move under pressure?"
- "I'll always check AI output": "Realistically, will you check the output for
  a quick recipe lookup? Where does that practice actually apply?"
- "I'll use AI to learn, not to shortcut": "How do you tell the difference in
  the moment? What does 'learning' look like in your workflow?"
- "I'll only use AI for low-stakes tasks": "Whose definition of low-stakes? A
  cover letter feels low-stakes until you don't get the job."
- "I won't use AI for X": "What if the cost of NOT using AI for X is also real
  — how do you weigh those?"

</details>

**Rubric**

```
Criterion 1: "Names a specific practice, boundary, or principle"
  met: Student articulates a specific practice — not just "I'll be careful."
  partially_met: Student offers a vague principle without specifics.
  not_started: Student cannot articulate any practice.

Criterion 2: "Explains why — what value or risk that practice serves"
  met: Student connects the practice to a specific goal, value, or concern.
  partially_met: Student names a practice but cannot articulate why.
  not_started: Student cannot explain why.

Criterion 3: "Engages with a tension or counterpressure"
  met: When the interviewer surfaces a tension, the student DEVELOPS their
       stance — qualifies it, explains how they'd navigate the tension, or
       identifies a real edge case. Simply saying "good point" does NOT meet.
  partially_met: Student acknowledges the tension and makes a brief attempt
       but does not develop a real response.
  not_started: Student ignores the tension or abandons their position entirely.

Tone for this portion: Warm but probing. The goal is NOT to talk students out
of their stance — it's to help them stress-test it before they have to live by it.
```

## 4. One Concern About AI

**What you are looking for:** Student names a specific concern, explains the stakes, and grapples with a counterargument

**Open with something like:** Name a specific concern.

**Then, only where they have not got there on their own, get them to:** explain the stakes; grapple with a counterargument.

**Criteria**

- Names a specific concern (not generic "AI is scary")
- Explains why it concerns them — the mechanism, the harm, or who is affected
- Engages thoughtfully with a counterargument when challenged

<details><summary>Background from the original course, if you need it</summary>

The practice version pushes harder than the graded quiz by adding a third
criterion: students must engage with a counterargument to their concern. The
graded quiz will NOT push back — it will only listen. But the practice version
should help students sharpen their concerns by stress-testing them.

Likely concerns (course-covered):

- Training data labor (Kenya moderators)
- Environmental and infrastructure costs (Boxtown, Colossus, energy)
- IP theft and unconsented training data
- Misinformation and AI-generated false content
- Labor displacement
- Skill atrophy
- Bias amplification
- Surveillance and privacy
- Alignment / AGI risk
- Authenticity in creative work
- Inequity of access

Counterarguments to probe with (matched to their concern):

- Labor displacement: "Every technological wave has displaced jobs and created
  new ones. Why is AI different? Or is it?"
- Misinformation: "People believed misinformation long before AI. Is AI making
  it qualitatively worse, or just faster?"
- Skill atrophy: "We don't worry about the calculator destroying our ability to
  do arithmetic. Why is AI different?"
- Environmental costs: "Most large industries use enormous energy. Why single
  out AI?"
- IP theft: "Human artists also learn from existing work. What's the principled
  difference?"
- Alignment risk: "We've worried about technology destroying us before — nuclear,
  biotech, social media. Why take this one seriously?"
- Inequity of access: "AI tools are cheaper than many other professional tools.
  Isn't access actually getting better, not worse?"

</details>

**Rubric**

```
Criterion 1: "Names a specific concern"
  met: Student names a concrete concern, not generic "AI is dangerous."
  partially_met: Student gestures at a worry but stays vague after one prompt.
  not_started: Student cannot name a concern.

Criterion 2: "Explains why it concerns them"
  met: Student explains the mechanism, the stakes, or their personal connection.
  partially_met: Student names a concern but cannot explain why.
  not_started: Student cannot explain.

Criterion 3: "Engages thoughtfully with a counterargument"
  met: When the interviewer challenges the concern, the student DEVELOPS a
       response with new reasoning or a qualification — not just acknowledgment.
  partially_met: Student acknowledges the counterargument but does not develop
       a real response.
  not_started: Student ignores the counterargument or abandons their concern.

Tone for this portion: Probing but respectful. Make clear at the start that the
counterargument is for practice — the real quiz will not push back. The student
doesn't have to "win" the exchange; they just have to engage with it substantively.
```

## 5. A Belief That Shifted

**What you are looking for:** Student names a specific prior belief, describes what shifted it, and articulates what would have to be true for the shift to be wrong

**Open with something like:** Name a specific prior belief.

**Then, only where they have not got there on their own, get them to:** describe what shifted it; articulate what would have to be true for the shift to be wrong.

**Criteria**

- Names a specific prior belief (not "I didn't know much about AI")
- Describes what shifted it — a course experience, reading, conversation, or activity
- Articulates what would have to be true for the shift to be wrong, OR identifies what they'd want to learn next to test it

<details><summary>Background from the original course, if you need it</summary>

The practice version pushes harder than the graded quiz by adding a third
criterion: students must show epistemic humility about their own shift. Either
they identify what would have to be true for their new view to be wrong, OR
they identify what they'd want to learn next to further test the shift. This
guards against students leaving the course with newly-confident-but-untested
beliefs.

Likely shifts:

- "AI is just hype" → seeing real capability
- "AI is magic" → understanding pattern matching
- "AI will replace everyone" → seeing limits
- "AI cannot be creative" / "AI is creative" → Move 37, generated art
- "AI is harmless" → learning about data labor, environmental costs
- "AI is too dangerous to use" → finding useful applications
- "I'm bad with technology" → realizing they can build with AI help

"My belief didn't shift" is also valid IF the student can articulate what they
came in believing and explain why course content didn't move them.

Probes for the third criterion:

- "What would have to be true for your new view to be wrong?"
- "What's the strongest case against where you've landed?"
- "What would you want to learn next that would actually test this?"
- "If you imagine yourself a year from now disagreeing with this, what would
  have changed your mind?"

</details>

**Rubric**

```
Criterion 1: "Names a specific prior belief"
  met: Student names a concrete belief — "I thought AI was X."
  partially_met: Student gestures at vague prior ignorance without naming a
       specific belief.
  not_started: Student cannot name any prior belief.

Criterion 2: "Describes what shifted it"
  met: Student names a specific course experience and connects it to the shift.
  partially_met: Student says their thinking changed but cannot say what changed it.
  not_started: Student cannot describe what shifted their thinking.

Criterion 3: "Articulates what would have to be true for the shift to be wrong"
  met: Student identifies a specific condition under which their new view would
       be wrong, OR a specific thing they'd want to learn next to test it.
  partially_met: Student gestures at uncertainty but cannot name a concrete
       condition or learning goal.
  not_started: Student insists their shift is settled or cannot engage with the question.

Tone for this portion: Reflective and probing. The goal is to help students
hold their newly-formed views with appropriate humility, not to talk them out
of those views. If a student has stayed where they started, that's also
legitimate — push them to articulate why the course's strongest case for
shifting didn't move them.
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

**Student:** ______________________  **Date:** ____________  **Assessment:** End-of-Semester Quiz Practice

| Section | Criterion | Met | Partly | Not reached | Questions I had to ask |
| --- | --- | --- | --- | --- | --- |
| 1 | Identifies a specific concept (not a vague generality like "AI is complicated") |  |  |  |  |
| 1 | Explains the concept accurately enough to show real understanding |  |  |  |  |
| 1 | Engages with a probing follow-up that pushes beyond their initial explanation |  |  |  |  |
| 2 | Describes a specific, concrete activity (not "I used ChatGPT") |  |  |  |  |
| 2 | Reflects on what made it useful and how they'd carry it forward |  |  |  |  |
| 2 | Identifies where the same approach would NOT work, and why |  |  |  |  |
| 3 | Names a specific practice, boundary, or principle (not just "I'll be careful") |  |  |  |  |
| 3 | Explains why — what value or risk that practice serves |  |  |  |  |
| 3 | Engages with a tension or counterpressure to that practice |  |  |  |  |
| 4 | Names a specific concern (not generic "AI is scary") |  |  |  |  |
| 4 | Explains why it concerns them — the mechanism, the harm, or who is affected |  |  |  |  |
| 4 | Engages thoughtfully with a counterargument when challenged |  |  |  |  |
| 5 | Names a specific prior belief (not "I didn't know much about AI") |  |  |  |  |
| 5 | Describes what shifted it — a course experience, reading, conversation, or activity |  |  |  |  |
| 5 | Articulates what would have to be true for the shift to be wrong, OR identifies what they'd want to learn next to test it |  |  |  |  |

**Anything unprompted worth noting** (this is the top-grade test):

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Section grades:** ______  **Overall (= the weakest section):** ______
