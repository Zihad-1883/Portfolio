"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiFacebook, FiArrowDown, FiDownload, FiSend } from "react-icons/fi";
import toast from "react-hot-toast";

const titles = [
  "Production-Grade Backend Architectures",
  "AI Integration & LLM Orchestration",
  "Scalable Database Design & PostgreSQL",
  "Modern Next.js Web Implementations"
];

const valueProposition = "I design and build high-performance APIs, robust database architectures, and AI-integrated web applications. Specialized in Next.js, Express, PostgreSQL, and LLM automation.";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".photo-card", {
        x: 40,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: "expo.out",
      });

      gsap.to(".bg-glow", {
        scale: 1.3,
        opacity: 0.4,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/RESUME.pdf";
    link.download = "Mizbaur_Rahman_Zihad_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Resume downloaded successfully!", {
      style: {
        background: 'var(--surface-raised)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-active)',
      },
      icon: '🚀',
    });
  };

  return (
    <section id="hero" ref={containerRef} className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-32 relative overflow-hidden bg-[var(--bg)]">
      {/* Background Orbs — Light & Dark optimized */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none bg-glow dark:bg-blue-600/5" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none bg-glow dark:bg-purple-600/5" />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Photo Section (Right on Desktop) */}
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <div className="photo-card relative group">
            <div className="absolute -inset-10 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0" />
            
            <div className="w-[300px] h-[380px] md:w-[380px] md:h-[480px] rounded-[3rem] overflow-hidden glass-card p-3 relative z-10 border-white/20 dark:border-white/5 rotate-3 hover:rotate-0 transition-all duration-700 hover:scale-[1.02]">
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src="/photo.png"
                  alt="Mizbaur Rahman Zihad"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-card px-6 py-4 rounded-2xl border-white/20 z-20 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex gap-1 mb-1">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div className="w-2 h-2 rounded-full bg-blue-500 opacity-40" />
                <div className="w-2 h-2 rounded-full bg-blue-500 opacity-20" />
              </div>
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Backend AI Engineer</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-10 -left-6 glass-card px-6 py-4 rounded-2xl border-white/20 z-20 backdrop-blur-xl shadow-2xl"
            >
              <span className="text-2xl font-bold font-syne text-blue-500">20+</span>
              <p className="font-mono text-[8px] uppercase tracking-widest font-bold">Projects Built</p>
            </motion.div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <motion.div className="hero-reveal mb-8">
            <span className="px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full font-mono text-[10px] font-bold tracking-[0.3em] uppercase border border-blue-500/20">
              Open for Opportunities
            </span>
          </motion.div>

          <h5 className="hero-reveal font-syne font-bold text-xl md:text-2xl mb-4 tracking-tight text-[var(--text-primary)] opacity-60">
            Hi, I&apos;m Mizbaur Rahman Zihad
          </h5>

          <h1 className="hero-reveal font-syne text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-[var(--text-primary)]">
            Backend AI & <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Full-Stack Engineer
            </span>
          </h1>

          <div className="hero-reveal flex items-center gap-3 mb-10 h-12">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-500 font-bold">Focus:</span>
            <div className="overflow-hidden h-full flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="font-sans text-lg md:text-xl text-[var(--text-primary)] font-bold tracking-wide"
                >
                  {titles[index]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <p className="hero-reveal max-w-xl font-mono text-sm md:text-base text-[var(--text-muted)] leading-relaxed mb-12">
            {valueProposition}
          </p>

          <div className="hero-reveal flex flex-wrap gap-5 justify-center lg:justify-start items-center">
            <button
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl font-syne font-bold uppercase tracking-widest text-xs hover:translate-y-[-4px] hover:shadow-[0_10px_25px_rgba(59,130,246,0.3)] active:scale-95 transition-all duration-300 shadow-2xl flex items-center gap-3 cursor-pointer"
            >
              Explore Projects
            </button>

            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 glass-card rounded-2xl font-syne font-bold uppercase tracking-widest text-xs text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg)] active:scale-95 transition-all duration-300 flex items-center gap-3 cursor-pointer"
            >
              Let&apos;s Connect <FiSend className="text-sm" />
            </button>

            <button
              onClick={handleResumeDownload}
              className="px-6 py-4 font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <FiDownload className="text-sm" /> Download CV
            </button>
          </div>

          <div className="hero-reveal flex gap-8 mt-12">
            <a href="https://github.com/Zihad-1883" target="_blank" className="text-2xl text-[var(--text-primary)] opacity-40 hover:opacity-100 hover:text-blue-500 transition-all duration-300"><FiGithub /></a>
            <a href="https://linkedin.com/in/mizbaur-rahman-zihad" target="_blank" className="text-2xl text-[var(--text-primary)] opacity-40 hover:opacity-100 hover:text-blue-500 transition-all duration-300"><FiLinkedin /></a>
            <a href="https://www.facebook.com/mr.zihad.92" target="_blank" className="text-2xl text-[var(--text-primary)] opacity-40 hover:opacity-100 hover:text-blue-500 transition-all duration-300"><FiFacebook /></a>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[9px] uppercase tracking-[0.5em] font-mono font-bold opacity-30">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-blue-500/50 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-blue-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
