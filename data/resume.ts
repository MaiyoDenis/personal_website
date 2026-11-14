import {
  ResumeEducationItem,
  ResumeExperienceItem,
  ResumeProjectItem,
  ResumeSkillCategory,
} from "@/types/resume";

export const resumePersonal = {
  fullName: "Denis Kipchirchir Maiyo",
  shortName: "Denis Maiyo",
  title: "Software Engineer & Full-Stack Developer",
  subTitle: "FinTech Systems • Data Engineering • Web Applications",
  location: "Eldoret, Kenya",
  phone: "+254 724 650 951",
  email: "denismaiyo14@gmail.com",
  github: "https://github.com/MaiyoDenis",
  githubHandle: "github.com/MaiyoDenis",
  linkedin: "https://linkedin.com/in/MaiyoDenis",
  linkedinHandle: "linkedin.com/in/MaiyoDenis",
  portfolio: "https://denismaiyo.dev",
  summary:
    "Software Engineer and Full-Stack Developer with practical experience designing, developing, deploying, and supporting production business applications in real-world environments. Specialized in building mission-critical FinTech platforms and Loan Management Systems using Python (Flask), React, TypeScript, Node.js, and PostgreSQL. Demonstrated record in solving complex data inconsistencies (including resolving a 2.7M KES legacy balance discrepancy), architecting multi-tenant database schemas, and digitizing lending operations with automated M-Pesa collections.",
};

export const resumeExperiences: ResumeExperienceItem[] = [
  {
    company: "AssetMind Solution",
    role: "Software Developer",
    period: "June 2026 – Present",
    location: "Eldoret, Kenya",
    type: "Production FinTech",
    url: "https://assetmindsolution.com",
    bullets: [
      "Architected and engineered a production-grade, multi-tenant Loan Management System (LMS) commissioned to replace an end-of-life legacy system for commercial lending.",
      "Spearheaded legacy data migration and database restructuring, uncovering and successfully resolving a 2.7M KES balance discrepancy caused by prior logic flaws.",
      "Designed relational schemas with primary and secondary borrower identification, enforcing row-level multi-tenant isolation and strict data integrity.",
      "Developed full-stack features across React and Flask, implementing automated interest calculations, loan disbursement pipelines, and M-Pesa Daraja callback listeners.",
      "Partnered directly with business stakeholders and branch managers to translate intricate lending policies into intuitive software workflows with zero post-migration downtime.",
    ],
    tech: ["Python", "Flask", "React", "PostgreSQL", "SQLAlchemy", "REST APIs", "M-Pesa API"],
  },
  {
    company: "Barani Smart Limited",
    role: "IT Specialist & Software Developer",
    period: "February 2025 – August 2026",
    location: "Eldoret, Kenya",
    type: "Full-Stack Development & IT",
    url: "https://baranismart.co.ke",
    bullets: [
      "Advanced from IT support to lead software developer; identified critical operational bottlenecks in manual loan processing and designed the Barani Smart LMS from scratch.",
      "Built a full-stack web application managing the entire credit lifecycle: customer KYC, loan origination, repayment schedules, and arrears tracking.",
      "Integrated real-time M-Pesa C2B and STK-Push automated payment reconciliation, cutting manual reconciliation time by over 80%.",
      "Engineered a 4-tier Role-Based Access Control (RBAC) system safeguarding sensitive financial data across credit officers, branch managers, and administrators.",
      "Provided continuous IT infrastructure support, hardware/software troubleshooting, and database maintenance ensuring 99.9% uptime during daily operations.",
    ],
    tech: ["React", "Python", "Flask", "PostgreSQL", "SQLAlchemy", "REST APIs", "Network Administration"],
  },
  {
    company: "Tendwo Centre Cyber Café",
    role: "Founder & Lead Operator",
    period: "2023",
    location: "Tendwo, Kenya",
    type: "Business Operations & IT",
    bullets: [
      "Founded and operated a technology hub providing digital services, online government portal submissions, and IT support to community members.",
      "Delivered hands-on hardware diagnostics, OS installation, network troubleshooting, and computer maintenance across multiple client workstations.",
      "Managed all financial bookkeeping, customer relations, and daily operations, establishing foundational problem-solving and entrepreneurial discipline.",
    ],
    tech: ["Hardware Troubleshooting", "Operating Systems", "Networking", "Customer Support", "Business Operations"],
  },
];

export const resumeProjects: ResumeProjectItem[] = [
  {
    title: "AssetMind Solution — Loan Management System",
    category: "FinTech Platform",
    tech: ["React", "Python", "Flask", "PostgreSQL", "SQLAlchemy", "M-Pesa API"],
    description: "Production loan management platform replacing an existing legacy solution.",
    bullets: [
      "Engineered full-stack lending operations platform handling customer onboarding, disbursement, and automated repayment tracking.",
      "Conducted extensive data auditing and cleaning to resolve historical ledger inaccuracies and migrate legacy records with zero data loss.",
    ],
    demoUrl: "https://assetmindsolution.com",
    githubUrl: "https://github.com/MaiyoDenis",
  },
  {
    title: "Barani Smart — Loan Management System",
    category: "SaaS & Lending Platform",
    tech: ["React", "Python", "Flask", "PostgreSQL", "REST APIs", "M-Pesa API"],
    description: "Full-stack loan management system to digitize microfinance and credit operations.",
    bullets: [
      "Built complete customer KYC, loan origination, and automated repayment schedule engines.",
      "Integrated encrypted M-Pesa Daraja STK Push and C2B payment callbacks for instant transaction confirmation.",
    ],
    demoUrl: "https://baranismart.co.ke",
    githubUrl: "https://github.com/MaiyoDenis",
  },
  {
    title: "FAGASA — Loan Management System",
    category: "Microfinance Management",
    tech: ["React", "Vite", "React Router", "Python", "Flask", "SQLAlchemy"],
    description: "Web-based microfinance management platform for commercial and emergency loan operations.",
    bullets: [
      "Implemented loan simulation engines, dynamic approvals, and automated installment schedules.",
      "Built real-time dashboards tracking Portfolio at Risk (PAR) aging and branch capital allocation.",
    ],
    demoUrl: "https://fagasa.co.ke",
    githubUrl: "https://github.com/MaiyoDenis",
  },
  {
    title: "Payment Reconciliation & Auditing Tool",
    category: "Data Engineering & Auditing",
    tech: ["Python", "PostgreSQL", "SQL", "Data Analysis"],
    description: "Automated reconciliation pipeline comparing financial records and catching discrepancies.",
    bullets: [
      "Applied complex SQL queries and algorithmic diffing to identify payment discrepancies between mobile money statements and internal ledgers.",
      "Automated audit reporting, reducing discrepancy investigation turnaround from days to minutes.",
    ],
    githubUrl: "https://github.com/MaiyoDenis",
  },
  {
    title: "AI Threat Detection Prototype",
    category: "Security & Machine Learning",
    tech: ["Python", "Machine Learning", "Docker", "Anomaly Detection"],
    description: "Intelligent anomaly detection prototype for identifying suspicious authentication behavior.",
    bullets: [
      "Applied machine learning anomaly-detection concepts to flag suspicious login attempts and anomalous session patterns.",
      "Packaged the solution for reproducible containerized deployment using Docker.",
    ],
    githubUrl: "https://github.com/MaiyoDenis",
  },
];

export const resumeEducation: ResumeEducationItem[] = [
  {
    institution: "Zetech University",
    degree: "Bachelor of Science in Computer Science",
    period: "Ongoing | Expected May 2028",
    location: "Kenya",
    details:
      "Core focus areas: Software Development, Data Structures & Algorithms, Data Science, Data Analytics, Database Systems, Computer Networking, Cybersecurity, Cloud Computing, and Artificial Intelligence.",
  },
  {
    institution: "Moringa School",
    degree: "Software Engineering / Software Development",
    period: "January 2024 – December 2024",
    location: "Nairobi, Kenya",
    details:
      "Intensive practical software engineering training covering modern web development, algorithms, backend architecture, relational databases, and agile software development lifecycle.",
  },
  {
    institution: "Arnesen's High School",
    degree: "Kenya Certificate of Secondary Education (KCSE)",
    period: "Completed",
    location: "Kenya",
    grade: "Grade: B-",
    details: "Strong academic record with emphasis on mathematics and sciences.",
  },
];

export const resumeSkills: ResumeSkillCategory[] = [
  {
    category: "Languages & Core",
    icon: "💻",
    skills: ["Python", "TypeScript", "JavaScript (ES6+)", "SQL", "Bash", "HTML5", "CSS3"],
  },
  {
    category: "Frontend Engineering",
    icon: "⚡",
    skills: ["React.js", "Next.js", "Vite", "Tailwind CSS", "React Router", "TanStack Query", "Responsive UI"],
  },
  {
    category: "Backend & APIs",
    icon: "⚙️",
    skills: ["Flask", "Node.js", "Express.js", "SQLAlchemy", "RESTful APIs", "M-Pesa Daraja API", "JWT & RBAC"],
  },
  {
    category: "Databases & Data Engineering",
    icon: "🗄️",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Schema Design", "Data Migration", "Data Cleaning", "Financial Auditing"],
  },
  {
    category: "DevOps & Cloud Tools",
    icon: "☁️",
    skills: ["Git & GitHub", "Docker", "Linux / Ubuntu", "GitHub Actions CI/CD", "AWS Fundamentals", "VS Code"],
  },
  {
    category: "Security & AI",
    icon: "🛡️",
    skills: ["OWASP Principles", "Secure Coding", "Wireshark", "Nmap", "OpenAI API", "Anomaly Detection Concepts"],
  },
];

export const verifiedDeployments = [
  { name: "Barani Smart LMS", url: "https://baranismart.co.ke/" },
  { name: "AssetMind Solution", url: "https://assetmindsolution.com/" },
  { name: "FAGASA Microfinance", url: "https://fagasa.co.ke/" },
];
