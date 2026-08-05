import { ArrowRight } from 'lucide-react';
import { caseStudies } from '../../content/layerCraftContent';
import CTASection from '../CTASection';
import Reveal from '../ui/Reveal';
import { PageHero } from './PagePrimitives';
import projectFutureFiction from '../../../assets/case-studies/project-future-fiction.jpg';

const CASE_STUDY_IMAGES = [projectFutureFiction];

export default function CaseStudiesPage({ setCurrentPage }) {
  const openStudy = () => {
    setCurrentPage('case-study-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-bg-primary text-text-primary">
      <PageHero eyebrow="Case Studies" title="Projects That Delivered Results" />
      <section className="relative py-20 px-6 premium-section overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {caseStudies.map((study, idx) => (
            <Reveal key={study.title} delay={idx * 0.08} className="h-full">
              <article className="premium-card rounded-3xl overflow-hidden h-full grid grid-cols-1 lg:grid-cols-12 transition-all duration-500 group">
                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center">
                  <span className="section-kicker mb-5">{study.sector}</span>
                  <button type="button" onClick={openStudy} className="text-left cursor-pointer">
                    <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-gradient-premium leading-tight mb-5">{study.title}</h2>
                  </button>
                  <button type="button" onClick={openStudy} className="premium-copy text-lg text-left cursor-pointer">{study.result}</button>
                  <button type="button" onClick={openStudy} className="mt-8 self-start inline-flex items-center gap-2 text-sm font-bold text-accent-cyan cursor-pointer">
                    View case study <ArrowRight size={16} />
                  </button>
                </div>
                <button type="button" onClick={openStudy} className="lg:col-span-7 cursor-pointer overflow-hidden" aria-label={`View ${study.title}`}>
                  <img src={CASE_STUDY_IMAGES[idx]} alt={study.title} className="w-full h-72 lg:h-full min-h-[360px] object-cover transition-transform duration-700 group-hover:scale-105" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection setCurrentPage={setCurrentPage} />
    </div>
  );
}
