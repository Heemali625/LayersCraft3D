import { workflow } from '../../content/layerCraftContent';
import CTASection from '../CTASection';
import ServicesProductJourney from '../ServicesProductJourney';
import { EditorialBlock, PageHero, Timeline } from './PagePrimitives';

export default function ServicesPage({ setCurrentPage }) {
  return (
    <div className="bg-bg-primary text-text-primary">
      <PageHero
        eyebrow="Our Core Services"
        title="Choose the Right 3D Printing Solution for Your Project"
        copy={'Whether you are building your first prototype or a final product, "Layers Craft 3D" is here to support your project with reliable solutions.'}
        meta={['3D Design Expertise', 'Prototype Development', 'Industry-Grade Quality']}
      />

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
