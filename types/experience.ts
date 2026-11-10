export interface JourneyStep {
  /** Year or year range e.g. "2023" or "2023–2024" */
  year: string;
  title: string;
  /** Company or context e.g. "Freelance", "Self-Taught" */
  company?: string;
  description: string;
  /** Technology tags */
  tags: string[];
  /** Emoji icon for this step */
  icon: string;
  /** Whether this is the current/active step */
  current?: boolean;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
  logo?: string;
  current?: boolean;
}
