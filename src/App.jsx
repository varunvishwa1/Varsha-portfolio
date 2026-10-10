import React, { useState } from 'react';
import Preloader from './components/Preloader';
import StarfieldCanvas from './components/StarfieldCanvas';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServiceNowSection from './sections/ServiceNowSection';
import AiDataSection from './sections/AiDataSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationCertificationsSection from './sections/EducationCertificationsSection';
import WorkflowSection from './sections/WorkflowSection';
import SupportingSection from './sections/SupportingSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#101126] text-[#F5F5FA] font-sans relative overflow-x-hidden selection:bg-[#5E5F8F] selection:text-[#F5F5FA]">
      {/* Intro Preloader Animation */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* Deep Space Background Canvas Starfield */}
      <StarfieldCanvas />

      {/* Main Portfolio Layout */}
      <div className={`relative z-10 transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <HeroSection isReady={!loading} />
          <AboutSection />
          <ServiceNowSection />
          <AiDataSection />
          <ExperienceSection />
          <EducationCertificationsSection />
          <WorkflowSection />
          <SupportingSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
