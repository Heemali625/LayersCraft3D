import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";

export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = containerRef.current?.querySelectorAll(".portfolio-text-block");
      if (!elements) return;
      
      let currentActive = 0;
      let minDistance = Infinity;
      const viewportCenter = window.innerHeight / 2;
      
      elements.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        // Calculate the center of the text block relative to the viewport
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - viewportCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          currentActive = idx;
        }
      });
      
      setActiveCard(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    // Initial check on mount
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [content]);

  const handleDotClick = (index) => {
    const targets = containerRef.current?.querySelectorAll(".portfolio-text-block");
    if (targets && targets[index]) {
      const element = targets[index];
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      // Scroll to center the text block inside the viewport
      const offsetPosition = elementPosition - window.innerHeight / 2 + element.offsetHeight / 2;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-row items-start gap-6 lg:gap-12"
    >
      {/* Left: Sticky pagination dots (stay stuck relative to viewport scroll) */}
      <div className="sticky top-[45vh] flex flex-col gap-3.5 z-20 pl-1 sm:pl-2 self-start">
        {content.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={cn(
              "w-1.5 rounded-full transition-all duration-500 cursor-pointer focus:outline-none",
              activeCard === idx 
                ? "bg-accent-cyan h-9 shadow-[0_0_12px_rgba(6,182,212,0.8)]" 
                : "bg-text-muted/30 h-2 hover:bg-text-secondary/60"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Center: Scrollable Text Blocks */}
      <div className="w-full md:w-[55%] flex flex-col relative pr-2">
        {content.map((item, index) => (
          <div
            key={index}
            data-index={index}
            className="portfolio-text-block min-h-[60vh] flex flex-col justify-center py-20 text-left first:pt-0 last:pb-32"
          >
            <motion.div
              animate={{
                opacity: activeCard === index ? 1 : 0.25,
                scale: activeCard === index ? 1 : 0.98,
              }}
              transition={{ duration: 0.35 }}
            >
              <span className="text-xs font-bold text-accent-cyan tracking-[0.12em] uppercase mb-3 inline-block bg-accent-cyan/5 px-3 py-1.5 rounded-full">
                {item.category}
              </span>
              
              <h3 className="font-heading text-2xl sm:text-3.5xl font-bold text-text-primary tracking-tight mb-4">
                {item.title}
              </h3>
              
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Mobile visual showcase: displayed directly inside the flow for smaller devices */}
              <div className="md:hidden w-full h-56 rounded-xl overflow-hidden border border-border-color shadow-md mt-6">
                {item.content}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Right: Sticky Visual Card (Fixed height on desktop, pins automatically) */}
      <div
        className={cn(
          "hidden md:flex h-[60vh] w-full md:w-[40%] sticky top-[20vh] items-center justify-center z-10 self-start",
          contentClassName
        )}
      >
        <div className="w-full max-w-sm lg:max-w-md aspect-square rounded-2xl bg-bg-secondary border border-border-color overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative flex items-center justify-center">
          {/* Subtle background glow overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.06),transparent_70%)] pointer-events-none z-0"></div>

          <AnimatePresence>
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full z-10"
            >
              {content[activeCard].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
