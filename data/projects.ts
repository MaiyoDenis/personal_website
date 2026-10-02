// data/projects.ts

export const projects = [
  {
    slug: "assethub-loans",
    title: "AssetHub Loans & Asset Recovery System",
    description:
      "A comprehensive, full-stack web application for financial lenders to manage loan portfolios and liquidate defaulted collateral, featuring a dual-purpose internal CRM and external e-commerce storefront.",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Node.js", "Prisma ORM"],
  },
  {
    slug: "fagasa-loan-system",
    title: "FAGASA Loan Management System",
    description:
      "Enterprise-grade microfinance platform handling the complete lifecycle of microfinance operations including group formation, disbursements, repayment tracking, and treasury oversight.",
    technologies: ["React", "Vite", "React Router", "Python", "Flask", "SQLite", "SQLAlchemy"],
  },
  {
    slug: "asset-mind-lms",
    title: "Asset Mind Limited - LMS",
    description:
      "Production-grade Loan Management System built after the success of the Barani platform. Featured a massive legacy data migration where I restructured schemas to include missing primary/secondary IDs, fixed logic flaws, and cleaned up a 2.7M KES discrepancy in their old system's data.",
    technologies: ["Python", "Flask", "React", "Vite", "MySQL", "PostgreSQL", "Recharts"],
  },
  {
    slug: "smart-loans",
    title: "Smart Loans Management System",
    description:
      "Multi-tenant SaaS platform built from scratch for Barani Smart Limited. Transformed their manual operations by digitizing workflows, integrating real-time M-Pesa automated collections, and adding complex RBAC.",
    technologies: ["React", "Python", "Flask", "SQLAlchemy", "PostgreSQL", "M-Pesa API"],
    demoUrl: "https://smart-loans-frontend.onrender.com",
  },
  {
    slug: "omnichannel-ecommerce-pos",
    title: "Omnichannel E-Commerce Platform & POS",
    description:
      "High-performance e-commerce ecosystem and Point of Sale system featuring resilient backend architecture, advanced image pipeline optimization, and seamless UI state synchronization.",
    technologies: ["Node.js", "Express", "TypeScript", "REST API"],
  },
] as const;