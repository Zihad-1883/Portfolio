"use client";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from "react-icons/fi";

export default function Contact() {
  const [state, handleSubmit] = useForm("mgodqybe");

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center mb-20 w-full">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          — 05 CONTACT —
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-syne font-bold text-center glow-text tracking-tighter"
        >
          Manifest a Connection
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full">
        {/* Info Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-3xl md:text-4xl font-syne font-bold mb-8 leading-tight">
            Decoding challenges.<br />
            Encoding solutions.
          </h3>
          <p className="font-mono text-text-muted mb-12 max-w-md leading-relaxed text-sm md:text-base">
            Currently scouting for high-impact collaborations and architectural challenges.
            If you're building the future, I have the keys.
          </p>

          <div className="flex flex-col gap-8 mb-12">
            <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.location.href = 'mailto:zihad.official@email.com'}>
              <div className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-2xl text-text-muted group-hover:text-accent group-hover:border-accent transition-all duration-500">
                <FiMail />
              </div>
              <div>
                <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#444] mb-1">Electronic Mail</p>
                <p className="font-mono text-sm md:text-lg hover:text-accent transition-colors">
                  zihad.pilot18@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-2xl text-text-muted group-hover:text-accent group-hover:border-accent transition-all duration-500">
                <FiMapPin />
              </div>
              <div>
                <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#444] mb-1">Geographic Origin</p>
                <p className="font-mono text-sm md:text-lg">Sylhet, Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <a href="https://github.com/Zihad-1883" target="_blank" rel="noopener noreferrer" className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-2xl hover:text-accent hover:border-accent group transition-all duration-500" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/mizbaur-rahman-zihad/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-2xl hover:text-accent hover:border-accent group transition-all duration-500" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Form Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-8 md:p-12 rounded-[2.5rem] border-white/5 relative overflow-hidden"
        >
          {state.succeeded ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 20 }}
              className="h-full flex flex-col items-center justify-center text-center gap-6 py-20 relative z-10"
            >
              <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center text-4xl shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                <FiCheckCircle />
              </div>
              <div>
                <h4 className="text-2xl font-syne font-bold mb-2">Transmission Successful</h4>
                <p className="font-mono text-text-muted text-sm">Your message has been received. Expect a response soon.</p>
              </div>
              <button
                onClick={() => window.location.reload()}
                className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] border border-white/10 px-8 py-3 rounded-xl hover:bg-white/5 transition-all"
              >
                Restart Session
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#666] ml-1">Identity</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 font-mono focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all text-white placeholder:text-[#333]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#666] ml-1">Digital Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 font-mono focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all text-white placeholder:text-[#333]"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-[#ff6b6b] text-[10px] font-mono mt-1 ml-1" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#666] ml-1">Message Payload</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Transmit your thoughts..."
                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 font-mono focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all text-white placeholder:text-[#333] resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-[#ff6b6b] text-[10px] font-mono mt-1 ml-1" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="mt-4 w-full flex items-center justify-center gap-4 font-syne font-bold text-[10px] uppercase tracking-[0.3em] bg-white text-black py-5 rounded-2xl hover:scale-[0.98] active:scale-95 transition-all disabled:opacity-50 shadow-[0_0_30px_rgba(255,255,255,0.1)] group"
              >
                {state.submitting ? "Transmitting..." : "Initiate Contact"}
                <FiSend className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          )}

          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
