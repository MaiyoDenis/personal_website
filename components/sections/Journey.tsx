"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { timeline } from "@/data/experience";

/* One unified orange/amber colour scheme for every year */
const DOT_BG = "bg-[#FF5A00]";
const DOT_GLOW = "rgba(255,90,0,0.45)";
const LINE_GRADIENT = "from-[#FF5A00] via-[#FF7A30] to-[#FF9D42]";
const BADGE_CLASS =
  "text-[#FF9D42] bg-[#FF5A00]/10 border border-[#FF5A00]/25";

function TimelineCard({
  item,
  inView,
}: {
  item: (typeof timeline)[0];
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="group mb-8 overflow-hidden rounded-[20px] border border-[rgba(255,90,0,0.15)] bg-[#0D0A08] p-6 transition-all duration-400 hover:border-[rgba(255,90,0,0.38)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(255,90,0,0.08)]"
      style={{ transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {/* Inner ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(200px circle at 50% -10%, rgba(255,90,0,0.07), transparent 70%)",
        }}
      />

      {/* Year badge */}
      <div className="relative flex flex-wrap items-center gap-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold font-mono ${BADGE_CLASS}`}
        >
          {item.year}
        </span>
        <span className="text-lg">{item.icon}</span>
      </div>

      {/* Title */}
      <h3 className="relative mt-3 text-base font-bold text-[#F5F0EA] group-hover:text-white transition-colors">
        {item.title}
      </h3>

      {/* Description */}
      <p className="relative mt-2.5 text-sm leading-relaxed text-[#A99B90] group-hover:text-[#B5A69A] transition-colors">
        {item.description}
      </p>

      {/* Tags */}
      <div className="relative mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md border border-white/8 bg-[#17100C] px-2.5 py-1 text-[10px] font-mono font-medium text-[#A99B90] transition-colors hover:border-[#FF5A00]/30 hover:text-white/90"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: (typeof timeline)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Left column (desktop) */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 hidden md:block"
      >
        {isLeft && <TimelineCard item={item} inView={inView} />}
        {!isLeft && <div />}
      </motion.div>

      {/* Center spine (desktop) */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full ${DOT_BG} text-base font-semibold shadow-lg`}
          style={{ boxShadow: `0 0 24px ${DOT_GLOW}` }}
        >
          {item.icon}
        </motion.div>
        {index < timeline.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
            className={`w-0.5 flex-1 min-h-[80px] bg-gradient-to-b ${LINE_GRADIENT} origin-top opacity-50`}
          />
        )}
      </div>

      {/* Right column (desktop) */}
      <div className="flex-1 hidden md:block">
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <TimelineCard item={item} inView={inView} />
          </motion.div>
        )}
        {isLeft && <div />}
      </div>

      {/* Mobile layout */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex gap-5 md:hidden"
      >
        <div className="flex flex-col items-center">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${DOT_BG} text-sm`}
            style={{ boxShadow: `0 0 16px ${DOT_GLOW}` }}
          >
            {item.icon}
          </div>
          {index < timeline.length - 1 && (
            <div
              className={`w-0.5 flex-1 min-h-[40px] bg-gradient-to-b ${LINE_GRADIENT} mt-2 opacity-50`}
            />
          )}
        </div>
        <TimelineCard item={item} inView={inView} />
      </motion.div>
    </div>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-5xl px-6 py-28 lg:px-8">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,90,0,0.045) 0%, rgba(255,90,0,0.012) 45%, transparent 70%)",
          filter: "blur(40px)",
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
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#FF5A00] animate-pulse" />
          My Path
        </div>

        <h2 className="mt-5 font-display text-4xl sm:text-6xl font-black tracking-tight">
          <span className="text-[#F5F0EA]">Engineering </span>
          <span className="text-[#FF5A00]">Journey</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed font-sans text-[#A99B90]">
          From writing my first lines of code to shipping production platforms — a rapid
          growth story.
        </p>
      </motion.div>

      {/* Personal quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-12 max-w-2xl rounded-[20px] border border-[rgba(255,90,0,0.18)] bg-[#0D0A08] p-6 text-center"
      >
        <span className="mb-3 inline-block text-2xl text-[#FF5A00] select-none">"</span>
        <p className="text-sm leading-relaxed font-medium italic text-[#B5A69A]">
          I fell in love with coding because it&apos;s the closest thing we have to magic.
          You type words on a screen, and a business process on the other side of the
          country transforms.
        </p>
        <span className="mt-3 inline-block text-2xl text-[#FF5A00] select-none">"</span>
      </motion.div>

      {/* Timeline */}
      <div className="mt-16 flex flex-col gap-0">
        {timeline.map((item, i) => (
          <TimelineItem key={item.year + i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
