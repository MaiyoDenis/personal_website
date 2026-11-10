"use client";

import StatCard from "@/components/ui/StatCard";

const stats = [
  { number: 3, prefix: "", suffix: "+", label: "Years Experience", color: "from-blue-500 to-cyan-400" },
  { number: 10, prefix: "", suffix: "+", label: "Projects Built", color: "from-violet-500 to-purple-400" },
  { number: 4, prefix: "", suffix: "", label: "Live Products", color: "from-pink-500 to-rose-400" },
  { number: 99, prefix: "", suffix: ".8%", label: "Uptime Record", color: "from-emerald-500 to-green-400" },
];

export default function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
      {stats.map((stat, i) => (
        <StatCard
          key={stat.label}
          number={stat.number}
          prefix={stat.prefix}
          suffix={stat.suffix}
          label={stat.label}
          color={stat.color}
          delay={0.8 + i * 0.1}
        />
      ))}
    </div>
  );
}
