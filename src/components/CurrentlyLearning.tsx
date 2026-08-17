import React from 'react';
import { BookOpen, Sparkles, Compass, CheckCircle2, Loader2, ArrowUpRight } from 'lucide-react';
import { CURRENTLY_LEARNING } from '../data/portfolioData';

export const CurrentlyLearning: React.FC = () => {
  return (
    <section id="learning" className="py-24 relative z-10 border-t border-[#293056]/50 bg-[#080B18]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141A32] border border-[#EC4899]/40 text-xs font-mono text-[#EC4899]">
            <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
            <span>GROWTH ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Currently <span className="bg-gradient-to-r from-[#EC4899] via-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent">Learning</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A5B4FC] max-w-2xl">
            As an engineering student, I prioritize transparent, continuous growth. These topics represent my active learning focus areas and exploration frontiers.
          </p>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#EC4899] to-[#2563EB]"></div>
        </div>

        {/* Learning Note Disclaimer */}
        <div className="mb-12 glass-panel p-4 rounded-xl border border-[#EC4899]/30 bg-[#EC4899]/5 flex items-center gap-3 text-xs sm:text-sm text-[#A5B4FC]">
          <div className="p-2 rounded-lg bg-[#EC4899]/20 text-[#EC4899] shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <p>
            <strong className="text-white font-semibold">Active Learning Disclosure:</strong> These topics are actively studied in coursework, self-driven projects, and engineering tutorials. They reflect active growth areas rather than claimed expert mastery.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {CURRENTLY_LEARNING.map((node, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 border border-[#293056] hover:border-[#EC4899]/50 relative group transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Node Status Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#10152A] text-[#06B6D4] border border-[#06B6D4]/30 flex items-center gap-1.5">
                    <Loader2 className="w-3 h-3 animate-spin text-[#06B6D4]" />
                    {node.status}
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#A5B4FC]/60">
                    Step 0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#EC4899] transition-colors flex items-center justify-between">
                  <span>{node.title}</span>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${node.gradient} shadow-sm shadow-[#EC4899]/50`}></div>
                </h3>

                {/* Description */}
                <p className="text-xs text-[#A5B4FC] leading-relaxed">
                  {node.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="mt-6 pt-4 border-t border-[#293056] flex flex-wrap gap-1.5">
                {node.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10152A] text-[#A5B4FC] border border-[#293056]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
