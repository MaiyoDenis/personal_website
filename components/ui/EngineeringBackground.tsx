"use client";

import React from "react";

interface EngineeringBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  showCurves?: boolean;
}

export default function EngineeringBackground({
  className = "",
  children,
  showCurves = true,
}: EngineeringBackgroundProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[#050302] ${className}`}
    >
      {/* ── Layer 1: Ambient Radial Burnt-Orange & Amber Corner Illumination ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        {/* Top-left deep burnt-orange & amber glow behind top curve & dots */}
        <div
          className="absolute -top-[15%] -left-[10%] w-[650px] sm:w-[850px] h-[550px] sm:h-[650px] opacity-75"
          style={{
            background:
              "radial-gradient(ellipse at 25% 25%, rgba(254, 81, 1, 0.45) 0%, rgba(200, 50, 0, 0.22) 35%, rgba(120, 20, 0, 0.08) 60%, transparent 80%)",
            filter: "blur(65px)",
          }}
        />

        {/* Top-right soft amber illumination */}
        <div
          className="absolute -top-[12%] -right-[8%] w-[550px] sm:w-[700px] h-[450px] sm:h-[550px] opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 75% 20%, rgba(255, 110, 20, 0.35) 0%, rgba(180, 40, 0, 0.16) 40%, transparent 75%)",
            filter: "blur(70px)",
          }}
        />

        {/* Bottom-left warm glow accent */}
        <div
          className="absolute -bottom-[15%] -left-[10%] w-[600px] sm:w-[800px] h-[500px] sm:h-[600px] opacity-70"
          style={{
            background:
              "radial-gradient(ellipse at 20% 80%, rgba(254, 81, 1, 0.45) 0%, rgba(180, 40, 0, 0.2) 35%, transparent 75%)",
            filter: "blur(70px)",
          }}
        />

        {/* Bottom-right amber highlight behind bottom-right dots */}
        <div
          className="absolute -bottom-[12%] -right-[10%] w-[650px] sm:w-[850px] h-[550px] sm:h-[650px] opacity-75"
          style={{
            background:
              "radial-gradient(ellipse at 80% 80%, rgba(255, 90, 0, 0.45) 0%, rgba(190, 45, 0, 0.22) 35%, rgba(100, 15, 0, 0.08) 60%, transparent 80%)",
            filter: "blur(65px)",
          }}
        />

        {/* Center Negative Space Preservation: Deep pure black vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(5, 3, 2, 0.95) 0%, rgba(5, 3, 2, 0.5) 70%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Layer 2: Geometric Glowing Dotted Matrix (Top-Left & Bottom-Right) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] select-none overflow-hidden"
      >
        {/* Top-Left Dotted Grid Pattern */}
        <div
          className="absolute top-0 left-0 w-[45%] h-[55%] opacity-85"
          style={{
            backgroundImage:
              "radial-gradient(circle, #FE5101 1.4px, transparent 1.6px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0",
            maskImage:
              "radial-gradient(ellipse 75% 75% at 0% 0%, black 25%, rgba(0,0,0,0.5) 60%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 75% at 0% 0%, black 25%, rgba(0,0,0,0.5) 60%, transparent 85%)",
          }}
        />

        {/* Bottom-Right Dotted Grid Pattern */}
        <div
          className="absolute bottom-0 right-0 w-[45%] h-[55%] opacity-85"
          style={{
            backgroundImage:
              "radial-gradient(circle, #FE5101 1.4px, transparent 1.6px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0",
            maskImage:
              "radial-gradient(ellipse 75% 75% at 100% 100%, black 25%, rgba(0,0,0,0.5) 60%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 75% at 100% 100%, black 25%, rgba(0,0,0,0.5) 60%, transparent 85%)",
          }}
        />
      </div>

      {/* ── Layer 3: Flowing Curved Light Trails & Waves (SVG Vector Bezier Paths) ── */}
      {showCurves && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] select-none"
        >
          <svg
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
          <defs>
            {/* Bright Orange Primary Gradient */}
            <linearGradient id="grad-curve-top-primary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FE5101" stopOpacity="0.2" />
              <stop offset="12%" stopColor="#FF7A00" stopOpacity="0.8" />
              <stop offset="26%" stopColor="#FFAA40" stopOpacity="1" />
              <stop offset="42%" stopColor="#FE5101" stopOpacity="0.85" />
              <stop offset="65%" stopColor="#C83800" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#551200" stopOpacity="0" />
            </linearGradient>

            {/* Top-Right Graceful Ribbons */}
            <linearGradient id="grad-curve-top-right-1" x1="45%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#FE5101" stopOpacity="0" />
              <stop offset="35%" stopColor="#FE5101" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#FF9020" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FFC870" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="grad-curve-top-right-2" x1="50%" y1="10%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FE5101" stopOpacity="0" />
              <stop offset="40%" stopColor="#C83800" stopOpacity="0.3" />
              <stop offset="75%" stopColor="#FE5101" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FFAA40" stopOpacity="0.95" />
            </linearGradient>

            {/* Bottom Multi-Layer Wave Gradients */}
            <linearGradient id="grad-curve-bottom-main" x1="0%" y1="80%" x2="100%" y2="90%">
              <stop offset="0%" stopColor="#FFAA40" stopOpacity="1" />
              <stop offset="15%" stopColor="#FF7A00" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#FE5101" stopOpacity="0.65" />
              <stop offset="60%" stopColor="#C83800" stopOpacity="0.4" />
              <stop offset="80%" stopColor="#FF7A00" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFAA40" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="grad-curve-bottom-secondary" x1="0%" y1="85%" x2="100%" y2="95%">
              <stop offset="0%" stopColor="#FE5101" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#FF8820" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#FE5101" stopOpacity="0.5" />
              <stop offset="75%" stopColor="#FF6800" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FFA030" stopOpacity="0.85" />
            </linearGradient>

            <linearGradient id="grad-curve-bottom-tertiary" x1="0%" y1="90%" x2="100%" y2="85%">
              <stop offset="0%" stopColor="#802000" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#B53500" stopOpacity="0.5" />
              <stop offset="65%" stopColor="#FE5101" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#401000" stopOpacity="0.1" />
            </linearGradient>

            {/* High-intensity Glow Filter */}
            <filter id="intense-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur1" />
              <feGaussianBlur stdDeviation="18" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Soft Ambient Line Glow Filter */}
            <filter id="ambient-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="22" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── TOP SECTION CURVES ── */}
          {/* Top-Left Glowing Sweep: Soft Ambient Aura */}
          <path
            d="M -50,115 C 200,105 380,45 580,-20"
            fill="none"
            stroke="#FE5101"
            strokeWidth="10"
            strokeOpacity="0.35"
            filter="url(#ambient-glow)"
          />
          {/* Top-Left Glowing Sweep: Mid Glow */}
          <path
            d="M -50,115 C 200,105 380,45 580,-20"
            fill="none"
            stroke="url(#grad-curve-top-primary)"
            strokeWidth="4"
            filter="url(#intense-glow)"
          />
          {/* Top-Left Glowing Sweep: Razor Core */}
          <path
            d="M -50,115 C 200,105 380,45 580,-20"
            fill="none"
            stroke="#FFF2DC"
            strokeWidth="1.6"
            strokeOpacity="0.9"
          />

          {/* Top-Right Secondary Graceful Curve 1 */}
          <path
            d="M 880,-10 C 1050,160 1250,90 1480,20"
            fill="none"
            stroke="url(#grad-curve-top-right-1)"
            strokeWidth="2.5"
            filter="url(#intense-glow)"
          />
          <path
            d="M 880,-10 C 1050,160 1250,90 1480,20"
            fill="none"
            stroke="#FFE6B8"
            strokeWidth="1"
            strokeOpacity="0.8"
          />

          {/* Top-Right Upper Delicate Accent Curve 2 */}
          <path
            d="M 1080,-15 C 1200,60 1340,30 1480,-5"
            fill="none"
            stroke="url(#grad-curve-top-right-2)"
            strokeWidth="1.8"
            filter="url(#ambient-glow)"
          />

          {/* ── BOTTOM SECTION WAVES & LIGHT TRAILS ── */}
          {/* Deep Ambient Wave Glow Base */}
          <path
            d="M -50,880 C 220,740 450,730 750,860 C 1050,970 1260,820 1480,770"
            fill="none"
            stroke="#FE5101"
            strokeWidth="14"
            strokeOpacity="0.3"
            filter="url(#ambient-glow)"
          />

          {/* Tertiary Subtle Deep-Orange Wave */}
          <path
            d="M -50,930 C 250,810 500,810 820,930 C 1100,1010 1320,860 1480,820"
            fill="none"
            stroke="url(#grad-curve-bottom-tertiary)"
            strokeWidth="2.5"
            strokeOpacity="0.75"
          />

          {/* Secondary Overlapping Smooth Wave */}
          <path
            d="M -40,860 C 200,750 420,745 700,830 C 980,910 1220,805 1480,775"
            fill="none"
            stroke="url(#grad-curve-bottom-secondary)"
            strokeWidth="2.8"
            filter="url(#intense-glow)"
          />

          {/* Primary Main Intense Luminous Wave */}
          <path
            d="M -50,880 C 220,740 450,730 750,860 C 1050,970 1260,820 1480,770"
            fill="none"
            stroke="url(#grad-curve-bottom-main)"
            strokeWidth="3.2"
            filter="url(#intense-glow)"
          />
          {/* Razor Sharp White/Amber Intense Core on Primary Wave */}
          <path
            d="M -50,880 C 220,740 450,730 750,860 C 1050,970 1260,820 1480,770"
            fill="none"
            stroke="#FFF2DC"
            strokeWidth="1.4"
            strokeOpacity="0.85"
          />

          {/* Lower Trailing Filament */}
          <path
            d="M 60,945 C 320,870 540,860 840,945 C 1120,1010 1350,900 1480,855"
            fill="none"
            stroke="url(#grad-curve-bottom-secondary)"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
        </svg>
      </div>
      )}

      {/* ── Content Container ── */}
      {children && (
        <div className="relative z-10 w-full">
          {children}
        </div>
      )}
    </div>
  );
}
