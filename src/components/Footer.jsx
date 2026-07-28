import logoWhite from '../assets/logo/LC3D_Logo_White_High_Res.png';
import logoBlack from '../assets/logo/LC3D_Logo_Black_High_Res.png';
import { Mail, MapPin, Phone } from 'lucide-react';
import { services } from '../data/services';

const Linkedin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-7.48L5.52 22H2.4l7.24-8.27L2 2h6.4l4.42 6.84L18.9 2Zm-1.1 18h1.73L7.46 3.9H5.6L17.8 20Z" />
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

const Youtube = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.55 3.6 12 3.6 12 3.6s-7.55 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.85.5 9.4.5 9.4.5s7.55 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8Z" />
    <path fill="#fff" d="m9.6 15.9 6.3-3.9-6.3-3.9v7.8Z" />
  </svg>
);


export default function Footer({ setCurrentPage, scrollToSection, theme }) {
  const isLight = theme === 'light';
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
    <footer className="bg-bg-secondary py-8 px-6 relative z-10 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col items-start">
            <img 
              src={isLight ? logoBlack : logoWhite} 
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

          {/* Column 3: Services */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-5 font-heading">Services</h4>
            <ul className="flex flex-col gap-3 items-start">
              {services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="text-sm text-text-secondary hover:text-accent-cyan hover:translate-x-1 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="contents lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-6">
          {/* Column 4: Contact Details */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-5 font-heading">Contact Us</h4>
            <ul className="flex flex-col gap-4 items-start text-sm text-text-secondary">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent-cyan flex-shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent-cyan flex-shrink-0 mt-0.5" />
                <a href="tel:+918247606508" className="hover:text-accent-cyan transition-colors">+91 8247606508</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent-cyan flex-shrink-0 mt-0.5" />
                <a href="mailto:print@layerscraft3d.com" className="hover:text-accent-cyan transition-colors">print@layerscraft3d.com</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Handles */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-5 font-heading">Follow Us</h4>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border-color bg-bg-primary text-[#0a66c2] flex items-center justify-center hover:bg-[#0a66c2]/10 hover:border-[#0a66c2]/30 hover:-translate-y-0.5 transition-all" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-black bg-black text-white flex items-center justify-center hover:bg-black/80 hover:-translate-y-0.5 transition-all" aria-label="X">
                <XLogo size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border-color bg-bg-primary text-[#e4405f] flex items-center justify-center hover:bg-[#e4405f]/10 hover:border-[#e4405f]/30 hover:-translate-y-0.5 transition-all" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border-color bg-bg-primary text-[#1877f2] flex items-center justify-center hover:bg-[#1877f2]/10 hover:border-[#1877f2]/30 hover:-translate-y-0.5 transition-all" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border-color bg-bg-primary text-[#ff0000] flex items-center justify-center hover:bg-[#ff0000]/10 hover:border-[#ff0000]/30 hover:-translate-y-0.5 transition-all" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <iframe
            title="LayersCraft3D location map"
            src="https://www.google.com/maps?q=Srila%20Park%20Pride%20Rd%2C%20Hafeezpet%2C%20Hyderabad%2C%20Telangana%20500049&output=embed"
            className="lg:col-span-2 block w-full h-52 rounded-xl border border-border-color"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
