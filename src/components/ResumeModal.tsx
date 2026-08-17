import React from 'react';
import { X, Download, Printer, Mail, Github, Linkedin, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080B18]/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Card Container */}
      <div className="relative w-full max-w-4xl bg-[#10152A] border border-[#293056] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-6 bg-[#141A32] border-b border-[#293056] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#06B6D4]"></span>
            <h3 className="text-base font-bold text-white font-mono">Resume Preview — Devidutta Das</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-[#10152A] text-[#A5B4FC] hover:text-white border border-[#293056] transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Print / Save as PDF"
            >
              <Printer className="w-4 h-4 text-[#06B6D4]" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#10152A] text-[#A5B4FC] hover:text-white border border-[#293056] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Pane */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans text-xs sm:text-sm text-[#F8FAFC]">
          
          {/* Resume Header */}
          <div className="border-b border-[#293056] pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Devidutta Das</h1>
                <p className="text-xs sm:text-sm font-semibold text-[#06B6D4]">
                  B.Tech Student in Computer Science & Engineering (AI / ML)
                </p>
              </div>

              <div className="text-xs text-[#A5B4FC] space-y-1 font-mono">
                <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#06B6D4]" /> {PERSONAL_INFO.email}</p>
                <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#22C55E]" /> {PERSONAL_INFO.location}</p>
              </div>
            </div>

            <p className="text-xs text-[#A5B4FC] leading-relaxed pt-2">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education & Academic Metrics */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold uppercase text-[#06B6D4] border-b border-[#293056] pb-1">
              Education
            </h2>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-3.5 rounded-xl bg-[#141A32] border border-[#293056]">
              <div>
                <h3 className="font-bold text-white">Bachelor of Technology (B.Tech) in CS & Engineering</h3>
                <p className="text-xs text-[#A5B4FC]">Specialization in Artificial Intelligence & Machine Learning</p>
              </div>
              <div className="text-right font-mono text-xs">
                <span className="text-[#22C55E] font-bold">Overall CGPA: 8.5 / 10.0</span>
                <span className="text-[#A5B4FC] block text-[11px]">Recent SGPA: 8.13</span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold uppercase text-[#7C3AED] border-b border-[#293056] pb-1">
              Technical Skillset
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#141A32] border border-[#293056] space-y-1">
                  <span className="font-bold text-white block">{cat.title}</span>
                  <p className="text-[#A5B4FC] font-mono text-[11px]">
                    {cat.skills.map(s => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-sm font-mono font-bold uppercase text-[#2563EB] border-b border-[#293056] pb-1">
              Key Engineering Projects
            </h2>

            <div className="space-y-4">
              {PROJECTS.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-[#141A32] border border-[#293056] space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-sm">{p.title}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10152A] text-[#06B6D4]">{p.category}</span>
                  </div>
                  <p className="text-xs text-[#A5B4FC]">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.technologies.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080B18] text-[#A5B4FC]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold uppercase text-[#EC4899] border-b border-[#293056] pb-1">
              Leadership & Initiatives
            </h2>

            <div className="p-4 rounded-xl bg-[#141A32] border border-[#293056] space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-white">Founder — CodeUdaan</h3>
                <span className="text-xs font-mono text-[#A5B4FC]">2025 — Present</span>
              </div>
              <p className="text-xs text-[#A5B4FC]">
                Founded student technology community guiding peers through Machine Learning, Python programming, and project-based software development.
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#141A32] border-t border-[#293056] flex justify-between items-center text-xs font-mono text-[#A5B4FC] shrink-0">
          <span>Devidutta Das • B.Tech AI/ML Portfolio</span>
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white flex items-center gap-1.5 shadow-md hover:opacity-90 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Resume</span>
          </button>
        </div>

      </div>
    </div>
  );
};
