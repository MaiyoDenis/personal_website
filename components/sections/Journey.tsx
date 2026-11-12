"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { GraduationCap, Code2, Cpu, Shield, Quote } from "lucide-react";
import { journeyTimeline, TimelineMilestone } from "@/data/journey";

/* ── Spine Icon Helper ────────────────────────────────────────────────── */
function SpineIconBadge({ icon }: { icon: TimelineMilestone["spineIcon"] }) {
  const iconProps = { size: 18, strokeWidth: 2.2, className: "text-white" };

  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#FE5101] bg-[#0c0908] shadow-[0_0_24px_rgba(254,81,1,0.8),inset_0_0_12px_rgba(254,81,1,0.4)]">
      {icon === "grad" && <GraduationCap {...iconProps} />}
      {icon === "code" && <Code2 {...iconProps} />}
      {icon === "chip" && <Cpu {...iconProps} />}
      {icon === "shield" && <Shield {...iconProps} />}
    </div>
  );
}

/* ── Individual Card ──────────────────────────────────────────────────── */
function JourneyCard({ item }: { item: TimelineMilestone }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl sm:rounded-[24px] border border-[#FE5101]/40 bg-[#080808]/90 p-6 sm:p-7 shadow-[0_0_35px_rgba(254,81,1,0.15),inset_0_0_20px_rgba(254,81,1,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-[#FE5101] hover:shadow-[0_0_45px_rgba(254,81,1,0.28)]">
      {/* Top Header: Badge + Emoji */}
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center rounded-full border border-[#FE5101]/40 bg-[#FE5101]/10 px-3 py-1 text-xs font-bold font-mono text-[#FE5101]">
          {item.year}
        </span>
        <span className="text-base select-none">{item.badgeEmoji}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans mb-5">
        {item.description}
      </p>

      {/* Pill Tags */}
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/75 hover:border-[#FE5101]/40 hover:text-white transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Timeline Row ─────────────────────────────────────────────────────── */
function JourneyRow({
  item,
  index,
  isLast,
}: {
  item: TimelineMilestone;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex w-full items-center">
      {/* ── Desktop Grid Layout ── */}
      <div className="hidden md:grid md:grid-cols-12 md:w-full items-center">
        {/* Left Column (cols 1-5) */}
        <div className="col-span-5">
          {isLeft ? (
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <JourneyCard item={item} />
            </motion.div>
          ) : (
            <div />
          )}
        </div>

        {/* Center Spine Column (cols 6-7, span 2) */}
        <div className="col-span-2 relative flex flex-col items-center justify-center self-stretch">
          {/* Vertical Connecting Line (Behind icon) */}
          <div className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-[#FE5101]/80 via-[#FE5101] to-[#FE5101]/80 shadow-[0_0_12px_rgba(254,81,1,0.6)]" />

          {/* Node Icon Badge */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative z-10 my-8"
          >
            <SpineIconBadge icon={item.spineIcon} />
          </motion.div>
        </div>

        {/* Right Column (cols 8-12) */}
        <div className="col-span-5">
          {!isLeft ? (
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <JourneyCard item={item} />
            </motion.div>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* ── Mobile Layout ── */}
      <div className="flex md:hidden w-full gap-4 items-start">
        {/* Left Spine */}
        <div className="relative flex flex-col items-center self-stretch shrink-0">
          <div className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-[#FE5101] to-[#FE5101]/60" />
          <div className="relative z-10 mt-4">
            <SpineIconBadge icon={item.spineIcon} />
          </div>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex-1 pb-8"
        >
          <JourneyCard item={item} />
        </motion.div>
      </div>
    </div>
  );
}

/* ── Main Section ─────────────────────────────────────────────────────── */
export default function Journey() {
  return (
    <section
      id="journey"
      className="relative w-full overflow-hidden bg-[#050505] pt-24 pb-20"
    >
      {/* ── Top-Left Volumetric Radiant Glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-[600px] h-[550px] opacity-70 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(254,81,1,0.5) 0%, rgba(220,35,0,0.25) 35%, transparent 75%)",
          filter: "blur(75px)",
        }}
      />

      {/* ── Top-Right Ambient Glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 -right-24 w-[500px] h-[450px] opacity-40 z-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(254,81,1,0.35) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* ── Geometric Glowing Dotted Matrix (Top-Left & Bottom-Right Corners) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        {/* Top-Left Dotted Grid */}
        <div
          className="absolute top-0 left-0 w-[45%] h-[55%] opacity-85"
          style={{
            backgroundImage:
              "radial-gradient(circle, #FE5101 1.4px, transparent 1.6px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0",
            maskImage:
              "radial-gradient(ellipse 75% 75% at 0% 0%, black 25%, rgba(0,0,0,0.5) 60%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 75% at 0% 0%, black 25%, rgba(0,0,0,0.5) 60%, transparent 85%)",
          }}
        />

        {/* Bottom-Right Dotted Grid */}
        <div
          className="absolute bottom-0 right-0 w-[45%] h-[55%] opacity-85"
          style={{
            backgroundImage:
              "radial-gradient(circle, #FE5101 1.4px, transparent 1.6px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0",
            maskImage:
              "radial-gradient(ellipse 75% 75% at 100% 100%, black 25%, rgba(0,0,0,0.5) 60%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 75% at 100% 100%, black 25%, rgba(0,0,0,0.5) 60%, transparent 85%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FE5101]/35 bg-[#FE5101]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FE5101] mb-5">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#FE5101] animate-pulse" />
            My Path
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight">
            Engineering <span className="text-[#FE5101]">Journey</span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/55 leading-relaxed font-sans">
            From curiosity to expertise — a journey of continuous learning,
            building and solving real-world problems.
          </p>
        </motion.div>

        {/* ── Quote Box ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto mt-10 mb-16 max-w-3xl"
        >
          {/* Orange Backglow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-1 rounded-3xl opacity-35 blur-xl"
            style={{
              background:
                "linear-gradient(90deg, rgba(254,81,1,0.5), rgba(255,140,0,0.25), rgba(254,81,1,0.5))",
            }}
          />

          <div className="relative rounded-2xl sm:rounded-[22px] border border-[#FE5101]/50 bg-[#080808]/95 px-6 sm:px-10 py-5 sm:py-6 shadow-[0_0_35px_rgba(254,81,1,0.2)] backdrop-blur-xl">
            <div className="flex items-start sm:items-center gap-4">
              <span className="text-3xl sm:text-4xl font-serif text-[#FE5101] font-black leading-none select-none">
                “
              </span>
              <p className="text-xs sm:text-sm italic text-white/80 leading-relaxed font-sans">
                I believe in consistent learning, hands-on practice, and building
                solutions that create impact. Every step has brought me closer
                to becoming a world-class software engineer.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Alternating Spine Timeline ── */}
        <div className="relative mx-auto flex flex-col gap-6 md:gap-10">
          {journeyTimeline.map((item, index) => (
            <JourneyRow
              key={item.year}
              item={item}
              index={index}
              isLast={index === journeyTimeline.length - 1}
            />
          ))}
        </div>
      </div>

      {/* ── Bottom Orange Dotted Wave Mesh ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative w-full overflow-hidden leading-none select-none mt-16 sm:mt-24"
      >
        <Image
          src="/images/footers.webp"
          alt=""
          width={2144}
          height={230}
          className="w-full h-auto max-h-[160px] sm:max-h-[240px] object-cover object-center opacity-85 mix-blend-screen"
        />
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#050505] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#050505] to-transparent" />
      </div>
    </section>
  );
}
