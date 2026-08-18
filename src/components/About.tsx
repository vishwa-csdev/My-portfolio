import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './ui/GlowCard';
import { Badge } from './ui/Badge';
import { Brain, Code2, Cpu, Workflow, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      {/* Header */}
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2">
          <span className="h-px w-8 bg-[#38bdf8]" />
          <span className="font-mono text-xs font-semibold text-[#38bdf8] uppercase tracking-widest">
            01 // Engineering Philosophy
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Building Products End-to-End.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          From the machine learning model doing the work underneath, to the API and interactive frontend.
        </p>
      </div>

      {/* Multi-Accent Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Main Narrative Card (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          <GlowCard accent="cyan" className="h-full flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0e111d] border border-white/[0.1] flex items-center justify-center text-[#38bdf8]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Vishwa Bharath Singh
                  </h3>
                  <p className="font-mono text-xs text-[#38bdf8]">
                    B.Tech AI & ML • Full-Stack Developer
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-slate-300 text-sm leading-relaxed font-sans">
                <p>
                  I build products end-to-end — from the API and data model to the reactive user interface, with an ML model usually handling the core logic underneath.
                </p>
                <p>
                  Currently pursuing a <strong className="text-white font-medium">B.Tech in Artificial Intelligence & Machine Learning</strong>, I focus heavily on applied deep learning with <code className="text-[#a5b4fc] font-mono text-xs px-1.5 py-0.5 rounded bg-[#101322]">Python</code>, <code className="text-[#a5b4fc] font-mono text-xs px-1.5 py-0.5 rounded bg-[#101322]">PyTorch</code>, and <code className="text-[#a5b4fc] font-mono text-xs px-1.5 py-0.5 rounded bg-[#101322]">TensorFlow</code>.
                </p>
                <p>
                  Beyond machine learning, I engineer full-stack web applications with <code className="text-[#7dd3fc] font-mono text-xs px-1.5 py-0.5 rounded bg-[#0d1424]">React & TypeScript</code>, build low-level algorithmic foundations in <code className="text-[#fcd34d] font-mono text-xs px-1.5 py-0.5 rounded bg-[#1f1a10]">C/C++</code>, and orchestrate automated workflow pipelines using <code className="text-[#6ee7b7] font-mono text-xs px-1.5 py-0.5 rounded bg-[#0d1e18]">n8n</code> on my daily driver, <strong className="text-white font-medium">Fedora Linux</strong>.
                </p>
              </div>
            </div>

            {/* Quick Multi-Accent Tech Pills */}
            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
              <Badge variant="accent" accent="indigo">Python & PyTorch</Badge>
              <Badge variant="accent" accent="cyan">React & TypeScript</Badge>
              <Badge variant="accent" accent="amber">C / C++ Systems</Badge>
              <Badge variant="accent" accent="emerald">n8n Automation</Badge>
            </div>
          </GlowCard>
        </motion.div>

        {/* 4 Asymmetric Multi-Accent Bento Tiles (5 cols) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {/* Tile 1: AI / Deep Learning (Indigo) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <GlowCard accent="indigo" className="p-4 sm:p-5">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#818cf8]/15 border border-[#818cf8]/30 flex items-center justify-center text-[#818cf8] flex-shrink-0">
                  <Brain className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-display text-sm font-bold text-white">
                    Applied AI & ML
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Neural model architecture, loss optimization, and prediction in PyTorch and TensorFlow.
                  </p>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Tile 2: Full-Stack React (Cyan) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <GlowCard accent="cyan" className="p-4 sm:p-5">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8] flex-shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-display text-sm font-bold text-white">
                    Full-Stack Web
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Interactive single-page apps, REST APIs, and responsive design systems with React and Vite.
                  </p>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Tile 3: C/C++ Systems (Amber) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <GlowCard accent="amber" className="p-4 sm:p-5">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#fbbf24]/15 border border-[#fbbf24]/30 flex items-center justify-center text-[#fbbf24] flex-shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-display text-sm font-bold text-white">
                    C / C++ & Algorithms
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Low-level memory awareness, data structures, and algorithmic computational efficiency.
                  </p>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Tile 4: n8n Automation & Fedora (Emerald) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <GlowCard accent="emerald" className="p-4 sm:p-5">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#34d399]/15 border border-[#34d399]/30 flex items-center justify-center text-[#34d399] flex-shrink-0">
                  <Workflow className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-display text-sm font-bold text-white">
                    n8n Automation & Linux
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Connecting services with webhook pipelines, automated workflows, and Fedora Linux tooling.
                  </p>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
