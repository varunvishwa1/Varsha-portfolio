import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ExternalLink } from 'lucide-react';

export default function ShowreelModal({ isOpen, onClose, videoData }) {
  if (!isOpen || !videoData) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl overflow-hidden glass-panel rounded-3xl border border-white/20 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
            <div>
              <span className="px-3 py-1 text-xs font-mono font-semibold tracking-wider text-indigo-400 rounded-full bg-indigo-500/10 border border-indigo-500/20 uppercase">
                {videoData.category || 'Featured Work'}
              </span>
              <h3 className="mt-1 text-xl font-bold text-white font-heading">{videoData.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 transition-colors rounded-full hover:text-white hover:bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video w-full bg-black">
            {videoData.embedUrl ? (
              <iframe
                src={`${videoData.embedUrl}?autoplay=1&rel=0`}
                title={videoData.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
                <img
                  src={videoData.image}
                  alt={videoData.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="relative z-10 text-center p-8 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 max-w-md">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg glow-indigo">
                    <Play className="w-8 h-8 ml-1 fill-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{videoData.title}</h4>
                  <p className="text-sm text-slate-300 mb-4">{videoData.description}</p>
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-500/30">
                    4K Ultra HD • Color Graded • Dolby Atmos
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Footer Metadata */}
          <div className="p-6 bg-slate-950/80 flex flex-wrap items-center justify-between gap-4 border-t border-white/5">
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <div>
                <span className="block text-xs font-mono text-slate-500 uppercase">Client</span>
                <span className="font-semibold text-slate-200">{videoData.client || 'Red Bull Media'}</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-slate-500 uppercase">Role</span>
                <span className="font-semibold text-slate-200">{videoData.role || 'Lead Editor & Colorist'}</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-slate-500 uppercase">Duration</span>
                <span className="font-semibold text-slate-200">{videoData.duration || '02:45'}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg glow-indigo"
            >
              Close Player
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
