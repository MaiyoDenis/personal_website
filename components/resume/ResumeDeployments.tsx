import { verifiedDeployments } from "@/data/resume";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export function ResumeDeployments() {
  return (
    <section className="mb-6 print:mb-4 break-inside-avoid">
      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 print:text-lg print:mb-2">
        <span className="text-teal-500">/</span> Verified Production Deployments
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {verifiedDeployments.map((dep) => (
          <a
            key={dep.name}
            href={dep.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-slate-200 bg-white hover:border-teal-500 hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-800 print:border-none print:p-0"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-teal-500 shrink-0" />
              <span>{dep.name}</span>
            </div>
            <ExternalLink size={12} className="text-slate-400 print:hidden" />
          </a>
        ))}
      </div>
    </section>
  );
}
