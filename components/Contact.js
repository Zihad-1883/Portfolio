"use client";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMessageCircle, FiMapPin, FiSend, FiGithub, FiLinkedin, FiFacebook, FiCopy, FiCheck } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mgodqybe");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("zihad.pilot18@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard!", { icon: "📋" });
    setTimeout(() => setCopied(false), 2500);
  };

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
          Let&apos;s Build Something
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
          <div className="space-y-6">
            <h3 className="text-3xl font-syne font-bold tracking-tighter text-[var(--text-primary)]">Get In Touch</h3>
            <p className="text-sm font-mono text-[var(--text-muted)] leading-relaxed max-w-md">
              Whether you have a full-time role, contract work, or a collaborative project, feel free to reach out.
            </p>

            {/* Open for Opportunities Badge Card */}
            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-400">
                  Open For Opportunities
                </span>
              </div>
              <p className="font-mono text-xs text-[var(--text-muted)] leading-relaxed">
                Actively seeking roles where I can contribute to robust APIs, database design, and full-stack web applications:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Junior / Associate Full-Stack Developer", "Backend Developer (Node.js/Express)", "AI Engineering Intern / Trainee"].map((role, rIdx) => (
                  <span key={rIdx} className="text-[10px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full font-bold">
                    🎯 {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center justify-between gap-4 glass-card p-4 rounded-2xl border border-[var(--border-active)] hover:border-blue-400/50 transition-all duration-500">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=zihad.pilot18@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group cursor-pointer flex-grow"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-xl text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                  <FiMail />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-mono text-[12px] uppercase tracking-widest text-[var(--text-primary)] font-bold">Email Address</p>
                    <span className="text-[8px] font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">Open Gmail</span>
                  </div>
                  <p className="font-mono text-sm md:text-base text-[var(--text-primary)] opacity-90 group-hover:text-blue-400 transition-colors">
                    zihad.pilot18@gmail.com
                  </p>
                </div>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                className="p-3 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-muted)] hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-xs font-mono"
              >
                {copied ? <FiCheck className="text-emerald-400 text-base" /> : <FiCopy className="text-base" />}
                <span className="hidden sm:inline text-[10px] uppercase tracking-wider font-bold">
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>
            </div>

            {/* Phone */}
            <a href="tel:+8801865662482" className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-xl group-hover:text-blue-400 group-hover:border-blue-400/50 transition-all duration-500 text-[var(--text-primary)] border border-[var(--border-active)]">
                <FiPhone />
              </div>
              <div>
                <p className="font-mono text-[14px] uppercase tracking-widest text-[var(--text-primary)] font-bold mb-1">Phone Number</p>
                <p className="font-mono text-base md:text-lg text-[var(--text-primary)] opacity-90 group-hover:text-blue-400 transition-colors">+880 1865 662482</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/8801865662482" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-xl text-emerald-400 group-hover:text-emerald-300 group-hover:border-emerald-400/50 transition-all duration-500 border border-[var(--border-active)]">
                <SiWhatsapp />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-mono text-[14px] uppercase tracking-widest text-[var(--text-primary)] font-bold">WhatsApp</p>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">Chat Now</span>
                </div>
                <p className="font-mono text-base md:text-lg text-[var(--text-primary)] opacity-90 group-hover:text-emerald-400 transition-colors">+880 1865 662482</p>
              </div>
            </a>
          </div>

          <div className="flex gap-4 pt-2">
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
