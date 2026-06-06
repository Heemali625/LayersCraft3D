import React from 'react';
import Reveal from './ui/Reveal';

const METRICS_DATA = [
  { val: "50+", label: "Taken Projects" },
  { val: "30+", label: "Satisfied Clients" },
  { val: "95%", label: "Success Rate" },
  { val: "3+", label: "Years of Experience" }
];

export default function Metrics() {
  return (
    <section id="metrics" className="relative py-20 px-6 bg-bg-secondary z-10 transition-colors duration-300 premium-section overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-center text-text-primary mb-5 text-gradient-premium">
            Trusted where momentum and detail both matter
          </h2>
          <p className="text-base premium-copy text-center max-w-2xl mx-auto mb-14">
            The numbers are modest, focused, and earned through fast iteration, careful production choices, and direct collaboration.
          </p>
        </Reveal>
        
        <Reveal delay={0.12} className="flex flex-col md:flex-row items-center justify-around premium-card rounded-2xl p-10 backdrop-blur-md gap-8 md:gap-4 transition-all duration-500">
          {METRICS_DATA.map((item, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <div className="hidden md:block w-[1px] h-14 bg-gradient-to-b from-transparent via-border-color to-transparent shrink-0"></div>
              )}
              <div className="flex flex-col items-center hover:scale-105 transition-all duration-500 cursor-default flex-1 group">
                <span className="font-heading text-5xl font-extrabold leading-none mb-2 bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent tracking-tight group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                  {item.val}
                </span>
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            </React.Fragment>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
