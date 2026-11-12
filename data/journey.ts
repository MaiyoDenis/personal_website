export interface TimelineMilestone {
  year: string;
  badgeEmoji: string;
  title: string;
  description: string;
  tags: string[];
  spineIcon: "grad" | "code" | "chip" | "shield";
}

export const journeyTimeline: TimelineMilestone[] = [
  {
    year: "2021+",
    badgeEmoji: "🚀",
    title: "Freshman: Cyber & Foundation",
    description:
      "Started my journey with a passion for technology, building a strong foundation in computer studies and exploring the world of software development.",
    tags: ["Python", "Computer Basics", "Problem Solving", "Tech Curiosity"],
    spineIcon: "grad",
  },
  {
    year: "2022+",
    badgeEmoji: "⚡",
    title: "Full-Stack Development",
    description:
      "Deepened my skills in web development with modern technologies like React, Next.js and Node.js, building dynamic and scalable applications.",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind"],
    spineIcon: "code",
  },
  {
    year: "2024+",
    badgeEmoji: "💻",
    title: "AI & Real-World Solutions",
    description:
      "Explored Artificial Intelligence and data-driven solutions, working on projects that solve real problems in Kenya and beyond.",
    tags: ["AI/ML", "Python", "Data Science", "Automation"],
    spineIcon: "chip",
  },
  {
    year: "2025+",
    badgeEmoji: "🔒",
    title: "Security & Scalable Systems",
    description:
      "Gained hands-on experience in cybersecurity and system design, focusing on secure, scalable and high-performance systems.",
    tags: ["Cyber Security", "System Design", "Scalability", "DevOps"],
    spineIcon: "shield",
  },
];
