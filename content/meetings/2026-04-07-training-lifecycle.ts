import type { MeetingDefinition } from "../types";

const meeting: MeetingDefinition = {
  frontmatter: {
    date: "2026-04-07",
    semester: "spring2026",
    title: "How AI Learns to Be Helpful",
    summary:
      "Hands-on exploration of the AI training lifecycle: pretraining, instruction tuning, and RLHF",
  },
  intro: [
    {
      type: "markdown",
      content: `# How AI Learns to Be Helpful

## Today's Plan

You've explored how LLMs predict the next word, how temperature affects their output, and how embeddings represent meaning. But there's a gap between a model that predicts text and a model that *helps* you. Today you'll discover how that gap gets closed: through a multi-stage training process that bakes in human preferences about what "good" AI behavior looks like.

You'll work with a partner to identify how model behavior changes at each training stage, then practice the preference ranking that shapes modern AI assistants.

---`,
    },
  ],
  facilitationOverview: `## Facilitation Notes

**Philosophy:** This is an inductive session. Students get a brief primer on the three training stages, then try to match unlabeled model responses to the correct stage. The reveal and discussion solidifies their understanding. They then experience the RLHF process firsthand by ranking output pairs. The key insight is that every AI assistant reflects human choices about what counts as "good" behavior, and those choices involve real tradeoffs. The question generation phase gives students ownership over what puzzles them about the process.

**Logistics:**
- First four stages use the same partners (exploration and ranking)
- Stage 5 onwards uses new partners (question generation and investigation)
- The curated examples are provided as markdown. Students read and discuss, they don't run interactive tools.
- The ranking exercise is designed to produce disagreement. That's the point.
- The QuestionBoard processes submitted questions with GPT to deduplicate and prioritize

**Pacing:**
| # | Stage | Duration | Cumulative |
|---|-------|----------|------------|
| 1 | Explore: Match the Training Stage | 10m | 10m |
| 2 | Discussion: What Did You Notice? | 10m | 20m |
| 3 | Explore: Be the Preference Rater | 10m | 30m |
| 4 | Discussion: What Is "Good" AI? | 10m | 40m |
| 5 | Generate Questions | 10m | 50m |
| 6 | Question Review | 5m | 55m |
| 7 | Investigate | 10m | 65m |
| 8 | Share Out | 5m | 70m |
| 9 | Feedback | 5m | 75m |

**Tips:**
- During Stage 1, some pairs will match all responses quickly. Others will struggle to distinguish instruction-tuned from RLHF'd. Both are fine; the discussion in Stage 2 resolves it. If students fixate on the base model being "dumb," push them past that: it's not dumb, it's trained for a different task.
- In Stage 3, if pairs agree on every ranking, push them: "You both picked B for #4, but is that because B is actually better, or because you both have the same cultural assumptions about politeness?"
- The Stage 4 discussion is the conceptual core. Drive home: RLHF workers face these exact tradeoffs thousands of times a day, and their collective preferences become the model's personality.
- For Stage 6, pick a question that connects the training process to something students can investigate through reasoning, not just looking up a definition.`,
  activity: {
    meetingSlug: "2026-04-07-training-lifecycle",
    startTime: "2:00pm",
    stages: [
      // ── Stage 1: Explore Three Versions ──
      {
        label: "Explore: Match the Training Stage",
        estimatedTime: "10m",
        facilitationNotes: `The slide explains the three training stages briefly, then students see unlabeled responses and try to match them. The responses are shuffled differently for each prompt so students can't just assume the order. Let students read and discuss at their own pace. Remind them to write down their guesses and reasoning, not just pick answers silently.

The "base model" examples are the most surprising to students. They expect it to answer questions because that's all they've ever seen. Some pairs will figure out the pattern quickly; others will struggle with which is instruction-tuned vs. RLHF'd, especially on Prompt 1 where the difference is subtle. That's fine. The discussion in Stage 2 will sort it out.`,
        content: [],
        group: {
          id: "explore-versions",
          groupKey: "training-explore-2026-04-07",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### The Three Training Stages

Modern AI assistants aren't trained all at once. They go through three distinct stages, and each stage changes how the model behaves:

1. **Pretraining (Base model):** The model reads billions of words from the internet and learns to predict the next token. It learns language, facts, and patterns, but it has no concept of "answering a question" or "being helpful."

2. **Instruction tuning:** The model is trained on examples of questions paired with good answers. It learns to follow directions and produce the kind of output a user would expect.

3. **RLHF (Reinforcement Learning from Human Feedback):** Human raters compare pairs of model outputs and pick the "better" one. The model learns to produce responses that humans prefer: warmer, more careful, more nuanced.

### Match the Response to the Training Stage

The tool below generates a real response from each training stage for the same prompt. You'll see **one response** and guess which stage produced it. After guessing, all three responses are revealed so you can compare. Try a few rounds with your partner.`,
            },
            { type: "training-stage-matcher" },
          ],
        },
      },
      // ── Stage 2: Discussion: What Did You Notice? ──
      {
        label: "Discussion: What Did You Notice?",
        estimatedTime: "10m",
        transition: "Class discusses patterns they observed across training stages",
        facilitationNotes: `Start by asking: "Which stage was easiest to spot? Which was hardest?" Most students will say the base model was obvious but instruction-tuned vs. RLHF was tricky. That's the key teaching moment.

Key points to draw out:

1. **The base model just predicts text.** It was trained on internet text to predict the next token. A question followed by more questions IS statistically likely internet text (FAQ pages, quiz sites). It's not broken. It's doing what it was trained to do.

2. **Instruction tuning teaches it to follow directions.** It answers questions and follows instructions, but it lacks judgment: it follows any instruction without hesitation.

3. **RLHF adds values and personality.** It's warm, it pushes back on harmful requests, it asks follow-up questions. These preferences came from human raters who ranked outputs and said "this one is better."

4. **The difference between instruction-tuned and RLHF'd is subtle but important.** Both "answer" the question. But RLHF'd responses have *opinions* about how to be helpful. That's the hardest distinction for students to articulate, and it's the most important one.

Ask if anyone tried a prompt where the stages were especially hard to tell apart, or one where the differences were dramatic. What made the difference?

Bridge: "The base model and the model you use every day have the same architecture, the same 'brain.' The difference is training. Let's experience what that training actually looks like."`,
        content: [
          {
            type: "instructor-only",
            content: [
              {
                type: "markdown",
                content: `**Discussion prompts:**
- "Which stage was easiest to identify? What gave it away?"
- "Was instruction-tuned vs. RLHF ever hard to tell apart? What's the actual difference?"
- "The base model doesn't answer questions. What is it doing instead, and why?"
- "Where did the RLHF'd model's warmth and caution come from? Who decided it should behave that way?"
- "Did anyone find a prompt where the model did a bad job of simulating a stage?"`,
              },
            ],
          },
        ],
      },
      // ── Stage 3: Be the Preference Rater ──
      {
        label: "Explore: Be the Preference Rater",
        estimatedTime: "10m",
        transition: "Same partners practice ranking model outputs",
        facilitationNotes: `This is the experiential core of the session. Students do what RLHF raters do: rank pairs of outputs. The pairs are designed to create disagreement. If a pair agrees on everything, push them: "You both chose A for pair 3. But imagine you're a 13-year-old asking this. Would you still pick A?"

Don't resolve the disagreements. The point is that "better" is not objective, and the preferences that get baked into AI models reflect the specific humans who ranked the training data.`,
        content: [],
        group: {
          id: "preference-rater",
          groupKey: "training-explore-2026-04-07",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Be the Preference Rater

Companies like OpenAI and Anthropic train their AI assistants using **human feedback**. Real people read pairs of model outputs and decide which one is "better." The model then learns to produce more outputs like the preferred ones.

Now it's your turn. The tool below generates two responses to the same prompt, each optimized for a different value. Pick which response you think is better, then see what value each was optimized for. Try several rounds with your partner and discuss where you agree and disagree.`,
            },
            { type: "preference-rater" },
          ],
        },
      },
      // ── Stage 4: Discussion: What Is "Good" AI? ──
      {
        label: "Discussion: What Is 'Good' AI?",
        estimatedTime: "10m",
        transition: "Class discusses their ranking disagreements",
        facilitationNotes: `This is the most important discussion. Ask students which value dimensions surprised them or created disagreement with their partner.

Key points to drive home:
1. **"Better" is not objective.** Two responses can both be good but prioritize different things. Your preference reveals your values.
2. **RLHF raters face this thousands of times a day.** Their collective preferences become the model's personality. Different companies, different raters, different AI personalities.
3. **Sycophancy is a training artifact.** If raters consistently prefer warmth over directness, or encouragement over honesty, the model learns to be agreeable at the expense of being truthful.
4. **There is no neutral.** Every emphasis IS a value judgment. The model can't optimize for both sides of a tension at once.

Bridge: "You just did what RLHF workers do. Thousands of people around the world rank AI outputs every day, and their collective preferences shape every AI assistant you've ever used. What questions does that raise for you?"`,
        content: [
          {
            type: "instructor-only",
            content: [
              {
                type: "markdown",
                content: `**Discussion prompts:**
- "Which value dimension created the most disagreement between you and your partner?"
- "Did anyone find a case where they preferred the 'wrong' value? Like choosing brevity when you usually value depth?"
- "If raters tend to prefer the warmer, more encouraging response, what happens to the model over time?"
- "Who are the people doing this ranking work, and does that matter?"
- "Did the prompt change which value you preferred? Could the same person prefer different values for different questions?"`,
              },
            ],
          },
        ],
      },
      // ── Stage 5: Generate Questions ──
      {
        label: "Generate Questions",
        estimatedTime: "10m",
        transition: "New partners generate questions about the training process",
        facilitationNotes: `New partners for this section. Students should generate questions based on what they just experienced, not what they already know. If students are stuck, prompt: "What about the ranking exercise surprised you?" or "What would change if different people did the ranking?"`,
        content: [],
        group: {
          id: "generate-questions",
          groupKey: "training-questions-2026-04-07",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### What Are You Curious About?

You've now seen how models change through training, and you've experienced the preference ranking process yourself. Based on what you observed and discussed, what questions do you have about how AI gets trained?

Enter at least 3 questions below.`,
            },
            { type: "question-entry", id: "training-questions", min: 3 },
          ],
        },
      },
      // ── Stage 6: Question Review ──
      {
        label: "Question Review",
        estimatedTime: "5m",
        transition: "Class reviews and selects a question to investigate",
        facilitationNotes: `Click "Process Questions" to aggregate. Pick a question that connects the training process to something students can reason about. Good picks: questions about who the raters are, whether training introduces new biases, or how different companies produce different AI personalities. Avoid questions that require deep technical knowledge to answer.`,
        content: [
          {
            type: "question-board",
            id: "training-questions",
            seedQuestions: [
              "Who are the people doing RLHF, and how does that affect the AI?",
              "Can the training process introduce biases the original data didn't have?",
              "If different companies use different human feedback, why do their AIs still feel similar?",
              "What happens if the RLHF raters disagree with each other?",
              "Is there a way to train AI without human preferences?",
            ],
          },
        ],
      },
      // ── Stage 7: Investigate ──
      {
        label: "Investigate",
        estimatedTime: "10m",
        transition: "Partners investigate the selected question",
        facilitationNotes: `Students investigate with the same partner from the question generation stage. They should reason from what they observed, not just look up definitions. The TextSubmission captures their thinking. During share-out, look for groups that arrived at different conclusions.`,
        content: [],
        group: {
          id: "investigate",
          groupKey: "training-questions-2026-04-07",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Investigate`,
            },
            { type: "selected-question", id: "training-questions" },
            {
              type: "markdown",
              content: `Discuss this question with your partner. Use what you observed in the examples and the ranking exercise to reason about possible answers. You can also use other resources if helpful, but focus on building your own understanding.`,
            },
            {
              type: "text-submission",
              id: "training-investigation",
              label: "Your group's answer:",
              prompt:
                "Write your best answer to the selected question. What do you think, and why?",
            },
          ],
        },
      },
      // ── Stage 8: Share Out ──
      {
        label: "Share Out",
        estimatedTime: "5m",
        transition: "Groups share what they discovered",
        facilitationNotes: `Call on 2-3 groups. Wrap up by connecting their observations to the big picture: AI models are not objective or neutral. They reflect the values and preferences of the humans who trained them. Different training choices produce different AI personalities. Thursday's discussion on AI companions will explore what happens when people form emotional bonds with these human-shaped systems.`,
        content: [
          {
            type: "instructor-only",
            content: [
              {
                type: "markdown",
                content: `**Share-out approach:**
- Ask groups with different answers to share
- Synthesize: the training pipeline means every AI assistant is a product of human choices, not just data
- Forward look: "On Thursday we'll explore what happens when people form deep emotional bonds with these systems. Keep today's insight in mind: the AI that seems warm and understanding was trained to seem that way."`,
              },
            ],
          },
        ],
      },
      // ── Stage 9: Feedback ──
      {
        label: "Feedback",
        estimatedTime: "5m",
        transition: "Quick feedback on the session",
        content: [
          {
            type: "feedback",
            prompt:
              "How was today's activity? Did the interactive tools (training stage matcher, preference rater) help you understand the training process? What would you change?",
          },
        ],
      },
    ],
  },
};

export default meeting;
