import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import TrustedPartners from './components/TrustedPartners';
import Workflow from './components/Workflow';
import CTASection from './components/CTASection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import BlogsPage from './components/pages/BlogsPage';
import CaseStudiesPage from './components/pages/CaseStudiesPage';
import ContactUsPage from './components/pages/ContactUsPage';
import QuickQuotePage from './components/pages/QuickQuotePage';
import CaseStudyDetailPage from './components/pages/CaseStudyDetailPage';
import Education3DPrintingPage from './components/pages/Education3DPrintingPage';

const PAGE_TO_PATH = {
  home: '/',
  about: '/about',
  services: '/services',
  blogs: '/knowledge-base/blogs',
  'case-studies': '/knowledge-base/case-studies',
  contact: '/contact-us',
  'quick-quote': '/quick-quote',
  'case-study-detail': '/knowledge-base/case-studies/project-future-fiction',
  'blog-education-3d-printing': '/knowledge-base/blogs/why-education-system-is-adopting-3d-printing',
};

const PATH_TO_PAGE = Object.entries(PAGE_TO_PATH).reduce((acc, [page, path]) => {
  acc[path] = page;
  return acc;
}, {});

const getPageFromPath = () => {
  if (typeof window === 'undefined') return 'home';
  if (window.location.pathname.startsWith('/services/')) return 'services';
  if (window.location.pathname.startsWith('/knowledge-base/case-studies/')) return 'case-study-detail';
  if (window.location.pathname.startsWith('/knowledge-base/blogs/')) return 'blog-education-3d-printing';
  return PATH_TO_PAGE[window.location.pathname] || 'home';
};

function App() {
  const [currentPage, setCurrentPageState] = useState(getPageFromPath);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return window.localStorage.getItem('lc3d-theme') || 'dark';
  });

  // Initialize Lenis Smooth Momentum Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for premium momentum feel
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPageState(getPageFromPath());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    window.localStorage.setItem('lc3d-theme', theme);
  }, [theme]);

  const setCurrentPage = (page, serviceSlug = '') => {
    const nextPath = page === 'services' && serviceSlug
      ? `/services/${serviceSlug}`
      : PAGE_TO_PATH[page] || '/';
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    setCurrentPageState(PAGE_TO_PATH[page] || page === 'services' ? page : 'home');
  };


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarOffset = 85;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary overflow-x-hidden font-sans transition-colors duration-300">
      
      {/* Global Navbar (Header) */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        scrollToSection={scrollToSection} 
        theme={theme}
        setTheme={setTheme}
      />
      
      {/* Main Pages Flow */}
      <main className="flex-grow flex flex-col">
        {currentPage === 'home' ? (
          <div className="flex flex-col">
            {/* Page 1: Homepage Sections */}
            <Hero setCurrentPage={setCurrentPage} />
            <TrustedPartners />
            <Services setCurrentPage={setCurrentPage} />
            <Portfolio />
            <Industries />
            <Workflow />
            <Testimonials />
            <CTASection setCurrentPage={setCurrentPage} />
          </div>
        ) : currentPage === 'about' ? (
          <AboutPage setCurrentPage={setCurrentPage} />
        ) : currentPage === 'services' ? (
          <ServicesPage setCurrentPage={setCurrentPage} />
        ) : currentPage === 'blogs' ? (
          <BlogsPage setCurrentPage={setCurrentPage} />
        ) : currentPage === 'case-studies' ? (
          <CaseStudiesPage setCurrentPage={setCurrentPage} />
        ) : currentPage === 'case-study-detail' ? (
          <CaseStudyDetailPage setCurrentPage={setCurrentPage} />
        ) : currentPage === 'blog-education-3d-printing' ? (
          <Education3DPrintingPage setCurrentPage={setCurrentPage} />
        ) : currentPage === 'contact' ? (
          <ContactUsPage setCurrentPage={setCurrentPage} />
        ) : (
          <QuickQuotePage />
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        setCurrentPage={setCurrentPage} 
        scrollToSection={scrollToSection} 
        theme={theme}
      />

      {/* Hidden global SVG Gooey Filter definitions */}
      <svg xmlns="http://www.w3.org/2000/svg" className="hidden absolute w-0 h-0" version="1.1">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default App;
