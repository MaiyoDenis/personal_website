"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Terminal, Brain, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/Icons";
import { Mail } from "lucide-react";

export default function HeroLeft() {
  return (
    <div className="flex flex-col items-start text-left w-full max-w-xl lg:max-w-none">
      {/* ── Greeting Badge with subtle orange accent rule ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-5"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0e0e12]/90 px-3.5 py-1.5 text-xs font-medium text-white/90 shadow-inner backdrop-blur-md">
          <span className="text-sm">👋</span>
          <span>
            Hi, I&apos;m <strong className="text-white font-semibold">Denis Maiyo</strong>
          </span>
        </div>
        <div className="h-[2px] w-12 sm:w-16 bg-gradient-to-r from-[#FF5A00] to-transparent rounded-full ml-3 opacity-80" />
      </motion.div>

      {/* ── Master Headline: Denis (Warm White) / Maiyo (Vibrant Orange) ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="flex flex-col leading-none select-none"
      >
        <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-[80px] xl:text-[88px] text-white tracking-[-0.035em] leading-[0.92]">
          Denis
        </h1>
        <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-[80px] xl:text-[88px] text-[#FF5A00] tracking-[-0.035em] leading-[0.92] mt-1 drop-shadow-[0_0_35px_rgba(255,90,0,0.4)]">
          Maiyo
        </h1>
      </motion.div>

      {/* ── Role Subtitle with Orange Bullet Separators ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.16 }}
        className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-[15px] font-medium text-white/90"
      >
        <span>Software Engineer</span>
        <span className="text-[#FF5A00] text-sm font-bold">•</span>
        <span>AI Builder</span>
        <span className="text-[#FF5A00] text-sm font-bold">•</span>
        <span>Full-Stack Developer</span>
      </motion.div>

      {/* ── Bio / Value Proposition ── */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.22 }}
        className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-lg font-sans"
      >
        I build intelligent systems, automation platforms, and software that solves real-world problems.
      </motion.p>

      {/* ── 3 Focus / Specialty Cards ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.28 }}
        className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg"
      >
        {/* Card 1: Full-Stack */}
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 hover:border-[#FF5A00]/40 bg-[#0a0a0e]/85 backdrop-blur-md px-3.5 py-3 transition-colors duration-200 group">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FF5A00]/10 text-[#FF5A00] border border-[#FF5A00]/20 group-hover:scale-105 transition-transform">
            <Terminal size={17} strokeWidth={2.2} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white leading-tight">Full-Stack</span>
            <span className="text-[10px] text-white/50 leading-tight mt-0.5">Development</span>
          </div>
        </div>

        {/* Card 2: AI & ML */}
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 hover:border-[#FF5A00]/40 bg-[#0a0a0e]/85 backdrop-blur-md px-3.5 py-3 transition-colors duration-200 group">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FF5A00]/10 text-[#FF5A00] border border-[#FF5A00]/20 group-hover:scale-105 transition-transform">
            <Brain size={17} strokeWidth={2.2} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white leading-tight">AI &amp; Machine</span>
            <span className="text-[10px] text-white/50 leading-tight mt-0.5">Learning</span>
          </div>
        </div>

        {/* Card 3: Security */}
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 hover:border-[#FF5A00]/40 bg-[#0a0a0e]/85 backdrop-blur-md px-3.5 py-3 transition-colors duration-200 group">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FF5A00]/10 text-[#FF5A00] border border-[#FF5A00]/20 group-hover:scale-105 transition-transform">
            <ShieldCheck size={17} strokeWidth={2.2} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white leading-tight">Security</span>
            <span className="text-[10px] text-white/50 leading-tight mt-0.5">(Build &amp; Protect)</span>
          </div>
        </div>
      </motion.div>

      {/* ── Action Buttons ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.34 }}
        className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
      >
        {/* Primary Pill: View My Work */}
        <Link
          href="#projects"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF5A00] to-[#FF7A2B] px-7 sm:px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(255,90,0,0.45)] hover:shadow-[0_0_42px_rgba(255,90,0,0.7)] hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <span>View My Work</span>
          <ArrowRight size={16} />
        </Link>

        {/* Secondary Pill: Download CV */}
        <Link
          href="/resume"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-6 sm:px-7 py-3.5 text-sm font-medium text-white hover:border-white/40 hover:bg-white/10 active:scale-95 transition-all duration-300"
        >
          <Download size={15} />
          <span>Download CV</span>
        </Link>
      </motion.div>

      {/* ── Social Icons & Availability Status ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 flex items-center gap-4"
      >
        {/* Social Icons */}
        <div className="flex items-center gap-3.5 text-white/70">
          <a
            href="https://github.com/MaiyoDenis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white hover:scale-110 transition-all"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href="https://linkedin.com/in/MaiyoDenis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white hover:scale-110 transition-all"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-white hover:scale-110 transition-all"
          >
            <XIcon size={15} />
          </a>
          <a
            href="mailto:denismaiyo14@gmail.com"
            aria-label="Email"
            className="hover:text-white hover:scale-110 transition-all"
          >
            <Mail size={17} />
          </a>
        </div>

        {/* Divider */}
        <div className="h-4 w-px bg-white/20" />

        {/* Availability Status */}
        <div className="flex items-center gap-2 text-xs font-medium text-white/80">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Open to opportunities</span>
        </div>
      </motion.div>
    </div>
  );
}
