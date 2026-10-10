import React from 'react';
import { Star, Quote, Award } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote:
        "Varsha turned our launch video into a cinematic masterpiece. The pacing, color grade, and sound design elevated our brand identity to a whole new global tier.",
      author: 'Elena Rostova',
      role: 'Global Creative Lead',
      company: 'Porsche Design',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    {
      quote:
        'Working with Varsha was an absolute breeze. Fast turnarounds, incredible attention to detail, and a deep understanding of music sync rhythms.',
      author: 'Marcus Vance',
      role: 'Music Producer & Director',
      company: 'Universal Music Group',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      quote:
        'The 3D motion graphics and trailer cuts generated over 10M organic impressions on YouTube within 48 hours of release. High recommended!',
      author: 'Sarah Jenkins',
      role: 'VP Marketing',
      company: 'Sony Interactive',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
  ];

  const brandLogos = ['RED BULL', 'PORSCHE', 'UNIVERSAL', 'SONY', 'NIKE', 'NAT GEO'];

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Brand Marquee Banner */}
        <div className="mb-20 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-8">
            Trusted By Industry-Leading Global Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70">
            {brandLogos.map((brand, i) => (
              <span
                key={i}
                className="font-heading font-extrabold text-xl md:text-2xl tracking-widest text-slate-300 hover:text-white transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-indigo-400 text-xs font-mono tracking-widest uppercase">
            <Award className="w-4 h-4" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            TESTIMONIALS & <span className="gradient-accent-text">FEEDBACK</span>
          </h2>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-indigo-400/40 mb-3" />
                <p className="text-slate-300 text-sm leading-relaxed italic mb-8 font-light">
                  "{rev.quote}"
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-6 border-t border-white/5">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">{rev.author}</h4>
                  <p className="text-xs text-slate-400 font-mono">{rev.role}</p>
                  <span className="text-[10px] text-indigo-400 font-mono">{rev.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
