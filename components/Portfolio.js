"use client";
import { motion } from "framer-motion";
import { FiExternalLink, FiLayout } from "react-icons/fi";

const projects = [
  {
    title: "SkillSphere",
    url: "https://zihad-assignment-8.vercel.app/",
    tags: ["React", "Firebase", "Tailwind"],
    desc: "A high-performance assignment management platform featuring real-time updates and secure authentication.",
  },
  {
    title: "English Janala",
    url: "https://zihad-1883.github.io/Project-English-Janala/",
    tags: ["HTML", "Vanilla CSS", "JS"],
    desc: "An immersive educational hub designed to simplify English learning through interactive modules.",
  },
  {
    title: "Payoo Bank",
    url: "https://zihad-1883.github.io/Project-Payoo-Bank-UPDATED/",
    tags: ["Core Web", "Banking UI", "UX"],
    desc: "A sophisticated financial dashboard concept emphasizing precision, security, and responsive interaction.",
  },
  {
    title: "Keen Keeper",
    url: "https://keen-keeper-7.netlify.app",
    tags: ["MERN Stack", "Auth", "CRUD"],
    desc: "A productivity powerhouse that bridges the gap between chaotic schedules and meaningful progress.",
  },
  {
    title: "Dragon News",
    url: "https://project-dragon-news.vercel.app/category/01",
    tags: ["React", "Rest API", "Dynamic"],
    desc: "A news aggregation portal delivering real-time world events with a focus on editorial typography.",
  },
  {
    title: "DigiTools",
    url: "https://digitools-assignment-6.netlify.app/",
    tags: ["Utility", "Tooling", "DevEx"],
    desc: "A multi-purpose digital toolkit engineered to streamline daily developer tasks and workflows.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center mb-24 w-full">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.3, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-6"
        >
          — 04 TRANSMISSIONS —
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, letterSpacing: "-0.05em" }}
          whileInView={{ opacity: 1, letterSpacing: "-0.02em" }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-syne font-bold text-center glow-text"
        >
          Fragments of Logic
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.15, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card rounded-[2.5rem] overflow-hidden group flex flex-col h-[560px] relative border-white/5"
          >
            {/* Visual Header / Iframe Preview */}
            <div className="h-48 w-full bg-surface-raised relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-surface z-0 flex items-center justify-center opacity-20">
                <FiLayout className="text-8xl text-white/5" />
              </div>

              <iframe
                src={project.url}
                className="absolute inset-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none opacity-60 group-hover:opacity-100 transition-all duration-1000 z-10"
                loading="lazy"
                title={project.title}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent z-20" />

              <div className="absolute top-6 right-6 z-30">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 shadow-2xl">
                  <FiExternalLink className="text-xl" />
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-10 flex flex-col flex-grow relative z-30 bg-black/10 backdrop-blur-xl">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, j) => (
                  <span key={j} className="text-[9px] font-mono border border-white/5 px-3 py-1 rounded-full uppercase tracking-[0.3em] text-text-muted bg-white/[0.01]">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl font-syne font-bold mb-4 tracking-tighter group-hover:text-white transition-colors duration-1000">
                {project.title}
              </h3>

              <p className="font-mono text-[13px] text-text-muted leading-relaxed mb-8 group-hover:text-text-primary transition-colors duration-1000 opacity-60 group-hover:opacity-100">
                {project.desc}
              </p>

              <div className="mt-auto">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-4 font-syne font-bold text-[10px] uppercase tracking-[0.4em] border border-white/5 py-5 rounded-2xl group-hover:border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-1000"
                >
                  TRANSMISSION START ↗
                </a>
              </div>
            </div>

            <div className="absolute top-0 right-0 p-10 pointer-events-none">
              <span className="text-5xl font-syne font-extrabold text-white/[0.02] group-hover:text-white/5 transition-colors duration-1000 tracking-tighter">
                {i < 9 ? `0${i + 1}` : i + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
