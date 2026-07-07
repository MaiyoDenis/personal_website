const projects = [
  {
    title: "E-WiFi Platform",
    description:
      "A smart WiFi authentication and management platform with analytics, payments, and user administration.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    status: "In Progress",
  },
  {
    title: "AI Learning Assistant",
    description:
      "An AI-powered tutor that teaches programming interactively through projects and personalized guidance.",
    tech: ["Python", "OpenAI", "FastAPI"],
    status: "Active",
  },
  {
    title: "Fantasy League Automation",
    description:
      "Complete automation of registrations, fixtures, scoring, payments, and notifications.",
    tech: ["React", "Express", "MongoDB"],
    status: "Development",
  },
  {
    title: "Laundry Management System",
    description:
      "A modern management platform for customer orders, payments, inventory, and delivery tracking.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    status: "Completed",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-28 lg:px-8"
    >
      <div className="text-center">
        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Featured Work
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Projects I've Built
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
          Every project focuses on solving real-world problems using modern
          software engineering practices, AI, automation, and cloud
          technologies.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400">
                {project.status}
              </span>
            </div>

            <p className="mt-5 leading-8 text-gray-400">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-gray-800 px-4 py-2 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <button className="mt-10 text-blue-400 font-semibold transition group-hover:translate-x-2">
              View Project →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}