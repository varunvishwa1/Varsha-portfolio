import React from 'react';
import { Film, Sliders, Palette, Zap, Cpu, Radio } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Film,
      title: 'Creative Direction & Storyboarding',
      description:
        'Crafting compelling visual narrative concepts, script breakdowns, scene treatments, and pre-visualization storyboards tailored for high-impact visual storytelling.',
      features: ['Concept Development', 'Mood Boards', 'Shot List & Treatments'],
    },
    {
      icon: Sliders,
      title: 'Precision Video Editing & Pacing',
      description:
        'Seamless narrative cutting, rhythmic musical synchronization, high-octane montage editing, and multi-cam assembly for commercial and cinematic releases.',
      features: ['Rhythmic Pacing', 'Multi-Camera Cut', 'Sound Synchronization'],
    },
    {
      icon: Palette,
      title: 'Cinematic Color Grading & DI',
      description:
        'Expert Colorist workflow using DaVinci Resolve Studio. Custom LUT creation, skin-tone refinement, scene matching, and HDR10+ Dolby Vision mastering.',
      features: ['Shot Matching', 'Custom Film Grain', 'HDR / Rec.709 Color Space'],
    },
    {
      icon: Zap,
      title: 'VFX & 3D Motion Graphics',
      description:
        '2D/3D title graphics, kinetic typography, screen replacements, CGI object integration, particle effects, and compositing in Cinema 4D and After Effects.',
      features: ['Kinetic Titles', '3D Camera Tracking', 'Clean-up & Object Removal'],
    },
  ];

  return (
    <section id="services" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-indigo-400 text-xs font-mono tracking-widest uppercase">
            <Radio className="w-4 h-4 animate-pulse text-cyan-400" />
            <span>Capabilities & Expertise</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            PRODUCTION <span className="gradient-accent-text">SERVICES</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            End-to-end post-production solutions delivering agency-grade quality from raw footage to final 4K master delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl glass-panel-hover border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 shadow-lg">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-3">
                    Key Deliverables
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feat, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-mono text-slate-300 rounded-full bg-white/5 border border-white/10"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
