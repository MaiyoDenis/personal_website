"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MapPin, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import EngineeringBackground from "@/components/ui/EngineeringBackground";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "denismaiyo14@gmail.com",
    href: "mailto:denismaiyo14@gmail.com",
    description: "Primary channel for collaborations & contracts",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/MaiyoDenis",
    href: "https://linkedin.com/in/MaiyoDenis",
    description: "Professional profile & updates",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/MaiyoDenis",
    href: "https://github.com/MaiyoDenis",
    description: "Explore all source code & repositories",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Outer Glowing Card Frame ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl sm:rounded-[36px] border border-[#FE5101]/60 bg-[#080808]/95 p-8 sm:p-12 lg:p-16 shadow-[0_0_60px_rgba(254,81,1,0.2),inset_0_0_30px_rgba(254,81,1,0.08)] backdrop-blur-2xl"
        >
          {/* Subtle Outer Neon Halo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-0.5 rounded-[38px] opacity-30 blur-lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(254,81,1,0.7) 0%, transparent 50%, rgba(254,81,1,0.7) 100%)",
            }}
          />

          <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">
            
            {/* ── Left Column (7 cols) ── */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FE5101]/35 bg-[#FE5101]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FE5101] w-fit mb-7">
                <span className="flex h-1.5 w-1.5 rounded-full bg-[#FE5101] animate-pulse" />
                Start a Conversation
              </div>

              {/* Headline */}
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-black text-white leading-[1.08] tracking-tight mb-6">
                Let&apos;s build{" "}
                <span className="text-[#FE5101]">resilient systems</span>{" "}
                together.
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-white/60 leading-relaxed font-sans max-w-xl mb-8">
                I am available for engineering roles, FinTech architecture
                contracts, and ambitious digital ventures. Let&apos;s turn complex
                workflows into scalable, verified platforms.
              </p>

              {/* Meta items */}
              <div className="space-y-3 font-sans text-xs sm:text-[13px] text-white/70 mb-10">
                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FE5101]/15 text-[#FE5101]">
                    <MapPin size={12} />
                  </div>
                  <span>
                    Nairobi, Kenya <span className="text-white/40">•</span> Available worldwide
                  </span>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <span>
                    Available immediately <span className="text-white/40">•</span> EAT (UTC+3)
                  </span>
                </div>

                {/* Response time */}
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FE5101]/15 text-[#FE5101]">
                    <Clock size={12} />
                  </div>
                  <span>Response time: within 24 hours</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                {/* Primary Button */}
                <Link
                  href="mailto:denismaiyo14@gmail.com"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#FE5101] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_0_25px_rgba(254,81,1,0.5)] transition-all duration-300 hover:bg-[#ff681a] hover:shadow-[0_0_35px_rgba(254,81,1,0.8)] hover:scale-[1.02]"
                >
                  <Mail size={16} />
                  <span>Email Me Directly</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {/* Secondary Button */}
                <Link
                  href="mailto:denismaiyo14@gmail.com?subject=Schedule%20a%20Call"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:border-[#FE5101]/50 hover:bg-[#FE5101]/10 hover:text-white"
                >
                  <Calendar size={15} className="text-white/70" />
                  <span>Schedule a Call</span>
                </Link>
              </div>
            </div>

            {/* ── Right Column (5 cols) ── */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Header Label */}
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[11px] font-mono uppercase tracking-[0.24em] font-bold text-white/60">
                  Direct Channels
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#FE5101]/60 to-transparent" />
              </div>

              {/* Channel Cards */}
              {channels.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group relative flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0d0d0f]/90 p-4 sm:p-5 transition-all duration-300 hover:border-[#FE5101]/60 hover:bg-[#121114] hover:shadow-[0_0_25px_rgba(254,81,1,0.18)]"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      {/* Icon */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#161619] text-white transition-colors group-hover:border-[#FE5101]/50 group-hover:text-[#FE5101]">
                        <c.icon size={20} />
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <div className="text-base font-bold text-white tracking-tight group-hover:text-[#FE5101] transition-colors">
                          {c.label}
                        </div>
                        <div className="font-mono text-xs text-white/60 truncate mt-0.5">
                          {c.value}
                        </div>
                        <div className="text-[11px] text-white/40 mt-0.5 truncate">
                          {c.description}
                        </div>
                      </div>
                    </div>

                    {/* Arrow Icon */}
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center text-white/40 group-hover:text-[#FE5101] transition-colors">
                      <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
