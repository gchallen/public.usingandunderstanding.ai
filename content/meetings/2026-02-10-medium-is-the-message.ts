import type { MeetingDefinition } from "../types";

const meeting: MeetingDefinition = {
  frontmatter: {
    date: "2026-02-10",
    semester: "spring2026",
    title: "The Medium is the Message",
    summary:
      "Professor Zach Biondi leads a discussion of McLuhan's 'The Medium is the Message' — what 1960s media theory reveals about our relationship with AI",
  },
  intro: [
    {
      type: "markdown",
      content: `# The Medium is the Message

[Professor Zach Biondi](https://philosophy.illinois.edu/directory/profile/zbiondi) from the Illinois Department of Philosophy will lead today's discussion of Marshall McLuhan's "The Medium is the Message."

Please complete the reading before class:`,
    },
    { type: "reading-link", slug: "understanding-media-ch1", newTab: true },
    {
      type: "markdown",
      content: `Also, please review the pamphlet on Luddism that you received in class.

This will be a device-free meeting.
You do not need to bring a laptop, and please put your phone away during the discussion.`,
    },
    { type: "preparation-chat", slug: "understanding-media-ch1" },
  ],
};

export default meeting;
