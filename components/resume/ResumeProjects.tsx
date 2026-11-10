import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/Icons";

export function ResumeProjects() {
  return (
    <section className="mb-10">
      <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
        <span className="text-teal-500">/</span> Selected Projects
      </h3>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <div key={project.slug} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h4 className="font-bold text-slate-800 text-lg">{project.title}</h4>
              <p className="text-sm text-slate-600 mt-1 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 px-2 py-1 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 text-slate-500">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-slate-100 hover:text-slate-900 rounded-full transition-colors">
                  <Github size={18} />
                </a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-slate-100 hover:text-teal-600 rounded-full transition-colors">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
