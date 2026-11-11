"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, MouseEvent, useState } from "react";
import { GithubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hovered, setHovered] = useState(false);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), {
    stiffness: 180,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), {
    stiffness: 180,
    damping: 28,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  const hasScreenshot = !!project.screenshot;
  const showHoverShot = hovered && !!project.screenshotHover;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#080808] transition-all duration-500 hover:border-[#FE5101]/35 hover:shadow-[0_20px_50px_rgba(254,81,1,0.1)] cursor-default"
      >
        {/* Gradient glow border on hover */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
          style={{ filter: "blur(2px)" }}
        />

        {/* ── Screenshot / Preview area ─────────────────── */}
        <div className="relative overflow-hidden" style={{ height: "220px" }}>
          {hasScreenshot ? (
            <>
              {/* Primary screenshot */}
              <Image
                src={project.screenshot!}
                alt={`${project.title} screenshot`}
                fill
                className={`object-cover object-top transition-all duration-700 ${
                  showHoverShot ? "opacity-0 scale-105" : "opacity-100 scale-100"
                } group-hover:scale-[1.03]`}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index < 2}
              />
              {/* Hover screenshot */}
              {project.screenshotHover && (
                <Image
                  src={project.screenshotHover}
                  alt={`${project.title} alternate view`}
                  fill
                  className={`object-cover object-top transition-all duration-700 absolute inset-0 ${
                    showHoverShot ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
              {/* Dark gradient overlay so bottom content reads cleanly */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
              {/* Coloured top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.color}`} />

              {/* Status badge — floating on the image */}
              <div className="absolute top-3 right-3">
                <span
                  className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold backdrop-blur-md ${project.statusColor} bg-black/40`}
                >
                  {project.status === "Live" || project.status === "Active" ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  ) : null}
                  {project.status}
                </span>
              </div>

              {/* Live site pill — bottom-left of image */}
              {project.demoUrl && project.demoUrl !== "#" && (
                <div className="absolute bottom-3 left-3">
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 px-2.5 py-1.5 text-[11px] font-mono text-white hover:border-white/25 transition-all"
                  >
                    <ExternalLink size={10} />
                    {project.demoUrl.replace("https://", "").replace("http://", "").split("/")[0]}
                  </Link>
                </div>
              )}

              {/* Hover indicator — "Hover to preview" label that disappears on hover */}
              {project.screenshotHover && (
                <div
                  className={`absolute bottom-3 right-3 flex items-center gap-1 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 px-2.5 py-1.5 text-[10px] text-slate-400 transition-all duration-300 ${
                    hovered ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <span>Hover to preview</span>
                </div>
              )}
            </>
          ) : (
            /* Placeholder gradient when no screenshot */
            <div
              className={`h-full w-full bg-gradient-to-br ${project.color} opacity-15 flex items-center justify-center`}
            >
              <div className="text-6xl opacity-40">{project.emoji}</div>
            </div>
          )}
        </div>

        {/* ── Card body ─────────────────────────────────── */}
        <div className="relative flex flex-col flex-1 p-6">
          {/* Top row: emoji icon + title + featured badge */}
          <div className="flex items-start gap-3">
            <div
              className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${project.color} text-xl shadow-lg`}
              style={{ boxShadow: `0 6px 20px ${project.glow}` }}
            >
              {project.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-bold text-white leading-tight group-hover:text-white/90 transition-colors">
                  <Link href={`/projects/${project.slug}`} className="hover:underline underline-offset-2">
                    {project.title}
                  </Link>
                </h3>
                {project.featured && (
                  <span className="rounded-full bg-orange-500/15 border border-orange-500/25 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange-400">
                    Featured
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-xs font-medium text-slate-500 leading-snug">
                {project.problem}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors flex-1 line-clamp-3">
            {project.description}
          </p>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.metrics.slice(0, 3).map((m) => (
                <span
                  key={m}
                  className="rounded-md bg-white/4 border border-white/6 px-2 py-1 text-[10px] font-mono text-slate-400"
                >
                  {m}
                </span>
              ))}
            </div>
          )}

          {/* Tech stack */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="tech-pill text-[10px]">
                {t}
              </span>
            ))}
          </div>

          {/* Footer links */}
          <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
            <div className="flex items-center gap-4">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[12px] text-slate-500 hover:text-white transition-colors font-medium"
                >
                  <GithubIcon size={13} />
                  Code
                </Link>
              )}
              {project.demoUrl && project.demoUrl !== "#" && (
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[12px] text-slate-500 hover:text-orange-400 transition-colors font-medium"
                >
                  <ExternalLink size={12} />
                  Live Demo
                </Link>
              )}
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="flex items-center gap-1 text-[12px] font-semibold text-orange-400 hover:text-orange-300 transition-colors group/link"
            >
              Case Study
              <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
      {/* Section ambient glow */}
      <div className="absolute left-1/2 top-20 -z-10 h-96 w-[600px] -translate-x-1/2 rounded-full bg-[#FE5101]/5 blur-3xl pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[#FE5101]/30 bg-[#FE5101]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FE5101]">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#FE5101] animate-pulse" />
          Selected Systems &amp; Platforms
        </div>
        <h2 className="mt-5 font-display text-4xl sm:text-6xl font-black text-white tracking-tight">
          Featured <span className="text-[#FE5101]">Architecture</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/60 leading-relaxed font-sans">
          Production loan engines, collateral liquidation marketplaces, and multi-tenant architectures engineered with strict data integrity.
        </p>
      </motion.div>

      {/* Project grid */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center flex flex-wrap items-center justify-center gap-4"
      >
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-full border border-[#FE5101]/30 bg-[#FE5101]/10 px-6 py-3 text-xs sm:text-sm text-white hover:bg-[#FE5101] hover:text-black transition-all font-semibold"
        >
          Explore All Projects
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href="https://github.com/MaiyoDenis"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-xs sm:text-sm text-white/60 hover:text-white transition-colors font-medium px-5 py-3"
        >
          <GithubIcon size={16} />
          GitHub Profile
        </Link>
      </motion.div>
    </section>
  );
}
