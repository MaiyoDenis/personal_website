"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Moon, Send } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", active: true },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Journey", href: "/#journey" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/8 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* ── Brand Logo: Orange DM Badge + Denis Maiyo ── */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#FE5101] to-[#ea3c00] text-white font-bold text-sm tracking-tight shadow-[0_0_20px_rgba(254,81,1,0.45)] group-hover:scale-105 transition-transform">
              DM
            </div>
            <span className="font-sans font-bold text-base md:text-lg text-white tracking-tight group-hover:text-white/90">
              Denis Maiyo
            </span>
          </Link>

          {/* ── Center Navigation ── */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  item.active
                    ? "text-white font-semibold after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-[#FE5101] after:rounded-full"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* ── Right Actions ── */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle (Moon button matching screenshot) */}
            <button
              type="button"
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
            >
              <Moon size={16} />
            </button>

            {/* Resume Button */}
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white hover:border-white/30 hover:bg-white/10 transition-all"
            >
              <Download size={14} />
              <span>Resume</span>
            </Link>

            {/* Hire Me CTA Pill */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FE5101] to-[#FF6B2B] px-5 py-2 text-xs font-semibold text-white shadow-[0_0_25px_rgba(254,81,1,0.45)] hover:shadow-[0_0_35px_rgba(254,81,1,0.65)] hover:scale-105 transition-all"
            >
              <Send size={13} className="-rotate-12" />
              <span>Hire Me</span>
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            className="md:hidden text-white/80 hover:text-white p-1"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl pt-24 px-8 md:hidden flex flex-col justify-between pb-12"
          >
            <nav className="flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-xl font-semibold transition-colors ${
                    item.active ? "text-[#FE5101]" : "text-white hover:text-[#FE5101]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="pt-8 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/resume"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-3 text-sm font-medium text-white"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FE5101] to-[#FF6B2B] py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(254,81,1,0.5)]"
              >
                <Send size={15} className="-rotate-12" />
                <span>Hire Me</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
