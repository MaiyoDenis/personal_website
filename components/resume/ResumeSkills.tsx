import { skillGroups } from "@/data/skills";

export function ResumeSkills() {
  return (
    <section className="mb-10">
      <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
        <span className="text-teal-500">/</span> Technical Skills
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div key={group.title} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
              <span>{group.icon}</span>
              {group.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="text-sm font-medium text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-xl">
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
