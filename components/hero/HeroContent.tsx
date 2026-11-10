"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const ROLES = ["Full-Stack Engineer", "AI Integrator", "SaaS Builder", "Problem Solver"] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } },
};

const textReveal: Variants = {
  hidden: { opacity: 0, y: "100%", rotate: 2 },
  show: {
    opacity: 1,
    y: "0%",
    rotate: 0,
    transition: { type: "spring", stiffness: 45, damping: 12, duration: 1 }
  },
};

export default function HeroContent() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 100);
    }

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center max-w-3xl text-center w-full"
    >
      <motion.div variants={itemUp} className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 w-fit backdrop-blur-sm shadow-[0_0_20px_rgba(16,185,129,0.15)]">
        <span className="status-dot bg-emerald-500 shadow-emerald-500 animate-pulse" />
        Currently building E-WiFi Platform
      </motion.div>

      <div className="mt-8 overflow-hidden pb-2">
        <motion.h1 variants={textReveal} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          Denis <span className="gradient-text-hero">Maiyo</span>
        </motion.h1>
      </div>

      <motion.div variants={itemUp} className="mt-6 flex flex-col sm:flex-row sm:items-center justify-center gap-4 h-8">
        <p className="font-mono text-sm font-medium tracking-widest text-blue-400 uppercase w-[220px] sm:w-auto text-center">
          <span className="typewriter-cursor pr-1">{displayText}</span>
        </p>
        <div className="hidden sm:block h-1 w-1 rounded-full bg-gray-600" />
        <div className="flex flex-wrap justify-center gap-2">
          {["Next.js", "Node.js", "Python", "OpenAI"].map((tag, i) => (
            <motion.span
              key={tag}
              className="tech-pill"
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: i * 0.2, ease: "easeInOut" }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.p variants={itemUp} className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
        I architect and ship <span className="text-white font-medium">intelligent software platforms</span>.
        From AI-powered APIs to real-time cloud systems, I turn ambitious ideas into production products that scale.
      </motion.p>

      <motion.div variants={itemUp} className="mt-10 flex flex-wrap justify-center gap-5">
        <Link href="#projects">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(37,99,235,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-medium text-white transition-colors"
          >
            <Sparkles size={16} />
            View My Work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </Link>
        <Link href="/resume">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-white transition-colors backdrop-blur-md"
          >
            <Download size={16} />
            View Resume / CV
          </motion.button>
        </Link>
      </motion.div>

      <motion.div variants={itemUp} className="mt-14 flex flex-col items-center gap-6 border-t border-white/10 pt-8 w-full max-w-md mx-auto">
        <span className="text-xs text-gray-500 font-medium uppercase tracking-[0.2em]">Connect With Me</span>
        <div className="flex justify-center gap-5">
          <motion.a
            href="https://github.com/MaiyoDenis"
            target="_blank"
            whileHover={{ y: -4, color: "#fff" }}
            className="text-gray-400 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <GithubIcon size={20} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/MaiyoDenis"
            target="_blank"
            whileHover={{ y: -4, color: "#fff" }}
            className="text-gray-400 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <LinkedinIcon size={20} />
          </motion.a>
          <motion.a
            href="mailto:denismaiyo14@gmail.com"
            whileHover={{ y: -4, color: "#fff" }}
            className="text-gray-400 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Mail size={20} />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
