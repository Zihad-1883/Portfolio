import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="lg:pl-32">
        <Hero />
        <Skills />
        <Education />
        <Portfolio />
        <Contact />
        
        <footer className="py-20 px-6 text-center border-t border-white/5 bg-surface/30 backdrop-blur-md">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-syne font-bold mb-2 white-glow">
              MZ
            </div>
            <p className="font-mono text-[9px] uppercase tracking-[0.5em] text-text-muted transition-colors hover:text-text-primary cursor-default">
              © 2026 Mizbaur Rahman Zihad — Crafted in Silence
            </p>
            <div className="flex gap-6 mt-4">
               <a href="https://github.com/Zihad-1883" target="_blank" className="font-mono text-[8px] uppercase tracking-widest text-text-muted hover:text-white transition-colors">GitHub</a>
               <a href="https://linkedin.com/in/mizbaur-rahman-zihad" target="_blank" className="font-mono text-[8px] uppercase tracking-widest text-text-muted hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
