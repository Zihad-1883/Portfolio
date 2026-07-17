"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiCpu, 
  FiTerminal, 
  FiAward, 
  FiX, 
  FiFileText,
  FiMail
} from "react-icons/fi";

const experiences = [
  {
    id: 1,
    role: "Back-End AI Engineering Intern",
    company: "FlyRank AI",
    period: "July 2026 - Sept 2026",
    badge: "Approved Internship",
    icon: <FiCpu className="text-blue-400 text-3xl" />,
    summary: "Accepted into the FlyRank AI Internship program to build robust pipelines and integrate advanced AI capabilities into backend infrastructure.",
    details: [
      "Role / title: Back-End AI Engineering Intern",
      "Duration: 12 weeks (July 1, 2026 - September 23, 2026)",
      "Technical focus: Backend systems and AI engineering workflows",
      "Status: Officially accepted and approved"
    ],
    hasLetter: true,
    verification: "verify@internship.flyrank.ai",
    letterText: {
      title: "Internship Confirmation",
      ref: "Re: Internship Confirmation - Mizbaur Rahman Zihad, July 2026",
      to: "To whom it may concern,",
      body: "This letter confirms that Mizbaur Rahman Zihad (mrzihadyt19@gmail.com) has been accepted into the FlyRank AI Internship program as a Back-End AI Engineering Intern for July 2026.",
      fields: [
        { label: "Intern Name", value: "MIzbaur Rahman Zihad" },
        { label: "Role / Title", value: "Back-End AI Engineering Intern" },
        { label: "Program", value: "July 2026 - Backend AI Engineering" },
        { label: "Start Date", value: "July 1, 2026" },
        { label: "End Date", value: "September 23, 2026" },
        { label: "Duration", value: "12 Weeks" },
        { label: "Status", value: "Approved" }
      ],
      notice: "Participation confirms acceptance into the internship program and does not create employment, contractor status, wages, benefits, or a job guarantee.",
      signer: "Alen Malkoc, Founder, CEO",
      company: "FlyRank Corp."
    }
  },
  {
    id: 2,
    role: "Next Level AI-Driven Software Engineering Bootcamp",
    company: "Programming Hero",
    period: "April 2026 - Present",
    badge: "In Progress",
    icon: <FiTerminal className="text-emerald-400 text-3xl" />,
    summary: "Intense bootcamp mastering the PENN stack integrated with cutting-edge AI engineering, containerization and cloud infrastructure.",
    details: [
      "PENN Stack Development (PostgreSQL, Express, Next.js, Node.js)",
      "AI Engineering concepts including RAG (Retrieval-Augmented Generation), vector databases, and semantic search",
      "Cloud & Container Orchestration via AWS and Docker"
    ]
  },
  {
    id: 3,
    role: "Complete Web Development Course",
    company: "Programming Hero",
    period: "Dec 2025 - June 2026",
    badge: "Completed",
    icon: <FiAward className="text-amber-400 text-3xl" />,
    summary: "Comprehensive training of full-stack web architectures, APIs, databases, and responsive client-side development.",
    details: [
      "Acquired expertise in the MENN Stack (MongoDB, Express, Next.js, Node.js)",
      "Designed and deployed responsive full-stack applications with custom authentication systems",
      "Mastered clean RESTful APIs, data validation, and database modeling concepts"
    ]
  }
];

export default function Experience() {
  const [selectedLetter, setSelectedLetter] = useState(null);

  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-24 w-full">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          — 04 EXPERIENCE —
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

              <ul className="space-y-3 font-mono text-[13px] text-[var(--text-primary)] opacity-90 pl-1 mb-6">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {exp.hasLetter && (
                <button
                  onClick={() => setSelectedLetter(exp.letterText)}
                  className="flex items-center gap-2 font-syne font-bold text-[9px] uppercase tracking-widest bg-blue-500 text-white px-6 py-3.5 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-xl cursor-pointer"
                >
                  <FiFileText /> View Internship Letter
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Internship Letter Modal */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-2xl bg-[var(--bg)]/85"
            onClick={() => setSelectedLetter(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="glass-card w-full max-w-4xl h-[85vh] rounded-[2.5rem] p-6 relative shadow-[0_0_100px_rgba(59,130,246,0.15)] border border-[var(--border-active)] flex flex-col"
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
                      {selectedLetter.title}
                    </h2>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                      Official Confirmation Document
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pr-12">
                  <a
                    href="/flyrank-internship-confirmation.pdf"
                    download
                    className="flex items-center gap-2 font-syne font-bold text-[9px] uppercase tracking-widest bg-blue-500 hover:bg-blue-600 active:scale-95 text-white px-4 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20"
                  >
                    Download PDF
                  </a>
                </div>
              </div>

              <button
                onClick={() => setSelectedLetter(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full glass-card flex items-center justify-center text-lg hover:bg-[var(--text-primary)] hover:text-[var(--bg)] transition-all duration-300 text-[var(--text-primary)] cursor-pointer z-50"
              >
                <FiX />
              </button>

              {/* PDF Embed Area */}
              <div className="flex-1 w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-black/40 relative">
                <iframe
                  src="/flyrank-internship-confirmation.pdf#toolbar=1"
                  className="w-full h-full border-0 absolute inset-0"
                  title="Internship Confirmation PDF"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
