"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

const categoryMeta: Record<string, { emoji: string; description: string }> = {
  Frontend: {
    emoji: "⚡",
    description: "High-performance UIs with fluid, responsive interactions",
  },
  Backend: {
    emoji: "🔧",
    description: "Multi-tenant APIs, microservices, and financial rails",
  },
  "AI & Automation": {
    emoji: "🤖",
    description: "Intelligent systems, workflow automation, and LLM orchestration",
  },
  "Cloud & DevOps": {
    emoji: "☁️",
    description: "Production-grade CI/CD, Docker containers, and database scaling",
  },
};

const allTech = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Node.js", "Express", "Python", "FastAPI", "Flask",
  "M-Pesa Daraja API", "OpenAI API", "PostgreSQL", "Prisma ORM",
  "Docker", "MySQL", "Supabase", "Redis", "TanStack Query",
  "GitHub Actions", "Linux", "REST APIs", "WebSockets",
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
      {/* Background glow */}
      <div className="absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-[#FE5101]/5 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 -z-10 h-60 w-60 rounded-full bg-[#FE5101]/5 blur-3xl pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[#FE5101]/30 bg-[#FE5101]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FE5101]">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#FE5101] animate-pulse" />
          Technical Disciplines
        </div>
        <h2 className="mt-5 font-display text-4xl sm:text-6xl font-black text-white tracking-tight">
          Capabilities &amp; <span className="text-[#FE5101]">Core Stack</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/60 leading-relaxed font-sans">
          Full ownership across the engineering lifecycle — from database schema design and FinTech integrations to high-velocity frontend interfaces.
        </p>
      </motion.div>

      {/* Core Proficiencies */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/8 bg-[#080808] p-6 lg:p-8">
          <h3 className="mb-6 text-lg font-bold text-white flex items-center gap-2">
            <span className="text-[#FE5101]">⚡</span> Core Development Stack
          </h3>
          <div className="space-y-5">
            {[
              { name: "TypeScript / Next.js / React", level: 95, label: "Advanced" },
              { name: "Python / Flask / FastAPI", level: 90, label: "Advanced" },
              { name: "PostgreSQL & Prisma ORM", level: 88, label: "Advanced" },
              { name: "M-Pesa Daraja Payment APIs", level: 92, label: "Specialist" },
            ].map((skill, i) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between text-xs font-semibold">
                  <span className="text-white/80">{skill.name}</span>
                  <span className="text-[#FE5101] font-mono">{skill.label}</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#FE5101] to-[#FF7A00]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/8 bg-[#080808] p-6 lg:p-8">
          <h3 className="mb-6 text-lg font-bold text-white flex items-center gap-2">
            <span className="text-[#FE5101]">🛠️</span> Architecture &amp; Data Rails
          </h3>
          <div className="space-y-5">
            {[
              { name: "Multi-Tenant Row-Level Security", level: 90, label: "Specialist" },
              { name: "Docker Containerization & CI/CD", level: 85, label: "Proficient" },
              { name: "TanStack Query & State Synchronization", level: 90, label: "Advanced" },
              { name: "RESTful API Design & OpenAPI", level: 92, label: "Advanced" },
            ].map((skill, i) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between text-xs font-semibold">
                  <span className="text-white/80">{skill.name}</span>
                  <span className="text-[#FE5101] font-mono">{skill.label}</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#FE5101] to-[#FF4500]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => {
          const meta = categoryMeta[group.title] ?? { emoji: "💡", description: "" };
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#080808] p-6 transition-all duration-300 hover:border-[#FE5101]/30 hover:bg-[#0c0c0c]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-lg">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{group.title}</h3>
                    <p className="text-[11px] text-white/50">{meta.description}</p>
                  </div>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-mono text-white/60">
                  {group.skills.length} skills
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.04, duration: 0.3 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-white/10 bg-white/5 text-white/70 hover:border-[#FE5101]/40 hover:text-white transition-colors cursor-default select-none"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Scrolling tech tape */}
      <div className="mt-16 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {[...allTech, ...allTech].map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex items-center gap-2 rounded-full border border-white/8 bg-[#080808] px-4 py-2 text-[11px] font-mono text-white/60 whitespace-nowrap"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FE5101]" />
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
