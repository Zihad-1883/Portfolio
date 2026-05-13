"use client";
import { motion } from "framer-motion";
import {
  SiHtml5, SiTailwindcss, SiJavascript, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiTypescript, SiGit, SiGithub,
  SiDaisyui, SiPostgresql
} from "react-icons/si";
import { FaPenNib, FaCode, FaCss3Alt, FaFileWord, FaFileExcel } from "react-icons/fa";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "DaisyUI", icon: <img src="https://img.daisyui.com/images/daisyui/daisyui-logo-192.png" className="w-10 h-10 object-contain" alt="DaisyUI" /> },
  { name: "HeroUI", icon: <img src="https://heroui.com/icons/apple-touch-icon.png" className="w-10 h-10 object-contain brightness-110" alt="HeroUI" /> },
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "Express", icon: <SiExpress className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
  { name: "Authentication", icon: <FaCode className="text-white" /> },
  { name: "OOP", icon: <img src="https://thumbs.dreamstime.com/b/object-oriented-programming-isolated-icon-simple-element-illustration-technology-concept-icons-editable-logo-sign-symbol-142287627.jpg" className="w-10 h-10 object-cover rounded-lg" alt="OOP" /> },
  { name: "English", icon: <div className="text-2xl font-bold font-syne">EN</div> },
  { name: "MS Word", icon: <FaFileWord className="text-[#2B579A]" /> },
  { name: "MS Excel", icon: <FaFileExcel className="text-[#217346]" /> },
  { name: "Writing", icon: <FaPenNib className="text-white" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          — 02 SKILLS —
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-syne font-bold text-center glow-text"
        >
          Tech Stack & Expertise
        </motion.h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.04,
            },
          },
        }}
        className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 w-full"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 20 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { type: "spring", stiffness: 100, damping: 15 }
              },
            }}
            className="glass-card p-6 flex flex-col items-center justify-center gap-6 rounded-2xl group cursor-default h-40"
          >
            <div className="text-5xl transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 group-hover:white-glow-drop">
              {skill.icon}
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-text-muted group-hover:text-text-primary transition-colors text-center leading-none">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        .white-glow-drop {
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
        }
      `}</style>
    </section>
  );
}
