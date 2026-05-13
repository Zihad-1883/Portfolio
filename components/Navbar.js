"use client";
import { useState, useEffect } from "react";
import { FiHome, FiZap, FiBookOpen, FiBriefcase, FiMail, FiUser } from "react-icons/fi";

const navItems = [
  { id: "hero", icon: <FiHome />, label: "Home" },
  { id: "about", icon: <FiUser />, label: "About" },
  { id: "skills", icon: <FiZap />, label: "Skills" },
  { id: "education", icon: <FiBookOpen />, label: "Education" },
  { id: "portfolio", icon: <FiBriefcase />, label: "Projects" },
  { id: "contact", icon: <FiMail />, label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-30% 0px -30% 0px" }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    setActiveSection(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[95%] max-w-5xl`}>
      <div className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${scrolled ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl" : "bg-transparent border border-transparent"
        }`}>
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo("hero")}>
          <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center bg-white/5 text-xs font-syne font-bold text-blue-400 group-hover:border-blue-400/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500">
            MZ
          </div>
          <span className="font-syne font-bold text-sm tracking-tighter hidden sm:block">Zihad.</span>
        </div>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-4 py-2 rounded-xl text-[10px] uppercase tracking-widest font-mono transition-all duration-500 relative group ${activeSection === item.id
                  ? "text-blue-400 bg-blue-400/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                  : "text-white/40 hover:text-white"
                }`}
            >
              <span className={activeSection === item.id ? "drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" : ""}>
                {item.label}
              </span>
              {activeSection === item.id && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_15px_#60a5fa,0_0_5px_#60a5fa]" />
              )}
            </button>
          ))}
        </div>

        <div className="lg:hidden flex items-center p-2 rounded-xl border border-white/10 bg-white/5 text-blue-400">
          <FiHome onClick={() => scrollTo("hero")} className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Bottom Navigation (Optional, or unified Top Nav) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] lg:hidden z-50">
        <div className="flex justify-around items-center p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          {navItems.filter(item => ["hero", "about", "skills", "portfolio", "contact"].includes(item.id)).map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`p-3 transition-all duration-300 rounded-xl flex flex-col items-center gap-1 ${activeSection === item.id
                  ? "text-blue-400 bg-blue-400/10 scale-110 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                  : "text-white/30"
                }`}
            >
              <span className={`text-xl ${activeSection === item.id ? "drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" : ""}`}>{item.icon}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
