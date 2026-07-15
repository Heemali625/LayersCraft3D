import Reveal from './ui/Reveal';

const CLIENT_LOGOS = [
  'Client Logo',
  'Client Logo',
  'Client Logo',
  'Client Logo',
  'Client Logo',
  'Client Logo',
  'Client Logo',
  'Client Logo',
];

export default function TrustedPartners() {
  return (
    <section id="trusted-partners" className="relative py-20 px-6 bg-bg-secondary z-10 transition-colors duration-300 premium-section overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
        <Reveal>
          <span className="section-kicker mb-4">Trusted Partners</span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient-premium leading-tight mb-5">
            Brands We Serve
          </h2>
        </Reveal>

        <Reveal delay={0.12} className="relative overflow-hidden py-4">
          <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-bg-secondary via-bg-secondary/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-bg-secondary via-bg-secondary/80 to-transparent z-10 pointer-events-none"></div>
          <div className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]" style={{ animationDuration: '34s' }}>
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((label, idx) => (
              <div
                key={idx}
                className="min-w-[180px] h-24 rounded-2xl border border-border-color bg-bg-primary/70 flex items-center justify-center px-6 transition-all duration-300 hover:border-accent-cyan/35 hover:-translate-y-0.5"
              >
                <span className="font-heading text-sm font-extrabold uppercase tracking-[0.16em] text-text-secondary">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
