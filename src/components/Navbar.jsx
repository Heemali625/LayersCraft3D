import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoWhite from '../assets/logo/LC3D_Logo_White_High_Res.png';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [knowledgeOpen, setKnowledgeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page, sectionId) => {
    setIsOpen(false);
    setKnowledgeOpen(false);
    if (page === 'home' && sectionId) {
      setCurrentPage('home');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
      return;
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isKnowledgeActive = currentPage === 'blogs' || currentPage === 'case-studies';
  const navLinkClass = (page) => `text-sm font-semibold transition-colors relative py-1 cursor-pointer ${
    currentPage === page ? 'text-accent-cyan font-bold' : 'text-text-secondary hover:text-text-primary'
  }`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-bg-primary/80 backdrop-blur-md py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo (Switches image based on theme) */}
        <div className="cursor-pointer flex items-center" onClick={() => handleNavClick('home')}>
          <img 
            src={logoWhite} 
            alt="LayersCraft3D Logo" 
            className="h-11 md:h-12 w-auto object-contain hover:scale-105 transition-all duration-300 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.08)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" 
          />
        </div>

        {/* Center: Desktop links (High contrast, theme-aware) */}
        <div className="hidden lg:flex items-center gap-7">
          <button 
            className={navLinkClass('home')}
            onClick={() => handleNavClick('home')}
          >
            Home
            {currentPage === 'home' && (
              <motion.span layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent-cyan" />
            )}
          </button>
          
          <button 
            className={navLinkClass('about')}
            onClick={() => handleNavClick('about')}
          >
            About
            {currentPage === 'about' && (
              <motion.span layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent-cyan" />
            )}
          </button>
          
          <button 
            className={navLinkClass('services')}
            onClick={() => handleNavClick('services')}
          >
            Services
            {currentPage === 'services' && (
              <motion.span layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent-cyan" />
            )}
          </button>
          
          <div 
            className="relative"
            onMouseEnter={() => setKnowledgeOpen(true)}
            onMouseLeave={() => setKnowledgeOpen(false)}
          >
            <button 
              className={`text-sm font-semibold transition-colors relative py-1 cursor-pointer flex items-center gap-1.5 ${
                isKnowledgeActive ? 'text-accent-cyan font-bold' : 'text-text-secondary hover:text-text-primary'
              }`}
              onClick={() => setKnowledgeOpen((open) => !open)}
            >
              Knowledge Base
              <ChevronDown size={14} className={`transition-transform ${knowledgeOpen ? 'rotate-180' : ''}`} />
              {isKnowledgeActive && (
                <motion.span layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent-cyan" />
              )}
            </button>
            <AnimatePresence>
              {knowledgeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48"
                >
                  <div className="premium-card rounded-xl p-2">
                    <button onClick={() => handleNavClick('blogs')} className="w-full text-left px-4 py-3 rounded-lg text-sm font-semibold text-text-secondary hover:text-text-primary hover:bg-white/[0.04] transition-all cursor-pointer">Blogs</button>
                    <button onClick={() => handleNavClick('case-studies')} className="w-full text-left px-4 py-3 rounded-lg text-sm font-semibold text-text-secondary hover:text-text-primary hover:bg-white/[0.04] transition-all cursor-pointer">Case Studies</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <button 
            className={navLinkClass('contact')}
            onClick={() => handleNavClick('contact')}
          >
            Contact Us
            {currentPage === 'contact' && (
              <motion.span layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent-cyan" />
            )}
          </button>
        </div>

        {/* Right: CTA Button */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Request Quote Button */}
          <button 
            className="btn-glow px-5 py-2.5 rounded-lg text-sm font-bold text-text-primary select-none" 
            onClick={() => handleNavClick('quick-quote')}
          >
            <span className="flex items-center gap-1.5">
              Quick Quote
              <ArrowUpRight size={15} />
            </span>
          </button>
        </div>

        {/* Mobile: Menu icon */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            className="text-text-primary bg-transparent border-none cursor-pointer focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Gooey SVG Nav filters applied to layout transitions) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed top-[70px] inset-x-0 bottom-0 bg-bg-primary/95 backdrop-blur-lg px-6 py-10 flex flex-col items-center gap-6 z-40 lg:hidden overflow-y-auto"
          >
            <button 
              className={`text-lg font-semibold transition-colors ${
                currentPage === 'home' ? 'text-accent-cyan' : 'text-text-secondary'
              }`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
            <button 
              className="text-text-secondary text-lg font-semibold"
              onClick={() => handleNavClick('about')}
            >
              About
            </button>
            <button 
              className="text-text-secondary text-lg font-semibold"
              onClick={() => handleNavClick('services')}
            >
              Services
            </button>
            <div className="flex flex-col items-center gap-3 py-2">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-text-muted">Knowledge Base</span>
              <button className="text-text-secondary text-lg font-semibold" onClick={() => handleNavClick('blogs')}>Blogs</button>
              <button className="text-text-secondary text-lg font-semibold" onClick={() => handleNavClick('case-studies')}>Case Studies</button>
            </div>
            <button 
              className={`text-lg font-semibold transition-colors ${
                currentPage === 'contact' ? 'text-accent-cyan' : 'text-text-secondary'
              }`}
              onClick={() => handleNavClick('contact')}
            >
              Contact Us
            </button>
            
            <button 
              className="w-full max-w-[280px] mt-4 bg-text-primary text-bg-primary border border-border-color font-bold py-3 rounded-lg hover:shadow-lg transition-all"
              onClick={() => handleNavClick('quick-quote')}
            >
              Quick Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
