import { useMemo, useState } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '../../content/layerCraftContent';
import Reveal from '../ui/Reveal';
import CTASection from '../CTASection';
import rapidPrototypingCover from '../../assets/blog/rapid-prototyping-cover.png';
import scanToCncCover from '../../assets/blog/scan-to-cnc-cover.png';
import quotePreparationCover from '../../assets/blog/quote-preparation-cover.png';

const FILTERS = [
  'All',
  'Rapid Prototyping',
  'Custom 3D Printing',
  'Scale Models',
  '3D Designing & Sculpting',
  '3D Scanning',
  'CNC Machining',
  'Injection Molding',
  'Laser Cutting & Engraving',
];
const BLOG_IMAGES = [rapidPrototypingCover, scanToCncCover, quotePreparationCover];

export default function BlogsPage({ setCurrentPage }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const visiblePosts = useMemo(
    () => blogPosts.filter((post) => activeFilter === 'All' || post.category === activeFilter),
    [activeFilter],
  );

  return (
    <div className="bg-bg-primary text-text-primary pt-40 sm:pt-44">
      <section className="relative pb-20 px-6 premium-section overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-3xl mb-12">
            <span className="section-kicker mb-4">Latest Articles</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-gradient-premium leading-tight">
              Stay Updated with Blogs
            </h2>
          </Reveal>

          <Reveal delay={0.05} className="mb-10">
            <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter blog posts">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-lg px-4 py-2.5 text-sm font-bold transition-all cursor-pointer border ${
                    activeFilter === filter
                      ? 'border-accent-cyan/50 bg-accent-cyan/10 text-accent-cyan shadow-[0_0_16px_rgba(230,57,70,0.1)]'
                      : 'border-border-color bg-bg-secondary text-text-secondary hover:border-accent-cyan/30 hover:text-text-primary'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePosts.map((post, idx) => {
              const index = blogPosts.indexOf(post);
              return (
              <Reveal key={post.title} delay={idx * 0.08}>
                <article className="premium-card rounded-2xl overflow-hidden h-full min-h-[390px] flex flex-col transition-all duration-500">
                  <img src={BLOG_IMAGES[index]} alt="" className="w-full h-52 object-cover" />
                  <div className="p-7 sm:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-text-muted mb-6">
                    <span className="text-accent-cyan">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-text-muted"></span>
                    <Clock size={13} />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-extrabold text-text-primary leading-tight mb-4">{post.title}</h3>
                  <p className="premium-copy">{post.excerpt}</p>
                  <span className="mt-auto pt-7 inline-flex items-center gap-2 text-sm font-bold text-accent-cyan">Read article <ArrowRight size={15} /></span>
                  </div>
                </article>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <CTASection setCurrentPage={setCurrentPage} />
    </div>
  );
}
