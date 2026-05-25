"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-20 w-full">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          — 01 ABOUT ME —
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-syne font-bold text-center glow-text"
        >
          Perspective & Purpose
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-syne font-bold mb-6 text-blue-400">
            The Journey
          </h3>
          <p className="text-[18px] font-mono text-[var(--text-primary)] leading-relaxed mb-8">
            My programming journey began with a simple curiosity about how the
            web works. What started as simple HTML/CSS experiments quickly
            evolved into a deep passion for building complex, interactive
            applications. As a Mathematics student at SUST, I bring a logical
            and analytical approach to every line of code I write.
          </p>

          <h3 className="text-3xl font-syne font-bold mb-6 text-blue-400">
            What I Do
          </h3>
          <p className="text-[18px] font-mono text-[var(--text-primary)] leading-relaxed mb-8">
            I specialize in Fullstack Development, with a particular focus on
            the Next Js ecosystem. I enjoy creating seamless user experiences
            that are not only functional but also visually stunning. I thrive on
            solving complex problems and turning abstract ideas into tangible
            reality through code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-card p-10 rounded-[2.5rem] relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <h3 className="text-3xl font-syne font-bold mb-8 tracking-tighter text-[var(--text-primary)]">
            Beyond The Code
          </h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="space-y-6"
          >
            {/* Beyond The Code items */}
            {[
              {
                title: "Sports Enthusiast",
                text: "I love the adrenaline and team spirit found in sports, especially Football and Wrestling.",
                icon: "bg-blue-400",
              },
              {
                title: "Art & Creativity",
                text: "When I'm not coding, I find peace in reading books and writing, exploring various genres within my likings.",
                icon: "bg-blue-400",
              },
              {
                title: "Lifelong Learner",
                text: "I am constantly exploring new technologies and philosophies to broaden my horizons.",
                icon: "bg-blue-400",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="items-start gap-4 flex transition-colors"
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${item.icon} mt-2 flex-shrink-0`}
                />
                <div>
                  <h4 className="font-syne font-bold text-[18px] uppercase tracking-widest mb-1 text-[var(--text-primary)]">
                    {item.title}
                  </h4>
                  <p className="font-mono text-[var(--text-primary)] opacity-90">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
