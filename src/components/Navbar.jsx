import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoWhite from '../assets/logo/LC3D_Logo_White_High_Res.png';
import logoBlack from '../assets/logo/LC3D_Logo_Black_High_Res.png';
import { ChevronDown, Menu, X, ArrowUpRight, Moon, Sun } from 'lucide-react';
import { services } from '../content/layerCraftContent';

export default function Navbar({ currentPage, setCurrentPage, scrollToSection, theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [knowledgeOpen, setKnowledgeOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
    setServicesOpen(false);
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
  const isLight = theme === 'light';
  const navLinkClass = (page) => `text-sm font-semibold transition-all duration-300 relative py-1 cursor-pointer ${
    currentPage === page 
      ? 'text-accent-cyan font-bold' 
      : 'text-text-secondary/80 hover:text-text-primary'
  }`;
  const mobileLinkClass = (page) => `text-lg font-semibold transition-colors ${
    currentPage === page ? 'text-accent-cyan' : 'text-text-secondary'
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
            src={isLight ? logoBlack : logoWhite} 
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
            {currentPage === 'home' && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-cyan rounded-full shadow-[0_0_8px_var(--color-accent-cyan)]" />}
          </button>
          
          <button 
            className={navLinkClass('about')}
            onClick={() => handleNavClick('about')}
          >
            About
            {currentPage === 'about' && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-cyan rounded-full shadow-[0_0_8px_var(--color-accent-cyan)]" />}
          </button>
          
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button 
              className={`${navLinkClass('services')} flex items-center gap-1.5`}
              onClick={() => handleNavClick('services')}
            >
              Services
              <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              {currentPage === 'services' && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-cyan rounded-full shadow-[0_0_8px_var(--color-accent-cyan)]" />}
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                >
                  <div className="premium-card rounded-xl p-2">
                    {services.map((service) => (
                      <button
                        key={service.title}
                        onClick={() => handleNavClick('services')}
                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                          currentPage === 'services' 
                            ? 'text-accent-cyan bg-white/[0.06]' 
                            : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.04]'
                        }`}
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div 
            className="relative"
            onMouseEnter={() => setKnowledgeOpen(true)}
            onMouseLeave={() => setKnowledgeOpen(false)}
          >
            <button 
              className={`text-sm font-semibold transition-all duration-300 relative py-1 cursor-pointer flex items-center gap-1.5 ${
                isKnowledgeActive 
                  ? 'text-accent-cyan font-bold' 
                  : 'text-text-secondary/80 hover:text-text-primary'
              }`}
              onClick={() => setKnowledgeOpen((open) => !open)}
            >
              Knowledge Base
              <ChevronDown size={14} className={`transition-transform ${knowledgeOpen ? 'rotate-180' : ''}`} />
              {isKnowledgeActive && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-cyan rounded-full shadow-[0_0_8px_var(--color-accent-cyan)]" />}
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
                    <button onClick={() => handleNavClick('blogs')} className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                      currentPage === 'blogs' 
                        ? 'text-accent-cyan bg-white/[0.06]' 
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.04]'
                    }`}>Blogs</button>
                    <button onClick={() => handleNavClick('case-studies')} className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                      currentPage === 'case-studies' 
                        ? 'text-accent-cyan bg-white/[0.06]' 
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.04]'
                    }`}>Case Studies</button>
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
            {currentPage === 'contact' && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-cyan rounded-full shadow-[0_0_8px_var(--color-accent-cyan)]" />}
          </button>
        </div>

        {/* Right: CTA Button */}
        <div className="hidden lg:flex items-center gap-5">
          <button
            type="button"
            onClick={() => setTheme(isLight ? 'dark' : 'light')}
            className="w-10 h-10 rounded-lg border border-border-color bg-bg-secondary text-text-secondary hover:text-text-primary hover:border-accent-cyan/25 transition-all flex items-center justify-center cursor-pointer"
            aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {isLight ? <Moon size={17} /> : <Sun size={17} />}
          </button>
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
            type="button"
            onClick={() => setTheme(isLight ? 'dark' : 'light')}
            className="w-9 h-9 rounded-lg border border-border-color bg-bg-secondary text-text-secondary flex items-center justify-center"
            aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {isLight ? <Moon size={16} /> : <Sun size={16} />}
          </button>
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
              className={mobileLinkClass('home')}
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
            <button 
              className={mobileLinkClass('about')}
              onClick={() => handleNavClick('about')}
            >
              About
            </button>
            <button 
              className={mobileLinkClass('services')}
              onClick={() => handleNavClick('services')}
            >
              Services
            </button>
            <div className={`flex flex-col items-center gap-2 -mt-2 ${currentPage === 'services' ? 'opacity-100' : ''}`}>
              {services.map((service) => (
                <button key={service.title} className={`text-sm font-semibold ${currentPage === 'services' ? 'text-accent-cyan' : 'text-text-muted'}`} onClick={() => handleNavClick('services')}>
                  {service.title}
                </button>
              ))}
            </div>
            <div className="flex flex-col items-center gap-3 py-2">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-text-muted">Knowledge Base</span>
              <button className={`text-lg font-semibold transition-colors ${currentPage === 'blogs' ? 'text-accent-cyan' : 'text-text-secondary'}`} onClick={() => handleNavClick('blogs')}>Blogs</button>
              <button className={`text-lg font-semibold transition-colors ${currentPage === 'case-studies' ? 'text-accent-cyan' : 'text-text-secondary'}`} onClick={() => handleNavClick('case-studies')}>Case Studies</button>
            </div>
            <button 
              className={mobileLinkClass('contact')}
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
