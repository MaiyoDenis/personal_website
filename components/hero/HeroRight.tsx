"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import {
  PythonIcon,
  NextjsIcon,
  TypescriptIcon,
  PostgresqlIcon,
} from "@/components/ui/Icons";

const techStack = [
  { name: "Python", icon: <PythonIcon size={20} /> },
  { name: "Next.js", icon: <NextjsIcon size={20} /> },
  { name: "TypeScript", icon: <TypescriptIcon size={20} /> },
  { name: "PostgreSQL", icon: <PostgresqlIcon size={20} /> },
];

const buildingList = [
  "Scalable Systems",
  "Smart Automation",
  "Secure Solutions",
  "Real Impact",
];

export default function HeroRight() {
  return (
    <div className="relative w-full max-w-[620px] lg:max-w-[680px] xl:max-w-[720px] flex items-center justify-center select-none mx-auto">
      {/* ── Master Composition Frame (All elements locked proportionally to Denis) ── */}
      <div className="relative w-full">
        {/* ── 1. Volumetric Flame Ambient Glow (Behind head & shoulders) ── */}
        <div
          aria-hidden="true"
          className="absolute top-[28%] left-[51%] -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square rounded-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(254, 81, 1, 0.45) 0%, rgba(220, 35, 0, 0.2) 42%, transparent 72%)",
            filter: "blur(60px)",
          }}
        />

        {/* ── 2. Glowing Neon Orange Ring (Moved to the left, tightly hugging Denis's head) ── */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
          className="absolute -top-[5%] left-[51%] -translate-x-1/2 w-[58%] sm:w-[58%] lg:w-[60%] aspect-square rounded-full border-[3.5px] border-[#FE5101] pointer-events-none z-10"
          style={{
            boxShadow:
              "0 0 25px #FE5101, 0 0 55px rgba(254, 81, 1, 0.85), 0 0 95px rgba(254, 81, 1, 0.5), inset 0 0 25px rgba(254, 81, 1, 0.35)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 88%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 88%)",
          }}
        />

        {/* ── 3. Top-Right Intense Neon Flare / Hotspot (Right on the ring's 1-2 o'clock curve) ── */}
        <div
          aria-hidden="true"
          className="absolute -top-[2%] right-[20%] sm:right-[22%] w-32 h-32 rounded-full pointer-events-none z-10 opacity-90"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 150, 50, 0.95) 0%, rgba(254, 81, 1, 0.7) 35%, rgba(220, 35, 0, 0.2) 60%, transparent 80%)",
            filter: "blur(20px)",
          }}
        />

        {/* ── 4. Floating Code Windows (Left & Right behind Denis) ── */}
        {/* Left Code Window */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden sm:block absolute top-[20%] left-[-4%] w-48 rounded-xl border border-white/10 bg-[#090a0f]/90 p-3 shadow-2xl backdrop-blur-md z-10 font-mono text-[9px] pointer-events-none"
        >
          <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/8">
            <div className="h-2 w-2 rounded-full bg-rose-500/80" />
            <div className="h-2 w-2 rounded-full bg-amber-500/80" />
            <div className="h-2 w-2 rounded-full bg-emerald-500/80" />
          </div>
          <div className="space-y-1 text-slate-400">
            <p className="text-[#FE5101]">const ai = new Agent({`{`}</p>
            <p className="pl-2">pipeline: <span className="text-emerald-400">&apos;live&apos;</span>,</p>
            <p className="pl-2">stream: <span className="text-amber-400">true</span>,</p>
            <p className="pl-2">speed: <span className="text-cyan-400">&apos;12ms&apos;</span></p>
            <p className="text-[#FE5101]">{`}`});</p>
            <p className="text-slate-500">// deploy model</p>
            <p className="text-purple-400">await ai.solve();</p>
          </div>
        </motion.div>

        {/* Right Code Window */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="hidden sm:block absolute top-[24%] right-[-2%] w-52 rounded-xl border border-white/10 bg-[#090a0f]/90 p-3 shadow-2xl backdrop-blur-md z-10 font-mono text-[9px] pointer-events-none"
        >
          <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/8">
            <div className="h-2 w-2 rounded-full bg-rose-500/80" />
            <div className="h-2 w-2 rounded-full bg-amber-500/80" />
            <div className="h-2 w-2 rounded-full bg-emerald-500/80" />
          </div>
          <div className="space-y-1 text-slate-400">
            <p className="text-purple-400">interface Architecture {`{`}</p>
            <p className="pl-2">uptime: <span className="text-emerald-400">&apos;99.9%&apos;</span>;</p>
            <p className="pl-2">concurrency: <span className="text-amber-400">10000</span>;</p>
            <p className="pl-2">latency: <span className="text-cyan-400">&apos;&lt; 15ms&apos;</span>;</p>
            <p className="text-purple-400">{`}`}</p>
            <p className="text-slate-500">// fintech rail active</p>
          </div>
        </motion.div>

        {/* ── 5. Main Subject: Denis Maiyo Cut-out (profile.png) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 w-full drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
        >
          <Image
            src="/images/profile.png"
            alt="Denis Maiyo - Full-Stack & AI Engineer"
            width={1312}
            height={1199}
            priority
            className="w-full h-auto object-contain pointer-events-none select-none block"
          />
        </motion.div>

        {/* ── 6. Left Stack of Floating Tech Pills ── */}
        <div className="absolute left-[-2%] sm:left-[-4%] lg:left-[-6%] top-[20%] z-30 flex flex-col gap-2.5">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              whileHover={{ scale: 1.05, x: 4 }}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#08080c]/90 px-3.5 sm:px-4 py-2 sm:py-2.5 text-white shadow-2xl backdrop-blur-md hover:border-[#FE5101]/50 hover:shadow-[0_0_20px_rgba(254,81,1,0.25)] transition-all cursor-default"
            >
              <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center shrink-0">
                {tech.icon}
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-white/95">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── 7. Top Right Angled Handwritten Quote ── */}
        <motion.div
          initial={{ opacity: 0, y: -20, rotate: -7 }}
          animate={{ opacity: 1, y: 0, rotate: -7 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="absolute top-[2%] right-[-2%] sm:right-[0%] z-30 pointer-events-none text-right"
        >
          <p className="font-script text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#E29D6E] leading-[1.05] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Turning ambitious<br />
            ideas into<br />
            scalable software.
          </p>
        </motion.div>

        {/* ── 8. Lower Right Floating "Building..." Card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-[6%] sm:bottom-[8%] right-[-2%] sm:right-[0%] z-30 rounded-2xl border border-[#FE5101]/40 bg-black/85 backdrop-blur-xl p-3.5 sm:p-4 shadow-[0_0_35px_rgba(254,81,1,0.25)] w-44 sm:w-48 text-left"
        >
          {/* Header with concentric pulse */}
          <div className="flex items-center gap-2 mb-3">
            <div className="relative flex h-3 w-3 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FE5101] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FE5101]" />
            </div>
            <span className="text-xs font-bold text-white tracking-wide">
              Building...
            </span>
          </div>

          {/* Checklist */}
          <div className="space-y-2">
            {buildingList.map((item) => (
              <div key={item} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-200">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FE5101]/15 text-[#FE5101] border border-[#FE5101]/40">
                  <Check size={10} strokeWidth={3} />
                </div>
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
