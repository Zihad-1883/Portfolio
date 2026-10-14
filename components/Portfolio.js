"use client";
import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiArrowRight,
  FiLayers,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Portfolio() {
  // Top 3 featured projects for Home Page
  const featuredIds = ["algoarena", "devmentor", "image-matching-engine"];
  const featuredProjects = featuredIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-24 w-full">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          — 02 FEATURED WORK —
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, letterSpacing: "-0.05em" }}
          whileInView={{ opacity: 1, letterSpacing: "-0.02em" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-syne font-bold text-center glow-text text-[var(--text-primary)]"
        >
          Featured Projects
        </motion.h2>
        <p className="font-mono text-xs md:text-sm text-[var(--text-muted)] mt-4 max-w-2xl text-center leading-relaxed">
          Showcasing production-ready full-stack applications, distributed backend engines, and real-time platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            className="glass-card rounded-[2rem] overflow-hidden group flex flex-col h-[640px] relative border border-[var(--border)] hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.15)] transition-all duration-700"
          >
            {/* Visual Thumbnail / Preview */}
            <div className="h-56 w-full bg-[var(--surface-raised)] relative overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-10"
                  unoptimized
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c1e] to-[#050510] flex flex-col items-center justify-center p-6 gap-3 z-10 border-b border-[var(--border)]">
                  <FiLayers className="w-12 h-12 text-blue-500/40 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-400/80 font-bold">
                    System Architecture
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/90 via-transparent to-transparent z-20 pointer-events-none" />

              {/* Project Type Badge */}
              {project.projectType && (
                <div className="absolute top-4 left-4 z-30">
                  <span className="text-[9px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full font-bold">
                    👥 Team Project
                  </span>
                </div>
              )}
            </div>

            {/* Content Body */}
            <div className="p-7 flex flex-col flex-grow relative z-30 justify-between">
              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag, j) => (
                    <span
                      key={j}
                      className="text-[10px] font-mono border border-[var(--border-active)] px-2.5 py-0.5 rounded-full uppercase tracking-wider text-blue-400 bg-blue-500/5 font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[9px] font-mono text-[var(--text-muted)] self-center px-1">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-syne font-bold mb-3 tracking-tight text-[var(--text-primary)] group-hover:text-blue-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="font-mono text-[12px] text-[var(--text-muted)] leading-relaxed mb-4 line-clamp-3">
                  {project.desc}
                </p>

                {/* Key Metrics */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.metrics.slice(0, 2).map((metric, mIdx) => (
                    <span
                      key={mIdx}
                      className="text-[9px] font-mono text-[var(--text-primary)] bg-[var(--surface-raised)] border border-[var(--border)] px-2.5 py-1 rounded-md"
                    >
                      ⚡ {metric}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[var(--border)]">
                <Link
                  href={`/projects/${project.id}`}
                  className="w-full flex items-center justify-center gap-1.5 font-syne font-bold text-[10px] uppercase tracking-widest border border-[var(--border-active)] py-3 rounded-xl hover:bg-[var(--text-primary)] hover:text-[var(--bg)] transition-all duration-300 text-[var(--text-primary)] bg-[var(--surface-raised)]"
                >
                  View Details →
                </Link>

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 font-syne font-bold text-[10px] uppercase tracking-widest bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-md shadow-blue-500/20"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                ) : project.githubServer ? (
                  <a
                    href={project.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 font-syne font-bold text-[10px] uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 py-3 rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300"
                  >
                    <FiGithub /> Backend Repo
                  </a>
                ) : (
                  <span className="w-full flex items-center justify-center font-syne font-bold text-[10px] uppercase tracking-widest bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--text-muted)] py-3 rounded-xl opacity-60">
                    Schema Only
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button: View All Projects */}
      <div className="mt-16 flex justify-center w-full">
        <Link
          href="/projects"
          className="group relative px-8 py-4 rounded-2xl glass-card border border-[var(--border-active)] hover:border-blue-500 bg-[var(--surface-raised)] flex items-center gap-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:scale-[1.02]"
        >
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400 font-bold">
              Complete Portfolio Archive
            </span>
            <span className="text-sm md:text-base font-syne font-bold text-[var(--text-primary)]">
              View All Projects ({projects.length}+ Full Case Studies)
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 text-lg">
            <FiArrowRight />
          </div>
        </Link>
      </div>
    </section>
  );
}
