"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
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
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 18 },
  },
};

const headlineReveal: Variants = {
  hidden: { opacity: 0, y: "60%", rotate: 1.5 },
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
      className="flex flex-col items-center justify-center max-w-2xl text-center w-full"
    >
      {/* Status badge */}
      <motion.div
        variants={itemUp}
        className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-4 py-1.5 text-xs font-semibold text-emerald-400 w-fit backdrop-blur-sm"
      >
        <span className="status-dot" />
        Available for new roles &amp; freelance
      </motion.div>

      {/* Headline */}
      <div className="mt-8 overflow-hidden pb-2">
        <motion.h1
          variants={headlineReveal}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Denis{" "}
          <span className="gradient-text-hero">Maiyo</span>
        </motion.h1>
      </div>

      {/* Typewriter role — single clean line, no pills */}
      <motion.div
        variants={itemUp}
        className="mt-5 flex items-center justify-center h-7"
      >
        <span className="font-mono text-sm font-medium tracking-widest text-blue-400 uppercase typewriter-cursor pr-0.5">
          {displayText}
        </span>
      </motion.div>

      {/* Bio */}
      <motion.p
        variants={itemUp}
        className="mt-7 text-base md:text-lg text-slate-400 leading-relaxed max-w-xl"
      >
        I architect and ship{" "}
        <span className="text-slate-200 font-medium">
          intelligent software platforms
        </span>
        . From AI-powered APIs to real-time cloud systems — turning ambitious
        ideas into production products that scale.
      </motion.p>

      {/* CTAs */}
      <motion.div
        variants={itemUp}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <Link href="#projects">
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(59,99,235,0.45)" }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-all duration-200"
          >
            <Sparkles size={15} />
            View My Work
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </motion.button>
        </Link>

        <Link href="/resume">
          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.09)" }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-md transition-all duration-200 hover:text-white"
          >
            <Download size={15} />
            Resume / CV
          </motion.button>
        </Link>
      </motion.div>

      {/* Social links — compact inline, no label */}
      <motion.div
        variants={itemUp}
        className="mt-10 flex items-center justify-center gap-3"
      >
        {[
          {
            href: "https://github.com/MaiyoDenis",
            label: "GitHub",
            icon: <GithubIcon size={18} />,
          },
          {
            href: "https://linkedin.com/in/MaiyoDenis",
            label: "LinkedIn",
            icon: <LinkedinIcon size={18} />,
          },
          {
            href: "mailto:denismaiyo14@gmail.com",
            label: "Email",
            icon: <Mail size={18} />,
          },
        ].map(({ href, label, icon }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            aria-label={label}
            whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.1)" }}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-white/8 bg-white/5 text-slate-400 hover:text-white transition-colors duration-200"
          >
            {icon}
          </motion.a>
        ))}

        <div className="mx-2 h-4 w-px bg-white/10" />

        <span className="text-xs text-slate-600 font-mono">
          Nairobi, Kenya 🇰🇪
        </span>
      </motion.div>
    </motion.div>
  );
}
