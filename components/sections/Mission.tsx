"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Globe, Zap } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "Clean Engineering",
    description: "Code that's readable, maintainable, and built to last. Not just working — elegant.",
    color: "from-blue-500 to-cyan-400",
    glow: "rgba(59,130,246,0.2)",
  },
  {
    icon: Brain,
    title: "AI-First Thinking",
    description: "I integrate intelligence where it multiplies value — not for hype, but for impact.",
    color: "from-violet-500 to-purple-400",
    glow: "rgba(139,92,246,0.2)",
  },
  {
    icon: Globe,
    title: "African Context",
    description: "Building software that solves African problems with M-Pesa, WhatsApp, and local scale in mind.",
    color: "from-green-500 to-emerald-400",
    glow: "rgba(16,185,129,0.2)",
  },
  {
    icon: Zap,
    title: "Ship Fast",
    description: "Ideas are worthless without execution. I move from concept to deployed product at speed.",
    color: "from-orange-500 to-amber-400",
    glow: "rgba(249,115,22,0.2)",
  },
];

export default function Mission() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28 lg:px-8">
      {/* Center glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/6 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/8 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-pink-400">
          🎯 Philosophy
        </div>

        <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
          Building Software{" "}
          <span className="gradient-text">That Matters</span>
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-xl leading-relaxed text-slate-500">
          My mission is to build software that genuinely improves lives through
          intelligent automation, AI, and scalable platforms — with a focus on
          the African market and global standards.
        </p>
      </motion.div>

      {/* Pillars */}
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0a0f1a] p-5 text-center transition-all duration-300 hover:border-white/15"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(200px circle at 50% -10%, ${pillar.glow}, transparent 70%)` }}
            />
            <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${pillar.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}
              style={{ boxShadow: `0 8px 20px ${pillar.glow}` }}>
              <pillar.icon size={20} className="text-white" />
            </div>
            <h3 className="font-bold text-white text-sm">{pillar.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">{pillar.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
