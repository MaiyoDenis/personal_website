"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MapPin, Clock, MessageSquare } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "denismaiyo14@gmail.com",
    href: "mailto:denismaiyo14@gmail.com",
    color: "from-[#FE5101] to-[#FF7A00]",
    glow: "rgba(254,81,1,0.25)",
    description: "Primary channel for collaborations & contracts",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/MaiyoDenis",
    href: "https://linkedin.com/in/MaiyoDenis",
    color: "from-white to-white/70",
    glow: "rgba(255,255,255,0.15)",
    description: "Professional profile & updates",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/MaiyoDenis",
    href: "https://github.com/MaiyoDenis",
    color: "from-white/80 to-white/50",
    glow: "rgba(255,255,255,0.1)",
    description: "Explore all source code & repositories",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28 lg:px-8">
      {/* Flame glow orbs */}
      <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-[#FE5101]/6 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#FE5101]/4 blur-3xl pointer-events-none" />

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#080808] p-8 md:p-14 shadow-2xl">
        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FE5101]/30 bg-[#FE5101]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FE5101] mb-6">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#FE5101] animate-pulse" />
              Start a Conversation
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight">
              Let&apos;s build <span className="text-[#FE5101]">resilient systems</span> together.
            </h2>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-white/60 font-sans">
              I am available for <span className="text-white font-medium">engineering roles</span>,{" "}
              <span className="text-white font-medium">FinTech architecture contracts</span>, and ambitious digital ventures. 
              Let&apos;s turn complex workflows into scalable, verified platforms.
            </p>

            {/* Quick facts */}
            <div className="mt-8 space-y-3 font-mono text-xs text-white/50">
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-[#FE5101] shrink-0" />
                Nairobi, Kenya · Available Worldwide
              </div>
              <div className="flex items-center gap-3">
                <Clock size={14} className="text-emerald-400 shrink-0" />
                Available Immediately · EAT (UTC+3)
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare size={14} className="text-[#FE5101] shrink-0" />
                Response time: Within 24 hours
              </div>
            </div>

            {/* Kontour-style Pill CTAs */}
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <Link
                href="mailto:denismaiyo14@gmail.com"
                className="group inline-flex items-center gap-3 rounded-full bg-white pl-6 pr-2 py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#F2F2F2] hover:scale-[1.02] shadow-xl"
              >
                <span>Email Me Directly</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </Link>
              <Link
                href="mailto:denismaiyo14@gmail.com?subject=Let's%20have%20a%20chat!"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
              >
                Schedule a Call
              </Link>
            </div>
          </motion.div>

          {/* Right - Contact channels */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <p className="text-xs font-mono text-white/40 uppercase tracking-[0.2em] mb-2 font-semibold">
              Direct Channels
            </p>

            {channels.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              >
                <Link
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-[#0c0c0c] p-4 transition-all duration-300 hover:border-[#FE5101]/40 hover:bg-[#121212]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white group-hover:border-[#FE5101]/40 group-hover:text-[#FE5101] transition-colors">
                    <c.icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white group-hover:text-[#FE5101] transition-colors">
                        {c.label}
                      </span>
                      <ArrowUpRight size={14} className="text-white/40 group-hover:text-[#FE5101] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <div className="font-mono text-xs text-white/60 truncate mt-0.5">
                      {c.value}
                    </div>
                    <div className="text-[11px] text-white/40 mt-0.5">
                      {c.description}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
