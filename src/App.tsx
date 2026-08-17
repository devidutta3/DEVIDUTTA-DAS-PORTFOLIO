import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBgCanvas } from './components/HeroBgCanvas';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { CurrentlyLearning } from './components/CurrentlyLearning';
import { Projects } from './components/Projects';
import { CodeUdaanCommunity } from './components/CodeUdaanCommunity';
import { BeyondProjectsISRO } from './components/BeyondProjectsISRO';
import { Achievements } from './components/Achievements';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080B18] text-[#F8FAFC] relative selection:bg-[#7C3AED]/30 selection:text-[#EC4899] overflow-x-hidden">
      
      {/* Dynamic Animated AI & Neural Net Canvas Background */}
      <HeroBgCanvas />

      {/* Main Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Layout Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <CurrentlyLearning />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <CodeUdaanCommunity />
        <BeyondProjectsISRO />
        <Achievements />
        <GitHubSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
