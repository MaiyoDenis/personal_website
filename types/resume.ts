export interface ResumeExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type?: string;
  description?: string;
  bullets: string[];
  tech: string[];
  url?: string;
}

export interface ResumeProjectItem {
  title: string;
  category: string;
  tech: string[];
  description: string;
  bullets: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface ResumeEducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade?: string;
  details: string;
}

export interface ResumeSkillCategory {
  category: string;
  icon?: string;
  skills: string[];
}
