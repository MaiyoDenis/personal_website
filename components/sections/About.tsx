"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Clock, MapPin } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Resilient Systems",
    description:
      "Production TypeScript, Python, and PostgreSQL architectures built for high-concurrency and strict data integrity.",
  },
  {
    icon: Clock,
    title: "FinTech & Real-Time Rails",
    description:
      "Deep expertise in automated M-Pesa STK push, C2B callback engines, and multi-tenant financial data isolation.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#050505]"
    >
      {/* ── Background: Laptop image full-bleed ── */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <Image
          src="/images/lap.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
          priority={false}
        />
        {/* Left dark gradient — keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/70 to-[#050505]/20" />
        {/* Top & bottom fades */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050505] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* ── Warm orange ambient glow — top-left ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-16 w-[600px] h-[500px] opacity-70 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(254,81,1,0.5) 0%, rgba(220,35,0,0.26) 35%, rgba(120,15,0,0.08) 60%, transparent 78%)",
          filter: "blur(70px)",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">

          {/* ── LEFT: Text block ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FE5101]/35 bg-[#FE5101]/10 px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#FE5101] w-fit mb-5 sm:mb-7">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#FE5101] animate-pulse" />
              Philosophy &amp; Background
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-black text-white leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-7">
              Architecting robust software{" "}
              <span className="text-[#FE5101]">
                with uncompromising clarity.
              </span>
            </h2>

            {/* Body copy */}
            <div className="space-y-4 text-sm sm:text-base lg:text-lg text-white/60 leading-relaxed max-w-xl">
              <p>
                I am a Full-Stack Systems Architect based in Nairobi, Kenya. I
                engineer production platforms — from mission-critical FinTech
                backends and automated payment pipelines to high-impact,
                motion-rich user experiences.
              </p>
              <p>
                My philosophy matches modern engineering studios: clarity first,
                then the system. Every feature, schema, and API call exists to
                solve tangible business problems with verifiable durability.
              </p>
            </div>

            {/* Footer pills */}
            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 sm:px-4 py-2 text-xs font-mono text-white/70">
                <MapPin size={13} className="text-[#FE5101] shrink-0" />
                <span>Nairobi, Kenya (Remote · Worldwide)</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-3.5 sm:px-4 py-2 text-xs font-mono text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Available for ambitious projects</span>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Floating credibility cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-5 justify-center"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.25 + i * 0.12 }}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0a0a0a]/90 backdrop-blur-md p-6 transition-all duration-300 hover:border-[#FE5101]/40 hover:bg-[#0d0d0d]/95 shadow-2xl"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(260px circle at 100% 0%, rgba(254,81,1,0.2), transparent 80%)",
                  }}
                />

                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center rounded-xl border border-[#FE5101]/30 bg-[#FE5101]/12 p-3 text-[#FE5101]">
                  <pillar.icon size={20} strokeWidth={2} />
                </div>

                <h3 className="mb-2 text-lg font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ── Bottom particle wave ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] w-full overflow-hidden leading-none select-none"
      >
        <Image
          src="/images/footers.webp"
          alt=""
          width={2144}
          height={230}
          className="w-full h-auto max-h-[160px] sm:max-h-[200px] object-cover object-bottom opacity-70 mix-blend-screen"
        />
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>
    </section>
  );
}
