import React from 'react';
import { Award, GraduationCap, Users, Code, Trophy, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Academics':
        return GraduationCap;
      case 'Leadership':
        return Users;
      case 'Hackathon':
        return Trophy;
      default:
        return Award;
    }
  };

  return (
    <section id="achievements" className="py-24 relative z-10 border-t border-[#293056]/50 bg-[#080B18]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141A32] border border-[#7C3AED]/40 text-xs font-mono text-[#06B6D4]">
            <Award className="w-3.5 h-3.5" />
            <span>MILESTONES & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Key <span className="bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A5B4FC] max-w-xl">
            Verified academic benchmarks, hackathon participation, and community leadership milestones.
          </p>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = getIcon(item.category);
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-[#293056] hover:border-[#06B6D4]/50 relative group transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white shadow-md shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#10152A] text-[#06B6D4] border border-[#293056]">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#06B6D4] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A5B4FC] leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
