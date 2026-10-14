"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCpu,
  FiTerminal,
  FiAward,
  FiX,
  FiFileText,
  FiExternalLink,
  FiDownload
} from "react-icons/fi";

const experiences = [
  {
    id: 1,
    role: "Back-End AI Engineering Intern",
    company: "FlyRank AI",
    period: "July 2026 - Sept 2026",
    badge: "Completed & Verified",
    icon: <FiCpu className="text-blue-400 text-3xl" />,
    summary: "Completed rigorous 12-week Backend AI Engineering internship building multimodal AI retrieval pipelines, vector similarity guardrails, and asynchronous LLM background workers.",
    details: [
      "Architected enterprise-grade multimodal AI engine (FlyRank Capstone) pairing stock images with blog content via 768-dim vector embeddings and PostgreSQL pgvector.",
      "Engineered deterministic 3-tier Mismatch Guard filtering false positive recommendations with 100% Top-1 benchmark precision.",
      "Awarded Official Certificate of Completion (FR-D11-77765-F98B0) and formal Executive Recommendation Letter from CEO Alen Malkoc."
    ],
    driveFolder: "https://drive.google.com/drive/folders/19ExW-xXiJSlhzQZvFkeamv6YKwy03Ajd",
    documents: [
      {
        id: "flyrank-cert",
        title: "Certificate of Completion",
        subtitle: "Backend AI Engineering (ID: FR-D11-77765-F98B0)",
        file: "/flyrank-completion-certificate.pdf",
      },
      {
        id: "flyrank-rec",
        title: "Recommendation Letter",
        subtitle: "Executive Recommendation by Alen Malkoc, CEO",
        file: "/flyrank-recommendation-letter.pdf",
      },
      {
        id: "flyrank-eval",
        title: "Final Evaluation & Report",
        subtitle: "Technical Competency & Internship Performance Evaluation",
        file: "/flyrank-evaluation-report.pdf",
      },
      {
        id: "flyrank-confirm",
        title: "Internship Acceptance",
        subtitle: "Initial Program Confirmation Letter",
        file: "/flyrank-internship-confirmation.pdf",
      },
    ],
  },
  {
    id: 2,
    role: "Next Level AI-Driven Software Engineering Bootcamp",
    company: "Programming Hero",
    period: "April 2026 - Present",
    badge: "In Progress",
    icon: <FiTerminal className="text-emerald-400 text-3xl" />,
    summary: "Intense software engineering track mastering PostgreSQL, Express, Next.js, TypeScript, and modern AI workflows with microservices and system design.",
    details: [
      "Engineered full-stack applications with Next.js App Router, Express, and PostgreSQL, reducing query latency via Prisma connection pooling.",
      "Implemented Retrieval-Augmented Generation (RAG) pipelines using vector embeddings to enable semantic document search.",
      "Containerized microservices using Docker and deployed cloud applications with Docker Compose and production environment configurations."
    ],
  },
  {
    id: 3,
    role: "Complete Web Development Course With Excellence",
    company: "Programming Hero",
    period: "Dec 2025 - June 2026",
    badge: "Completed With Excellence",
    icon: <FiAward className="text-amber-400 text-3xl" />,
    summary: "Rigorous full-stack software training covering database design, secure RESTful APIs, and modern frontend application development. Earned Certificate of Completion with Excellence and BlackBelt Web Developer recognition.",
    details: [
      "Developed 10+ full-stack web applications using Node.js, Express, MongoDB, and React with responsive UI frameworks.",
      "Implemented JWT and Better Auth authentication systems with role-based access control (RBAC) to secure user data across client-server boundaries.",
      "Awarded prestigious BlackBelt Web Developer badge for outstanding academic standing and project delivery in Batch-13."
    ],
    driveFolder: "https://drive.google.com/drive/folders/1Nb5tcWjVaQQqtNUvZw464s4ouoc3Uteg",
    documents: [
      {
        id: "ph-cert",
        title: "Certificate of Completion with Excellence",
        subtitle: "Batch-13 (ID: L2B7-1126) — Programming Hero",
        file: "/certificate_student.pdf",
      },
      {
        id: "ph-blackbelt",
        title: "BlackBelt Developer Recognition",
        subtitle: "Job Placement & Outstanding Achievement Award",
        file: "/BlackBelt.pdf",
      },
    ],
  }
];

export default function Experience() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  useEffect(() => {
    if (selectedDoc) {
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
  }, [selectedDoc]);

  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-24 w-full">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          — 04 EXPERIENCE & CERTIFICATIONS —
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-syne font-bold text-center glow-text text-[var(--text-primary)]"
        >
          Professional Training & Work
        </motion.h2>
        <p className="font-mono text-xs md:text-sm text-[var(--text-muted)] mt-4 max-w-2xl text-center leading-relaxed">
          Verified industry experience, internship credentials, and certified technical training with official certificates and reference documents.
        </p>
      </div>

      <div className="relative border-l-2 border-[var(--border)] pl-6 md:pl-12 ml-4 md:ml-8 max-w-4xl mx-auto space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
            className="relative"
          >
            {/* Timeline Dot Icon */}
            <div className="absolute -left-[45px] md:-left-[69px] top-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--bg)] border-2 border-blue-500/30 flex items-center justify-center text-sm md:text-md shadow-lg group">
              <div className="w-full h-full rounded-full flex items-center justify-center bg-[var(--surface-raised)] border border-[var(--border)] group-hover:border-blue-500/60 transition-all duration-300">
                {exp.icon}
              </div>
            </div>

            <div className="glass-card p-8 md:p-10 rounded-[2.5rem] relative group border-[var(--border)] hover:border-blue-500/30 transition-all duration-500">
              {/* Highlight accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-blue-500 rounded-l-[2.5rem] transition-all duration-500" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-blue-400">
                    {exp.company}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-syne font-bold text-[var(--text-primary)] mt-1 tracking-tight">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-row md:flex-col items-start gap-2 text-right md:-mt-2">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[var(--text-muted)] bg-[var(--surface-raised)] border border-[var(--border)] px-4 py-1.5 rounded-full inline-block">
                    {exp.period}
                  </span>
                  <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 md:self-end">
                    {exp.badge}
                  </span>
                </div>
              </div>

              <p className="font-mono text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                {exp.summary}
              </p>

              <ul className="space-y-3 font-mono text-[13px] text-[var(--text-primary)] opacity-90 pl-1 mb-8">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Verified Documents & Google Drive Action Links */}
              {exp.documents && exp.documents.length > 0 && (
                <div className="pt-6 border-t border-[var(--border)] flex flex-col gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-blue-400 font-bold">
                    Official Credentials & Documentation
                  </span>

                  <div className="flex flex-wrap gap-2.5">
                    {exp.documents.map((doc) => (
                      <button
                        key={doc.id}
                        onClick={() => setSelectedDoc(doc)}
                        className="flex items-center gap-2 font-syne font-bold text-[10px] uppercase tracking-wider bg-blue-500/10 hover:bg-blue-500 text-blue-400 hover:text-white border border-blue-500/30 px-4 py-2.5 rounded-xl transition-all duration-300 shadow-sm cursor-pointer"
                      >
                        <FiFileText /> {doc.title}
                      </button>
                    ))}

                    {exp.driveFolder && (
                      <a
                        href={exp.driveFolder}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-syne font-bold text-[10px] uppercase tracking-wider bg-[var(--surface-raised)] hover:bg-[var(--text-primary)] text-[var(--text-muted)] hover:text-[var(--bg)] border border-[var(--border-active)] px-4 py-2.5 rounded-xl transition-all duration-300 shadow-sm cursor-pointer"
                      >
                        <FiExternalLink /> Google Drive Folder
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* PDF & Document Modal */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-lenis-prevent="true"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-2xl bg-[var(--bg)]/85"
            onClick={() => setSelectedDoc(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              data-lenis-prevent="true"
              className="glass-card w-full max-w-4xl h-[88vh] rounded-[2.5rem] p-6 relative shadow-[0_0_100px_rgba(59,130,246,0.15)] border border-[var(--border-active)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-lg">
                    <FiAward />
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-syne font-bold text-[var(--text-primary)]">
                      {selectedDoc.title}
                    </h2>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                      {selectedDoc.subtitle || "Official Verified Document"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pr-12">
                  <a
                    href={selectedDoc.file}
                    download
                    className="flex items-center gap-2 font-syne font-bold text-[9px] uppercase tracking-widest bg-blue-500 hover:bg-blue-600 active:scale-95 text-white px-4 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20"
                  >
                    <FiDownload /> Download
                  </a>
                </div>
              </div>

              <button
                onClick={() => setSelectedDoc(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full glass-card flex items-center justify-center text-lg hover:bg-[var(--text-primary)] hover:text-[var(--bg)] transition-all duration-300 text-[var(--text-primary)] cursor-pointer z-50"
              >
                <FiX />
              </button>

              {/* PDF Embed / Preview */}
              <div className="flex-1 w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-black/40 relative">
                <iframe
                  src={`${selectedDoc.file}#toolbar=1`}
                  className="w-full h-full border-0 absolute inset-0"
                  title={selectedDoc.title}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
