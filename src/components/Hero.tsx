import React from 'react';
import { ArrowRight, FileText, Github, Sparkles, Terminal, Cpu, Database, Network } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Text Content */}
          <div className="lg:col-span-8 flex flex-col items-start text-left space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141A32] border border-[#7C3AED]/40 shadow-lg shadow-[#7C3AED]/10 text-xs font-mono font-semibold tracking-wide text-[#A5B4FC]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span className="uppercase text-[#F8FAFC] font-semibold">{PERSONAL_INFO.role}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent drop-shadow-sm">
                Devidutta Das
              </span>
              .
            </h1>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F8FAFC]/90 tracking-tight max-w-3xl">
              {PERSONAL_INFO.subheading}
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#A5B4FC] max-w-2xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* View Projects */}
              <button
                id="hero-view-projects-btn"
                onClick={scrollToProjects}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] shadow-lg shadow-[#7C3AED]/25 hover:shadow-[#06B6D4]/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Download Resume */}
              <button
                id="hero-download-resume-btn"
                onClick={onOpenResume}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#141A32] border border-[#293056] hover:border-[#7C3AED] hover:bg-[#1A2242] shadow-md hover:shadow-[#7C3AED]/20 transition-all duration-200 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#06B6D4] group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </button>

              {/* GitHub */}
              <a
                id="hero-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-bold text-sm text-[#F8FAFC] bg-[#10152A] border border-[#293056] hover:border-[#EC4899] hover:bg-[#141A32] shadow-md transition-all duration-200"
              >
                <Github className="w-4 h-4 text-[#EC4899] group-hover:rotate-12 transition-transform" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Tech Stack Pills in Hero */}
            <div className="pt-6 border-t border-[#293056]/60 w-full flex flex-wrap items-center gap-2 text-xs font-mono text-[#A5B4FC]">
              <span className="text-[#F8FAFC]/60 font-sans font-semibold mr-2">Core Stack:</span>
              <span className="px-2.5 py-1 rounded-md bg-[#141A32] border border-[#293056] text-[#06B6D4]">Python</span>
              <span className="px-2.5 py-1 rounded-md bg-[#141A32] border border-[#293056] text-[#7C3AED]">Scikit-learn</span>
              <span className="px-2.5 py-1 rounded-md bg-[#141A32] border border-[#293056] text-[#2563EB]">FastAPI</span>
              <span className="px-2.5 py-1 rounded-md bg-[#141A32] border border-[#293056] text-[#EC4899]">TensorFlow</span>
              <span className="px-2.5 py-1 rounded-md bg-[#141A32] border border-[#293056] text-[#22C55E]">Google Earth Engine</span>
            </div>

          </div>

          {/* Futuristic Visual Terminal Card / Graphic Badge on Right */}
          <div className="lg:col-span-4 w-full flex justify-center">
            <div className="w-full max-w-md glass-card rounded-2xl p-6 relative overflow-hidden gradient-border group">
              
              {/* Profile Photo Header */}
              <div className="flex items-center gap-4 pb-4 mb-4 border-b border-[#293056]">
                <div className="relative group/avatar shrink-0">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#06B6D4] blur-sm opacity-80 group-hover/avatar:opacity-100 transition-opacity"></div>
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    className="relative w-16 h-16 rounded-full object-cover border-2 border-[#141A32] shadow-xl"
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-base tracking-tight">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-[#06B6D4] font-mono">B.Tech AI/ML • Odisha, India</p>
                  <div className="flex items-center gap-2 text-[11px] text-[#A5B4FC] font-mono mt-1">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
                    <span>Founder @ CodeUdaan</span>
                  </div>
                </div>
              </div>

              {/* Glow Accent Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#293056]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EC4899]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F97316]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"></div>
                </div>
                <span className="text-[11px] font-mono text-[#06B6D4] flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5" />
                  ai_pipeline.py
                </span>
              </div>

              {/* Simulated ML Terminal Output */}
              <div className="space-y-3 font-mono text-xs leading-relaxed text-[#A5B4FC]">
                <div className="text-[#22C55E] flex items-center gap-2">
                  <span>✓</span> [INFO] Loading dataset... 135,018 records
                </div>
                <div className="text-[#06B6D4]">
                  &gt; Preprocessing & Feature Engineering...
                </div>
                <div className="pl-3 border-l-2 border-[#7C3AED] space-y-1 text-[#F8FAFC]/80">
                  <p>• Weather API: Open-Meteo REST</p>
                  <p>• Earth Engine: Sentinel-1 & 2</p>
                  <p>• Model: Scikit-learn + Joblib</p>
                </div>
                <div className="p-3 rounded-xl bg-[#080B18]/90 border border-[#293056] space-y-1.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-[#A5B4FC]">Overall CGPA:</span>
                    <span className="font-bold text-[#22C55E]">8.5 / 10.0</span>
                  </div>
                  <div className="w-full bg-[#141A32] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#7C3AED] to-[#22C55E] h-full w-[85%] rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center text-[11px] pt-1">
                    <span className="text-[#A5B4FC]">Hackathon:</span>
                    <span className="font-bold text-[#06B6D4]">ISRO Antariksh '26</span>
                  </div>
                </div>
                <div className="text-[#EC4899] flex items-center gap-2 pt-1">
                  <span className="animate-pulse">●</span> Service Status: FastAPI Ready (Port 8000)
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="mt-5 pt-4 border-t border-[#293056] flex items-center justify-between text-[11px] font-mono text-[#A5B4FC]/80">
                <span className="flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-[#7C3AED]" /> ML Core
                </span>
                <span className="flex items-center gap-1">
                  <Database className="w-3.5 h-3.5 text-[#2563EB]" /> Data Pipelines
                </span>
                <span className="flex items-center gap-1">
                  <Network className="w-3.5 h-3.5 text-[#06B6D4]" /> REST APIs
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
