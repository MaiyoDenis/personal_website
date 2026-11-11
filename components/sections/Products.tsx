"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { products } from "@/data/products";

/* Unified orange accent for all product status badges */
const STATUS_PILL =
  "flex items-center gap-1.5 text-[11px] font-semibold text-[#FF9D42]";

export default function Products() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
      {/* Ambient glows — orange only */}
      <div
        className="pointer-events-none absolute left-1/4 top-16 -z-10 h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,90,0,0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-16 -z-10 h-56 w-56 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,157,66,0.05) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[#FF5A00]/25 bg-[#FF5A00]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5A00]">
          <Sparkles size={11} />
          Currently Building
        </div>

        <h2 className="mt-5 font-display text-4xl sm:text-6xl font-black tracking-tight">
          <span className="text-[#F5F0EA]">Products I&apos;m </span>
          <span className="text-[#FF5A00]">Creating</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed font-sans text-[#A99B90]">
          Long-term products designed to solve real African tech problems. Building in
          public, shipping fast.
        </p>
      </motion.div>

      {/* Product cards */}
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col overflow-hidden rounded-[20px] border border-[rgba(255,90,0,0.15)] bg-[#0D0A08] p-6 transition-all duration-400 hover:border-[rgba(255,90,0,0.38)] hover:shadow-[0_20px_48px_rgba(255,90,0,0.09)]"
            style={{ transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF5A00]/50 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

            {/* Inner glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(280px circle at 50% -15%, rgba(255,90,0,0.08), transparent 70%)",
              }}
            />

            {/* Header row: icon + status */}
            <div className="relative flex items-center justify-between">
              {/* Icon */}
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #1A0E08 0%, #251508 100%)",
                  border: "1px solid rgba(255,90,0,0.22)",
                  boxShadow: "0 6px 20px rgba(255,90,0,0.12)",
                }}
              >
                {product.emoji}
              </div>

              {/* Status badge */}
              <div className={STATUS_PILL}>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF9D42] animate-pulse" />
                {product.status}
              </div>
            </div>

            {/* Title + tagline */}
            <h3 className="mt-5 text-xl font-bold text-[#F5F0EA] group-hover:text-white transition-colors">
              {product.name}
            </h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#FF9D42]/70">
              {product.tagline}
            </p>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-[#A99B90] group-hover:text-[#B5A69A] transition-colors flex-1">
              {product.description}
            </p>

            {/* Progress bar */}
            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#786E67]">Build Progress</span>
                <span className="text-[#FF9D42] font-semibold">{product.progress}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${product.progress}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.3,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.1 + 0.3,
                  }}
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #FF5A00 0%, #FF9D42 100%)",
                  }}
                />
              </div>
            </div>

            {/* Highlight badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              {product.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-[rgba(255,90,0,0.20)] bg-[#FF5A00]/8 px-2.5 py-1 text-[10px] font-medium text-[#FF9D42]"
                >
                  {h}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[#FF5A00] transition-all duration-300 group-hover:gap-2.5 group-hover:text-[#FF9D42]">
              Follow Progress
              <ArrowRight size={12} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
