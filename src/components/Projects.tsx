import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './ui/GlowCard';
import { Badge } from './ui/Badge';
import { fallbackProjects } from '../data/fallbackProjects';
import { CuratedProject, GitHubRepo } from '../types';
import { Github, ExternalLink, RefreshCw, Sparkles, Filter } from 'lucide-react';

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<CuratedProject[]>(fallbackProjects);
  const [filter, setFilter] = useState<string>('All');
  const [isLoadingApi, setIsLoadingApi] = useState<boolean>(false);
  const [apiFetchedSuccess, setApiFetchedSuccess] = useState<boolean>(false);

  // Fetch live public repositories from GitHub REST API
  useEffect(() => {
    const fetchGitHubRepos = async () => {
      setIsLoadingApi(true);
      try {
        const response = await fetch('https://api.github.com/users/vishwa-csdev/repos?sort=updated&per_page=10');
        if (!response.ok) throw new Error('GitHub API fetch returned error status');
        
        const data: GitHubRepo[] = await response.json();
        
        if (Array.isArray(data) && data.length > 0) {
          // Map dynamic API data into curated format, preserving AI/ML featured items
          const apiMappedProjects: CuratedProject[] = data.map((repo) => {
            const isPortfolio = repo.name.toLowerCase().includes('portfolio');
            return {
              id: repo.name,
              title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
              category: isPortfolio ? 'Full-Stack' : 'AI/ML',
              description: repo.description || 'Public open-source repository developed by Vishwa Bharath Singh on GitHub.',
              highlights: [`Language: ${repo.language || 'C++ / Python'}`, `Stars: ${repo.stargazers_count}`, `Forks: ${repo.forks_count}`],
              tech: [repo.language || 'C++', 'Python', 'Git', 'GitHub API'].filter(Boolean),
              githubUrl: repo.html_url,
              liveUrl: repo.homepage || repo.html_url,
              isFeatured: true,
              metrics: [
                { label: 'Stars', value: `${repo.stargazers_count}` },
                { label: 'Forks', value: `${repo.forks_count}` }
              ]
            };
          });

          // Merge API repos with curated showcase projects, ensuring no duplicate titles
          const combined = [...fallbackProjects];
          apiMappedProjects.forEach((apiProj) => {
            if (!combined.some((item) => item.title.toLowerCase() === apiProj.title.toLowerCase())) {
              combined.push(apiProj);
            }
          });

          setProjects(combined);
          setApiFetchedSuccess(true);
        }
      } catch (err) {
        console.warn('GitHub API live fetch fallback triggered:', err);
      } finally {
        setIsLoadingApi(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  const filteredProjects = projects.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#38bdf8]" />
            <span className="font-mono text-xs font-semibold text-[#38bdf8] uppercase tracking-widest">
              03 // Featured Work
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Engineered Projects & Repositories
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Sourced directly from <code className="text-[#38bdf8] font-mono text-xs">github.com/vishwa-csdev</code> with AI/ML systems featured first.
          </p>
        </div>

        {/* GitHub Live API Status Indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121522] border border-white/10 text-xs font-mono text-slate-300">
          <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span>GitHub API:</span>
          {isLoadingApi ? (
            <span className="text-amber-400 flex items-center gap-1">
              <RefreshCw className="w-3 h-3 animate-spin" /> Syncing...
            </span>
          ) : apiFetchedSuccess ? (
            <span className="text-emerald-400">Live Synced</span>
          ) : (
            <span className="text-slate-400">Ready</span>
          )}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        <div className="flex items-center gap-1.5 mr-2 text-xs font-mono text-slate-400">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter:</span>
        </div>
        {['All', 'AI/ML', 'Full-Stack', 'High-Performance Systems'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-medium transition-all ${
              filter === cat
                ? 'bg-[#38bdf8]/15 border border-[#38bdf8]/50 text-[#38bdf8]'
                : 'bg-[#101219] border border-white/10 text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <GlowCard className="h-full flex flex-col justify-between">
              <div>
                {/* Category & Badge Header */}
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={project.category === 'AI/ML' ? 'accent' : 'outline'} size="sm">
                    {project.category}
                  </Badge>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md text-slate-400 hover:text-[#38bdf8] hover:bg-white/5 transition-colors"
                        title="Live Preview / Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                  {project.description}
                </p>

                {/* Technical Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="mb-5 space-y-1.5 text-xs text-slate-400 font-sans">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#38bdf8] font-mono mt-0.5">&gt;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                {/* Metrics Pill Bar (if present) */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mb-4 grid grid-cols-2 gap-2 p-2.5 rounded-lg bg-[#141724] border border-white/5 font-mono text-[11px]">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="flex justify-between items-center">
                        <span className="text-slate-400">{m.label}:</span>
                        <span className="text-[#38bdf8] font-semibold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="mono" size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
