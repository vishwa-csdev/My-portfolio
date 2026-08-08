import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#090a0e] pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand Info */}
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#141722] border border-white/15 flex items-center justify-center text-[#38bdf8] font-mono font-bold text-xs">
                VB
              </div>
              <span className="font-display font-bold text-white text-lg">
                Vishwa Bharath Singh
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              AI/ML Engineer & Full-Stack Developer. Focused on C/C++ computational speed, PyTorch neural models, and modern full-stack application architecture.
            </p>
          </div>

          {/* Social Links & Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/vishwa-csdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#12141d] border border-white/10 text-slate-300 hover:text-white hover:border-[#38bdf8]/40 transition-all font-mono text-xs"
            >
              <Github className="w-4 h-4 text-[#38bdf8]" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/vishwa-bharath-singh-37552137b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#12141d] border border-white/10 text-slate-300 hover:text-white hover:border-[#38bdf8]/40 transition-all font-mono text-xs"
            >
              <Linkedin className="w-4 h-4 text-[#38bdf8]" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#12141d] border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Vishwa Bharath Singh. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span>Obsidian Minimalist Theme</span>
            <span>•</span>
            <span className="text-[#38bdf8]">Precision Light Accent</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
