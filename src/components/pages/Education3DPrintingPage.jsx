import { ArrowDownRight, ArrowLeft, ArrowUpRight, Check, Clock3, Lightbulb, MoveUpRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import CTASection from '../CTASection';
import educationCover from '../../assets/blog/education-3d-printing-cover.png';

const benefits = [
  ['Interactive learning', 'Students understand complex concepts better by creating and handling physical models.'],
  ['Enhanced creativity', 'They can design products and test ideas without expensive manufacturing processes.'],
  ['Improved STEM & STEAM education', 'Project-based learning makes every core subject more engaging.'],
  ['Rapid prototyping skills', 'Students experience the complete product development cycle, from concept to prototype.'],
  ['Better collaboration', 'Team projects improve communication, innovation, and problem-solving skills.'],
  ['Career readiness', 'Learners build industry-standard technical skills before entering the workplace.'],
  ['Customized teaching materials', 'Teachers can create personalized learning materials for different subjects.'],
];

export default function Education3DPrintingPage({ setCurrentPage }) {
  return (
    <article className="education-story bg-bg-primary text-text-primary">
      <section className="education-story-hero">
        <div className="education-hero-image"><img src={educationCover} alt="Students exploring 3D printed models in a fabrication lab" /><div className="education-hero-shade" /></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 min-h-[760px] flex flex-col justify-between py-32 sm:py-40">
          <Reveal><button type="button" onClick={() => setCurrentPage('blogs')} className="education-back"><ArrowLeft size={16} /> Back to knowledge base</button></Reveal>
          <div className="education-hero-copy">
            <Reveal direction="left"><div className="education-meta"><span>Custom 3D Printing</span><i /> <Clock3 size={14} /> <span>8 min read</span></div><h1>Why the education system is adopting <em>3D printing</em> technology</h1></Reveal>
            <Reveal direction="right" delay={0.12} className="education-hero-note"><span>01 / 03</span><p>The classroom is becoming more tactile, collaborative, and future-ready—one printed layer at a time.</p><ArrowDownRight size={22} /></Reveal>
          </div>
        </div>
      </section>

      <div className="education-story-rail"><span>LAYERS CRAFT 3D</span><span>READING / 08 MIN</span></div>

      <section className="education-intro max-w-7xl mx-auto px-6 py-28 sm:py-40">
        <Reveal className="education-intro-mark"><span>THE SHIFT</span><MoveUpRight size={18} /></Reveal>
        <div className="education-intro-grid"><Reveal><p className="education-intro-lead">The old classroom asked students to read about ideas. The new classroom lets them hold, test, and improve those ideas.</p></Reveal><Reveal delay={0.1}><p>Biology students can experience the human heart as a 3D model. Engineering students can transform a digital design into a working prototype. Architecture students can present miniature building models.</p><p>That is why the education system is adopting 3D printing technology. At Layers Craft 3D, we make the process simple for curious students, teachers, and institutions.</p></Reveal></div>
        <Reveal className="education-pullquote"><Lightbulb size={20} /><p>In this guide, we’ll look at how 3D printing is transforming modern education—and why educational institutes are investing in it.</p></Reveal>
      </section>

      <section id="transformation" className="education-section education-section-dark"><div className="max-w-7xl mx-auto px-6"><div className="education-section-heading"><Reveal><span className="education-section-index">01</span><h2>How 3D printing is transforming <em>modern education</em></h2></Reveal><Reveal delay={0.1}><p>The demand for future-ready skills is always growing. With 3D printing, institutions can prepare students for careers in engineering, healthcare, manufacturing, architecture, robotics, product design, and many other fields.</p></Reveal></div><Reveal><h3>The biggest advantages</h3><div className="education-benefit-list">{benefits.map(([title, desc], idx) => <div className="education-benefit-row" key={title}><span>0{idx + 1}</span><h4>{title}</h4><p>{desc}</p><Check size={17} /></div>)}</div></Reveal><Reveal><p className="education-section-end">In 2026, many institutions have already integrated AI, robotics, and design software alongside 3D printing. This enables students to work on interdisciplinary projects that feel closer to the real world.</p></Reveal></div></section>

      <section id="investment" className="education-section education-section-light"><div className="max-w-7xl mx-auto px-6"><div className="education-section-heading"><Reveal><span className="education-section-index">02</span><h2>Why educational institutions are investing in <em>3D printing</em></h2></Reveal><Reveal delay={0.1}><p>By adopting 3D printing, institutions can go far beyond creating models. Students can take part in research, entrepreneurship, and practical problem-solving.</p></Reveal></div><div className="education-use-cases"><Reveal><span>Today, educational teams are using 3D printing to:</span></Reveal><Reveal delay={0.08}><ul>{['Build functional engineering prototypes.', 'Create medical and anatomical learning models.', 'Develop robotics components for competitions.', 'Produce architectural scale models.', 'Design customized educational tools.', 'Support research and innovation projects.', 'Encourage startup ideas and product development among students.'].map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></Reveal></div><Reveal className="education-wide-copy"><p>Many institutions are also establishing innovation labs and fabrication centers. Students gain experience in CAD, additive manufacturing, and product development—closing the gap between classroom theory and industry expectations.</p></Reveal></div></section>

      <section id="conclusion" className="education-conclusion"><div className="max-w-7xl mx-auto px-6"><Reveal><span className="education-section-index">03</span><h2>Great inventions start with a <em>simple idea.</em></h2><p>At Layers Craft 3D—the best 3D printing company in Hyderabad—we believe every institution deserves the opportunity to upgrade. We help institutes prepare their students for tomorrow’s world.</p><button type="button" onClick={() => setCurrentPage('contact')} className="education-action">Talk to our team <ArrowUpRight size={17} /></button></Reveal></div></section>
      <CTASection setCurrentPage={setCurrentPage} />
    </article>
  );
}
