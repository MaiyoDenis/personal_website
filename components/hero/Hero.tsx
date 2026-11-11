"use client";

import Image from "next/image";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-[95vh] lg:h-[95vh] flex flex-col justify-end overflow-hidden pt-20 sm:pt-24 lg:pt-20 pb-0 bg-black">
      {/* ── 1. Top-Left Volumetric Radiant Glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-[600px] sm:w-[800px] h-[550px] sm:h-[750px] opacity-60 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 15% 15%, rgba(254, 81, 1, 0.45) 0%, rgba(220, 35, 0, 0.25) 30%, rgba(120, 15, 0, 0.1) 55%, transparent 75%)",
          filter: "blur(65px)",
        }}
      />

      {/* ── 2. Bottom Orange Dotted Wave Mesh (footer.png) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 w-full overflow-hidden leading-none select-none"
      >
        <Image
          src="/images/footer.png"
          alt=""
          width={2144}
          height={733}
          priority
          className="w-full h-auto max-h-[220px] sm:max-h-[300px] lg:max-h-[360px] object-cover object-bottom opacity-85 mix-blend-screen"
        />
        {/* Soft bottom edge fade */}
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* ── 3. Main Hero Two-Column Grid ── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-8 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end">
          {/* Left Column: Greeting, Name, Role, Features, CTAs, Socials (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-end pb-8 sm:pb-12 lg:pb-10">
            <HeroLeft />
          </div>

          {/* Right Column: Glowing Ring, Floating Tech Pills, Portrait & Building Card (5 cols) */}
          <div className="lg:col-span-5 flex items-end justify-center self-end">
            <HeroRight />
          </div>
        </div>
      </div>
    </section>
  );
}
