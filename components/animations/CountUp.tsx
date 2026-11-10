"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useSpring, useTransform, motion } from "framer-motion";

interface CountUpProps {
  /** The target number to count up to */
  to: number;
  /** Number to start from. Default 0 */
  from?: number;
  /** Number of decimal places. Default 0 */
  decimals?: number;
  /** Duration in seconds. Default 2 */
  duration?: number;
  /** String to prefix the number e.g. "$" */
  prefix?: string;
  /** String to suffix the number e.g. "%" or "K" */
  suffix?: string;
  className?: string;
  /** Delay before counting starts (seconds) */
  delay?: number;
}

export default function CountUp({
  to,
  from = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
  delay = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [hasStarted, setHasStarted] = useState(false);

  const motionValue = useSpring(from, {
    stiffness: 60,
    damping: 20,
    mass: 1,
    restDelta: 0.001,
  });

  const display = useTransform(motionValue, (v) =>
    `${prefix}${v.toFixed(decimals)}${suffix}`
  );

  useEffect(() => {
    if (isInView && !hasStarted) {
      const timer = setTimeout(() => {
        motionValue.set(to);
        setHasStarted(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasStarted, motionValue, to, delay]);

  return (
    <motion.span
      ref={ref}
      className={className}
      aria-label={`${prefix}${to}${suffix}`}
    >
      {display}
    </motion.span>
  );
}
