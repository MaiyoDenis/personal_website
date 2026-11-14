import { resumeExperiences } from "@/data/resume";
import { ExternalLink } from "lucide-react";

export function ResumeExperience() {
  return (
    <section className="mb-10 print:mb-6">
      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-5 flex items-center gap-2 border-b border-slate-200 pb-2 print:text-lg print:mb-3">
        <span className="text-teal-500">/</span> Work Experience
      </h3>

      <div className="space-y-6 print:space-y-4">
        {resumeExperiences.map((exp, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 transition-colors print:p-0 print:border-none print:shadow-none break-inside-avoid"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-bold text-slate-900 text-base md:text-lg print:text-sm">
                  {exp.role}
                </h4>
                <span className="text-slate-400 hidden sm:inline">|</span>
                <span className="font-semibold text-teal-700 text-sm md:text-base print:text-sm">
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline print:text-slate-900"
                    >
                      {exp.company}
                      <ExternalLink size={12} className="print:hidden text-teal-600 opacity-70" />
                    </a>
                  ) : (
                    exp.company
                  )}
                </span>
              </div>
              <div className="text-xs font-semibold text-slate-500 whitespace-nowrap print:text-slate-600">
                {exp.period}
              </div>
            </div>

            <div className="text-xs text-slate-500 mb-3 flex items-center gap-2 print:mb-1.5">
              <span>{exp.location}</span>
              {exp.type && (
                <>
                  <span>•</span>
                  <span className="text-teal-600 font-medium">{exp.type}</span>
                </>
              )}
            </div>

            <ul className="space-y-1.5 text-xs md:text-sm text-slate-600 leading-relaxed list-disc list-outside ml-4 print:text-xs print:space-y-1 print:text-slate-700">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="pl-0.5">
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-3 flex flex-wrap gap-1.5 print:hidden">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
