import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { services, technologies, workflow } from '../../content/layerCraftContent';
import CTASection from '../CTASection';
import ServicesProductJourney from '../ServicesProductJourney';
import Reveal from '../ui/Reveal';
import { BentoPanel, EditorialBlock, PageHero, Timeline } from './PagePrimitives';

export default function ServicesPage({ setCurrentPage }) {
  const goQuote = () => {
    setCurrentPage('quick-quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-bg-primary text-text-primary">
      <PageHero
        eyebrow="Services"
        title="Choose the right manufacturing path for your next product."
        copy="From concept modeling to low-volume production support, LayerCraft3D helps you pick the service that fits the stage, budget, and use case."
        meta={['3D Printing', 'Design & Sculpting', '3D Scanning', 'CNC Machining']}
      />

      <ServicesProductJourney setCurrentPage={setCurrentPage} />

      <EditorialBlock
        eyebrow="Service Model"
        title="Not just printing. A connected product-development workflow."
        copy="A strong prototype comes from the decisions around the print: design readiness, material choice, tolerances, finish, use case, and delivery timeline."
        reverse
      >
        <Timeline items={workflow} />
      </EditorialBlock>

      <section className="relative py-20 px-6 premium-section overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={idx * 0.05} className={idx === 0 || idx === 5 ? 'lg:col-span-6' : 'lg:col-span-3'}>
                <BentoPanel className="h-full min-h-[250px]">
                  <Icon size={25} className="text-accent-cyan mb-8" />
                  <h3 className="font-heading text-2xl font-bold text-text-primary mb-3">{service.title}</h3>
                  <p className="premium-copy text-sm">{service.detail}</p>
                </BentoPanel>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative py-20 px-6 bg-bg-secondary premium-section overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-3xl mb-12">
            <span className="section-kicker mb-4">Technologies</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-gradient-premium leading-tight">
              Technologies we use in 3D printing
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {technologies.map((tech, idx) => (
              <Reveal key={tech.name} delay={idx * 0.06}>
                <BentoPanel className="h-full">
                  <span className="font-heading text-3xl font-extrabold text-accent-cyan">{tech.name}</span>
                  <p className="premium-copy text-sm mt-5">{tech.desc}</p>
                </BentoPanel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-bg-secondary premium-section">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <CheckCircle2 size={34} className="text-accent-emerald mx-auto mb-6" />
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-gradient-premium mb-5">
              Have files already? Get a quote faster.
            </h2>
            <p className="premium-copy text-lg max-w-2xl mx-auto mb-8">
              Upload STL, OBJ, STEP, or STP files with your intended use case and our team can review the build path.
            </p>
            <button onClick={goQuote} className="btn-glow px-7 py-3.5 rounded-lg text-sm font-bold text-text-primary cursor-pointer group">
              <span className="flex items-center gap-2">Start Quick Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
            </button>
          </Reveal>
        </div>
      </section>
      <CTASection setCurrentPage={setCurrentPage} />
    </div>
  );
}
