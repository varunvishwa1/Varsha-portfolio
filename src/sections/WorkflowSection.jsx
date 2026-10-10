import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Layers, Code, Settings, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { workflowSteps } from '../data/portfolioData';

export default function WorkflowSection() {
  const stepIcons = [Layers, Code, Settings, GitCommit, ShieldAlert, CheckCircle2];

  return (
    <motion.section className="py-12 relative z-10 border-t border-[#35385F]" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#35385F] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#5E5F8F] text-xs font-mono tracking-widest uppercase mb-3">
              <GitCommit className="w-4 h-4" />
              <span>07 / WORKFLOW</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5FA] font-heading tracking-tight">
              DEVELOPMENT <span className="text-[#5E5F8F]">METHODOLOGY</span>
            </h2>
          </div>
          <p className="text-[#8587A3] text-sm md:text-base max-w-md">
            Structured enterprise development lifecycle from requirement analysis to Automated Test Framework (ATF) validation and production deployment.
          </p>
        </div>

        {/* 6 Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((s, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <div
                key={s.step}
                className="space-card p-8 border border-[#35385F] space-card-hover flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-[#5E5F8F]">
                      {s.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#101126] border border-[#35385F] flex items-center justify-center text-[#B8B9CC]">
                      <Icon className="w-5 h-5 text-[#5E5F8F]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F5FA] font-heading mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[#B8B9CC] text-xs leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#35385F] text-[10px] font-mono text-[#8587A3] uppercase">
                  <span>STAGE {idx + 1} OF 6</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
