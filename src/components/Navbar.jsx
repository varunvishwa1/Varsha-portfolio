import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'servicenow', 'ai-data', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'ServiceNow', href: '#servicenow', id: 'servicenow' },
    { name: 'AI & Data', href: '#ai-data', id: 'ai-data' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#101126]/90 backdrop-blur-md border-b border-[#35385F] py-3 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Monogram "V" Logo */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1F244C] to-[#131637] border-2 border-[#5E5F8F] flex items-center justify-center font-heading font-black text-[#F5F5FA] text-xl shadow-lg group-hover:border-[#F5F5FA] group-hover:scale-105 transition-all">
            <span className="gradient-accent-text leading-none">V</span>
          </div>
          <div>
            <span className="font-heading text-lg font-bold tracking-tight text-[#F5F5FA] block leading-tight">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#8587A3] uppercase block">
              SERVICENOW CAD & AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 bg-[#131637]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#35385F]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-all rounded-full ${
                  isActive
                    ? 'bg-[#5E5F8F]/20 text-[#F5F5FA] border border-[#5E5F8F]'
                    : 'text-[#B8B9CC] hover:text-[#F5F5FA] hover:bg-[#1F244C]/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions: Resume & Connect */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="/assets/Varsha_Resume.pdf"
            download="Varsha_KS_Resume.pdf"
            className="px-4 py-2 text-xs font-mono font-semibold tracking-wider text-[#B8B9CC] hover:text-[#F5F5FA] bg-[#131637] hover:bg-[#1F244C] rounded-lg border border-[#35385F] transition-all flex items-center space-x-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-[#5E5F8F]" />
            <span>RESUME</span>
          </a>

          <a
            href="#contact"
            className="px-5 py-2 text-xs font-mono font-semibold tracking-wider text-[#F5F5FA] bg-[#5E5F8F] hover:bg-[#3D4069] rounded-lg border border-[#454873] transition-all flex items-center space-x-1.5 shadow-md"
          >
            <span>CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B8B9CC]" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#B8B9CC] hover:text-[#F5F5FA] bg-[#131637] border border-[#35385F] rounded-lg"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#101126]/95 backdrop-blur-xl border-b border-[#35385F] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-mono text-[#B8B9CC] hover:text-[#F5F5FA] py-2 border-b border-[#35385F]/50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col space-y-2">
            <a
              href="/assets/Varsha_Resume.pdf"
              download="Varsha_KS_Resume.pdf"
              onClick={() => setMobileOpen(false)}
              className="block text-center text-xs font-mono font-semibold text-[#B8B9CC] bg-[#131637] py-2.5 rounded-lg border border-[#35385F]"
            >
              RESUME
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center text-xs font-mono font-semibold text-[#F5F5FA] bg-[#5E5F8F] py-2.5 rounded-lg border border-[#454873]"
            >
              CONNECT
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
