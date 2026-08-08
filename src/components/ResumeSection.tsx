import React, { useState } from 'react';
import { GlowCard } from './ui/GlowCard';
import { Modal } from './ui/Modal';
import { Download, Eye, FileText, Briefcase, GraduationCap } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2">
          <span className="h-px w-8 bg-[#38bdf8]" />
          <span className="font-mono text-xs font-semibold text-[#38bdf8] uppercase tracking-widest">
            05 // Curriculum Vitae
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Professional Resume & Qualifications
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          Comprehensive overview of technical capabilities, education, engineering experience, and project metrics.
        </p>
      </div>

      {/* Main Resume Card */}
      <GlowCard className="p-8 border-white/10 bg-[#101219]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8]">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">Vishwa Bharath Singh</h3>
                <p className="font-mono text-xs text-[#38bdf8]">AI/ML Engineer & Full-Stack Developer</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Specialized in high-performance C/C++ memory architecture, PyTorch deep neural network training, CUDA kernel execution, and modern responsive full-stack applications with React & Next.js.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
              <div className="p-3 rounded-lg bg-[#141724] border border-white/5">
                <span className="text-slate-400 block text-[10px]">CORE LANGUAGES</span>
                <span className="text-white font-semibold">C/C++, Python</span>
              </div>
              <div className="p-3 rounded-lg bg-[#141724] border border-white/5">
                <span className="text-slate-400 block text-[10px]">AI / MACHINE LEARNING</span>
                <span className="text-white font-semibold">PyTorch, OpenCV, CUDA</span>
              </div>
              <div className="p-3 rounded-lg bg-[#141724] border border-white/5">
                <span className="text-slate-400 block text-[10px]">FULL-STACK</span>
                <span className="text-white font-semibold">Next.js, FastAPI, SQL</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
            <a
              href="/resume.pdf"
              download="Vishwa_Bharath_Singh_Resume.pdf"
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#38bdf8] text-[#090a0f] font-mono text-sm font-semibold hover:bg-[#7dd3fc] transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>

            <button
              onClick={() => setIsPreviewOpen(true)}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#141724] border border-white/15 text-slate-200 font-mono text-sm font-medium hover:border-[#38bdf8]/40 hover:text-white transition-all duration-300"
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
        title="Resume Preview :: Vishwa Bharath Singh"
      >
        <div className="space-y-6 text-slate-300 font-sans">
          {/* Header info */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold text-white">Vishwa Bharath Singh</h2>
              <p className="font-mono text-sm text-[#38bdf8] mt-1">AI/ML Engineer & Full-Stack Developer</p>
              <p className="text-xs text-slate-400 mt-1">Core Stack: C/C++, Python, PyTorch, FastAPI, Next.js, Docker</p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#38bdf8] text-[#090a0f] font-mono text-xs font-semibold hover:bg-[#7dd3fc]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#38bdf8]" />
              <span>Engineering & Project Experience</span>
            </h3>

            <div className="space-y-3 pl-4 border-l border-white/10">
              <div className="space-y-1">
                <div className="flex justify-between items-center text-sm font-semibold text-white">
                  <span>AI/ML Engineer & Full-Stack Developer</span>
                  <span className="font-mono text-xs text-slate-400">2024 — Present</span>
                </div>
                <p className="text-xs text-[#38bdf8] font-mono">Independent & GitHub Projects</p>
                <ul className="text-xs space-y-1 text-slate-300 list-disc list-inside pt-1">
                  <li>Engineered low-latency C++ inference primitives with SIMD and LibTorch integration.</li>
                  <li>Architected multi-modal vision and language processing pipelines using PyTorch and FastAPI.</li>
                  <li>Built responsive full-stack telemetry dashboards with Next.js, React, and Tailwind CSS.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#38bdf8]" />
              <span>Education & Technical Foundation</span>
            </h3>
            <div className="p-4 rounded-lg bg-[#141724] border border-white/5 space-y-1 text-xs">
              <div className="font-semibold text-white text-sm">Bachelor of Technology / Computer Science & Engineering</div>
              <p className="text-slate-400">Specialization in Artificial Intelligence, Machine Learning & Systems Architecture</p>
              <p className="text-[#38bdf8] font-mono pt-1">Key Coursework: Data Structures & Algorithms (C++), Operating Systems, Neural Networks, Database Systems</p>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};
