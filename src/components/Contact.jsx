import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial Video',
    budget: '$5k - $10k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: 'Commercial Video',
        budget: '$5k - $10k',
        message: '',
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 text-indigo-400 text-xs font-mono tracking-widest uppercase mb-3">
                <MessageSquare className="w-4 h-4" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
                LET'S CREATE SOMETHING <span className="gradient-accent-text">ICONIC</span>.
              </h2>
              <p className="text-slate-400 text-base mt-4 font-light leading-relaxed">
                Available for worldwide commercial commissions, music video directions, color grading contracts, and creative consulting.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4">
              <a
                href="mailto:varsha.creative@example.com"
                className="glass-panel p-5 rounded-2xl glass-panel-hover flex items-center space-x-4 border border-white/10 group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase block">Email Inquiries</span>
                  <span className="text-base font-bold text-white font-heading group-hover:text-indigo-400 transition-colors">
                    varsha.creative@example.com
                  </span>
                </div>
              </a>

              <div className="glass-panel p-5 rounded-2xl flex items-center space-x-4 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase block">Based In</span>
                  <span className="text-base font-bold text-white font-heading">
                    Mumbai & Global Remote
                  </span>
                </div>
              </div>
            </div>

            {/* Social Dock */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-4">
                Social Networks & Reel Links
              </span>
              <div className="flex flex-wrap gap-3">
                {['YouTube', 'Vimeo', 'Instagram', 'LinkedIn', 'Behance'].map((soc) => (
                  <a
                    key={soc}
                    href="#"
                    className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-xl glass-panel hover:bg-white/10 border border-white/10 flex items-center space-x-1 transition-all"
                  >
                    <span>{soc}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 glow-indigo">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">Inquiry Received!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out. I'll review your project details and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-white font-heading mb-6">
                    Project Inquiry Form
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                        Project Category
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      >
                        <option value="Commercial Video">Commercial / Brand Film</option>
                        <option value="Music Video">Music Video Production</option>
                        <option value="Color Grading">Color Grading Only</option>
                        <option value="Motion Graphics">3D Motion & VFX</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      >
                        <option value="< $5k">Under $5,000</option>
                        <option value="$5k - $10k">$5,000 - $10,000</option>
                        <option value="$10k - $25k">$10,000 - $25,000</option>
                        <option value="$25k+">$25,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                      Project Overview & Timeline *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your concept, deliverables, and target deadline..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-base font-semibold text-white rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-all shadow-xl glow-indigo flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Project Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
