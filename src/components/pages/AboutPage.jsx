import { Award, Sparkles } from 'lucide-react';
import aboutImage from '../../assets/about_3d_printing.png';
import { brandPillars, proofPoints, workflow } from '../../content/layerCraftContent';
import Reveal from '../ui/Reveal';
import { BentoPanel, EditorialBlock, PageHero, Timeline, VisualPlate } from './PagePrimitives';

export default function AboutPage() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <PageHero
        eyebrow="About LayerCraft3D"
        title="Turning imagination into buildable product reality."
        copy="LayerCraft3D is a 3D printing and product development partner for creators, founders, engineers, and businesses that need clear execution from concept to physical product."
        meta={['Hyderabad, India', 'Design + Prototyping', '3D Printing + CNC']}
      />

      <EditorialBlock
        eyebrow="Our Story"
        title="A practical bridge between creative ideas and engineered outcomes"
        copy="The work begins with a simple promise: make product development feel less uncertain. We combine 3D design, prototyping, scanning, printing, and machining so teams can move from abstract sketches to tangible, testable components."
      >
        <VisualPlate label="Experience the Future of Creativity" title="Turn your imagination into reality through 3D printing.">
          <img src={aboutImage} alt="LayerCraft3D production setting" className="absolute inset-0 w-full h-full object-cover opacity-65 mix-blend-screen" />
        </VisualPlate>
      </EditorialBlock>

      <section className="relative py-20 px-6 premium-section overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-12 max-w-3xl">
            <span className="section-kicker mb-4">What We Believe</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-gradient-premium leading-tight">
              Premium does not mean complicated. It means the next step is clear.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {brandPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={idx * 0.08}>
                  <BentoPanel className={idx === 0 ? 'lg:min-h-[320px]' : 'lg:min-h-[260px]'}>
                    <Icon className="text-accent-cyan mb-8" size={28} />
                    <h3 className="font-heading text-2xl font-bold text-text-primary mb-3">{pillar.title}</h3>
                    <p className="premium-copy">{pillar.desc}</p>
                  </BentoPanel>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <EditorialBlock
        eyebrow="How We Work"
        title="A transparent product development rhythm"
        copy="Every engagement follows a clear path: understand the product intent, choose the right build method, prototype quickly, check quality, and refine when the part needs another iteration."
        reverse
      >
        <Timeline items={workflow} />
      </EditorialBlock>

      <section className="relative py-20 px-6 bg-bg-secondary premium-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">
          <Reveal>
            <BentoPanel className="h-full flex flex-col justify-between">
              <Sparkles size={30} className="text-accent-amber mb-8" />
              <div>
                <span className="section-kicker mb-4">Proof</span>
                <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-gradient-premium leading-tight">
                  Focused numbers, earned through delivery.
                </h2>
              </div>
            </BentoPanel>
          </Reveal>
          <div className="grid grid-cols-2 gap-5">
            {proofPoints.map((point, idx) => (
              <Reveal key={point.label} delay={idx * 0.06}>
                <BentoPanel>
                  <Award size={22} className="text-accent-cyan mb-6" />
                  <span className="font-heading text-4xl sm:text-5xl font-extrabold text-gradient-premium">{point.value}</span>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-secondary mt-3">{point.label}</p>
                </BentoPanel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
