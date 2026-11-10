import { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  emoji: string;
  icon: LucideIcon;
  description: string;
  tech: string[];
  status: string;
  statusColor: string;
  color: string;
  glow: string;
  github: string;
  demo: string;
  metrics: string[];
}

export interface Skill {
  name: string;
  level: number; // percentage
  category: "frontend" | "backend" | "devops" | "ai" | "tools";
}

export interface JourneyStep {
  year: string;
  title: string;
  company: string;
  description: string;
  current?: boolean;
}

export interface NavItem {
  name: string;
  href: string;
}
