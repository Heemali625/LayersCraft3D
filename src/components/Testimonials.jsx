import Reveal from './ui/Reveal';

const TESTIMONIALS = [
  {
    quote: "The titanium bracket prototype print was flawless. They helped us achieve a 40% weight reduction while maintaining all structural parameters. Absolute game-changer.",
    name: "Rajesh Kumar",
    role: "Director of Engineering, AutoTech Dynamics",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "Their architectural model printing is highly precise. The integrated LED channels were clean and exactly as designed. Highly recommend them for presentation models.",
    name: "Ananya Sharma",
    role: "Lead Designer, Nest & Space Architects",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "Highly accurate dental aligners printed in medical resin. The precision of their prints is sub-micron, and turnaround is very fast.",
    name: "Dr. Sandeep Patel",
    role: "Orthodontic Surgeon, Smile Dental Care",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "We needed a nylon carbon fiber intake manifold printed for track testings. They delivered in 3 days. Under-the-hood heat resistance was excellent.",
    name: "Kunal Shah",
    role: "Co-Founder, Gearup Motorsports",
    avatar: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "They handled everything from initial concept CAD design, prototyping, to low-volume production. Their all-in-one execution is unmatched.",
    name: "Meera Nair",
    role: "Product Manager, Innovate Medical Devices",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "I can't imagine going back to other service bureaus. Their custom prototyping speed is incredibly fast, and pricing is highly affordable.",
    name: "Arjun Mehta",
    role: "Founder, IoT Wearables",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "The quality and customer support are outstanding. They walk you through material selection and optimize print layouts for the best durability.",
    name: "Sarah Thompson",
    role: "Operations Director, AeroFlight Systems",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "Fabulous detail on the resin molds for my gold jewelry line. Extremely smooth finish, saving me hours of hand polishing.",
    name: "Elena Rostova",
    role: "Jewelry Designer, Elena Designs",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80"
  }
];

const QuoteIcon = () => (
  <svg 
    className="absolute top-6 right-6 text-accent-cyan/10 w-8 h-8 pointer-events-none transition-colors duration-300 group-hover:text-accent-cyan/20" 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const TestimonialCard = ({ item }) => (
  <div className="premium-card rounded-2xl p-6 relative transition-all duration-500 group flex flex-col justify-between text-left hover:-translate-y-1.5">
    <QuoteIcon />
    <p className="text-sm sm:text-base text-text-primary leading-relaxed mb-6 font-medium relative z-10 pr-4">
      {item.quote}
    </p>
    <div className="flex items-center gap-3">
      <img 
        src={item.avatar} 
        alt={item.name} 
        className="w-10 h-10 rounded-full object-cover border border-border-color group-hover:border-accent-cyan/20 transition-colors"
      />
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-bold text-text-primary font-heading tracking-wide">
          {item.name}
        </span>
        <span className="text-[11px] text-text-secondary leading-none">
          {item.role}
        </span>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  // Distribute testimonials into 4 columns to create a clean masonry layout
  const col1 = [TESTIMONIALS[0], TESTIMONIALS[4]];
  const col2 = [TESTIMONIALS[1], TESTIMONIALS[5]];
  const col3 = [TESTIMONIALS[2], TESTIMONIALS[6]];
  const col4 = [TESTIMONIALS[3], TESTIMONIALS[7]];

  return (
    <section id="testimonials" className="relative py-24 px-6 bg-bg-primary z-10 transition-colors duration-300 premium-section overflow-hidden">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        
        {/* Header */}
        <Reveal as="span" className="section-kicker justify-center mb-4">
          Client Feedback
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-5 text-gradient-premium">
            What partners notice after the first build
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-base premium-copy max-w-[640px] mx-auto mb-16">
            Industrial teams and creators come for speed, then stay for the practical guidance, finish quality, and support through each iteration.
          </p>
        </Reveal>

        {/* Responsive Masonry Grid Stack */}
        <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start w-full" delay={0.22}>
          <div className="flex flex-col gap-6 w-full">
            {col1.map((item, idx) => (
              <TestimonialCard item={item} key={idx} />
            ))}
          </div>
          <div className="flex flex-col gap-6 w-full">
            {col2.map((item, idx) => (
              <TestimonialCard item={item} key={idx} />
            ))}
          </div>
          <div className="flex flex-col gap-6 w-full">
            {col3.map((item, idx) => (
              <TestimonialCard item={item} key={idx} />
            ))}
          </div>
          <div className="flex flex-col gap-6 w-full">
            {col4.map((item, idx) => (
              <TestimonialCard item={item} key={idx} />
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
