export type SkillCategory = "frontend" | "backend" | "ai" | "devops" | "tools";

export interface Skill {
  name: string;
  /** Proficiency percentage 0–100 */
  level: number;
  category: SkillCategory;
  /** Optional emoji icon */
  icon?: string;
  /** Years of experience */
  years?: number;
  /** Whether this is a standout/featured skill */
  featured?: boolean;
}

export interface SkillGroup {
  title: string;
  /** Emoji icon for the group */
  icon: string;
  /** Tailwind gradient class e.g. "from-cyan-500 to-blue-500" */
  color: string;
  /** RGBA glow color for hover effects */
  glow: string;
  /** Text color class for this group */
  textColor?: string;
  skills: string[];
}
