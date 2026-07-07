const skillGroups = [
  {
    title: "Frontend",
    color: "from-cyan-500 to-blue-500",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    color: "from-green-500 to-emerald-500",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "REST APIs",
      "JWT",
    ],
  },
  {
    title: "AI & Automation",
    color: "from-purple-500 to-pink-500",
    skills: [
      "OpenAI",
      "Machine Learning",
      "Prompt Engineering",
      "Automation",
      "Computer Vision",
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "from-orange-500 to-red-500",
    skills: [
      "Docker",
      "Linux",
      "Git",
      "GitHub",
      "PostgreSQL",
      "MongoDB",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-28 lg:px-8"
    >
      <div className="text-center">
        <p className="font-semibold uppercase tracking-widest text-blue-400">
          Technologies
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Skills & Technologies
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
          I enjoy building complete software systems—from user interfaces
          to scalable backends, AI integrations, cloud deployment, and
          automation.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-blue-500/40 hover:bg-white/10"
          >
            <div
              className={`inline-block rounded-full bg-gradient-to-r ${group.color} px-5 py-2 text-sm font-semibold text-white`}
            >
              {group.title}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-[#1e293b] px-4 py-2 text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}