"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: 3,  suffix: "+",    label: "Years Experience", color: "from-orange-400 to-amber-400" },
  { number: 10, suffix: "+",    label: "Projects Built",   color: "from-rose-400 to-orange-400" },
  { number: 4,  suffix: "",     label: "Live Products",    color: "from-amber-400 to-yellow-300" },
  { number: 99, suffix: ".8%",  label: "Uptime Record",   color: "from-emerald-400 to-teal-400" },
];

function CountUp({
  to,
  suffix,
  color,
  inView,
}: {
  to: number;
  suffix: string;
  color: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = 16;
    const increment = to / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span
      className={`bg-gradient-to-r ${color} bg-clip-text text-transparent text-2xl md:text-3xl font-bold tabular-nums`}
    >
      {count}
      {suffix}
    </span>
  );
}

export default function HeroStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-16 lg:mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-14"
    >
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex items-center gap-8 md:gap-14">
          <div className="flex flex-col items-center gap-1">
            <CountUp
              to={stat.number}
              suffix={stat.suffix}
              color={stat.color}
              inView={inView}
            />
            <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">
              {stat.label}
            </span>
          </div>

          {/* Vertical divider — hidden after last item */}
          {i < stats.length - 1 && (
            <div className="h-8 w-px bg-white/8 hidden sm:block" />
          )}
        </div>
      ))}
    </motion.div>
  );
}
