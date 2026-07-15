import Reveal from './ui/Reveal';
import { 
  Rocket, Car, Dna,
  Flame, Gem, Activity, Gauge, Cpu, 
  Briefcase, Truck, Fan, ShieldAlert 
} from 'lucide-react';

const INDUSTRIES_DATA = [
  { name: "Aerospace & Defense", icon: Rocket },
  { name: "Automotive", icon: Car },
  { name: "Bioprinting", icon: Dna },
  { 
    name: "Dental", 
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 2 7 5 7 8s2 6 2 8c0 3-2 4-2 4h10s-2-1-2-4c0-2 2-5 2-8s-1-6-5-6Z" />
        <path d="M12 2v6" />
      </svg>
    ) 
  },
  { name: "Foundries", icon: Flame },
  { name: "Jewelry", icon: Gem },
  { name: "Medical", icon: Activity },
  { name: "Motorsports", icon: Gauge },
  { name: "Semiconductor", icon: Cpu },
  { name: "Service Bureaus", icon: Briefcase },
  { name: "Truck, Bus & Rail", icon: Truck },
  { name: "Turbomachinery", icon: Fan },
  { name: "Defense Systems", icon: ShieldAlert }
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 px-6 bg-bg-primary z-10 transition-colors duration-300 premium-section overflow-hidden">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <Reveal as="span" className="section-kicker justify-center mb-4">
          Industries We Serve
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-5 text-gradient-premium">
            Building Beyond Expectations Across Multiple Sectors
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-base premium-copy max-w-[650px] mx-auto mb-10">
            No matter the sector, we deliver reliable 3D solutions customized to its unique requirements.
          </p>
        </Reveal>

        <Reveal className="w-full mt-4" delay={0.22}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {INDUSTRIES_DATA.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="flex items-center gap-3.5 bg-bg-secondary border border-border-color rounded-xl px-5 py-4 cursor-default transition-all duration-300 hover:border-accent-cyan/35 hover:-translate-y-0.5 group"
                >
                  <div className="text-zinc-500 group-hover:text-accent-cyan group-hover:scale-105 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <span className="font-heading text-sm font-bold text-text-secondary group-hover:text-text-primary transition-colors duration-300 text-left">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
