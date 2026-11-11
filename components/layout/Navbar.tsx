"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

const leftNav = [
  { name: "HOME", href: "/" },
  { name: "PROJECTS", href: "/#projects" },
  { name: "ABOUT", href: "/#about" },
];

const rightNav = [
  { name: "SKILLS", href: "/#skills" },
  { name: "JOURNEY", href: "/#journey" },
  { name: "RESUME", href: "/resume" },
  { name: "CONTACT", href: "/contact" },
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
            ? "bg-black/85 backdrop-blur-xl border-b border-white/8 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* ── Left Nav (Desktop) ── */}
          <nav className="hidden md:flex items-center gap-7 w-1/3">
            {leftNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-mono text-[11px] tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-200 uppercase"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* ── Center Studio Logo (Image 1 "KONTOUR STUDIOS" Signature) ── */}
          <div className="flex justify-center flex-1 md:flex-initial md:w-1/3">
            <Link href="/" className="flex flex-col items-center group text-center">
              <span className="font-display font-extrabold tracking-[0.25em] text-sm md:text-base text-white group-hover:text-[#FE5101] transition-colors duration-300 uppercase leading-tight">
                DENIS MAIYO
              </span>
              <span className="text-[8px] tracking-[0.35em] text-[#FE5101] font-mono uppercase mt-0.5 font-bold">
                STUDIOS / ARCHITECTURE
              </span>
            </Link>
          </div>

          {/* ── Right Nav (Desktop) ── */}
          <div className="hidden md:flex items-center justify-end gap-6 w-1/3">
            {rightNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-mono text-[11px] tracking-[0.2em] transition-colors duration-200 uppercase ${
                  item.name === "CONTACT"
                    ? "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#FE5101]/40 bg-[#FE5101]/10 text-white hover:bg-[#FE5101] hover:text-black font-semibold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.name}
                {item.name === "CONTACT" && <ArrowUpRight size={11} />}
              </Link>
            ))}
            <Link
              href="https://github.com/MaiyoDenis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/60 hover:text-white transition-colors"
            >
              <GithubIcon size={16} />
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
            <nav className="flex flex-col gap-6">
              {[...leftNav, ...rightNav].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-bold tracking-tight text-white hover:text-[#FE5101] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="pt-8 border-t border-white/10 flex items-center justify-between text-xs text-white/50 font-mono">
              <span>DENIS MAIYO · STUDIO</span>
              <span>NAIROBI, KE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
