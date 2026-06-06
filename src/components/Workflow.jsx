import { HelpCircle, Layers, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';

const STEPS = [
  {
    num: "01",
    title: "Consultation & Concept Design",
    desc: "Firstly, after you contact us and share your idea, our team understands your requirements and creates precise 3D designs for development.",
    icon: HelpCircle,
    gradient: "from-accent-cyan to-accent-blue"
  },
  {
    num: "02",
    title: "Prototyping & 3D Printing",
    desc: "Secondly, we start to build functional prototypes using advanced 3D printing for fast results.",
    icon: Layers,
    gradient: "from-accent-blue to-accent-purple"
  },
  {
    num: "03",
    title: "Quality Check & Delivery",
    desc: "Finally, we test, refine, and deliver high-quality 3D products ready for use.",
    icon: CheckCircle2,
    gradient: "from-accent-purple to-accent-cyan"
  }
];

export default function Workflow() {
  return (
    <section className="relative py-24 px-6 bg-bg-primary z-10 overflow-hidden transition-colors duration-300 premium-section">
      <div className="story-rail hidden lg:block"></div>

      <div className="max-w-7xl mx-auto text-center">
        <Reveal as="span" className="section-kicker justify-center mb-4">
          Our Workflow
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary mb-5 text-gradient-premium">
            A clear path from idea to usable product
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-base sm:text-lg premium-copy max-w-[650px] mx-auto mb-16">
            The process stays simple for you, while our team handles the technical decisions behind design, prototyping, testing, and delivery.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connecting line backdrop for desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[2.75rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-amber opacity-25 hidden lg:block -z-0 origin-left"
          ></motion.div>

          {STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <Reveal 
                key={idx} 
                className="flex flex-col items-center relative group z-10 w-full"
                delay={idx * 0.12}
              >
                <div className="premium-card rounded-2xl p-8 lg:p-10 text-left relative w-full h-full hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden">
                  {/* Subtle grid pattern card overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none -z-10 group-hover:opacity-60 transition-opacity"></div>
                  
                  <div>
                    {/* Top Row: Icon Circle and Glowing Number */}
                    <div className="flex items-center justify-between mb-8">
                      {/* Icon Container with Gradient Border Glow */}
                      <div className={`w-12 h-12 rounded-xl bg-bg-primary border border-border-color text-accent-cyan flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 group-hover:border-accent-cyan/30 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-500`}>
                        <IconComponent size={22} />
                      </div>
                      
                      {/* Semi-transparent large gradient number */}
                      <span className={`font-heading text-4xl font-extrabold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-30 select-none group-hover:scale-105 transition-transform duration-500`}>
                        {step.num}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-heading text-xl font-bold text-text-primary mb-3.5 group-hover:text-accent-cyan transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Border Accent Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${step.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
