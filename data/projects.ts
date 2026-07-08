// data/projects.ts

export const projects = [
  {
    slug: "e-wifi-platform",
    title: "E-WiFi Platform",
    description:
      "A smart WiFi authentication and management platform with analytics, subscriptions, and payments.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/yourusername/e-wifi",
    demoUrl: "https://e-wifi.example.com",
  },
  {
    slug: "ai-learning-assistant",
    title: "AI Learning Assistant",
    description:
      "An AI-powered tutor for learning software engineering through interactive projects.",
    technologies: ["Python", "FastAPI", "OpenAI"],
    githubUrl: "https://github.com/yourusername/ai-learning-assistant",
    demoUrl: "https://ai-assistant.example.com",
  },
  {
    slug: "fantasy-league-automation",
    title: "Fantasy League Automation",
    description:
      "A complete platform for league registration, fixtures, scoring, and payments.",
    technologies: ["React", "Express", "MongoDB"],
    githubUrl: "https://github.com/yourusername/fantasy-league",
    demoUrl: "https://fantasy.example.com",
  },
] as const;