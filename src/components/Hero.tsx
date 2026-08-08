import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ArrowRight, Code, Cpu, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const nameText = 'Vishwa Bharath Singh';
  const phrases = [
    'AI/ML Engineer',
    'Full-Stack Developer',
    'High-Performance Systems Architect',
    'C/C++ & Python Specialist'
  ];

  // Typing state for Name
  const [displayedName, setDisplayedName] = useState('');
  const [isNameDone, setIsNameDone] = useState(false);

  // Cycling phrase state
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedPhrase, setDisplayedPhrase] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // 1. Typewriter effect for Main Name
  useEffect(() => {
    if (displayedName.length < nameText.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(nameText.slice(0, displayedName.length + 1));
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      setIsNameDone(true);
    }
  }, [displayedName]);

  // 2. Typewriter & cycling effect for Phrases (starts after name typing finishes)
  useEffect(() => {
    if (!isNameDone) return;

    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting && displayedPhrase.length < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedPhrase(currentPhrase.slice(0, displayedPhrase.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && displayedPhrase.length === currentPhrase.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedPhrase.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayedPhrase(currentPhrase.slice(0, displayedPhrase.length - 1));
      }, 35);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedPhrase.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }
  }, [displayedPhrase, isDeleting, isNameDone, phraseIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background Soft Precision Ambient Glow (No harsh neon wash) */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#38bdf8]/[0.04] rounded-full blur-[140px]" />
      
      {/* Hairline Grid Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Profile Picture Frame with Precision Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6 group"
        >
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#38bdf8]/40 via-sky-500/20 to-[#38bdf8]/40 blur-md opacity-60 group-hover:opacity-100 transition duration-500" />
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl p-1 bg-[#101219]">
            <img
              src="/profile.jpg"
              alt="Vishwa Bharath Singh"
              className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Monospace System Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10131e] border border-white/10 text-xs font-mono text-slate-300 mb-8"
        >
          <Terminal className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span>System Init :: Core C/C++ & Python Stack</span>
        </motion.div>

        {/* Hero Name Typing Heading */}
        <div className="min-h-[72px] sm:min-h-[96px] flex items-center justify-center">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            {displayedName}
            <span className="glow-cursor" aria-hidden="true" />
          </h1>
        </div>

        {/* Cycling Subline Role */}
        <div className="mt-4 min-h-[36px] flex items-center justify-center">
          <p className="font-mono text-lg sm:text-2xl text-slate-300 font-medium">
            <span className="text-[#38bdf8]">&gt;</span> {displayedPhrase}
            {isNameDone && <span className="inline-block w-2 h-5 bg-[#38bdf8]/70 ml-1 animate-pulse" />}
          </p>
        </div>

        {/* Staggered Bio Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed font-sans"
        >
          Engineering intelligent machine learning pipelines, high-throughput C/C++ backends, 
          and modern full-stack web platforms with algorithmic precision and luxury minimalism.
        </motion.p>

        {/* Core Specs Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-6"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121520] border border-white/5 text-xs text-slate-300 font-mono">
            <Code className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>C/C++ & Python</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121520] border border-white/5 text-xs text-slate-300 font-mono">
            <Cpu className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>PyTorch & ML Pipelines</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121520] border border-white/5 text-xs text-slate-300 font-mono">
            <Terminal className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Full-Stack Next.js / FastAPI</span>
          </div>
        </motion.div>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#38bdf8] text-[#090a0f] font-medium text-sm hover:bg-[#7dd3fc] transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#resume"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#12141d] border border-white/15 text-slate-200 font-medium text-sm hover:border-[#38bdf8]/40 hover:text-white hover:bg-[#181b28] transition-all duration-300"
          >
            <FileText className="w-4 h-4 text-[#38bdf8]" />
            <span>View Resume</span>
          </a>

          <a
            href="https://github.com/vishwa-csdev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#12141d] border border-white/15 text-slate-300 hover:text-white hover:border-[#38bdf8]/40 transition-all duration-300"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/vishwa-bharath-singh-37552137b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#12141d] border border-white/15 text-slate-300 hover:text-white hover:border-[#38bdf8]/40 transition-all duration-300"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
