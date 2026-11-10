"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Mode = "words" | "chars" | "lines";

interface TextRevealProps {
  children: string | string[];
  mode?: Mode;
  /** Stagger delay between each unit in seconds */
  stagger?: number;
  /** Initial animation delay */
  delay?: number;
  className?: string;
  /** Element tag to render */
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  /** Whether to add blur during reveal */
  blur?: boolean;
  /** Only animate once when entering viewport */
  once?: boolean;
}

function splitText(text: string, mode: Mode): string[] {
  if (mode === "chars") return text.split("");
  if (mode === "words") return text.split(" ");
  return [text]; // lines: treat full string as one unit
}

export default function TextReveal({
  children,
  mode = "words",
  stagger = 0.06,
  delay = 0,
  className = "",
  as: Tag = "div",
  blur = false,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const text = Array.isArray(children) ? children.join(" ") : children;
  const units = splitText(text, mode);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const unitVariant = {
    hidden: {
      opacity: 0,
      y: mode === "lines" ? 30 : 20,
      filter: blur ? "blur(8px)" : "blur(0px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={`overflow-hidden ${className}`}
      aria-label={text}
    >
      <Tag className="flex flex-wrap gap-x-[0.25em]" aria-hidden="true">
        {units.map((unit, i) => (
          <span key={`${unit}-${i}`} className="overflow-hidden inline-block">
            <motion.span
              variants={unitVariant}
              className="inline-block"
            >
              {unit}
              {mode === "words" && " "}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
