import { useEffect } from "react";

const Index = () => {
  const speakers = [
    { name: "Anna Sroginis", company: "Lancaster University", avatar: "AS", image: "/lovable-uploads/anna-sroginis.jpg", linkedin: "https://www.linkedin.com/in/anna-sroginis-361262155/" },
    { name: "Yeasmin Khandakar", company: "Transurban", avatar: "YK", image: "/lovable-uploads/yeasmin-khandakar.jpg", linkedin: "https://www.linkedin.com/in/yeasminkhandakar/" },
    { name: "Charupriya Sharma", company: "Amazon", avatar: "CS", image: "/lovable-uploads/charupriya-sharma.jpg", linkedin: "https://www.linkedin.com/in/charupriya-sharma/" },
    { name: "Xinyu (Rachel) Li", company: "Carnegie Mellon University", avatar: "XL", image: "/lovable-uploads/xinyu-li.jpg", linkedin: "https://www.linkedin.com/in/xinyu-rachel-li-3199776a/" },
    { name: "Laila Akhlaghi", company: "JSI", avatar: "LA", image: "/lovable-uploads/laila-akhlaghi.jpg", linkedin: "https://www.linkedin.com/in/lailaakhlaghi/" },
    { name: "Mariana Menchero", company: "Nixtla", avatar: "MM", image: "/lovable-uploads/mariana-menchero.jpg", linkedin: "https://www.linkedin.com/in/marianamencherogarcia/" },
    { name: "Yibei Hu", company: "Nixtla", avatar: "YH", image: "/lovable-uploads/yibei-hu.jpg", linkedin: "https://www.linkedin.com/in/olivia-hu9908/" },
  ];

  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/45906594.js';
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const SpeakerLink = ({ speaker, children }: { speaker: typeof speakers[number]; children: React.ReactNode }) =>
    speaker.linkedin ? (
      <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${speaker.name} on LinkedIn`} className="block">
        {children}
      </a>
    ) : (
      <div>{children}</div>
    );

  return (
    <div className="w-full bg-[#FAF9FF] text-[#1a1523]">
      {/* Sticky Header */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img src="/lovable-uploads/01369b9f-6dca-4a39-9faf-7293038d1408.png" alt="Women in Forecasting" className="h-8" />
            <div className="hidden md:block h-6 w-px bg-purple-200"></div>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">Hosted by</span>
              <img src="/lovable-uploads/nixtla-logo.svg" alt="Nixtla" className="h-5 object-contain" />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider" style={{ color: 'rgba(45,26,77,0.7)' }}>
            <a href="#speakers" className="hover:text-[#553588] transition-colors">Speakers</a>
            <a href="#agenda" className="hover:text-[#553588] transition-colors">Agenda</a>
            <a href="#register" className="text-white px-6 py-2.5 rounded-full transition-all active:scale-95" style={{ backgroundColor: '#553588' }}>Register</a>
          </div>
          <a href="#register" className="md:hidden text-white px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#553588' }}>Register</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[28rem] h-[28rem] rounded-full bg-purple-200/40 blur-3xl -z-10"></div>
        <div className="absolute top-10 right-0 w-[24rem] h-[24rem] rounded-full bg-violet-200/30 blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse"></span>
              <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: '#553588' }}>Montréal 2026 · Global Livestream</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.95] mb-8">
              Welcoming <span className="relative inline-block" style={{ color: '#7C3AED' }}>
                Women
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 10C50 3 150 3 298 10" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span> in Forecasting
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mb-10" style={{ color: 'rgba(45,26,77,0.65)' }}>
              Women working in the forecasting sphere come together to share insights, experiences, and the latest trends in the industry.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <a href="#register" className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-2xl shadow-purple-500/30 hover:-translate-y-0.5 transition-all" style={{ backgroundColor: '#7C3AED' }}>
                Reserve your spot →
              </a>
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                Free · Limited seats · 2 min sign-up
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Meta */}
      <section className="py-10 border-y border-purple-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { k: "Date", v: "June 27, 2026" },
              { k: "Time", v: "10:00 AM EST" },
              { k: "Venue", v: "UQAM, Montréal" },
              { k: "Access", v: "Free · Hybrid" },
            ].map((m) => (
              <div key={m.k}>
                <span className="block text-[10px] uppercase font-bold tracking-widest mb-1" style={{ color: '#7C3AED' }}>{m.k}</span>
                <span className="text-lg md:text-xl font-bold">{m.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="py-24 md:py-32 bg-[#faf9ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Exceptional minds,<br/>pioneering insights.
              </h2>
              <p style={{ color: 'rgba(45,26,77,0.6)' }}>Meet the researchers and practitioners leading the conversation in forecasting.</p>
            </div>
            <div className="text-right">
              <div className="text-6xl font-black text-purple-100 leading-none">{String(speakers.length).padStart(2, '0')}</div>
              <div className="text-xs font-bold uppercase tracking-widest -mt-2" style={{ color: '#553588' }}>Featured Speakers</div>
            </div>
          </div>

          {/* Uniform speaker grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {speakers.map((s) => (
              <SpeakerLink key={s.name} speaker={s}>
                <div className="aspect-square relative group overflow-hidden rounded-3xl bg-purple-100 shadow-sm border border-purple-50">
                  {s.image ? (
                    <img src={s.image} alt={s.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold" style={{ color: '#553588' }}>{s.avatar}</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1523]/85 via-[#1a1523]/20 to-transparent"></div>
                  <div className="absolute bottom-0 p-5 w-full">
                    <p className="text-[10px] font-bold text-purple-200 uppercase tracking-widest mb-1">{s.company}</p>
                    <h3 className="text-lg font-bold text-white leading-tight">{s.name}</h3>
                  </div>
                </div>
              </SpeakerLink>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#553588' }}>Agenda</span>
            <h2 className="text-4xl md:text-5xl font-extrabold">A day for the global forecasting community.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-2">
            {[
              { t: "10:00 AM", h: "Opening remarks", d: "Welcome from Nixtla and the IIF." },
              { t: "10:30 AM", h: "Keynote talks", d: "Leaders share what's shaping forecasting today." },
              { t: "12:00 PM", h: "Panel & Q&A", d: "Open conversation with the speakers." },
              { t: "01:30 PM", h: "Networking", d: "In-person at UQAM and online breakouts." },
            ].map((it) => (
              <div key={it.t} className="flex gap-6 py-6 border-b border-purple-50">
                <span className="font-bold tabular-nums w-20 flex-shrink-0" style={{ color: 'rgba(85,53,136,0.6)' }}>{it.t}</span>
                <div>
                  <h4 className="font-bold">{it.h}</h4>
                  <p className="text-sm mt-0.5" style={{ color: 'rgba(45,26,77,0.6)' }}>{it.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#553588' }}>Register</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#553588' }}>
              Empower Your Future at Women in Forecast
            </h2>
            <p className="text-lg" style={{ color: 'rgba(45,26,77,0.6)' }}>
              Free to attend · In-person at UQAM and live worldwide.
            </p>
          </div>
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#553588' }}>What you get</h3>
                <ul className="space-y-3">
                  {[
                    "Keynotes from leading forecasting voices",
                    "Live panel & open Q&A with speakers",
                    "Networking — in-person and online breakouts",
                    "Recording access after the event",
                  ].map((b) => (
                    <li key={b} className="flex gap-3 text-sm" style={{ color: 'rgba(45,26,77,0.8)' }}>
                      <span className="font-bold" style={{ color: '#553588' }}>✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-2xl border border-purple-100 bg-white/60">
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#553588' }}>Hosted by</p>
                <p className="text-sm" style={{ color: 'rgba(45,26,77,0.7)' }}>Nixtla in partnership with the International Institute of Forecasters.</p>
              </div>
            </div>
            <div className="lg:col-span-3 relative">
              <div className="absolute -inset-4 bg-[#553588] rounded-3xl blur-2xl opacity-5"></div>
              <div className="relative bg-white p-8 md:p-10 rounded-3xl border border-purple-100 shadow-2xl shadow-purple-100/50">
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(85,53,136,0.7)' }}>
                  Reserve your spot · Takes 2 minutes
                </p>
                <div className="hs-form-frame" data-region="na1" data-form-id="797b5ce5-f17f-4f23-af31-bbd4a4eee61a" data-portal-id="45906594"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-purple-50">
        <div className="max-w-7xl mx-auto pl-6 pr-2 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/nixtla-logo.svg" alt="Nixtla" className="h-5 object-contain" />
            <span className="text-sm font-medium" style={{ color: 'rgba(45,26,77,0.5)' }}>Hosted by Nixtla</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(85,53,136,0.5)' }}>In partnership with</span>
            <img src="/lovable-uploads/iif-logo-full.png" alt="International Institute of Forecasters" className="h-10 object-contain" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
