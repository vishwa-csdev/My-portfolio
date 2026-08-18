import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ArrowRight, Brain, Code2, Cpu, Sparkles, Workflow } from 'lucide-react';

export const Hero: React.FC = () => {
  const nameText = 'Vishwa Bharath Singh';
  const phrases = [
    'Applied AI & Machine Learning',
    'Full-Stack Developer (React & TypeScript)',
    'C / C++ & High-Performance Systems',
    'n8n Workflow Automation Specialist'
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
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      setIsNameDone(true);
    }
  }, [displayedName]);

  // 2. Typewriter & cycling effect for Phrases
  useEffect(() => {
    if (!isNameDone) return;

    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting && displayedPhrase.length < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedPhrase(currentPhrase.slice(0, displayedPhrase.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && displayedPhrase.length === currentPhrase.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedPhrase.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayedPhrase(currentPhrase.slice(0, displayedPhrase.length - 1));
      }, 28);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedPhrase.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }
  }, [displayedPhrase, isDeleting, isNameDone, phraseIndex]);

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Multi-Accent Ambient Mesh Glow */}
      <div className="mesh-glow-hero top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Hairline Grid Matrix */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Profile Picture Frame with Multi-Accent Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6 group"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#38bdf8]/40 via-[#818cf8]/40 to-[#34d399]/40 blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl p-1 bg-[#06070c]">
            <img
              src="/profile.jpg"
              alt="Vishwa Bharath Singh"
              className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Monospace Fedora & B.Tech System Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0d16] border border-white/[0.09] text-xs font-mono text-slate-300 mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span>Builds End-to-End • Ships on Fedora Linux</span>
        </motion.div>

        {/* Hero Name Heading */}
        <div className="min-h-[64px] sm:min-h-[84px] flex items-center justify-center">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            {displayedName}
            <span className="glow-cursor" aria-hidden="true" />
          </h1>
        </div>

        {/* Cycling Subline Role */}
        <div className="mt-3 min-h-[34px] flex items-center justify-center">
          <p className="font-mono text-base sm:text-2xl text-slate-300 font-medium">
            <span className="text-[#38bdf8]">&gt;</span> {displayedPhrase}
            {isNameDone && <span className="inline-block w-2 h-5 bg-[#38bdf8]/70 ml-1 animate-pulse" />}
          </p>
        </div>

        {/* Authentic Persona Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed font-sans"
        >
          I build products end-to-end — API, interface, and an ML model doing the work underneath. Currently pursuing a <strong className="text-white font-medium">B.Tech in Artificial Intelligence & Machine Learning</strong>, engineering full-stack web platforms and automated pipelines.
        </motion.p>

        {/* Multi-Accent Core Specs Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3.5"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0b0d18] border border-[#818cf8]/25 text-xs text-[#a5b4fc] font-mono">
            <Brain className="w-3.5 h-3.5 text-[#818cf8]" />
            <span>Python • PyTorch • TensorFlow</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0b0d18] border border-[#38bdf8]/25 text-xs text-[#7dd3fc] font-mono">
            <Code2 className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>React • TypeScript • Tailwind</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0b0d18] border border-[#fbbf24]/25 text-xs text-[#fde68a] font-mono">
            <Cpu className="w-3.5 h-3.5 text-[#fbbf24]" />
            <span>C / C++ Foundations</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0b0d18] border border-[#34d399]/25 text-xs text-[#6ee7b7] font-mono">
            <Workflow className="w-3.5 h-3.5 text-[#34d399]" />
            <span>n8n Workflows</span>
          </div>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#38bdf8] text-[#030407] font-semibold text-sm hover:bg-[#7dd3fc] transition-all duration-300 shadow-[0_0_25px_rgba(56,189,248,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.45)]"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#resume"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0b0d16] border border-white/[0.12] text-slate-200 font-medium text-sm hover:border-[#38bdf8]/50 hover:text-white hover:bg-[#111320] transition-all duration-300"
          >
            <FileText className="w-4 h-4 text-[#38bdf8]" />
            <span>View Resume</span>
          </a>

          <a
            href="https://github.com/vishwa-csdev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#0b0d16] border border-white/[0.12] text-slate-300 hover:text-white hover:border-[#38bdf8]/50 transition-all duration-300"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/vishwa-bharath-singh-37552137b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#0b0d16] border border-white/[0.12] text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8]/50 transition-all duration-300"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
