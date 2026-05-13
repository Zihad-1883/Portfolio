"use client";
import { motion } from "framer-motion";

const education = [
  {
    institution: "Shahjalal University of Science and Technology",
    shortName: "SUST",
    degree: "B.Sc. in Mathematics",
    status: "2023 - Present",
    badge: "First Class CGPA",
  },
  {
    institution: "Higher Secondary Certificate",
    shortName: "HSC",
    degree: "Science Group",
    status: "Passed 2022",
    badge: "GPA 5.00 / 5.00",
  },
  {
    institution: "Secondary School Certificate",
    shortName: "SSC",
    degree: "Science Group",
    status: "Passed 2020",
    badge: "GPA 5.00 / 5.00",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 max-w-7xl mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center mb-20 w-full">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          — 03 EDUCATION —
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-syne font-bold text-center glow-text"
        >
          Academic Journey
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="glass-card p-10 rounded-[2.5rem] flex flex-col justify-between gap-6 relative group overflow-hidden md:h-[340px]"
          >
            {/* Animated accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-white/5 group-hover:bg-white transition-all duration-700" />

            <div className="relative z-10 flex flex-col gap-6">
              <div className="font-mono text-[11px] text-white/70 uppercase tracking-[0.4em] leading-relaxed font-semibold">
                {edu.institution}
              </div>
              <div>
                <h3 className="text-4xl font-syne font-bold mb-3 tracking-tighter group-hover:translate-x-1 transition-transform duration-500">
                  {edu.shortName}
                </h3>
                <p className="font-mono text-white/80 text-base group-hover:text-white transition-colors duration-500">
                  {edu.degree}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 relative z-10 pt-4">
              <div className="border border-white/40 text-white px-6 py-2.5 rounded-xl text-[11px] font-mono tracking-[0.2em] font-bold uppercase group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl bg-white/5">
                {edu.badge}
              </div>
              <div className="font-mono text-[10px] text-white/50 uppercase tracking-[0.5em]">
                {edu.status}
              </div>
            </div>

            {/* Subtle background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
