import HeroContent from "./HeroContent";
import HeroBackground from "./HeroBackground";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[70px]">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center px-6 py-20 lg:px-8">
        <HeroContent />
        <HeroStats />
      </div>
    </section>
  );
}
