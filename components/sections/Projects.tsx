"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, MouseEvent } from "react";
import { GithubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#0a0f1a] p-0.5 transition-all duration-500 hover:border-white/15 cursor-default"
      >
        {/* Gradient border on hover */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-500 group-hover:opacity-15`}
          style={{ filter: "blur(1px)" }}
        />

        {/* Spotlight */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.glow}, transparent 60%)`,
          }}
        />

        <div className="relative flex flex-col flex-1 rounded-[calc(1rem-2px)] bg-[#0a0f1a] p-6">
          {/* Top row */}
          <div className="flex items-start justify-between">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${project.color} text-2xl shadow-lg`}
              style={{ boxShadow: `0 8px 24px ${project.glow}` }}
            >
              {project.emoji}
            </div>
            <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${project.statusColor}`}>
              {project.status}
            </span>
          </div>

          {/* Title & Problem */}
          <div className="mt-5">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-50 transition-colors flex items-center gap-2">
              <Link href={`/projects/${project.slug}`} className="hover:text-blue-400 transition-colors">
                {project.title}
              </Link>
              {project.featured && (
                <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] font-bold uppercase text-blue-400 ml-2">
                  Featured
                </span>
              )}
            </h3>
            <p className="mt-1 text-xs font-semibold text-slate-400">
              {project.problem}
            </p>
          </div>

          {/* Description */}
          <p className="mt-3 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors flex-1">
            {project.description}
          </p>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.metrics.map((m) => (
                <span key={m} className="rounded-md bg-white/5 border border-white/5 px-2.5 py-1 text-[11px] font-mono text-slate-300">
                  {m}
                </span>
              ))}
            </div>
          )}

          {/* Tech stack */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="tech-pill text-[11px]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[12px] text-slate-400 hover:text-white transition-colors font-medium"
                >
                  <GithubIcon size={14} />
                  Code
                </Link>
              )}
              {project.demoUrl && project.demoUrl !== "#" && (
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[12px] text-slate-400 hover:text-blue-400 transition-colors font-medium"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </Link>
              )}
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className={`flex items-center gap-1 text-[12px] font-semibold text-blue-400 hover:text-blue-300 transition-colors`}
            >
              Case Study
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
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
      {/* Section glow */}
      <div className="absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/8 blur-3xl" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/8 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
          <span className="status-dot" />
          Featured Work
        </div>
        <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
          Projects I&apos;ve{" "}
          <span className="gradient-text">Shipped</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
          Real products solving real problems — from multi-tenant microfinance platforms with live M-Pesa integration to unified e-commerce &amp; POS systems.
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
          className="group inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-5 py-2.5 text-sm text-white hover:bg-white/10 transition-all font-medium"
        >
          Explore All Projects
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href="https://github.com/MaiyoDenis"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors font-medium px-4 py-2.5"
        >
          <GithubIcon size={16} />
          GitHub Profile
        </Link>
      </motion.div>
    </section>
  );
}
