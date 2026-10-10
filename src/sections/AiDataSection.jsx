import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Database, BarChart3, ArrowUpRight } from 'lucide-react';
import { aiDataSkills, aiProjects } from '../data/portfolioData';

export default function AiDataSection() {
  return (
    <motion.section id="ai-data" className="py-12 relative z-10 bg-[#131637]/40 border-t border-[#35385F]" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#35385F] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#5E5F8F] text-xs font-mono tracking-widest uppercase mb-3">
              <Brain className="w-4 h-4" />
              <span>03 / AI + DATA</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5FA] font-heading tracking-tight">
              Where enterprise systems <span className="text-[#5E5F8F]">meet intelligence.</span>
            </h2>
          </div>
          <p className="text-[#8587A3] text-sm md:text-base max-w-md">
            Leveraging machine learning models, computer vision pipelines, natural language processing, and statistical data modeling to augment software application workflows.
          </p>
        </div>

        {/* Monochrome Skill Grid */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-[#8587A3] uppercase tracking-wider block">
            ARTIFICIAL INTELLIGENCE & DATA SCIENCE STACK:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {aiDataSkills.map((skill, idx) => (
              <div
                key={idx}
                className="space-card p-3.5 border border-[#35385F] hover:border-[#5E5F8F] text-center"
              >
                <span className="text-xs font-mono text-[#F5F5FA] font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI & Data Projects */}
        <div className="space-y-8">
          <span className="text-xs font-mono text-[#5E5F8F] uppercase tracking-widest block">
            FEATURED AI & DATA SCIENCE PROJECTS
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiProjects.map((proj) => (
              <div
                key={proj.id}
                className="space-card p-8 border border-[#35385F] space-card-hover flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-[#8587A3] uppercase tracking-widest block">
                    {proj.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#F5F5FA] font-heading">
                    {proj.title}
                  </h3>

                  <div className="space-y-3 pt-2 text-xs">
                    <div>
                      <span className="font-mono text-[#5E5F8F] block uppercase text-[10px]">
                        PROBLEM STATEMENT:
                      </span>
                      <p className="text-[#B8B9CC] mt-0.5">{proj.problem}</p>
                    </div>

                    <div>
                      <span className="font-mono text-[#5E5F8F] block uppercase text-[10px]">
                        PROPOSED SOLUTION:
                      </span>
                      <p className="text-[#B8B9CC] mt-0.5">{proj.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#35385F] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[10px] font-mono text-[#B8B9CC] bg-[#101126] rounded border border-[#35385F]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="text-[11px] font-mono text-[#8587A3] italic">
                    Purpose: {proj.purpose}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
