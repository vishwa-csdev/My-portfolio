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
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0f]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo / Profile Avatar */}
        <a href="#" className="group flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 shadow-md group-hover:border-[#38bdf8]/60 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.4)] transition-all bg-[#141722]">
            <img
              src="/profile.jpg"
              alt="Vishwa Bharath Singh Avatar"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white text-sm tracking-wide group-hover:text-[#38bdf8] transition-colors">
              Vishwa Bharath Singh
            </span>
            <span className="text-[10px] font-mono text-slate-400">AI/ML & Full-Stack</span>
          </div>
        </a>

        {/* Status Pill (Center) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#121520] border border-white/10 text-xs text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38bdf8]"></span>
          </span>
          <span className="font-mono text-[11px] text-slate-300">Available for Opportunities</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-[#38bdf8] transition-colors tracking-wider uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Social Links */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/vishwa-csdev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/vishwa-bharath-singh-37552137b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#resume"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] font-mono text-xs font-medium hover:bg-[#38bdf8]/20 hover:border-[#38bdf8]/50 transition-all hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0f15] border-b border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-200 hover:text-[#38bdf8] py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <a
              href="https://github.com/vishwa-csdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-[#38bdf8]"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vishwa-bharath-singh-37552137b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-[#38bdf8]"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
