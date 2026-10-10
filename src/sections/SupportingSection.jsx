import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, Users, Languages, Check } from 'lucide-react';
import { supportingContent } from '../data/portfolioData';

export default function SupportingSection() {
  return (
    <motion.section className="py-12 relative z-10 bg-[#131637]/40 border-t border-[#35385F]" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Header */}
        <div className="border-b border-[#35385F] pb-6">
          <span className="text-xs font-mono text-[#5E5F8F] uppercase tracking-widest block mb-1">
            SUPPORTING INITIATIVES & STRENGTHS
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#F5F5FA] font-heading">
            Academic Contributions & Professional Strengths
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Naalai Theervu Initiative */}
          <div className="lg:col-span-6 space-card p-8 border border-[#35385F] space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#101126] border border-[#35385F] flex items-center justify-center text-[#5E5F8F]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#8587A3] uppercase block">
                {supportingContent.initiatives[0].subtitle}
              </span>
              <h3 className="text-xl font-bold text-[#F5F5FA] font-heading mt-1">
                {supportingContent.initiatives[0].title}
              </h3>
            </div>
            <p className="text-[#B8B9CC] text-xs md:text-sm leading-relaxed font-light">
              {supportingContent.initiatives[0].desc}
            </p>
          </div>

          {/* Professional Strengths & Languages */}
          <div className="lg:col-span-6 space-card p-8 border border-[#35385F] space-y-6">
            <div>
              <span className="text-[10px] font-mono text-[#5E5F8F] uppercase tracking-widest block mb-2">
                PROFESSIONAL STRENGTHS
              </span>
              <div className="flex flex-wrap gap-2">
                {supportingContent.strengths.map((str, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-mono text-[#F5F5FA] bg-[#101126] border border-[#35385F] rounded"
                  >
                    ✓ {str}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#35385F]">
              <span className="text-[10px] font-mono text-[#5E5F8F] uppercase tracking-widest block mb-2">
                LANGUAGES SPOKEN
              </span>
              <div className="flex flex-wrap gap-2">
                {supportingContent.languages.map((lang, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-mono text-[#B8B9CC] bg-[#1F244C] border border-[#454873] rounded"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
