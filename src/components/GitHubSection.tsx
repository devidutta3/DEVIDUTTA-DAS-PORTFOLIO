import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, ExternalLink, Code2, Sparkles, FolderGit2, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubRepo } from '../types';

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const username = (import.meta as any).env?.VITE_GITHUB_USERNAME || 'devidutta3';

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!res.ok) {
          throw new Error('Failed to fetch public GitHub repositories');
        }
        const data = await res.json();
        const mappedRepos: GitHubRepo[] = data.map((item: any) => ({
          name: item.name,
          description: item.description || 'Public repository showcasing Machine Learning and Python builds.',
          language: item.language || 'Python',
          stars: item.stargazers_count || 0,
          forks: item.forks_count || 0,
          url: item.html_url,
          updatedAt: new Date(item.updated_at).toLocaleDateString()
        }));
        setRepos(mappedRepos);
      } catch (err: any) {
        // Fallback static list matching user's real projects
        setRepos([
          {
            name: "weather-prediction-utils",
            description: "End-to-end weather prediction pipeline using Open-Meteo API, Scikit-learn models & FastAPI REST API.",
            language: "Python",
            stars: 0,
            forks: 0,
            url: `https://github.com/${username}/weather-prediction-utils`,
            updatedAt: "Recent"
          },
          {
            name: "IPL-Analysis-Model",
            description: "Cricket score prediction engine trained on 135,018 historical ball-by-ball IPL match records.",
            language: "Python",
            stars: 0,
            forks: 0,
            url: `https://github.com/${username}/IPL-Analysis-Model`,
            updatedAt: "Recent"
          },
          {
            name: "Ai-Driven-crop-moisture-detection",
            description: "Remote sensing moisture stress & crop type classifier for Odisha built in Google Earth Engine.",
            language: "Python",
            stars: 0,
            forks: 0,
            url: `https://github.com/${username}/Ai-Driven-crop-moisture-detection`,
            updatedAt: "Recent"
          },
          {
            name: "phising-website-predictor",
            description: "Phishing Website Detector analyzing URL attributes, lexical heuristics and domain age with Random Forest.",
            language: "Python",
            stars: 0,
            forks: 0,
            url: `https://github.com/${username}/phising-website-predictor`,
            updatedAt: "Recent"
          }
        ]);
        setError('Loaded featured project repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, [username]);

  return (
    <section id="github" className="py-24 relative z-10 border-t border-[#293056]/50 bg-[#080B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141A32] border border-[#EC4899]/40 text-xs font-mono text-[#EC4899]">
            <Github className="w-3.5 h-3.5" />
            <span>CONTINUOUS CODE COMMITS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Open Source & <span className="bg-gradient-to-r from-[#EC4899] via-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent">GitHub</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A5B4FC] max-w-xl">
            "Most of my practical learning happens through building, experimenting, debugging, and iterating on real projects."
          </p>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#EC4899] to-[#2563EB]"></div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {loading ? (
            <div className="col-span-full py-12 flex justify-center items-center text-[#06B6D4] gap-2">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span className="font-mono text-sm">Fetching GitHub activity...</span>
            </div>
          ) : (
            repos.map((repo, i) => (
              <a
                key={i}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 rounded-2xl border border-[#293056] hover:border-[#EC4899]/50 relative group transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white group-hover:text-[#EC4899] transition-colors flex items-center gap-2 text-base">
                      <FolderGit2 className="w-4 h-4 text-[#06B6D4]" />
                      {repo.name}
                    </span>
                    <ExternalLink className="w-4 h-4 text-[#A5B4FC] group-hover:text-white transition-colors" />
                  </div>

                  <p className="text-xs text-[#A5B4FC] leading-relaxed line-clamp-2">
                    {repo.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#293056] flex items-center justify-between text-xs font-mono text-[#A5B4FC]">
                  <span className="flex items-center gap-1.5 text-[#06B6D4]">
                    <span className="w-2 h-2 rounded-full bg-[#06B6D4]"></span>
                    {repo.language}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-[#F97316]" /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-[#2563EB]" /> {repo.forks}
                    </span>
                  </div>
                </div>
              </a>
            ))
          )}
        </div>

        {/* View Profile CTA Button */}
        <div className="flex justify-center">
          <a
            id="view-github-profile-btn"
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#EC4899] via-[#7C3AED] to-[#2563EB] shadow-lg shadow-[#EC4899]/25 hover:shadow-[#7C3AED]/40 hover:scale-105 active:scale-95 transition-all"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Profile (@{username})</span>
          </a>
        </div>

      </div>
    </section>
  );
};
