import { ArrowLeft, ArrowRight } from 'lucide-react';
import CTASection from '../CTASection';
import Reveal from '../ui/Reveal';
import projectFutureFictionDetail from '../../../assets/case-studies/project-future-fiction-detail.jpg';

const challenges = [
  '2D Sketches to 3D Designs',
  'Technical Limitations',
  'Cost',
  'Consumer Acceptance',
];

const projectDetails = [
  ['Category', '3D Printing'],
  ['Client', 'JD Institute of Fashion Technology'],
  ['Industry', 'Fashion Designing'],
  ['Stack', 'Autodesk Maya, UltiMaker Cura, 3D Builder'],
];

export default function CaseStudyDetailPage({ setCurrentPage }) {
  const goBack = () => {
    setCurrentPage('case-studies');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goQuote = () => {
    setCurrentPage('quick-quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-bg-primary text-text-primary">
      <main className="relative pt-32 sm:pt-40 premium-section overflow-hidden">
        <div className="bg-grid-overlay" />
        <div className="max-w-6xl mx-auto px-6">
          <button type="button" onClick={goBack} className="mb-12 inline-flex items-center gap-2 text-sm font-bold text-accent-cyan cursor-pointer">
            <ArrowLeft size={16} /> All case studies
          </button>

          <Reveal className="max-w-5xl">
            <span className="section-kicker mb-5">3D Printing</span>
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.98] tracking-tight text-gradient-premium mb-8">
              Project Future Fiction
            </h1>
            <p className="premium-copy text-xl max-w-4xl">
              Project Future Fiction a concept where fashion meets emerging technology. Students from fashion college approached us seeking help for their show. The theme of the show was future fusion, wherein a creative, sustainable, and technologically integrated solution must be found We proposed “3D Printing,” which has flexibility to be achieved despite obstacles.
            </p>
          </Reveal>

          <Reveal className="mt-16">
            <img src={projectFutureFictionDetail} alt="Project Future Fiction fashion show" className="w-full h-auto rounded-2xl" />
          </Reveal>

          <div className="mt-20 divide-y divide-border-color/70 border-y border-border-color/70">
            <Reveal className="py-14 sm:py-20">
              <div className="max-w-4xl">
                <span className="section-kicker mb-5">Challenge</span>
                <p className="premium-copy text-lg sm:text-xl mb-8">
                  Project Future Fiction a concept where fashion meets emerging technology. Students from fashion college approached us seeking help for their show. The theme of the show was future fusion, wherein a creative, sustainable, and technologically integrated solution must be found We proposed “3D Printing,” which has flexibility to be achieved despite obstacles.
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-gradient-premium mb-6">Challenges:</h2>
                <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4 text-text-secondary">
                  {challenges.map((challenge) => <li key={challenge} className="border-b border-border-color/50 pb-3">{challenge}</li>)}
                </ul>
              </div>
            </Reveal>

            <Reveal className="py-14 sm:py-20">
              <div className="max-w-4xl">
                <span className="section-kicker mb-5">Our Process</span>
                <p className="premium-copy text-lg sm:text-xl mb-10">
                  Over the next few weeks, studio transformed into a chaotic yet inspiring playground filled with sketches, prototypes, and the hum of 3D printer. Each design was a fusion of art and technology—flowing gowns with intricate lace-like patterns, bold jackets with geometric cuts, and accessories that seemed to dance in the light.
                </p>
                <div className="space-y-7">
                  <div><h3 className="font-heading text-xl font-bold mb-2">Rapid Prototyping</h3><p className="premium-copy">Experiment with material like PLA, TPU &amp; SLA were able to meet their requirement.</p></div>
                  <div><h3 className="font-heading text-xl font-bold mb-2">Software</h3><p className="premium-copy">Used Autodesk Maya, UltiMaker Cura, Chitu Box, 3D Builder, Flash Print for 3D design and Print ready design&apos;s.</p></div>
                  <div><h3 className="font-heading text-xl font-bold mb-2">Machines</h3><p className="premium-copy">Elegoo Neptune 4 max and Elegoo Saturn 4 for Printing.</p></div>
                </div>
              </div>
            </Reveal>

            <Reveal className="py-14 sm:py-20">
              <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                {projectDetails.map(([label, value]) => <div key={label}><span className="section-kicker mb-2">{label}</span><p className="premium-copy text-lg">{value}</p></div>)}
              </div>
            </Reveal>

            <Reveal className="py-14 sm:py-20">
              <div className="max-w-4xl">
                <span className="section-kicker mb-5">Conclusion</span>
                <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-gradient-premium mb-6">The Solution</h2>
                <p className="premium-copy text-lg sm:text-xl mb-5">3D printing technology represents a paradigm shift in the fashion industry, offering solutions for sustainability, customization, and innovation. While challenges remain, the potential for growth and transformation is significant.</p>
                <p className="premium-copy text-lg sm:text-xl mb-8">The future of fashion may be shaped by 3D-printed designs that cater to the modern consumer’s demands for</p>
                <div className="flex flex-wrap gap-x-8 gap-y-3 text-accent-cyan font-bold"><span>Individuality</span><span>Sustainability</span><span>Economy</span></div>
              </div>
            </Reveal>
          </div>

          <div className="flex justify-center py-16 sm:py-20">
            <button type="button" onClick={goQuote} className="inline-flex items-center gap-2 text-sm font-bold text-accent-cyan cursor-pointer">
              Begin Your Project <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </main>
      <CTASection setCurrentPage={setCurrentPage} />
    </div>
  );
}
