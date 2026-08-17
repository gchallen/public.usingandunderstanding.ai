import type { MeetingDefinition } from "../types";

const meeting: MeetingDefinition = {
  frontmatter: {
    date: "2026-02-05",
    semester: "spring2026",
    title: "Creative Media Lab",
    summary:
      "Creating images, video, and music with AI tools — and comparing what different people get from the same concept",
  },
  intro: [
    {
      type: "markdown",
      content: `# Creative Media Lab

## Today's Plan
Today you'll create images, video, and music using AI tools. For each round, you'll pair up, agree on a concept, then each create something independently.

---`,
    },
  ],
  facilitationOverview: `## Facilitation Notes
**Philosophy:** Three rounds of creative AI use. Partners agree on a concept, work independently, then compare results.
**Logistics:**
- Each round pairs students with a *new* partner (3 GroupActivity blocks with the same group key)
- Students need devices that can access AI tools
- Gallery stages are instructor-led
**AI Tool Suggestions (verify before class):**
- **Images:** Google Gemini best free option. ChatGPT/DALL-E limits free users. Microsoft Copilot may be restrictive on .edu.
- **Video:** Pika is only viable free option. Runway gives tiny one-time trial.
- **Music:** Suno clear winner (~10 songs/day). Udio more limited (3 songs/day).`,
  activity: {
    meetingSlug: "2026-02-05-creative-media",
    startTime: "2:05pm",
    stages: [
      {
        label: "Create Images",
        estimatedTime: "15m",
        transition: "Partners agree on a concept, then create images independently",
        facilitationNotes: `Students pair up and agree on a concept for an image, then each generate one independently.`,
        content: [],
        group: {
          id: "images",
          groupKey: "creative-media",
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Round 1: Images
1. **Agree on a concept** with your partner
2. **Work independently** — use AI image tool. Good free options: Google Gemini, ChatGPT, or Microsoft Copilot
3. **Compare results**
4. **Submit your best creation**`,
            },
            {
              type: "media-submission",
              id: "creative-media-images",
              label: "Your best AI-generated image:",
            },
          ],
        },
      },
      {
        label: "Image Gallery",
        estimatedTime: "5m",
        transition: "Class reviews submitted images together",
        facilitationNotes: `Project the gallery. Highlight pairs that got very different results from the same concept.`,
        content: [
          {
            type: "markdown",
            content: `### Class Gallery: Images`,
          },
          { type: "media-gallery", submissionId: "creative-media-images" },
        ],
      },
      {
        label: "Create Video",
        estimatedTime: "15m",
        transition: "New partners; agree on a concept and create video",
        facilitationNotes: `New partners. Pika is the only reliably free video tool.`,
        content: [],
        group: {
          id: "video",
          groupKey: "creative-media",
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Round 2: Video
1. **Agree on a concept** with your new partner
2. **Work independently** — Pika is the best free option
3. **Compare results**
4. **Submit your creation** (paste the URL)`,
            },
            {
              type: "media-submission",
              id: "creative-media-video",
              label: "Your AI-generated video:",
            },
          ],
        },
      },
      {
        label: "Video Gallery",
        estimatedTime: "5m",
        transition: "Class reviews submitted videos together",
        facilitationNotes: `Project the gallery. Video URLs won't preview inline.`,
        content: [
          {
            type: "markdown",
            content: `### Class Gallery: Video`,
          },
          { type: "media-gallery", submissionId: "creative-media-video" },
        ],
      },
      {
        label: "Create Music",
        estimatedTime: "15m",
        transition: "New partners; agree on a concept and create music",
        facilitationNotes: `New partners again. Music tools like Suno and Udio generate full songs from text.`,
        content: [],
        group: {
          id: "music",
          groupKey: "creative-media",
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Round 3: Music
1. **Agree on a concept** with your new partner
2. **Work independently** — Suno best free option. Udio also works.
3. **Compare results**
4. **Submit your creation** (paste URL)`,
            },
            {
              type: "media-submission",
              id: "creative-media-music",
              label: "Your AI-generated music:",
            },
          ],
        },
      },
      {
        label: "Music Gallery",
        estimatedTime: "5m",
        transition: "Class reviews submitted music together",
        facilitationNotes: `Project the gallery and play a few submissions.`,
        content: [
          {
            type: "markdown",
            content: `### Class Gallery: Music`,
          },
          { type: "media-gallery", submissionId: "creative-media-music" },
        ],
      },
      {
        label: "Discussion",
        estimatedTime: "20m",
        transition: "Class reconvenes for closing discussion",
        facilitationNotes: `Open discussion. Let students react first, then guide toward deeper questions.`,
        content: [
          {
            type: "markdown",
            content: `### Closing Discussion
Now that you've used AI to create across three different media, let's reflect:
- **Creative control:** Which medium gave you the most control? The least?
- **Surprises:** Did the AI ever produce something better than what you imagined?
- **Same concept, different output:** What caused the differences?
- **Human creators:** What happens to human artists, musicians, and filmmakers?
- **Energy cost:** How much energy do you think that consumed?`,
          },
        ],
      },
      // ── Feedback ──
      {
        label: "Feedback",
        estimatedTime: "5m",
        transition: "Quick feedback on today's creative lab",
        content: [
          {
            type: "feedback",
            prompt:
              "How did making something with AI compare to what you expected? Was the tool doing the creative work, or were you? What would you want more time for?",
          },
        ],
      },
    ],
  },
};

export default meeting;
