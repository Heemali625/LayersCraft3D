import { useState } from 'react';
import { ArrowRight, CheckCircle2, Target, X } from 'lucide-react';
import { caseStudies } from '../../content/layerCraftContent';
import CTASection from '../CTASection';
import Reveal from '../ui/Reveal';
import { PageHero } from './PagePrimitives';
import projectFutureFiction from '../../../assets/case-studies/project-future-fiction.jpg';

const CASE_STUDY_IMAGES = [projectFutureFiction];

export default function CaseStudiesPage({ setCurrentPage }) {
  const [selectedStudy, setSelectedStudy] = useState(null);

  const goQuote = () => {
    setCurrentPage('quick-quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }; 

  return (
    <div className="bg-bg-primary text-text-primary">
      <PageHero
        eyebrow="Case Studies"
        title="Projects That Delivered Results"
        copy="A MadeByCat-inspired sense of pacing applied to LayerCraft3D work: challenge, approach, result, and the practical build choices that moved the project forward."
        meta={['Project Presentation', 'Build Strategy', 'Results']}
      />

      <section className="relative py-10 px-6 premium-section overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {caseStudies.map((study, idx) => (
            <Reveal key={study.title} delay={idx * 0.08} className="h-full">
              <article
                role="button"
                tabIndex={0}
                onClick={() => setSelectedStudy(study)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') setSelectedStudy(study);
                }}
                className="premium-card rounded-3xl overflow-hidden h-full grid grid-cols-1 lg:grid-cols-12 transition-all duration-500 cursor-pointer group"
              >
                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center">
                  <span className="section-kicker mb-5">{study.sector}</span>
                  <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-gradient-premium leading-tight mb-5">{study.title}</h2>
                  <p className="premium-copy text-lg mb-8">{study.result}</p>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      goQuote();
                    }}
                    className="btn-glow self-start px-6 py-3 rounded-lg text-sm font-bold text-text-primary cursor-pointer"
                  >
                    <span className="flex items-center gap-2">Begin Your Project <ArrowRight size={16} /></span>
                  </button>
                </div>
                <img src={CASE_STUDY_IMAGES[idx]} alt={study.title} className="lg:col-span-7 w-full h-72 lg:h-full min-h-[360px] object-cover transition-transform duration-700 group-hover:scale-105" />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-6 backdrop-blur-sm" onClick={() => setSelectedStudy(null)}>
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl premium-card" onClick={(event) => event.stopPropagation()}>
            <button type="button" aria-label="Close case study" onClick={() => setSelectedStudy(null)} className="absolute right-5 top-5 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75 cursor-pointer">
              <X size={20} />
            </button>
            <img src={CASE_STUDY_IMAGES[caseStudies.indexOf(selectedStudy)]} alt={selectedStudy.title} className="h-64 w-full object-cover sm:h-80" />
            <div className="p-7 sm:p-10">
              <span className="section-kicker mb-4">{selectedStudy.sector}</span>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-gradient-premium leading-tight mb-5">{selectedStudy.title}</h2>
              <p className="premium-copy text-lg mb-8">{selectedStudy.result}</p>
              <div className="grid gap-5 sm:grid-cols-2 mb-8">
                <div className="rounded-2xl border border-border-color bg-bg-secondary/60 p-6">
                  <Target size={22} className="text-accent-amber mb-4" />
                  <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-text-muted">Challenge</span>
                  <p className="premium-copy mt-3">{selectedStudy.challenge}</p>
                </div>
                <div className="rounded-2xl border border-border-color bg-bg-secondary/60 p-6">
                  <CheckCircle2 size={22} className="text-accent-emerald mb-4" />
                  <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-text-muted">Approach</span>
                  <p className="premium-copy mt-3">{selectedStudy.approach}</p>
                </div>
              </div>
              <button type="button" onClick={goQuote} className="btn-glow px-6 py-3 rounded-lg text-sm font-bold text-text-primary cursor-pointer">
                <span className="flex items-center gap-2">Begin Your Project <ArrowRight size={16} /></span>
              </button>
            </div>
          </div>
        </div>
      )}
      <CTASection setCurrentPage={setCurrentPage} />
    </div>
  );
}
