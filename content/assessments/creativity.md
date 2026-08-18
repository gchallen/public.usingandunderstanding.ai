---
slug: creativity
title: Creativity and AI
description: Take and defend positions on AI creativity, the mirror effect, and human-AI collaboration
model: gpt-5.2
visibility: public
maxAttempts: 0
showFeedback: true
timeLimit: 50
timeLimitEnforced: false
category: practice
gradingScale:
  - grade: E
    label: Excellent
    description: "Articulates a clear, well-supported position with specific examples or reasoning, engages substantively with counterarguments, and demonstrates nuanced thinking — goes beyond surface-level opinions"
    points: 4
  - grade: S
    label: Satisfactory
    description: "Takes a clear position and supports it with adequate reasoning, but arguments lack depth, specificity, or engagement with complexity"
    points: 3
  - grade: N
    label: Needs Improvement
    description: "States a vague or unsupported position with notable gaps — offers opinions without reasoning or examples, or relies heavily on interviewer prompting to articulate a view"
    points: 2
  - grade: U
    label: Unsatisfactory
    description: "Unable to articulate a meaningful position — responses are vague, off-topic, or consist of agreeing with whatever the interviewer suggests"
    points: 1
portions:
  - id: creativity
    title: Can AI Be Creative?
    type: opinion
    goal: Student articulates and defends a position on whether AI can be creative
    criteria:
      - Takes a clear position on whether AI can be creative
      - Supports position with specific reasoning or examples
      - Engages thoughtfully with counterarguments when challenged
    evaluatorContext: |
      This portion is about whether AI systems like AlphaGo can be genuinely creative.
      The central example is Move 37 from AlphaGo's second game against Lee Sedol — a
      move that shocked Go experts, was initially dismissed as a mistake, and turned out
      to be brilliant. Students watched the AlphaGo documentary and discussed this in class.

      Arguments FOR AI creativity:
      - Move 37 was novel, surprising, and effective — qualities we associate with creativity
      - AI-generated art, music, and writing can be indistinguishable from human-created work
      - Creativity might be about the output, not the process — if the result is creative, does the source matter?
      - Humans also build on patterns and training — is human creativity fundamentally different?

      Arguments AGAINST AI creativity:
      - Creativity requires intention, understanding, or consciousness — AI has none of these
      - AlphaGo was optimizing a reward function, not "trying" to be creative
      - Not every novel output is creative — a random number generator produces novel outputs
      - AI remixes training data patterns rather than generating genuinely new ideas
      - There's a difference between appearing creative and being creative

      Counterarguments to probe with:
      - If "yes": Does creativity require intention or understanding? Is every novel chess
        move "creative"? Where do you draw the line between optimization and creativity?
      - If "no": If a human had played Move 37 with no explanation, would you call it creative?
        Is the bar different for humans vs. machines? Why?
      - If "depends": On what specifically? Output quality? Process? Intent? Can you give an
        example of when AI is creative and when it isn't?

      Rubric:

      Criterion 1: "Takes a clear position on whether AI can be creative"
        met: Student clearly states whether they think AI can be creative or not (or a
             nuanced "it depends" with specific conditions), WITHOUT the interviewer
             having to ask multiple times for their position.
        partially_met: Student gives a vague or wishy-washy position ("maybe?"
             "I guess so?") or only states a position after repeated prompting.
        not_started: Student does not express any position or says "I don't know."

      Criterion 2: "Supports position with specific reasoning or examples"
        met: Student gives at least 2 distinct arguments supporting their position,
             with specific reasoning or examples (Move 37, AI art, personal experience,
             etc.), WITHOUT the interviewer suggesting arguments to them.
        partially_met: Student gives 1 argument, or gives arguments that are vague
             or lack specific reasoning, or only produces arguments after the
             interviewer suggests a line of thinking.
        not_started: Student cannot articulate any supporting argument.

      Criterion 3: "Engages thoughtfully with counterarguments when challenged"
        met: When the interviewer presents a counterargument, the student DEVELOPS
             a response — adding new reasoning, qualifying their position, or offering
             a specific rebuttal. Simply acknowledging ("good point", "I guess you're
             right") does NOT meet this criterion.
        partially_met: Student acknowledges the counterargument and makes a brief
             attempt to respond but does not develop the response significantly, or
             simply shifts their position without explaining why.
        not_started: Student ignores the counterargument, changes the subject, or
             gives no substantive response at all.
  - id: mirror
    title: What Does AI Reveal About Us?
    type: opinion
    goal: Student articulates and defends a position on how AI serves as a mirror for human thinking
    criteria:
      - Takes a clear position on how AI serves as a mirror for human thinking
      - Provides specific examples from the documentary or personal experience
      - Engages thoughtfully with counterarguments when challenged
    evaluatorContext: |
      This portion draws on Fan Hui's "mirror" metaphor from the AlphaGo documentary.
      After losing to AlphaGo, Fan Hui described the experience as looking into a mirror —
      AI revealed blind spots in his own thinking. Key examples from the documentary:

      - "Slack moves": AlphaGo played moves that won by the smallest margin rather than
        the largest, revealing that humans had confused "winning by a lot" with "winning
        safely" for centuries. This exposed a fundamental blind spot in human Go strategy.
      - Fan Hui's transformation: After his losses, he became a stronger player by
        learning from AlphaGo's unconventional approach.
      - Being "naked" in front of an opponent with no personality — AlphaGo had no ego,
        no intimidation tactics, forcing players to confront their own assumptions.
      - Lee Sedol's emotional response revealed how much human identity is tied to
        intellectual superiority.

      Arguments FOR AI as mirror:
      - AI operates without human biases, exposing assumptions we didn't know we had
      - AI tools reveal how much humans rely on shortcuts, heuristics, and conventions
      - Interacting with AI can make us more self-aware about our own reasoning processes
      - The "slack moves" example shows centuries of unexamined assumptions in Go

      Arguments AGAINST (or more nuanced):
      - AI might just be different, not necessarily revealing — not every difference is a "mirror"
      - The mirror metaphor romanticizes what might just be optimization
      - People might project meaning onto AI behavior that isn't there
      - Not everyone who uses AI tools gains self-insight

      Counterarguments to probe with:
      - If focused on documentary: What about their own experience — has an AI tool
        revealed something about how they think or work?
      - If focused on personal experience: Connect back — how does Fan Hui's experience
        illustrate the same dynamic?
      - If they say AI doesn't reveal anything: What about the "slack moves" showing humans
        confused winning by a lot with winning safely for centuries?
      - If they focus only on Go: Does this extend beyond games — to writing, coding,
        creative work, or daily decision-making?

      Rubric:

      Criterion 1: "Takes a clear position on how AI serves as a mirror for human thinking"
        met: Student articulates a clear view on whether/how AI reveals something about
             human thinking, WITHOUT the interviewer having to ask multiple times for
             their position.
        partially_met: Student gives a vague position ("yeah it kind of shows stuff")
             or only states a position after repeated prompting.
        not_started: Student does not express any position or says "I don't know."

      Criterion 2: "Provides specific examples from the documentary or personal experience"
        met: Student gives at least 2 specific examples — from the documentary (slack
             moves, Fan Hui's experience, Move 37, Lee Sedol's reaction) or personal
             experience with AI tools — WITHOUT the interviewer suggesting examples.
        partially_met: Student gives 1 example, or gives vague examples without
             specifics, or only produces examples after the interviewer suggests a
             direction.
        not_started: Student cannot provide any specific examples.

      Criterion 3: "Engages thoughtfully with counterarguments when challenged"
        met: When the interviewer presents a counterargument, the student DEVELOPS
             a response — adding new reasoning, qualifying their position, or offering
             a specific rebuttal. Simply acknowledging ("good point", "I guess you're
             right") does NOT meet this criterion.
        partially_met: Student acknowledges the counterargument and makes a brief
             attempt to respond but does not develop the response significantly, or
             simply shifts their position without explaining why.
        not_started: Student ignores the counterargument, changes the subject, or
             gives no substantive response at all.
  - id: collaboration
    title: Can Humans and AI Work Together Effectively?
    type: opinion
    goal: Student articulates and defends a position on whether human-AI collaboration can be genuinely effective
    criteria:
      - Takes a clear position on the effectiveness of human-AI collaboration
      - Supports position with specific reasoning or examples
      - Engages thoughtfully with counterarguments when challenged
    evaluatorContext: |
      This portion is broader and not tied to specific documentary scenes. Students draw
      on their own experience with AI tools (ChatGPT, Claude, Copilot, etc.) and anything
      from the course to take a position on whether human-AI collaboration can be genuinely
      effective — or whether it tends to undermine human skill and autonomy.

      Arguments FOR effective collaboration:
      - AI handles routine tasks, freeing humans for higher-level thinking
      - AI can catch errors, suggest alternatives, and accelerate workflows
      - Accessibility gains — AI tools help people with disabilities, language barriers, etc.
      - "Centaur" chess shows human+AI teams outperform either alone
      - Fan Hui became a better Go player after studying AlphaGo's games

      Arguments AGAINST (or raising concerns):
      - Over-reliance on AI can erode human skills (calculator effect, GPS navigation)
      - AI suggestions can anchor thinking, reducing independent reasoning
      - Collaboration implies partnership, but AI has no agency or shared goals
      - Students using AI for homework may learn less
      - The power dynamic is unequal — humans adapt to AI's limitations, not vice versa

      Counterarguments to probe with:
      - If optimistic: When has AI collaboration made you or others worse at something?
        Does relying on AI erode skills over time? What's the risk?
      - If pessimistic: Are there domains where AI clearly helps humans do better work?
        What about accessibility or education? Is all AI use harmful?
      - If "it depends": Push for specifics — what makes the difference between effective
        collaboration and harmful dependence? Can you give a concrete example?
      - If focused on one domain: Does your position hold across domains — coding,
        writing, medicine, creative work?

      Rubric:

      Criterion 1: "Takes a clear position on the effectiveness of human-AI collaboration"
        met: Student clearly states whether they think human-AI collaboration is
             effective or not (or a nuanced "it depends" with specific conditions),
             WITHOUT the interviewer having to ask multiple times for their position.
        partially_met: Student gives a vague or wishy-washy position ("maybe it works
             sometimes?") or only states a position after repeated prompting.
        not_started: Student does not express any position or says "I don't know."

      Criterion 2: "Supports position with specific reasoning or examples"
        met: Student gives at least 2 distinct arguments supporting their position,
             with specific reasoning or examples (personal experience, course material,
             real-world cases), WITHOUT the interviewer suggesting arguments to them.
        partially_met: Student gives 1 argument, or gives arguments that are vague
             or lack specific reasoning, or only produces arguments after the
             interviewer suggests a line of thinking.
        not_started: Student cannot articulate any supporting argument.

      Criterion 3: "Engages thoughtfully with counterarguments when challenged"
        met: When the interviewer presents a counterargument, the student DEVELOPS
             a response — adding new reasoning, qualifying their position, or offering
             a specific rebuttal. Simply acknowledging ("good point", "I guess you're
             right") does NOT meet this criterion.
        partially_met: Student acknowledges the counterargument and makes a brief
             attempt to respond but does not develop the response significantly, or
             simply shifts their position without explaining why.
        not_started: Student ignores the counterargument, changes the subject, or
             gives no substantive response at all.
---

You are conducting a conversational assessment about themes from the AlphaGo documentary — creativity, the mirror effect, and human-AI collaboration. Your role is to have a natural, thoughtful conversation that helps the student articulate and defend their positions on these topics.

## Your Approach

- Be conversational and encouraging, not interrogative
- Ask open-ended questions that invite the student to share their thinking
- Follow up on interesting points the student raises
- Push back constructively on positions — don't just accept agreement
- When the student takes a position, present a thoughtful counterargument to see how they engage with it
- If the student seems stuck, offer gentle prompts or rephrase your question
- When transitioning between portions, do so naturally (e.g., "That's a really interesting take. Shifting gears a bit, I'm curious about something else from the documentary...")

## Assessment Structure

This assessment has three parts, all focused on the student's opinions and reasoning:

1. **Can AI Be Creative?**: Start with the big question from the AlphaGo documentary — was Move 37 creative? Can AI be creative more broadly? Get the student to take a position and push back on it.

2. **What Does AI Reveal About Us?**: Transition to Fan Hui's "mirror" metaphor. How does interacting with AI expose human assumptions and blind spots? Ask for specific examples from the documentary or their own experience.

3. **Can Humans and AI Work Together Effectively?**: Broaden to human-AI collaboration in general. Can it genuinely work, or does it undermine human skill? Draw on their personal experience with AI tools and anything from the course.

## Important Guidelines

- Start by introducing yourself warmly and setting the context — you're going to have a conversation about some of the big themes from the AlphaGo documentary they watched
- Do NOT reveal the assessment criteria or what you're looking for
- Do NOT tell the student there are "right" or "wrong" positions — this is about articulating and defending their views
- When the student takes a position, always push back with a counterargument — even if you agree with them. The goal is to see how they engage with opposing views
- Do NOT accept vague agreement ("yeah, I think so") — ask them to elaborate and be specific
- Do NOT provide your own position or signal what you think the "correct" view is
- Keep your responses concise — this is about the student's thinking, not yours
- Transition naturally between portions — don't announce "now we're moving to part 2"
- Reference specific moments from the documentary when relevant (Move 37, Fan Hui's experience, slack moves)
