import aboutImage from '../assets/about_3d_printing.png';
import { Award, Compass, ArrowRight } from 'lucide-react';
import Reveal from './ui/Reveal';

export default function AboutUs({ setCurrentPage }) {
  const handleCTA = () => {
    setCurrentPage('quick-quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-24 px-6 bg-bg-primary z-10 premium-section overflow-hidden">
      <div className="story-rail hidden lg:block"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Premium Image */}
          <Reveal className="flex justify-center" direction="left">
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-accent-cyan/20 to-accent-purple/5 hover:from-accent-cyan/40 hover:to-accent-purple/20 max-w-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(6,182,212,0.12)] transition-all duration-500 group cursor-default">
              <img src={aboutImage} alt="High-tech 3D Printing Setting" className="max-w-full h-auto rounded-[15px] object-cover block" />
              <div className="absolute -inset-2.5 border border-white/2 rounded-[24px] pointer-events-none -z-10 group-hover:border-accent-cyan/15 group-hover:scale-[1.015] transition-all duration-500"></div>
              <div className="absolute left-5 bottom-5 rounded-xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md">
                <span className="block text-[10px] uppercase tracking-[0.18em] text-text-muted font-bold">Approach</span>
                <span className="font-heading text-lg font-bold text-white">Design-first manufacturing</span>
              </div>
            </div>
          </Reveal>

          {/* Right Side: Copy & Value Pillars */}
          <Reveal className="flex flex-col items-start text-left" direction="right" delay={0.08}>
            <span className="section-kicker mb-4">
              Know About LayerCraft3D
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-5 text-gradient-premium">
              A practical team for modern 3D product development
            </h2>
            
            <p className="text-base premium-copy mb-10">
              LayerCraft3D merges additive manufacturing, CAD thinking, and production discipline, helping brands turn sketches, references, and early ideas into tangible components they can evaluate, present, and improve.
            </p>

            <div className="flex flex-col gap-7 w-full mb-10">
              {/* Pillar 1 */}
              <div className="flex gap-5 items-start rounded-2xl border border-white/[0.06] bg-white/[0.018] p-5 transition-all duration-500 hover:border-accent-cyan/20 hover:bg-white/[0.03]">
                <div className="w-11 h-11 rounded-lg bg-accent-cyan/5 border border-accent-cyan/10 text-accent-cyan flex items-center justify-center flex-shrink-0">
                  <Compass size={20} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-text-primary mb-1.5">All-in-One Solution</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Concept to Product Creators handling everything from idea, design, prototyping, to final product delivery.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex gap-5 items-start rounded-2xl border border-white/[0.06] bg-white/[0.018] p-5 transition-all duration-500 hover:border-accent-cyan/20 hover:bg-white/[0.03]">
                <div className="w-11 h-11 rounded-lg bg-accent-cyan/5 border border-accent-cyan/10 text-accent-cyan flex items-center justify-center flex-shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-text-primary mb-1.5">Faster Innovation</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Get your prototypes quickly using advanced 3D printing and highly optimized production processes.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button className="btn-glow px-6 py-3 rounded-lg text-sm font-semibold text-text-primary select-none" onClick={handleCTA}>
                <span className="flex items-center gap-2">
                  Our Story
                  <ArrowRight size={16} />
                </span>
              </button>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
