import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const words = ['VARSHA K S', 'SERVICENOW CAD', 'PORTFOLIO'];

  useEffect(() => {
    // Progress Counter Interval
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Word Switch Interval
    const wordTimer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev < words.length - 1 ? prev + 1 : prev));
    }, 800);

    // Completion Trigger
    const finishTimer = setTimeout(() => {
      setIsDone(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 900);
    }, 2700);

    return () => {
      clearInterval(timer);
      clearInterval(wordTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] bg-[#101126] text-[#F5F5FA] flex flex-col justify-between p-8 md:p-16 overflow-hidden select-none"
        >
          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1F244C]/40 rounded-full blur-[160px] pointer-events-none" />

          {/* Top Header info */}
          <div className="flex items-center justify-between text-xs font-mono text-[#8587A3] tracking-widest uppercase relative z-10">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#5E5F8F] animate-ping" />
              <span>VARSHA K S // PORTFOLIO</span>
            </div>
            <span>2026 EDITION</span>
          </div>

          {/* Center Words Intro Animation */}
          <div className="relative z-10 my-auto text-center flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentWordIndex}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 1.05 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <h1 className="font-heading font-black text-5xl sm:text-7xl md:text-9xl tracking-tighter uppercase text-[#F5F5FA] drop-shadow-[0_0_35px_rgba(94,95,143,0.5)]">
                  {words[currentWordIndex]}
                </h1>

                {/* Animated Glowing Edge Beam traveling along text */}
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.75, ease: 'easeInOut' }}
                  className="h-1 bg-gradient-to-r from-transparent via-[#5E5F8F] to-transparent mx-auto mt-4 rounded-full shadow-[0_0_15px_#5E5F8F]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Progress Counter */}
          <div className="flex items-end justify-between relative z-10 border-t border-[#35385F] pt-6">
            <div className="text-xs font-mono text-[#8587A3] uppercase tracking-wider hidden sm:block">
              SERVICE NOW APPLICATION DEVELOPER & CAD
            </div>
            <div className="text-4xl md:text-6xl font-mono font-bold text-[#F5F5FA] tracking-tighter ml-auto">
              {progress}
              <span className="text-xl text-[#5E5F8F] ml-1">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
