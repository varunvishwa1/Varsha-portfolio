import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ShieldCheck, CheckCircle2, Bookmark } from 'lucide-react';
import { personalInfo, certifications } from '../data/portfolioData';

export default function EducationCertificationsSection() {
  return (
    <motion.section id="education" className="py-12 relative z-10 bg-[#131637]/40 border-t border-[#35385F]" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* Education Block */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#35385F] pb-8">
            <div>
              <div className="inline-flex items-center space-x-2 text-[#5E5F8F] text-xs font-mono tracking-widest uppercase mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>05 / EDUCATION</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5FA] font-heading tracking-tight">
                ACADEMIC <span className="text-[#5E5F8F]">FOUNDATION</span>
              </h2>
            </div>
            <span className="text-xs font-mono text-[#8587A3] uppercase">
              HIGHER EDUCATION CREDENTIALS
            </span>
          </div>

          <div className="space-card p-8 md:p-10 border border-[#35385F] bg-gradient-to-r from-[#131637] to-[#1F244C]/50 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3">
              <span className="px-3 py-1 text-xs font-mono font-semibold text-[#5E5F8F] bg-[#101126] border border-[#35385F] rounded uppercase">
                UNDERGRADUATE DEGREE
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#F5F5FA] font-heading">
                {personalInfo.education.degree}
              </h3>
              <p className="text-[#B8B9CC] text-base font-medium">
                {personalInfo.education.institution}
              </p>
              <p className="text-xs font-mono text-[#8587A3]">
                Duration: {personalInfo.education.period}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#101126] border border-[#5E5F8F] text-center min-w-[180px] shadow-lg">
              <span className="text-[10px] font-mono text-[#8587A3] uppercase block mb-1">
                ACADEMIC CGPA
              </span>
              <span className="text-4xl font-extrabold font-mono text-[#F5F5FA]">
                {personalInfo.education.cgpa}
              </span>
              <span className="text-[10px] font-mono text-[#5E5F8F] block mt-1 uppercase">
                FIRST CLASS ACCREDITED
              </span>
            </div>
          </div>
        </div>

        {/* Certifications Block */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#35385F] pb-8">
            <div>
              <div className="inline-flex items-center space-x-2 text-[#5E5F8F] text-xs font-mono tracking-widest uppercase mb-3">
                <Award className="w-4 h-4" />
                <span>06 / CERTIFICATIONS</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5FA] font-heading tracking-tight">
                VERIFIED <span className="text-[#5E5F8F]">CREDENTIALS</span>
              </h2>
            </div>
            <span className="text-xs font-mono text-[#8587A3] uppercase">
              INDUSTRY & PROFESSIONAL CERTIFICATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`space-card p-8 border space-card-hover flex flex-col justify-between ${
                  cert.isPrimary
                    ? 'border-[#5E5F8F] bg-[#1F244C]/60 md:col-span-2 space-glow'
                    : 'border-[#35385F]'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#5E5F8F] uppercase tracking-widest">
                      ISSUER: {cert.issuer}
                    </span>
                    {cert.isPrimary && (
                      <span className="px-2.5 py-1 text-[10px] font-mono font-bold text-[#F5F5FA] bg-[#5E5F8F] rounded border border-[#454873] uppercase">
                        PRIMARY CERTIFICATION
                      </span>
                    )}
                  </div>

                  <h3 className={`font-bold text-[#F5F5FA] font-heading ${cert.isPrimary ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
                    {cert.title}
                  </h3>

                  <p className="text-[#B8B9CC] text-xs md:text-sm leading-relaxed font-light">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#35385F] flex items-center justify-between text-xs font-mono text-[#8587A3]">
                  <span>Status: Verified</span>
                  <CheckCircle2 className="w-4 h-4 text-[#5E5F8F]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
