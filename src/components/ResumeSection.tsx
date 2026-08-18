import React, { useState } from 'react';
import { GlowCard } from './ui/GlowCard';
import { Modal } from './ui/Modal';
import { Badge } from './ui/Badge';
import { Download, Eye, FileText, Briefcase, GraduationCap } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2">
          <span className="h-px w-8 bg-[#38bdf8]" />
          <span className="font-mono text-xs font-semibold text-[#38bdf8] uppercase tracking-widest">
            05 // Curriculum Vitae
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Professional Background & Resume
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          Core technical competencies, academic foundation in AI/ML, and shipped software applications.
        </p>
      </div>

      {/* Main Resume Card */}
      <GlowCard accent="cyan" className="p-7 sm:p-9 border-white/[0.08] bg-[#08090e]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#38bdf8]/10 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8]">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">Vishwa Bharath Singh</h3>
                <p className="font-mono text-xs text-[#38bdf8]">B.Tech AI & ML • Full-Stack Developer</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              Specialized in machine learning frameworks with <strong className="text-white font-medium">Python, PyTorch & TensorFlow</strong>, alongside developing full-stack web applications in <strong className="text-white font-medium">React, TypeScript & Tailwind CSS</strong>, foundational systems in <strong className="text-white font-medium">C/C++</strong>, and automated pipelines with <strong className="text-white font-medium">n8n</strong>.
            </p>

            {/* Multi-Accent Specs Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-[#0b0d18] border border-[#818cf8]/20">
                <span className="text-[#a5b4fc] block text-[10px] uppercase font-bold tracking-wider">AI / ML Frameworks</span>
                <span className="text-white font-semibold mt-0.5 block">Python, PyTorch, TensorFlow</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0b0d18] border border-[#38bdf8]/20">
                <span className="text-[#7dd3fc] block text-[10px] uppercase font-bold tracking-wider">Web & Systems</span>
                <span className="text-white font-semibold mt-0.5 block">React, TypeScript, C/C++</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0b0d18] border border-[#34d399]/20">
                <span className="text-[#6ee7b7] block text-[10px] uppercase font-bold tracking-wider">DevOps & Tooling</span>
                <span className="text-white font-semibold mt-0.5 block">n8n, Git, Fedora Linux</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
            <a
              href="/resume.pdf"
              download="Vishwa_Bharath_Singh_Resume.pdf"
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#38bdf8] text-[#030407] font-mono text-xs sm:text-sm font-semibold hover:bg-[#7dd3fc] transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>

            <button
              onClick={() => setIsPreviewOpen(true)}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0b0d16] border border-white/[0.12] text-slate-200 font-mono text-xs sm:text-sm font-medium hover:border-[#38bdf8]/40 hover:text-white transition-all duration-300"
            >
              <Eye className="w-4 h-4 text-[#38bdf8]" />
              <span>Inline Preview</span>
            </button>
          </div>
        </div>
      </GlowCard>

      {/* Inline Preview Modal */}
      <Modal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        title="Resume Overview :: Vishwa Bharath Singh"
      >
        <div className="space-y-6 text-slate-300 font-sans">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold text-white">Vishwa Bharath Singh</h2>
              <p className="font-mono text-sm text-[#38bdf8] mt-1">AI/ML Engineer & Full-Stack Developer</p>
              <p className="text-xs text-slate-400 mt-1">Python • PyTorch • TensorFlow • React • TypeScript • C/C++ • n8n</p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#38bdf8] text-[#030407] font-mono text-xs font-semibold hover:bg-[#7dd3fc]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>

          {/* Project & Technical Experience */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-bold text-white flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#38bdf8]" />
              <span>Engineering & Project Highlights</span>
            </h3>

            <div className="space-y-4 pl-4 border-l border-white/[0.08]">
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-sm font-semibold text-white">
                  <span>F1 QuickStats & Race Center</span>
                  <Badge variant="accent" accent="rose" size="sm">2024</Badge>
                </div>
                <p className="text-xs text-[#fda4af] font-mono">React, Vite, JavaScript, REST APIs, CSS3</p>
                <p className="text-xs text-slate-300">
                  Built an interactive Formula 1 dashboard featuring driver/constructor standings, recent race center outcomes, and team telemetry data tables.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-sm font-semibold text-white">
                  <span>Heardle Web Game</span>
                  <Badge variant="accent" accent="emerald" size="sm">2024</Badge>
                </div>
                <p className="text-xs text-[#6ee7b7] font-mono">JavaScript, Web Audio API, HTML5, CSS3</p>
                <p className="text-xs text-slate-300">
                  Engineered an interactive daily music guessing browser game with progressive audio sample unlocks and local streak tracking.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-sm font-semibold text-white">
                  <span>AI & Machine Learning Research</span>
                  <Badge variant="accent" accent="indigo" size="sm">2024 — Present</Badge>
                </div>
                <p className="text-xs text-[#a5b4fc] font-mono">Python, PyTorch, TensorFlow</p>
                <p className="text-xs text-slate-300">
                  Designing neural architectures, loss function optimization, model training pipelines, and dataset preprocessing for predictive analytics.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Environment */}
          <div className="space-y-3 pt-4 border-t border-white/[0.08]">
            <h3 className="font-display text-base font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#38bdf8]" />
              <span>Academic & Operating Environment</span>
            </h3>
            <div className="p-4 rounded-xl bg-[#0b0d18] border border-white/[0.06] space-y-1 text-xs">
              <div className="font-semibold text-white text-sm">B.Tech in Artificial Intelligence & Machine Learning</div>
              <p className="text-slate-400">Curriculum focused on deep learning, machine learning algorithms, data structures (C++), and computer vision.</p>
              <p className="text-[#38bdf8] font-mono pt-1">Operating Environment: Fedora Linux • Automation: n8n Workflow Pipelines</p>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};
