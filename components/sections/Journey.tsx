"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { timeline } from "@/data/experience";

const colorMap: Record<string, { line: string; dot: string; glow: string; badge: string }> = {
  "2023": {
    line: "from-blue-600 to-blue-400",
    dot: "bg-blue-500",
    glow: "rgba(59,130,246,0.4)",
    badge: "text-blue-400 bg-blue-500/10 border-blue-500/25",
  },
  "2024": {
    line: "from-violet-600 to-purple-400",
    dot: "bg-violet-500",
    glow: "rgba(139,92,246,0.4)",
    badge: "text-violet-400 bg-violet-500/10 border-violet-500/25",
  },
  "2025": {
    line: "from-cyan-600 to-cyan-400",
    dot: "bg-cyan-500",
    glow: "rgba(34,211,238,0.4)",
    badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/25",
  },
  "2026": {
    line: "from-pink-600 to-rose-400",
    dot: "bg-pink-500",
    glow: "rgba(236,72,153,0.4)",
    badge: "text-pink-400 bg-pink-500/10 border-pink-500/25",
  },
};

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const colors = colorMap[item.year] ?? colorMap["2026"];
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 hidden md:block"
      >
        {isLeft && (
          <TimelineCard item={item} colors={colors} isLeft={isLeft} />
        )}
        {!isLeft && <div />}
      </motion.div>

      {/* Center spine */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full ${colors.dot} text-white text-base font-semibold shadow-lg`}
          style={{ boxShadow: `0 0 20px ${colors.glow}` }}
        >
          {item.icon}
        </motion.div>
        {index < timeline.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className={`w-0.5 flex-1 min-h-[80px] bg-gradient-to-b ${colors.line} origin-top`}
          />
        )}
      </div>

      <div className="flex-1 hidden md:block">
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <TimelineCard item={item} colors={colors} isLeft={isLeft} />
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
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${colors.dot} text-sm`}
            style={{ boxShadow: `0 0 15px ${colors.glow}` }}
          >
            {item.icon}
          </div>
          {index < timeline.length - 1 && (
            <div className={`w-0.5 flex-1 min-h-[40px] bg-gradient-to-b ${colors.line} mt-2`} />
          )}
        </div>
        <TimelineCard item={item} colors={colors} isLeft={true} />
      </motion.div>
    </div>
  );
}

function TimelineCard({
  item,
  colors,
}: {
  item: typeof timeline[0];
  colors: { line: string; dot: string; glow: string; badge: string };
  isLeft: boolean;
}) {
  return (
    <div
      className="group mb-8 rounded-2xl border border-white/8 bg-[#0a0f1a] p-6 transition-all duration-400 hover:border-white/15 hover:-translate-y-1"
      style={{ transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className={`rounded-full border px-3 py-1 text-xs font-bold font-mono ${colors.badge}`}>
          {item.year}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>

      <p className="mt-2.5 text-sm leading-relaxed text-slate-500 group-hover:text-slate-400 transition-colors">
        {item.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="tech-pill">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-5xl px-6 py-28 lg:px-8">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/6 blur-3xl" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/8 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
          🚀 My Path
        </div>
        <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
          Engineering{" "}
          <span className="gradient-text">Journey</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-500">
          From writing my first lines of code to shipping production platforms —
          a rapid growth story.
        </p>
      </motion.div>

      {/* Personal Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
      >
        <p className="text-lg font-medium italic text-slate-300">
          &quot;I fell in love with coding because it&apos;s the closest thing we have to magic. 
          You type words on a screen, and a business process on the other side of the country transforms.&quot;
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="mt-16 flex flex-col gap-0 md:gap-0">
        {timeline.map((item, i) => (
          <TimelineItem key={item.year} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
