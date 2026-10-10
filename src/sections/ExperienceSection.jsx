import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <motion.section id="experience" className="py-12 relative z-10" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#35385F] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#5E5F8F] text-xs font-mono tracking-widest uppercase mb-3">
              <Briefcase className="w-4 h-4" />
              <span>04 / EXPERIENCE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5FA] font-heading tracking-tight">
              PROFESSIONAL <span className="text-[#5E5F8F]">TIMELINE</span>
            </h2>
          </div>
          <p className="text-[#8587A3] text-sm md:text-base max-w-md">
            Hands-on software development internships spanning AI data engineering, full-stack application creation, and technical mentorship.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 md:pl-10 space-y-12 border-l border-[#35385F]">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#101126] border-2 border-[#5E5F8F] group-hover:bg-[#5E5F8F] transition-colors" />

              <div className="space-card p-8 border border-[#35385F] space-card-hover space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono text-[#5E5F8F] uppercase tracking-wider block">
                      {exp.company}
                    </span>
                    <h3 className="text-xl font-bold text-[#F5F5FA] font-heading">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="px-3 py-1 text-xs font-mono text-[#F5F5FA] bg-[#1F244C] rounded border border-[#454873] w-max">
                    {exp.period}
                  </span>
                </div>

                <p className="text-[#B8B9CC] text-sm leading-relaxed font-light">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
