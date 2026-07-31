"use client";
import { useState, useEffect } from "react";
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
    title: "GearUp",
    image: "/gearup-thumb.png",
    url: "https://gearup-backend-4eca.onrender.com",
    github: "https://github.com/Zihad-1883/L2-A4-Gear-Up",
    tags: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma", "SSLCommerz"],
    desc: "A full-featured peer-to-peer sports & outdoor equipment rental API engine built with Express 5, TypeScript, Prisma ORM, and PostgreSQL. Handles complex multi-role workflows, transactional stock reservation, and direct payment gateway verification.",
    metrics: ["25+ REST Endpoints", "5-Stage Order State Machine", "Modular Prisma Schemas", "SSLCommerz Validation"],
    architecture: `[ Customer / Provider / Admin Clients ]
               │  REST API (JWT Auth + HTTP-Only Cookies)
               ▼
 [ Express 5 TypeScript API App ] ──► [ SSLCommerz IPN & Validation ]
               │
      ┌────────┴────────┐
      ▼                 ▼
 [ Prisma 7 ORM ]  [ RBAC Guard ]
      │
      ▼
 [ PostgreSQL Database (Neon / Local) ]
 ├── User (CUSTOMER, PROVIDER, ADMIN)
 ├── Category & GearItem (Stock Management)
 ├── RentalOrder & RentalOrderItem (Lifecycle Flow)
 └── Payment (SSLCommerz) & Verified Review`,
    stack: [
      "Node.js (v20+) & Express.js (v5)",
      "TypeScript 5 (Strict Mode)",
      "PostgreSQL & Prisma 7 ORM",
      "SSLCommerz (sslcommerz-lts SDK)",
      "JWT & HTTP-Only Secure Cookies",
      "Bcrypt Password Hashing",
      "Neon Cloud / Render Hosting",
    ],
    highlights: [
      "Enforced 5-stage rental order lifecycle: PENDING ➔ APPROVED ➔ PAID ➔ PICKED_UP ➔ RETURNED",
      "Role-Based Access Control (RBAC) separating CUSTOMER bookings, PROVIDER gear control, and ADMIN management",
      "Two-step SSLCommerz payment validation with server-to-server verification & IPN webhooks",
      "Verified review system restricting reviews strictly to customers with completed (RETURNED) rentals",
      "Modular multi-file Prisma schema organization (user, category, gearItem, rentalOrder, payment, review)",
    ],
    challenges:
      "The most challenging aspect was modeling the real-world equipment rental workflow into a relational database schema. Translating multi-role business rules (Customer bookings vs. Provider approvals and Admin controls) into atomic Prisma state transitions required deep relational design and careful concurrency handling.",
    future:
      "Planning to implement Redis caching for gear filtering, full-text search with PostgreSQL trigram indexes, and automated reminder queues for upcoming rental return deadlines.",
  },
  {
    id: 1,
    title: "ErythroShare",
    url: "https://l1-a10-erythro-share-client.vercel.app/",
    github: "https://github.com/Zihad-1883/L1-A10-ErythroShare-Client",
    tags: ["Next.js 16", "Better Auth", "MongoDB", "Express"],
    desc: "Full-stack healthcare coordination system handling multi-role access control (Admin, Volunteer, Donor), protected Express REST APIs, and automated blood request workflows.",
    metrics: ["3 Access Roles", "Real-Time Request Dispatch", "JWT & CORS Protection", "Better Auth Adapter"],
    architecture: `[ Next.js 16 App Router Client ]
               │  REST APIs & Custom Hooks
               ▼
   [ Express.js Security Gateway ] ──► [ Better Auth Middleware ]
               │
               ▼
[ MongoDB Database Cluster ]`,
    stack: [
      "Next.js 16 (App Router)",
      "React 19 & TypeScript",
      "Better Auth (MongoDB Adapter)",
      "HeroUI V2 & Tailwind V4",
      "Express.js Server",
      "JWT & CORS Protection",
    ],
    highlights: [
      "Multi-role user authentication (Donor, Volunteer, System Administrator)",
      "Protected dashboard routes with session caching and real-time request tracking",
      "Donor search indexing by blood group, district, and availability status",
    ],
    challenges:
      "Implementing secure session state and middleware routes using Better Auth and the MongoDB adapter within the Next.js 16 App Router context.",
    future:
      "Integrate real-time mapping for hospitals and donors to optimize dispatching, and add automated blood inventory management systems.",
  },
  {
    id: 2,
    title: "Travel AI",
    url: "https://project-travel-ai.vercel.app",
    github: "https://github.com/Zihad-1883/Project-Travel-AI",
    tags: ["Next.js 14", "TypeScript", "Groq AI (LLM)", "Express", "MongoDB", "SSE Streaming"],
    desc: "A full-stack agentic AI travel platform where travelers discover, customize, and book expedition packages — powered by a Groq LLM recommendation engine and real-time streaming AI chat concierge via Server-Sent Events.",
    metrics: ["Groq LLM Engine", "Streaming SSE Chat", "AI Package Match Scores", "Google OAuth & Demo Logins"],
    architecture: `[ Next.js 14 App Router Client ] ──► [ Google OAuth / JWT Auth ]
         │  SSE Streaming / REST APIs
         ▼
 [ Express.js + TypeScript API ] ──► [ Groq SDK (LLM Inference Engine) ]
         │                                  │
         ▼                                  ▼
 [ MongoDB + Mongoose DB ] ◄──────── [ AI Recommendation Matcher ]
 ├── User (Traveler, Admin)
 ├── Package Catalog & Filter Index
 └── Booking Requests (Status Machine)`,
    stack: [
      "Next.js 14 (App Router) & TypeScript",
      "Node.js & Express API Server",
      "Groq SDK (LLM Inference Engine)",
      "Server-Sent Events (SSE) Streaming",
      "MongoDB & Mongoose ORM",
      "JWT & Google OAuth (@react-oauth/google)",
      "Recharts & TanStack Query",
    ],
    highlights: [
      "Smart Trip Planner matching user parameters with real database packages using Groq LLM (Match score 0-100 & reasoning)",
      "AI Chat Concierge streaming token-by-token responses via Server-Sent Events with package & booking context tools",
      "AI Search Refinement engine presets (Make it cheaper, Luxury Focus, Shorter Trip, Adventure)",
      "Admin Analytics Console with Recharts package/booking distribution charts & status workflow",
      "Google OAuth integration & instant demo login presets for Traveler and Admin testing",
    ],
    challenges:
      "Building an AI-focused product for the first time presented a steep learning curve. Managing Groq LLM API rate limits and quota caps required implementing graceful fallback mechanisms, prompt token optimization, and structured output parsing to ensure reliable AI recommendation scores without hitting API limits.",
    future:
      "Planning to implement Redis response caching for frequent AI itinerary queries, vector embeddings for semantic package search, and multi-agent travel route optimization.",
  },
  {
    id: 3,
    title: "NextKey",
    url: "https://project-next-key.vercel.app/",
    github: "https://github.com/Zihad-1883/Project-Next-Key",
    tags: ["Next.js 16", "Express 5", "TypeScript", "MongoDB"],
    desc: "Monorepo property rental platform engineered with Next.js App Router and TS-Node backend, implementing dynamic multi-param database filtering, pagination, and RBAC security.",
    metrics: ["Monorepo Architecture", "Multi-Param Search Queries", "Landlord & Tenant Roles", "Analytics Dashboard"],
    architecture: `[ Next.js 16 Client Monorepo ] ◄── (Shared TS Interfaces) ──► [ TS-Node Express API ]
                                                                      │
                                                                      ▼
                                                          [ MongoDB Database ]`,
    stack: [
      "Next.js 16 (App Router)",
      "React 19 & TypeScript 5",
      "Express 5 & Node.js",
      "MongoDB Native Driver",
      "Tailwind CSS 4 & Framer Motion",
      "Recharts Data Visualization",
    ],
    highlights: [
      "Shared TypeScript interfaces between client and server monorepo structure",
      "Dynamic filtering engine (price range, property type, bed/bath counts, location)",
      "Landlord rental management dashboard with request tracking",
    ],
    challenges:
      "Managing a clean monorepo architecture with type safety shared across Next.js and Express while structuring custom queries for multi-param database filtering.",
    future:
      "Add real-time WebSocket chat between landlords and tenants, and integrate bKash / SSLCommerz payment gateways for advance booking.",
  },
  {
    id: 4,
    title: "DevPulse",
    url: "https://dev-pulse-l2-a2-psi.vercel.app",
    github: "https://github.com/Zihad-1883/L2-A2-DevPulse-",
    image: "/devpulse.png",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "NeonDB"],
    desc: "RESTful issue-tracking engine built with TypeScript, Node.js, and PostgreSQL, featuring JWT refresh-token rotation, 15+ relational entities, and role-based access control.",
    metrics: ["15+ Relational Tables", "JWT Token Rotation", "Bcrypt Security", "PostgreSQL RBAC"],
    architecture: `[ Web / Postman Client ] ──► [ Express TS Router ] ──► [ JWT & Password Auth ]
                                           │
                                           ▼
                                [ PostgreSQL / Neon DB ]`,
    stack: [
      "Node.js & Express",
      "TypeScript 5",
      "PostgreSQL & NeonDB",
      "JWT & Bcrypt Hashing",
      "Zod Schema Validation",
    ],
    highlights: [
      "Role-Based Access Control (Admin, Team Member, Reporter)",
      "Normalized relational PostgreSQL database design for issues, projects, and users",
      "Refresh token rotation and secure authorization middleware",
    ],
    challenges:
      "Designing a clean normalized database schema for multi-team issue tracking while enforcing granular permission checks across all API routes.",
    future:
      "Build a React frontend web client and integrate email notifications for issue assignment updates.",
  },
  {
    id: 5,
    title: "Football Ticket Database",
    url: null,
    github: "https://github.com/Zihad-1883/L2-A3-Football-Ticket-Booking-System---Database-Design-SQL-Queries",
    tags: ["PostgreSQL", "Relational Database", "Complex SQL"],
    desc: "Fully designed and normalized relational database schema for managing stadium seating, match scheduling, fan registrations, and automated booking transactions using complex SQL queries.",
    metrics: ["Normalized SQL Schema", "Relational FK/PK Integrity", "Subqueries & Aggregations", "Transaction Logic"],
    architecture: `[ Fans & Users ] ──► [ Match Scheduling ] ──► [ Ticket Inventory & Pricing ]
                                                          │
                                                          ▼
                                            [ Booking Transactions (SQL) ]`,
    stack: [
      "PostgreSQL Database",
      "Relational Schema Constraints (PK/FK/Check)",
      "Complex SQL Multi-Table JOINs",
      "Subqueries & Aggregations",
      "Skip-Limit Pagination Queries",
    ],
    highlights: [
      "Enforced domain integrity and foreign key constraints across relational entities",
      "Engineered analytical SQL queries for stadium revenue analysis and ticket availability tracking",
      "Optimized query execution logic for high-concurrency match booking simulation",
    ],
    challenges:
      "Enforcing domain and referential integrity constraints across tables while preparing SQL query execution scripts using advanced multi-table JOINs and subqueries.",
    future:
      "Expose this schema through a Node-Express REST API backing a web frontend client with index tuning.",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.__lenis?.stop();
    } else {
      document.body.style.overflow = "";
      window.__lenis?.start();
    }

    return () => {
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-24 w-full">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.3, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-6"
        >
          — 03 FEATURED WORK —
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, letterSpacing: "-0.05em" }}
          whileInView={{ opacity: 1, letterSpacing: "-0.02em" }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-syne font-bold text-center glow-text"
        >
          Featured Projects
        </motion.h2>
        <p className="font-mono text-xs text-[var(--text-muted)] mt-4 max-w-xl text-center">
          Handpicked full-stack web applications, REST APIs, and database design projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1, duration: 1 }}
            className="glass-card rounded-[2rem] overflow-hidden group flex flex-col h-[620px] relative border-[var(--border)] hover:border-blue-500/30 transition-all duration-700"
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
                    Relational Database Architecture
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
                    className="text-[10px] font-mono border border-[var(--border-active)] px-3 py-1 rounded-full uppercase tracking-widest text-blue-400 bg-blue-500/5 font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl font-syne font-bold mb-3 tracking-tighter text-[var(--text-primary)]">
                {project.title}
              </h3>

              <p className="font-mono text-[12px] text-[var(--text-muted)] leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>

              {/* Metrics Pill Grid */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.metrics.slice(0, 3).map((metric, mIdx) => (
                  <span key={mIdx} className="text-[9px] font-mono text-[var(--text-primary)] bg-[var(--surface-raised)] border border-[var(--border)] px-2.5 py-1 rounded-md">
                    ⚡ {metric}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-2 font-syne font-bold text-[9px] uppercase tracking-widest border border-[var(--border)] py-3.5 rounded-xl hover:bg-[var(--text-primary)] hover:text-[var(--bg)] transition-all duration-500 text-[var(--text-primary)] cursor-pointer"
                >
                  <FiMaximize2 /> Case Study
                </button>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    className="w-full flex items-center justify-center gap-2 font-syne font-bold text-[9px] uppercase tracking-widest bg-blue-500 text-white py-3.5 rounded-xl hover:bg-blue-600 transition-all duration-500"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full flex items-center justify-center gap-2 font-syne font-bold text-[9px] uppercase tracking-widest bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--text-muted)] py-3.5 rounded-xl cursor-not-allowed opacity-50"
                  >
                    SQL Queries Only
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Technical Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-lenis-prevent="true"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 backdrop-blur-2xl bg-[var(--bg)]/85"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              data-lenis-prevent="true"
              className="glass-card w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-[2.5rem] p-6 md:p-12 relative shadow-[0_0_100px_rgba(59,130,246,0.15)] border border-[var(--border-active)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full glass-card flex items-center justify-center text-lg hover:bg-[var(--text-primary)] hover:text-[var(--bg)] transition-all duration-300 text-[var(--text-primary)] cursor-pointer z-50"
              >
                <FiX />
              </button>

              <div className="space-y-10">
                {/* Header Section */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-400 font-bold">
                    Technical Case Study & System Architecture
                  </span>
                  <h2 className="text-4xl md:text-5xl font-syne font-bold tracking-tighter mt-2 text-[var(--text-primary)]">
                    {selectedProject.title}
                  </h2>
                  <p className="font-mono text-sm text-[var(--text-muted)] leading-relaxed mt-3 max-w-3xl">
                    {selectedProject.desc}
                  </p>
                </div>

                {/* Tech Metrics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[var(--surface-raised)] border border-[var(--border-active)]">
                  {selectedProject.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center p-2">
                      <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold mb-1">Metric {idx + 1}</span>
                      <span className="text-xs font-mono font-bold text-[var(--text-primary)]">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* System Architecture Section */}
                <div className="space-y-4">
                  <h4 className="text-xs font-syne font-bold uppercase tracking-widest text-blue-400">
                    System Architecture Diagram
                  </h4>
                  <pre className="font-mono text-xs text-emerald-400 bg-black/60 p-6 rounded-2xl border border-emerald-500/20 overflow-x-auto leading-relaxed shadow-inner">
                    {selectedProject.architecture}
                  </pre>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Left Column: Stack & Highlights */}
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <h4 className="text-xs font-syne font-bold uppercase tracking-widest text-[var(--text-muted)]">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stack.map((s, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase tracking-wider"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-syne font-bold uppercase tracking-widest text-[var(--text-muted)]">
                        Technical Highlights
                      </h4>
                      <ul className="space-y-2 font-mono text-xs text-[var(--text-primary)] opacity-90">
                        {selectedProject.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex gap-3 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Challenges & Next Improvements */}
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <h4 className="text-xs font-syne font-bold uppercase tracking-widest text-amber-400">
                        Engineering Challenges
                      </h4>
                      <p className="font-mono text-xs text-[var(--text-muted)] leading-relaxed italic border-l-2 border-amber-500/30 pl-4 py-1">
                        &quot;{selectedProject.challenges}&quot;
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-syne font-bold uppercase tracking-widest text-emerald-400">
                        Future System Scale
                      </h4>
                      <p className="font-mono text-xs text-[var(--text-muted)] leading-relaxed border-l-2 border-emerald-500/30 pl-4 py-1">
                        {selectedProject.future}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-[var(--border)]">
                  {selectedProject.url ? (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      className="flex items-center gap-2 px-6 py-3.5 bg-blue-500 text-white rounded-xl font-syne font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 shadow-xl"
                    >
                      <FiExternalLink /> Visit Live Application
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center gap-2 px-6 py-3.5 bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--text-muted)] rounded-xl font-syne font-bold text-[10px] uppercase tracking-widest cursor-not-allowed opacity-60"
                    >
                      Queries / Schema Only
                    </button>
                  )}
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3.5 glass-card text-[var(--text-primary)] rounded-xl font-syne font-bold text-[10px] uppercase tracking-widest hover:border-blue-500 transition-all duration-300"
                  >
                    <FiGithub /> GitHub Repository
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
