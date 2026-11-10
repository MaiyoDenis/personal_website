import { ResumeHeader } from "@/components/resume/ResumeHeader";
import { ResumeExperience } from "@/components/resume/ResumeExperience";
import { ResumeSkills } from "@/components/resume/ResumeSkills";
import { ResumeProjects } from "@/components/resume/ResumeProjects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PrintButton } from "@/components/resume/PrintButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Denis Maiyo",
  description: "Software Engineer resume and curriculum vitae.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-200 selection:text-teal-900">
      {/* Top navigation (hidden when printing) */}
      <div className="print:hidden fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <PrintButton />
        </div>
      </div>

      {/* Main CV Container */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 print:pt-8 print:pb-0">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12 print:shadow-none print:border-none print:p-0">
          <ResumeHeader />
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 print:block">
            {/* Left Column */}
            <div className="print:w-full">
              <ResumeExperience />
              <ResumeProjects />
            </div>
            
            {/* Right Column */}
            <div className="print:w-full">
              <ResumeSkills />
              
              {/* Education / Additional Section */}
              <section className="mb-10">
                <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                  <span className="text-teal-500">/</span> Education
                </h3>
                <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-800">Computer Science &amp; Software Engineering</h4>
                  <p className="text-sm text-slate-600 mt-1">Applied Systems, Algorithms &amp; Full-Stack Architecture</p>
                  <p className="text-xs font-semibold text-teal-600 mt-2">Professional Practice &amp; Production Engineering</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
