import logoWhite from '../assets/logo/LC3D_Logo_White_High_Res.png';
import { Mail, MapPin } from 'lucide-react';

const Linkedin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer({ setCurrentPage, scrollToSection }) {
  const handleNavClick = (page, sectionId) => {
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

  return (
    <footer className="bg-bg-secondary py-16 px-6 relative z-10 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col items-start">
            <img 
              src={logoWhite} 
              alt="LayersCraft3D Logo" 
              className="h-8.5 w-auto object-contain mb-5" 
            />
            <p className="text-sm text-text-secondary leading-relaxed text-left max-w-[320px]">
              Experience the Future of Creativity, Turn Your Imagination into Reality Through 3D Printing.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-5 font-heading">Pages</h4>
            <ul className="flex flex-col gap-3 items-start">
              <li>
                <button 
                  onClick={() => handleNavClick('home')}
                  className="text-sm text-text-secondary hover:text-accent-cyan hover:translate-x-1 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="text-sm text-text-secondary hover:text-accent-cyan hover:translate-x-1 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('services')}
                  className="text-sm text-text-secondary hover:text-accent-cyan hover:translate-x-1 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('blogs')}
                  className="text-sm text-text-secondary hover:text-accent-cyan hover:translate-x-1 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Blogs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('case-studies')}
                  className="text-sm text-text-secondary hover:text-accent-cyan hover:translate-x-1 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="text-sm text-text-secondary hover:text-accent-cyan hover:translate-x-1 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('quick-quote')}
                  className="text-sm text-text-secondary hover:text-accent-cyan hover:translate-x-1 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Quick Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-5 font-heading">Contact Us</h4>
            <ul className="flex flex-col gap-4 items-start text-sm text-text-secondary">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent-cyan flex-shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent-cyan flex-shrink-0 mt-0.5" />
                <a href="mailto:support@domain.com" className="hover:text-accent-cyan transition-colors">support@domain.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Handles */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-5 font-heading">Follow Us</h4>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border-color bg-bg-primary text-text-secondary flex items-center justify-center hover:bg-accent-cyan/10 hover:text-accent-cyan hover:border-accent-cyan/20 hover:-translate-y-0.5 transition-all" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border-color bg-bg-primary text-text-secondary flex items-center justify-center hover:bg-accent-cyan/10 hover:text-accent-cyan hover:border-accent-cyan/20 hover:-translate-y-0.5 transition-all" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border-color bg-bg-primary text-text-secondary flex items-center justify-center hover:bg-accent-cyan/10 hover:text-accent-cyan hover:border-accent-cyan/20 hover:-translate-y-0.5 transition-all" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border-color bg-bg-primary text-text-secondary flex items-center justify-center hover:bg-accent-cyan/10 hover:text-accent-cyan hover:border-accent-cyan/20 hover:-translate-y-0.5 transition-all" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-sm text-text-secondary">
            Ready to Experience the Future of 3D Printing? Choose <span className="text-text-primary font-semibold">LayersCraft3D</span>
          </p>
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} LayersCraft3D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
