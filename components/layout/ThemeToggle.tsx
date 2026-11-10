"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // Read persisted preference on mount
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
      const stored = localStorage.getItem("theme") as Theme | null;
      const preferred =
        stored ??
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");
      setTheme(preferred);
      document.documentElement.classList.toggle("dark", preferred === "dark");
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10" aria-hidden="true" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 text-slate-400 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute"
          >
            <Moon size={16} className="text-blue-300" aria-hidden="true" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute"
          >
            <Sun size={16} className="text-yellow-300" aria-hidden="true" />
          </motion.span>
        )}
      </AnimatePresence>

      {/* Ambient glow behind button on hover */}
      <motion.span
        className={`pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
          isDark
            ? "bg-blue-500/10"
            : "bg-yellow-400/10"
        }`}
        aria-hidden="true"
      />
    </motion.button>
  );
}
