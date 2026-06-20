"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiLayout,
  FiGithub,
  FiMaximize2,
  FiX,
} from "react-icons/fi";
import Image from "next/image";

const projects = [
  {
    id: 0,
    title: "FIFA World Cup 2026 Prediction",
    url: "https://world-cup-2026-nine-eta.vercel.app/",
    github: "https://github.com/Zihad-1883/world-cup-2026",
    tags: ["Next Js", "PostgreSQL", "Fullstack"],
    desc: "A premium, full-stack prediction platform for the 2026 FIFA World Cup. Features live match tracking, expert analysis, and competitive prediction modes.",
    stack: [
      "Next.js 14 (App Router)",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL (Neon)",
      "JWT Auth",
    ],
    challenges:
      "Integrating real-time football data APIs and managing complex prediction logic for group standings and knockout rounds. Implementing a high-performance nested comment system for community intelligence.",
    future:
      "Implement a global leaderboard with prize pools for top predictors. Add social features like 'Friends Leagues' and live match chat rooms.",
  },
  {
    id: 1,
    title: "DevPulse",
    url: "https://dev-pulse-l2-a2-psi.vercel.app",
    github: "https://github.com/Zihad-1883/L2-A2-DevPulse-",
    image: "/devpulse.png",
    tags: ["TypeScript", "PostgreSQL", "API"],
    desc: "A RESTful backend API for software teams to report bugs, suggest features, and coordinate resolutions with role-based access control.",
    stack: [
      "Node.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "JWT",
      "Bcrypt",
      "NeonDB",
    ],
    challenges:
      "Implementing advanced role-based access control (RBAC) and ensuring secure password hashing and refresh-token rotation. Designing a scalable PostgreSQL schema for issue tracking.",
    future:
      "Develop a frontend dashboard using React. Integrate email notifications for issue updates. Add support for file attachments to bug reports.",
  },
  {
    id: 2,
    title: "SportNest",
    url: "https://l1-a9-sport-nest-sports-facility-bo-lemon.vercel.app/",
    github:
      "https://github.com/Zihad-1883/L1-A9-SportNest-Sports-Facility-Booking-Management-System-Client",
    tags: ["Next Js", "Express Js", "MongoDB"],
    desc: "A comprehensive Sports Facility Booking Management System featuring real-time availability and secure payments.",
    stack: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Auth"],
    challenges:
      "Managing overlapping booking slots in the backend and ensuring real-time data consistency across multiple sport facilities.",
    future:
      "Add a mobile app for on-the-go bookings. Implement an AI-based recommendation system for facility usage.",
  },
  {
    id: 3,
    title: "SkillSphere",
    url: "https://zihad-assignment-8.vercel.app/",
    github: "https://github.com/Zihad-1883/L1-A8-SkillSphere",
    tags: ["Next Js", "Better Auth", "MongoDB"],
    desc: "A modern online learning platform where users can explore courses, view lessons, and enroll in skill-based programs with secure authentication and responsive design.",
    stack: [
      "Next.js 16",
      "Tailwind CSS",
      "DaisyUI",
      "MongoDB",
      "Better Auth",
      "HeroUI",
    ],
    challenges:
      "Implementing protected routes with Better Auth while managing seamless user sessions and dynamic course data fetching. Maintaining responsive UI consistency across multiple sections and devices was also a major challenge.",
    future:
      "Add video progress tracking and certificate generation for completed courses. Implement personalized course recommendations and an instructor dashboard for uploading new courses.",
  },
  {
    id: 4,
    title: "English Janala",
    url: "https://zihad-1883.github.io/Project-English-Janala/",
    github: "https://github.com/Zihad-1883",
    tags: ["HTML", "Tailwind", "JS"],
    desc: "An immersive educational hub designed to simplify English learning through interactive modules.",
    stack: [
      "HTML5",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "Daisy UI",
      "API Integration",
    ],
    challenges:
      "Creating an engaging and accessible UI for language learners. Ensuring smooth transitions between different learning levels.",
    future:
      "Add speech recognition for pronunciation practice. Implement a progress tracking dashboard for users.",
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
            className="glass-card rounded-[2rem] overflow-hidden group flex flex-col h-[600px] relative border-[var(--border)] hover:border-blue-500/30 transition-all duration-700"
          >
            {/* Visual Header */}
            <div className="h-56 w-full bg-[var(--surface-raised)] relative overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 z-10"
                  unoptimized
                />
              ) : (
                <iframe
                  src={project.url || "about:blank"}
                  className="absolute inset-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none opacity-40 group-hover:opacity-80 transition-all duration-1000 z-10"
                  loading="lazy"
                  title={project.title}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 via-transparent to-transparent z-20" />
            </div>

            {/* Content Body */}
            <div className="p-8 flex flex-col flex-grow relative z-30">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-[10px] font-mono border border-[var(--border-active)] px-3 py-1 rounded-full uppercase tracking-widest text-[var(--text-primary)] bg-[var(--surface)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl font-syne font-bold mb-4 tracking-tighter text-[var(--text-primary)]">
                {project.title}
              </h3>

              <p className="font-mono text-[13px] text-[var(--text-primary)] opacity-90 leading-relaxed mb-8 flex-grow">
                {project.desc}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-2 font-syne font-bold text-[9px] uppercase tracking-widest border border-[var(--border)] py-4 rounded-xl hover:bg-[var(--text-primary)] hover:text-[var(--bg)] transition-all duration-500 text-[var(--text-primary)]"
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-2xl bg-[var(--bg)]/80"
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
                className="absolute top-8 right-8 w-12 h-12 rounded-full glass-card flex items-center justify-center text-xl hover:bg-[var(--text-primary)] hover:text-[var(--bg)] transition-all duration-500 text-[var(--text-primary)]"
              >
                <FiX />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-5xl font-syne font-bold tracking-tighter mb-4 text-[var(--text-primary)]">
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((s, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono text-blue-400/80 bg-blue-400/5 px-3 py-1 rounded-full uppercase tracking-widest"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-syne font-bold uppercase tracking-widest text-[var(--text-muted)]">
                      Description
                    </h4>
                    <p className="font-mono text-sm text-[var(--text-muted)] leading-relaxed">
                      {selectedProject.desc}
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      className="flex items-center gap-2 px-6 py-3 bg-[var(--text-primary)] text-[var(--bg)] rounded-xl font-syne font-bold text-[10px] uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-500"
                    >
                      <FiExternalLink /> Live Project
                    </a>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      className="flex items-center gap-2 px-6 py-3 glass-card text-[var(--text-primary)] rounded-xl font-syne font-bold text-[10px] uppercase tracking-widest hover:border-[var(--text-primary)] transition-all duration-500"
                    >
                      <FiGithub /> Repository
                    </a>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-sm font-syne font-bold uppercase tracking-widest text-[var(--text-muted)]">
                      Challenges Faced
                    </h4>
                    <p className="font-mono text-sm text-[var(--text-muted)] leading-relaxed italic border-l-2 border-[var(--accent)]/20 pl-6">
                      &quot;{selectedProject.challenges}&quot;
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-syne font-bold uppercase tracking-widest text-[var(--text-muted)]">
                      Future Improvements
                    </h4>
                    <p className="font-mono text-sm text-[var(--text-muted)] leading-relaxed border-l-2 border-emerald-500/20 pl-6">
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
