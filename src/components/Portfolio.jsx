import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import Reveal from './ui/Reveal';
import { 
  ChevronLeft, 
  ChevronRight, 
  Rocket, 
  Car, 
  Activity, 
  Box 
} from 'lucide-react';

const PORTFOLIO_CONTENT = [
  {
    title: "Aerospace Bracket",
    category: "Aerospace & Defense",
    badge: "Titanium Alloy",
    description: "Industrial-grade topology optimized bracket printed in Titanium alloy, showing a 40% weight reduction.",
    points: [
      "40% weight reduction",
      "Extreme load-bearing",
      "Topology optimized",
      "Zero-g certified"
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
    icon: Rocket
  },
  {
    title: "Automotive Intake Manifold",
    category: "Automotive & Motorsports",
    badge: "Carbon Fiber",
    description: "Functional prototype printed in high-temp nylon carbon fiber, tested under actual engine temperature conditions.",
    points: [
      "Heat resistant (180°C)",
      "Carbon fiber composite",
      "Direct engine tested",
      "High structural rigidity"
    ],
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    icon: Car
  },
  {
    title: "Biocompatible Dental Aligners",
    category: "Medical & Dental",
    badge: "Medical Grade Resin",
    description: "Highly accurate custom aligners printed in medical-grade biocompatible resin for patient-specific orthodontic treatment.",
    points: [
      "Class IIa medical resin",
      "Sub-micron precision",
      "Patient-specific design",
      "Comfort-smooth finish"
    ],
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    icon: Activity
  },
  {
    title: "Architectural Model",
    category: "Scale Models & Planning",
    badge: "Multi-color PLA",
    description: "Highly detailed 1:100 scale model of a sustainable corporate park, featuring integrated LED wiring slots.",
    points: [
      "1:100 scale model",
      "Multi-color filaments",
      "Integrated wiring paths",
      "Presentation-ready finish"
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    icon: Box
  }
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleCards = isMobile ? 1 : 2;
  const maxIndex = PORTFOLIO_CONTENT.length - visibleCards;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(maxIndex); // Loop to end
    }
  };

  return (
    <section id="portfolio" className="relative py-24 px-6 bg-bg-primary z-10 transition-colors duration-300 premium-section overflow-hidden">
      <div className="story-rail hidden lg:block"></div>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal className="text-left" direction="left">
            <span className="section-kicker mb-4">
              Our Portfolio
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-4 text-gradient-premium max-w-3xl">
              Proof that fast can still feel engineered
            </h2>
            <p className="text-sm sm:text-base premium-copy max-w-[680px]">
              Explore high-precision prototypes and engineering parts built to answer real questions: Will it fit? Will it perform? Can the idea become a reliable product?
            </p>
          </Reveal>

          {/* Navigation Controls */}
          <Reveal className="flex gap-3 self-start md:self-auto" direction="right" delay={0.1}>
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-border-color bg-bg-secondary text-text-primary flex items-center justify-center hover:bg-accent-cyan/10 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300 cursor-pointer shadow-md"
              aria-label="Previous Project"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-border-color bg-bg-secondary text-text-primary flex items-center justify-center hover:bg-accent-cyan/10 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300 cursor-pointer shadow-md"
              aria-label="Next Project"
            >
              <ChevronRight size={18} />
            </button>
          </Reveal>
        </div>

        {/* Slider Window Container */}
        <Reveal className="relative w-full overflow-hidden" delay={0.12}>
          <motion.div 
            animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            className="flex w-full"
          >
            {PORTFOLIO_CONTENT.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={idx} 
                  className={cn(
                    "shrink-0 px-3 w-full pb-2",
                    isMobile ? "w-full" : "w-1/2"
                  )}
                >
                  {/* Card Container */}
                  <div className="relative h-[420px] sm:h-[480px] md:h-[520px] rounded-3xl overflow-hidden border border-border-color hover:border-accent-cyan/30 bg-bg-secondary shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_26px_70px_rgba(6,182,212,0.12)] flex flex-col justify-end group transition-all duration-700">
                    
                    {/* Background Image */}
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    />
                    
                    {/* Dark Ambient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/48 to-black/5 z-10 transition-opacity duration-300 group-hover:opacity-95" />
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent z-10 opacity-60" />

                    {/* Floating Tech Badge */}
                    <div className="absolute top-5 left-5 z-20 bg-black/60 backdrop-blur-md text-white text-[9px] font-bold tracking-widest px-3 py-1.5 rounded-full border border-white/10 select-none">
                      {item.badge}
                    </div>

                    {/* Floating Details Card Overlay (Compact dark glassmorphism) */}
                    <div className="relative z-20 m-5 bg-bg-secondary/95 backdrop-blur-md text-text-primary p-5 rounded-2xl shadow-2xl flex flex-col justify-between border border-white/[0.08] group-hover:border-accent-cyan/30 select-none transition-all duration-500 group-hover:translate-y-[-7px]">
                      <div>
                        {/* Icon & Title Row */}
                        <div className="flex items-center gap-3 mb-2.5">
                          <div className="w-9 h-9 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan flex items-center justify-center flex-shrink-0 shadow-sm">
                            <IconComponent size={18} />
                          </div>
                          <h3 className="font-heading text-base sm:text-lg font-bold text-text-primary tracking-tight">{item.title}</h3>
                        </div>
                        
                        {/* Description */}
                        <p className="text-xs text-text-secondary leading-relaxed text-left mb-3.5">{item.description}</p>
                      </div>

                      {/* Feature Bullet Points (Compact 2x2 Grid) */}
                      {item.points && (
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-white/[0.06] pt-3.5 items-start w-full">
                          {item.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-center gap-2 text-[10px] sm:text-[11px] text-text-secondary font-medium text-left">
                              <span className="w-1 h-1 rounded-full bg-accent-cyan flex-shrink-0" />
                              <span className="truncate">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </motion.div>
        </Reveal>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-none",
                currentIndex === idx 
                  ? "bg-accent-cyan w-6" 
                  : "bg-text-muted/30 hover:bg-text-secondary/50"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
