import React from 'react';
import { Users, Sparkles, CheckCircle2, Rocket, Code2, Github, Calendar, HeartHandshake, ExternalLink, Globe } from 'lucide-react';
import { COMMUNITY_LEADERSHIP } from '../data/portfolioData';

export const CodeUdaanCommunity: React.FC = () => {
  return (
    <section id="community" className="py-24 relative z-10 border-t border-[#293056]/50 bg-[#080B18]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141A32] border border-[#EC4899]/40 text-xs font-mono text-[#EC4899]">
            <Users className="w-3.5 h-3.5" />
            <span>STUDENT INITIATIVE & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Leadership & <span className="bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#2563EB] bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A5B4FC] max-w-xl">
            Empowering fellow student engineers through peer learning, open-source projects, and hands-on AI/ML project workflows.
          </p>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#2563EB]"></div>
        </div>

        {/* Community Feature Banner */}
        <div className="glass-panel rounded-3xl p-8 lg:p-12 border border-[#293056] relative overflow-hidden gradient-border group">
          
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#7C3AED]/15 via-[#EC4899]/15 to-[#2563EB]/15 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#2563EB] text-white shadow-md">
                  FOUNDER & LEAD
                </span>
                <span className="text-xs font-mono text-[#A5B4FC] flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10152A] border border-[#293056]">
                  <Calendar className="w-3.5 h-3.5 text-[#06B6D4]" />
                  {COMMUNITY_LEADERSHIP.period}
                </span>
                <a
                  href="https://codeudaan.ai.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#06B6D4] hover:text-white flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#06B6D4]/10 hover:bg-[#06B6D4]/20 border border-[#06B6D4]/40 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#06B6D4]" />
                  <span>codeudaan.ai.studio</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex items-center justify-between gap-4">
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {COMMUNITY_LEADERSHIP.organization}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-[#A5B4FC] leading-relaxed">
                {COMMUNITY_LEADERSHIP.description}
              </p>

              {/* Responsibilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {COMMUNITY_LEADERSHIP.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#10152A] border border-[#293056]">
                    <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#F8FAFC]/90 leading-snug">{resp}</span>
                  </div>
                ))}
              </div>

              {/* Visit Community Website CTA Button */}
              <div className="pt-2">
                <a
                  href="https://codeudaan.ai.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#2563EB] text-white font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-95 active:scale-98 transition-all"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit CodeUdaan Website (codeudaan.ai.studio)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Right Community Stats & Visual Box */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
              <div className="p-6 rounded-2xl bg-[#10152A]/90 border border-[#293056] space-y-5">
                <div className="flex items-center gap-3 border-b border-[#293056] pb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Community Focus</h4>
                    <p className="text-xs text-[#A5B4FC]">Project-based peer learning network</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-[#A5B4FC]">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#141A32]">
                    <span className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-[#7C3AED]" /> Technical Sessions
                    </span>
                    <span className="font-mono font-bold text-white">Weekly Hands-On</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#141A32]">
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-[#EC4899]" /> Open Source
                    </span>
                    <span className="font-mono font-bold text-[#22C55E]">GitHub Collab</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#141A32]">
                    <span className="flex items-center gap-2">
                      <HeartHandshake className="w-4 h-4 text-[#2563EB]" /> Mentorship
                    </span>
                    <span className="font-mono font-bold text-[#06B6D4]">Student Peer Support</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-r from-[#7C3AED]/20 via-[#EC4899]/20 to-[#2563EB]/20 border border-[#7C3AED]/30 text-center text-xs text-[#A5B4FC]">
                  "Empowering students to transform conceptual theory into functional code."
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
