"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

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
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#050505]"
    >
      {/* Primary Ambient Glow - Deep Sapphire / Blue */}
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-blue-600/12 blur-[140px]" />

      {/* Secondary Ambient Glow - Indigo / Violet */}
      <div className="absolute left-1/2 top-1/4 -z-10 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px]" />

      {/* Subtle Cyan Accent Orb */}
      <div className="absolute right-1/4 top-1/3 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-500/8 blur-[110px]" />

      {/* Interactive Cursor Spotlight Glow */}
      <motion.div
        className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]"
        style={{
          x: springX,
          y: springY,
        }}
      />

      {/* Refined Dot Matrix Pattern with Radial Mask */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 38%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 38%, black 30%, transparent 80%)",
        }}
      />

      {/* Subtle Horizontal Gradient Horizon Line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
