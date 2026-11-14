import { resumeEducation } from "@/data/resume";
import { GraduationCap } from "lucide-react";

export function ResumeEducation() {
  return (
    <section className="mb-10 print:mb-6">
      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-5 flex items-center gap-2 border-b border-slate-200 pb-2 print:text-lg print:mb-3">
        <span className="text-teal-500">/</span> Education & Training
      </h3>

      <div className="space-y-4 print:space-y-3">
        {resumeEducation.map((edu, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs print:p-0 print:border-none print:shadow-none break-inside-avoid"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h4 className="font-bold text-slate-900 text-sm print:text-xs flex items-center gap-1.5">
                <GraduationCap size={15} className="text-teal-500 print:hidden shrink-0" />
                {edu.institution}
              </h4>
              <span className="text-xs font-semibold text-slate-500 print:text-[11px]">
                {edu.period}
              </span>
            </div>

            <div className="text-xs font-medium text-teal-700 print:text-slate-800 mb-1.5">
              {edu.degree} {edu.grade && <span className="text-slate-500 font-normal">({edu.grade})</span>}
            </div>

            <p className="text-xs text-slate-600 leading-relaxed print:text-[11px] print:text-slate-700">
              {edu.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
