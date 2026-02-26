import { CheckCircle2, Target, Lightbulb, Handshake } from 'lucide-react';

const pillars = [
  {
    icon: <Target size={20} />,
    title: 'Our Mission',
    description:
      'To empower organisations with innovative technology solutions that drive measurable business outcomes and sustainable growth.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'Our Expertise',
    description:
      'Deep domain knowledge across Microsoft technologies, cloud platforms, eLearning, and digital experience design — all under one roof.',
  },
  {
    icon: <Handshake size={20} />,
    title: 'Our Commitment',
    description:
      'We build long-term partnerships grounded in transparency, quality, and a relentless focus on client success at every engagement.',
  },
];

const highlights = [
  'ISO-aligned delivery processes',
  'Certified Microsoft & AWS professionals',
  'Agile and iterative project methodology',
  'Dedicated client success management',
  'Scalable engagement models',
  'Pan-India and global delivery capability',
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              About Us
            </div>
            <h2 className="font-display font-700 text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Technology That Moves
              <br />
              <span className="text-primary">Business Forward</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Brainscribe Solutions LLP is a technology services company dedicated to helping
              businesses harness the full potential of modern digital platforms. Founded on the
              belief that technology should be an enabler — not a barrier — we bring together
              certified experts, proven methodologies, and a passion for innovation to deliver
              solutions that truly make a difference.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              From enterprise Microsoft deployments and cloud infrastructure to bespoke eLearning
              programmes and talent solutions, our multidisciplinary team works as an extension of
              your organisation. We listen, we collaborate, and we deliver — on time and within
              budget.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <CheckCircle2
                    size={17}
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Pillars */}
          <div className="flex flex-col gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex gap-5 p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-display font-600 text-base text-foreground mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA card */}
            <div className="mt-2 p-6 rounded-2xl bg-primary text-primary-foreground">
              <p className="font-display font-600 text-lg mb-2">
                Ready to transform your business?
              </p>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Let's discuss how Brainscribe Solutions can accelerate your digital journey.
              </p>
              <button
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-primary font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
