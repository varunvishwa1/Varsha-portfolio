import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Eye, Trophy, Video, ArrowDownRight } from 'lucide-react';

export default function Hero({ onPlayShowreel }) {
  const stats = [
    { label: 'Commercials & Films', value: '65+', icon: Video },
    { label: 'Total Views Reached', value: '24M+', icon: Eye },
    { label: 'Industry Awards', value: '12', icon: Trophy },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border border-white/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
            Creative Director & Lead Video Producer
          </span>
        </motion.div>

        {/* Main Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              CRAFTING <br />
              <span className="gradient-accent-text">CINEMATIC</span> <br />
              VISUAL STORIES.
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl font-light leading-relaxed">
              Transforming raw vision into high-impact commercials, music videos, and brand films with cutting-edge editing, color grading, and motion direction.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onPlayShowreel}
                className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base flex items-center space-x-3 shadow-xl glow-indigo transition-all hover:scale-[1.02]"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>
                <span>Watch 2026 Showreel</span>
              </button>

              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl glass-panel glass-panel-hover text-slate-200 font-semibold text-base flex items-center space-x-2"
              >
                <span>Explore Works</span>
                <ArrowDownRight className="w-5 h-5 text-indigo-400" />
              </a>
            </div>
          </motion.div>

          {/* Featured Video Showreel Card Teaser */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div
              onClick={onPlayShowreel}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/15 cursor-pointer shadow-2xl hover:border-indigo-500/50 transition-all"
            >
              <img
                src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80"
                alt="Showreel Preview"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Play Icon Trigger Center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-indigo-600/90 backdrop-blur-md text-white flex items-center justify-center shadow-2xl glow-indigo group-hover:scale-110 transition-transform mb-4 border border-white/20">
                  <Play className="w-10 h-10 fill-white ml-1" />
                </div>
                <span className="text-xs font-mono font-semibold tracking-widest text-indigo-300 uppercase px-3 py-1 rounded-full bg-black/60 border border-white/10">
                  Click To Play Reel • 02:45
                </span>
              </div>

              {/* Bottom Card Meta */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white font-heading">SHOWREEL 2026</h4>
                  <p className="text-xs text-slate-300">Commercials & Cinema Edits</p>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/30">
                  4K HDR
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metric Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="glass-panel p-6 rounded-2xl flex items-center space-x-5">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white font-heading tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
