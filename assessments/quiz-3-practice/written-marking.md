# Quiz 3 Practice: Representations, Networks, and Costs — marking scheme

_The AI-conversation original ran all semester. Neither the oral nor the written version below has been run with students: they are the same rubric in a form a person can administer, and their timings are derived rather than observed. See [the README](../README.md)._

**What this loses.** The original assessed these in conversation, and its rubric turns on whether a student produced something *before being asked for it*. On paper every answer is unprompted, so that distinction does not exist. Expect this to grade more generously than the oral version: a student who would have needed four prompts looks identical to one who needed none.

**Partly met still exists.** What it cannot mean here is "got there only after I asked", which is most of what it meant in the original. On paper it means an answer that gestures at the criterion without landing it: names the thing but says nothing about it, or asserts what the criterion asks you to explain. The rubrics below keep that level and you should use it.

**Criteria the paper asks for differently.** These needed somebody in the room, so the student's page asks for the nearest thing a person can do alone:

- *Engages thoughtfully with counterarguments when challenged* → **Give the strongest argument against your own position, and say what you make of it**

**Score these against the paper wording, not the rubric block.** The rubric below still defines `met` as what happens *when the interviewer presents a counterargument*, and no interviewer does. Read it as: **met** — the student produced the objection and then did something with it, adding reasoning, qualifying, or rebutting; **partly met** — they produced an objection and left it there, or only restated their position; **not reached** — no objection appears. Simply naming one is not engaging with it, which is the part of the original wording that does carry over.

Mark what the paper asked for rather than the original wording, and know what changed. Producing an objection against yourself is not the same skill as handling one somebody else raised, and it is usually the harder of the two. A student who does it is also following an instruction rather than showing initiative, so do not read compliance as strength.

**A two-pass version, untested.** If you want some of that back, collect the answers, hand out a second sheet with one challenge per question, and collect that too. What a student does when pushed is the closest written equivalent to what the interviewer was listening for. Nobody has run this, and it doubles your marking. The same untested label the pattern chapters carry applies here.

## Before you use this

**These appear in the questions themselves, and you have to replace them.** They name things from the original course that your students did not do:

- the Embedding Explorer (a login-gated tool from the original site)
- the Digit Network (a login-gated tool from the original site)

Point the question at whatever your students actually did instead. The criterion underneath is usually portable; the example is not.

| Grade | Means |
| --- | --- |
| **E** Excellent | Demonstrates clear, accurate understanding of core concepts with specific examples. For opinion portions, articulates a well-supported position and engages substantively with counterarguments. |
| **S** Satisfactory | Shows adequate understanding of core concepts but explanations may lack depth or specificity. For opinion portions, takes a clear position but arguments lack nuance. |
| **N** Needs Improvement | Shows partial understanding with notable gaps or misconceptions. For opinion portions, offers vague positions without supporting reasoning. |
| **U** Unsatisfactory | Unable to demonstrate meaningful understanding of core concepts. For opinion portions, cannot articulate a position. |

## 1. The Geometry of Meaning

**Criteria**

- Can explain why semantically similar words cluster together in embedding space
- Can describe what the scatter plot projection reveals and what it loses
- Can discuss how bias in training data affects embeddings

<details><summary>Background from the original course, if you need it</summary>

This portion probes embedding understanding from the angle of what the visualization
reveals versus what it hides. Students explored the Embedding Explorer in class and should be able to draw on that direct experience.

Key concepts (asked from a DIFFERENT ANGLE than the graded quiz):

1. Clustering: Similar words end up near each other because they appear in similar
   contexts in training data. "Dog" and "cat" are close because they appear in
   similar sentences. This is a different entry point than vector arithmetic —
   it asks WHY similarity works, not just WHAT it looks like.

2. Projection loss: The scatter plot shows 1,536 dimensions projected to 2D.
   Students saw the plot reproject when they clicked different words. Key insight:
   words that appear close in 2D might not be close in the full space. The 2D
   view is a "shadow" of a much richer structure. Pressing them on this is
   slightly harder than just asking "what are embeddings."

3. Bias: If training data contains gender stereotypes (nurse = female, engineer = male),
   embeddings will encode those biases as geometric relationships. This is a harder
   topic that connects technical understanding to social implications.

</details>

The original's rubric, for the wording of what counts. Ignore every clause about what the interviewer did or did not ask; none of that applies here, and the preamble says what `partially_met` means once those clauses are gone.

```
Criterion 1: "Can explain why semantically similar words cluster together"
  met: Student explains the connection between training context and vector proximity
       (words in similar contexts get similar vectors), WITHOUT the interviewer
       explaining the mechanism.
  partially_met: Student knows similar words are close but cannot explain why,
       or needs significant prompting.
  not_started: Student cannot explain clustering.

Criterion 2: "Can describe what the scatter plot projection reveals and what it loses"
  met: Student explains that the 2D view is a lossy projection of high-dimensional
       space, and can describe what's lost (distances, relationships not visible),
       WITHOUT the interviewer explaining it.
  partially_met: Student understands it's a simplification but cannot articulate
       what's lost, or only after prompting.
  not_started: Student cannot discuss projection.

Criterion 3: "Can discuss how bias in training data affects embeddings"
  met: Student explains that biased training data produces biased embeddings
       with a specific example or mechanism, WITHOUT the interviewer providing it.
  partially_met: Student knows bias exists but cannot explain how it enters
       embeddings, or only after prompting.
  not_started: Student cannot discuss embedding bias.
```

## 2. How Machines Learn

**Criteria**

- Can explain why a neural network needs training data and what happens without it
- Can describe what they observed when the Digit Network trained (connections changing)
- Can explain why adding more layers or neurons might help or hurt

<details><summary>Background from the original course, if you need it</summary>

This portion probes neural network understanding from the angle of the TRAINING
PROCESS rather than the architecture. Students watched the Digit Network train
from scratch in class and discussed emergence.

Key concepts (DIFFERENT ANGLE than graded quiz):

1. Training data necessity: An untrained network has random weights and produces
   random outputs. Training data provides examples for the network to learn from.
   Without it, the network is just random math. Students saw the network go from
   random guessing (~10% accuracy) to high accuracy during training.

2. Visual learning: During training, connection lines changed color (green = positive
   weight, red = negative) and thickness (magnitude). Students could see patterns
   emerge — certain neurons learning to detect curves, edges, loops. This visual
   experience is the entry point, not abstract description.

3. Architecture tradeoffs: More layers can capture more complex patterns (a single
   layer can't recognize digits well). But more isn't always better — too many
   parameters can overfit to training data. The Digit Network used just 2 hidden
   layers of 16 neurons each. This is slightly more advanced than the graded quiz questions.

</details>

The original's rubric, for the wording of what counts. Ignore every clause about what the interviewer did or did not ask; none of that applies here, and the preamble says what `partially_met` means once those clauses are gone.

```
Criterion 1: "Can explain why a neural network needs training data"
  met: Student explains that untrained networks have random weights and produce
       random outputs, and training data provides examples to learn from,
       WITHOUT the interviewer explaining this.
  partially_met: Student knows training is needed but cannot explain why or what
       happens without it, or needs significant prompting.
  not_started: Student cannot explain the role of training data.

Criterion 2: "Can describe what they observed when the Digit Network trained"
  met: Student describes specific visual observations (connections changing color/
       thickness, accuracy improving, patterns emerging) from their class experience,
       WITHOUT the interviewer describing it first.
  partially_met: Student gives vague descriptions ("it got better") without
       specific observations, or only after prompting.
  not_started: Student cannot describe the training process they observed.

Criterion 3: "Can explain why adding more layers or neurons might help or hurt"
  met: Student articulates both benefits (more complex patterns) and risks
       (overfitting, diminishing returns) of adding capacity, WITHOUT the
       interviewer suggesting both sides.
  partially_met: Student understands one side (more is better, or more is risky)
       but not both, or needs prompting to consider tradeoffs.
  not_started: Student cannot discuss architecture tradeoffs.
```

## 3. Who Should Pay for AI?

**Criteria**

- Can explain the connection between AI's technical requirements and its human costs
- Takes a clear position on what specific policy or action should address AI's costs
- Engages thoughtfully with counterarguments when challenged

<details><summary>Background from the original course, if you need it</summary>

This portion asks the SAME general topic as the graded quiz (costs of AI) but
from a MORE SPECIFIC and HARDER angle: instead of just identifying costs, students
must propose and defend a specific action or policy. This is deliberately more
challenging to help students prepare.

Students discussed training costs in four rounds in class:
- Energy/infrastructure: Colossus, $600B, nuclear restarts
- Environmental justice: Boxtown, content moderators in Kenya
- Intellectual property: Eric Schmidt "hire lawyers", double standard
- Governance: regulatory vacuum, Congress inaction

The practice version pushes harder than the graded quiz:
- Instead of "identify costs" → "connect technical requirements to human costs"
- Instead of "who bears costs" → "what specific policy should address this"
- Same engagement with counterarguments

Counterarguments to probe with:
- If they propose regulation: who writes the rules? Tech companies have more
  expertise than regulators. Will regulation just slow the US while China races ahead?
- If they propose market solutions: the market created these costs. Why would it fix them?
- If they propose compensation: how do you compensate Boxtown residents? Content
  moderators? Authors? Is money enough?
- If they propose stopping AI development: is that realistic? Who enforces it globally?
- Push for specificity: "regulate AI" is vague. What specific regulation? For whom?

</details>

The original's rubric, for the wording of what counts. Ignore every clause about what the interviewer did or did not ask; none of that applies here, and the preamble says what `partially_met` means once those clauses are gone.

```
Criterion 1: "Can explain the connection between AI's technical requirements and its human costs"
  met: Student draws a clear line from a technical requirement (training data,
       compute, content filtering) to a specific human cost (environmental damage,
       labor exploitation, IP theft), WITHOUT the interviewer making the connection.
  partially_met: Student discusses technical requirements and human costs
       separately but doesn't connect them, or only after prompting.
  not_started: Student cannot discuss the connection.

Criterion 2: "Takes a clear position on what specific policy or action should address AI's costs"
  met: Student proposes a specific action or policy (not just "something should
       be done") and explains why it would help, WITHOUT the interviewer
       suggesting options.
  partially_met: Student proposes something vague ("the government should regulate")
       without specifics, or only develops a position after prompting.
  not_started: Student cannot propose any action.

Criterion 3: "Engages thoughtfully with counterarguments when challenged"
  met: When the interviewer challenges their policy proposal, the student DEVELOPS
       a response with new reasoning or qualifications. Simply acknowledging
       does NOT meet this criterion.
  partially_met: Student acknowledges the counterargument and makes a brief
       attempt to respond but does not develop it significantly.
  not_started: Student ignores the counterargument or gives no substantive response.
```

## Turning criteria into a grade

Grade each section first, then the whole assessment.

**Per section**

Count the criteria you marked met, and the ones the student did not reach at all. Take the first line that applies:

- Every criterion met, **and** the answer does something the question did not ask for — an example of their own, a qualification, a connection to another part of the course → top grade.
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

---

## Marking sheet

**Student:** ______________________  **Marker:** ____________  **Assessment:** Quiz 3 Practice: Representations, Networks, and Costs

| Section | Criterion | Met | Partly | Not reached |
| --- | --- | --- | --- | --- |
| 1 | Can explain why semantically similar words cluster together in embedding space |  |  |  |
| 1 | Can describe what the scatter plot projection reveals and what it loses |  |  |  |
| 1 | Can discuss how bias in training data affects embeddings |  |  |  |
| 2 | Can explain why a neural network needs training data and what happens without it |  |  |  |
| 2 | Can describe what they observed when the Digit Network trained (connections changing) |  |  |  |
| 2 | Can explain why adding more layers or neurons might help or hurt |  |  |  |
| 3 | Can explain the connection between AI's technical requirements and its human costs |  |  |  |
| 3 | Takes a clear position on what specific policy or action should address AI's costs |  |  |  |
| 3 | Engages thoughtfully with counterarguments when challenged |  |  |  |

**Anything the question did not ask for** (this is the top-grade test):

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Section grades:** ______  **Overall (= the weakest section):** ______
