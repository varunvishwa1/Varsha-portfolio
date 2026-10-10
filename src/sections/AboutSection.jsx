import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, MapPin, Code, Cpu, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <motion.section id="about" className="py-12 relative z-10 bg-[#131637]/60 border-y border-[#35385F]" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Label & Heading */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center space-x-2 text-[#5E5F8F] text-xs font-mono tracking-widest uppercase">
              <span>01 / ABOUT</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5FA] font-heading tracking-tight leading-tight">
              Technology with <span className="text-[#5E5F8F]">purpose.</span>
            </h2>
            <div className="w-16 h-1 bg-[#5E5F8F] rounded-full mt-4" />
          </div>

          {/* Right Column Editorial Content */}
          <div className="lg:col-span-8 space-y-8">
            <p className="text-[#F5F5FA] text-lg md:text-xl font-light leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Quick Fact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="space-card p-6 border border-[#35385F] space-y-2">
                <div className="flex items-center space-x-2 text-[#5E5F8F]">
                  <Award className="w-5 h-5 text-[#5E5F8F]" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F5F5FA]">
                    CAD CERTIFIED
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#F5F5FA] font-heading">
                  ServiceNow Certified Application Developer
                </h4>
                <p className="text-xs text-[#8587A3] font-mono">
                  Enterprise application creation & ITSM workflow design.
                </p>
              </div>

              <div className="space-card p-6 border border-[#35385F] space-y-2">
                <div className="flex items-center space-x-2 text-[#5E5F8F]">
                  <GraduationCap className="w-5 h-5 text-[#5E5F8F]" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F5F5FA]">
                    ACADEMIC EXCELLENCE
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#F5F5FA] font-heading">
                  B.Tech AI & Data Science (8.65 CGPA)
                </h4>
                <p className="text-xs text-[#8587A3] font-mono">
                  Dhanalakshmi Srinivasan College of Engineering (2023–2027).
                </p>
              </div>

              <div className="space-card p-6 border border-[#35385F] space-y-2">
                <div className="flex items-center space-x-2 text-[#5E5F8F]">
                  <MapPin className="w-5 h-5 text-[#5E5F8F]" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F5F5FA]">
                    LOCATION
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#F5F5FA] font-heading">
                  Palakkad, Kerala, India
                </h4>
                <p className="text-xs text-[#8587A3] font-mono">
                  Open for ServiceNow & Software Opportunities globally.
                </p>
              </div>

              <div className="space-card p-6 border border-[#35385F] space-y-2">
                <div className="flex items-center space-x-2 text-[#5E5F8F]">
                  <Cpu className="w-5 h-5 text-[#5E5F8F]" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F5F5FA]">
                    CORE FOCUS
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#F5F5FA] font-heading">
                  Enterprise Automation + AI
                </h4>
                <p className="text-xs text-[#8587A3] font-mono">
                  ServiceNow Apps, Python, Machine Learning, Full-Stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
