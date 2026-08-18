import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './ui/GlowCard';
import { Badge } from './ui/Badge';
import { techStackData } from '../data/techStack';
import { Brain, Code2, Cpu, Workflow, ChevronRight } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Brain className="w-4 h-4 text-[#818cf8]" />;
      case 1:
        return <Cpu className="w-4 h-4 text-[#fbbf24]" />;
      case 2:
        return <Code2 className="w-4 h-4 text-[#38bdf8]" />;
      case 3:
        return <Workflow className="w-4 h-4 text-[#34d399]" />;
      default:
        return <Code2 className="w-4 h-4 text-[#38bdf8]" />;
    }
  };

  const currentCategory = techStackData[activeTab];

  return (
    <section id="tech" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2">
          <span className="h-px w-8 bg-[#38bdf8]" />
          <span className="font-mono text-xs font-semibold text-[#38bdf8] uppercase tracking-widest">
            02 // Skills & Technical Architecture
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Curated Technology Matrix
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Core AI/ML frameworks, C/C++ computational foundations, full-stack web platforms, and automated workflow tooling.
        </p>
      </div>

      {/* Multi-Accent Category Tab Selector */}
      <div className="flex flex-wrap gap-2.5 mb-10 pb-2">
        {techStackData.map((category, idx) => {
          const isActive = activeTab === idx;
          const getActiveStyles = () => {
            switch (category.accent) {
              case 'indigo':
                return 'bg-[#818cf8]/15 border-[#818cf8]/50 text-[#a5b4fc] shadow-[0_0_20px_rgba(129,140,248,0.2)]';
              case 'amber':
                return 'bg-[#fbbf24]/15 border-[#fbbf24]/50 text-[#fde68a] shadow-[0_0_20px_rgba(251,191,36,0.2)]';
              case 'emerald':
                return 'bg-[#34d399]/15 border-[#34d399]/50 text-[#6ee7b7] shadow-[0_0_20px_rgba(52,211,153,0.2)]';
              case 'cyan':
              default:
                return 'bg-[#38bdf8]/15 border-[#38bdf8]/50 text-[#7dd3fc] shadow-[0_0_20px_rgba(56,189,248,0.2)]';
            }
          };

          return (
            <button
              key={category.title}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-medium transition-all duration-300 ${
                isActive
                  ? `${getActiveStyles()} border`
                  : 'bg-[#08090e] border border-white/[0.07] text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{category.title}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {currentCategory.skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
          >
            <GlowCard accent={skill.accent || currentCategory.accent} className="h-full flex flex-col justify-between p-5 sm:p-6">
              <div>
                <div className="flex items-center justify-between mb-3 gap-2">
                  <h3 className="font-display text-base font-bold text-white flex items-center gap-1.5">
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors flex-shrink-0" />
                    <span>{skill.name}</span>
                  </h3>
                  <Badge variant="accent" accent={skill.accent || currentCategory.accent} size="sm" className="flex-shrink-0">
                    {skill.level}
                  </Badge>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {skill.description}
                </p>
              </div>

              {/* Monospace Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {skill.tags.map((tag) => (
                  <Badge key={tag} variant="mono" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
