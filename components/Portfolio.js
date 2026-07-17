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
    title: "ErythroShare",
    url: "https://l1-a10-erythro-share-client.vercel.app/",
    github: "https://github.com/Zihad-1883/L1-A10-ErythroShare-Client",
    tags: ["Next Js", "Better Auth", "MongoDB"],
    desc: "A comprehensive, premium blood donation platform connecting donors with patients. Features secure user/admin dashboards, dynamic status tracking, role-based controls, and real-time request notifications.",
    stack: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Better Auth (MongoDB Adapter)",
      "HeroUI V2",
      "Tailwind CSS V4",
      "Express.js Backend",
      "JWT & CORS Protection",
    ],
    challenges:
      "Implementing secure session state and middleware routes using Better Auth and the MongoDB adapter within the Next.js App Router context. Handling roles (volunteer, donor, admin) securely on the client and Express server.",
    future:
      "Integrate real-time mapping for hospitals and donors to optimize dispatching, transition notifications to SMS/WhatsApp, and add automated blood inventory management systems.",
  },
  {
    id: 1,
    title: "NextKey",
    url: "https://project-next-key.vercel.app/",
    github: "https://github.com/Zihad-1883/Project-Next-Key",
    tags: ["Next Js", "Express", "TypeScript"],
    desc: "A premium property rental monorepo platform connecting verified landlords and tenants in Bangladesh. Eliminates fake listings and broker fees with landlord-tenant request handling and dashboard statistics.",
    stack: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript 5",
      "Express 5 & Node.js",
      "MongoDB (Native Driver)",
      "Tailwind CSS 4",
      "Framer Motion",
      "Recharts Data Visualization",
    ],
    challenges:
      "Managing a clean monorepo architecture with type safety shared across the Next.js client and TS-Node server. Structuring custom queries for dynamic filtering (price range, type, beds/baths_ count, location) and sorting on paginated MongoDB results.",
    future:
      "Add an in-app real-time web socket chat between landlords and tenants. Integrate digital payment gateways (like SSLCommerz or bKash) for secure rental booking advance payments.",
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    title: "Football Ticket Booking System",
    url: null,
    github: "https://github.com/Zihad-1883/L2-A3-Football-Ticket-Booking-System---Database-Design-SQL-Queries",
    tags: ["PostgreSQL", "Database", "SQL"],
    desc: "A fully designed and implemented relational database system for managing football ticket bookings. Handles fan registrations, match scheduling, and ticket purchasing transactions — built with constraints and queries.",
    stack: [
      "PostgreSQL",
      "Database Schema Design",
      "Relational Constraints (FK/PK)",
      "Complex SQL Queries & Joins",
      "Subqueries & Aggregations",
    ],
    challenges:
      "Enforcing domain and referential integrity constraints across tables while preparing SQL query execution scripts using advanced multi-table JOINs, subqueries, and Skip-Limit sorting logic.",
    future:
      "Expose this schema through a Node-Express API backing a web client, implement indexing for high traffic matches, and design an administrative command station.",
  },
  {
    id: 5,
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
              ) : project.url ? (
                <iframe
                  src={project.url}
                  className="absolute inset-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none opacity-40 group-hover:opacity-80 transition-all duration-1000 z-10"
                  loading="lazy"
                  title={project.title}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c1e] to-[#050510] flex flex-col items-center justify-center p-6 gap-3 z-10 border-b border-[var(--border)]">
                  <svg className="w-12 h-12 text-blue-500/40 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <ellipse cx="12" cy="7" rx="8" ry="3.5" />
                    <path d="M4 7v6c0 1.66 3.58 3 8 3s8-1.34 8-3V7" />
                    <path d="M4 13v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
                  </svg>
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-400/80 font-bold">
                    Database Schema
                  </span>
                </div>
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
                  className="w-full flex items-center justify-center gap-2 font-syne font-bold text-[9px] uppercase tracking-widest border border-[var(--border)] py-4 rounded-xl hover:bg-[var(--text-primary)] hover:text-[var(--bg)] transition-all duration-500 text-[var(--text-primary)] cursor-pointer"
                >
                  <FiMaximize2 /> View Details
                </button>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    className="w-full flex items-center justify-center gap-2 font-syne font-bold text-[9px] uppercase tracking-widest bg-blue-500 text-white py-4 rounded-xl hover:bg-blue-600 transition-all duration-500"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full flex items-center justify-center gap-2 font-syne font-bold text-[9px] uppercase tracking-widest bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--text-muted)] py-4 rounded-xl cursor-not-allowed opacity-50"
                  >
                    Queries Only
                  </button>
                )}
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
                    {selectedProject.url ? (
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        className="flex items-center gap-2 px-6 py-3 bg-[var(--text-primary)] text-[var(--bg)] rounded-xl font-syne font-bold text-[10px] uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-500"
                      >
                        <FiExternalLink /> Live Project
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex items-center gap-2 px-6 py-3 bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--text-muted)] rounded-xl font-syne font-bold text-[10px] uppercase tracking-widest cursor-not-allowed opacity-60"
                      >
                        No Live Build
                      </button>
                    )}
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
