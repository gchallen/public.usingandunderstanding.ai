// Meeting definition types for typed TypeScript data files
// These replace MDX for meeting content, enabling compile-time validation
// and direct data access without AST parsing.

/**
 * Top-level meeting definition. Each meeting .ts file exports one of these as default.
 */
export interface MeetingDefinition {
  frontmatter: MeetingFrontmatter;
  intro: ContentBlock[];
  facilitationOverview?: string; // instructor-only markdown (pacing tables, tips, philosophy)
  activity?: ActivityDefinition;
  outro?: ContentBlock[];
}

export interface MeetingFrontmatter {
  date: string; // YYYY-MM-DD
  semester: string; // e.g. "spring2026"
  title: string;
  summary: string;
  hidden?: boolean;
  /**
   * Meetings this one refers back to, by slug.
   *
   * The course has a strong sequence and it was expressed only as prose inside
   * handouts -- "On Tuesday you used AI to analyze data" -- which is invisible
   * until an adopter prints it for a class that did not have Tuesday. Naming the
   * dependency lets the index show it, lets the generator check it resolves, and
   * lets someone reorder the semester and find out what they broke.
   */
  dependsOn?: string[];
}

/**
 * The ActivityStages block. Wraps all stage definitions and optionally
 * an outer group (for the scavenger-hunt pattern where GroupActivity wraps ActivityStages).
 */
export interface ActivityDefinition {
  meetingSlug: string;
  startTime?: string; // e.g. "2:05pm", "14:05"
  outerGroup?: GroupDefinition; // wraps entire activity (scavenger hunt pattern)
  instructorOnly?: boolean; // wrap entire activity in InstructorOnly
  stages: StageDefinition[];
}

/**
 * A single stage within an activity.
 */
export interface StageDefinition {
  label: string;
  estimatedTime?: string; // e.g. "10m", "1h30m"
  softCap?: string; // show "wrap up" hint after this
  hardCap?: string; // auto-advance after this
  countdown?: string; // countdown timer duration
  autoAdvance?: boolean;
  rotateRoles?: boolean;
  transition?: string; // short summary of what happens entering this stage
  wholeClass?: boolean; // override outerGroup — this stage is whole-class
  facilitationNotes?: string; // markdown, instructor-only
  content: ContentBlock[]; // content outside any group
  group?: GroupDefinition; // optional GroupActivity within the stage
}

/**
 * A GroupActivity definition. Used both as outerGroup on ActivityDefinition
 * and as group on StageDefinition.
 */
export interface GroupDefinition {
  id: string;
  groupKey: string; // maps to the `group` prop for partner rotation
  size?: number; // target group size (default: 2)
  roles?: Record<string, number | "*">; // e.g. { driver: 1, observer: "*" }
  overflow?: "random" | "expand";
  autoComplete?: boolean; // default: true
  content?: ContentBlock[]; // content inside the group (not used for outerGroup)
}

// ============================================================================
// Content blocks — discriminated union of all renderable elements
// ============================================================================

export type ContentBlock =
  // Prose
  | MarkdownBlock
  // Conditional visibility
  | InstructorOnlyBlock
  | StudentOnlyBlock
  | EnrolledOnlyBlock
  | LoggedInOnlyBlock
  // Role-based content
  | GroupRoleContentBlock
  // Submissions
  | TextSubmissionBlock
  | MediaSubmissionBlock
  | LinkSubmissionBlock
  | StrategyEntryBlock
  | QuestionEntryBlock
  // Boards / displays
  | TextSubmissionBoardBlock
  | MediaGalleryBlock
  | StrategyBoardBlock
  | StrategyResultsBlock
  | QuestionBoardBlock
  | SelectedQuestionBlock
  // Feedback
  | FeedbackBlock
  // Media
  | VideoPlayerBlock
  // Content references
  | ReadingLinkBlock
  | PreparationChatBlock
  | GroupChatBlock
  // Interactive components
  | LlmExplorerBlock
  | TemperatureCompareBlock
  | MarkovBabblerBlock
  | NeuronExplorerBlock
  | DigitNetworkBlock
  | TrainingSimulationBlock
  | EmbeddingExplorerBlock
  | TrainingStageMatcherBlock
  | PreferenceRaterBlock
  // Course-specific
  | ReplitPromoCodeBlock;

// --- Individual block types ---

export interface MarkdownBlock {
  type: "markdown";
  content: string;
}

export interface InstructorOnlyBlock {
  type: "instructor-only";
  content: ContentBlock[];
}

export interface StudentOnlyBlock {
  type: "student-only";
  content: ContentBlock[];
}

export interface EnrolledOnlyBlock {
  type: "enrolled-only";
  content: ContentBlock[];
}

export interface LoggedInOnlyBlock {
  type: "logged-in-only";
  content: ContentBlock[];
}

export interface GroupRoleContentBlock {
  type: "group-role-content";
  role: string;
  index?: number; // for matching by position (e.g. "partner" role with index 0 vs 1)
  content: ContentBlock[];
}

export interface TextSubmissionBlock {
  type: "text-submission";
  id: string;
  label?: string;
  prompt?: string; // placeholder text (was children in MDX)
  minLines?: number;
}

export interface TextSubmissionBoardBlock {
  type: "text-submission-board";
  id: string; // matches a TextSubmission id
}

export interface MediaSubmissionBlock {
  type: "media-submission";
  id: string;
  label?: string;
}

export interface MediaGalleryBlock {
  type: "media-gallery";
  submissionId: string; // matches a MediaSubmission id
}

/**
 * Link submission — student pastes a URL which is validated server-side
 * via a named validator strategy.
 *
 * Validator kinds:
 * - "basic": http(s) scheme + reachable (2xx/3xx). No metadata extracted.
 *   Shows an optional student-supplied title input in the form.
 * - "ai-share": runs "basic" first, then extracts conversation title, platform,
 *   message count, and model from a pasted transcript. Accepts Claude/ChatGPT/Gemini
 *   share URLs.
 */
export interface LinkSubmissionBlock {
  type: "link-submission";
  id: string;
  kind: "basic" | "ai-share";
  label?: string;
}

export interface StrategyEntryBlock {
  type: "strategy-entry";
  id: string;
}

export interface StrategyBoardBlock {
  type: "strategy-board";
  id: string;
}

export interface StrategyResultsBlock {
  type: "strategy-results";
  id: string;
}

export interface QuestionEntryBlock {
  type: "question-entry";
  id: string;
  min?: number;
  max?: number;
}

export interface QuestionBoardBlock {
  type: "question-board";
  id: string;
  seedQuestions?: string[];
  select?: "single" | "multiple";
}

export interface SelectedQuestionBlock {
  type: "selected-question";
  id: string;
  select?: "single" | "multiple";
}

export interface FeedbackBlock {
  type: "feedback";
  prompt?: string;
}

export interface VideoPlayerBlock {
  type: "video-player";
  src: string;
  ariaLabel?: string;
  caption?: string;
}

export interface ReadingLinkBlock {
  type: "reading-link";
  slug: string;
  newTab?: boolean;
}

export interface PreparationChatBlock {
  type: "preparation-chat";
  slug: string;
}

export interface LlmExplorerBlock {
  type: "llm-explorer";
}

export interface TemperatureCompareBlock {
  type: "temperature-compare";
}

export interface MarkovBabblerBlock {
  type: "markov-babbler";
  texts?: Record<string, string>;
}

export interface NeuronExplorerBlock {
  type: "neuron-explorer";
}

export interface DigitNetworkBlock {
  type: "digit-network";
}

export interface TrainingSimulationBlock {
  type: "training-simulation";
}

export interface EmbeddingExplorerBlock {
  type: "embedding-explorer";
}

export interface TrainingStageMatcherBlock {
  type: "training-stage-matcher";
  prompts?: string[];
}

export interface PreferenceRaterBlock {
  type: "preference-rater";
  prompts?: string[];
}

export interface GroupChatBlock {
  type: "group-chat";
  slug: string;
}

/**
 * Displays the Replit promo code (sourced from process.env.REPLIT_PROMO_CODE).
 * Server-rendered only; the value never crosses into client bundles. Wrap in
 * an `enrolled-only` or `logged-in-only` block to gate visibility — this block
 * itself does no access control.
 */
export interface ReplitPromoCodeBlock {
  type: "replit-promo-code";
}

// ============================================================================
// Validation result types
// ============================================================================

export interface MeetingValidationResult {
  valid: boolean;
  errors: MeetingValidationError[];
  warnings: MeetingValidationWarning[];
}

export interface MeetingValidationError {
  type: "orphaned-reference" | "missing-source" | "duplicate-id" | "invalid-structure";
  message: string;
  blockType?: string;
  id?: string;
}

export interface MeetingValidationWarning {
  type: "long-duration" | "missing-facilitation-notes" | "unused-submission";
  message: string;
}
