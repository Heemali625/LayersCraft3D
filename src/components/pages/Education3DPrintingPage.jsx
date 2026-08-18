import { ArrowLeft, ArrowUpRight, Box, Check, Clock3, GraduationCap } from 'lucide-react';
import Reveal from '../ui/Reveal';
import CTASection from '../CTASection';
import educationCover from '../../assets/blog/education-3d-printing-cover.png';

const benefits = [
  'Interactive Learning: Students understand complex concepts better by creating and handling physical models.',
  'Enhance Creativity: Will design products and test ideas without expensive manufacturing processes.',
  'Improved STEM & STEAM Education: With the help of project-based learning every core subject can become more engaging.',
  'Rapid Prototyping Skills: Students can involve in the complete product development cycle i.e., concept to prototype.',
  'Better Collaboration: Working with team projects will improvise communication, innovation, and problem-solving skills.',
  'Career Readiness: You can build the industry-standards technical skills before entering the job.',
  'Customized Teaching Materials: Teachers can create personalized learning materials for different core subjects.',
];

const institutionUses = [
  'Build functional engineering prototypes.',
  'Create medical and anatomical learning models.',
  'Develop robotics components for competitions.',
  'Produce architectural scale models.',
  'Design customized educational tools.',
  'Support research and innovation projects.',
  'Encourage startup ideas and product development among students.',
];

export default function Education3DPrintingPage({ setCurrentPage }) {
  return (
    <article className="education-story bg-bg-primary text-text-primary">
      <section className="education-story-hero">
        <div className="education-hero-image"><img src={educationCover} alt="Students exploring 3D printed models in a fabrication lab" /><div className="education-hero-shade" /></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 min-h-[760px] flex flex-col justify-between py-32 sm:py-40">
          <Reveal><button type="button" onClick={() => setCurrentPage('blogs')} className="education-back"><ArrowLeft size={16} /> Back to knowledge base</button></Reveal>
          <Reveal direction="left"><div className="education-meta"><span>Custom 3D Printing</span><i /><Clock3 size={14} /><span>8 min read</span></div><h1>Why the Education System Is Adopting <em>3D Printing Technology?</em></h1></Reveal>
        </div>
      </section>

      <div className="education-story-rail"><span>LAYERS CRAFT 3D</span><span>READING / 08 MIN</span></div>

      <section className="education-intro max-w-7xl mx-auto px-6 py-28 sm:py-40">
        <Reveal className="education-intro-mark"><span>THE ARTICLE</span></Reveal>
        <div className="education-intro-grid">
          <Reveal><p>When you go back to the old days, there were students who used to READ only. Now, they have transformed their learning by using a detailed 3D-printed model. The biology students can experience the human heart in a 3D model. Where engineering students are transforming a digital design into a working prototype. When it comes to architecture students, they are presenting miniature building models.</p></Reveal>
          <Reveal delay={0.1}><p>I think now you have got to know &quot;Why is the education system adopting 3D printing technology?&quot;. At Layers Craft 3D, we are making this 3D printing process very simple for your students who are curious to learn. Here, we will give you a simple explanation of:</p><p>How 3D Printing is Transforming Modern Education?</p><p>Why Educational institutes are investing in 3D printing technology?</p><p>After reading, you will get the main reasons for implementing 3D printing technology in classrooms, laboratories, and innovation centers.</p></Reveal>
        </div>
      </section>

      <section id="transformation" className="education-section education-section-dark"><div className="max-w-7xl mx-auto px-6"><div className="education-section-heading"><Reveal><span className="education-section-index">01</span><h2>How 3D Printing Is Transforming <em>Modern Education?</em></h2></Reveal><Reveal delay={0.1}><p>The demand for future-ready skills is always higher. Companies are trying to find specialists. Who has the ability to use critical thinking and knowledge of modern technology. With this technology, institutions are preparing students for the careers they are interested. Like., engineering, healthcare, manufacturing, architecture, robotics, product design, and many other fields.</p></Reveal></div><Reveal><h3>The biggest advantages include:</h3><div className="education-benefit-list">{benefits.map((benefit, idx) => { const [title, ...rest] = benefit.split(': '); return <div className="education-benefit-row" key={benefit}><span>0{idx + 1}</span><h4>{title}:</h4><p>{rest.join(': ')}</p><Check size={17} /></div>; })}</div></Reveal><Reveal><p className="education-section-end">In 2026, many of the institutions have already integrated AI, robotics, and design software alongside 3D printing. This will enable students to work on interdisciplinary projects.</p></Reveal></div></section>

      <section id="investment" className="education-section education-section-light"><div className="max-w-7xl mx-auto px-6"><div className="education-section-heading"><Reveal><span className="education-section-index">02</span><h2>Why Educational Institutions Are Investing in <em>3D Printing Technology?</em></h2></Reveal><Reveal delay={0.1}><p>By adopting 3D printing you can go far beyond creating models. One can involve in research, entrepreneurship, and practical thinking.</p></Reveal></div><div className="education-use-cases"><Reveal><span>Today, majority of the institutions are using 3D printing to:</span></Reveal><Reveal delay={0.08}><ul>{institutionUses.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></Reveal></div><Reveal className="education-wide-copy"><p>Almost every institutions are also establishing innovation labs and fabrication centers. By these students can gain experience in CAD, additive manufacturing, and product development. These facilities will remove the gap between classroom theory and industry expectations. Thus, makes the graduates more confident and job-ready.</p></Reveal></div></section>

      <section id="conclusion" className="education-conclusion"><div className="max-w-7xl mx-auto px-6 education-conclusion-grid"><Reveal><span className="education-section-index">03</span><h2>Conclusion: <em>Great inventions starts with a simple idea.</em></h2><p>At Layers Craft 3D - the best 3D printing company in Hyderabad, we believe every institution deserves the opportunity to upgrade. For each and every institute, we help to prepare their students for tomorrow&apos;s world. Together, let&apos;s build classrooms that become reality.</p><button type="button" onClick={() => setCurrentPage('contact')} className="education-action">Talk to our team <ArrowUpRight size={17} /></button></Reveal><Reveal direction="right" delay={0.12}><div className="education-conclusion-visual" aria-hidden="true"><div className="education-visual-orbit education-visual-orbit-one" /><div className="education-visual-orbit education-visual-orbit-two" /><GraduationCap className="education-cap-icon" strokeWidth={1.1} /><Box className="education-box-icon" strokeWidth={1.1} /><span>IDEA <i /> REALITY</span></div></Reveal></div></section>
      <CTASection setCurrentPage={setCurrentPage} />
    </article>
  );
}
