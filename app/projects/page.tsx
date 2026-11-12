import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";
import EngineeringBackground from "@/components/ui/EngineeringBackground";

export const metadata: Metadata = {
  title: "Projects & Case Studies | Denis Maiyo",
  description:
    "Explore full-stack applications, multi-tenant SaaS systems, and financial platforms engineered by Denis Maiyo.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <EngineeringBackground className="min-h-screen pt-28 pb-20">
        <main className="px-6">
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
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4 block w-fit">
              <span className="status-dot" />
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
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/8 bg-[#080808] transition-all duration-300 hover:border-[#FE5101]/40 hover:shadow-[0_20px_50px_rgba(254,81,1,0.1)]"
              >
                {/* Screenshot Header if available */}
                {project.screenshot ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
                    <Image
                      src={project.screenshot}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.color}`} />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${project.statusColor} bg-black/40`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                ) : null}

                <div className="p-8 flex flex-col flex-1">
                  {/* Top Bar (if no screenshot, show status here) */}
                  {!project.screenshot && (
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
                  )}

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3">
                    {project.screenshot && (
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${project.color} text-xl shadow-lg`}
                      >
                        {project.emoji}
                      </div>
                    )}
                    <div>
                      <h2 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">
                        <Link href={`/projects/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h2>
                      <p className="mt-1 text-xs font-medium text-slate-400">
                        {project.problem}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-400 leading-relaxed flex-1">
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
                        className="tech-pill text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
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
                          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-orange-400 transition-colors"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </Link>
                      )}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors group/link"
                    >
                      View Details
                      <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      </EngineeringBackground>
    </>
  );
}
