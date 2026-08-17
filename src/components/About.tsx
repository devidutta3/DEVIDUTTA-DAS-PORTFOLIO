import React from 'react';
import { User, Award, Layers, ArrowRight, Code, Database, Cpu, CheckCircle2, CloudRain, Trophy, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, STATISTICS } from '../data/portfolioData';

export const About: React.FC = () => {
  const workflowSteps = [
    { name: "Data Collection", desc: "APIs, Satellite Imagery, CSV Datasets", color: "from-[#7C3AED] to-[#2563EB]" },
    { name: "Data Preprocessing", desc: "Missing Value Imputation, Outlier Masking", color: "from-[#2563EB] to-[#06B6D4]" },
    { name: "Feature Engineering", desc: "Lag Features, Spectral Indices (NDVI/NDWI)", color: "from-[#06B6D4] to-[#22C55E]" },
    { name: "Model Training", desc: "Scikit-learn, TensorFlow, Regression & RF", color: "from-[#22C55E] to-[#F97316]" },
    { name: "Evaluation", desc: "R², RMSE, MAE, Confusion Matrix", color: "from-[#F97316] to-[#EC4899]" },
    { name: "Deployment", desc: "FastAPI REST Endpoints, Joblib Models", color: "from-[#EC4899] to-[#7C3AED]" },
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-[#293056]/50 bg-[#080B18]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141A32] border border-[#7C3AED]/40 text-xs font-mono text-[#06B6D4]">
            <User className="w-3.5 h-3.5" />
            <span>SPECIALIZATION & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            About <span className="bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]"></div>
        </div>

        {/* Top Grid: Bio Text + Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-[#293056] space-y-5 text-[#F8FAFC]/90 text-base sm:text-lg leading-relaxed">
              
              <div className="flex items-center gap-4 pb-4 border-b border-[#293056]">
                <div className="relative shrink-0">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#06B6D4] blur-sm opacity-80"></div>
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    className="relative w-16 h-16 rounded-full object-cover border-2 border-[#141A32]"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-[#06B6D4] font-mono">{PERSONAL_INFO.education}</p>
                </div>
              </div>

              <p className="font-medium text-white text-lg sm:text-xl leading-snug">
                I am a B.Tech student specializing in <span className="text-[#06B6D4] font-semibold">Computer Science & Engineering</span> with a focus on <span className="text-[#7C3AED] font-semibold">Artificial Intelligence and Machine Learning</span>.
              </p>
              
              <p className="text-[#A5B4FC]">
                I have hands-on experience building practical projects using <strong className="text-white font-medium">Python, Pandas, NumPy, Scikit-learn, Matplotlib, FastAPI</strong>, and real-world datasets.
              </p>

              <div className="p-4 rounded-xl bg-[#10152A] border border-[#293056] space-y-2">
                <p className="text-sm font-semibold text-[#F8FAFC] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#EC4899]" />
                  Project-Driven Learning Philosophy
                </p>
                <p className="text-sm text-[#A5B4FC]">
                  My learning approach is strictly project-driven. I focus on understanding the complete end-to-end engineering workflow:
                </p>
                <div className="pt-2 text-xs font-mono font-bold text-[#06B6D4] flex flex-wrap items-center gap-1.5">
                  <span className="px-2 py-1 rounded bg-[#141A32] border border-[#293056]">Data Collection</span>
                  <span>→</span>
                  <span className="px-2 py-1 rounded bg-[#141A32] border border-[#293056]">Preprocessing</span>
                  <span>→</span>
                  <span className="px-2 py-1 rounded bg-[#141A32] border border-[#293056]">Feature Engineering</span>
                  <span>→</span>
                  <span className="px-2 py-1 rounded bg-[#141A32] border border-[#293056]">Model Training</span>
                  <span>→</span>
                  <span className="px-2 py-1 rounded bg-[#141A32] border border-[#293056]">Evaluation</span>
                  <span>→</span>
                  <span className="px-2 py-1 rounded bg-[#141A32] border border-[#293056]">Deployment</span>
                </div>
              </div>

              <p className="text-[#A5B4FC]">
                I have worked with <span className="text-[#06B6D4]">weather data</span>, <span className="text-[#F97316]">sports datasets</span>, <span className="text-[#EC4899]">student performance data</span>, and <span className="text-[#22C55E]">satellite remote-sensing data</span>.
              </p>
            </div>
          </div>

          {/* Stats Cards Grid (Right Column) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {STATISTICS.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl relative overflow-hidden group border border-[#293056] hover:border-[#7C3AED]/50"
              >
                {/* Accent Corner Glow */}
                <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`}></div>
                
                <div className="space-y-2 relative z-10">
                  <span className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-mono tracking-tight`}>
                    {stat.value}
                  </span>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-[#A5B4FC] leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ML End-to-End Workflow Pipeline Visualizer */}
        <div className="mt-8 glass-panel p-8 rounded-2xl border border-[#293056]">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-[#293056] pb-5">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#06B6D4]" />
                End-to-End Machine Learning Pipeline
              </h3>
              <p className="text-xs text-[#A5B4FC] mt-1">
                Standardized operational framework applied across all my engineering builds
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#10152A] text-[#22C55E] border border-[#22C55E]/30 font-semibold self-start md:self-auto">
              ✓ Production Standard Workflow
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-xl border border-[#293056] flex flex-col justify-between relative group hover:border-[#06B6D4]/50"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#10152A] text-[#A5B4FC] border border-[#293056]">
                      0{index + 1}
                    </span>
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#06B6D4] transition-colors">
                    {step.name}
                  </h4>
                  <p className="text-xs text-[#A5B4FC] leading-snug">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
