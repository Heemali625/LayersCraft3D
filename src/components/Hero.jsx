import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import heroImage from '../assets/hero_3d_render.png';
import heroAltImage from '../assets/hero.png';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Timer, ShieldCheck } from 'lucide-react';

const HERO_IMAGES = [
  { src: heroImage, alt: 'Precision 3D printed product render' },
  { src: heroAltImage, alt: 'LayersCraft3D product development render' },
];

export default function Hero({ setCurrentPage }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((slide) => (slide + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  const handleCTA = () => {
    setCurrentPage('quick-quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 py-28 md:py-36 bg-bg-primary bg-aurora-blend animate-aurora overflow-hidden transition-all duration-300 premium-section">
      {/* Visual background grids overlay */}
      <div className="bg-grid-overlay"></div>
      <div className="story-rail hidden lg:block"></div>
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="absolute left-6 right-6 bottom-10 h-px origin-left bg-gradient-to-r from-transparent via-accent-cyan/35 to-transparent"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 w-full relative z-10">
        
        {/* Left Side: Product render carousel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center items-center perspective-dramatic order-2 lg:order-2"
        >
          <motion.div 
            animate={{ 
              y: [0, -12, 0],
              rotate: [0, 0.8, 0],
              scale: [1, 1.015, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full max-w-[600px] aspect-square rounded-3xl p-[1px] bg-gradient-to-br from-accent-cyan/25 via-white/10 to-accent-amber/10"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={HERO_IMAGES[activeSlide].src}
                src={HERO_IMAGES[activeSlide].src}
                alt={HERO_IMAGES[activeSlide].alt}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="w-full h-full object-cover rounded-[23px] block mix-blend-screen drop-shadow-[0_28px_65px_rgba(6,182,212,0.18)]"
              />
            </AnimatePresence>
            {/* Visual Backlight Glow */}
            <div className="absolute inset-x-8 bottom-0 h-1/3 bg-accent-cyan/10 rounded-[23px] blur-2xl pointer-events-none -z-10"></div>
            <div className="absolute -right-4 top-8 rounded-xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md shadow-2xl hidden sm:block">
              <span className="block text-[10px] uppercase tracking-[0.18em] text-text-muted font-bold">Tolerance</span>
              <span className="font-heading text-xl font-bold text-white">Precision-led</span>
            </div>
            <button type="button" aria-label="Previous image" onClick={() => setActiveSlide((activeSlide - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-white/15 bg-black/45 text-white flex items-center justify-center hover:border-accent-cyan/70 hover:text-accent-cyan transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button type="button" aria-label="Next image" onClick={() => setActiveSlide((activeSlide + 1) % HERO_IMAGES.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-white/15 bg-black/45 text-white flex items-center justify-center hover:border-accent-cyan/70 hover:text-accent-cyan transition-colors">
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {HERO_IMAGES.map((image, index) => (
                <button key={image.src} type="button" aria-label={`Show image ${index + 1}`} onClick={() => setActiveSlide(index)} className={`h-2 rounded-full transition-all ${activeSlide === index ? 'w-6 bg-accent-cyan' : 'w-2 bg-white/45 hover:bg-white/75'}`} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start text-left order-1 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 bg-bg-secondary border border-border-color rounded-full px-4 py-1.5 text-sm font-medium text-text-secondary mb-6 backdrop-blur-sm shadow-md">
            <Sparkles size={14} className="text-accent-cyan" />
            <span className="text-accent-cyan">Crafted with Precision, Ready for Production</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[4.35rem] font-extrabold leading-[0.98] tracking-tight text-text-primary mb-6 max-w-[720px] text-gradient-premium">
            One-Stop Destination for 3D Printing & Product Development
          </h1>
          <p className="text-base sm:text-lg premium-copy mb-8 max-w-[600px]">We combine design expertise with advanced 3D technology to deliver high-quality, cost-effective prototypes within days.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-[560px]">
            <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 backdrop-blur-sm"><Timer size={17} className="text-accent-amber" /><span className="text-xs font-semibold text-text-secondary">Innovative Designs</span></div>
            <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 backdrop-blur-sm"><ShieldCheck size={17} className="text-accent-emerald" /><span className="text-xs font-semibold text-text-secondary">Production-Ready Solutions</span></div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <button className="btn-glow px-6 py-3 rounded-lg text-sm font-semibold text-text-primary select-none cursor-pointer group" onClick={handleCTA}><span className="flex items-center gap-2">Get Your Prototype<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span></button>
            <button className="px-6 py-3 rounded-lg border border-border-color bg-transparent hover:bg-bg-secondary hover:border-text-secondary/50 text-sm font-semibold text-text-primary transition-all cursor-pointer" onClick={handleCTA}>Talk to Our Team</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
