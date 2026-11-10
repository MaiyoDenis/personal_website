"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Direction the element slides in from */
  direction?: Direction;
  /** Distance in pixels to slide */
  distance?: number;
  /** Apply blur during reveal */
  blur?: boolean;
  /** Scale from this value (e.g. 0.95) */
  scale?: number;
  /** Only animate once */
  once?: boolean;
  /** Viewport margin before triggering */
  margin?: string;
  /** Animation duration in seconds */
  duration?: number;
}

const getInitial = (
  direction: Direction,
  distance: number,
  blur: boolean,
  scale: number
) => {
  const translate: Record<string, number> = {};
  if (direction === "up") translate.y = distance;
  if (direction === "down") translate.y = -distance;
  if (direction === "left") translate.x = distance;
  if (direction === "right") translate.x = -distance;

  return {
    opacity: 0,
    ...translate,
    filter: blur ? "blur(12px)" : "blur(0px)",
    scale,
  };
};

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
  distance = 28,
  blur = false,
  scale = 1,
  once = true,
  margin = "-60px",
  duration = 0.65,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: margin as `${number}px` });

  const initial = getInitial(direction, distance, blur, scale);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
      } : initial}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
