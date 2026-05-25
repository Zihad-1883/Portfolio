"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { FiGithub, FiLinkedin, FiFacebook, FiArrowDown } from "react-icons/fi";
import toast from "react-hot-toast";

const titles = [
  "Mizbaur Rahman Zihad",
  "22",
  "Fullstack Developer",
  "Next Js Specialist",
  "Continuous Learner"
];

const emotionalStatement = "Crafting high-performance web experiences with precision and passion.";

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
      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(avatarRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 2,
        ease: "expo.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/RESUME.pdf";
    link.download = "Mizbaur_Rahman_Zihad_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);

    toast.success("Download has completed!", {
      icon: '✅',
      duration: 3000,
    });
  };

  return (
    <section id="hero" ref={containerRef} className="min-h-screen flex flex-col justify-center items-center px-6 pt-16 pb-24 relative overflow-hidden bg-[var(--bg)]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />

      {/* Download Completion Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-10 z-[200] px-6 py-4 glass-card rounded-2xl flex items-center gap-4 bg-blue-500/10 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <FiArrowDown className="text-xl animate-bounce" />
            </div>
            <div>
              <h4 className="font-syne font-bold text-sm text-[var(--text-primary)] tracking-wide">Download Success</h4>
              <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold opacity-80">Resume is ready for you</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={avatarRef} className="w-56 h-56 rounded-full border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center mb-8 shadow-2xl relative overflow-hidden group cursor-pointer transition-all duration-700">
        <img
          src="/hero.png"
          alt="Mizbaur Rahman Zihad"
          className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1.5s] scale-110 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none" />
      </div>

      <div className="text-center max-w-5xl z-10">
        <motion.p
          className="hero-reveal font-mono font-bold text-[10px] uppercase tracking-[0.65em] text-blue-400 mb-4"
        >
          {emotionalStatement}
        </motion.p>

        <h5 className="hero-reveal font-syne font-bold mb-6 tracking-tighter leading-none text-[var(--text-primary)] selection:bg-blue-500">
          Hi , I'm
        </h5>

        <h1 className="hero-reveal font-syne text-5xl md:text-[6rem] font-extrabold mb-6 tracking-tighter leading-none text-[var(--text-primary)] selection:bg-blue-500">
          Zihad.
        </h1>

        <div className="hero-reveal min-h-[40px] mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm md:text-lg text-[var(--text-primary)] uppercase tracking-[0.3em] font-bold"
            >
              {titles[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="hero-reveal flex flex-wrap gap-4 justify-center items-center pt-6">
          <div className="flex gap-4 mr-4">
            <a href="https://github.com/Zihad-1883" target="_blank" className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-xl text-[var(--text-primary)] hover:text-blue-400 hover:border-blue-400/50 transition-all duration-500"><FiGithub /></a>
            <a href="https://linkedin.com/in/mizbaur-rahman-zihad" target="_blank" className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-xl text-[var(--text-primary)] hover:text-blue-400 hover:border-blue-400/50 transition-all duration-500"><FiLinkedin /></a>
            <a href="https://www.facebook.com/mr.zihad.92" target="_blank" className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-xl text-[var(--text-primary)] hover:text-blue-400 hover:border-blue-400/50 transition-all duration-500"><FiFacebook /></a>
          </div>

          <button
            onClick={handleResumeDownload}
            className="px-8 py-4 bg-[var(--text-primary)] text-[var(--bg)] rounded-xl font-syne font-bold uppercase tracking-widest text-[11px] hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-xl"
          >
            Download Resume
          </button>

          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 glass-card rounded-xl font-syne font-bold uppercase tracking-widest text-[11px] hover:border-[var(--text-primary)] transition-all duration-500 text-[var(--text-primary)]"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[var(--text-primary)] cursor-pointer"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[9px] uppercase tracking-[0.5em] font-mono font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown className="text-lg" />
        </motion.div>
      </motion.div>
    </section>
  );
}
