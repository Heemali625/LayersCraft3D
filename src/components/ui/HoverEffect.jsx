import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4",
        className
      )}
    >
      {items.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={item?.title}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: idx * 0.055, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-cyan-500/10 block rounded-2xl border border-cyan-500/20"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.1 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card className="premium-card">
              <div className="flex items-center justify-between mb-2">
                <div className="h-11 w-11 rounded-lg bg-bg-primary border border-border-color flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                  <IconComponent size={22} />
                </div>
              </div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.desc}</CardDescription>
              {item.linkAction && (
                <div className="mt-4 pt-2">
                  <button 
                    onClick={item.linkAction} 
                    className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary group-hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    <span>Request Quote</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full p-6 overflow-hidden bg-bg-secondary border border-border-color group-hover:border-accent-cyan/35 relative z-20 transition-all duration-500",
        className
      )}
    >
      <div className="relative z-30 h-full flex flex-col justify-between">
        <div>{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children
}) => {
  return (
    <h4 className={cn("text-text-primary font-bold tracking-wide mt-4 text-base font-heading", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children
}) => {
  return (
    <p
      className={cn(
        "mt-2.5 text-text-secondary tracking-wide leading-relaxed text-sm font-sans",
        className
      )}
    >
      {children}
    </p>
  );
};
