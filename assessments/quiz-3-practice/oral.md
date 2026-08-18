# Quiz 3 Practice: Representations, Networks, and Costs — oral exam

Practice for Quiz 3 — covers similar topics from different angles to help you prepare

## How to run it

One student at a time. Budget about five minutes per section, so roughly 15 minutes each. Multiply by your class size before you commit to this: it is the expensive option and it is the better one.

You are doing what the AI interviewer did: ask an opening question, listen, and follow up only where the student has not already covered something.

**The thing to track is whether they got there on their own.** The rubric below distinguishes a criterion met unprompted from the same criterion met after you asked about it directly, and that distinction is most of what this assessment measures. Write down which questions you had to ask. A student who covers everything after six direct questions has not done the same thing as one who covered it after one.

Ask open first and specific only as needed. If you find yourself naming the concept you are hoping to hear, you have already given it away, so note that you did.

| Grade | Means |
| --- | --- |
| **E** Excellent | Demonstrates clear, accurate understanding of core concepts with specific examples. For opinion portions, articulates a well-supported position and engages substantively with counterarguments. |
| **S** Satisfactory | Shows adequate understanding of core concepts but explanations may lack depth or specificity. For opinion portions, takes a clear position but arguments lack nuance. |
| **N** Needs Improvement | Shows partial understanding with notable gaps or misconceptions. For opinion portions, offers vague positions without supporting reasoning. |
| **U** Unsatisfactory | Unable to demonstrate meaningful understanding of core concepts. For opinion portions, cannot articulate a position. |

## 1. The Geometry of Meaning

**What you are looking for:** Student demonstrates deeper understanding of embeddings by explaining what the Embedding Explorer reveals and what it hides

**Open with something like:** tell me what you know about this.

**Criteria**

- Can explain why semantically similar words cluster together in embedding space
- Can describe what the scatter plot projection reveals and what it loses
- Can discuss how bias in training data affects embeddings

<details><summary>Background, if you need it</summary>

This portion probes embedding understanding from the angle of what the visualization
reveals versus what it hides. Students explored the Embedding Explorer in class
(March 24) and should be able to draw on that direct experience.

Key concepts (asked from a DIFFERENT ANGLE than the proctored quiz):

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

**Rubric**

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

**What you are looking for:** Student demonstrates understanding of learning in neural networks by explaining the training process they observed

**Open with something like:** tell me what you know about this.

**Criteria**

- Can explain why a neural network needs training data and what happens without it
- Can describe what they observed when the Digit Network trained (connections changing)
- Can explain why adding more layers or neurons might help or hurt

<details><summary>Background, if you need it</summary>

This portion probes neural network understanding from the angle of the TRAINING
PROCESS rather than the architecture. Students watched the Digit Network train
from scratch in class (March 10) and discussed emergence (March 12).

Key concepts (DIFFERENT ANGLE than proctored quiz):

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
   layers of 16 neurons each. This is slightly more advanced than the proctored
   quiz questions.

</details>

**Rubric**

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

**What you are looking for:** Student articulates and defends a specific policy position on managing AI's costs

**Open with something like:** what do you think, and why? Then push: what is the strongest argument against your position?

**Criteria**

- Can explain the connection between AI's technical requirements and its human costs
- Takes a clear position on what specific policy or action should address AI's costs
- Engages thoughtfully with counterarguments when challenged

<details><summary>Background, if you need it</summary>

This portion asks the SAME general topic as the proctored quiz (costs of AI) but
from a MORE SPECIFIC and HARDER angle: instead of just identifying costs, students
must propose and defend a specific action or policy. This is deliberately more
challenging to help students prepare.

Students discussed training costs in four rounds on March 26:
- Energy/infrastructure: Colossus, $600B, nuclear restarts
- Environmental justice: Boxtown, content moderators in Kenya
- Intellectual property: Eric Schmidt "hire lawyers", double standard
- Governance: regulatory vacuum, Congress inaction

The practice version pushes harder than the proctored quiz:
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

**Rubric**

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

## Recording the result

One grade for the whole assessment, plus a note on which criteria needed prompting. The note is worth more than the grade when you sit down to plan the next session: it tells you what the room did not have.
