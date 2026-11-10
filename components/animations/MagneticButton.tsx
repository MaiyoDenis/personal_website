"use client";

import {
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  /** How strong the magnetic pull is (0–1). Default 0.35 */
  strength?: number;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  id?: string;
}

export default function MagneticButton({
  children,
  strength = 0.35,
  className = "",
  onClick,
  disabled,
  type = "button",
  id,
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { stiffness: 200, damping: 18, mass: 0.5 };
  const rawX = useSpring(0, springConfig);
  const rawY = useSpring(0, springConfig);

  // Inner content moves slightly more for parallax depth
  const innerX = useTransform(rawX, (v) => v * 1.4);
  const innerY = useTransform(rawY, (v) => v * 1.4);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current || disabled) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rawX.set((e.clientX - cx) * strength);
    rawY.set((e.clientY - cy) * strength);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      id={id}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x: rawX, y: rawY }}
      className={`relative inline-flex cursor-pointer select-none ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {/* Magnetic glow when hovered */}
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-white/5"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      />

      {/* Inner content floats more */}
      <motion.span
        style={{ x: innerX, y: innerY }}
        className="relative inline-flex items-center gap-2"
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
