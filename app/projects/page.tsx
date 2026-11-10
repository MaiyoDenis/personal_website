import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Projects & Case Studies | Denis Maiyo",
  description:
    "Explore full-stack applications, multi-tenant SaaS systems, and financial platforms engineered by Denis Maiyo.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4 block w-fit">
              Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl">
              A comprehensive showcase of production software, microfinance SaaS systems, automated payment engines, and cloud platforms I&apos;ve engineered.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f1a] p-8 transition-all hover:border-white/20"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} text-2xl shadow-lg`}
                      style={{ boxShadow: `0 8px 24px ${project.glow}` }}
                    >
                      {project.emoji}
                    </div>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-xs font-medium text-slate-400">
                    {project.problem}
                  </p>
                  <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="rounded-lg bg-white/5 border border-white/5 px-2.5 py-1 text-xs font-mono text-slate-300"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-5">
                  <div className="flex items-center gap-4">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        <GithubIcon size={14} />
                        GitHub
                      </Link>
                    )}
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </Link>
                    )}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Details
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
