import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './ui/GlowCard';
import { Badge } from './ui/Badge';
import { techStackData } from '../data/techStack';
import { Code2, Brain, Network, ChevronRight } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-[#38bdf8]" />;
      case 1:
        return <Brain className="w-5 h-5 text-[#38bdf8]" />;
      case 2:
        return <Network className="w-5 h-5 text-[#38bdf8]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#38bdf8]" />;
    }
  };

  return (
    <section id="tech" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2">
          <span className="h-px w-8 bg-[#38bdf8]" />
          <span className="font-mono text-xs font-semibold text-[#38bdf8] uppercase tracking-widest">
            02 // Technical Capabilities
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Grouped Technology Architecture
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Core focus centered on low-level performance, AI neural architectures, and robust full-stack production delivery.
        </p>
      </div>

      {/* Category Tab Selector */}
      <div className="flex flex-wrap gap-3 mb-10 border-b border-white/10 pb-4">
        {techStackData.map((category, idx) => (
          <button
            key={category.title}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === idx
                ? 'bg-[#38bdf8]/15 border border-[#38bdf8]/50 text-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                : 'bg-[#101219] border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            {getCategoryIcon(idx)}
            <span>{category.title}</span>
          </button>
        ))}
      </div>

      {/* Grouped Skills Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techStackData[activeTab].skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
          >
            <GlowCard className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[#38bdf8]" />
                    {skill.name}
                  </h3>
                  <Badge variant="accent" size="sm">
                    {skill.level}
                  </Badge>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {skill.description}
                </p>
              </div>

              {/* Monospace Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
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
