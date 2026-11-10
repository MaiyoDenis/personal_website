"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, Mail, Download } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import ThemeToggle from "@/components/layout/ThemeToggle";

const navItems = [
  { name: "Projects", href: "/#projects" },
  { name: "Skills",   href: "/#skills"   },
  { name: "Journey",  href: "/#journey"  },
  { name: "Contact",  href: "/contact"   },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const navItem: Variants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-blue-600 to-violet-600 text-xs font-bold text-white">
                DM
              </div>
              <span className="font-bold text-white hidden sm:block">Denis Maiyo</span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <motion.nav 
            variants={navContainer}
            initial="hidden"
            animate="show"
            className="hidden md:flex items-center gap-6"
          >
            {navItems.map((item) => (
              <motion.div key={item.name} variants={navItem}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Desktop CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center gap-4"
          >
            <ThemeToggle />
            <Link
              href="https://github.com/MaiyoDenis"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <GithubIcon size={18} />
            </Link>
            <Link
              href="/resume"
              className="flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors"
            >
              <Download size={14} /> Resume
            </Link>
            <Link
              href="#contact"
              className="relative flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors group overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 bg-blue-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:animate-shimmer" />
              <Mail size={14} /> Hire Me
            </Link>
          </motion.div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-20 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-xl font-semibold text-gray-300 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-4" />
              <Link
                href="https://github.com/MaiyoDenis"
                className="flex items-center gap-3 text-lg text-gray-300"
              >
                <GithubIcon size={20} /> GitHub
              </Link>
              <Link
                href="/resume"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-lg text-gray-300"
              >
                <Download size={20} /> View Resume
              </Link>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 mt-4 rounded-md bg-blue-600 py-3 text-lg font-medium text-white"
              >
                <Mail size={20} /> Hire Me
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
