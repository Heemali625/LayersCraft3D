import {
  Activity,
  Box,
  Car,
  CheckCircle2,
  Compass,
  Cpu,
  Fan,
  Flame,
  Gem,
  HelpCircle,
  Layers,
  Leaf,
  PenTool,
  Rocket,
  Scan,
  Settings,
  Smartphone,
  Timer,
  Truck,
  Zap,
} from 'lucide-react';

export const services = [
  {
    title: 'Rapid Prototyping',
    desc: 'Functional prototypes built in less time with advanced 3D printing for faster product development.',
    detail: 'Best for founders and engineering teams who need to validate fit, form, strength, or presentation quality before investing in production.',
    icon: Zap,
  },
  {
    title: 'Custom 3D Printing',
    desc: 'Unique, high-quality parts and products created to match the original idea closely.',
    detail: 'From one-off parts to short production runs, we help select materials, print settings, and finishes around the intended use.',
    icon: Layers,
  },
  {
    title: 'Scale Models',
    desc: 'Accurate scale models for presentations, planning, real-world visualization, and approvals.',
    detail: 'Useful for architects, product teams, educators, and planners who need a physical model that communicates clearly.',
    icon: Box,
  },
  {
    title: '3D Designing & Sculpting',
    desc: 'Ideas transformed into detailed digital designs ready for printing and production.',
    detail: 'Share sketches, references, or rough concepts and we help turn them into manufacturable 3D files.',
    icon: PenTool,
  },
  {
    title: '3D Scanning',
    desc: 'Real objects captured into precise digital models for redesign, replication, and improvements.',
    detail: 'Ideal when a physical part exists but usable CAD files are missing or outdated.',
    icon: Scan,
  },
  {
    title: 'CNC Machining',
    desc: 'Strong, high-precision parts produced for reliable real-world performance.',
    detail: 'Used when parts require tighter tolerance, durable materials, or a machining-led finish.',
    icon: Settings,
  },
];

export const industries = [
  { name: 'Aerospace & Defense', icon: Rocket },
  { name: 'Automotive', icon: Car },
  { name: 'Bioprinting', icon: Activity },
  { name: 'Carbon Capture', icon: Leaf },
  { name: 'Consumer Technology', icon: Smartphone },
  { name: 'Foundries', icon: Flame },
  { name: 'Jewelry', icon: Gem },
  { name: 'Medical & Dental', icon: Activity },
  { name: 'Motorsports', icon: Timer },
  { name: 'Semiconductor', icon: Cpu },
  { name: 'Truck, Bus & Rail', icon: Truck },
  { name: 'Turbomachinery', icon: Fan },
];

export const workflow = [
  {
    num: '01',
    title: 'Consultation & Concept Design',
    desc: 'You share the idea, problem, reference, sketch, or file. The team understands the requirement and prepares the design direction.',
    icon: HelpCircle,
  },
  {
    num: '02',
    title: 'Prototyping & 3D Printing',
    desc: 'The product moves into functional prototyping using the right 3D printing process, material, and build strategy.',
    icon: Layers,
  },
  {
    num: '03',
    title: 'Quality Check & Delivery',
    desc: 'The part is tested, refined, finished, and delivered so it is ready for review, presentation, or use.',
    icon: CheckCircle2,
  },
];

export const proofPoints = [
  { value: '50+', label: 'Taken Projects' },
  { value: '30+', label: 'Satisfied Clients' },
  { value: '95%', label: 'Success Rate' },
  { value: '3+', label: 'Years of Experience' },
];

export const blogPosts = [
  {
    title: 'How rapid prototyping reduces product-development risk',
    category: 'Product Development',
    readTime: '6 min read',
    excerpt: 'A practical look at using prototypes to test form, fit, and function before production decisions get expensive.',
  },
  {
    title: 'Choosing between 3D printing, scanning, and CNC machining',
    category: 'Manufacturing Guide',
    readTime: '7 min read',
    excerpt: 'When each process makes sense, what files you need, and how to choose a build path for your product.',
  },
  {
    title: 'What to prepare before requesting a 3D printing quote',
    category: 'Quick Quote',
    readTime: '4 min read',
    excerpt: 'The files, dimensions, materials, and use-case details that help teams estimate faster and more accurately.',
  },
];

export const caseStudies = [
  {
    title: 'Functional automotive intake prototype',
    sector: 'Automotive & Motorsports',
    result: 'Delivered a heat-aware prototype for under-the-hood validation.',
    challenge: 'The team needed a physical intake concept quickly enough for design review and track testing decisions.',
    approach: 'Material selection, print orientation, and post-processing were planned around temperature exposure and structural rigidity.',
  },
  {
    title: 'Presentation-ready architectural scale model',
    sector: 'Scale Models & Planning',
    result: 'Created a detailed model for stakeholder presentations and spatial review.',
    challenge: 'The model had to communicate proportions, surfaces, and planning intent without becoming fragile.',
    approach: 'The build was separated into printable assemblies, finished cleanly, and optimized for handling during review.',
  },
  {
    title: 'Digital recovery through 3D scanning',
    sector: 'Product Redesign',
    result: 'Converted an existing physical object into a usable digital reference.',
    challenge: 'No clean CAD file was available, but the physical part needed replication and improvement.',
    approach: 'Scanning created the digital foundation for cleanup, redesign, and future production planning.',
  },
];

export const brandPillars = [
  {
    title: 'All-in-One Solution',
    desc: 'Concept to Product Creators handling idea, design, prototyping, and final delivery.',
    icon: Compass,
  },
  {
    title: 'Faster Innovation',
    desc: 'Advanced 3D printing and optimized production processes help prototypes move quickly.',
    icon: Timer,
  },
  {
    title: 'Practical Engineering',
    desc: 'Design choices stay grounded in use case, material behavior, quality, and delivery realities.',
    icon: Settings,
  },
];
