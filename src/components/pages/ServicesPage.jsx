import { ArrowRight } from 'lucide-react';
import { workflow } from '../../content/layerCraftContent';
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

      <CTASection setCurrentPage={setCurrentPage} />
    </div>
  );
}
