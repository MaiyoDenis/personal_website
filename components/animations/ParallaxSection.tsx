"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  /** How many pixels to shift vertically at full scroll. Default 80 */
  offset?: number;
  /** Shift direction: "up" moves content up as user scrolls; "down" reverses */
  direction?: "up" | "down";
  className?: string;
}

export default function ParallaxSection({
  children,
  offset = 80,
  direction = "up",
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRange =
    direction === "up" ? [offset, -offset] : [-offset, offset];

  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
