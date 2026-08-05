import aboutImage from '../../assets/about_3d_printing.png';
import { brandPillars, workflow } from '../../content/layerCraftContent';
import CTASection from '../CTASection';
import Reveal from '../ui/Reveal';
import { BentoPanel, EditorialBlock, PageHero, Timeline, VisualPlate } from './PagePrimitives';

export default function AboutPage({ setCurrentPage }) {
  return (
    <div className="about-page bg-bg-primary text-text-primary">
      <PageHero
        eyebrow="About Layers Craft 3D"
        title="We're Creators of Innovative 3D Printing Solutions"
        copy="Whether it's your first sketch or a functional prototype, we provide complete product development solutions without compromising on quality."
        meta={['Trusted 3D Printing Company', 'Serving Hyderabad & Nationwide', 'Online Project Support']}
      />

      <EditorialBlock
        eyebrow="Our Purpose to Start"
        title="To Create Quality 3D Printing Products"
        copy="Everyone starts with an idea. We started with a desire to help every simple design take shape as a purposeful 3D product. We never wanted great ideas to remain on paper. If an entrepreneur has a new concept or a business wanted to develop its next product, we make sure to turn every idea into a real product."
      >
        <VisualPlate label="Experience the Future of Creativity" title="Turn your imagination into reality through 3D printing.">
          <img src={aboutImage} alt="LayerCraft3D production setting" className="absolute inset-0 w-full h-full object-cover opacity-65 mix-blend-screen visual-plate-image" />
        </VisualPlate>
      </EditorialBlock>

      <section className="relative py-20 px-6 premium-section overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-12 max-w-3xl">
            <span className="section-kicker mb-4">What We Believe</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-gradient-premium leading-tight">
              Simplifying Your Product Development Journey
            </h2>
            <p className="premium-copy text-base sm:text-lg mt-5">
              Our mission is to bring the design, 3D printing, prototyping, and manufacturing support together under one roof. Our goal is very simple: "Help you move from imagination to reality with confidence."
            </p>
          </Reveal>
          <Reveal className="mb-8">
            <span className="section-kicker mb-4">Why Choose Us</span>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
            {brandPillars.slice(0, 3).map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={idx * 0.08} className="h-full lg:col-span-2">
                  <BentoPanel className="h-full">
                    <Icon className="text-accent-cyan mb-8" size={28} />
                    <h3 className="font-heading text-2xl font-bold text-text-primary mb-3">{pillar.title}</h3>
                    <p className="premium-copy">{pillar.desc}</p>
                  </BentoPanel>
                </Reveal>
              );
            })}
            <div className="lg:col-span-6 flex flex-col lg:flex-row justify-center gap-5">
              {brandPillars.slice(3).map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <Reveal key={pillar.title} delay={(idx + 3) * 0.08} className="w-full lg:w-[calc((100%-1.25rem)/3)]">
                    <BentoPanel className="h-full">
                      <Icon className="text-accent-cyan mb-8" size={28} />
                      <h3 className="font-heading text-2xl font-bold text-text-primary mb-3">{pillar.title}</h3>
                      <p className="premium-copy">{pillar.desc}</p>
                    </BentoPanel>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <EditorialBlock
        eyebrow="Our Workflow"
        title="Turning Design Ideas into Perfect 3D Printed Products"
        copy={null}
        reverse
      >
        <Timeline items={workflow} />
      </EditorialBlock>

      <CTASection setCurrentPage={setCurrentPage} />
    </div>
  );
}
