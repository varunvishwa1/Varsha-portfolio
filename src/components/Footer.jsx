import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-12 bg-[#101126] border-t border-[#35385F] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#8587A3]">
        <div className="space-y-1 text-center md:text-left">
          <span className="font-heading font-bold text-[#F5F5FA] text-base block tracking-tight">
            {personalInfo.name}
          </span>
          <span className="block text-[11px] text-[#8587A3]">
            SERVICE NOW APPLICATION DEVELOPER • AI & DATA SCIENCE
          </span>
        </div>

        <div className="flex items-center space-x-6 text-[#B8B9CC]">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F5FA] transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F5FA] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-[#F5F5FA] transition-colors"
          >
            Email
          </a>
        </div>

        <div className="text-center md:text-right">
          <span>© {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
