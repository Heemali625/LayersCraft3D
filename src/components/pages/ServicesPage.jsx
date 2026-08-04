import { workflow } from '../../content/layerCraftContent';
import CTASection from '../CTASection';
import ServicesProductJourney from '../ServicesProductJourney';
import { BentoPanel, EditorialBlock, PageHero, Timeline } from './PagePrimitives';

export default function ServicesPage({ setCurrentPage }) {
  return (
    <div className="bg-bg-primary text-text-primary">
      <PageHero
        eyebrow="Our Core Services"
        title="Choose the Right 3D Printing Solution for Your Project"
        copy={'Whether you are building your first prototype or a final product, "Layers Craft 3D" is here to support your project with reliable solutions.'}
        meta={['3D Printing', 'Design & Sculpting', '3D Scanning', 'CNC Machining']}
      />

      <section className="relative py-14 px-6 bg-bg-secondary/35">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {['3D Design Expertise', 'Prototype Development', 'Industry-Grade Quality'].map((title) => (
            <BentoPanel key={title} className="min-h-0">
              <h3 className="font-heading text-xl font-bold text-text-primary">{title}</h3>
            </BentoPanel>
          ))}
        </div>
      </section>

      <ServicesProductJourney setCurrentPage={setCurrentPage} />

      <EditorialBlock
        eyebrow="How We Work"
        title="We make Your Concepts into 3D-Printed Products"
        copy={null}
        reverse
      >
        <Timeline items={workflow} />
      </EditorialBlock>

      <CTASection setCurrentPage={setCurrentPage} />
    </div>
  );
}
