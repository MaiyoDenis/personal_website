"use client";

import { motion } from "framer-motion";
import { FolderGit2, GitCommit, Rocket, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/Icons";

export default function GithubSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505] pt-20 pb-16">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FE5101]/35 bg-[#FE5101]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FE5101] mb-5">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#FE5101] animate-pulse" />
            GitHub &amp; Development Profile
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            My Open Source <span className="text-[#FE5101]">Presence</span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/55 leading-relaxed font-sans">
            Building in public, contributing to the developer community,
            and sharing solutions that matter.
          </p>
        </motion.div>

        {/* Floating Neon GitHub Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Subtle Backlight Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-1 rounded-3xl opacity-40 blur-xl transition-all duration-500"
            style={{
              background:
                "linear-gradient(90deg, rgba(254,81,1,0.6) 0%, rgba(255,140,0,0.3) 50%, rgba(254,81,1,0.6) 100%)",
            }}
          />

          {/* Main Card Container */}
          <div className="relative rounded-2xl sm:rounded-[24px] border border-[#FE5101]/60 bg-[#080808]/95 p-5 sm:p-7 shadow-[0_0_50px_rgba(254,81,1,0.22),inset_0_0_24px_rgba(254,81,1,0.12)] backdrop-blur-xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              
              {/* Left Profile Info */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#121214] shadow-inner">
                  <GithubIcon size={30} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    MaiyoDenis
                  </h3>
                  <p className="flex items-center gap-1.5 text-xs sm:text-sm text-white/50 hover:text-[#FE5101] transition-colors">
                    github.com/MaiyoDenis
                    <ExternalLink size={12} className="opacity-70" />
                  </p>
                </div>
              </div>

              {/* Vertical Divider (Desktop) */}
              <div className="hidden lg:block h-12 w-px bg-white/10" />

              {/* Center Stats: Active repos, Yearly Commits, Production Deploys */}
              <div className="flex items-center justify-between sm:justify-start gap-6 sm:gap-10">
                {/* Active repos */}
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FE5101]/10 text-[#FE5101]">
                    <FolderGit2 size={16} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-medium uppercase tracking-wider text-white/50">
                      Active repos
                    </span>
                    <span className="text-lg sm:text-xl font-black text-white">
                      12+
                    </span>
                  </div>
                </div>

                {/* Commits / Year */}
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FE5101]/10 text-[#FE5101]">
                    <GitCommit size={16} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-medium uppercase tracking-wider text-white/50">
                      Commits / Year
                    </span>
                    <span className="text-lg sm:text-xl font-black text-white">
                      800+
                    </span>
                  </div>
                </div>

                {/* Production Deploys */}
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FE5101]/10 text-[#FE5101]">
                    <Rocket size={16} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-medium uppercase tracking-wider text-white/50">
                      Prod Deploys
                    </span>
                    <span className="text-lg sm:text-xl font-black text-white">
                      99.9% Uptime
                    </span>
                  </div>
                </div>
              </div>

              {/* Right CTA Button */}
              <div>
                <Link
                  href="https://github.com/MaiyoDenis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:border-[#FE5101] hover:bg-[#FE5101]/10 hover:shadow-[0_0_20px_rgba(254,81,1,0.3)] w-full sm:w-auto"
                >
                  View Profile
                  <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

            </div>
          </div>
        </motion.div>
      </div>

      {/* Dotted Wave Separator directly under the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative w-full overflow-hidden leading-none select-none mt-12 sm:mt-16"
      >
        <Image
          src="/images/footers.png"
          alt=""
          width={2144}
          height={230}
          className="w-full h-auto max-h-[160px] sm:max-h-[220px] object-cover object-center opacity-85 mix-blend-screen"
        />
        {/* Soft edge blend */}
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#050505] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#050505] to-transparent" />
      </div>
    </section>
  );
}
