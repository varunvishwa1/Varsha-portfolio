import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, ExternalLink, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  return (
    <motion.section id="contact" className="py-12 relative z-10" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 border-b border-[#35385F] pb-8">
          <div className="inline-flex items-center space-x-2 text-[#5E5F8F] text-xs font-mono tracking-widest uppercase">
            <MessageSquare className="w-4 h-4" />
            <span>08 / CONTACT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5FA] font-heading tracking-tight">
            Get in <span className="text-[#5E5F8F]">touch.</span>
          </h2>
          <p className="text-[#8587A3] text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
            Open for ServiceNow Application Development roles, software engineering, automation, and technical collaborations.
          </p>
        </div>

        {/* Spacious Direct Contact Channels Card */}
        <div className="space-card p-8 md:p-10 border border-[#35385F] space-y-8 shadow-2xl">
          <div className="text-center">
            <span className="text-xs font-mono text-[#8587A3] uppercase tracking-widest block">
              DIRECT CONTACT & PROFESSIONAL PROFILES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex flex-col items-center justify-between p-6 md:p-7 bg-[#101126] rounded-2xl border border-[#35385F] hover:border-[#5E5F8F] transition-all group text-center space-y-4 shadow-md hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1F244C] flex items-center justify-center text-[#5E5F8F] group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-[#F5F5FA]" />
              </div>
              <div className="w-full space-y-1">
                <span className="block text-[11px] font-mono text-[#8587A3] uppercase tracking-wider">
                  EMAIL
                </span>
                <span className="text-xs font-mono font-semibold text-[#F5F5FA] block group-hover:text-[#5E5F8F] transition-colors break-all">
                  {personalInfo.email}
                </span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-between p-6 md:p-7 bg-[#101126] rounded-2xl border border-[#35385F] hover:border-[#5E5F8F] transition-all group text-center space-y-4 shadow-md hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1F244C] flex items-center justify-center text-[#5E5F8F] group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-[#F5F5FA]" />
              </div>
              <div className="w-full space-y-1">
                <span className="block text-[11px] font-mono text-[#8587A3] uppercase tracking-wider">
                  LINKEDIN
                </span>
                <span className="text-xs font-mono font-semibold text-[#F5F5FA] block group-hover:text-[#5E5F8F] transition-colors break-all">
                  {personalInfo.linkedinHandle}
                </span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-between p-6 md:p-7 bg-[#101126] rounded-2xl border border-[#35385F] hover:border-[#5E5F8F] transition-all group text-center space-y-4 shadow-md hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1F244C] flex items-center justify-center text-[#5E5F8F] group-hover:scale-110 transition-transform">
                <ExternalLink className="w-6 h-6 text-[#F5F5FA]" />
              </div>
              <div className="w-full space-y-1">
                <span className="block text-[11px] font-mono text-[#8587A3] uppercase tracking-wider">
                  GITHUB
                </span>
                <span className="text-xs font-mono font-semibold text-[#F5F5FA] block group-hover:text-[#5E5F8F] transition-colors break-all">
                  {personalInfo.githubHandle}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
