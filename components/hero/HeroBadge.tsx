"use client";

import { motion } from "framer-motion";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex"
    >
      <div className="badge-available relative inline-flex items-center gap-2.5 rounded-full border border-green-500/25 bg-green-500/8 px-5 py-2 text-xs font-semibold text-green-400 backdrop-blur-sm">
        <span className="status-dot" />
        <span>Available for opportunities</span>
        <span className="ml-1 text-green-500/60">·</span>
        <span className="text-green-300/70">Full-time / Contract</span>
      </div>
    </motion.div>
  );
}
