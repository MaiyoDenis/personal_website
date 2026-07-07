import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">
        <HeroContent />
        <HeroDashboard />
      </div>
    </section>
  );
}