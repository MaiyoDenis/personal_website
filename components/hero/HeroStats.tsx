export default function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-5">
      <Stat number="20+" text="Projects Delivered" />
      <Stat number="10+" text="AI & Automation" />
      <Stat number="Full-Stack" text="Engineering Focus" />
    </div>
  );
}

function Stat({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <h3 className="text-3xl font-bold text-white">{number}</h3>
      <p className="mt-2 text-sm text-gray-400">{text}</p>
    </div>
  );
}