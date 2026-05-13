"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiLayout, FiGithub, FiMaximize2, FiX } from "react-icons/fi";

const projects = [
  {
    id: 0,
    title: "Dragon News",
    url: "https://project-dragon-news.vercel.app/",
    github: "https://github.com/Zihad-1883/project-dragon-news",
    tags: ["React", "Dynamic Routing", "UI/UX"],
    desc: "A categorized news portal delivering real-time updates with a focus on smooth navigation and readability.",
    stack: ["React", "React Router", "Tailwind CSS", "API Integration", "DaisyUI"],
    challenges: "Handling nested dynamic routing for multiple categories while ensuring consistent layout states. Optimizing news data fetching for faster load times.",
    future: "Implement user authentication for personalized news feeds. Add a search functionality with real-time filtering.",
  },
  {
    id: 1,
    title: "SkillSphere",
    url: "https://zihad-assignment-8.vercel.app/",
    github: "https://github.com/Zihad-1883",
    tags: ["Next Js", "Better Auth", "Tailwind"],
    desc: "A high-performance course selling platform featuring real-time updates and secure authentication.",
    stack: ["Next.js", "Better Auth", "Tailwind CSS", "Prisma", "PostgreSQL"],
    challenges: "Implementing complex authentication flows with Better Auth while maintaining performance. Managing state across multiple course modules efficiently.",
    future: "Integrate a personalized recommendation system using AI. Add real-time video streaming for live sessions.",
  },
  {
    id: 2,
    title: "English Janala",
    url: "https://zihad-1883.github.io/Project-English-Janala/",
    github: "https://github.com/Zihad-1883",
    tags: ["HTML", "Tailwind", "JS"],
    desc: "An immersive educational hub designed to simplify English learning through interactive modules.",
    stack: ["HTML5", "Tailwind CSS", "JavaScript (ES6+)", "Local Storage"],
    challenges: "Creating an engaging and accessible UI for language learners. Ensuring smooth transitions between different learning levels.",
    future: "Add speech recognition for pronunciation practice. Implement a progress tracking dashboard for users.",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-24 w-full">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.3, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-6"
        >
          — 03 PROJECTS —
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, letterSpacing: "-0.05em" }}
          whileInView={{ opacity: 1, letterSpacing: "-0.02em" }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-syne font-bold text-center glow-text"
        >
          Featured Work
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1, duration: 1 }}
            className="glass-card rounded-[2rem] overflow-hidden group flex flex-col h-[600px] relative border-white/5 hover:border-blue-500/30 transition-all duration-700"
          >
            {/* Visual Header */}
            <div className="h-56 w-full bg-surface-raised relative overflow-hidden">
              <iframe
                src={project.url}
                className="absolute inset-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none opacity-40 group-hover:opacity-80 transition-all duration-1000 z-10"
                loading="lazy"
                title={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />
            </div>

            {/* Content Body */}
            <div className="p-8 flex flex-col flex-grow relative z-30">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, j) => (
                  <span key={j} className="text-[9px] font-mono border border-white/10 px-2 py-0.5 rounded-full uppercase tracking-widest text-white/40">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl font-syne font-bold mb-4 tracking-tighter text-white">
                {project.title}
              </h3>

              <p className="font-mono text-[12px] text-white/50 leading-relaxed mb-8 flex-grow">
                {project.desc}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-2 font-syne font-bold text-[9px] uppercase tracking-widest border border-white/10 py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-500"
                >
                  <FiMaximize2 /> View Details
                </button>
                <a
                  href={project.url}
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 font-syne font-bold text-[9px] uppercase tracking-widest bg-blue-500 text-white py-4 rounded-xl hover:bg-blue-600 transition-all duration-500"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-2xl bg-black/80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="glass-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] p-8 md:p-16 relative shadow-[0_0_100px_rgba(59,130,246,0.1)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full glass-card flex items-center justify-center text-xl hover:bg-white hover:text-black transition-all duration-500"
              >
                <FiX />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-5xl font-syne font-bold tracking-tighter mb-4">{selectedProject.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((s, i) => (
                        <span key={i} className="text-[10px] font-mono text-blue-400/80 bg-blue-400/5 px-3 py-1 rounded-full uppercase tracking-widest">{s}</span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-syne font-bold uppercase tracking-widest text-white/30">Description</h4>
                    <p className="font-mono text-sm text-white/70 leading-relaxed">{selectedProject.desc}</p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a href={selectedProject.url} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-syne font-bold text-[10px] uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-500">
                      <FiExternalLink /> Live Project
                    </a>
                    <a href={selectedProject.github} target="_blank" className="flex items-center gap-2 px-6 py-3 glass-card text-white rounded-xl font-syne font-bold text-[10px] uppercase tracking-widest hover:border-white transition-all duration-500">
                      <FiGithub /> Repository
                    </a>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-sm font-syne font-bold uppercase tracking-widest text-white/30">Challenges Faced</h4>
                    <p className="font-mono text-sm text-white/70 leading-relaxed italic border-l-2 border-blue-500/20 pl-6">
                      "{selectedProject.challenges}"
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-syne font-bold uppercase tracking-widest text-white/30">Future Improvements</h4>
                    <p className="font-mono text-sm text-white/70 leading-relaxed border-l-2 border-emerald-500/20 pl-6">
                      {selectedProject.future}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
