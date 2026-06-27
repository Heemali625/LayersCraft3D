import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../content/layerCraftContent';
import Reveal from './ui/Reveal';

export default function FAQSection({ title = 'Frequently Asked Questions', items = faqs }) {
  const [active, setActive] = useState(null);

  return (
    <section className="relative py-20 px-6 premium-section overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-10">
          <span className="section-kicker justify-center mb-4">FAQ</span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-gradient-premium leading-tight">
            {title}
          </h2>
        </Reveal>

        <div className="flex flex-col gap-4">
          {items.map((faq, idx) => (
            <Reveal key={faq.q} delay={idx * 0.04}>
              <div className={`bg-bg-secondary border rounded-2xl overflow-hidden transition-all duration-300 ${
                active === idx ? 'border-accent-cyan/30' : 'border-border-color hover:border-accent-cyan/30'
              }`}>
                <button
                  type="button"
                  className="w-full bg-transparent py-5 px-6 flex items-center justify-between gap-6 text-left cursor-pointer"
                  onClick={() => setActive(active === idx ? null : idx)}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-text-primary">{faq.q}</span>
                  <ChevronDown className={`text-text-secondary flex-shrink-0 transition-transform duration-300 ${
                    active === idx ? 'rotate-180 text-accent-cyan' : ''
                  }`} size={18} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: active === idx ? 'auto' : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 premium-copy text-sm sm:text-base">{faq.a}</p>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
