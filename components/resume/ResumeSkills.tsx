import { resumeSkills } from "@/data/resume";

export function ResumeSkills() {
  return (
    <section className="mb-10 print:mb-6">
      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-5 flex items-center gap-2 border-b border-slate-200 pb-2 print:text-lg print:mb-3">
        <span className="text-teal-500">/</span> Technical Skills
      </h3>

      <div className="space-y-4 print:space-y-2">
        {resumeSkills.map((cat) => (
          <div
            key={cat.category}
            className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs print:p-0 print:border-none print:shadow-none break-inside-avoid"
          >
            <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5 print:text-[11px] print:text-slate-900 print:mb-1">
              <span className="print:hidden">{cat.icon}</span>
              {cat.category}
            </h4>
            <div className="flex flex-wrap gap-1.5 print:gap-1">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg print:bg-transparent print:border-none print:p-0 print:after:content-[','] last:print:after:content-[''] print:text-[11px] print:text-slate-700"
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
