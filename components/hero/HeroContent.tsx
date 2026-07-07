import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center h-full">
      <HeroBadge />

      <h1 className="mt-6 text-6xl md:text-7xl xl:text-8xl font-black leading-none tracking-tight text-white">
        Denis
        <br />
        Maiyo
      </h1>

      <h2 className="mt-6 text-3xl font-semibold text-gray-200">
        Software Engineer
      </h2>

      <p className="mt-3 text-xl text-blue-400 font-medium">
        AI Engineer • Full-Stack Developer
      </p>

      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
        Turning ambitious ideas into scalable software.
        <br />
        I build intelligent platforms, automation systems,
        cloud applications and AI-powered products that solve
        real-world problems.
      </p>

      <HeroButtons />

      <HeroStats />
    </div>
  );
}