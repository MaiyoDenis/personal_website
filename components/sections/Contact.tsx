"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, MapPin, Clock, MessageSquare } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "denismaiyo14@gmail.com",
    href: "mailto:denismaiyo14@gmail.com",
    color: "from-blue-500 to-cyan-400",
    glow: "rgba(59,130,246,0.25)",
    description: "Best for serious opportunities",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/MaiyoDenis",
    href: "https://linkedin.com/in/MaiyoDenis",
    color: "from-blue-600 to-blue-400",
    glow: "rgba(37,99,235,0.25)",
    description: "Professional network",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/MaiyoDenis",
    href: "https://github.com/MaiyoDenis",
    color: "from-slate-500 to-slate-400",
    glow: "rgba(100,116,139,0.25)",
    description: "See all my work",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28 lg:px-8">
      {/* Glow orbs */}
      <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-blue-600/8 blur-3xl" />
      <div className="absolute right-0 bottom-0 -z-10 h-80 w-80 rounded-full bg-violet-600/8 blur-3xl" />

      <div className="overflow-hidden rounded-3xl border border-white/8 bg-[#0a0f1a] p-8 md:p-14">
        {/* Inner glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(59,130,246,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_100%,rgba(168,85,247,0.05),transparent_60%)]" />

        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/8 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-green-400 mb-6">
              <span className="status-dot" />
              Open to Opportunities
            </div>

            <h2 className="text-4xl font-black text-white md:text-5xl leading-tight">
              Let&apos;s Build{" "}
              <span className="gradient-text">Something</span>
              <br />
              Amazing Together
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-500">
              I&apos;m actively looking for{" "}
              <span className="text-white font-medium">full-time engineering roles</span> and{" "}
              <span className="text-white font-medium">contract projects</span>. Whether you&apos;re
              a startup, scale-up, or established company — if you need a driven full-stack or AI
              engineer who ships, let&apos;s talk.
            </p>

            {/* Quick facts */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <MapPin size={14} className="text-blue-400 shrink-0" />
                Nairobi, Kenya · Remote-first
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <Clock size={14} className="text-green-400 shrink-0" />
                Available immediately · UTC+3
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <MessageSquare size={14} className="text-violet-400 shrink-0" />
                Response time: within 24 hours
              </div>
            </div>

            {/* Primary CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="mailto:denismaiyo14@gmail.com"
                className="group inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:shadow-blue-600/40 hover:scale-[1.02] hover:-translate-y-0.5 shine"
              >
                <Mail size={15} />
                Email Me
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="mailto:denismaiyo14@gmail.com?subject=Let's%20have%20a%20chat!"
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/4 px-7 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all hover:bg-white/8 hover:border-white/20 hover:text-white hover:-translate-y-0.5"
              >
                <Clock size={15} className="text-violet-400" />
                Book 30-min Call
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
            <p className="text-sm font-medium text-slate-600 uppercase tracking-widest mb-2">
              Reach me directly
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
                  className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/3 p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/6 hover:-translate-y-0.5"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${c.color} shadow-md transition-transform group-hover:scale-110`}
                    style={{ boxShadow: `0 6px 16px ${c.glow}` }}
                  >
                    <c.icon size={17} className="text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-slate-600 uppercase tracking-wider">{c.label}</p>
                    <p className="mt-0.5 truncate text-sm font-semibold text-white">{c.value}</p>
                    <p className="mt-0.5 text-xs text-slate-600">{c.description}</p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="shrink-0 text-slate-700 transition-all group-hover:text-slate-400 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            ))}

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="rounded-xl border border-green-500/15 bg-green-500/5 p-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="status-dot" />
                <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Currently Available</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Open to full-time roles, contract work, and exciting startup opportunities.
                Kenya-based but 100% remote-ready.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
