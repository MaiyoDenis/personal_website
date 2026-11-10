"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/animations/CountUp";

interface StatCardProps {
  number: number;
  label: string;
  prefix?: string;
  suffix?: string;
  color: string;
  delay?: number;
}

export default function StatCard({ number, label, prefix = "", suffix = "", color, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/6 hover:-translate-y-1"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
      <h3 className={`bg-gradient-to-r ${color} bg-clip-text text-2xl lg:text-3xl font-black text-transparent flex items-center`}>
        {prefix}
        <CountUp to={number} className="inline-block" />
        {suffix}
      </h3>
      <p className="mt-1 text-[0.7rem] lg:text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </p>
    </motion.div>
  );
}
