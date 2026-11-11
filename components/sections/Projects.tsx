"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Image from "next/image";
import Link from "next/link";
import { useRef, MouseEvent, useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";

/* ─── Tech badge ───────────────────────────────────────────────────── */
function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/8 bg-[#17100C] px-2.5 py-1 text-[10px] font-medium text-[#B5A69A] transition-all duration-200 hover:border-[#FF5A00]/30 hover:text-white/90">
      {label}
    </span>
  );
}

/* ─── Metric chip ──────────────────────────────────────────────────── */
function MetricChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-[#FF5A00]/12 bg-[#FF5A00]/6 px-2.5 py-1 text-[10px] font-mono text-[#FF9D42]/80">
      <span className="inline-block h-1 w-1 rounded-full bg-[#FF9D42]/60" />
      {label}
    </span>
  );
}

/* ─── Status badge ─────────────────────────────────────────────────── */
function StatusBadge({
  status,
  statusColor,
}: {
  status: string;
  statusColor: string;
}) {
  const isLive = status === "Live" || status === "Active";
  return (
    <span
      className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold backdrop-blur-md bg-black/50 ${statusColor}`}
    >
      {isLive && (
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
      )}
      {status}
    </span>
  );
}

/* ─── Project card ─────────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hovered, setHovered] = useState(false);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2.5, -2.5]), {
    stiffness: 180,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2.5, 2.5]), {
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
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(255,90,0,0.15)] bg-[#0D0A08] transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(255,90,0,0.40)] hover:shadow-[0_24px_60px_rgba(255,90,0,0.10)] cursor-default"
      >
        {/* Ambient inner glow on hover */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,90,0,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5A00]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* ── Screenshot area ──────────────────────────────── */}
        <div
          className="relative overflow-hidden rounded-t-2xl"
          style={{ height: "224px" }}
        >
          {hasScreenshot ? (
            <>
              {/* Primary screenshot */}
              <Image
                src={project.screenshot!}
                alt={`${project.title} screenshot`}
                fill
                className={`object-cover object-top transition-all duration-700 ${
                  showHoverShot ? "opacity-0 scale-105" : "opacity-100 scale-100"
                } group-hover:scale-[1.04]`}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index < 2}
              />

              {/* Hover screenshot */}
              {project.screenshotHover && (
                <Image
                  src={project.screenshotHover}
                  alt={`${project.title} alternate view`}
                  fill
                  className={`object-cover object-top absolute inset-0 transition-all duration-700 ${
                    showHoverShot ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}

              {/* Subtle bottom fade only — keeps screenshot bright */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A08] via-[#0D0A08]/15 to-transparent" />

              {/* Orange frame glow */}
              <div className="absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-[#FF5A00]/12 group-hover:ring-[#FF5A00]/25 transition-all duration-500" />

              {/* Status badge */}
              <div className="absolute top-3 right-3">
                <StatusBadge
                  status={project.status}
                  statusColor={project.statusColor}
                />
              </div>

              {/* Live site pill */}
              {project.demoUrl && project.demoUrl !== "#" && (
                <div className="absolute bottom-3 left-3">
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg bg-black/70 backdrop-blur-sm border border-white/10 px-2.5 py-1.5 text-[11px] font-mono text-white/80 hover:border-[#FF5A00]/40 hover:text-white transition-all"
                  >
                    <ExternalLink size={10} />
                    {project.demoUrl
                      .replace("https://", "")
                      .replace("http://", "")
                      .split("/")[0]}
                  </Link>
                </div>
              )}

              {/* Hover-to-preview hint */}
              {project.screenshotHover && (
                <div
                  className={`absolute bottom-3 right-3 flex items-center gap-1 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 px-2.5 py-1.5 text-[10px] text-[#B5A69A] transition-all duration-300 ${
                    hovered ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <span>Hover to preview</span>
                </div>
              )}
            </>
          ) : (
            /* No screenshot — warm gradient placeholder */
            <div className="h-full w-full bg-gradient-to-br from-[#1A0E08] to-[#0D0A08] flex items-center justify-center">
              <span className="text-5xl opacity-30">{project.emoji}</span>
            </div>
          )}
        </div>

        {/* ── Card body ────────────────────────────────────── */}
        <div className="relative flex flex-col flex-1 p-6">
          {/* Title row */}
          <div className="flex items-start gap-3">
            {/* Icon */}
            <div
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-xl"
              style={{
                background:
                  "linear-gradient(135deg, #1A0E08 0%, #251208 100%)",
                border: "1px solid rgba(255,90,0,0.20)",
                boxShadow: "0 4px 16px rgba(255,90,0,0.10)",
              }}
            >
              {project.emoji}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-bold text-[#F5F0EA] leading-tight group-hover:text-white transition-colors">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:underline underline-offset-2"
                  >
                    {project.title}
                  </Link>
                </h3>
                {project.featured && (
                  <span className="rounded-full border border-[#FF5A00]/30 bg-[#FF5A00]/12 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#FF5A00]">
                    Featured
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-xs font-medium text-[#B5A69A]/70 leading-snug line-clamp-1">
                {project.problem}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm leading-relaxed text-[#B5A69A] group-hover:text-[#C8BAB0] transition-colors flex-1 line-clamp-3">
            {project.description}
          </p>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.metrics.slice(0, 3).map((m) => (
                <MetricChip key={m} label={m} />
              ))}
            </div>
          )}

          {/* Tech badges */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>

          {/* Footer links */}
          <div className="mt-5 flex items-center justify-between border-t border-[rgba(255,90,0,0.10)] pt-4">
            <div className="flex items-center gap-4">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[12px] text-[#B5A69A]/60 hover:text-[#F5F0EA] transition-colors font-medium"
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
                  className="flex items-center gap-1.5 text-[12px] text-[#B5A69A]/60 hover:text-[#FF9D42] transition-colors font-medium"
                >
                  <ExternalLink size={12} />
                  Live Demo
                </Link>
              )}
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="flex items-center gap-1 text-[12px] font-semibold text-[#FF5A00] hover:text-[#FF9D42] transition-colors group/link"
            >
              Case Study
              <ArrowRight
                size={12}
                className="transition-transform group-hover/link:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Section ──────────────────────────────────────────────────────── */
export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8"
    >
      {/* Background ambient glows */}
      <div
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,90,0,0.055) 0%, rgba(255,90,0,0.015) 45%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(255,90,0,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Heading ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        {/* Label pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#FF5A00]/25 bg-[#FF5A00]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5A00]">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#FF5A00] animate-pulse" />
          Selected Systems &amp; Platforms
        </div>

        <h2 className="mt-5 font-display text-4xl sm:text-6xl font-black tracking-tight">
          <span className="text-[#F5F0EA]">Featured </span>
          <span className="text-[#FF5A00]">Architecture</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed font-sans text-[#B5A69A]">
          Production loan engines, collateral liquidation marketplaces, and
          multi-tenant architectures engineered with strict data integrity.
        </p>
      </motion.div>

      {/* ── Project grid ─────────────────────────────────────── */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {featured.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-14 text-center flex flex-wrap items-center justify-center gap-4"
      >
        {/* Primary CTA — orange gradient button */}
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,90,0,0.40)]"
          style={{
            background: "linear-gradient(135deg, #FF5A00 0%, #FF7A30 100%)",
            boxShadow: "0 0 20px rgba(255,90,0,0.25)",
          }}
        >
          Explore All Projects
          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

        {/* Secondary CTA — dark glass outline */}
        <Link
          href="https://github.com/MaiyoDenis"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-[rgba(255,90,0,0.20)] bg-[#0D0A08] px-6 py-3 text-sm font-medium text-[#B5A69A] transition-all duration-300 hover:border-[rgba(255,90,0,0.45)] hover:text-[#F5F0EA]"
        >
          <GithubIcon size={16} />
          GitHub Profile
        </Link>
      </motion.div>
    </section>
  );
}
