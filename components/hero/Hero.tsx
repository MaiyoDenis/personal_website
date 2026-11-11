import HeroContent from "./HeroContent";
import HeroBackground from "./HeroBackground";
import HeroCenterPiece from "./HeroCenterPiece";
import HeroShowcase from "./HeroShowcase";

export default function Hero() {
  return (
    <section className="relative min-h-[96vh] flex items-center overflow-hidden pt-28 pb-16 bg-black">
      {/* ── Background: Pure Black + Volumetric Top-Left Flame Glow ── */}
      <HeroBackground />

      {/* ── Foreground: True 3-Column Editorial Grid (Image 1 Signature Architecture) ── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column: Headline, Typewriter, Bio, Pill CTAs (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <HeroContent />
          </div>

          {/* Center Column: Futuristic Tech Subject with Visor & Rim Light overlapping Giant Typography (4 cols on lg) */}
          <div className="lg:col-span-4 flex items-end justify-center">
            <HeroCenterPiece />
          </div>

          {/* Right Column: Floating Recognition Card + 100% & 360° Metrics (4 cols on lg) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <HeroShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
