export type ProjectStatus = "Live" | "Active" | "Completed" | "Building" | "Archived";

export interface Project {
  slug: string;
  title: string;
  emoji: string;
  problem: string;
  description: string;
  longDescription: string;
  role?: string;
  technologies: string[];
  tech: string[];
  status: ProjectStatus;
  statusColor: string;
  color: string;
  glow: string;
  github: string;
  githubUrl: string;
  demo?: string;
  demoUrl?: string;
  metrics: string[];
  featured?: boolean;
  /** Path relative to /public — e.g. "/images/projects/foo.jpg" */
  screenshot?: string;
  /** Second screenshot shown on hover */
  screenshotHover?: string;
}
