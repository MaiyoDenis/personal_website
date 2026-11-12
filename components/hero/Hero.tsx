"use client";

import Image from "next/image";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pb-16 lg:pt-20 lg:pb-8 bg-[#050505]">

      {/* ── 0. City Skyline Background Image ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none"
      >
        <Image
          src="/images/background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-80 mix-blend-luminosity"
        />
        {/* Dark overlay — heavy left (text readable), light right (city glows) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/92 via-[#050505]/40 to-[#050505]/10" />
        {/* Top & bottom fade into the page bg */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* ── 1. Top-Left Volumetric Ambient Glow (Burnt Orange & Dark Rust) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-[550px] sm:w-[750px] lg:w-[900px] h-[500px] sm:h-[700px] opacity-50 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at 15% 15%, rgba(255, 90, 0, 0.45) 0%, rgba(180, 45, 0, 0.22) 32%, rgba(100, 20, 0, 0.08) 58%, transparent 75%)",
          filter: "blur(70px)",
        }}
      />

      {/* ── 2. Bottom Orange Dotted Wave Mesh (footers.png) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 w-full overflow-hidden leading-none select-none"
      >
        <Image
          src="/images/footers.png"
          alt="Particle wave mesh"
          width={2144}
          height={230}
          priority
          className="w-full h-auto max-h-[180px] sm:max-h-[240px] lg:max-h-[290px] object-cover object-bottom opacity-85 mix-blend-screen"
        />
        {/* Soft edge blend into #050505 background */}
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#050505] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#050505] to-transparent" />
      </div>

      {/* ── 3. Main Hero Two-Column Grid (Balanced 6 / 6 split) ── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Greeting, Display Name, Role, Focus Cards, CTAs, Socials (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <HeroLeft />
          </div>

          {/* Right Column: Glowing Ring, Floating Tech Cards, Denis Portrait & Building Card (6 cols) */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <HeroRight />
          </div>
        </div>
      </div>
    </section>
  );
}
