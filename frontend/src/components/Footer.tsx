import { Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'brainscribe-solutions'
  );

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src="/assets/generated/brainscribe-logo.dim_256x256.png"
                  alt="Brainscribe Solutions LLP"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-display font-700 text-base text-white leading-tight">
                  Brainscribe Solutions LLP
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Empowering businesses through technology — Microsoft, Cloud, eLearning, and beyond.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-semibold text-sm text-white/80 uppercase tracking-widest mb-4">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Home', id: '#hero' },
                { label: 'Services', id: '#services' },
                { label: 'About Us', id: '#about' },
                { label: 'Contact', id: '#contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-sm text-white/80 uppercase tracking-widest mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-2">
              {[
                'Microsoft Technologies',
                'Moodle LMS',
                'Staffing Solutions',
                'XDT',
                'Azure & AWS Hosting',
                'eLearning Design',
              ].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-sm text-white/60 hover:text-white transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {year} Brainscribe Solutions LLP. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{' '}
            <Heart size={12} className="text-red-400 fill-red-400 mx-0.5" />
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:text-white transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
