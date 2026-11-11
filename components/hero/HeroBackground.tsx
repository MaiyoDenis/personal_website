"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 45, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-black z-0"
    >
      {/* ── Top-Left Volumetric Radiant Glow (Refined & Softened) ── */}
      <div 
        className="absolute -top-12 -left-12 w-[550px] sm:w-[750px] lg:w-[950px] h-[500px] sm:h-[680px] lg:h-[800px] opacity-75 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 8% 8%, rgba(254, 81, 1, 0.55) 0%, rgba(220, 35, 0, 0.35) 28%, rgba(120, 15, 0, 0.15) 55%, transparent 75%)",
          filter: "blur(65px)",
        }}
      />

      {/* Subtle warm ambient diffusion */}
      <div 
        className="absolute top-0 left-0 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] opacity-40 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 0% 0%, rgba(254, 81, 1, 0.6) 0%, rgba(180, 25, 0, 0.25) 50%, transparent 80%)",
          filter: "blur(50px)",
        }}
      />

      {/* ── Center Rim Lighting / Backlight Halo behind showcase card ── */}
      <div 
        className="absolute top-1/3 right-1/4 w-[480px] h-[480px] rounded-full opacity-60 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(254, 81, 1, 0.6) 0%, rgba(180, 25, 0, 0.3) 45%, transparent 75%)",
          filter: "blur(90px)",
        }}
      />

      {/* ── Interactive Cursor Spotlight ── */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 pointer-events-none"
        style={{
          x: springX,
          y: springY,
          background: "radial-gradient(circle, #FE5101 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ── Ultra-fine Grid Matrix Overlay with Vignette Mask ── */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.7) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 90%)",
        }}
      />

      {/* ── Horizon border line ── */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
