"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

interface HeroButtonsProps {
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
}

export default function HeroButtons({
  primaryText = "View My Work",
  primaryHref = "#projects",
  secondaryText = "Download CV",
  secondaryHref = "/resume",
  className = "",
}: HeroButtonsProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto ${className}`}
    >
      {/* Primary CTA */}
      <Link
        href={primaryHref}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF5A00] to-[#FF7A2B] px-7 sm:px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(255,90,0,0.45)] hover:shadow-[0_0_42px_rgba(255,90,0,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
      >
        <span>{primaryText}</span>
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>

      {/* Secondary CTA */}
      <Link
        href={secondaryHref}
        className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-6 sm:px-7 py-3.5 text-sm font-medium text-white hover:border-white/40 hover:bg-white/10 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
      >
        <Download
          size={15}
          className="transition-transform duration-200 group-hover:-translate-y-0.5"
        />
        <span>{secondaryText}</span>
      </Link>
    </div>
  );
}
