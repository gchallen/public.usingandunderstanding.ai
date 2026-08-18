# Quiz 3 Practice: Representations, Networks, and Costs — marking scheme

**What this loses.** The original assessed these in conversation, and its rubric turns on whether a student produced something *before being asked for it*. On paper every answer is unprompted, so that distinction does not exist and the criteria below can only be scored met or not met. Expect this to grade more generously than the oral version: a student who would have needed four prompts looks identical to one who needed none.

If you want some of that back, run it in two passes. Collect the answers, then hand out a second sheet with one challenge per question and collect that too. What a student does when pushed is the closest written equivalent to what the interviewer was listening for.

| Grade | Means |
| --- | --- |
| **E** Excellent | Demonstrates clear, accurate understanding of core concepts with specific examples. For opinion portions, articulates a well-supported position and engages substantively with counterarguments. |
| **S** Satisfactory | Shows adequate understanding of core concepts but explanations may lack depth or specificity. For opinion portions, takes a clear position but arguments lack nuance. |
| **N** Needs Improvement | Shows partial understanding with notable gaps or misconceptions. For opinion portions, offers vague positions without supporting reasoning. |
| **U** Unsatisfactory | Unable to demonstrate meaningful understanding of core concepts. For opinion portions, cannot articulate a position. |

## 1. The Geometry of Meaning

A complete answer covers:

- Can explain why semantically similar words cluster together in embedding space
- Can describe what the scatter plot projection reveals and what it loses
- Can discuss how bias in training data affects embeddings

The original's rubric, for the wording of what counts. Ignore every clause about what the interviewer did or did not ask; none of it applies on paper.

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

A complete answer covers:

- Can explain why a neural network needs training data and what happens without it
- Can describe what they observed when the Digit Network trained (connections changing)
- Can explain why adding more layers or neurons might help or hurt

The original's rubric, for the wording of what counts. Ignore every clause about what the interviewer did or did not ask; none of it applies on paper.

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

A complete answer covers:

- Can explain the connection between AI's technical requirements and its human costs
- Takes a clear position on what specific policy or action should address AI's costs
- Engages thoughtfully with counterarguments when challenged

The original's rubric, for the wording of what counts. Ignore every clause about what the interviewer did or did not ask; none of it applies on paper.

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
