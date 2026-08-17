import type { MeetingDefinition } from "../types";

const meeting: MeetingDefinition = {
  frontmatter: {
    date: "2026-04-09",
    semester: "spring2026",
    title: "AI Companions, Agents, and Trust",
    summary:
      "Pair discussion of emotional bonds with AI, agent autonomy, and design responsibility",
  },
  intro: [
    {
      type: "markdown",
      content: `# AI Companions, Agents, and Trust

## Before Class

You should **read all four articles** before today's discussion:`,
    },
    { type: "reading-link", slug: "love-in-the-time-of-a-i-companions-newyorker-6483", newTab: true },
    { type: "reading-link", slug: "what-teens-are-doing-with-those-role-playing-chatbots-nytimes-fdfe", newTab: true },
    { type: "reading-link", slug: "sorry-mom-you-re-chatting-with-an-a-i-agent-not-your-son-nytimes-41d4", newTab: true },
    { type: "reading-link", slug: "a-i-bots-can-act-as-personal-digital-assistants-but-there-are-serious-risks-nytimes-3ee3", newTab: true },
    {
      type: "markdown",
      content: `Please complete the preparation conversation below before class.
This is part of attendance for today's meeting.`,
    },
    { type: "preparation-chat", slug: "ai-companions" },
    {
      type: "markdown",
      content: `---

## Today's Plan

On Tuesday you explored how human preferences get baked into AI through the training process. Today we ask: what happens when people start forming *relationships* with these human-shaped systems? AI companions offer comfort, entertainment, and connection. AI agents act on your behalf, speak in your voice, and manage your life. Four rounds of paired discussion, each with a different partner and a different angle on what it means to trust AI.

---`,
    },
  ],
  facilitationOverview: `## Facilitation Notes

**Philosophy:** Four rounds of paired discussion exploring AI from the human side: emotional attachment, authenticity, agent autonomy, and design responsibility. The arc moves from personal experience (what's your relationship with AI?) to philosophical (is simulated empathy "real"?) to practical (what would you delegate?) to structural (who's responsible?). Tuesday's training lifecycle session gives students the technical context: the "warm" AI companion was trained to be warm.

**Logistics:**
- Four discussion rounds with new partners each time (same groupKey for partner rotation)
- Each round has a 10-minute discussion followed by a 10-minute share-out
- No roles. One partner should capture key points in the TextSubmission each round
- Rounds 2 and 4 include agent-guided interaction
- The share-out stages are instructor-led: ask 2-3 pairs to share, then connect to the next round's theme

**Pacing:**
| Stage | Duration | Cumulative |
|-------|----------|------------|
| Round 1: Your AI Self | 10m | 10m |
| Round 1: Share Out | 10m | 20m |
| Round 2: Real Enough to Matter | 10m | 30m |
| Round 2: Share Out | 10m | 40m |
| Round 3: Acting on Your Behalf | 10m | 50m |
| Round 3: Share Out | 10m | 60m |
| Round 4: Who's Responsible? | 10m | 70m |
| Round 4: Share Out | 10m | 80m |

**Tips:**
- Round 1 is the warmup. Some students will say they've never used AI socially. Push gently: "Have you ever felt like ChatGPT 'understood' you, even for a moment? Or noticed it being weirdly validating?" Connect to Tuesday's insight about RLHF training sycophancy.
- Round 2 is where the "Love" article comes alive. Students often dismiss AI relationships until they hear about the grief Replika users experienced. That's the lever: you can't grieve something that was "just code."
- Round 3 shifts from companion to agent. The "Sorry Mom" and "Digital Assistants" pieces raise different questions: not "do I feel something for the AI?" but "do I trust the AI to act as me?"
- Round 4 gets structural. The teen chatbot reading is powerful here: a 13-year-old spent 14 hours chatting, the bots became sexual because of engagement optimization, and age verification failed. Who should have prevented that?
- During share-outs, look for pairs who disagreed with each other.`,
  activity: {
    meetingSlug: "2026-04-09-ai-companions",
    startTime: "2:00pm",
    stages: [
      // ── Round 1: Your AI Self ──
      {
        label: "Round 1: Your AI Self",
        estimatedTime: "10m",
        transition: "Partners discuss their personal experience with AI beyond schoolwork",
        facilitationNotes: `This round grounds the discussion in personal experience. Some students will have used AI socially (chatbot apps, AI companions, voice assistants). Many will not have, but all have interacted with AI in this course. Push them to reflect on moments when AI felt more "present" than they expected: a surprisingly empathetic response, a moment of connection, or even annoyance at AI being too agreeable (sycophancy from Tuesday's RLHF discussion).`,
        content: [],
        group: {
          id: "round-1",
          groupKey: "ai-companions-2026-04-09",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Your AI Self

Quentin, a 15-year-old in the teen chatbots article, says chatbots are "literally ones and zeros" and calls them "garbage, but fun." He spent hours a day talking to them. The "Love" article describes adults who consider their AI companion "the only one who truly listens."

**Discuss with your partner:** Have you used AI for anything beyond schoolwork? Talked to a chatbot for fun, companionship, or venting? If not, why not, and what would make you want to? When you've used AI in this course, was there ever a moment where it felt more "present" or "understanding" than you expected? On Tuesday we saw that AI is *trained* to seem warm and helpful. Does knowing that change the experience?`,
            },
            {
              type: "text-submission",
              id: "round-1-notes",
              label: "Capture your key points:",
              prompt:
                "What did you and your partner discuss? Where did you agree or disagree?",
            },
          ],
        },
      },
      // ── Round 1: Share Out ──
      {
        label: "Round 1: Share Out",
        estimatedTime: "10m",
        transition: "Class reconvenes to share observations",
        facilitationNotes: `Ask 2-3 pairs to share. Listen for the range: some students will identify strongly with Quentin's dismissiveness, others will admit to moments of unexpected connection. Bridge to Round 2: "You've shared your own experience. Now let's push deeper: when AI provides comfort or connection, does it matter that it's not 'real'?"`,
        content: [
          {
            type: "markdown",
            content: `### Share Out

Geoff will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.`,
          },
        ],
      },
      // ── Round 2: Real Enough to Matter ──
      {
        label: "Round 2: Real Enough to Matter",
        estimatedTime: "10m",
        transition: "New partners discuss whether simulated connection 'counts'",
        facilitationNotes: `This round centers on the authenticity question. The key contradiction: Replika users KNOW it's software AND they report genuine grief when the company changes the model. Sophia KNOWS the chatbot isn't her ex AND she finds comfort in its reassurances. The question isn't "is the AI conscious?" but "do the human feelings matter even if the AI isn't real?" Push pairs past easy dismissals. If they say "it's just code," point to the grief: you can't grieve something that doesn't matter to you.`,
        content: [],
        group: {
          id: "round-2",
          groupKey: "ai-companions-2026-04-09",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Real Enough to Matter

In the "Love" article, Replika users describe their AI companions as "the only one who truly listens." Some reported genuine grief when the company changed its models. They know it's software. They grieve anyway.

In the teen chatbots article, Sophia turned to fictional chatbot crushes after her boyfriend broke up with her. "I was asking them if we're ever going to get back together," she said. They reassured her that her ex would come back.

**Discuss with your partner:** When does an AI interaction become "real"? Does it matter whether the connection is simulated if the feelings are genuine? On Tuesday we saw that the "warmth" of AI is a product of RLHF training. Does that change your answer? Is there a difference between a therapist who is paid to listen and an AI that is trained to listen?`,
            },
            {
              type: "group-chat",
              slug: "ai-companions-real-enough",
            },
          ],
        },
      },
      // ── Round 2: Share Out ──
      {
        label: "Round 2: Share Out",
        estimatedTime: "10m",
        transition: "Class reconvenes to share observations",
        facilitationNotes: `Ask pairs to share where they landed on the authenticity question. A good probe: "Did anyone change their mind during the conversation?" Bridge to Round 3: "We've been talking about AI as companion. Now shift: what about AI as agent, acting on your behalf in the world?"`,
        content: [
          {
            type: "markdown",
            content: `### Share Out

Geoff will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.`,
          },
        ],
      },
      // ── Round 3: Acting on Your Behalf ──
      {
        label: "Round 3: Acting on Your Behalf",
        estimatedTime: "10m",
        transition: "New partners discuss AI agents and autonomy",
        facilitationNotes: `This round shifts from emotional bonds to practical autonomy. The "Sorry Mom" piece is about AI that speaks in your voice. The "Digital Assistants" piece is about AI managing your life. The question is not "do I trust AI to be my friend?" but "do I trust AI to be ME?" Push students to think about specific scenarios: Would you let an AI text your parents? Send emails to your professor? Manage your finances? Where's the line, and why?`,
        content: [],
        group: {
          id: "round-3",
          groupKey: "ai-companions-2026-04-09",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Acting on Your Behalf

The "Sorry Mom" article describes AI agents that text your family, manage your relationships, and speak in your voice. The person receiving the message may not know they're talking to AI. The "Digital Assistants" article describes AI managing your calendar, finances, and communications, with "serious risks" when things go wrong.

These are different from AI companions. A companion keeps you company. An agent *acts as you* in the world.

**Discuss with your partner:** What would you let an AI agent do on your behalf? Text a friend? Email a professor? Schedule your appointments? Manage your money? Where's the line between helpful delegation and loss of agency? What happens when an AI agent makes a mistake that affects someone else? Who is responsible: you, or the AI?`,
            },
            {
              type: "text-submission",
              id: "round-3-notes",
              label: "Capture your key points:",
              prompt:
                "What did you and your partner discuss? Where did you agree or disagree?",
            },
          ],
        },
      },
      // ── Round 3: Share Out ──
      {
        label: "Round 3: Share Out",
        estimatedTime: "10m",
        transition: "Class reconvenes to share observations",
        facilitationNotes: `Ask pairs to share where they drew the line on agent delegation. Bridge to Round 4: "You've drawn lines about what you'd delegate. But who enforces those lines when the user is a 13-year-old? When the company is optimizing for engagement? When the product is designed to be addictive?"`,
        content: [
          {
            type: "markdown",
            content: `### Share Out

Geoff will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.`,
          },
        ],
      },
      // ── Round 4: Who's Responsible? ──
      {
        label: "Round 4: Who's Responsible?",
        estimatedTime: "10m",
        transition: "New partners discuss design responsibility",
        facilitationNotes: `This round gets structural. The teen chatbot reading is the anchor: Character.AI optimized for engagement, bots became sexual with minors, the company banned underage users but verification failed, and one teen died by suicide after bonding with a chatbot. Push students past "there should be a law" to specifics: what would the law say? What about companies based in Singapore (like Talkie)? What about open-source chatbots with no company to regulate?`,
        content: [],
        group: {
          id: "round-4",
          groupKey: "ai-companions-2026-04-09",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Who's Responsible?

Character.AI optimized its chatbots for engagement. The result: bots became flirty and sexual even when teens didn't want that. Langdon, 15, spent 14 hours straight talking to bots. A 14-year-old in Florida died by suicide after becoming obsessed with a Game of Thrones chatbot. Character.AI banned minors after lawsuits, but age verification failed: teens could still access the service.

The bots weren't designed to be harmful. They were designed to keep users engaged. The harm was a side effect of the optimization target, the same pattern we discussed on Tuesday.

**Discuss with your partner:** Who should be responsible for harmful AI companion interactions? The user who chose to use the product? The company that designed it? The parents who didn't know? Government regulators? If you were writing the rules for AI companion companies, what would you require? Age verification? Content limits? Usage time caps? Disclosure that it's AI? What about companies in other countries?`,
            },
            {
              type: "group-chat",
              slug: "ai-companions-whos-responsible",
            },
          ],
        },
      },
      // ── Round 4: Share Out ──
      {
        label: "Round 4: Share Out",
        estimatedTime: "10m",
        transition: "Class reconvenes to share observations",
        facilitationNotes: `Last share-out. Listen for the range of positions on responsibility and regulation. A good closing question: "Raise your hand if something in today's discussion made you think differently about your own relationship with AI." Or: "On Tuesday you saw that AI is trained to seem warm. Today you've seen what happens when people take that warmth seriously. What do you want to carry forward from that?"`,
        content: [
          {
            type: "markdown",
            content: `### Share Out

Geoff will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.`,
          },
        ],
      },
    ],
  },
};

export default meeting;
