import { motion } from 'framer-motion';
import Reveal from '../ui/Reveal';

export function PageHero({ eyebrow, title, copy, meta }) {
  return (
    <section className="relative pt-32 sm:pt-40 pb-18 px-6 premium-section overflow-hidden">
      <div className="bg-grid-overlay"></div>
      <div className="story-rail hidden lg:block"></div>
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-4xl">
          <span className="section-kicker mb-5">{eyebrow}</span>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.98] tracking-tight text-gradient-premium mb-7">
            {title}
          </h1>
          <p className="premium-copy text-base sm:text-xl max-w-3xl">{copy}</p>
        </Reveal>
        {meta && (
          <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-3">
            {meta.map((item) => (
              <span key={item} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-text-secondary">
                {item}
              </span>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function EditorialBlock({ eyebrow, title, copy, children, reverse = false }) {
  return (
    <section className="relative py-20 px-6 premium-section overflow-hidden">
      <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <Reveal direction={reverse ? 'right' : 'left'}>
          <span className="section-kicker mb-4">{eyebrow}</span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-gradient-premium mb-5">
            {title}
          </h2>
          <p className="premium-copy text-base sm:text-lg">{copy}</p>
        </Reveal>
        <Reveal direction={reverse ? 'left' : 'right'} delay={0.1}>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function BentoPanel({ children, className = '' }) {
  return (
    <div className={`premium-card rounded-2xl p-6 sm:p-8 transition-all duration-500 ${className}`}>
      {children}
    </div>
  );
}

export function Timeline({ items }) {
  return (
    <div className="relative">
      <div className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-amber opacity-35"></div>
      <div className="flex flex-col gap-8">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={idx * 0.08} className="relative pl-16">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-bg-secondary border border-accent-cyan/25 text-accent-cyan flex items-center justify-center shadow-[0_0_24px_rgba(6,182,212,0.12)]">
                <Icon size={18} />
              </div>
              <span className="text-xs font-extrabold text-accent-cyan tracking-[0.16em] uppercase">{item.num}</span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-primary mt-2 mb-2">{item.title}</h3>
              <p className="premium-copy text-sm sm:text-base">{item.desc}</p>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

export function VisualPlate({ label, title, children }) {
  return (
    <motion.div
      whileHover={{ y: -6, rotate: 0.2 }}
      transition={{ duration: 0.35 }}
      className="relative min-h-[360px] rounded-3xl overflow-hidden premium-card flex items-end"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(6,182,212,0.18),transparent_36%),radial-gradient(circle_at_80%_70%,rgba(245,158,11,0.12),transparent_38%)]"></div>
      <div className="absolute inset-0 bg-grid-overlay opacity-50"></div>
      {children}
      <div className="relative z-10 p-7">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-accent-cyan">{label}</span>
        <h3 className="font-heading text-2xl font-extrabold text-white mt-2 max-w-sm">{title}</h3>
      </div>
    </motion.div>
  );
}
