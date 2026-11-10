"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Delay before first child animates (seconds) */
  delayChildren?: number;
  /** Stagger delay between children (seconds) */
  staggerDelay?: number;
  /** Whether to trigger in viewport or immediately */
  inView?: boolean;
  /** Viewport margin */
  margin?: string;
}

interface ItemProps {
  children: ReactNode;
  className?: string;
  /** Override animation direction for this item */
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export function StaggerContainer({
  children,
  className = "",
  delayChildren = 0.05,
  staggerDelay = 0.1,
  inView = true,
  margin = "-60px",
}: ContainerProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  if (inView) {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: margin as `${number}px` }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
  distance = 24,
}: ItemProps) {
  const dirMap = {
    up:    { y: distance },
    down:  { y: -distance },
    left:  { x: distance },
    right: { x: -distance },
  };

  const item = {
    hidden: { opacity: 0, ...dirMap[direction] },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
