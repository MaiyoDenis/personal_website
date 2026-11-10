"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

const categoryMeta: Record<string, { emoji: string; description: string }> = {
  Frontend: {
    emoji: "⚡",
    description: "Pixel-perfect UIs with buttery-smooth interactions",
  },
  Backend: {
    emoji: "🔧",
    description: "Scalable APIs and robust server architecture",
  },
  "AI & Automation": {
    emoji: "🤖",
    description: "Intelligent systems and workflow automation",
  },
  "Cloud & DevOps": {
    emoji: "☁️",
    description: "Production-grade deployment and infrastructure",
  },
};

const allTech = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Node.js", "Express", "Python", "FastAPI", "Django",
  "OpenAI API", "LangChain", "Machine Learning",
  "Docker", "PostgreSQL", "MongoDB", "Supabase", "Redis",
  "GitHub Actions", "Linux", "Git", "REST APIs", "WebSockets",
  "JWT", "Stripe", "M-Pesa", "Prompt Engineering", "Computer Vision",
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
      {/* Background glow */}
      <div className="absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-violet-600/8 blur-3xl" />
      <div className="absolute left-0 bottom-1/3 -z-10 h-60 w-60 rounded-full bg-cyan-600/6 blur-3xl" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/8 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
          ⚙️ Tech Stack
        </div>
        <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
          Skills &{" "}
          <span className="gradient-text">Technologies</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
          Full ownership across the entire stack — from sleek UIs to intelligent backends
          and automated cloud pipelines.
        </p>
      </motion.div>

      {/* Core Proficiencies */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/8 bg-[#0a0f1a] p-6 lg:p-8">
          <h3 className="mb-6 text-lg font-bold text-white flex items-center gap-2">
            <span className="text-blue-400">⚡</span> Core Stack
          </h3>
          <div className="space-y-5">
            {[
              { name: "Next.js & React", level: 95, label: "Expert" },
              { name: "TypeScript", level: 90, label: "Expert" },
              { name: "Node.js & Express", level: 85, label: "Advanced" },
              { name: "Python", level: 80, label: "Advanced" },
            ].map((skill, i) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="text-blue-400">{skill.label}</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/8 bg-[#0a0f1a] p-6 lg:p-8">
          <h3 className="mb-6 text-lg font-bold text-white flex items-center gap-2">
            <span className="text-violet-400">🛠️</span> Infrastructure & AI
          </h3>
          <div className="space-y-5">
            {[
              { name: "PostgreSQL & Supabase", level: 85, label: "Advanced" },
              { name: "Docker", level: 80, label: "Advanced" },
              { name: "LangChain & OpenAI", level: 70, label: "Learning" },
              { name: "Machine Learning", level: 60, label: "Learning" },
            ].map((skill, i) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="text-violet-400">{skill.label}</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-violet-600 to-purple-400"
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
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0a0f1a] p-6 transition-all duration-500 hover:border-white/15"
              style={{
                boxShadow: `0 0 0 rgba(0,0,0,0)`,
              }}
              whileHover={{
                y: -4,
                boxShadow: `0 20px 60px ${group.glow ?? "rgba(59,130,246,0.15)"}`,
              }}
            >
              {/* Top gradient bar */}
              <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${group.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

              {/* Bg glow */}
              <div
                className={`absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br ${group.color} opacity-0 transition-opacity duration-500 group-hover:opacity-8 blur-3xl`}
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${group.color} text-lg shadow-lg`}>
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{group.title}</h3>
                    <p className="text-[11px] text-slate-600">{meta.description}</p>
                  </div>
                </div>
                <span className="rounded-full bg-white/4 px-3 py-1 text-[11px] font-mono text-slate-500">
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
                    className="tech-pill cursor-default select-none"
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
        <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-[#020408] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-[#020408] to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {[...allTech, ...allTech].map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex items-center gap-2 rounded-full border border-white/6 bg-white/3 px-4 py-2 text-[11px] font-mono text-slate-500 whitespace-nowrap"
            >
              <span className="h-1 w-1 rounded-full bg-blue-500/60" />
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
