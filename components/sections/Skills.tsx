"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

/* ── Shared design tokens ───────────────────────────────────────────── */
const CARD_CLASS =
  "group relative overflow-hidden rounded-[20px] border border-[rgba(255,90,0,0.15)] bg-[#0D0A08] transition-all duration-400 hover:border-[rgba(255,90,0,0.38)] hover:shadow-[0_16px_40px_rgba(255,90,0,0.08)]";

/* Core proficiency data */
const coreStacks = [
  {
    heading: "⚡ Core Development Stack",
    skills: [
      { name: "TypeScript / Next.js / React", level: 95, label: "Advanced" },
      { name: "Python / Flask / FastAPI", level: 90, label: "Advanced" },
      { name: "PostgreSQL & Prisma ORM", level: 88, label: "Advanced" },
      { name: "M-Pesa Daraja Payment APIs", level: 92, label: "Specialist" },
    ],
  },
  {
    heading: "🛠️ Architecture & Data Rails",
    skills: [
      { name: "Multi-Tenant Row-Level Security", level: 90, label: "Specialist" },
      { name: "Docker Containerization & CI/CD", level: 85, label: "Proficient" },
      { name: "TanStack Query & State Synchronization", level: 90, label: "Advanced" },
      { name: "RESTful API Design & OpenAPI", level: 92, label: "Advanced" },
    ],
  },
];

/* Scrolling tech tape */
const allTech = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Node.js", "Express", "Python", "FastAPI", "Flask",
  "M-Pesa Daraja API", "OpenAI API", "PostgreSQL", "Prisma ORM",
  "Docker", "MySQL", "Supabase", "Redis", "TanStack Query",
  "GitHub Actions", "Linux", "REST APIs", "WebSockets",
];

/* Category metadata */
const categoryMeta: Record<string, { description: string }> = {
  Frontend:        { description: "High-performance UIs with fluid, responsive interactions" },
  Backend:         { description: "Multi-tenant APIs, microservices, and financial rails" },
  "AI & Automation": { description: "Intelligent systems, workflow automation, and LLM orchestration" },
  "Cloud & DevOps":  { description: "Production-grade CI/CD, Docker containers, and database scaling" },
};

/* ── Proficiency bar ───────────────────────────────────────────────── */
function ProficiencyBar({
  skill,
  delay,
}: {
  skill: { name: string; level: number; label: string };
  delay: number;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-xs font-semibold">
        <span className="text-[#F5F0EA]/85">{skill.name}</span>
        <span className="font-mono text-[#FF9D42]">{skill.label}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #FF5A00 0%, #FF9D42 100%)",
          }}
        />
      </div>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────────── */
export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,90,0,0.055) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="pointer-events-none absolute left-0 bottom-1/3 -z-10 h-60 w-60 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,90,0,0.045) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Heading ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[#FF5A00]/25 bg-[#FF5A00]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5A00]">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#FF5A00] animate-pulse" />
          Technical Disciplines
        </div>

        <h2 className="mt-5 font-display text-4xl sm:text-6xl font-black tracking-tight">
          <span className="text-[#F5F0EA]">Capabilities &amp; </span>
          <span className="text-[#FF5A00]">Core Stack</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed font-sans text-[#A99B90]">
          Full ownership across the engineering lifecycle — from database schema design and
          FinTech integrations to high-velocity frontend interfaces.
        </p>
      </motion.div>

      {/* ── Core proficiency panels ─────────────────────────── */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {coreStacks.map((stack, si) => (
          <motion.div
            key={stack.heading}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: si * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`${CARD_CLASS} p-6 lg:p-8`}
            style={{ transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            {/* Inner glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,90,0,0.06) 0%, transparent 70%)",
              }}
            />

            <h3 className="relative mb-6 text-sm font-bold text-[#F5F0EA] flex items-center gap-2">
              {stack.heading}
            </h3>

            <div className="relative space-y-5">
              {stack.skills.map((skill, i) => (
                <ProficiencyBar
                  key={skill.name}
                  skill={skill}
                  delay={0.2 + si * 0.08 + i * 0.1}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Skill category cards ────────────────────────────── */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => {
          const meta = categoryMeta[group.title] ?? { description: "" };
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${CARD_CLASS} p-6`}
              style={{ transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              {/* Inner glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,90,0,0.06) 0%, transparent 70%)",
                }}
              />

              {/* Category header */}
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
                    style={{
                      background: "linear-gradient(135deg, #1A0E08 0%, #251508 100%)",
                      border: "1px solid rgba(255,90,0,0.20)",
                      boxShadow: "0 4px 14px rgba(255,90,0,0.10)",
                    }}
                  >
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#F5F0EA] group-hover:text-white transition-colors">
                      {group.title}
                    </h3>
                    <p className="text-[11px] text-[#786E67]">{meta.description}</p>
                  </div>
                </div>
                <span className="rounded-full border border-[rgba(255,90,0,0.18)] bg-[#FF5A00]/8 px-3 py-1 text-[11px] font-mono text-[#FF9D42]">
                  {group.skills.length} skills
                </span>
              </div>

              {/* Skill badges */}
              <div className="relative mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + j * 0.04, duration: 0.3 }}
                    className="inline-flex cursor-default select-none items-center gap-1.5 rounded-md border border-white/8 bg-[#17100C] px-3 py-1 text-[10px] font-mono font-medium text-[#A99B90] transition-colors hover:border-[#FF5A00]/30 hover:text-white/90"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Scrolling tech tape ─────────────────────────────── */}
      <div className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050505] to-transparent" />

        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        >
          {[...allTech, ...allTech].map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex items-center gap-2 rounded-full border border-[rgba(255,90,0,0.15)] bg-[#0D0A08] px-4 py-2 text-[11px] font-mono text-[#A99B90] whitespace-nowrap"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A00]" />
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
