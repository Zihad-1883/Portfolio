"use client";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiJsonwebtokens,
  SiPrisma,
} from "react-icons/si";
import {
  FaPenNib,
  FaCss3Alt,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
      {
        name: "JavaScript (ES6+)",
        icon: <SiJavascript className="text-[#F7DF1E]" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      {
        name: "DaisyUI",
        icon: (
          <img
            src="https://img.daisyui.com/images/daisyui/daisyui-logo-192.png"
            className="w-10 h-10 object-contain shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            alt="DaisyUI"
          />
        ),
      },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-[var(--text-primary)]" />,
      },
      {
        name: "HeroUI",
        icon: (
          <img
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            className="w-10 h-10 object-contain shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            alt="HeroUI"
          />
        ),
      },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      {
        name: "Express",
        icon: <SiExpress className="text-[var(--text-primary)]" />,
      },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
      { name: "Prisma", icon: <SiPrisma className="text-[var(--text-primary)]" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-[#d63aff]" /> },
      {
        name: "Better Auth",
        icon: (
          <img
            src="https://bestofjs.org/logos/betterauth.svg"
            className="w-10 h-10 object-contain white-glow-drop"
            alt="Better Auth"
          />
        ),
      },
    ],
  },
  {
    title: "Tools & AI",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      {
        name: "GitHub",
        icon: <SiGithub className="text-[var(--text-primary)]" />,
      },
      { name: "Figma", icon: <FaPenNib className="text-pink-500" /> },
      {
        name: "VS Code",
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/960px-Visual_Studio_Code_1.35_icon.svg.png"
            className="w-10 h-10 object-contain"
            alt="VS Code"
          />
        ),
      },
      {
        name: "LLM Integration",
        icon: (
          <svg className="w-10 h-10 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
            <circle cx="12" cy="12" r="2.5" fill="currentColor" fillOpacity="0.2" />
          </svg>
        ),
      },
      {
        name: "Antigravity",
        icon: (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNCehAPz3TurboK5MAlHDdlMa0Le12Lis_hiCdVGPW34FZZ090J1ZP0Q&s=10"
            className="w-10 h-10 object-contain rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            alt="Antigravity"
          />
        ),
      },
      {
        name: "Claude Code",
        icon: (
          <img
            src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/claudecode-color.png"
            className="w-10 h-10 object-contain"
            alt="Claude Code"
          />
        ),
      },
      {
        name: "Copilot",
        icon: (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQA7D9lDAr6zXmkubGirzNEtykfiHa-K0C3XyeqwqbBjFDxOriv5pf-pQ&s=10"
            className="w-10 h-10 object-contain"
            alt="Copilot"
          />
        ),
      },
      {
        name: "Cursor",
        icon: (
          <img
            src="https://static.cdnlogo.com/logos/c/44/cursor_800.png"
            className="w-10 h-10 object-contain"
            alt="Cursor"
          />
        ),
      },
      {
        name: "Google Stitch",
        icon: (
          <img
            src="https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg"
            className="w-10 h-10 object-contain rounded-lg"
            alt="Google Stitch"
          />
        ),
      },
      {
        name: "Lovable",
        icon: (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-gE7ZMY76k97p3Y8GHDhdVUmLx0Go9c2eVt9XMDGWLkRPq855w9A2vo&s=10"
            className="w-10 h-10 object-contain"
            alt="Lovable"
          />
        ),
      },
    ],
  },
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
          className="text-4xl md:text-5xl font-syne font-bold text-center glow-text text-[var(--text-primary)]"
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
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full"
            >
              {category.skills.map((skill, j) => (
                <motion.div
                  key={j}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 20 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      },
                    },
                  }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="glass-card p-6 rounded-3xl flex flex-col items-center justify-center gap-4 group transition-all duration-500 border border-[var(--border-active)] hover:border-blue-500/50 hover:bg-blue-500/5 shadow-2xl h-44"
                >
                  <div className="text-4xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    {skill.icon}
                  </div>
                  <span className="text-[12px] font-mono font-bold uppercase tracking-widest text-[var(--text-primary)] transition-colors duration-500 text-center">
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
