import { Clock, Mail, MapPin, MessageSquare, PhoneCall } from 'lucide-react';
import CTASection from '../CTASection';
import FAQSection from '../FAQSection';
import Reveal from '../ui/Reveal';
import { BentoPanel, EditorialBlock, PageHero, VisualPlate } from './PagePrimitives';

export default function ContactUsPage({ setCurrentPage }) {
  return (
    <div className="bg-bg-primary text-text-primary">
      <PageHero
        eyebrow="Contact Us"
        title="Talk to a team that can shape the next build decision."
        copy="Reach LayerCraft3D for 3D printing services in India, custom product design, rapid prototyping, 3D scanning, scale models, and CNC machining support."
        meta={['Hyderabad, Telangana', 'India + Online Support', 'Quote Review']}
      />

      <EditorialBlock
        eyebrow="Direct Connection"
        title="Start with the problem, the file, or the idea."
        copy="You do not need a perfect brief. Share what you have: a sketch, reference image, CAD file, broken part, model requirement, or production question."
      >
        <VisualPlate label="Response Flow" title="Design review quotes are prepared around your file and use case.">
          <MessageSquare size={138} className="absolute right-10 top-12 text-accent-cyan/55" />
          <PhoneCall size={120} className="absolute left-10 bottom-12 text-white/10" />
        </VisualPlate>
      </EditorialBlock>

      <section className="relative py-20 px-6 premium-section overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
          {[
            { label: 'Email Support', value: 'support@domain.com', icon: Mail },
            { label: 'Business Address', value: 'Hyderabad, Telangana, India', icon: MapPin },
            { label: 'Turnaround Details', value: 'Design review quotes provided within 24 hours.', icon: Clock },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={idx * 0.08}>
                <BentoPanel className="min-h-[250px]">
                  <Icon size={26} className="text-accent-cyan mb-8" />
                  <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-text-muted">{item.label}</span>
                  <p className="font-heading text-2xl font-bold text-text-primary mt-4">{item.value}</p>
                </BentoPanel>
              </Reveal>
            );
          })}
        </div>
      </section>

      <FAQSection title="Contact questions answered" />

      <section className="relative py-20 px-6 bg-bg-secondary premium-section">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="rounded-2xl overflow-hidden border border-border-color shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <iframe
                title="LayersCraft3D location in Hyderabad"
                src="https://www.google.com/maps?q=Hyderabad%2C%20Telangana%2C%20India&z=12&output=embed"
                className="block w-full h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
      <CTASection setCurrentPage={setCurrentPage} />
    </div>
  );
}
