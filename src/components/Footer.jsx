import logoWhite from '../assets/logo/LC3D_Logo_White_High_Res.png';
import logoBlack from '../assets/logo/LC3D_Logo_Black_High_Res.png';
import { Mail, MapPin, Phone } from 'lucide-react';
import { services } from '../data/services';

const LOCATION_URL = 'https://maps.app.goo.gl/HidNNuHFzNKbs2vE9';

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
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.615 3.175c-2.308-1.69-9.923-1.69-12.231 0-2.308 1.69-2.308 4.436 0 6.126.769.564 1.846 1.028 3.231 1.282V22h4V11.692c1.385-.254 2.462-.718 3.231-1.282 2.308-1.69 2.308-4.436 0-6.235z" />
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
    <footer className="bg-bg-secondary py-16 px-6 relative z-10 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
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
        </div>

        <div className="rounded-2xl overflow-hidden border border-border-color bg-bg-primary shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-5">
            <div>
              <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider font-heading">Visit Us</h4>
              <p className="text-sm text-text-secondary mt-1">Hyderabad, Telangana, India</p>
            </div>
            <a href={LOCATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan hover:text-text-primary transition-colors">
              <MapPin size={17} />
              Open in Google Maps
            </a>
          </div>
          <iframe
            title="LayersCraft3D location"
            src="https://www.google.com/maps?q=Hyderabad%2C%20Telangana%2C%20India&z=12&output=embed"
            className="block w-full h-52 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
