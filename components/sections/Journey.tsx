const timeline = [
  {
    year: "2023",
    title: "Started Software Development",
    description:
      "Built a strong foundation in programming, web development, and software engineering.",
  },
  {
    year: "2024",
    title: "Full-Stack Development",
    description:
      "Designed and developed complete web applications using modern frontend and backend technologies.",
  },
  {
    year: "2025",
    title: "AI & Automation",
    description:
      "Expanded into AI-powered systems, intelligent assistants, and workflow automation.",
  },
  {
    year: "2026",
    title: "Building Production Products",
    description:
      "Focused on scalable platforms such as E-WiFi, AI Learning Assistant, Fantasy League Automation, and enterprise software.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="mx-auto max-w-5xl px-6 py-28"
    >
      <div className="text-center">
        <p className="font-semibold uppercase tracking-widest text-blue-400">
          Journey
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          My Engineering Journey
        </h2>
      </div>

      <div className="mt-20 space-y-10">
        {timeline.map((item) => (
          <div
            key={item.year}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <span className="text-blue-400 font-bold">
              {item.year}
            </span>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-4 text-gray-400 leading-8">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}