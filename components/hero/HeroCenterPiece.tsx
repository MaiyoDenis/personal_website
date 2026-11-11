"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroCenterPiece() {
  return (
    <div className="relative w-full max-w-[420px] lg:max-w-[480px] h-[460px] sm:h-[540px] lg:h-[620px] flex items-end justify-center select-none pointer-events-none">
      {/* ── Intense Flame Rim Backlight Halo behind Subject ── */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full opacity-80 blur-[80px] pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, #FE5101 0%, rgba(220, 35, 0, 0.6) 40%, rgba(120, 10, 0, 0.2) 70%, transparent 85%)",
        }}
      />

      {/* ── Center Cybernetic Subject ── */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full flex items-end justify-center"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-character.jpg"
            alt="Denis Maiyo Cyber Portrait"
            fill
            className="object-contain object-bottom filter contrast-105 brightness-100"
            priority
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 480px"
          />

          {/* Bottom fade into pure black so the torso cuts cleanly at the base */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

          {/* Left and Right vignette bleeds for seamless integration */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}
