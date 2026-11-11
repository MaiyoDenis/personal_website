"use client";

import { motion } from "framer-motion";
import { User, Code, Target, MapPin, Zap } from "lucide-react";

const pillars = [
  {
    icon: Code,
    title: "Resilient Systems",
    description: "Production TypeScript, Python, and PostgreSQL architectures built for high-concurrency and strict data integrity.",
    glow: "rgba(254,81,1,0.25)",
    color: "text-[#FE5101] bg-[#FE5101]/10 border-[#FE5101]/25",
  },
  {
    icon: Target,
    title: "FinTech & Real-Time Rails",
    description: "Deep expertise in automated M-Pesa STK push, C2B callback engines, and multi-tenant financial data isolation.",
    glow: "rgba(254,81,1,0.2)",
    color: "text-white bg-white/10 border-white/20",
  },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 overflow-hidden">
      {/* ── Feathered Ambient Flame Lighting (Directly Behind Title & Story) ── */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -left-12 w-[600px] sm:w-[800px] h-[550px] sm:h-[700px] opacity-75 z-0"
        style={{
          background: "radial-gradient(ellipse at 20% 30%, rgba(254, 81, 1, 0.5) 0%, rgba(220, 35, 0, 0.28) 32%, rgba(120, 15, 0, 0.1) 58%, transparent 75%)",
          filter: "blur(70px)",
        }}
      />
      {/* Soft inner feathered core */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-8 left-8 w-[320px] h-[260px] opacity-45 z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(255, 110, 20, 0.55) 0%, rgba(254, 81, 1, 0.25) 50%, transparent 80%)",
          filter: "blur(55px)",
        }}
      />
      
      <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
        {/* Left: Text & Story */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FE5101]/30 bg-[#FE5101]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FE5101] w-fit mb-6">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#FE5101] animate-pulse" />
            Philosophy &amp; Background
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
            Architecting robust software with <span className="text-[#FE5101]">uncompromising clarity</span>.
          </h2>
          
          <div className="space-y-4 text-base sm:text-lg text-white/60 leading-relaxed font-sans">
            <p>
              I am a Full-Stack Systems Architect based in Nairobi, Kenya. I engineer production platforms—from 
              mission-critical FinTech backends and automated payment pipelines to high-impact, motion-rich user experiences.
            </p>
            <p>
              My philosophy matches modern engineering studios: clarity first, then the system. Every feature, schema, and API call exists to solve tangible business problems with verifiable durability.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-white/70">
              <MapPin size={14} className="text-[#FE5101]" />
              Nairobi, Kenya (Remote / Worldwide)
            </div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-2 text-xs font-mono text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for ambitious projects
            </div>
          </div>
        </motion.div>

        {/* Right: Credibility Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
        >
          {pillars.map((pillar) => (
             <div 
               key={pillar.title}
               className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#080808] p-6 transition-all duration-300 hover:border-[#FE5101]/40 hover:bg-[#0c0c0c]"
             >
               <div 
                 className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                 style={{ background: `radial-gradient(280px circle at 100% 0%, ${pillar.glow}, transparent 80%)` }}
               />
               <div className={`mb-4 inline-flex items-center justify-center rounded-xl border p-2.5 ${pillar.color}`}>
                 <pillar.icon size={20} />
               </div>
               <h3 className="mb-2 text-lg font-bold text-white">{pillar.title}</h3>
               <p className="text-sm leading-relaxed text-white/50">{pillar.description}</p>
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
