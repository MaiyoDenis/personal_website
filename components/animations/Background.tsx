"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* Soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-transparent to-transparent" />

      {/* Floating blobs */}
      <motion.div
        className="absolute left-[-10%] top-[10%] h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[-15%] top-[35%] h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl"
        animate={{
          y: [0, 18, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-[25%] bottom-[-20%] h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

