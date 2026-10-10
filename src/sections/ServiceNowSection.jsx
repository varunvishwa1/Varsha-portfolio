import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, Layers, Cpu, CheckCircle2, ArrowUpRight, Activity, Terminal } from 'lucide-react';
import { serviceNowSkills, serviceNowProjects } from '../data/portfolioData';

export default function ServiceNowSection() {
  const [selectedProject, setSelectedProject] = useState(serviceNowProjects[0]);

  return (
    <motion.section id="servicenow" className="py-12 relative z-10" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#35385F] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#5E5F8F] text-xs font-mono tracking-widest uppercase mb-3">
              <Server className="w-4 h-4" />
              <span>02 / SERVICENOW</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5FA] font-heading tracking-tight">
              Enterprise workflows. <span className="text-[#5E5F8F]">Smarter applications.</span>
            </h2>
          </div>
          <p className="text-[#8587A3] text-sm md:text-base max-w-md">
            Architecting robust enterprise solutions, custom application tables, security ACLs, and automated Flow Designer sequences on ServiceNow.
          </p>
        </div>

        {/* CAD Certification Hero Card */}
        <div className="space-card p-8 md:p-10 border border-[#5E5F8F] relative overflow-hidden bg-gradient-to-br from-[#131637] via-[#1F244C]/60 to-[#101126] shadow-2xl space-glow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#5E5F8F]/20 border border-[#5E5F8F] text-[11px] font-mono font-semibold text-[#F5F5FA] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#5E5F8F]" />
                <span>OFFICIAL CERTIFICATION</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#F5F5FA] font-heading tracking-tight leading-tight">
                SERVICE NOW CERTIFIED APPLICATION DEVELOPER (CAD)
              </h3>

              <p className="text-[#B8B9CC] text-sm leading-relaxed max-w-2xl">
                Demonstrated mastery in creating custom scoped applications, configuring ITSM data models, writing client & server scripts, establishing Access Control Lists (ACLs), and orchestrating Flow Designer business workflows.
              </p>
            </div>

            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
              <div className="w-36 h-36 rounded-2xl bg-[#101126] border-2 border-[#5E5F8F] flex flex-col items-center justify-center p-4 text-center space-y-2 shadow-2xl">
                <ShieldCheck className="w-12 h-12 text-[#5E5F8F]" />
                <span className="font-mono font-bold text-[#F5F5FA] text-lg tracking-widest">CAD</span>
                <span className="text-[9px] font-mono text-[#8587A3] uppercase">SERVICENOW</span>
              </div>
            </div>
          </div>
        </div>

        {/* ServiceNow Technical Competencies Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[#F5F5FA] font-heading flex items-center space-x-2">
            <Terminal className="w-5 h-5 text-[#5E5F8F]" />
            <span>ServiceNow Application Development Capabilities</span>
          </h3>

          <div className="flex flex-wrap gap-2.5">
            {serviceNowSkills.map((skill, idx) => (
              <div
                key={idx}
                className="px-4 py-2 text-xs font-mono text-[#F5F5FA] bg-[#131637] rounded-lg border border-[#35385F] hover:border-[#5E5F8F] hover:bg-[#1F244C] transition-all"
              >
                ✓ {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Flagship Project: SMARTIT Interactive Presentation */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-[#5E5F8F] uppercase tracking-widest block">
                FLAGSHIP APPLICATION
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#F5F5FA] font-heading">
                SMARTIT — AI-Assisted IT Incident Management
              </h3>
            </div>
            <span className="px-3 py-1 text-[10px] font-mono text-[#8587A3] bg-[#131637] border border-[#35385F] rounded">
              PORTFOLIO DEMONSTRATION
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Project Overview */}
            <div className="lg:col-span-5 space-card p-8 border border-[#35385F] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-[#B8B9CC] text-sm leading-relaxed">
                  {serviceNowProjects[0].description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-[#8587A3] uppercase block">
                    KEY ENTERPRISE FEATURES:
                  </span>
                  <ul className="space-y-2 text-xs text-[#F5F5FA] font-mono">
                    {serviceNowProjects[0].features.map((feat, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-[#5E5F8F] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#35385F]">
                <span className="text-[10px] font-mono text-[#8587A3] uppercase block mb-2">
                  TECHNOLOGY STACK:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {serviceNowProjects[0].tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[10px] font-mono text-[#B8B9CC] bg-[#101126] rounded border border-[#35385F]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Mock Incident Management Dashboard */}
            <div className="lg:col-span-7 space-card p-6 border border-[#35385F] bg-[#101126] font-mono text-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#35385F] mb-4">
                  <span className="text-[#F5F5FA] font-bold tracking-wider">
                    SMARTIT // INCIDENT WORKFLOW CONSOLE
                  </span>
                  <span className="text-[10px] text-[#5E5F8F]">DEMO DATA</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-[#131637] rounded border border-[#35385F] space-y-1">
                    <div className="flex justify-between text-[#8587A3] text-[10px]">
                      <span>INCIDENT: INC0010482</span>
                      <span className="text-[#5E5F8F]">STATE: IN PROGRESS</span>
                    </div>
                    <div className="text-[#F5F5FA] font-semibold">
                      "Database connectivity timeout on production billing portal"
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-2.5 bg-[#1F244C]/50 rounded border border-[#35385F]">
                      <span className="block text-[9px] text-[#8587A3]">AI CATEGORY</span>
                      <span className="text-[#F5F5FA] font-bold">Database</span>
                    </div>
                    <div className="p-2.5 bg-[#1F244C]/50 rounded border border-[#35385F]">
                      <span className="block text-[9px] text-[#8587A3]">AI PRIORITY</span>
                      <span className="text-[#F5F5FA] font-bold">Critical (P1)</span>
                    </div>
                    <div className="p-2.5 bg-[#1F244C]/50 rounded border border-[#35385F]">
                      <span className="block text-[9px] text-[#8587A3]">CONFIDENCE</span>
                      <span className="text-[#5E5F8F] font-bold">96.8%</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#131637] rounded border border-[#35385F] space-y-2">
                    <div className="flex justify-between text-[10px] text-[#8587A3]">
                      <span>AUTOMATED ROUTING & SLA</span>
                      <span>FLOW DESIGNER</span>
                    </div>
                    <div className="text-[#B8B9CC] text-[11px]">
                      Routed to: <strong className="text-[#F5F5FA]">Database Admin Support Group</strong>
                    </div>
                    <div className="text-[#8587A3] text-[10px]">
                      Response SLA Target: 15 mins | Status: <span className="text-[#F5F5FA]">Within SLA</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#35385F] text-[10px] text-[#8587A3] flex justify-between">
                <span>BUSINESS RULES ACTIVE</span>
                <span>CLIENT SCRIPTS LOADED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional ServiceNow Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceNowProjects.slice(1).map((proj) => (
            <div
              key={proj.id}
              className="space-card p-8 border border-[#35385F] space-card-hover flex flex-col justify-between space-y-6"
            >
              <div>
                <span className="text-[10px] font-mono text-[#5E5F8F] uppercase tracking-widest block mb-1">
                  SERVICENOW APPLICATION
                </span>
                <h4 className="text-xl font-bold text-[#F5F5FA] font-heading mb-2">
                  {proj.title}
                </h4>
                <p className="text-[#8587A3] text-xs font-mono mb-4">{proj.subtitle}</p>
                <p className="text-[#B8B9CC] text-sm leading-relaxed">{proj.description}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#35385F]">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
