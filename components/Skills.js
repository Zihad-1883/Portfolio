"use client";
import { motion } from "framer-motion";
import {
  SiHtml5, SiTailwindcss, SiJavascript, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiTypescript, SiGit, SiGithub,
  SiDaisyui, SiPostgresql
} from "react-icons/si";
import { FaPenNib, FaCode, FaCss3Alt, FaFileWord, FaFileExcel } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "DaisyUI", icon: <img src="https://img.daisyui.com/images/daisyui/daisyui-logo-192.png" className="w-10 h-10 object-contain" alt="DaisyUI" /> },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express", icon: <SiExpress className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Auth", icon: <FaCode className="text-white" /> },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "Figma", icon: <FaPenNib className="text-pink-500" /> },
      { name: "Word", icon: <FaFileWord className="text-blue-500" /> },
      { name: "Excel", icon: <FaFileExcel className="text-green-500" /> },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
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

      <div className="space-y-20">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="space-y-10">
            <h3 className="text-sm font-mono font-bold uppercase tracking-[0.5em] text-blue-400/60 border-l-2 border-blue-500/20 pl-6">
              {category.title}
            </h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 w-full"
            >
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 20 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: { type: "spring", stiffness: 100, damping: 20 }
                    },
                  }}
                  className="glass-card p-6 flex flex-col items-center justify-center gap-6 rounded-3xl group cursor-default h-44 hover:border-blue-500/30 transition-all duration-500"
                >
                  <div className="text-5xl transform transition-all duration-500 group-hover:scale-110 group-hover:white-glow-drop">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-white/30 group-hover:text-white transition-colors text-center leading-none">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .white-glow-drop {
          filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.4));
        }
      `}</style>
    </section>
  );
}
