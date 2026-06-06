import { cn } from '../../utils/cn';

export const LogoMarquee = ({ items, className, speed = "normal" }) => {
  const durations = {
    fast: "20s",
    normal: "35s",
    slow: "55s"
  };

  return (
    <div className={cn("relative overflow-hidden w-full py-6 select-none", className)}>
      {/* Left/Right fading edge masks for high-end look */}
      <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-bg-primary via-bg-primary/80 to-transparent z-10 pointer-events-none"></div>

      {/* Looping container */}
      <div 
        className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]"
        style={{
          animationDuration: durations[speed] || durations.normal
        }}
      >
        {/* Render items twice to ensure a perfect seamless loops scroll */}
        {[...items, ...items].map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={idx} 
              className="flex items-center gap-3.5 bg-bg-secondary border border-border-color rounded-xl px-5 py-4 cursor-default transition-all duration-300 hover:border-accent-cyan/35 group"
            >
              <div className="text-zinc-500 group-hover:text-accent-cyan group-hover:scale-105 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                <IconComponent size={20} />
              </div>
              <span className="font-heading text-sm font-bold text-zinc-300 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
