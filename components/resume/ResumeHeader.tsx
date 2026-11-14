import { resumePersonal } from "@/data/resume";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/Icons";

export function ResumeHeader() {
  return (
    <header className="border-b-2 border-slate-200 pb-8 mb-8 print:pb-4 print:mb-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 print:flex-row print:justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight print:text-3xl">
              {resumePersonal.fullName}
            </h1>
          </div>
          <p className="text-lg md:text-xl font-bold text-teal-600 mt-1 print:text-base print:text-teal-700">
            {resumePersonal.title}
          </p>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
            {resumePersonal.subTitle}
          </p>

          <p className="text-slate-600 mt-3 text-sm leading-relaxed print:text-xs print:mt-2 print:text-slate-700 max-w-2xl">
            {resumePersonal.summary}
          </p>
        </div>

        {/* Contact Information Column */}
        <div className="flex flex-col gap-1.5 text-xs text-slate-600 font-medium w-full md:w-auto shrink-0 print:text-[11px] print:w-auto">
          <a
            href={`mailto:${resumePersonal.email}`}
            className="flex items-center gap-2 hover:text-teal-600 transition-colors print:text-slate-800"
          >
            <Mail size={14} className="text-teal-500 shrink-0 print:text-slate-600" />
            <span>{resumePersonal.email}</span>
          </a>

          <a
            href={`tel:${resumePersonal.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 hover:text-teal-600 transition-colors print:text-slate-800"
          >
            <Phone size={14} className="text-teal-500 shrink-0 print:text-slate-600" />
            <span>{resumePersonal.phone}</span>
          </a>

          <span className="flex items-center gap-2 print:text-slate-800">
            <MapPin size={14} className="text-teal-500 shrink-0 print:text-slate-600" />
            <span>{resumePersonal.location}</span>
          </span>

          <a
            href={resumePersonal.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-teal-600 transition-colors print:text-slate-800"
          >
            <Globe size={14} className="text-teal-500 shrink-0 print:text-slate-600" />
            <span>{resumePersonal.portfolio.replace("https://", "")}</span>
          </a>

          <a
            href={resumePersonal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-teal-600 transition-colors print:text-slate-800"
          >
            <Github size={14} className="text-teal-500 shrink-0 print:text-slate-600" />
            <span>{resumePersonal.githubHandle}</span>
          </a>

          <a
            href={resumePersonal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-teal-600 transition-colors print:text-slate-800"
          >
            <Linkedin size={14} className="text-teal-500 shrink-0 print:text-slate-600" />
            <span>{resumePersonal.linkedinHandle}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
