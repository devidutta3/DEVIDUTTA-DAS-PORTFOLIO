import React from 'react';
import { Cpu, Terminal, Database, Code, Wrench, Globe, Orbit, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming':
        return Code;
      case 'Machine Learning':
        return Cpu;
      case 'Data Science':
        return Terminal;
      case 'Backend':
        return Globe;
      case 'Remote Sensing':
        return Orbit;
      default:
        return Wrench;
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-[#293056]/50 bg-[#080B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141A32] border border-[#7C3AED]/40 text-xs font-mono text-[#06B6D4]">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Technical <span className="bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#22C55E] bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A5B4FC] max-w-xl">
            A comprehensive overview of programming languages, machine learning frameworks, geospatial platforms, and engineering toolsets.
          </p>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#22C55E]"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => {
            const IconComponent = getCategoryIcon(category.title);
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-[#293056] hover:border-[#7C3AED]/50 relative group transition-all duration-300"
              >
                {/* Header Banner */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#293056]">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-r ${category.gradient} text-white shadow-md`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10152A] text-[#A5B4FC] border border-[#293056]">
                    {category.skills.length} Skills
                  </span>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group/skill relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#10152A] border border-[#293056] hover:border-[#06B6D4] hover:bg-[#141A32] transition-all cursor-default"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`}></span>
                      <span className="text-xs font-semibold text-[#F8FAFC] group-hover/skill:text-white">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[10px] text-[#A5B4FC]/70 font-mono hidden sm:inline">
                          • {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
