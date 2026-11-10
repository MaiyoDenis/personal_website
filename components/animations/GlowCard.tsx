"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
  /** Glow color in RGBA or hex. Default "rgba(99,102,241,0.4)" */
  glowColor?: string;
  /** Glow radius in px. Default 300 */
  glowSize?: number;
  className?: string;
  /** Border color when hovered. Default "rgba(255,255,255,0.12)" */
  hoverBorder?: string;
}

export default function GlowCard({
  children,
  glowColor = "rgba(99,102,241,0.35)",
  glowSize = 320,
  className = "",
  hoverBorder = "rgba(255,255,255,0.12)",
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPos(null);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden ${className}`}
      style={{
        border: `1px solid ${isHovered ? hoverBorder : "rgba(255,255,255,0.06)"}`,
        transition: "border-color 0.3s ease",
      }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Cursor-following glow */}
      {pos && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[inherit]"
          style={{
            background: `radial-gradient(${glowSize}px circle at ${pos.x}px ${pos.y}px, ${glowColor}, transparent 70%)`,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.15 }}
          aria-hidden="true"
        />
      )}

      {/* Card content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
