import { resumeProjects } from "@/data/resume";
import { ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/Icons";

export function ResumeProjects() {
  return (
    <section className="mb-10 print:mb-6">
      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-5 flex items-center gap-2 border-b border-slate-200 pb-2 print:text-lg print:mb-3">
        <span className="text-teal-500">/</span> Featured Key Projects
      </h3>

      <div className="space-y-5 print:space-y-3">
        {resumeProjects.map((project, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 transition-colors print:p-0 print:border-none print:shadow-none break-inside-avoid"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-bold text-slate-900 text-base print:text-sm">
                  {project.title}
                </h4>
                <span className="text-xs text-slate-400 hidden sm:inline">•</span>
                <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-md print:border-none print:p-0 print:text-slate-600">
                  {project.category}
                </span>
              </div>

              <div className="flex gap-2 text-slate-400 print:hidden shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 hover:text-slate-900 transition-colors"
                    title="View GitHub"
                  >
                    <Github size={15} />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 hover:text-teal-600 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs text-slate-500 font-mono mb-2 print:text-[11px] print:text-slate-600">
              Stack: {project.tech.join(" • ")}
            </p>

            <ul className="space-y-1 text-xs md:text-sm text-slate-600 list-disc list-outside ml-4 print:text-xs print:text-slate-700">
              {project.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="pl-0.5">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
