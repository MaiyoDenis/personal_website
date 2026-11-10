"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionTitleProps {
  /** Small badge label above the heading */
  badge?: string;
  /** Badge emoji or icon */
  badgeIcon?: string;
  /** Badge color variant */
  badgeVariant?: "blue" | "violet" | "green" | "cyan" | "orange";
  /** Main heading text — can include JSX for gradient spans */
  heading: ReactNode;
  /** Subtitle / description */
  subtitle?: string;
  /** Alignment */
  align?: "left" | "center" | "right";
  /** Custom className */
  className?: string;
  /** Animation delay */
  delay?: number;
}

const badgeStyles: Record<
  NonNullable<SectionTitleProps["badgeVariant"]>,
  string
> = {
  blue:   "border-blue-500/25 bg-blue-500/8 text-blue-400",
  violet: "border-violet-500/25 bg-violet-500/8 text-violet-400",
  green:  "border-green-500/25 bg-green-500/8 text-green-400",
  cyan:   "border-cyan-500/25 bg-cyan-500/8 text-cyan-400",
  orange: "border-orange-500/25 bg-orange-500/8 text-orange-400",
};

const alignClasses = {
  left:   "items-start text-left",
  center: "items-center text-center",
  right:  "items-end text-right",
};

export default function SectionTitle({
  badge,
  badgeIcon,
  badgeVariant = "blue",
  heading,
  subtitle,
  align = "center",
  className = "",
  delay = 0,
}: SectionTitleProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={`flex flex-col gap-4 ${alignClasses[align]} ${className}`}
    >
      {/* Badge */}
      {badge && (
        <motion.div variants={itemVariants}>
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] ${badgeStyles[badgeVariant]}`}
          >
            {badgeIcon && <span aria-hidden="true">{badgeIcon}</span>}
            {badge}
          </span>
        </motion.div>
      )}

      {/* Heading */}
      <motion.h2
        variants={itemVariants}
        className="text-4xl font-black leading-[1.1] text-white md:text-5xl lg:text-6xl"
      >
        {heading}
      </motion.h2>

      {/* Animated underline accent */}
      <motion.div
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          show: {
            scaleX: 1,
            opacity: 1,
            transition: { duration: 0.7, delay: delay + 0.3, ease: [0.16, 1, 0.3, 1] as const },
          },
        }}
        className={`h-0.5 w-16 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 ${
          align === "center" ? "self-center" : align === "right" ? "self-end" : "self-start"
        }`}
        style={{ originX: align === "right" ? 1 : 0 }}
      />

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className={`max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
