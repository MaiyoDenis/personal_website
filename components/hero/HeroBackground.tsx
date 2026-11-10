"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      const horizon = h * 0.70; // Moved horizon down to prevent text overlap

      // Draw Retro Sun
      const sunX = w / 2;
      const sunY = horizon;
      const sunRadius = Math.min(w, h) * 0.35; // Made sun slightly larger

      const sunGrad = ctx.createLinearGradient(0, sunY - sunRadius, 0, sunY + sunRadius);
      sunGrad.addColorStop(0, "#ff00ff");
      sunGrad.addColorStop(0.5, "#ff00aa");
      sunGrad.addColorStop(1, "#fcee0a");

      ctx.beginPath();
      ctx.arc(sunX, sunY, sunRadius, Math.PI, 0); // half circle (top)
      ctx.fillStyle = sunGrad;
      ctx.fill();

      // Sun scanlines (synthwave style slices)
      ctx.globalCompositeOperation = "destination-out";
      for (let i = 0; i < 20; i++) {
        const sliceY = sunY - (i * i * 1.5) - 10;
        const sliceHeight = i * 0.8 + 2;
        ctx.fillRect(sunX - sunRadius, sliceY, sunRadius * 2, sliceHeight);
      }
      ctx.globalCompositeOperation = "source-over";

      // Draw Perspective Grid
      time += 0.5; // animation speed
      ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
      ctx.lineWidth = 1.5;

      // Vertical lines spreading outwards
      const numLines = 40;
      for (let i = -numLines; i <= numLines; i++) {
        const xStart = w / 2 + (i * 20); // origin point at horizon
        const xEnd = w / 2 + (i * 120);  // spread at bottom
        
        ctx.beginPath();
        ctx.moveTo(xStart, horizon);
        ctx.lineTo(xEnd, h);
        ctx.stroke();
      }

      // Horizontal moving lines
      for (let i = 0; i < 30; i++) {
        // use an exponential curve for perspective feeling
        const yOffset = Math.pow((i * 15 + (time % 15)) / 450, 2) * (h - horizon);
        if (yOffset > h - horizon) continue;

        ctx.beginPath();
        ctx.moveTo(0, horizon + yOffset);
        ctx.lineTo(w, horizon + yOffset);
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden bg-[#0d0415]">
      {/* Synthwave Stars */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 90px 40px, #ffffff, rgba(0,0,0,0))",
          backgroundSize: "200px 200px"
        }}
      />
      
      {/* Dynamic Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ mixBlendMode: "screen" }}
      />
      
      {/* Glow Overlay at Horizon */}
      <div 
        className="absolute top-[45%] left-0 w-full h-[20%] opacity-80"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(255, 0, 255, 0.4), transparent)",
          filter: "blur(20px)"
        }}
      />
    </div>
  );
}
