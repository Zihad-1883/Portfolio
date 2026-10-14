"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiExternalLink, FiGithub, FiLayers } from "react-icons/fi";
import { projects } from "@/data/projects";

const filterCategories = [
  { id: "all", label: "All Projects" },
  { id: "team", label: "Team Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend Only" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Back Button */}
      <div className="mb-12">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-muted)] hover:text-white hover:border-blue-500 font-mono text-xs uppercase tracking-wider transition-all duration-300"
        >
          <FiArrowLeft /> Back to Home
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col items-start mb-12">
        <span className="section-label mb-3">— ARCHIVE & PORTFOLIO —</span>
        <h1 className="text-4xl md:text-6xl font-syne font-extrabold tracking-tight text-[var(--text-primary)]">
          All Featured Projects
        </h1>
        <p className="font-mono text-xs md:text-sm text-[var(--text-muted)] mt-4 max-w-2xl leading-relaxed">
          Explore specialized engineering work across collaborative team products, end-to-end full stack web platforms, and scalable backend API engines.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-14 p-2 rounded-2xl glass-card border border-[var(--border)] max-w-fit">
        {filterCategories.map((cat) => {
          const count = cat.id === "all" ? projects.length : projects.filter((p) => p.category === cat.id).length;
          const isActive = activeFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-raised)]"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isActive ? "bg-white/20 text-white" : "bg-[var(--surface-raised)] text-[var(--text-muted)] border border-[var(--border)]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-card rounded-[2rem] overflow-hidden group flex flex-col h-[640px] relative border border-[var(--border)] hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.15)] transition-all duration-700"
          >
            {/* Visual Thumbnail */}
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

              {/* Category Badges */}
              <div className="absolute top-4 left-4 z-30 flex flex-wrap gap-2">
                {project.category === "team" && (
                  <span className="text-[9px] font-mono uppercase tracking-wider bg-black/75 backdrop-blur-md text-purple-400 border border-purple-500/30 px-3 py-1 rounded-full font-bold">
                    👥 Team Project
                  </span>
                )}
                {project.category === "fullstack" && (
                  <span className="text-[9px] font-mono uppercase tracking-wider bg-black/75 backdrop-blur-md text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full font-bold">
                    ⚡ Full Stack
                  </span>
                )}
                {project.category === "backend" && (
                  <span className="text-[9px] font-mono uppercase tracking-wider bg-black/75 backdrop-blur-md text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-bold">
                    ⚙️ Backend Only
                  </span>
                )}
              </div>
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

              {/* Action Buttons: Backend-only gets Backend Repo; others get Live Demo & Client Repo */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[var(--border)]">
                <Link
                  href={`/projects/${project.id}`}
                  className="w-full flex items-center justify-center gap-1.5 font-syne font-bold text-[10px] uppercase tracking-widest border border-[var(--border-active)] py-3 rounded-xl hover:bg-[var(--text-primary)] hover:text-[var(--bg)] transition-all duration-300 text-[var(--text-primary)] bg-[var(--surface-raised)]"
                >
                  View Details →
                </Link>

                {project.category === "backend" ? (
                  // Backend only projects get Backend Repo button
                  project.githubServer ? (
                    <a
                      href={project.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 font-syne font-bold text-[10px] uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 py-3 rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-md"
                    >
                      <FiGithub /> Backend Repo
                    </a>
                  ) : (
                    <span className="w-full flex items-center justify-center font-syne font-bold text-[10px] uppercase tracking-widest bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--text-muted)] py-3 rounded-xl opacity-60">
                      Backend Schema
                    </span>
                  )
                ) : (
                  // Full stack & Team projects get Live Demo
                  project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 font-syne font-bold text-[10px] uppercase tracking-widest bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-md shadow-blue-500/20"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  ) : (
                    <span className="w-full flex items-center justify-center font-syne font-bold text-[10px] uppercase tracking-widest bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--text-muted)] py-3 rounded-xl opacity-60">
                      In Development
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
