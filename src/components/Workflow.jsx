import React from 'react';
import { CheckCircle2, GitCommit, Layers, Sliders, Check } from 'lucide-react';

export default function Workflow() {
  const steps = [
    {
      num: '01',
      title: 'Briefing & Story Concept',
      desc: 'Analyzing client brand goals, defining scene storyboards, color script mood boards, and selecting musical score direction.',
    },
    {
      num: '02',
      title: 'Assembly & Rough Cut',
      desc: 'Ingesting 8K RAW footage, creating proxies, establishing narrative pacing, dialog sync, and selecting top hero takes.',
    },
    {
      num: '03',
      title: 'VFX & Motion Graphics',
      desc: 'Integrating kinetic 3D typography, screen replacements, CGI compositing, motion tracking, and clean-up work.',
    },
    {
      num: '04',
      title: 'Color Grading & Sound Master',
      desc: 'DaVinci Resolve Studio color pass, skin tone calibration, custom film grain, Foley sound FX design, and 4K HDR export.',
    },
  ];

  return (
    <section id="workflow" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-indigo-400 text-xs font-mono tracking-widest uppercase">
            <GitCommit className="w-4 h-4" />
            <span>Production Workflow</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            CREATIVE <span className="gradient-accent-text">PIPELINE</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            A battle-tested structured workflow ensuring rapid turnaround, crystal-clear communication, and pixel-perfect execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative glass-panel p-6 rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-extrabold text-indigo-400">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Check className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-[11px] font-mono text-slate-500 uppercase">
                <span>Phase {idx + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
