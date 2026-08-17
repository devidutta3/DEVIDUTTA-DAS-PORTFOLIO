export interface Project {
  id: string;
  title: string;
  badge?: string;
  category: string;
  filterCategories: string[];
  technologies: string[];
  description: string;
  theme: {
    gradient: string;
    borderGlow: string;
    accentColor: string;
    badgeBg: string;
  };
  metrics?: { label: string; value: string }[];
  dataset?: string;
  studyRegion?: string;
  team?: string;
  features: string[];
  problem: string;
  approach: string;
  workflow: string[];
  results: string[];
  futureImprovements: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  interactiveType?: 'weather' | 'ipl' | 'crop' | 'phishing';
}

export interface SkillCategory {
  title: string;
  gradient: string;
  skills: { name: string; level?: string; iconName?: string }[];
}

export interface Statistic {
  value: string;
  label: string;
  description: string;
  gradient: string;
  borderGlow: string;
}

export interface LearningRoadmapNode {
  title: string;
  status: string;
  description: string;
  tags: string[];
  gradient: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  updatedAt: string;
}
