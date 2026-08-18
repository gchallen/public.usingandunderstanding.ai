# Assessments

_The AI-conversation original ran all semester and the numbers it produced are
real. Neither the oral nor the written version below has been run with students:
they are the same rubrics in a form a person can administer. Their timings are
derived from the number of questions, not measured. The evidence labels the
pattern chapters carry apply here too, and this is the weaker end of the kit._

The original ran these as conversations: an AI interviewer asked questions
while a second AI tracked criteria, and a student finished when every
criterion was met. That software is not here. What carries is the rubric and
the rule that turns it into a grade, and both are text.

Each assessment is emitted twice, and the two are not equivalent.

**Oral** keeps everything, including the thing the format exists for: the
rubric distinguishes a criterion a student reached on their own from the same
criterion reached after being asked directly, and an examiner can see that.
It costs you the time, one student at a time.

**Written** scales and loses exactly that. On paper nothing is prompted, so
the distinction collapses and the criteria can only be met or not met. It will
grade more generously than the oral version. The marking scheme says so, and
suggests a two-pass version that recovers part of it.

Both carry the same **grading rule** — how a handful of criteria at three levels become
one letter. It came from the original evaluator and it is the piece that makes
a grade something you can show a student rather than something you assert.

| Assessment | Kind | Questions | Run it live | Run it on paper |
| --- | --- | --- | --- | --- |
| Creativity and AI | practice | 3 | [oral](creativity/oral.md), ~15m each | [written](creativity/written.md) · [marking](creativity/written-marking.md), 30m |
| End-of-Semester Quiz Practice | practice | 5 | [oral](end-of-semester-quiz-practice/oral.md), ~25m each | [written](end-of-semester-quiz-practice/written.md) · [marking](end-of-semester-quiz-practice/written-marking.md), 50m |
| End-of-Semester Quiz | graded | 5 | [oral](end-of-semester-quiz/oral.md), ~25m each | [written](end-of-semester-quiz/written.md) · [marking](end-of-semester-quiz/written-marking.md), 50m |
| Quiz 3 Practice: Representations, Networks, and Costs | practice | 3 | [oral](quiz-3-practice/oral.md), ~15m each | [written](quiz-3-practice/written.md) · [marking](quiz-3-practice/written-marking.md), 30m |
| The Turing Test | practice | 2 | [oral](turing-test/oral.md), ~10m each | [written](turing-test/written.md) · [marking](turing-test/written-marking.md), 20m |

## What these actually cost you

**The two columns above are not comparable, and reading them as though they
were will cost you a week.** The oral figure is your own time, per student.
The written figure is a room booking, shared by the whole class, and it does
not include marking.

For a class of thirty, the End-of-Semester Quiz works out at roughly:

| | Oral | Written |
| --- | --- | --- |
| Contact | 25m x 30 = **12.5 hours** | one 50m period |
| Marking | none, if you grade in the room | ~10m per script = **5 hours** |
| Total | **~15 hours** with changeover | **~6 hours** |

The marking figure is an estimate from one examiner who tried it, not a
measurement. The rest is arithmetic on the per-question numbers: five minutes
per section spoken, ten per question written. The original allowed fifty
minutes with the AI, which is not comparable to either: software can ask
fifteen follow-ups without tiring and has no other students waiting.

**The practice-then-graded structure is the first thing that breaks at scale.**
Running all five of these orally is about ninety minutes per student, and
"unlimited attempts" cannot be offered one student at a time at all. If you
want the practice half, it has to be written, or a chatbot, or dropped.

## Practice and graded

The course used low-stakes practice versions of the same rubric, unlimited
attempts, before the graded one. Only one graded assessment was built this way
(the End-of-Semester Quiz), and its practice version pushes harder than it
does on purpose, on the theory that practicing under more pressure than the
real thing is the point of practicing.

Quiz 3 Practice has no graded counterpart here. The graded Quiz 3 was not
built as a conversational assessment, so there is nothing to export. Use the
practice version as an assessment in its own right, or as preparation for one
you write.

## Editing them

The sources are in `content/assessments/`, one file per assessment, and
`bun run handout` regenerates all three outputs from them. Change a
criterion there rather than in the three files it produces: the oral
script, the paper, and the marking scheme have to agree, and keeping them
in step by hand is how one of them ends up wrong.

## Before you use any of these

Two of these name tools from the original course that your students cannot
reach. Where that happens, the oral script and the marking scheme open with a
*Before you use this* section, and the student paper opens with a box telling
you not to photocopy it until you have replaced them. The other three carry no
such section, because they need none.

The assessment chapter in [the guide](../guide/00-front-matter/03-assessment.md)
covers what the rest of the grade was, and why most of it was participation.
