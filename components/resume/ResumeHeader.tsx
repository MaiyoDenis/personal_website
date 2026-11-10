import { siteConfig } from "@/data/site";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/Icons";

export function ResumeHeader() {
  return (
    <header className="border-b-2 border-slate-200 pb-8 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {siteConfig.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-teal-600 mt-2">
            {siteConfig.title}
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl text-sm leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
        
        <div className="flex flex-col gap-2 text-sm text-slate-600 font-medium w-full md:w-auto">
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-teal-600 transition-colors">
            <Mail size={16} className="text-teal-500" />
            {siteConfig.email}
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
            <Linkedin size={16} className="text-teal-500" />
            linkedin.com/in/MaiyoDenis
          </a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
            <Github size={16} className="text-teal-500" />
            github.com/MaiyoDenis
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-teal-500" />
            Remote / Worldwide
          </span>
        </div>
      </div>
    </header>
  );
}
