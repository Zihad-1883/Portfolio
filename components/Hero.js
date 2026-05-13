"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";

const titles = [
  "Mizbaur Rahman Zihad",
  "A Craftsman of the Digital Void",
  "Developing Scalable Dreams",
  "SUST Mathematics Honours"
];

const emotionalStatement = "Architecting the silence between the stars.";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Very slow, weighted reveal
      gsap.from(".hero-reveal", {
        y: 80,
        opacity: 0,
        duration: 2.5,
        stagger: 0.5,
        ease: "power3.out",
      });

      gsap.from(avatarRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 3.5,
        ease: "expo.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(192,132,252,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div ref={avatarRef} className="w-52 h-52 rounded-full border border-white/5 bg-surface flex items-center justify-center mb-16 white-glow relative overflow-hidden group cursor-crosshair">
        <img
          src="/photo.png"
          alt="Mizbaur Rahman Zihad"
          className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[1.5s] scale-105 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="text-center max-w-4xl z-10">
        <motion.p
          className="hero-reveal font-mono font-semibold text-[10px] uppercase tracking-[1em] text-text-muted mb-8"
        >
          {emotionalStatement}
        </motion.p>

        <h1 className="hero-reveal font-syne text-7xl md:text-[10rem] font-extrabold mb-12 glow-text tracking-tighter leading-[0.8] opacity-90">
          Zihad
        </h1>

        <div className="hero-reveal min-h-[40px] mb-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 0.8, letterSpacing: "0.4em" }}
              exit={{ opacity: 0, letterSpacing: "0.1em" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="font-mono text-xs md:text-sm text-accent uppercase tracking-[0.4em]"
            >
              {titles[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="hero-reveal flex gap-8 justify-center items-center pt-8">
          <a
            href="https://github.com/Zihad-1883"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-xl hover:text-white transition-all duration-700"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mizbaur-rahman-zihad/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-xl hover:text-white transition-all duration-700"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <div className="w-[1px] h-6 bg-border mx-2" />
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 glass-card rounded-full font-syne font-bold uppercase tracking-[0.3em] text-[9px] hover:bg-white/10"
          >
            Enter The Void
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 4, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-text-muted cursor-pointer"
        onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[9px] uppercase tracking-[0.8em] font-mono">Descend</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown className="text-lg" />
        </motion.div>
      </motion.div>
    </section>
  );
}
