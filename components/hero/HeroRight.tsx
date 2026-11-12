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

        {/* ── 2. Glowing Neon Orange Ring ──
            Mathematically centered: Denis body center=58%, crown at top=0%,
            radius=35% → arcs appear at x≈40% (left) and x≈76% (right) at head level,
            both outside Denis's body (52%-64%) so both sides ARE visible. ── */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
          className="absolute top-[0%] left-[58%] -translate-x-1/2 w-[70%] aspect-square rounded-full border-[2.5px] border-[#FF5A00] pointer-events-none z-10"
          style={{
            boxShadow:
              "0 0 22px #FF5A00, 0 0 55px rgba(255, 90, 0, 0.85), 0 0 100px rgba(255, 90, 0, 0.45), inset 0 0 22px rgba(255, 90, 0, 0.3)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 85%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 85%)",
          }}
        />

        {/* ── 3. Orange Neon Flare — sits at the crown of the ring (top-center) ── */}
        <div
          aria-hidden="true"
          className="absolute -top-[2%] left-[58%] -translate-x-1/2 w-36 h-36 rounded-full pointer-events-none z-10 opacity-95"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 190, 60, 1) 0%, rgba(255, 90, 0, 0.8) 35%, rgba(180, 35, 0, 0.18) 60%, transparent 80%)",
            filter: "blur(16px)",
          }}
        />

        {/* ── 4. Floating Code Windows removed — clean pill layout ── */}

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
            src="/images/profile.webp"
            alt="Denis Maiyo - Full-Stack & AI Engineer"
            width={1312}
            height={1199}
            priority
            className="w-full h-auto object-contain pointer-events-none select-none block"
          />
        </motion.div>

        {/* ── 6. Left Stack of Floating Tech Pills (Consistent dimensions, subtle orange hover) ── */}
        <div className="absolute left-[-2%] sm:left-[-4%] lg:left-[-6%] top-[12%] sm:top-[20%] z-30 flex flex-col gap-1.5 sm:gap-2.5">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              whileHover={{ scale: 1.04, x: 4 }}
              className="flex items-center gap-2 sm:gap-3 w-28 sm:w-38 rounded-xl sm:rounded-2xl border border-white/10 bg-[#08080c]/90 px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 text-white shadow-2xl backdrop-blur-md hover:border-[#FF5A00]/40 hover:shadow-[0_0_20px_rgba(255,90,0,0.25)] transition-all cursor-default"
            >
              <div className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center shrink-0">
                {tech.icon}
              </div>
              <span className="text-[11px] sm:text-[13px] font-semibold tracking-tight text-white/95">
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
          className="absolute top-[0%] sm:top-[2%] right-[-1%] sm:right-[0%] z-30 pointer-events-none text-right"
        >
          <p className="font-script text-lg sm:text-3xl lg:text-[32px] font-bold text-[#E29D6E] leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
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
          className="absolute bottom-[4%] sm:bottom-[8%] right-[-1%] sm:right-[0%] z-30 rounded-xl sm:rounded-2xl border border-[#FF5A00]/35 bg-[#08080c]/90 backdrop-blur-xl p-2.5 sm:p-4 shadow-[0_0_35px_rgba(255,90,0,0.22)] w-36 sm:w-48 text-left"
        >
          {/* Header with concentric pulse */}
          <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            <div className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A00] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#FF5A00]" />
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-white tracking-wide">
              Building...
            </span>
          </div>

          {/* Checklist */}
          <div className="space-y-1 sm:space-y-2">
            {buildingList.map((item) => (
              <div key={item} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-white/85">
                <div className="flex h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 items-center justify-center rounded-full bg-[#FF5A00]/15 text-[#FF5A00] border border-[#FF5A00]/40">
                  <Check size={9} strokeWidth={3} />
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
