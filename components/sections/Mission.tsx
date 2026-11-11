"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Globe, Zap } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "Clean Engineering",
    description:
      "Code that's readable, maintainable, and built to last. Not just working — elegant.",
  },
  {
    icon: Brain,
    title: "AI-First Thinking",
    description:
      "I integrate intelligence where it multiplies value — not for hype, but for impact.",
  },
  {
    icon: Globe,
    title: "African Context",
    description:
      "Building software that solves African problems with M-Pesa, WhatsApp, and local scale in mind.",
  },
  {
    icon: Zap,
    title: "Ship Fast",
    description:
      "Ideas are worthless without execution. I move from concept to deployed product at speed.",
  },
];

export default function Mission() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28 lg:px-8">
      {/* Ambient orange glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,90,0,0.055) 0%, rgba(255,90,0,0.015) 45%, transparent 68%)",
          filter: "blur(40px)",
        }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        {/* Label pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#FF5A00]/25 bg-[#FF5A00]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5A00]">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#FF5A00] animate-pulse" />
          Philosophy
        </div>

        <h2 className="mt-5 font-display text-4xl sm:text-6xl font-black tracking-tight">
          <span className="text-[#F5F0EA]">Building Software </span>
          <span className="text-[#FF5A00]">That Matters</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed font-sans text-[#A99B90]">
          My mission is to build software that genuinely improves lives through intelligent
          automation, AI, and scalable platforms — with a focus on the African market and
          global standards.
        </p>
      </motion.div>

      {/* Pillar cards */}
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-[20px] border border-[rgba(255,90,0,0.15)] bg-[#0D0A08] p-6 text-center transition-all duration-400 hover:border-[rgba(255,90,0,0.38)] hover:shadow-[0_16px_40px_rgba(255,90,0,0.08)]"
            style={{ transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            {/* Inner glow on hover */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(180px circle at 50% -10%, rgba(255,90,0,0.10), transparent 70%)",
              }}
            />

            {/* Top accent */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#FF5A00]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Icon */}
            <div
              className="relative mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #1A0E08 0%, #251508 100%)",
                border: "1px solid rgba(255,90,0,0.22)",
                boxShadow: "0 6px 20px rgba(255,90,0,0.12)",
              }}
            >
              <pillar.icon size={20} className="text-[#FF9D42]" />
            </div>

            {/* Content */}
            <h3 className="text-sm font-bold text-[#F5F0EA] group-hover:text-white transition-colors">
              {pillar.title}
            </h3>
            <p className="mt-2.5 text-xs leading-relaxed text-[#A99B90] group-hover:text-[#B5A69A] transition-colors">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
