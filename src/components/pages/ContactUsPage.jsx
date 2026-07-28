import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import CTASection from '../CTASection';
import FAQSection from '../FAQSection';
import Reveal from '../ui/Reveal';
import { BentoPanel, PageHero } from './PagePrimitives';

export default function ContactUsPage({ setCurrentPage }) {
  return (
    <div className="bg-bg-primary text-text-primary">
      <PageHero
        eyebrow="Need Assistance?"
        title="Great Product Development Starts With a Conversation."
        copy="If you are ready with a single concept or complicated design, our professional team is ready to help you move forward confidently."
        meta={['Online Support', 'Fair Pricing', 'Nationwide Delivery']}
      />

      <section className="relative py-20 px-6 premium-section overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 items-stretch lg:grid-cols-4 gap-5">
          {[
            { label: 'Email Support', value: 'print@layerscraft3d.com', icon: Mail },
            { label: 'Phone Number', value: '+91 8247606508', icon: Phone },
            { label: 'Office Location', value: 'Srila Park Pride Rd, Hafeezpet, Hyderabad, Telangana 500049', icon: MapPin },
            { label: 'Response Time', value: 'Quote Review Within 24 Hours', icon: Clock },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={idx * 0.08} className="h-full">
                <BentoPanel className="h-full min-h-[250px] lg:h-[292px] lg:min-h-0 flex flex-col justify-start">
                  <Icon size={26} className="text-accent-cyan mb-8" />
                  <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-text-muted">{item.label}</span>
                  <p className="font-heading text-xl font-semibold leading-snug text-text-primary mt-4">{item.value}</p>
                </BentoPanel>
              </Reveal>
            );
          })}
        </div>
      </section>

      <FAQSection kicker="FAQ’s" title="Quick Answers for You" />

      <CTASection setCurrentPage={setCurrentPage} />
    </div>
  );
}
