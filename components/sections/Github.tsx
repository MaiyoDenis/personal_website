"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "@/components/ui/Icons";

export default function GithubSection() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="overflow-hidden rounded-2xl border border-white/8 bg-[#0a0f1a] p-8"
      >
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <GithubIcon size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">MaiyoDenis</h3>
              <p className="text-sm text-slate-500">github.com/MaiyoDenis</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-1.5">
              <Star size={14} className="text-yellow-400" />
              <span>Active repos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GitFork size={14} className="text-blue-400" />
              <span>Open source</span>
            </div>
          </div>

          <Link
            href="https://github.com/MaiyoDenis"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:bg-white/8 hover:text-white"
          >
            View Profile
            <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
