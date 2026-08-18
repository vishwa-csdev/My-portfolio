import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { ResumeSection } from './components/ResumeSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030407] text-[#f1f5f9] font-sans antialiased selection:bg-[#38bdf8]/25 selection:text-[#38bdf8]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Achievements />
        <ResumeSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
