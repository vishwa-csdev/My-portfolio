import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './ui/GlowCard';
import { Badge } from './ui/Badge';
import { achievementsData } from '../data/achievements';
import { CheckCircle2, ExternalLink } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2">
          <span className="h-px w-8 bg-[#38bdf8]" />
          <span className="font-mono text-xs font-semibold text-[#38bdf8] uppercase tracking-widest">
            04 // Journey & Milestones
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Key Milestones & Builds
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          Academic specialization, shipped web apps, workflow automation, and active open-source GitHub work.
        </p>
      </div>

      <div className="space-y-4">
        {achievementsData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <GlowCard accent={item.accent || 'cyan'} className="p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <Badge variant="accent" accent={item.accent || 'cyan'} size="sm">
                      {item.badge}
                    </Badge>
                    <span className="text-xs font-mono text-slate-400">{item.date}</span>
                    <span className="text-xs font-mono text-slate-500">• {item.organization}</span>
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                    <span>{item.title}</span>
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0e1018] border border-white/[0.08] text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8]/40 font-mono text-xs transition-all shadow-sm"
                  >
                    <span>View Reference</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
