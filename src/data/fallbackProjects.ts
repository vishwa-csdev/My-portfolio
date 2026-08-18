import { CuratedProject } from '../types';

export const fallbackProjects: CuratedProject[] = [
  {
    id: 'f1-app',
    title: 'F1 QuickStats & Race Center',
    category: 'Full-Stack',
    accent: 'rose',
    description: 'An interactive Formula 1 enthusiast web dashboard providing instant driver standings, constructor points, race center results, and detail pages for drivers and teams.',
    highlights: [
      'Driver and constructor leaderboard tracking with live season statistics',
      'Race center dashboard featuring recent race results and schedules',
      'Engineered with React, Vite, and dedicated client-side API helper hooks'
    ],
    tech: ['React', 'JavaScript', 'Vite', 'REST APIs', 'CSS3'],
    githubUrl: 'https://github.com/vishwa-csdev/F1-app',
    liveUrl: 'https://github.com/vishwa-csdev/F1-app',
    isFeatured: true,
    metrics: [
      { label: 'Stack', value: 'React + Vite' },
      { label: 'Domain', value: 'F1 Telemetry' }
    ]
  },
  {
    id: 'heardle-web-game',
    title: 'Heardle Web Game',
    category: 'Interactive Game',
    accent: 'emerald',
    description: 'An interactive daily music guessing game where players identify songs in as few attempts as possible from short progressive audio snippets.',
    highlights: [
      'Browser audio playback with progressive snippet duration unlock controls',
      'Interactive autocomplete search and attempt verification mechanics',
      'Local state persistence for player statistics, streaks, and scores'
    ],
    tech: ['JavaScript', 'Web Audio API', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/vishwa-csdev/Heardle-web-game',
    liveUrl: 'https://github.com/vishwa-csdev/Heardle-web-game',
    isFeatured: true,
    metrics: [
      { label: 'Category', value: 'Web Game' },
      { label: 'Engine', value: 'Web Audio' }
    ]
  },
  {
    id: 'my-portfolio',
    title: 'Obsidian Developer Portfolio',
    category: 'Full-Stack',
    accent: 'cyan',
    description: 'Personal multi-accent dark portfolio engineered with React, TypeScript, and Tailwind CSS, featuring live GitHub REST API integration to automatically sync owned repositories.',
    highlights: [
      'Multi-accent obsidian aesthetic with hairline glass styling',
      'Live GitHub REST API integration filtering out forks in real-time',
      'Clean modular TypeScript architecture with responsive Framer Motion animations'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    githubUrl: 'https://github.com/vishwa-csdev/My-portfolio',
    liveUrl: 'https://github.com/vishwa-csdev/My-portfolio',
    isFeatured: true,
    metrics: [
      { label: 'Design', value: 'Award-Winning' },
      { label: 'Sync', value: 'GitHub API' }
    ]
  }
];
