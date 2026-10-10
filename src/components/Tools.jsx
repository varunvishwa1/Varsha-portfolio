import React from 'react';
import { Cpu, Terminal, Wrench } from 'lucide-react';

export default function Tools() {
  const tools = [
    {
      name: 'DaVinci Resolve Studio',
      category: 'Color Grading & DI',
      level: 'Expert Master',
      badge: 'Pro',
      icon: '🎨',
    },
    {
      name: 'Adobe Premiere Pro',
      category: 'NLE Assembly & Cut',
      level: 'Industry Standard',
      badge: '10+ Yrs',
      icon: '🎬',
    },
    {
      name: 'Adobe After Effects',
      category: 'Motion & Compositing',
      level: 'Advanced VFX',
      badge: '2D/3D',
      icon: '⚡',
    },
    {
      name: 'Cinema 4D / Redshift',
      category: '3D Animation & Rendering',
      level: '3D Motion',
      badge: 'Redshift',
      icon: '💎',
    },
    {
      name: 'Blender 3D',
      category: 'CGI & Fluid Sim',
      level: 'Advanced',
      badge: 'Cycles',
      icon: '🌌',
    },
    {
      name: 'Logic Pro X / Audition',
      category: 'Sound FX & Mastering',
      level: 'Audio Mix',
      badge: 'Spatial',
      icon: '🎧',
    },
  ];

  return (
    <section id="tools" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
              <Cpu className="w-4 h-4" />
              <span>Technical Suite</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
              TOOLSTACK & <span className="gradient-accent-text">SOFTWARE</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md">
            Powered by high-performance workstations optimized for 8K RAW real-time editing, ACES color management, and GPU-accelerated rendering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl glass-panel-hover border border-white/10 flex items-center space-x-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shrink-0 shadow-inner">
                {tool.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-base font-bold text-white font-heading truncate">
                    {tool.name}
                  </h4>
                  <span className="px-2 py-0.5 text-[10px] font-mono text-cyan-400 bg-cyan-950/60 rounded border border-cyan-500/30">
                    {tool.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono">{tool.category}</p>
                <div className="mt-2 text-[11px] font-mono text-indigo-400">
                  Proficiency: {tool.level}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
