import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#tech' },
    { name: 'Projects', href: '#projects' },
    { name: 'Milestones', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 pointer-events-none">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 pointer-events-auto px-4 sm:px-6 py-3 flex items-center justify-between ${
          scrolled
            ? 'bg-[#06070c]/90 backdrop-blur-xl border border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.85)]'
            : 'bg-[#06070c]/60 backdrop-blur-md border border-white/[0.06]'
        }`}
      >
        {/* Brand Logo / Avatar */}
        <a href="#" className="group flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 shadow-md group-hover:border-[#38bdf8]/60 transition-all bg-[#0f1118]">
            <img
              src="/profile.jpg"
              alt="Vishwa Bharath Singh"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white text-sm tracking-tight group-hover:text-[#38bdf8] transition-colors">
              Vishwa Bharath Singh
            </span>
            <span className="text-[10px] font-mono text-slate-400">AI/ML & Full-Stack</span>
          </div>
        </a>

        {/* Live Status Pill with Multi-Accent Glow */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b0d16] border border-white/[0.08] text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34d399] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34d399]"></span>
          </span>
          <span className="font-mono text-[11px] text-slate-300">Open to Opportunities</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono text-slate-300 hover:text-[#38bdf8] transition-colors tracking-wider uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Social Links */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="https://github.com/vishwa-csdev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors border border-transparent hover:border-white/10"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/vishwa-bharath-singh-37552137b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-[#38bdf8] hover:bg-white/[0.06] transition-colors border border-transparent hover:border-white/10"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#resume"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] font-mono text-xs font-medium hover:bg-[#38bdf8]/20 hover:border-[#38bdf8]/50 transition-all hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-[#06070c]/95 backdrop-blur-xl border border-white/[0.1] p-5 flex flex-col gap-3 shadow-2xl pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-200 hover:text-[#38bdf8] py-1.5 px-2 rounded-lg hover:bg-white/[0.04]"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.08] mt-1">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/vishwa-csdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#38bdf8] p-1.5 rounded-lg bg-white/[0.04]"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vishwa-bharath-singh-37552137b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#38bdf8] p-1.5 rounded-lg bg-white/[0.04]"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>
            <a
              href="#resume"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#38bdf8]/15 text-[#38bdf8] font-mono text-xs font-medium"
            >
              <FileText className="w-3.5 h-3.5" /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
