import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative z-10 border-t border-[#293056] bg-[#080B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#293056]/60">
          
          {/* Brand & Identity */}
          <div className="space-y-1 text-center md:text-left">
            <a href="#hero" className="text-lg font-extrabold text-white tracking-tight inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#06B6D4]"></span>
              Devidutta<span className="text-[#06B6D4]">.Das</span>
            </a>
            <p className="text-xs text-[#A5B4FC]">
              B.Tech AI/ML Engineer in Progress • Building practical intelligent systems.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#141A32] text-[#A5B4FC] hover:text-white hover:bg-[#1A2242] border border-[#293056] hover:border-[#7C3AED] transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 text-[#7C3AED]" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#141A32] text-[#A5B4FC] hover:text-white hover:bg-[#1A2242] border border-[#293056] hover:border-[#2563EB] transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-[#2563EB]" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-[#141A32] text-[#A5B4FC] hover:text-white hover:bg-[#1A2242] border border-[#293056] hover:border-[#06B6D4] transition-all"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4 text-[#06B6D4]" />
            </a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-[#141A32] text-[#A5B4FC] hover:text-white border border-[#293056] hover:border-[#06B6D4] transition-all cursor-pointer flex items-center gap-2 text-xs font-mono font-semibold"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-[#06B6D4]" />
          </button>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A5B4FC]/80 font-mono gap-3 text-center sm:text-left">
          <p>
            Designed & Built by <span className="text-white font-semibold">Devidutta Das</span>
          </p>
          <p>© 2026 Devidutta Das. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
