import { Metadata } from "next";
import { ResumeHeader } from "@/components/resume/ResumeHeader";
import { ResumeExperience } from "@/components/resume/ResumeExperience";
import { ResumeSkills } from "@/components/resume/ResumeSkills";
import { ResumeProjects } from "@/components/resume/ResumeProjects";
import { ResumeEducation } from "@/components/resume/ResumeEducation";
import { ResumeDeployments } from "@/components/resume/ResumeDeployments";
import { ResumeToolbar } from "@/components/resume/ResumeToolbar";
import {
  resumePersonal,
  resumeExperiences,
  resumeProjects,
  resumeEducation,
  resumeSkills,
} from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume & CV | Denis Maiyo",
  description:
    "Curriculum Vitae and professional experience of Denis Kipchirchir Maiyo, Software Engineer & Full-Stack Developer specializing in FinTech systems.",
};

export default function ResumePage() {
  const atsMarkdown = `# ${resumePersonal.fullName}
**${resumePersonal.title}**
${resumePersonal.location} | ${resumePersonal.phone} | ${resumePersonal.email}
Portfolio: ${resumePersonal.portfolio} | GitHub: ${resumePersonal.github} | LinkedIn: ${resumePersonal.linkedin}

---

### PROFESSIONAL SUMMARY
${resumePersonal.summary}

---

### TECHNICAL SKILLS
${resumeSkills.map((s) => `- **${s.category}:** ${s.skills.join(", ")}`).join("\n")}

---

### WORK EXPERIENCE
${resumeExperiences
  .map(
    (exp) => `
**${exp.company}** | ${exp.location}
*${exp.role}* | ${exp.period}
${exp.bullets.map((b) => `- ${b}`).join("\n")}
Tech Stack: ${exp.tech.join(", ")}`
  )
  .join("\n")}

---

### FEATURED PROJECTS
${resumeProjects
  .map(
    (proj) => `
**${proj.title}** (${proj.category})
Stack: ${proj.tech.join(", ")}
${proj.bullets.map((b) => `- ${b}`).join("\n")}${proj.demoUrl ? `\nLive Demo: ${proj.demoUrl}` : ""}`
  )
  .join("\n")}

---

### EDUCATION
${resumeEducation
  .map(
    (edu) => `
**${edu.institution}** | ${edu.location}
*${edu.degree}* | ${edu.period}${edu.grade ? ` (${edu.grade})` : ""}
${edu.details}`
  )
  .join("\n")}
`;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-teal-200 selection:text-teal-900 print:bg-white print:text-black">
      {/* Top navigation toolbar (hidden when printing) */}
      <ResumeToolbar markdownContent={atsMarkdown} />

      {/* Main CV Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-24 print:pt-4 print:pb-0 print:px-0 print:max-w-none">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-10 md:p-12 print:shadow-none print:border-none print:p-0 print:rounded-none">
          {/* Header */}
          <ResumeHeader />

          {/* Technical Skills Overview */}
          <ResumeSkills />

          {/* Work Experience */}
          <ResumeExperience />

          {/* Key Featured Projects */}
          <ResumeProjects />

          {/* Education & Training */}
          <ResumeEducation />

          {/* Verified Live Systems */}
          <ResumeDeployments />

          {/* Footer note (for print reference) */}
          <div className="text-center pt-6 border-t border-slate-200 text-xs text-slate-400 print:text-[10px] print:text-slate-500">
            References and verified client references available upon request • Available for remote and on-site roles
          </div>
        </div>
      </main>
    </div>
  );
}
