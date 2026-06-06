import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PenTool, Scan, Zap, Layers, Box, Settings,
  ArrowRight, CheckCircle2, Sparkles
} from 'lucide-react';
import Reveal from './ui/Reveal';
import { cn } from '../utils/cn';

const PHASES = [
  { label: 'Ideate', color: 'from-accent-cyan to-accent-blue' },
  { label: 'Capture', color: 'from-accent-blue to-accent-purple' },
  { label: 'Build', color: 'from-accent-purple to-accent-amber' },
  { label: 'Produce', color: 'from-accent-amber to-accent-emerald' },
  { label: 'Present', color: 'from-accent-emerald to-accent-cyan' },
  { label: 'Manufacture', color: 'from-accent-cyan to-accent-purple' },
];

const journeySteps = [
  {
    step: '01',
    phase: 'Ideate',
    title: '3D Design & Sculpting',
    tagline: 'Your idea, shaped into a digital model',
    description:
      'Share a sketch, reference, or rough concept. Our team sculpts it into a precise, manufacturable 3D file — ready for prototyping, iteration, or production.',
    action: 'Start designing',
    icon: PenTool,
  },
  {
    step: '02',
    phase: 'Capture',
    title: '3D Scanning',
    tagline: 'Bring physical objects into the digital world',
    description:
      'Have a part but no CAD file? We capture real-world geometry with precision scanning — perfect for reverse engineering, replication, or modification.',
    action: 'Start scanning',
    icon: Scan,
  },
  {
    step: '03',
    phase: 'Build',
    title: 'Rapid Prototyping',
    tagline: 'Fast, functional models for real-world testing',
    description:
      'Turn your digital design into a physical prototype in days. Validate fit, form, and function before committing to tooling or full production.',
    action: 'Start prototyping',
    icon: Zap,
  },
  {
    step: '04',
    phase: 'Produce',
    title: 'Custom 3D Printing',
    tagline: 'Tailored parts, short runs, production-ready',
    description:
      'From one-off parts to small-batch production runs. We select the right material, print settings, and finish to match your intended use case.',
    action: 'Start printing',
    icon: Layers,
  },
  {
    step: '05',
    phase: 'Present',
    title: 'Scale Models',
    tagline: 'Physical clarity for critical presentations',
    description:
      'Presentation-ready models built to exact scale. Architects, product teams, and planners use them for stakeholder reviews, spatial planning, and approvals.',
    action: 'Start modeling',
    icon: Box,
  },
  {
    step: '06',
    phase: 'Manufacture',
    title: 'CNC Machining',
    tagline: 'When precision demands subtractive manufacturing',
    description:
      'For parts requiring tighter tolerances, structural durability, or a machined finish. Our CNC capability handles geometries that push beyond 3D printing limits.',
    action: 'Start machining',
    icon: Settings,
  },
];

const ILLUSTRATIONS = {
  'Ideate': (
    <svg viewBox="0 0 200 160" className="w-full h-full" fill="none">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect x="40" y="20" width="120" height="120" rx="12" fill="url(#g1)" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.3" />
      <path d="M70 80 L90 55 L110 80 L100 82 L90 70 L80 82 Z" fill="#06b6d4" fillOpacity="0.5" />
      <circle cx="100" cy="65" r="6" fill="#06b6d4" fillOpacity="0.3" />
      <path d="M55 95 Q75 85 100 95 Q125 105 145 95" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.3" fill="none" />
      <rect x="60" y="100" width="80" height="2" rx="1" fill="#3b82f6" fillOpacity="0.15" />
      <rect x="65" y="106" width="70" height="2" rx="1" fill="#3b82f6" fillOpacity="0.1" />
    </svg>
  ),
  'Capture': (
    <svg viewBox="0 0 200 160" className="w-full h-full" fill="none">
      <defs>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect x="40" y="20" width="120" height="120" rx="12" fill="url(#g2)" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.3" />
      <circle cx="100" cy="70" r="28" stroke="#3b82f6" strokeWidth="0.8" strokeOpacity="0.4" fill="#3b82f6" fillOpacity="0.05" />
      <circle cx="100" cy="70" r="18" stroke="#3b82f6" strokeWidth="0.6" strokeOpacity="0.3" fill="#3b82f6" fillOpacity="0.05" />
      <circle cx="100" cy="70" r="8" fill="#3b82f6" fillOpacity="0.15" />
      <line x1="100" y1="98" x2="100" y2="112" stroke="#3b82f6" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="72" y1="70" x2="58" y2="70" stroke="#3b82f6" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="128" y1="70" x2="142" y2="70" stroke="#3b82f6" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="100" y1="42" x2="100" y2="28" stroke="#3b82f6" strokeWidth="0.8" strokeOpacity="0.3" />
      <path d="M60 120 Q80 110 100 120 Q120 130 140 120" stroke="#a855f7" strokeWidth="0.8" strokeOpacity="0.25" fill="none" />
    </svg>
  ),
  'Build': (
    <svg viewBox="0 0 200 160" className="w-full h-full" fill="none">
      <defs>
        <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect x="40" y="20" width="120" height="120" rx="12" fill="url(#g3)" stroke="#a855f7" strokeWidth="0.5" strokeOpacity="0.3" />
      <rect x="65" y="45" width="70" height="70" rx="6" stroke="#a855f7" strokeWidth="0.8" strokeOpacity="0.35" fill="#a855f7" fillOpacity="0.04" />
      <line x1="65" y1="58" x2="135" y2="58" stroke="#a855f7" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="65" y1="68" x2="135" y2="68" stroke="#a855f7" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="65" y1="78" x2="135" y2="78" stroke="#a855f7" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="65" y1="88" x2="135" y2="88" stroke="#a855f7" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="65" y1="98" x2="135" y2="98" stroke="#a855f7" strokeWidth="0.5" strokeOpacity="0.15" />
      <rect x="75" y="50" width="50" height="55" rx="3" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="0.4" strokeOpacity="0.2" />
      <circle cx="100" cy="77" r="10" fill="#a855f7" fillOpacity="0.08" stroke="#a855f7" strokeWidth="0.4" strokeOpacity="0.2" />
      <path d="M70 118 L80 112 L90 118 L100 112 L110 118 L120 112 L130 118" stroke="#f59e0b" strokeWidth="0.6" strokeOpacity="0.2" fill="none" />
    </svg>
  ),
  'Produce': (
    <svg viewBox="0 0 200 160" className="w-full h-full" fill="none">
      <defs>
        <linearGradient id="g4" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect x="40" y="20" width="120" height="120" rx="12" fill="url(#g4)" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.3" />
      <rect x="60" y="38" width="80" height="84" rx="4" stroke="#f59e0b" strokeWidth="0.7" strokeOpacity="0.3" fill="#f59e0b" fillOpacity="0.04" />
      <path d="M68 46 L80 38 L92 46 L80 54 Z" fill="#f59e0b" fillOpacity="0.12" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.25" />
      <rect x="72" y="54" width="56" height="56" rx="2" fill="#10b981" fillOpacity="0.05" stroke="#10b981" strokeWidth="0.4" strokeOpacity="0.15" />
      <line x1="72" y1="82" x2="128" y2="82" stroke="#10b981" strokeWidth="0.4" strokeOpacity="0.12" />
      <line x1="100" y1="54" x2="100" y2="110" stroke="#10b981" strokeWidth="0.4" strokeOpacity="0.12" />
      <circle cx="100" cy="82" r="8" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="0.4" strokeOpacity="0.2" />
      <rect x="78" y="118" width="44" height="2" rx="1" fill="#10b981" fillOpacity="0.15" />
    </svg>
  ),
  'Present': (
    <svg viewBox="0 0 200 160" className="w-full h-full" fill="none">
      <defs>
        <linearGradient id="g5" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect x="40" y="20" width="120" height="120" rx="12" fill="url(#g5)" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.3" />
      <rect x="55" y="35" width="90" height="70" rx="6" stroke="#10b981" strokeWidth="0.7" strokeOpacity="0.3" fill="#10b981" fillOpacity="0.04" />
      <polygon points="55,105 145,105 130,118 70,118" fill="#10b981" fillOpacity="0.06" stroke="#10b981" strokeWidth="0.3" strokeOpacity="0.15" />
      <circle cx="100" cy="70" r="18" stroke="#06b6d4" strokeWidth="0.6" strokeOpacity="0.25" fill="#06b6d4" fillOpacity="0.04" />
      <path d="M88 68 L96 74 L112 62" stroke="#06b6d4" strokeWidth="1.2" strokeOpacity="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="62" y="125" width="76" height="1.5" rx="1" fill="#10b981" fillOpacity="0.12" />
      <rect x="70" y="130" width="60" height="1.5" rx="1" fill="#10b981" fillOpacity="0.08" />
    </svg>
  ),
  'Manufacture': (
    <svg viewBox="0 0 200 160" className="w-full h-full" fill="none">
      <defs>
        <linearGradient id="g6" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect x="40" y="20" width="120" height="120" rx="12" fill="url(#g6)" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.3" />
      <rect x="58" y="40" width="84" height="80" rx="3" stroke="#06b6d4" strokeWidth="0.6" strokeOpacity="0.25" fill="#06b6d4" fillOpacity="0.04" />
      <circle cx="100" cy="80" r="22" stroke="#a855f7" strokeWidth="0.7" strokeOpacity="0.3" fill="#a855f7" fillOpacity="0.04" />
      <circle cx="100" cy="80" r="12" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.2" fill="#06b6d4" fillOpacity="0.04" />
      <circle cx="100" cy="80" r="4" fill="#a855f7" fillOpacity="0.15" />
      <line x1="58" y1="95" x2="142" y2="95" stroke="#06b6d4" strokeWidth="0.4" strokeOpacity="0.12" />
      <line x1="58" y1="100" x2="142" y2="100" stroke="#a855f7" strokeWidth="0.4" strokeOpacity="0.12" />
      <rect x="80" y="120" width="40" height="2" rx="1" fill="#06b6d4" fillOpacity="0.12" />
    </svg>
  ),
};

export default function ServicesShowcase({ setCurrentPage }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const els = stepRefs.current;
      if (!els.length) return;
      let current = 0;
      let min = Infinity;
      const mid = window.innerHeight / 2;
      els.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - mid);
        if (dist < min) {
          min = dist;
          current = i;
        }
      });
      setActiveIndex(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 150);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (i) => {
    const el = stepRefs.current[i];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - window.innerHeight / 3;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCTA = () => {
    setCurrentPage('quick-quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const active = journeySteps[activeIndex];

  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 px-6 bg-bg-primary z-10 premium-section overflow-hidden"
    >
      <div className="story-rail hidden lg:block"></div>

      {/* ── Section Header ── */}
      <div className="max-w-7xl mx-auto mb-8 lg:mb-12">
        <Reveal as="span" className="section-kicker justify-center lg:justify-start mb-3">
          From Idea to Production
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary mb-3 max-w-3xl text-gradient-premium">
            A connected product-development journey
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-sm sm:text-base premium-copy max-w-[600px]">
            Six capabilities, one continuous path. See how your product moves from first sketch
            to finished part — with the right service at every stage.
          </p>
        </Reveal>
      </div>

      {/* ── Sticky Scroll Layout ── */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">

          {/* ===== LEFT: Sticky Visual + Narrative ===== */}
          <div className="lg:w-[45%] lg:sticky lg:top-[18vh] lg:self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -18, filter: 'blur(6px)' }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Illustration */}
                <div className="w-full aspect-[5/4] rounded-xl bg-bg-secondary border border-border-color overflow-hidden mb-5">
                  {ILLUSTRATIONS[active.phase]}
                </div>

                {/* Phase indicator */}
                <div className="flex items-center gap-2 mb-3">
                  <div className={cn(
                    'h-1.5 w-1.5 rounded-full bg-gradient-to-r',
                    PHASES[activeIndex].color
                  )} />
                  <span className="text-[10px] font-bold text-accent-cyan tracking-[0.18em] uppercase">
                    Phase {active.step} — {active.phase}
                  </span>
                </div>

                {/* Title + tagline */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-primary mb-1 tracking-tight">
                  {active.title}
                </h3>
                <p className="text-sm text-accent-cyan/80 font-medium mb-3">
                  {active.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {active.description}
                </p>

                {/* Action CTA */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleCTA}
                    className="group inline-flex items-center gap-1.5 text-xs font-bold text-accent-cyan hover:text-white transition-colors cursor-pointer"
                  >
                    {active.action}
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Journey dots */}
                  <div className="flex items-center gap-1.5 ml-auto">
                    {journeySteps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => scrollToStep(i)}
                        className={cn(
                          'rounded-full transition-all duration-300 cursor-pointer',
                          i === activeIndex
                            ? 'w-5 h-1.5 bg-accent-cyan'
                            : i < activeIndex
                              ? 'w-1.5 h-1.5 bg-accent-emerald/40 hover:bg-accent-emerald/60'
                              : 'w-1.5 h-1.5 bg-border-color/50 hover:bg-text-muted/60'
                        )}
                        aria-label={`Go to step ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ===== RIGHT: Scrollable Compact Timeline ===== */}
          <div className="lg:w-[55%] relative">
            {/* Vertical journey thread */}
            <div className="absolute left-[15px] top-1 bottom-1 w-px bg-gradient-to-b from-accent-cyan via-accent-blue via-accent-purple via-accent-amber via-accent-emerald to-accent-cyan opacity-12 hidden lg:block pointer-events-none" />

            <div className="flex flex-col">
              {journeySteps.map((item, idx) => {
                const isActive = idx === activeIndex;
                const isPast = idx < activeIndex;
                const Icon = item.icon;

                return (
                  <div
                    key={item.step}
                    ref={(el) => { stepRefs.current[idx] = el; }}
                    onClick={() => scrollToStep(idx)}
                    className={cn(
                      'relative flex items-start gap-3 sm:gap-4 py-3 sm:py-4 px-3 sm:px-4 rounded-xl transition-all duration-400 cursor-pointer border border-transparent',
                      isActive && 'border-accent-cyan/15 bg-bg-secondary/60',
                      !isActive && 'hover:bg-bg-secondary/20'
                    )}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') scrollToStep(idx);
                    }}
                  >
                    {/* Step indicator */}
                    <div className="relative z-10 flex-shrink-0 mt-0.5">
                      <div
                        className={cn(
                          'w-[30px] h-[30px] rounded-full flex items-center justify-center text-[10px] font-extrabold border transition-all duration-400',
                          isActive
                            ? 'border-accent-cyan bg-accent-cyan/15 text-accent-cyan'
                            : isPast
                              ? 'border-accent-emerald/25 bg-accent-emerald/10 text-accent-emerald'
                              : 'border-border-color/50 bg-bg-primary text-text-muted/60'
                        )}
                      >
                        {isPast ? (
                          <CheckCircle2 size={14} />
                        ) : (
                          <span>{item.step}</span>
                        )}
                      </div>
                    </div>

                    {/* Content row */}
                    <div className="flex-1 min-w-0 flex items-center gap-2 sm:gap-3">
                      <Icon
                        size={14}
                        className={cn(
                          'flex-shrink-0 transition-colors',
                          isActive ? 'text-accent-cyan' : 'text-text-muted/50'
                        )}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <h4
                            className={cn(
                              'font-heading text-sm font-bold transition-colors truncate',
                              isActive ? 'text-text-primary' : 'text-text-secondary'
                            )}
                          >
                            {item.title}
                          </h4>
                          {isPast && (
                            <span className="text-[9px] text-accent-emerald font-semibold flex-shrink-0">Done</span>
                          )}
                        </div>
                        <p
                          className={cn(
                            'text-xs leading-relaxed transition-colors truncate',
                            isActive ? 'text-text-muted' : 'text-text-muted/40'
                          )}
                        >
                          {item.tagline}
                        </p>
                      </div>

                      {/* Phase badge */}
                      <div
                        className={cn(
                          'flex-shrink-0 text-[9px] font-bold px-2 py-0.5 rounded-full border transition-all',
                          isActive
                            ? 'text-accent-cyan border-accent-cyan/20 bg-accent-cyan/5'
                            : 'text-text-muted/40 border-border-color/30 bg-transparent'
                        )}
                      >
                        {item.phase}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom message */}
            <div className="mt-6 pt-4 border-t border-border-color/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles size={12} className="text-accent-cyan/50" />
                <span className="text-[11px] text-text-muted">
                  {activeIndex === journeySteps.length - 1
                    ? 'Your product is production-ready.'
                    : `${journeySteps.length - activeIndex - 1} steps remaining in this journey`}
                </span>
              </div>
              <button
                onClick={handleCTA}
                className="text-[11px] font-bold text-accent-cyan hover:text-white transition-colors cursor-pointer"
              >
                Start now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}