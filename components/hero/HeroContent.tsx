"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail } from "lucide-react";

const ROLES = [
  "Full-Stack Engineer",
  "AI Integrator",
  "SaaS Builder",
  "Problem Solver",
] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const headlineReveal: Variants = {
  hidden: { opacity: 0, y: "50%", rotate: 1 },
  show: {
    opacity: 1,
    y: "0%",
    rotate: 0,
    transition: { type: "spring", stiffness: 50, damping: 14 },
  },
};

export default function HeroContent() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 48);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 95);
    }

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, 350);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center lg:items-start text-center lg:text-left w-full"
    >
      {/* ── Status Badge ── */}
      <motion.div
        variants={itemUp}
        className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 w-fit backdrop-blur-sm mb-6"
      >
        <span className="status-dot" />
        Available for new roles &amp; freelance
      </motion.div>

      {/* ── Headline: Denis Maiyo ── */}
      <div className="overflow-hidden pb-1">
        <motion.h1
          variants={headlineReveal}
          className="font-display text-5xl sm:text-7xl lg:text-[80px] font-extrabold tracking-[-0.03em] text-white leading-[1.02]"
        >
          Denis{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
            Maiyo
          </span>
        </motion.h1>
      </div>

      {/* ── Typewriter role ── */}
      <motion.div
        variants={itemUp}
        className="mt-4 flex items-center h-7"
      >
        <span className="font-mono text-sm sm:text-base font-semibold tracking-[0.2em] text-[#FE5101] uppercase typewriter-cursor pr-1">
          {displayText}
        </span>
      </motion.div>

      {/* ── Original Bio ── */}
      <motion.p
        variants={itemUp}
        className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl font-sans"
      >
        I architect and ship{" "}
        <span className="text-white font-semibold">
          intelligent software platforms
        </span>
        . From AI-powered APIs to real-time cloud systems — turning ambitious
        ideas into production products that scale.
      </motion.p>

      {/* ── Action Buttons: Kontour Pill Styling ── */}
      <motion.div
        variants={itemUp}
        className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
      >
        {/* Primary Pill: Pure Soft White with nested circular black arrow button */}
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3.5 rounded-full bg-white pl-6 pr-2 py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#F2F2F2] hover:scale-[1.02] shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
        >
          <span>Start a Project</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight size={15} />
          </span>
        </Link>

        {/* Secondary Pill: Sleek translucent dark glass pill -> "View My Work" */}
        <Link
          href="#projects"
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-7 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.1] hover:text-white hover:scale-[1.02]"
        >
          View My Work
        </Link>

        {/* Resume CV shortcut */}
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition-colors px-3 py-2"
        >
          <Download size={13} />
          CV / Resume
        </Link>
      </motion.div>

      {/* ── Compact Social Links & Location ── */}
      <motion.div
        variants={itemUp}
        className="mt-10 flex items-center justify-center lg:justify-start gap-3"
      >
        {[
          {
            href: "https://github.com/MaiyoDenis",
            label: "GitHub",
            icon: <GithubIcon size={16} />,
          },
          {
            href: "https://linkedin.com/in/MaiyoDenis",
            label: "LinkedIn",
            icon: <LinkedinIcon size={16} />,
          },
          {
            href: "mailto:denismaiyo14@gmail.com",
            label: "Email",
            icon: <Mail size={16} />,
          },
        ].map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-[#FE5101]/50 hover:bg-[#FE5101]/10 transition-all duration-200"
          >
            {icon}
          </a>
        ))}

        <div className="mx-2 h-3.5 w-px bg-white/15" />

        <span className="text-[11px] text-white/50 font-mono">
          Nairobi, Kenya 🇰🇪
        </span>
      </motion.div>
    </motion.div>
  );
}
