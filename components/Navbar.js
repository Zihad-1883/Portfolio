"use client";
import { useState, useEffect } from "react";
import { FiHome, FiZap, FiBookOpen, FiBriefcase, FiMail } from "react-icons/fi";

const navItems = [
  { id: "hero", icon: <FiHome />, label: "Hero" },
  { id: "skills", icon: <FiZap />, label: "Skills" },
  { id: "education", icon: <FiBookOpen />, label: "Education" },
  { id: "portfolio", icon: <FiBriefcase />, label: "Portfolio" },
  { id: "contact", icon: <FiMail />, label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -40% 0px" }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-10 z-50">
        <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center bg-surface/30 text-[10px] font-syne font-bold mb-8 white-glow cursor-pointer transition-all duration-1000 hover:border-white/40" onClick={() => scrollTo("hero")}>
          MZ
        </div>
        <div className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative p-2 transition-all duration-700 group ${
                activeSection === item.id 
                  ? "text-white active" 
                  : "text-text-muted hover:text-text-primary"
              }`}
              aria-label={item.label}
            >
              <div className="nav-dot" />
              <span className="text-2xl block opacity-40 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110">{item.icon}</span>
              
              {/* Cinematic Label */}
              <span className="absolute left-full ml-10 border-l border-white/10 pl-4 py-1 text-[9px] uppercase tracking-[0.6em] text-text-primary whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-60 transition-all duration-700 transform -translate-x-4 group-hover:translate-x-0">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] lg:hidden z-50">
        <div className="flex justify-around items-center p-3 glass-card rounded-2xl shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`p-3 transition-all duration-300 rounded-xl flex flex-col items-center gap-1 ${
                activeSection === item.id 
                  ? "text-accent bg-white/10 scale-110" 
                  : "text-text-muted"
              }`}
              aria-label={item.label}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-[8px] uppercase tracking-tighter sm:tracking-widest font-mono">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
