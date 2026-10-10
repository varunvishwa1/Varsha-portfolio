import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, Film, ArrowUpRight } from 'lucide-react';

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Commercials', 'Music Videos', 'Short Films', 'Motion Design'];

  const projectList = [
    {
      id: 1,
      title: 'Neon Odyssey - Cyberpunk Commercial',
      category: 'Commercials',
      client: 'Sony PlayStation',
      role: 'Director & Editor',
      duration: '01:30',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'High-energy cyberpunk promo campaign featuring fast-paced cuts, custom color grading, and dynamic audio soundscapes.',
    },
    {
      id: 2,
      title: 'Midnight Echoes - Official Music Video',
      category: 'Music Videos',
      client: 'Universal Music',
      role: 'Lead Colorist & Editor',
      duration: '03:45',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Atmospheric narrative music video shot on Anamorphic lenses with cinematic teal and orange tone grade.',
    },
    {
      id: 3,
      title: 'Velocity X - Automotive Launch Film',
      category: 'Commercials',
      client: 'Porsche Design',
      role: 'Post Production Director',
      duration: '02:15',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Sleek luxury car release commercial featuring 3D camera tracking and high-speed motion Blur integration.',
    },
    {
      id: 4,
      title: 'The Silent Horizon - Documentary',
      category: 'Short Films',
      client: 'National Geographic',
      role: 'Editor & Sound Designer',
      duration: '12:00',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Award-winning environmental short documentary focusing on Arctic ice landscapes and sound design.',
    },
    {
      id: 5,
      title: 'Kinetix 3D - Abstract Title Sequence',
      category: 'Motion Design',
      client: 'Nike Global',
      role: '3D Animator & Compositor',
      duration: '00:45',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Experimental 3D typography and fluid simulation motion graphics rendered in Cinema 4D and After Effects.',
    },
    {
      id: 6,
      title: 'Aura Skincare - Brand Aesthetic Film',
      category: 'Commercials',
      client: 'Aura Luxury',
      role: 'Director & Colorist',
      duration: '01:10',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Soft lighting, macro slow-motion cinematography, and high-end beauty retouches for international beauty line.',
    },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projectList
      : projectList.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-indigo-400 text-xs font-mono tracking-widest uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
              FEATURED <span className="gradient-accent-text">WORKS</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 glass-panel p-1.5 rounded-2xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-lg glow-indigo'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden glass-panel glass-panel-hover border border-white/10 cursor-pointer flex flex-col justify-between"
                onClick={() => onSelectProject(project)}
              >
                {/* Image / Thumbnail Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                    <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-xl glow-indigo group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 text-[11px] font-mono font-semibold tracking-wider text-indigo-300 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 uppercase">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 text-[11px] font-mono text-slate-300 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/10">
                      {project.duration}
                    </span>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
                      {project.client}
                    </div>
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-indigo-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Role: {project.role}</span>
                    <span className="flex items-center space-x-1 text-indigo-400 group-hover:translate-x-1 transition-transform">
                      <span>Watch</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
