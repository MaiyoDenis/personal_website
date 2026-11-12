"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const SHOWCASE_ITEMS = [
  {
    id: "assethub",
    title: "AssetHub Platform",
    subtitle: "Dual-purpose loan CRM & collateral liquidation marketplace.",
    image: "/images/projects/assethub-marketplace.webp",
    metric1: "100%",
    metric1Label: "No random code. Only clear systems built for scale.",
    metric2: "360°",
    metric2Label: "Full platform scope. From loan CRM to public liquidation.",
    link: "/projects/assethub-loans",
  },
  {
    id: "assetmind",
    title: "Asset Mind LMS",
    subtitle: "Multi-tenant FinTech loan engine with live M-Pesa callbacks.",
    image: "/images/projects/assetmind-dashboard.webp",
    metric1: "2.7M+",
    metric1Label: "KES legacy discrepancy reconciled into production.",
    metric2: "99.9%",
    metric2Label: "Reliability across daily disbursements and STK automated collections.",
    link: "/projects/asset-mind-lms",
  },
  {
    id: "fagasa",
    title: "Fagasa Investment",
    subtitle: "Enterprise microfinance system with PAR aging and treasury tracking.",
    image: "/images/projects/fagasa-dashboard.webp",
    metric1: "100%",
    metric1Label: "Real-time portfolio tracking across branch networks.",
    metric2: "360°",
    metric2Label: "End-to-end loan simulation, underwriting, and PDF generation.",
    link: "/projects/fagasa-loan-system",
  },
];

export default function HeroShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-advance showcase every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = SHOWCASE_ITEMS[activeIdx];

  return (
    <div className="relative w-full max-w-[420px] select-none flex flex-col justify-center">
      {/* ── Soft Ambient Glow behind Right Card ── */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-[90px] pointer-events-none opacity-50"
        style={{
          background: "radial-gradient(circle, #FE5101 0%, rgba(180, 25, 0, 0.4) 45%, transparent 75%)",
        }}
      />

      <div className="relative flex flex-col gap-6">
        {/* ── Top Floating Recognition / Platform Card (Image 1 Signature) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl border border-white/12 bg-black/70 p-4 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          style={{
            boxShadow: "0 25px 50px -12px rgba(254,81,1,0.2), 0 0 0 1px rgba(255,255,255,0.08)",
          }}
        >
          {/* Subtle Flame ambient bleed on card edge */}
          <div className="absolute top-0 right-0 h-28 w-28 bg-[#FE5101]/15 blur-2xl pointer-events-none" />

          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-3.5">
              {/* Framed Glowing Preview Image */}
              <div className="relative w-20 sm:w-24 aspect-square rounded-xl overflow-hidden border border-white/15 bg-black/80 flex-shrink-0 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      className="object-cover object-top filter brightness-95 contrast-105"
                      priority
                    />
                    {/* Flame orange rim border effect */}
                    <div className="absolute inset-0 border border-[#FE5101]/40 rounded-xl pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Floating Link Pill inside frame */}
                <Link
                  href={current.link}
                  className="absolute top-1.5 right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-black/75 text-white backdrop-blur-md transition-all hover:bg-[#FE5101] hover:scale-110"
                  title="View Case Study"
                >
                  <ArrowUpRight size={11} />
                </Link>
              </div>

              {/* Recognition / Showcase Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#FE5101] font-bold">
                    Featured System
                  </span>
                  <Link
                    href={current.link}
                    className="flex items-center gap-1 text-[11px] text-white/50 hover:text-white transition-colors"
                  >
                    <ExternalLink size={11} />
                  </Link>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                      {current.title}
                    </h3>
                    <p className="mt-0.5 text-[11px] text-white/60 leading-snug line-clamp-2">
                      {current.subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Slider Track + Interactive Dots (Image 1 details) */}
            <div className="flex items-center justify-between pt-2.5 border-t border-white/8">
              {/* Thin slider progress indicator */}
              <div className="w-24 sm:w-28 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  key={activeIdx}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-white/40 to-[#FE5101]"
                />
              </div>

              {/* Pagination Dots (White & Flame Orange active) */}
              <div className="flex items-center gap-1.5">
                {SHOWCASE_ITEMS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`View ${item.title}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIdx === idx
                        ? "w-4 bg-[#FE5101]"
                        : "w-1.5 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Twin Hero Impact Metrics (Image 1 Signature: 100% & 360°) ── */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-1">
          {/* Metric 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={current.id + "_m1"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="font-display text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-white leading-none"
              >
                {current.metric1}
              </motion.span>
            </AnimatePresence>
            <span className="mt-1.5 text-[11px] sm:text-xs text-white/50 leading-snug">
              {current.metric1Label}
            </span>
          </motion.div>

          {/* Metric 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={current.id + "_m2"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="font-display text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-white leading-none"
              >
                {current.metric2}
              </motion.span>
            </AnimatePresence>
            <span className="mt-1.5 text-[11px] sm:text-xs text-white/50 leading-snug">
              {current.metric2Label}
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
