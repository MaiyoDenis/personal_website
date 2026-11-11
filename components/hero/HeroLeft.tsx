"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Terminal, Brain, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/Icons";
import { Mail } from "lucide-react";

export default function HeroLeft() {
  return (
    <div className="flex flex-col items-start text-left w-full">
      {/* ── Greeting Badge with connected flame line ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#121214]/90 px-4 py-1.5 text-xs font-medium text-white/90 shadow-inner backdrop-blur-md">
          <span>👋</span>
          <span>Hi, I&apos;m <strong className="text-white font-semibold">Denis Maiyo</strong></span>
        </div>
        <div className="h-[2px] w-12 sm:w-16 bg-gradient-to-r from-[#FE5101] to-[#FE5101]/10 rounded-full ml-3" />
      </motion.div>

      {/* ── Giant Name Typography: Denis (White) / Maiyo (Flame Orange) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col leading-none"
      >
        <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-[84px] xl:text-[92px] text-white tracking-[-0.03em] leading-[0.95]">
          Denis
        </h1>
        <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-[84px] xl:text-[92px] text-[#FE5101] tracking-[-0.03em] leading-[0.95] mt-1 drop-shadow-[0_0_35px_rgba(254,81,1,0.45)]">
          Maiyo
        </h1>
      </motion.div>

      {/* ── Role Subtitle with Orange Separators ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-base font-medium text-white/90"
      >
        <span>Software Engineer</span>
        <span className="text-[#FE5101] text-base font-black">•</span>
        <span>AI Builder</span>
        <span className="text-[#FE5101] text-base font-black">•</span>
        <span>Full-Stack Developer</span>
      </motion.div>

      {/* ── Mission / Bio Paragraph ── */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-lg font-sans"
      >
        I build intelligent systems, automation platforms, and software that solves real-world problems.
      </motion.p>

      {/* ── 3 Focus / Specialty Cards ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl"
      >
        {/* Card 1: Full-Stack */}
        <div className="flex items-center gap-3 rounded-2xl border border-[#FE5101]/25 bg-black/60 backdrop-blur-md px-3.5 py-3 hover:border-[#FE5101]/50 hover:bg-black/80 transition-colors group">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FE5101]/10 text-[#FE5101] group-hover:scale-110 transition-transform">
            <Terminal size={18} strokeWidth={2.2} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white leading-tight">Full-Stack</span>
            <span className="text-[10px] text-slate-400 leading-tight">Development</span>
          </div>
        </div>

        {/* Card 2: AI & ML */}
        <div className="flex items-center gap-3 rounded-2xl border border-[#FE5101]/25 bg-black/60 backdrop-blur-md px-3.5 py-3 hover:border-[#FE5101]/50 hover:bg-black/80 transition-colors group">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FE5101]/10 text-[#FE5101] group-hover:scale-110 transition-transform">
            <Brain size={18} strokeWidth={2.2} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white leading-tight">AI &amp; Machine</span>
            <span className="text-[10px] text-slate-400 leading-tight">Learning</span>
          </div>
        </div>

        {/* Card 3: Security */}
        <div className="flex items-center gap-3 rounded-2xl border border-[#FE5101]/25 bg-black/60 backdrop-blur-md px-3.5 py-3 hover:border-[#FE5101]/50 hover:bg-black/80 transition-colors group">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FE5101]/10 text-[#FE5101] group-hover:scale-110 transition-transform">
            <ShieldCheck size={18} strokeWidth={2.2} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white leading-tight">Security</span>
            <span className="text-[10px] text-slate-400 leading-tight">(Build &amp; Protect)</span>
          </div>
        </div>
      </motion.div>

      {/* ── Action Buttons: Orange Gradient CTA + CV Download ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        {/* Primary Pill: View My Work */}
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FE5101] to-[#FF6B2B] px-7 sm:px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(254,81,1,0.55)] hover:shadow-[0_0_50px_rgba(254,81,1,0.8)] hover:scale-105 transition-all duration-300"
        >
          <span>View My Work</span>
          <ArrowRight size={16} />
        </Link>

        {/* Secondary Pill: Download CV */}
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm px-6 sm:px-7 py-3.5 text-sm font-medium text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
        >
          <Download size={15} />
          <span>Download CV</span>
        </Link>
      </motion.div>

      {/* ── Social Icons & Availability Row ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-9 flex items-center gap-4"
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
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/MaiyoDenis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white hover:scale-110 transition-all"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-white hover:scale-110 transition-all"
          >
            <XIcon size={16} />
          </a>
          <a
            href="mailto:denismaiyo14@gmail.com"
            aria-label="Email"
            className="hover:text-white hover:scale-110 transition-all"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Divider */}
        <div className="h-4 w-px bg-white/20" />

        {/* Availability Status */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
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
