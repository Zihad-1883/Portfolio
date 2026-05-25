"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Portfolio />
        <Contact />
        
        <footer className="py-20 px-6 border-t border-white/5 bg-black/20 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.5em] text-white/30">
                © 2026 Mizbaur Rahman Zihad — Built with Precision
              </p>
            </div>

            <div className="flex gap-8">
               <a href="https://github.com/Zihad-1883" target="_blank" className="font-mono text-[10px] uppercase tracking-widest text-white/30 hover:text-blue-400 transition-colors">GitHub</a>
               <a href="https://linkedin.com/in/mizbaur-rahman-zihad" target="_blank" className="font-mono text-[10px] uppercase tracking-widest text-white/30 hover:text-blue-400 transition-colors">LinkedIn</a>
               <a href="https://www.facebook.com/mr.zihad.92" target="_blank" className="font-mono text-[10px] uppercase tracking-widest text-white/30 hover:text-blue-400 transition-colors">Facebook</a>
            </div>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-mono text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
}
