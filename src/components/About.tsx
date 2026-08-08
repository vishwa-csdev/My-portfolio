import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './ui/GlowCard';
import { Badge } from './ui/Badge';
import { Cpu, Play, RefreshCw, Zap } from 'lucide-react';

export const About: React.FC = () => {
  // State for interactive ML Tensor / Loss simulation widget
  const [epoch, setEpoch] = useState(24);
  const [loss, setLoss] = useState(0.0421);
  const [accuracy, setAccuracy] = useState(98.74);
  const [throughput, setThroughput] = useState(480);
  const [isSimulating, setIsSimulating] = useState(false);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setEpoch((prev) => prev + 1);
      setLoss((prev) => Math.max(0.012, +(prev * 0.94).toFixed(4)));
      setAccuracy((prev) => Math.min(99.85, +(prev + 0.12).toFixed(2)));
      setThroughput(() => Math.floor(450 + Math.random() * 80));

      if (step >= 8) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 250);
  };

  const resetSimulation = () => {
    setEpoch(24);
    setLoss(0.0421);
    setAccuracy(98.74);
    setThroughput(480);
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left Column: Bio & Philosophy */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#38bdf8]" />
            <span className="font-mono text-xs font-semibold text-[#38bdf8] uppercase tracking-widest">
              01 // About & Focus
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/15 shadow-xl flex-shrink-0 bg-[#101219]">
              <img
                src="/profile.jpg"
                alt="Vishwa Bharath Singh Profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
              Bridging High-Performance C/C++ Systems & Modern AI Engineering.
            </h2>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am an <strong className="text-white font-medium">AI/ML Engineer</strong> and <strong className="text-white font-medium">Full-Stack Developer</strong> driven by a passion for algorithmic efficiency and robust software design. My foundation is built on deep low-level mastery in <code className="text-[#38bdf8] font-mono text-xs px-1.5 py-0.5 rounded bg-[#151926]">C/C++</code> and rapid ML iteration in <code className="text-[#38bdf8] font-mono text-xs px-1.5 py-0.5 rounded bg-[#151926]">Python</code>.
            </p>
            <p>
              I thrive on solving end-to-end technical challenges: training deep neural network architectures in PyTorch, accelerating low-latency inference pipelines with CUDA and memory-mapped primitives, and crafting sleek, production-ready full-stack applications.
            </p>
            <p>
              Rather than building cookie-cutter web pages or generic wrappers, I focus on system reliability, clean software abstraction, deterministic compute performance, and intuitive developer experiences.
            </p>
          </div>

          {/* Pillars Badges */}
          <div className="pt-2 flex flex-wrap gap-2">
            <Badge variant="accent">Low-Latency Compute</Badge>
            <Badge variant="mono">Memory Optimization</Badge>
            <Badge variant="mono">Distributed ML Training</Badge>
            <Badge variant="mono">Full-Stack Next.js / FastAPI</Badge>
          </div>
        </div>

        {/* Right Column: Interactive ML Metrics Telemetry Widget */}
        <div className="w-full md:w-[440px] flex-shrink-0">
          <GlowCard className="border-white/10 bg-[#0e1017]">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#38bdf8]" />
                <span className="font-mono text-xs font-semibold text-white">
                  Model Optimization Sandbox
                </span>
              </div>
              <Badge variant="accent" size="sm">
                C++ LibTorch / CUDA
              </Badge>
            </div>

            {/* Simulated Live Loss & Metric Display */}
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-[#141724] border border-white/5 flex items-center justify-between">
                <span className="text-slate-400">Current Epoch:</span>
                <span className="text-white font-semibold">{epoch} / 100</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-[#141724] border border-white/5">
                  <div className="text-slate-400 text-[11px] mb-1">Loss (Cross-Entropy)</div>
                  <div className="text-[#38bdf8] text-lg font-bold">{loss.toFixed(4)}</div>
                </div>

                <div className="p-3 rounded-lg bg-[#141724] border border-white/5">
                  <div className="text-slate-400 text-[11px] mb-1">Top-1 Accuracy</div>
                  <div className="text-emerald-400 text-lg font-bold">{accuracy.toFixed(2)}%</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#141724] border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-slate-400">Inference Speed:</span>
                </div>
                <span className="text-white font-semibold">{throughput} samples/sec</span>
              </div>

              {/* Loss Curve Visual Graphic */}
              <div className="pt-2">
                <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                  <span>Training Loss Curve</span>
                  <span className="text-[#38bdf8]">Converged (Step {epoch})</span>
                </div>
                <div className="h-16 w-full bg-[#141724] rounded-lg border border-white/5 p-2 flex items-end justify-between gap-1 overflow-hidden">
                  {[0.8, 0.65, 0.52, 0.4, 0.31, 0.22, 0.15, 0.1, 0.07, 0.05, 0.045, loss].map((val, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-[#38bdf8]/70 hover:bg-[#38bdf8] rounded-t-sm transition-all"
                      style={{
                        width: '7%',
                        height: `${Math.max(10, (1 - val) * 100)}%`
                      }}
                      title={`Step ${idx}: Loss ${val}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Widget Action Controls */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#38bdf8]/15 border border-[#38bdf8]/40 text-[#38bdf8] font-mono text-xs hover:bg-[#38bdf8]/25 transition-all disabled:opacity-50"
              >
                {isSimulating ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Optimizing...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Trigger Epoch Step</span>
                  </>
                )}
              </button>

              <button
                onClick={resetSimulation}
                className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                Reset
              </button>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
};
