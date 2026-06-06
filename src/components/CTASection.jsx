import { ArrowRight } from 'lucide-react';
import Reveal from './ui/Reveal';

export default function CTASection({ setCurrentPage }) {
  const handleCTA = () => {
    setCurrentPage('quick-quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 px-6 bg-bg-primary z-10 overflow-hidden premium-section">
      <Reveal className="max-w-6xl mx-auto relative rounded-3xl p-12 md:p-20 overflow-hidden premium-card transition-all duration-700 group" direction="scale">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.08),transparent_30%,rgba(6,182,212,0.08)_58%,rgba(245,158,11,0.08))] opacity-60 pointer-events-none"></div>
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <span className="text-xs font-bold text-accent-cyan tracking-[0.2em] uppercase mb-4 px-3.5 py-1.5 rounded-full bg-accent-cyan/5 border border-accent-cyan/10">
            Ready to Innovate?
          </span>
          
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-text-primary leading-[1.05] mb-6 tracking-tight max-w-3xl text-gradient-premium">
            Bring us the idea. Leave with a clear build plan.
          </h2>
          
          <p className="text-base sm:text-lg premium-copy mb-10 max-w-2xl">
            Start your 3D product development journey with a team that can help shape, prototype, refine, and deliver the physical product your next decision depends on.
          </p>
          
          <div className="flex justify-center w-full">
            <button 
              onClick={handleCTA}
              className="relative px-8 py-4 rounded-xl text-base font-bold text-white select-none cursor-pointer bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.65)] hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
            >
              <span className="flex items-center gap-2.5">
                Talk to Our Expert Today
                <ArrowRight size={18} />
              </span>
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
