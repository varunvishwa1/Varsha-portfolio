import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  ArrowRight, 
  Play, 
  RotateCcw, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Server, 
  Brain, 
  Layers,
  Award,
  GraduationCap,
  Mail,
  Zap,
  Loader2
} from 'lucide-react';
import varshaVideo from '../assets/Varsha-video.mp4';
import varshaAvatar from '../assets/varsha-avatar.png';
import varshaPortrait from '../assets/varsha-avatar2.png';
import heroPng from '../assets/hero.png';
import { personalInfo, metricsData } from '../data/portfolioData';

// Portfolio project cards displayed during right-side transition reveal
const galleryProjects = [
  {
    id: 'smartit',
    title: 'SMARTIT — AI Incident Console',
    category: 'ServiceNow CAD',
    badge: 'Flagship ServiceNow App',
    image: heroPng,
    description: 'AI-assisted IT incident categorization, predictive priority recommendation, and automated Flow Designer routing.',
    tech: ['ServiceNow', 'ITSM', 'Business Rules', 'Flow Designer'],
    link: '#servicenow',
    highlights: '96.8% AI Routing Accuracy'
  },
  {
    id: 'agri-nova',
    title: 'AGRI NOVA — Crop Health AI',
    category: 'AI & Data Science',
    badge: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    description: 'Computer vision platform delivering real-time crop disease diagnosis & predictive yield analytics.',
    tech: ['Python', 'OpenCV', 'Streamlit', 'Scikit-learn'],
    link: '#ai-data',
    highlights: 'Real-Time CV Diagnosis'
  },
  {
    id: 'medical-center',
    title: 'Medical Diagnosis Portal',
    category: 'ServiceNow CAD',
    badge: 'Service Portal',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    description: 'Healthcare self-service portal streamlining patient bookings, diagnostic report access, and automated SLAs.',
    tech: ['ServiceNow', 'Record Producers', 'Widgets', 'ACLs'],
    link: '#servicenow',
    highlights: 'Automated Booking Flow'
  },
  {
    id: 'hiv-forecasting',
    title: 'Epidemiological Forecast Tool',
    category: 'AI & Data Science',
    badge: 'Predictive Analytics',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    description: 'Statistical forecasting tool using time-series analysis & ML to map spatial-temporal infection trends.',
    tech: ['Python', 'Pandas', 'Plotly', 'Time-Series'],
    link: '#ai-data',
    highlights: 'Spatial Trend Analysis'
  }
];

export default function HeroSection({ isReady = true }) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);
  const [hasPlaybackError, setHasPlaybackError] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const imageCanvasRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, skip video intro and show varsha-avatar.png directly
  useEffect(() => {
    if (shouldReduceMotion) {
      setIsPlayingVideo(false);
    }
  }, [shouldReduceMotion]);

  // Start video playback only when preloader completes and page is ready
  useEffect(() => {
    if (isReady && isPlayingVideo && videoRef.current && !shouldReduceMotion) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay fallback if blocked by browser
          setIsPlayingVideo(false);
        });
      }
    }
  }, [isReady, isPlayingVideo, shouldReduceMotion]);

  // Real-time background removal (white/grey checkerboard)
  useEffect(() => {
    let animationFrameId;
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas || !isPlayingVideo || hasPlaybackError) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    const processFrame = () => {
      if (video && video.readyState >= 2 && !video.ended) {
        if (canvas.width !== video.videoWidth && video.videoWidth > 0) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
        }

        if (canvas.width > 0 && canvas.height > 0) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = frame.data;
          const len = data.length;

          // High-quality green-screen chroma key with soft alpha matte and despill
          for (let i = 0; i < len; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            
            const maxRB = Math.max(r, b);
            const greenDiff = g - maxRB;

            if (greenDiff > 10) {
              // Calculate soft alpha matte based on green dominance
              let alpha = 1.0;
              if (greenDiff > 40) {
                  alpha = 0; // Pure background
              } else {
                  alpha = 1 - ((greenDiff - 10) / 30); // Soft edge transition
              }
              data[i + 3] = Math.floor(data[i + 3] * alpha);
              
              // Green spill suppression: remove green halos from semi-transparent edges (hair/clothing)
              if (alpha > 0) {
                  data[i + 1] = Math.min(g, maxRB + (g - maxRB) * 0.2);
              }
            } else if (g > maxRB) {
                // Mild despill for opaque foreground pixels that have slight green bounce light
                data[i + 1] = Math.min(g, maxRB + (g - maxRB) * 0.5);
            }
          }
          ctx.putImageData(frame, 0, 0);
        }
      }
      animationFrameId = requestAnimationFrame(processFrame);
    };

    animationFrameId = requestAnimationFrame(processFrame);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlayingVideo, hasPlaybackError]);

  // Remove checkerboard background from the static avatar image
  useEffect(() => {
    if (isPlayingVideo || !imageCanvasRef.current) return;
    
    const canvas = imageCanvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    const img = new Image();
    img.src = varshaAvatar;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = frame.data;
      const len = data.length;

      for (let i = 0; i < len; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        const maxRB = Math.max(r, b);
        const greenDiff = g - maxRB;

        if (greenDiff > 10) {
          let alpha = 1.0;
          if (greenDiff > 40) {
              alpha = 0;
          } else {
              alpha = 1 - ((greenDiff - 10) / 30);
          }
          data[i + 3] = Math.floor(data[i + 3] * alpha);
          
          if (alpha > 0) {
              data[i + 1] = Math.min(g, maxRB + (g - maxRB) * 0.2);
          }
        } else if (g > maxRB) {
            data[i + 1] = Math.min(g, maxRB + (g - maxRB) * 0.5);
        }
      }
      ctx.putImageData(frame, 0, 0);
    };
  }, [isPlayingVideo]);



  // When video completes playing fully, switch seamlessly to varsha-avatar.png
  const handleTimeUpdate = () => {
    if (!videoRef.current || !isPlayingVideo) return;
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;

    // Transition only when the video finishes playing completely (near 100% end)
    if (duration > 0 && currentTime >= duration - 0.15) {
      setIsPlayingVideo(false);
    }
  };

  const handleVideoEnded = () => {
    setIsPlayingVideo(false);
  };

  const replayIntro = () => {
    setIsPlayingVideo(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }, 50);
  };

  const filteredProjects = activeCategory === 'All' 
    ? galleryProjects 
    : galleryProjects.filter(p => p.category === activeCategory);

  return (
    <motion.section id="hero" className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden bg-[#101126]" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }}>
      {/* Premium Cinematic Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#1F244C]/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-[#3D4069]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#5E5F8F]/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full space-y-10">
        
        {/* Top Header Tagline & Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-md bg-[#131637] border border-[#35385F] shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#5E5F8F] animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-[#B8B9CC] uppercase">
              SERVICE NOW CAD | AI & DATA SCIENCE | WORKFLOW AUTOMATION
            </span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={replayIntro}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-md bg-[#131637] hover:bg-[#1F244C] border border-[#35385F] text-xs font-mono text-[#B8B9CC] hover:text-[#F5F5FA] transition-all cursor-pointer shadow"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#5E5F8F]" />
            <span>REPLAY INTRO VIDEO</span>
          </motion.button>
        </div>

        {/* 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">

          {/* LEFT SIDE: CHARACTER AVATAR / INTRO VIDEO CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="w-full relative group">
              {/* Dynamic Frame Container: Frameless during video entrance, Card Frame when Avatar image is active */}
              <motion.div 
                layout
                className={`relative aspect-[4/5] rounded-2xl overflow-hidden transition-all duration-700 ${
                  isPlayingVideo && !hasPlaybackError
                    ? 'bg-transparent border-0 shadow-none'
                    : 'bg-gradient-to-b from-[#191C3E] via-[#131637] to-[#101126] border-2 border-[#5E5F8F]/60 shadow-[0_0_45px_rgba(94,95,143,0.35)] space-glow'
                }`}
              >
                {/* ALWAYS RENDER AVATAR LAYER UNDERNEATH */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center z-10"
                >
                  <canvas
                    ref={imageCanvasRef}
                    className="w-full h-full object-cover object-top filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.55)] scale-[1.15]"
                  />

                  {/* Card overlay and badge (only show when video finishes) */}
                  <AnimatePresence>
                    {!isPlayingVideo && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 z-20 pointer-events-none"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-[#101126] via-transparent to-transparent opacity-80" />

                        {/* Character Name & Certification Overlay Badge */}
                        <motion.div 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#101126]/90 backdrop-blur-md border border-[#35385F] flex items-center justify-between shadow-lg pointer-events-auto"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg bg-[#5E5F8F]/20 border border-[#5E5F8F] flex items-center justify-center shrink-0">
                              <ShieldCheck className="w-5 h-5 text-[#5E5F8F]" />
                            </div>
                            <div>
                              <span className="font-heading font-extrabold text-[#F5F5FA] text-sm block leading-none tracking-wide">
                                VARSHA K S
                              </span>
                              <span className="text-[10px] font-mono text-[#5E5F8F] uppercase block mt-1 tracking-wider">
                                SERVICENOW CAD CERTIFIED
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* SUPERIMPOSE VIDEO LAYER ON TOP */}
                <AnimatePresence>
                  {isPlayingVideo && !hasPlaybackError && (
                    <motion.div
                      key="video-layer"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                      className="absolute inset-0 w-full h-full flex items-center justify-center z-30"
                    >
                      <video
                        ref={videoRef}
                        src={varshaVideo}
                        muted
                        playsInline
                        onTimeUpdate={handleTimeUpdate}
                        onEnded={handleVideoEnded}
                        onError={() => setHasPlaybackError(true)}
                        className="hidden"
                      />

                      <canvas
                        ref={canvasRef}
                        className="w-full h-full object-cover object-top filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] scale-[1.15]"
                      />

                      {/* Subtle Radial Blue Glow behind character during entrance */}
                      <div className="absolute inset-0 bg-radial from-[#5E5F8F]/30 via-transparent to-transparent pointer-events-none" />

                      {/* Skip Video Button Overlay */}
                      <button
                        onClick={() => setIsPlayingVideo(false)}
                        className="absolute top-3 right-3 z-40 px-3 py-1 rounded-full bg-[#101126]/80 hover:bg-[#5E5F8F] text-[#F5F5FA] font-mono text-[10px] uppercase tracking-wider transition-all border border-[#35385F] cursor-pointer backdrop-blur-md shadow-md"
                      >
                        Skip Video
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: BIO & FEATURED PORTFOLIO PROJECTS GALLERY */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Intro Heading & Bio */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#5E5F8F] uppercase tracking-widest font-semibold">
                <Sparkles className="w-4 h-4 text-[#5E5F8F]" />
                <span>SERVICE NOW APPLICATION DEVELOPER</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#F5F5FA] tracking-tight leading-tight">
                VARSHA <span className="text-[#5E5F8F]">K S</span>
              </h1>
              <p className="text-lg sm:text-xl font-heading font-medium text-[#B8B9CC] leading-snug">
                "Building smarter enterprise applications & automated workflows."
              </p>
            </div>

            {/* Filter Tabs & Gallery Header */}
            <div className="space-y-4 pt-2 border-t border-[#35385F]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono text-[#F5F5FA] uppercase tracking-wider font-bold flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-[#5E5F8F]" />
                  <span>FEATURED PORTFOLIO PROJECTS</span>
                </span>

                {/* Category Filter Chips */}
                <div className="flex flex-wrap gap-1.5 bg-[#131637] p-1 rounded-lg border border-[#35385F]">
                  {['All', 'ServiceNow CAD', 'AI & Data Science'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 py-1 text-xs font-mono rounded transition-all cursor-pointer ${
                        activeCategory === cat
                          ? 'bg-[#5E5F8F] text-[#F5F5FA] font-semibold shadow'
                          : 'text-[#8587A3] hover:text-[#F5F5FA] hover:bg-[#1F244C]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Staggered Cards Grid */}
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {filteredProjects.map((proj, idx) => (
                  <motion.div
                    key={proj.id}
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: idx * 0.1, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="space-card p-4 border border-[#35385F] hover:border-[#5E5F8F] transition-all bg-[#131637]/90 rounded-xl flex flex-col justify-between group space-glow hover:-translate-y-1"
                  >
                    <div className="space-y-3">
                      {/* Image & Badge Header */}
                      <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-[#101126] border border-[#35385F]">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#101126] via-transparent to-transparent opacity-80" />
                        <span className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-mono font-semibold text-[#F5F5FA] bg-[#101126]/90 backdrop-blur-md rounded border border-[#35385F]">
                          {proj.badge}
                        </span>
                      </div>

                      {/* Details */}
                      <div>
                        <span className="text-[10px] font-mono text-[#5E5F8F] uppercase block font-semibold">
                          {proj.category}
                        </span>
                        <h3 className="font-heading font-bold text-[#F5F5FA] text-base group-hover:text-[#5E5F8F] transition-colors leading-snug">
                          {proj.title}
                        </h3>
                        <p className="text-xs text-[#B8B9CC] mt-1 line-clamp-2 leading-relaxed">
                          {proj.description}
                        </p>
                      </div>
                    </div>

                    {/* Tech tags & Link Footer */}
                    <div className="pt-3 mt-3 border-t border-[#35385F]/60 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[#5E5F8F] font-semibold">{proj.highlights}</span>
                      <a
                        href={proj.link}
                        className="inline-flex items-center space-x-1 text-[#F5F5FA] hover:text-[#5E5F8F] transition-colors"
                      >
                        <span>Explore</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Hero Credentials & CTAs */}
            <div className="pt-4 border-t border-[#35385F] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-mono text-[#F5F5FA] bg-[#131637] rounded-md border border-[#35385F] flex items-center space-x-1.5">
                  <Award className="w-3.5 h-3.5 text-[#5E5F8F]" />
                  <span>ServiceNow CAD Certified</span>
                </span>
                <span className="px-3 py-1 text-xs font-mono text-[#F5F5FA] bg-[#131637] rounded-md border border-[#35385F] flex items-center space-x-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#5E5F8F]" />
                  <span>B.Tech AI & Data Science (8.65 CGPA)</span>
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href="#servicenow"
                  className="px-5 py-2.5 rounded-lg bg-[#5E5F8F] hover:bg-[#3D4069] text-[#F5F5FA] font-mono text-xs tracking-wider uppercase font-semibold transition-all border border-[#454873] flex items-center space-x-2 shadow-lg"
                >
                  <span>VIEW ALL WORKS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5F5FA]" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Metrics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#35385F]"
        >
          {metricsData.map((m) => (
            <div key={m.id} className="space-card p-4 border border-[#35385F] hover:border-[#5E5F8F]">
              <span className="text-[11px] font-mono text-[#5E5F8F] block mb-1">
                {m.id} — {m.label}
              </span>
              <span className="text-sm md:text-base font-mono font-bold text-[#F5F5FA] tracking-wider uppercase">
                {m.val}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}



