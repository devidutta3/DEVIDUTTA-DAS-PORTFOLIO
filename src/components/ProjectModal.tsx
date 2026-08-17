import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Sparkles, CheckCircle2, AlertCircle, ArrowRight, Layers, Cpu, Database, Award } from 'lucide-react';
import { Project } from '../types';
import { ProjectSimulators } from './ProjectSimulators';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#080B18]/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#10152A] border border-[#293056] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.theme.gradient} opacity-95 relative flex flex-col justify-between text-white shrink-0`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#080B18]/60 text-white hover:bg-[#080B18] transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-3 pr-8">
            <div className="flex flex-wrap items-center gap-2">
              {project.badge && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-[#080B18] shadow-md flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  {project.badge}
                </span>
              )}
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#080B18]/50 text-white border border-white/20">
                {project.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 divide-y divide-[#293056]/60 font-sans text-sm text-[#F8FAFC]">
          
          {/* Interactive Live Simulator */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase font-bold text-[#06B6D4] flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Interactive Model Simulator & Testing Panel
            </h4>
            <ProjectSimulators type={project.interactiveType} />
          </div>

          {/* Problem & Approach */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-[#141A32] border border-[#293056] space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase text-[#EC4899] flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-[#A5B4FC] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#141A32] border border-[#293056] space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase text-[#22C55E] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Engineering Approach
              </h4>
              <p className="text-xs sm:text-sm text-[#A5B4FC] leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Key Metrics / Dataset Info */}
          {(project.metrics || project.dataset || project.studyRegion) && (
            <div className="pt-6 space-y-3">
              <h4 className="text-xs font-mono uppercase font-bold text-[#A5B4FC] flex items-center gap-2">
                <Database className="w-4 h-4 text-[#2563EB]" />
                Dataset & Quantitative Benchmarks
              </h4>

              {project.dataset && (
                <div className="p-3 rounded-lg bg-[#141A32] border border-[#293056] text-xs text-[#A5B4FC]">
                  <strong className="text-white">Dataset:</strong> {project.dataset}
                </div>
              )}

              {project.studyRegion && (
                <div className="p-3 rounded-lg bg-[#141A32] border border-[#293056] text-xs text-[#A5B4FC] flex justify-between">
                  <span><strong className="text-white">Study Region:</strong> {project.studyRegion}</span>
                  <span><strong className="text-white">Team:</strong> {project.team}</span>
                </div>
              )}

              {project.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-1">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#141A32] border border-[#293056] text-center">
                      <span className="text-[10px] text-[#A5B4FC] uppercase block font-mono">{m.label}</span>
                      <span className="text-sm font-bold text-[#06B6D4] font-mono">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ML Workflow Steps */}
          <div className="pt-6 space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-[#A5B4FC] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#7C3AED]" />
              ML Workflow Execution
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.workflow.map((step, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#141A32] border border-[#293056] text-xs text-[#A5B4FC] flex items-start gap-2">
                  <span className="text-[#06B6D4] font-mono font-bold">•</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="pt-6 space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-[#A5B4FC] flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#06B6D4]" />
              Core Capabilities & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#A5B4FC]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results & Impact */}
          <div className="pt-6 space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-[#22C55E]">
              Key Results & Evaluation
            </h4>
            <ul className="space-y-1.5 text-xs text-[#A5B4FC] list-disc list-inside">
              {project.results.map((res, idx) => (
                <li key={idx}>{res}</li>
              ))}
            </ul>
          </div>

          {/* Future Improvements */}
          <div className="pt-6 space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-[#F97316]">
              Future Roadmap & Improvements
            </h4>
            <ul className="space-y-1.5 text-xs text-[#A5B4FC] list-disc list-inside">
              {project.futureImprovements.map((imp, idx) => (
                <li key={idx}>{imp}</li>
              ))}
            </ul>
          </div>

          {/* Technologies Used Badges */}
          <div className="pt-6 space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-[#A5B4FC]">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-[#141A32] text-xs font-mono text-[#06B6D4] border border-[#293056]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Links */}
        <div className="p-6 bg-[#080B18] border-t border-[#293056] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#141A32] border border-[#293056] hover:border-[#7C3AED] hover:bg-[#1A2242] transition-all"
            >
              <Github className="w-4 h-4 text-[#A5B4FC]" />
              <span>View GitHub Code</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r ${project.theme.gradient} shadow-md transition-all`}
              >
                <span>Live Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-[#A5B4FC] hover:text-white transition-colors"
          >
            Close Window [ESC]
          </button>
        </div>

      </div>
    </div>
  );
};
