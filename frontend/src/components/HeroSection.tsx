import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-banner.dim_1440x600.png"
          alt="Brainscribe Solutions hero background"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/70 to-primary/20" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/8 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Trusted Technology Partner
        </div>

        <h1 className="font-display font-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight tracking-tight mb-6">
          Empowering Businesses
          <br />
          <span className="text-primary">Through Technology</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/70 leading-relaxed mb-10">
          Brainscribe Solutions LLP delivers end-to-end technology services — from Microsoft
          platforms and cloud hosting to eLearning design and staffing — helping organisations
          innovate, scale, and succeed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary-dark transition-all duration-200 shadow-card hover:shadow-card-hover"
          >
            Start a Conversation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToServices}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/80 border border-border text-foreground font-semibold text-base hover:bg-white hover:border-primary/40 transition-all duration-200 shadow-xs"
          >
            Explore Services
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '200+', label: 'Projects Delivered' },
            { value: '50+', label: 'Enterprise Clients' },
            { value: '6', label: 'Core Services' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-5 border border-white/80 shadow-xs"
            >
              <div className="font-display font-700 text-2xl md:text-3xl text-primary">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-foreground/40 hover:text-primary transition-colors"
        aria-label="Scroll to services"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
