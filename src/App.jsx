import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Sparkles } from 'lucide-react';
import useLocalStorage from './hooks/useLocalStorage';

// Sections & Utilities
import BackgroundGrid from './components/BackgroundGrid';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('vaishali-portfolio-theme', true);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Initializing Core Systems...');

  // Loading screen sequence
  useEffect(() => {
    const texts = [
      'Initializing Core Systems...',
      'Scanning Technical Repositories...',
      'Mapping Neural Networks...',
      'Synchronizing Data Structures...',
      'Compiling AI Model Guardrails...',
      'Launching Recruiter Environment...'
    ];

    let currentIdx = 0;
    const interval = setInterval(() => {
      currentIdx = (currentIdx + 1) % texts.length;
      setLoadingText(texts[currentIdx]);
    }, 450);

    const timer = setTimeout(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={isDarkMode ? 'dark bg-[#030712] text-slate-100 min-h-screen' : 'bg-[#f8fafc] text-slate-800 min-h-screen'}>
      
      {/* Visual background and interface trackers */}
      <BackgroundGrid isDarkMode={isDarkMode} />
      <CustomCursor isDarkMode={isDarkMode} />
      <ScrollProgress isDarkMode={isDarkMode} />

      <AnimatePresence mode="wait">
        {isLoading ? (
          /* AI Preloader Screen */
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#030712] z-[9999] flex flex-col items-center justify-center text-white"
          >
            {/* Spinning core */}
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 animate-spin duration-3000 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                <Cpu className="w-8 h-8 text-white animate-pulse" />
              </div>
              <Sparkles className="w-5 h-5 text-cyan-400 absolute -top-2 -right-2 animate-bounce" />
            </div>

            <h2 className="text-xl font-bold font-display tracking-widest text-slate-200">
              VAISHALI PREMANI
            </h2>
            
            <p className="text-xs font-semibold text-cyan-400 mt-4 h-5 min-w-[200px] text-center tracking-wide font-display">
              {loadingText}
            </p>
          </motion.div>
        ) : (
          /* Fully Loaded App Content */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            
            <main className="relative z-10 space-y-12">
              <Hero isDarkMode={isDarkMode} />
              
              {/* Section reveals using Framer Motion wrappers */}
              <SectionReveal>
                <About isDarkMode={isDarkMode} />
              </SectionReveal>

              <SectionReveal>
                <Skills isDarkMode={isDarkMode} />
              </SectionReveal>

              <SectionReveal>
                <Experience isDarkMode={isDarkMode} />
              </SectionReveal>

              <SectionReveal>
                <Projects isDarkMode={isDarkMode} />
              </SectionReveal>

              <SectionReveal>
                <Research isDarkMode={isDarkMode} />
              </SectionReveal>

              <SectionReveal>
                <Resume isDarkMode={isDarkMode} />
              </SectionReveal>

              <SectionReveal>
                <Contact isDarkMode={isDarkMode} />
              </SectionReveal>
            </main>

            <Footer isDarkMode={isDarkMode} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Reusable scroll reveal wrapper for neat section slide-ins
function SectionReveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Elegant easeOutQuart cubic-bezier
    >
      {children}
    </motion.div>
  );
}
