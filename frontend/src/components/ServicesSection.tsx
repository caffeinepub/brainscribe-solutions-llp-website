import {
  Monitor,
  BookOpen,
  Users,
  Layers,
  Cloud,
  Palette,
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
}

const services: Service[] = [
  {
    icon: <Monitor size={28} />,
    title: 'Microsoft Technologies',
    tag: 'Microsoft',
    description:
      'We design, develop, and deploy solutions across the full Microsoft stack — including SharePoint, Dynamics 365, Power Platform, and .NET. Our certified experts help you maximise your Microsoft investment and drive digital transformation.',
  },
  {
    icon: <BookOpen size={28} />,
    title: 'Moodle LMS',
    tag: 'Learning',
    description:
      'From installation and customisation to plugin development and ongoing support, we deliver tailored Moodle LMS solutions for educational institutions and corporate training programmes. We ensure your platform is scalable, secure, and engaging.',
  },
  {
    icon: <Users size={28} />,
    title: 'Staffing Solutions',
    tag: 'Staffing',
    description:
      'Access top-tier technology talent on demand. We provide contract, permanent, and managed staffing services across IT, eLearning, and digital domains — connecting you with skilled professionals who hit the ground running.',
  },
  {
    icon: <Layers size={28} />,
    title: 'XDT (Experience Design & Technology)',
    tag: 'XDT',
    description:
      'We blend user experience design with cutting-edge technology to create intuitive digital products. Our XDT practice covers UX research, interaction design, and front-end engineering to deliver experiences that delight users.',
  },
  {
    icon: <Cloud size={28} />,
    title: 'Azure & AWS Hosting',
    tag: 'Cloud',
    description:
      'Leverage the power of Microsoft Azure and Amazon Web Services with our managed cloud hosting services. We handle architecture, migration, security, and 24/7 monitoring so your applications run reliably at any scale.',
  },
  {
    icon: <Palette size={28} />,
    title: 'eLearning Design',
    tag: 'eLearning',
    description:
      'Our instructional designers and multimedia specialists craft compelling eLearning content — from SCORM-compliant modules and interactive simulations to video-based learning — tailored to your audience and learning objectives.',
  },
];

const tagColors: Record<string, string> = {
  Microsoft: 'bg-blue-50 text-blue-700 border-blue-100',
  Learning: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  Staffing: 'bg-violet-50 text-violet-700 border-violet-100',
  XDT: 'bg-orange-50 text-orange-700 border-orange-100',
  Cloud: 'bg-sky-50 text-sky-700 border-sky-100',
  eLearning: 'bg-pink-50 text-pink-700 border-pink-100',
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            What We Do
          </div>
          <h2 className="font-display font-700 text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Our Core Services
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            A comprehensive suite of technology and learning services designed to help your
            organisation grow, innovate, and stay ahead.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group bg-card rounded-2xl p-7 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {service.icon}
              </div>

              {/* Tag */}
              <span
                className={`inline-block self-start text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-3 ${tagColors[service.tag]}`}
              >
                {service.tag}
              </span>

              {/* Title */}
              <h3 className="font-display font-600 text-lg text-foreground mb-3 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
