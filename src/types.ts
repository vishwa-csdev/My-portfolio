export type AccentColor = 'cyan' | 'indigo' | 'violet' | 'emerald' | 'amber' | 'rose';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface CuratedProject {
  id: string;
  title: string;
  category: 'Full-Stack' | 'AI/ML' | 'Web Apps' | 'Interactive Game';
  description: string;
  highlights?: string[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  isFeatured?: boolean;
  accent?: AccentColor;
  metrics?: ProjectMetric[];
}

export interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
  topics?: string[];
  updated_at: string;
}

export interface TechSkill {
  name: string;
  level: string;
  description: string;
  tags: string[];
  accent?: AccentColor;
}

export interface TechCategory {
  title: string;
  subtitle: string;
  accent: AccentColor;
  skills: TechSkill[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  badge: string;
  accent?: AccentColor;
  link?: string;
}
