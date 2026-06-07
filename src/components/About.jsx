import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Brain, Compass, BookOpen, Layers } from 'lucide-react';

export default function About({ isDarkMode }) {
  const interests = [
    { title: 'Generative AI', desc: 'LLMs, Prompt Engineering, Agents', icon: Brain, color: 'text-cyan-400 border-cyan-500/20' },
    { title: 'NLP', desc: 'Transformers, Pipelines, NLTK/Hugging Face', icon: BookOpen, color: 'text-indigo-400 border-indigo-500/20' },
    { title: 'Deep Learning', desc: 'CNNs, RNNs, LSTMs architectures', icon: Layers, color: 'text-purple-400 border-purple-500/20' },
    { title: 'AI Engineering', desc: 'End-to-end model training & deployment', icon: Compass, color: 'text-pink-400 border-pink-500/20' },
    { title: 'RAG Systems', desc: 'LlamaIndex, LangChain, Vector Databases', icon: Award, color: 'text-cyan-400 border-cyan-500/20' },
    { title: 'Intelligent Automation', desc: 'Computer vision, posture, time-series analysis', icon: GraduationCap, color: 'text-indigo-400 border-indigo-500/20' },
  ];

  const cardVariants = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-extrabold font-display text-slate-800 dark:text-slate-100"
          >
            About <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Summary and Education */}
          <motion.div 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: '-100px' }}
            variants={cardVariants}
            className="lg:col-span-6 space-y-8"
          >
            {/* Bio Card */}
            <div className={`p-8 rounded-2xl border transition-all ${
              isDarkMode 
                ? 'bg-slate-900/40 backdrop-blur-md border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.2)]' 
                : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6 text-cyan-400" />
                Professional Summary
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                Final-year B.Tech student specializing in Artificial Intelligence and Machine Learning with hands-on experience in Machine Learning, Deep Learning, NLP, and Generative AI. Skilled in building end-to-end AI solutions using Python, TensorFlow, LangChain, and LLM-based architectures, with experience in research, predictive modeling, and real-time intelligent systems.
              </p>
            </div>

            {/* Education Card */}
            <div className={`p-8 rounded-2xl border transition-all ${
              isDarkMode 
                ? 'bg-slate-900/40 backdrop-blur-md border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.2)]' 
                : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-indigo-400" />
                Education Background
              </h3>
              
              <div className="relative pl-6 border-l-2 border-indigo-500/30 space-y-4">
                {/* Visual marker dot */}
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="text-sm font-semibold uppercase tracking-wider text-indigo-500 dark:text-cyan-400">
                      Bachelor of Technology
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20 w-fit">
                      2022 - 2026
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                    Artificial Intelligence & Machine Learning
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                    Guru Gobind Singh Indraprastha University (GGSIPU), Delhi, India
                  </p>
                  
                  {/* Grade display */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 text-sm font-bold flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      CGPA: 9.29 / 10.0
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Areas of Interest */}
          <motion.div 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: '-100px' }}
            variants={cardVariants}
            className="lg:col-span-6"
          >
            <div className={`p-8 rounded-2xl border transition-all ${
              isDarkMode 
                ? 'bg-slate-900/40 backdrop-blur-md border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.2)]' 
                : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-slate-200 mb-6">
                Areas of Interest
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className={`p-5 rounded-xl border flex flex-col gap-3 transition-colors ${
                        isDarkMode
                          ? 'bg-slate-950/40 border-slate-800/60 hover:bg-slate-800/20 hover:border-cyan-500/30'
                          : 'bg-slate-50 border-slate-100 hover:bg-white hover:shadow-md hover:border-indigo-600/30'
                      }`}
                    >
                      <div className={`p-2.5 rounded-lg bg-slate-900/10 dark:bg-slate-950/80 w-fit ${item.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
