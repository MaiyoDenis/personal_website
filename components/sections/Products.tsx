"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
      {/* Background glow */}
      <div className="absolute left-1/4 top-20 -z-10 h-80 w-80 rounded-full bg-green-600/6 blur-3xl" />
      <div className="absolute right-1/4 bottom-20 -z-10 h-60 w-60 rounded-full bg-blue-600/6 blur-3xl" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/8 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-green-400">
          <Sparkles size={11} />
          Currently Building
        </div>
        <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
          Products I&apos;m{" "}
          <span className="gradient-text">Creating</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
          Long-term products designed to solve real African tech problems.
          Building in public, shipping fast.
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
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0a0f1a] p-6 transition-all duration-400"
            style={{
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Top gradient line */}
            <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            {/* Bg glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(300px circle at 50% -20%, ${product.glow}, transparent 70%)` }}
            />

            {/* Icon */}
            <div className="relative flex items-center justify-between">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${product.color} text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110`}
                style={{ boxShadow: `0 8px 24px ${product.glow}` }}>
                {product.emoji}
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className={`text-xs font-semibold ${product.textColor}`}>{product.status}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="mt-5 text-xl font-bold text-white">{product.name}</h3>
            <p className={`mt-1 text-xs font-medium uppercase tracking-wider ${product.textColor} opacity-70`}>
              {product.tagline}
            </p>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-slate-500 group-hover:text-slate-400 transition-colors">
              {product.description}
            </p>

            {/* Progress bar */}
            <div className="mt-5">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 mb-2">
                <span>Build Progress</span>
                <span className={product.textColor}>{product.progress}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${product.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 + 0.3 }}
                  className={`h-full rounded-full bg-gradient-to-r ${product.color}`}
                />
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-5 flex flex-wrap gap-2">
              {product.highlights.map((h) => (
                <span
                  key={h}
                  className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${product.borderColor} ${product.bgColor} ${product.textColor}`}
                >
                  {h}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button className={`mt-6 flex items-center gap-1.5 text-xs font-semibold ${product.textColor} transition-all group-hover:gap-2.5`}>
              Follow Progress
              <ArrowRight size={12} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
