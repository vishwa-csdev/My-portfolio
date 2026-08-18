import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './ui/GlowCard';
import { Badge } from './ui/Badge';
import { fallbackProjects } from '../data/fallbackProjects';
import { CuratedProject, GitHubRepo } from '../types';
import { Github, ExternalLink, RefreshCw, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<CuratedProject[]>(fallbackProjects);
  const [isLoadingApi, setIsLoadingApi] = useState<boolean>(false);
  const [apiFetchedSuccess, setApiFetchedSuccess] = useState<boolean>(false);

  // Fetch live public repositories from GitHub REST API, filtering out forks
  useEffect(() => {
    const fetchGitHubRepos = async () => {
      setIsLoadingApi(true);
      try {
        const response = await fetch('https://api.github.com/users/vishwa-csdev/repos?sort=updated&per_page=30');
        if (!response.ok) throw new Error('GitHub API fetch returned error status');
        
        const data: GitHubRepo[] = await response.json();
        
        if (Array.isArray(data) && data.length > 0) {
          // Strictly filter out forked repositories and profile readme repos
          const ownedRepos = data.filter((repo) => !repo.fork && repo.name.toLowerCase() !== 'vishwa-csdev');

          // Map dynamic API data into curated format while keeping authentic descriptions
          const apiMappedProjects: CuratedProject[] = ownedRepos.map((repo) => {
            const fallbackMatch = fallbackProjects.find(
              (f) => f.id.toLowerCase() === repo.name.toLowerCase() || f.title.toLowerCase().includes(repo.name.toLowerCase())
            );

            const formatTitle = (name: string) => {
              if (name === 'F1-app') return 'F1 QuickStats & Race Center';
              if (name === 'Heardle-web-game') return 'Heardle Web Game';
              if (name === 'My-portfolio') return 'Obsidian Developer Portfolio';
              return name.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
            };

            const defaultDesc = (name: string) => {
              if (name === 'F1-app') return 'An F1 enthusiast web dashboard providing quick driver standings, constructor standings, and recent race results.';
              if (name === 'Heardle-web-game') return 'Interactive daily music guessing web game where players identify songs from progressive audio snippets.';
              if (name === 'My-portfolio') return 'Personal multi-accent portfolio with live GitHub API synchronization and dark obsidian aesthetics.';
              return repo.description || 'Open-source repository created by Vishwa Bharath Singh on GitHub.';
            };

            return {
              id: repo.name,
              title: fallbackMatch ? fallbackMatch.title : formatTitle(repo.name),
              category: fallbackMatch?.category || 'Full-Stack',
              accent: fallbackMatch?.accent || 'cyan',
              description: repo.description || (fallbackMatch ? fallbackMatch.description : defaultDesc(repo.name)),
              highlights: fallbackMatch?.highlights || [
                `Language: ${repo.language || 'JavaScript / TypeScript'}`,
                `Stars: ${repo.stargazers_count}`,
                `Open Source Repository`
              ],
              tech: fallbackMatch?.tech || [repo.language || 'JavaScript', 'React', 'CSS3', 'Git'].filter(Boolean),
              githubUrl: repo.html_url,
              liveUrl: repo.homepage || repo.html_url,
              isFeatured: true,
              metrics: [
                { label: 'Stars', value: `${repo.stargazers_count}` },
                { label: 'Forks', value: `${repo.forks_count}` }
              ]
            };
          });

          if (apiMappedProjects.length > 0) {
            setProjects(apiMappedProjects);
          }
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

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#38bdf8]" />
            <span className="font-mono text-xs font-semibold text-[#38bdf8] uppercase tracking-widest">
              03 // Featured Work
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Projects & Open Source Repositories
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Live repositories sourced directly from <code className="text-[#38bdf8] font-mono text-xs px-1.5 py-0.5 rounded bg-[#0b0d18]">github.com/vishwa-csdev</code> (owned repositories only, forks hidden).
          </p>
        </div>

        {/* GitHub Live API Status Indicator */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#08090e] border border-white/[0.08] text-xs font-mono text-slate-300 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span>GitHub API:</span>
          {isLoadingApi ? (
            <span className="text-amber-400 flex items-center gap-1">
              <RefreshCw className="w-3 h-3 animate-spin" /> Syncing...
            </span>
          ) : apiFetchedSuccess ? (
            <span className="text-[#34d399]">Live Synced</span>
          ) : (
            <span className="text-slate-400">Ready</span>
          )}
        </div>
      </div>

      {/* Projects Grid with Multi-Accent Glows */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <GlowCard accent={project.accent || 'cyan'} className="h-full flex flex-col justify-between p-6">
              <div>
                {/* Category & Action Links */}
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="accent" accent={project.accent || 'cyan'} size="sm">
                    {project.category}
                  </Badge>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-[#38bdf8] hover:bg-white/[0.06] transition-colors"
                        title="Live Preview / Repo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
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
                {/* Metrics Pill Bar */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mb-4 grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-[#0c0e16] border border-white/[0.05] font-mono text-[11px]">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="flex justify-between items-center">
                        <span className="text-slate-400">{m.label}:</span>
                        <span className="text-white font-semibold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
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
