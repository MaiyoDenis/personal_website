import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2, Terminal, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Denis Maiyo",
    };
  }

  return {
    title: `${project.title} | Case Study | Denis Maiyo`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb / Back Navigation */}
          <div className="flex items-center gap-3 text-sm text-slate-400 mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-white transition-colors">
              All Projects
            </Link>
            <span>/</span>
            <span className="text-slate-200">{project.title}</span>
          </div>

          {/* Hero Header Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f1a] p-8 md:p-12 mb-10">
            {/* Background ambient glow */}
            <div
              className={`absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-gradient-to-br ${project.color} opacity-20 blur-3xl`}
            />

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} text-3xl shadow-xl`}
                  style={{ boxShadow: `0 8px 24px ${project.glow}` }}
                >
                  {project.emoji}
                </div>
                <div>
                  <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${project.statusColor}`}>
                    {project.status}
                  </span>
                  {project.role && (
                    <span className="ml-2 text-xs font-medium text-slate-400">
                      • {project.role}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                  >
                    <GithubIcon size={16} />
                    View Source
                  </Link>
                )}
                {project.demoUrl && project.demoUrl !== "#" && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
                  >
                    <ExternalLink size={16} />
                    Live Preview
                  </Link>
                )}
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              {project.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
              {project.problem}
            </p>
          </div>

          {/* Key Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                Key Highlights &amp; Impact
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="flex items-center gap-3 rounded-2xl border border-white/8 bg-[#0a0f1a] p-4 text-slate-200"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-sm font-medium">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Overview */}
          <div className="space-y-8 rounded-3xl border border-white/8 bg-[#0a0f1a] p-8 md:p-10 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Terminal size={20} className="text-blue-400" />
                Architecture &amp; Implementation
              </h2>
              <p className="text-slate-300 leading-relaxed text-base whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="border-t border-white/5 pt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Layers size={16} className="text-violet-400" />
                Technologies &amp; Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-slate-200 hover:border-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation to Other Projects */}
          <div className="flex items-center justify-between border-t border-white/10 pt-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              Return to Portfolio
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
            >
              Discuss a Project with Denis
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
