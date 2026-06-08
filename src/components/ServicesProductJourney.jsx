import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, CheckCircle2, Sparkles
} from 'lucide-react';
import { cn } from '../utils/cn';

const services = [
  {
    id: 'design', step: '01', title: '3D Design & Sculpting',
    tagline: 'From concept sketches to production-ready CAD',
    description: 'We transform rough ideas, reference images, or functional requirements into precise digital models. Whether you need organic sculpting for ergonomic products or parametric CAD for engineering-grade parts, our models are built for manufacturing from the start.',
    applications: ['Product design & industrial design', 'Organic sculpting for consumer goods', 'Parametric CAD for mechanical parts', 'Architectural visualization models'],
    deliverables: ['Native CAD files (STEP, STP, IGES)', 'STL/OBJ for 3D printing', '2D technical drawings with tolerances', 'Render-ready surface models'],
    useCase: 'A medical device startup needed a handheld enclosure redesigned for better ergonomics. We sculpted the organic form, generated the CAD model, and delivered print-ready files — all before the first prototype run.',
  },
  {
    id: 'scanning', step: '02', title: '3D Scanning',
    tagline: 'Precision digital capture for real-world parts',
    description: 'When existing CAD files are missing, outdated, or never existed, we capture physical objects with sub-millimeter accuracy. Our scanning pipeline handles everything from small intricate components to large assemblies — producing clean, usable digital models.',
    applications: ['Reverse engineering legacy parts', 'Quality inspection & dimensional analysis', 'Digital archiving of physical assets', 'Fitment analysis for aftermarket parts'],
    deliverables: ['High-resolution STL mesh files', 'NURBS surface models (STEP/IGES)', 'Comparison reports vs. original CAD', 'Cleaned, watertight scan data'],
    useCase: 'An automotive shop needed to reproduce a discontinued bracket. We scanned the original part, rebuilt the CAD model with corrected tolerances, and delivered production-ready files — no original drawings required.',
  },
  {
    id: 'prototyping', step: '03', title: 'Rapid Prototyping',
    tagline: 'Functional prototypes in days, not weeks',
    description: 'Validate fit, form, and function before committing to tooling. We use FDM, SLA, and SLS technologies to produce durable prototypes that feel like production parts. Iterate quickly, test aggressively, and move forward with confidence.',
    applications: ['Functional testing & proof of concept', 'Form-fit validation for assemblies', 'Marketing samples & investor demos', 'Jigs, fixtures & shop-floor aids'],
    deliverables: ['Functional prototype with production materials', 'Multiple iterations per design cycle', 'Post-processed finishes (sanding, painting)', 'Assembly-ready tested parts'],
    useCase: 'An engineering team needed 10 enclosure iterations in 2 weeks for a consumer electronics launch. We delivered each revision within 48 hours, allowing them to validate fit, button placement, and thermal performance before production.',
  },
  {
    id: 'printing', step: '04', title: 'Custom 3D Printing',
    tagline: 'Tailored production for parts that matter',
    description: 'From one-off specialty parts to short production runs, we match the right material, print technology, and finishing process to your specific use case. Our material library covers engineering-grade thermoplastics, resins, and composites.',
    applications: ['Low-volume production parts', 'Custom tooling & manufacturing aids', 'End-use consumer products', 'Replacement parts & spares'],
    deliverables: ['Production-grade finished parts', 'Material selection guidance (data sheet)', 'Post-processing (vapor smoothing, dyeing)', 'Dimensional inspection report'],
    useCase: 'A robotics company needed 50 durable gear housings for a pilot run. We selected a carbon-fiber reinforced nylon, printed with optimized orientation for strength, and delivered machined-flat mating surfaces — ready for assembly.',
  },
  {
    id: 'scalemodels', step: '05', title: 'Scale Models',
    tagline: 'Presentation-quality models that communicate clearly',
    description: 'Architects, product teams, and planners use our scale models for stakeholder presentations, spatial planning, and design reviews. Every model is built to exact scale with attention to surface finish, dimensional accuracy, and visual presentation.',
    applications: ['Architectural site models & master plans', 'Product concept presentation models', 'Museum exhibits & educational displays', 'Urban planning & landscape visualization'],
    deliverables: ['Precision-scaled physical models', 'Painted & finished presentation surfaces', 'Modular assemblies for transport', 'Custom base plates & display stands'],
    useCase: 'An architecture firm needed a 1:200 scale model of a mixed-use development for a city planning review. We fabricated the massing model with accurate facade details, painted to match the renderings, and delivered it on a laser-cut base — ready for the presentation.',
  },
  {
    id: 'cnc', step: '06', title: 'CNC Machining',
    tagline: 'Subtractive precision for demanding applications',
    description: 'When parts require tighter tolerances, structural metals, or a machined finish that additive alone cannot achieve, our CNC capabilities deliver. We support 3-axis and 5-axis machining for prototypes, tooling, and production components.',
    applications: ['High-tolerance mechanical components', 'Metal parts & structural brackets', 'Injection mold tooling & inserts', 'Fixtures, jigs & production aids'],
    deliverables: ['Machined parts (aluminum, steel, plastics)', 'Tolerance report & inspection data', 'Surface finishing (anodizing, bead blast)', 'Threaded inserts & hardware installed'],
    useCase: 'A motorsport team needed lightweight aluminum uprights with tight bearing tolerances. We 5-axis machined the components from 7075 aluminum, verified critical dimensions with CMM inspection, and delivered ready-to-install parts within the race schedule.',
  },
];

const Illustrations = {
  '01': (
    <svg viewBox="0 0 260 200" className="w-full h-full" fill="none">
      <rect x="0" y="0" width="260" height="200" rx="8" fill="#0d0e12" />
      <rect x="0" y="0" width="260" height="200" rx="8" stroke="#06b6d4" strokeWidth="0.15" strokeOpacity="0.2" />
      {[...Array(9)].map((_, i) => <line key={`h${i}`} x1="0" y1={20+20*i} x2="260" y2={20+20*i} stroke="#06b6d4" strokeWidth="0.08" strokeOpacity="0.12" />)}
      {[...Array(12)].map((_, i) => <line key={`v${i}`} x1={20+20*i} y1="0" x2={20+20*i} y2="200" stroke="#06b6d4" strokeWidth="0.08" strokeOpacity="0.12" />)}
      <path d="M80 140 L80 70 L130 45 L180 70 L180 140 L130 165 Z" stroke="#06b6d4" strokeWidth="1.2" strokeOpacity="0.3" fill="#06b6d4" fillOpacity="0.04" />
      <path d="M80 70 L130 95 L180 70" stroke="#06b6d4" strokeWidth="0.6" strokeOpacity="0.2" fill="none" />
      <path d="M130 45 L130 95" stroke="#06b6d4" strokeWidth="0.6" strokeOpacity="0.2" fill="none" />
      <line x1="45" y1="140" x2="75" y2="140" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.4" />
      <line x1="45" y1="70" x2="45" y2="140" stroke="#3b82f6" strokeWidth="0.3" strokeOpacity="0.2" />
      <line x1="40" y1="70" x2="50" y2="70" stroke="#3b82f6" strokeWidth="0.4" strokeOpacity="0.3" />
      <line x1="40" y1="140" x2="50" y2="140" stroke="#3b82f6" strokeWidth="0.4" strokeOpacity="0.3" />
      <text x="42" y="108" fill="#3b82f6" fontSize="6" opacity="0.4" transform="rotate(-90 42 108)">70mm</text>
      <circle cx="160" cy="55" r="8" stroke="#f59e0b" strokeWidth="0.4" strokeOpacity="0.3" fill="none" />
      <line x1="168" y1="55" x2="180" y2="45" stroke="#f59e0b" strokeWidth="0.3" strokeOpacity="0.2" />
      <text x="181" y="47" fill="#f59e0b" fontSize="5" opacity="0.35">R8</text>
    </svg>
  ),
  '02': (
    <svg viewBox="0 0 260 200" className="w-full h-full" fill="none">
      <rect x="0" y="0" width="260" height="200" rx="8" fill="#0d0e12" />
      <rect x="0" y="0" width="260" height="200" rx="8" stroke="#3b82f6" strokeWidth="0.15" strokeOpacity="0.2" />
      <circle cx="130" cy="95" r="50" stroke="#3b82f6" strokeWidth="0.6" strokeOpacity="0.2" fill="#3b82f6" fillOpacity="0.02" />
      <circle cx="130" cy="95" r="35" stroke="#3b82f6" strokeWidth="0.4" strokeOpacity="0.15" fill="none" />
      <circle cx="130" cy="95" r="20" stroke="#3b82f6" strokeWidth="0.3" strokeOpacity="0.12" fill="none" />
      <line x1="130" y1="40" x2="130" y2="150" stroke="#3b82f6" strokeWidth="0.3" strokeOpacity="0.15" />
      <line x1="75" y1="95" x2="185" y2="95" stroke="#3b82f6" strokeWidth="0.3" strokeOpacity="0.15" />
      {[
        [95,72],[108,68],[120,75],[135,65],[148,70],[160,78],
        [102,82],[115,88],[140,85],[155,90],[98,98],[112,105],
        [125,110],[142,108],[158,102],[88,90],[168,85],[130,55],[130,130]
      ].map(([cx,cy],i) => <circle key={i} cx={cx} cy={cy} r={1+(i%2===0?0.4:0)} fill="#3b82f6" fillOpacity={0.3+Math.random()*0.2} />)}
      <rect x="110" y="20" width="40" height="16" rx="3" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.3" fill="#3b82f6" fillOpacity="0.04" />
      <rect x="118" y="24" width="24" height="8" rx="2" fill="#3b82f6" fillOpacity="0.08" />
      <circle cx="130" cy="28" r="2" fill="#3b82f6" fillOpacity="0.2" />
      <path d="M80 150 L85 125 L105 115 L130 120 L155 115 L175 125 L180 150" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.2" fill="none" strokeDasharray="2 3" />
      <rect x="60" y="170" width="140" height="14" rx="2" stroke="#3b82f6" strokeWidth="0.2" strokeOpacity="0.15" fill="#3b82f6" fillOpacity="0.03" />
      <text x="75" y="180" fill="#3b82f6" fontSize="5" opacity="0.35">POINT CLOUD  •  84,291 VERTICES  •  0.04mm RES</text>
    </svg>
  ),
  '03': (
    <svg viewBox="0 0 260 200" className="w-full h-full" fill="none">
      <rect x="0" y="0" width="260" height="200" rx="8" fill="#0d0e12" />
      <rect x="0" y="0" width="260" height="200" rx="8" stroke="#a855f7" strokeWidth="0.15" strokeOpacity="0.2" />
      {[...Array(15)].map((_, i) => (
        <rect key={i} x={85+i*0.2} y={140-i*6} width={90-i*3} height="4" rx="1" fill="#a855f7" fillOpacity={0.2+i*0.02} />
      ))}
      <polygon points="125,32 135,32 133,48 127,48" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="0.4" strokeOpacity="0.3" />
      <rect x="122" y="26" width="16" height="6" rx="1.5" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="0.3" strokeOpacity="0.25" />
      <line x1="130" y1="18" x2="130" y2="26" stroke="#f59e0b" strokeWidth="0.6" strokeOpacity="0.3" />
      <circle cx="130" cy="18" r="1.5" fill="#f59e0b" fillOpacity="0.25" />
      <rect x="70" y="146" width="120" height="3" rx="1" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeWidth="0.2" strokeOpacity="0.15" />
      <rect x="165" y="50" width="50" height="18" rx="3" stroke="#a855f7" strokeWidth="0.2" strokeOpacity="0.15" fill="#a855f7" fillOpacity="0.03" />
      <text x="175" y="62" fill="#a855f7" fontSize="7" opacity="0.35">LAYER 87%</text>
      <rect x="165" y="75" width="50" height="18" rx="3" stroke="#f59e0b" strokeWidth="0.2" strokeOpacity="0.15" fill="#f59e0b" fillOpacity="0.03" />
      <text x="173" y="87" fill="#f59e0b" fontSize="6" opacity="0.35">220°C HOTEND</text>
      <rect x="165" y="100" width="50" height="18" rx="3" stroke="#f59e0b" strokeWidth="0.2" strokeOpacity="0.15" fill="#f59e0b" fillOpacity="0.03" />
      <text x="173" y="112" fill="#f59e0b" fontSize="6" opacity="0.35">65°C BED</text>
    </svg>
  ),
  '04': (
    <svg viewBox="0 0 260 200" className="w-full h-full" fill="none">
      <rect x="0" y="0" width="260" height="200" rx="8" fill="#0d0e12" />
      <rect x="0" y="0" width="260" height="200" rx="8" stroke="#f59e0b" strokeWidth="0.15" strokeOpacity="0.2" />
      {[
        {x:20,c:'#f59e0b',t:'ABS-M30',d:'Tensile: 36 MPa|HDT: 96°C|Elong: 4%'},
        {x:97,c:'#10b981',t:'PA12 CF',d:'Tensile: 72 MPa|HDT: 145°C|Elong: 1.5%'},
        {x:174,c:'#06b6d4',t:'Resin Tough',d:'Tensile: 58 MPa|HDT: 82°C|Elong: 12%'},
      ].map((m,i) => (
        <g key={i}>
          <rect x={m.x} y="30" width="65" height="85" rx="4" stroke={m.c} strokeWidth="0.3" strokeOpacity="0.2" fill={m.c} fillOpacity="0.03" />
          <rect x={m.x+8} y="38" width="49" height="20" rx="2" fill={m.c} fillOpacity="0.08" />
          <text x={m.x+14} y="52" fill={m.c} fontSize="5" opacity="0.5">{m.t}</text>
          <rect x={m.x+8} y="63" width="49" height="2" rx="1" fill={m.c} fillOpacity="0.08" />
          {m.d.split('|').map((l,li) => <text key={li} x={m.x+10} y={76+li*8} fill={m.c} fontSize="4" opacity="0.3">{l}</text>)}
        </g>
      ))}
    </svg>
  ),
  '05': (
    <svg viewBox="0 0 260 200" className="w-full h-full" fill="none">
      <rect x="0" y="0" width="260" height="200" rx="8" fill="#0d0e12" />
      <rect x="0" y="0" width="260" height="200" rx="8" stroke="#10b981" strokeWidth="0.15" strokeOpacity="0.2" />
      <line x1="30" y1="170" x2="230" y2="170" stroke="#10b981" strokeWidth="0.2" strokeOpacity="0.12" />
      <line x1="30" y1="175" x2="230" y2="175" stroke="#10b981" strokeWidth="0.2" strokeOpacity="0.08" />
      {[0,10,20,30,40,50].map((n,i) => (
        <g key={i}>
          <line x1={30+i*30} y1="170" x2={30+i*30} y2="175" stroke="#10b981" strokeWidth="0.2" strokeOpacity="0.08" />
          <text x={28+i*30} y="169" fill="#10b981" fontSize="4" opacity="0.2">{n}</text>
        </g>
      ))}
      <rect x="65" y="90" width="55" height="80" rx="1" fill="#10b981" fillOpacity="0.05" stroke="#10b981" strokeWidth="0.4" strokeOpacity="0.2" />
      {[[72,100],[92,100],[72,118],[92,118],[72,136],[92,136]].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width="14" height="14" rx="1" fill="#10b981" fillOpacity="0.06" stroke="#10b981" strokeWidth="0.2" strokeOpacity="0.15" />
      ))}
      <rect x="135" y="105" width="45" height="65" rx="1" fill="#10b981" fillOpacity="0.04" stroke="#10b981" strokeWidth="0.3" strokeOpacity="0.15" />
      {[[140,112],[155,112],[140,128],[155,128]].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width="10" height="10" rx="1" fill="#10b981" fillOpacity="0.05" stroke="#10b981" strokeWidth="0.15" strokeOpacity="0.12" />
      ))}
      <rect x="190" y="125" width="30" height="45" rx="1" fill="#10b981" fillOpacity="0.03" stroke="#10b981" strokeWidth="0.25" strokeOpacity="0.12" />
      <line x1="55" y1="50" x2="205" y2="50" stroke="#10b981" strokeWidth="0.3" strokeOpacity="0.15" />
      <text x="110" y="48" fill="#10b981" fontSize="5" opacity="0.3">WIDTH 150mm</text>
      <rect x="80" y="32" width="100" height="10" rx="2" fill="#10b981" fillOpacity="0.04" stroke="#10b981" strokeWidth="0.15" strokeOpacity="0.1" />
      <text x="92" y="40" fill="#10b981" fontSize="5" opacity="0.35">SCALE MODEL  •  1:200</text>
    </svg>
  ),
  '06': (
    <svg viewBox="0 0 260 200" className="w-full h-full" fill="none">
      <rect x="0" y="0" width="260" height="200" rx="8" fill="#0d0e12" />
      <rect x="0" y="0" width="260" height="200" rx="8" stroke="#06b6d4" strokeWidth="0.15" strokeOpacity="0.2" />
      <rect x="60" y="60" width="100" height="80" rx="2" fill="#06b6d4" fillOpacity="0.03" stroke="#06b6d4" strokeWidth="0.4" strokeOpacity="0.15" />
      <path d="M70 100 L80 85 L95 92 L110 70 L125 88 L140 78 L150 95" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.25" fill="none" />
      {[[70,100],[80,85],[95,92],[110,70],[125,88],[140,78],[150,95]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill="#06b6d4" fillOpacity="0.3" />
      ))}
      <rect x="100" y="20" width="30" height="20" rx="2" fill="#06b6d4" fillOpacity="0.08" stroke="#06b6d4" strokeWidth="0.3" strokeOpacity="0.2" />
      <rect x="110" y="40" width="10" height="15" rx="1" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeWidth="0.25" strokeOpacity="0.2" />
      <path d="M112 58 L110 68 L120 68 L118 58 Z" fill="#a855f7" fillOpacity="0.12" stroke="#a855f7" strokeWidth="0.2" strokeOpacity="0.2" />
      <rect x="170" y="35" width="65" height="65" rx="3" stroke="#06b6d4" strokeWidth="0.15" strokeOpacity="0.12" fill="#06b6d4" fillOpacity="0.02" />
      <text x="178" y="48" fill="#06b6d4" fontSize="4" opacity="0.3">SPINDLE</text>
      <text x="178" y="56" fill="#06b6d4" fontSize="5" opacity="0.45">15,000 RPM</text>
      <text x="178" y="74" fill="#06b6d4" fontSize="5" opacity="0.45">2,400 mm/min</text>
      <text x="178" y="92" fill="#06b6d4" fontSize="5" opacity="0.45">±0.02mm</text>
      <rect x="60" y="170" width="140" height="10" rx="2" stroke="#06b6d4" strokeWidth="0.15" strokeOpacity="0.1" fill="none" />
      <text x="72" y="178" fill="#06b6d4" fontSize="4" opacity="0.25">TOOL:  D6 CARBIDE  •  3-AXIS  •  AL 7075</text>
    </svg>
  ),
};

export default function ServicesProductJourney({ setCurrentPage }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCTA = () => {
    const serviceName = active.title;
    window.history.pushState({}, '', `/quick-quote?service=${encodeURIComponent(serviceName)}`);
    setCurrentPage('quick-quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const active = services[activeIndex];

  return (
    <section className="relative py-14 px-6 premium-section overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">

          {/* LEFT: Content Panel */}
          <div className="lg:w-[45%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -18, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: 18, filter: 'blur(4px)' }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-full aspect-[13/10] rounded-xl bg-bg-secondary border border-border-color overflow-hidden mb-5">
                  {Illustrations[active.step]}
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-accent-cyan tracking-[0.18em] uppercase">Service {active.step} / 06</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-accent-cyan/20 to-transparent" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-primary mb-1 tracking-tight">{active.title}</h3>
                <p className="text-sm text-accent-cyan/80 font-medium mb-4">{active.tagline}</p>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">{active.description}</p>
                <div className="mb-5">
                  <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-[0.12em] mb-2.5">Applications</h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {active.applications.map((app, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan/40 flex-shrink-0 mt-1.5" />
                        <span className="text-[11px] text-text-secondary leading-snug">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-5">
                  <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-[0.12em] mb-2.5">Deliverables</h4>
                  <div className="flex flex-wrap gap-2">
                    {active.deliverables.map((del, i) => (
                      <span key={i} className="text-[10px] font-semibold px-2.5 py-1 rounded-md border border-border-color bg-bg-secondary/60 text-text-muted">{del}</span>
                    ))}
                  </div>
                </div>
                <div className="mb-5 p-4 rounded-xl bg-bg-secondary/40 border border-border-color/40">
                  <div className="flex items-start gap-2.5">
                    <Sparkles size={14} className="text-accent-cyan/60 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-bold text-accent-cyan/60 uppercase tracking-[0.1em] mb-1.5">Real-world use case</p>
                      <p className="text-[12px] text-text-secondary leading-relaxed">{active.useCase}</p>
                    </div>
                  </div>
                </div>
                <button onClick={handleCTA} className="group inline-flex items-center gap-1.5 text-xs font-bold text-accent-cyan hover:text-white transition-colors cursor-pointer">
                  Get a quote for this service
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Service Navigation */}
          <div className="lg:w-[55%]">
            <div className="flex flex-col">
              {services.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      'w-full text-left flex items-start gap-3 sm:gap-4 py-3 sm:py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 cursor-pointer border',
                      isActive
                        ? 'border-accent-cyan/20 bg-bg-secondary/70 shadow-[0_0_25px_rgba(6,182,212,0.06)]'
                        : 'border-transparent hover:bg-bg-secondary/20 hover:border-border-color/40'
                    )}
                  >
                    <div className="relative z-10 flex-shrink-0 mt-0.5">
                      <div className={cn(
                        'w-[30px] h-[30px] rounded-full flex items-center justify-center text-[10px] font-extrabold border transition-all duration-300',
                        isActive
                          ? 'border-accent-cyan bg-accent-cyan/15 text-accent-cyan'
                          : idx < activeIndex
                            ? 'border-accent-emerald/25 bg-accent-emerald/10 text-accent-emerald'
                            : 'border-border-color/50 bg-bg-primary text-text-muted/60'
                      )}>
                        {idx < activeIndex ? <CheckCircle2 size={14} /> : <span>{item.step}</span>}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4 className={cn('font-heading text-sm font-bold transition-colors', isActive ? 'text-text-primary' : 'text-text-secondary')}>
                          {item.title}
                        </h4>
                        {idx < activeIndex && (
                          <span className="text-[9px] text-accent-emerald font-semibold flex-shrink-0">Complete</span>
                        )}
                      </div>
                      <p className={cn('text-xs leading-relaxed truncate', isActive ? 'text-text-muted' : 'text-text-muted/40')}>
                        {item.tagline}
                      </p>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="activeBar"
                        className="w-0.5 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(6,182,212,0.4)] flex-shrink-0 self-stretch"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Footer: status | dots | CTA */}
            <div className="mt-5 pt-4 border-t border-border-color/30 flex items-center">
              {/* Status text */}
              <span className="text-[10px] text-text-muted flex-shrink-0">
                {activeIndex === services.length - 1
                  ? 'All services explored'
                  : `${services[activeIndex + 1]?.title} up next`}
              </span>

              {/* Dots — centered in available space */}
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-5">
                  {services.map((item, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveIndex(idx)}
                        className="relative flex items-center justify-center cursor-pointer"
                        style={{ width: '16px', height: '16px' }}
                        aria-label={item.title}
                      >
                        {isActive ? (
                          <motion.span
                            layoutId="navDot"
                            className="block rounded-full bg-accent-cyan shadow-[0_0_14px_rgba(6,182,212,0.7)]"
                            style={{ width: '11px', height: '11px' }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          />
                        ) : (
                          <span
                            className="block rounded-full bg-white/25 transition-all duration-300 hover:bg-white/45"
                            style={{ width: '7px', height: '7px' }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <button onClick={handleCTA} className="text-[10px] font-bold text-accent-cyan hover:text-white transition-colors cursor-pointer flex-shrink-0">
                Get a quote →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}