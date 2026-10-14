import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiCheckCircle,
  FiAlertTriangle,
  FiTrendingUp,
  FiLayers,
  FiCpu,
} from "react-icons/fi";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Technical Case Study`,
    description: project.desc,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-28 pb-32 px-6 max-w-5xl mx-auto">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-muted)] hover:text-white hover:border-blue-500 font-mono text-xs uppercase tracking-wider transition-all duration-300"
        >
          <FiArrowLeft /> All Projects
        </Link>
        <Link
          href="/#portfolio"
          className="font-mono text-xs text-[var(--text-muted)] hover:text-blue-400 transition-colors uppercase tracking-widest"
        >
          Home ➔ Projects
        </Link>
      </div>

      {/* Hero Header */}
      <div className="space-y-6 mb-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-400 font-bold bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            Detailed Case Study
          </span>
          {project.projectType && (
            <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full font-bold">
              {project.projectType}
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-5xl font-syne font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="font-mono text-sm md:text-base text-[var(--text-muted)] leading-relaxed max-w-3xl">
          {project.desc}
        </p>

        {/* Live / GitHub Links Bar */}
        <div className="flex flex-wrap gap-4 pt-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-blue-500 text-white rounded-xl font-syne font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-blue-500/25"
            >
              <FiExternalLink className="text-sm" /> Live Application
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 glass-card text-[var(--text-primary)] rounded-xl font-syne font-bold text-xs uppercase tracking-widest hover:border-blue-500 transition-all duration-300 border border-[var(--border-active)]"
            >
              <FiGithub className="text-sm" /> GitHub Client
            </a>
          )}
          {project.githubServer && (
            <a
              href={project.githubServer}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl font-syne font-bold text-xs uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all duration-300"
            >
              <FiGithub className="text-sm" /> GitHub Server
            </a>
          )}
        </div>
      </div>

      {/* Metrics Banner */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[var(--surface-raised)] border border-[var(--border-active)] mb-14 shadow-lg">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-2">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold mb-1">
                Metric {idx + 1}
              </span>
              <span className="text-xs md:text-sm font-mono font-bold text-[var(--text-primary)]">
                {metric}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Main Content Layout */}
      <div className="space-y-14">
        {/* Visual / Screenshot Section */}
        {project.image && (
          <div className="w-full h-72 md:h-96 rounded-3xl overflow-hidden relative glass-card border border-[var(--border-active)]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        {/* My Role (if team project) */}
        {project.myRole && (
          <div className="p-8 rounded-3xl bg-purple-500/5 border border-purple-500/20 space-y-3">
            <div className="flex items-center gap-2">
              <FiCpu className="text-purple-400 text-lg" />
              <h3 className="text-xs font-syne font-bold uppercase tracking-widest text-purple-400">
                Personal Role & Direct Code Ownership
              </h3>
            </div>
            <p className="font-mono text-sm text-[var(--text-primary)] leading-relaxed">
              {project.myRole}
            </p>
          </div>
        )}

        {/* System Architecture */}
        {project.architecture && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FiLayers className="text-blue-400" />
              <h3 className="text-xs font-syne font-bold uppercase tracking-widest text-blue-400">
                System Architecture Diagram
              </h3>
            </div>
            <pre className="font-mono text-xs md:text-[13px] text-emerald-400 bg-black/70 p-6 md:p-8 rounded-3xl border border-emerald-500/20 overflow-x-auto leading-relaxed shadow-inner">
              {project.architecture}
            </pre>
          </div>
        )}

        {/* Tech Stack Breakdown */}
        <div className="space-y-4">
          <h3 className="text-xs font-syne font-bold uppercase tracking-widest text-[var(--text-muted)]">
            Technology Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.stack.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl glass-card border border-[var(--border)] font-mono text-xs text-[var(--text-primary)] flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xs font-syne font-bold uppercase tracking-widest text-[var(--text-muted)]">
              Key Engineering Highlights
            </h3>
            <div className="space-y-3">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-card border border-[var(--border)] font-mono text-xs md:text-sm text-[var(--text-primary)] leading-relaxed flex items-start gap-4"
                >
                  <FiCheckCircle className="text-blue-400 text-lg flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Challenges & Solutions */}
        <div className="p-8 rounded-3xl bg-amber-500/5 border border-amber-500/20 space-y-4">
          <div className="flex items-center gap-3">
            <FiAlertTriangle className="text-amber-400 text-xl flex-shrink-0" />
            <h3 className="text-xs font-syne font-bold uppercase tracking-widest text-amber-400">
              Technical Challenges Faced & Solutions
            </h3>
          </div>
          <p className="font-mono text-xs md:text-sm text-[var(--text-primary)] opacity-90 leading-relaxed pl-2 border-l-2 border-amber-500/30">
            {project.challenges}
          </p>
        </div>

        {/* Future Improvements */}
        <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 space-y-4">
          <div className="flex items-center gap-3">
            <FiTrendingUp className="text-emerald-400 text-xl flex-shrink-0" />
            <h3 className="text-xs font-syne font-bold uppercase tracking-widest text-emerald-400">
              Potential Improvements & Future Roadmap
            </h3>
          </div>
          <p className="font-mono text-xs md:text-sm text-[var(--text-primary)] opacity-90 leading-relaxed pl-2 border-l-2 border-emerald-500/30">
            {project.future}
          </p>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/projects"
            className="font-syne font-bold text-xs uppercase tracking-widest text-blue-400 hover:text-white transition-colors"
          >
            ← Back to All Projects
          </Link>
          <Link
            href="/#contact"
            className="px-6 py-3 rounded-xl bg-[var(--text-primary)] text-[var(--bg)] font-syne font-bold text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Get in Touch →
          </Link>
        </div>
      </div>
    </main>
  );
}
