"use client";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMessageCircle, FiMapPin, FiSend, FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mgodqybe");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Transmission received! I'll get back to you soon.", {
        icon: '🚀',
      });
    }
    if (state.errors) {
      toast.error("Something went wrong. Please try again.");
    }
  }, [state.succeeded, state.errors]);

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-24">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          — 06 CONTACT —
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-syne font-bold text-center glow-text"
        >
          Let's Build Something
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
            <div className="space-y-8">
            <h3 className="text-3xl font-syne font-bold tracking-tighter text-[var(--text-primary)]">Get In Touch</h3>
            <p className="text-xl font-mono text-[var(--text-muted)] leading-relaxed max-w-md">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
            </p>
          </div>

          <div className="space-y-6">
            <a href="mailto:zihad.pilot18@gmail.com" className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-xl group-hover:text-blue-400 group-hover:border-blue-400/50 transition-all duration-500 text-[var(--text-primary)] border border-[var(--border-active)]">
                <FiMail />
              </div>
              <div>
                <p className="font-mono text-[14px] uppercase tracking-widest text-[var(--text-primary)] font-bold mb-1">Email Address</p>
                <p className="font-mono text-lg text-[var(--text-primary)] opacity-90 group-hover:text-blue-400 transition-colors">zihad.pilot18@gmail.com</p>
              </div>
            </a>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="https://github.com/Zihad-1883" target="_blank" className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-xl text-[var(--text-primary)] border border-[var(--border-active)] hover:text-blue-400 hover:border-blue-400 transition-all duration-500 font-bold"><FiGithub /></a>
            <a href="https://linkedin.com/in/mizbaur-rahman-zihad" target="_blank" className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-xl text-[var(--text-primary)] border border-[var(--border-active)] hover:text-blue-400 hover:border-blue-400 transition-all duration-500 font-bold"><FiLinkedin /></a>
            <a href="https://www.facebook.com/mr.zihad.92" target="_blank" className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-xl text-[var(--text-primary)] border border-[var(--border-active)] hover:text-blue-400 hover:border-blue-400 transition-all duration-500 font-bold"><FiFacebook /></a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--text-primary)] font-bold ml-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full bg-[var(--surface-raised)] border-2 border-[var(--border-active)] rounded-2xl px-6 py-4 font-mono text-sm focus:outline-none focus:border-blue-500 transition-all text-[var(--text-primary)] placeholder:text-[var(--text-primary)]/40 font-medium"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--text-primary)] font-bold ml-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="w-full bg-[var(--surface-raised)] border-2 border-[var(--border-active)] rounded-2xl px-6 py-4 font-mono text-sm focus:outline-none focus:border-blue-500 transition-all text-[var(--text-primary)] placeholder:text-[var(--text-primary)]/40 font-medium"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--text-primary)] font-bold ml-2">Message</label>
              <textarea
                name="message"
                placeholder="How can I help you?"
                rows={6}
                className="w-full bg-[var(--surface-raised)] border-2 border-[var(--border-active)] rounded-2xl px-6 py-4 font-mono text-sm focus:outline-none focus:border-blue-500 transition-all resize-none text-[var(--text-primary)] placeholder:text-[var(--text-primary)]/40 font-medium"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-[var(--text-primary)] text-[var(--bg)] rounded-2xl py-5 font-syne font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-xl disabled:opacity-50"
            >
              {state.submitting ? "Sending..." : <>Send Transmission <FiSend /></>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
