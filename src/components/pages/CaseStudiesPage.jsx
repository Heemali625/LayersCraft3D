import { ArrowRight, CheckCircle2, Target } from 'lucide-react';
import { caseStudies } from '../../content/layerCraftContent';
import Reveal from '../ui/Reveal';
import { BentoPanel, PageHero } from './PagePrimitives';

export default function CaseStudiesPage({ setCurrentPage }) {
  const goQuote = () => {
    setCurrentPage('quick-quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-bg-primary text-text-primary">
      <PageHero
        eyebrow="Knowledge Base / Case Studies"
        title="Project stories focused on decisions, not decoration."
        copy="A MadeByCat-inspired sense of pacing applied to LayerCraft3D work: challenge, approach, result, and the practical build choices that moved the project forward."
        meta={['Project Presentation', 'Build Strategy', 'Results']}
      />

      <section className="relative py-10 px-6 premium-section overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          {caseStudies.map((study, idx) => (
            <article key={study.title} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <Reveal direction={idx % 2 ? 'right' : 'left'} className={`lg:col-span-5 ${idx % 2 ? 'lg:order-2' : ''}`}>
                <span className="section-kicker mb-4">{study.sector}</span>
                <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-gradient-premium leading-tight mb-5">
                  {study.title}
                </h2>
                <p className="premium-copy text-lg mb-8">{study.result}</p>
                <button onClick={goQuote} className="btn-glow px-6 py-3 rounded-lg text-sm font-bold text-text-primary cursor-pointer">
                  <span className="flex items-center gap-2">Plan a similar build <ArrowRight size={16} /></span>
                </button>
              </Reveal>
              <Reveal direction={idx % 2 ? 'left' : 'right'} delay={0.1} className="lg:col-span-7">
                <div className="relative min-h-[520px] rounded-3xl overflow-hidden premium-card">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(6,182,212,0.18),transparent_32%),radial-gradient(circle_at_78%_74%,rgba(245,158,11,0.14),transparent_34%)]"></div>
                  <div className="absolute inset-0 bg-grid-overlay opacity-50"></div>
                  <div className="relative z-10 h-full grid grid-cols-1 sm:grid-cols-2 gap-5 p-6 sm:p-8 content-end">
                    <BentoPanel className="bg-black/20 backdrop-blur-md">
                      <Target size={24} className="text-accent-amber mb-6" />
                      <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-text-muted">Challenge</span>
                      <p className="premium-copy mt-3">{study.challenge}</p>
                    </BentoPanel>
                    <BentoPanel className="bg-black/20 backdrop-blur-md sm:translate-y-10">
                      <CheckCircle2 size={24} className="text-accent-emerald mb-6" />
                      <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-text-muted">Approach</span>
                      <p className="premium-copy mt-3">{study.approach}</p>
                    </BentoPanel>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
