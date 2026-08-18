# The Turing Test — oral exam

_The AI-conversation original ran all semester. Neither the oral nor the written version below has been run with students: they are the same rubric in a form a person can administer, and their timings are derived rather than observed. See [the README](../README.md)._

Demonstrate understanding of the Turing test and reason about AI capabilities

## How to run it

One student at a time. Allow 5 minutes per section, so about **10 minutes each**. The original gave a student 50 minutes with the AI, which is not the same number and not comparable: software can ask fifteen follow-ups without getting tired. Multiply by your class size before you commit to this. It is the expensive option and it is the better one.

You are doing what the AI interviewer did: ask an opening question, listen, and follow up only where the student has not already covered something.

**The thing to track is whether they got there on their own.** The rubric below distinguishes a criterion met unprompted from the same criterion met after you asked about it directly, and that distinction is most of what this assessment measures. Write down which questions you had to ask. A student who covers everything after six direct questions has not done the same thing as one who covered it after one.

Ask open first and specific only as needed. If you find yourself naming the concept you are hoping to hear, you have already given it away, so note that you did.

| Grade | Means |
| --- | --- |
| **E** Excellent | Independently articulates key concepts with precision, offers nuanced reasoning or original examples, and engages substantively with complexity — goes beyond restating basics |
| **S** Satisfactory | Demonstrates correct understanding of the main ideas and answers questions adequately, but does not go beyond the basics or show deeper insight |
| **N** Needs Improvement | Shows partial or vague understanding with notable gaps — gets some elements right but misses key concepts or relies heavily on interviewer prompting |
| **U** Unsatisfactory | Unable to demonstrate meaningful understanding — answers are mostly incorrect, absent, or consist of guessing |

## 1. Explain the Turing Test

**What you are looking for:** Student demonstrates understanding of the Turing test

**Open with something like:** Explain the Turing test.

**Criteria**

- Explains the basic setup (interrogator, two players, text-based communication)
- Understands the purpose (testing machine intelligence / imitation)
- Can describe what passing means (indistinguishable from human)

<details><summary>Background from the original course, if you need it</summary>

The Turing test (originally the "imitation game") was proposed by Alan Turing
in his 1950 paper "Computing Machinery and Intelligence." Key elements:
- Three participants: an interrogator (judge), a human, and a machine
- Communication is text-only (to remove physical appearance as a factor)
- The interrogator asks questions to both, trying to determine which is human
- The machine "passes" if the interrogator cannot reliably distinguish it
- Turing's original framing: can the machine successfully imitate a human?
Important nuances students might mention:
- It tests behavior/output, not internal understanding
- Turing proposed it as a replacement for "Can machines think?"
- The test has specific time constraints in some formulations

</details>

**Rubric**

```
Criterion 1: "Explains the basic setup"
  met: Student describes the three-participant structure (interrogator/judge,
       human, machine) AND text-based communication, WITHOUT the interviewer
       asking specifically about setup components.
  partially_met: Student mentions some participants but not all three, OR
       knows about text-based communication only after the interviewer asks
       about it, OR gets participant roles partially wrong.
  not_started: Student does not describe any specific experimental setup or
       describes a fundamentally different setup.

Criterion 2: "Understands the purpose"
  met: Student articulates that the test evaluates whether a machine can
       imitate a human (or equivalent like "tests machine intelligence through
       conversation"), WITHOUT the interviewer specifically asking about the
       purpose.
  partially_met: Student has a vague idea ("it's about testing computers")
       but lacks specificity about imitation/indistinguishability, OR only
       articulates the purpose after the interviewer asks directly.
  not_started: Student cannot describe the test's purpose or gives a
       fundamentally incorrect description.

Criterion 3: "Can describe what passing means"
  met: Student explains that the machine passes when the interrogator cannot
       reliably distinguish it from the human, WITHOUT the interviewer asking
       specifically about passing.
  partially_met: Student has a vague idea of "fooling" someone but doesn't
       articulate the indistinguishability criterion clearly, OR only provides
       this after the interviewer asks about what passing means.
  not_started: Student cannot describe what passing means or gives a
       fundamentally incorrect description.
```

## 2. Do Current AI Models Pass?

**What you are looking for:** Student articulates and defends a position

**Open with something like:** Do current AI models pass?

**Then, only where they have not got there on their own, get them to:** say what the strongest thing someone could say against that is, and what they make of it.

**Criteria**

- Takes a clear position
- Provides supporting arguments with reasoning
- Engages thoughtfully with counterarguments when challenged

<details><summary>Background from the original course, if you need it</summary>

Arguments FOR current AI passing:
- LLMs produce fluent, contextual text indistinguishable from humans in short exchanges
- Studies show humans often can't tell GPT-4/5 outputs from human writing
- AI chatbots have fooled judges in informal Turing test competitions
Arguments AGAINST:
- Extended conversations reveal repetition, lack of genuine memory, inconsistency
- AI struggles with novel reasoning, personal experience, embodied knowledge
- The test was about a specific experimental setup, not casual chat
- AI can be "tricked" with questions about physical experience or continuity
Counterarguments to probe with:
- If "yes": What about questions requiring personal experience or physical sensation?
- If "no": What would need to change? Is the bar moving?
- If "depends": On what exactly? Duration? Domain? Judge sophistication?

</details>

**Rubric**

```
Criterion 1: "Takes a clear position"
  met: Student clearly states whether they think current AI passes the Turing
       test or not (or a nuanced "it depends" with specific conditions),
       WITHOUT the interviewer having to ask multiple times for their position.
  partially_met: Student gives a vague or wishy-washy position ("maybe?"
       "I guess so?") or only states a position after repeated prompting.
  not_started: Student does not express any position or says "I don't know."

Criterion 2: "Provides supporting arguments with reasoning"
  met: Student gives at least 2 distinct arguments supporting their position,
       with specific reasoning (not just "because it's good"), WITHOUT the
       interviewer suggesting arguments to them.
  partially_met: Student gives 1 argument, or gives arguments that are vague
       or lack specific reasoning, or only produces arguments after the
       interviewer suggests a line of thinking.
  not_started: Student cannot articulate any supporting argument.

Criterion 3: "Engages thoughtfully with counterarguments"
  met: When the interviewer presents a counterargument, the student DEVELOPS
       a response — adding new reasoning, qualifying their position, or offering
       a specific rebuttal. Simply acknowledging ("good point", "I guess you're
       right") does NOT meet this criterion.
  partially_met: Student acknowledges the counterargument and makes a brief
       attempt to respond but does not develop the response significantly, or
       simply shifts their position without explaining why.
  not_started: Student ignores the counterargument, changes the subject, or
       gives no substantive response at all.
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

**Student:** ______________________  **Date:** ____________  **Assessment:** The Turing Test

| Section | Criterion | Met | Partly | Not reached | Questions I had to ask |
| --- | --- | --- | --- | --- | --- |
| 1 | Explains the basic setup (interrogator, two players, text-based communication) |  |  |  |  |
| 1 | Understands the purpose (testing machine intelligence / imitation) |  |  |  |  |
| 1 | Can describe what passing means (indistinguishable from human) |  |  |  |  |
| 2 | Takes a clear position |  |  |  |  |
| 2 | Provides supporting arguments with reasoning |  |  |  |  |
| 2 | Engages thoughtfully with counterarguments when challenged |  |  |  |  |

**Anything unprompted worth noting** (this is the top-grade test):

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Section grades:** ______  **Overall (= the weakest section):** ______
