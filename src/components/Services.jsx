import { HoverEffect } from './ui/HoverEffect';
import Reveal from './ui/Reveal';
import { Zap, Layers, Box, PenTool, Scan, Scissors, Settings, Factory } from 'lucide-react';

export default function Services({ setCurrentPage }) {
  const handleCTA = () => {
    setCurrentPage('quick-quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goServices = () => {
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      title: "Rapid Prototyping",
      desc: "You can get the functional prototypes in less time. The main reason is that we use advanced 3D printing for faster product development.",
      icon: Zap,
      linkAction: handleCTA
    },
    {
      title: "Custom 3D Printing",
      desc: "We have customized our 3D printing services to create unique, high-quality parts and products that will be exactly like your idea.",
      icon: Layers,
      linkAction: handleCTA
    },
    {
      title: "Scale Models",
      desc: "We built accurate scale models for your presentations, planning, and real-world product visualization.",
      icon: Box,
      linkAction: handleCTA
    },
    {
      title: "3D Designing & Sculpting",
      desc: "We transform your ideas into detailed designs ready for printing and production.",
      icon: PenTool,
      linkAction: handleCTA
    },
    {
      title: "3D Scanning",
      desc: "We capture real objects into precise digital models for redesign, replication, and improvements.",
      icon: Scan,
      linkAction: handleCTA
    },
    {
      title: "CNC Machining",
      desc: "Our advanced CNC machining will produce strong, high-precision parts and give reliable performance.",
      icon: Settings,
      linkAction: handleCTA
    },
    {
      title: "Laser Cutting & Engraving",
      desc: "We give you the product with precise cutting and detailed engraving for custom designs and high-quality finishes.",
      icon: Scissors,
      linkAction: handleCTA
    },
    {
      title: "Injection Molding",
      desc: "We manufacture high-quality plastic parts efficiently for mass production and consistent results.",
      icon: Factory,
      linkAction: handleCTA
    }
  ];

  return (
    <section id="services" className="relative py-24 px-6 bg-bg-primary z-10 premium-section overflow-hidden">
      <div className="story-rail hidden lg:block"></div>
      <div className="max-w-7xl mx-auto text-center">
        <Reveal as="span" className="section-kicker justify-center mb-4">
          Explore Our Services
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-5 max-w-3xl mx-auto text-gradient-premium">
            The Best 3D Solutions for your Business
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-base premium-copy max-w-[650px] mx-auto">
            Select the right service to transform your ideas into refined designs and functional products.
          </p>
        </Reveal>

        {/* Aceternity Card Hover Effect Grid */}
        <Reveal delay={0.22} className="w-full">
          <HoverEffect items={services} className="mt-8" />
        </Reveal>

        <Reveal delay={0.12} className="mt-8 flex justify-center">
          <button 
            onClick={goServices}
            className="px-8 py-3 rounded-lg border border-border-color bg-transparent hover:bg-bg-secondary hover:border-text-secondary/50 text-sm font-semibold text-text-primary transition-all cursor-pointer"
          >
            View More Services
          </button>
        </Reveal>
      </div>
    </section>
  );
}
