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
  { name: "Python", icon: <PythonIcon size={19} /> },
  { name: "Next.js", icon: <NextjsIcon size={19} /> },
  { name: "TypeScript", icon: <TypescriptIcon size={19} /> },
  { name: "PostgreSQL", icon: <PostgresqlIcon size={19} /> },
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
      {/* ── Unified Frame (All layered elements scale proportionally with Denis) ── */}
      <div className="relative w-full">
        {/* ── 1. Volumetric Burnt Orange Ambient Glow (Warm cinematic core) ── */}
        <div
          aria-hidden="true"
          className="absolute top-[28%] left-[51%] -translate-x-1/2 -translate-y-1/2 w-[72%] aspect-square rounded-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 90, 0, 0.45) 0%, rgba(180, 45, 0, 0.22) 42%, transparent 72%)",
            filter: "blur(60px)",
          }}
        />

        {/* ── 2. Glowing Neon Orange Ring (Centered tightly behind head, clear of quote) ── */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
          className="absolute -top-[5%] left-[51%] -translate-x-1/2 w-[58%] sm:w-[58%] lg:w-[60%] aspect-square rounded-full border-[3px] border-[#FF5A00] pointer-events-none z-10"
          style={{
            boxShadow:
              "0 0 25px #FF5A00, 0 0 55px rgba(255, 90, 0, 0.85), 0 0 95px rgba(255, 90, 0, 0.45), inset 0 0 25px rgba(255, 90, 0, 0.35)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 88%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 88%)",
          }}
        />

        {/* ── 3. Top-Right Intense Neon Flare / Hotspot (Right on the ring at 1-2 o'clock) ── */}
        <div
          aria-hidden="true"
          className="absolute -top-[2%] right-[20%] sm:right-[22%] w-32 h-32 rounded-full pointer-events-none z-10 opacity-90"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 160, 60, 0.95) 0%, rgba(255, 90, 0, 0.7) 35%, rgba(180, 35, 0, 0.18) 60%, transparent 80%)",
            filter: "blur(20px)",
          }}
        />

        {/* ── 4. Floating Code Windows (Left & Right behind subject with warm palette) ── */}
        {/* Left Code Window */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 0.85, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden sm:block absolute top-[20%] left-[-4%] w-48 rounded-xl border border-white/10 bg-[#08080c]/92 p-3 shadow-2xl backdrop-blur-md z-10 font-mono text-[9px] pointer-events-none"
        >
          <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/8">
            <div className="h-2 w-2 rounded-full bg-rose-500/80" />
            <div className="h-2 w-2 rounded-full bg-amber-500/80" />
            <div className="h-2 w-2 rounded-full bg-emerald-500/80" />
          </div>
          <div className="space-y-1 text-white/70">
            <p className="text-[#FF5A00]">const ai = new Agent({`{`}</p>
            <p className="pl-2">pipeline: <span className="text-[#FFB088]">&apos;live&apos;</span>,</p>
            <p className="pl-2">stream: <span className="text-amber-300">true</span>,</p>
            <p className="pl-2">speed: <span className="text-white/90">&apos;12ms&apos;</span></p>
            <p className="text-[#FF5A00]">{`}`});</p>
            <p className="text-white/40">// deploy model</p>
            <p className="text-[#FF7A2B]">await ai.solve();</p>
          </div>
        </motion.div>

        {/* Right Code Window */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 0.85, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="hidden sm:block absolute top-[24%] right-[-2%] w-52 rounded-xl border border-white/10 bg-[#08080c]/92 p-3 shadow-2xl backdrop-blur-md z-10 font-mono text-[9px] pointer-events-none"
        >
          <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/8">
            <div className="h-2 w-2 rounded-full bg-rose-500/80" />
            <div className="h-2 w-2 rounded-full bg-amber-500/80" />
            <div className="h-2 w-2 rounded-full bg-emerald-500/80" />
          </div>
          <div className="space-y-1 text-white/70">
            <p className="text-[#FF7A2B]">interface Architecture {`{`}</p>
            <p className="pl-2">uptime: <span className="text-white/90">&apos;99.9%&apos;</span>;</p>
            <p className="pl-2">concurrency: <span className="text-[#FFB088]">10000</span>;</p>
            <p className="pl-2">latency: <span className="text-amber-300">&apos;&lt; 15ms&apos;</span>;</p>
            <p className="text-[#FF7A2B]">{`}`}</p>
            <p className="text-white/40">// fintech rail active</p>
          </div>
        </motion.div>

        {/* ── 5. Main Subject: Denis Maiyo Cut-out with Soft Edge-Fade (No rectangular cutoffs) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 w-full drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
          style={{
            // Smooth bottom gradient mask melts the lower laptop & arm edge into the background seamlessly
            maskImage:
              "linear-gradient(to bottom, black 0%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 88%, transparent 100%)",
          }}
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

        {/* ── 6. Left Stack of Floating Tech Pills (Consistent dimensions, subtle orange hover) ── */}
        <div className="absolute left-[-2%] sm:left-[-4%] lg:left-[-6%] top-[20%] z-30 flex flex-col gap-2.5">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              whileHover={{ scale: 1.04, x: 4 }}
              className="flex items-center gap-3 w-36 sm:w-38 rounded-2xl border border-white/10 bg-[#08080c]/90 px-3.5 py-2 sm:py-2.5 text-white shadow-2xl backdrop-blur-md hover:border-[#FF5A00]/40 hover:shadow-[0_0_20px_rgba(255,90,0,0.25)] transition-all cursor-default"
            >
              <div className="flex h-5 w-5 items-center justify-center shrink-0">
                {tech.icon}
              </div>
              <span className="text-xs sm:text-[13px] font-semibold tracking-tight text-white/95">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── 7. Top Right Angled Handwritten Quote (Outside the ring, clear of cap) ── */}
        <motion.div
          initial={{ opacity: 0, y: -16, rotate: -7 }}
          animate={{ opacity: 1, y: 0, rotate: -7 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="absolute top-[2%] right-[-2%] sm:right-[0%] z-30 pointer-events-none text-right"
        >
          <p className="font-script text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#E29D6E] leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            Turning ambitious<br />
            ideas into<br />
            scalable software.
          </p>
        </motion.div>

        {/* ── 8. Lower Right Floating "Building..." Card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-[6%] sm:bottom-[8%] right-[-2%] sm:right-[0%] z-30 rounded-2xl border border-[#FF5A00]/35 bg-[#08080c]/90 backdrop-blur-xl p-3.5 sm:p-4 shadow-[0_0_35px_rgba(255,90,0,0.22)] w-44 sm:w-48 text-left"
        >
          {/* Header with concentric pulse */}
          <div className="flex items-center gap-2 mb-3">
            <div className="relative flex h-3 w-3 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5A00]" />
            </div>
            <span className="text-xs font-bold text-white tracking-wide">
              Building...
            </span>
          </div>

          {/* Checklist */}
          <div className="space-y-2">
            {buildingList.map((item) => (
              <div key={item} className="flex items-center gap-2 text-[11px] sm:text-xs text-white/85">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FF5A00]/15 text-[#FF5A00] border border-[#FF5A00]/40">
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
