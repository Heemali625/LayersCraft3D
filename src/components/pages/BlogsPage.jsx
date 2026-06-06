import { ArrowRight, BookOpen, Clock, Layers } from 'lucide-react';
import { blogPosts, services } from '../../content/layerCraftContent';
import Reveal from '../ui/Reveal';
import { BentoPanel, EditorialBlock, PageHero, VisualPlate } from './PagePrimitives';

export default function BlogsPage({ setCurrentPage }) {
  const goQuote = () => {
    setCurrentPage('quick-quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-bg-primary text-text-primary">
      <PageHero
        eyebrow="Knowledge Base / Blogs"
        title="Practical notes for building better physical products."
        copy="A focused knowledge base for creators and product teams learning how to prepare files, choose processes, and reduce prototyping uncertainty."
        meta={['Guides', 'Process Notes', 'Quote Preparation']}
      />

      <EditorialBlock
        eyebrow="Featured Guide"
        title="Before the first print, define what the prototype must prove."
        copy="A prototype can answer different questions: Does it fit? Does it look right? Can it survive handling? Is it ready for stakeholder review? The clearer the question, the stronger the build plan."
      >
        <VisualPlate label="Editorial" title="Use prototypes as decision tools, not just objects.">
          <BookOpen size={118} className="absolute right-10 top-12 text-accent-cyan/60" />
          <Layers size={160} className="absolute -left-6 bottom-10 text-white/10" />
        </VisualPlate>
      </EditorialBlock>

      <section className="relative py-20 px-6 premium-section overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-3xl mb-12">
            <span className="section-kicker mb-4">Latest Articles</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-gradient-premium leading-tight">
              Built like an editorial system, not a generic article grid.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {blogPosts.map((post, idx) => (
              <Reveal key={post.title} delay={idx * 0.08} className={idx === 0 ? 'lg:col-span-7 lg:row-span-2' : 'lg:col-span-5'}>
                <article className={`premium-card rounded-2xl p-7 sm:p-9 h-full transition-all duration-500 ${idx === 0 ? 'min-h-[430px] flex flex-col justify-end' : 'min-h-[210px]'}`}>
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-text-muted mb-6">
                    <span className="text-accent-cyan">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-text-muted"></span>
                    <Clock size={13} />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className={`font-heading font-extrabold text-text-primary leading-tight mb-4 ${idx === 0 ? 'text-3xl sm:text-5xl' : 'text-2xl'}`}>
                    {post.title}
                  </h3>
                  <p className="premium-copy">{post.excerpt}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-bg-secondary premium-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-gradient-premium leading-tight mb-5">
              Start with the service that matches your question.
            </h2>
            <p className="premium-copy mb-8">The knowledge base connects directly to the same services used on real projects.</p>
            <button onClick={goQuote} className="btn-glow px-6 py-3 rounded-lg text-sm font-bold text-text-primary cursor-pointer">
              <span className="flex items-center gap-2">Request guidance <ArrowRight size={16} /></span>
            </button>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.slice(0, 4).map((service, idx) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={idx * 0.06}>
                  <BentoPanel>
                    <Icon size={22} className="text-accent-cyan mb-5" />
                    <h3 className="font-heading text-xl font-bold mb-2">{service.title}</h3>
                    <p className="premium-copy text-sm">{service.desc}</p>
                  </BentoPanel>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
