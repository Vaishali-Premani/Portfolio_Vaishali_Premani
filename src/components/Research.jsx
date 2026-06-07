import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Trophy, Sparkles, Award, BarChart3, ArrowRight } from 'lucide-react';

export default function Research({ isDarkMode }) {
  const achievements = [
    {
      title: 'ICAMC-2026 Research Paper',
      subtitle: 'Author & Presenter',
      desc: 'Research paper on real-time posture correction using computer vision accepted and presented at the International Conference on Advanced Machine Learning and Computing (ICAMC-2026). Developed deep neural structures mapping body coordinate joints.',
      icon: FileText,
      color: 'from-cyan-500 to-blue-500',
      tag: 'Academic Research'
    },
    {
      title: 'GATE-DA 2026 Qualified',
      subtitle: 'Graduate Aptitude Test in Engineering',
      desc: 'Successfully qualified the prestigious GATE-DA (Data Science & Artificial Intelligence) exam, demonstrating strong theoretical proficiency across probability, statistics, linear algebra, ML pipelines, and DBMS.',
      icon: Trophy,
      color: 'from-indigo-500 to-purple-500',
      tag: 'National Qualification'
    },
    {
      title: '1st Position in Prompting Competition',
      subtitle: '"Perfection in Prompting: Mastering ChatGPT"',
      desc: 'Secured the absolute 1st Position by constructing complex, contextual prompt systems, demonstrating advanced prompt engineering methodologies, structured outputs, and LLM behavior steering skills.',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
      tag: 'Prompt Engineering'
    },
    {
      title: '23rd Rank in ML Mastery Challenge',
      subtitle: 'Predictive Analytics Hackathon',
      desc: 'Outranked hundreds of global data professionals to claim the 23rd Rank in the ML Mastery Challenge by implementing complex ensemble algorithms and fast custom hyperparameter search architectures.',
      icon: Award,
      color: 'from-pink-500 to-rose-500',
      tag: 'Competitive Hackathon'
    },
    {
      title: 'Tata Forage Data Visualization Certification',
      subtitle: 'Professional Competency Credential',
      desc: 'Completed rigorous hands-on corporate case studies on business intelligence visualization. Gained deep capability designing complex visual stories, heatmaps, and trend projections for corporate leaders.',
      icon: BarChart3,
      color: 'from-teal-500 to-cyan-500',
      tag: 'Professional Certification'
    }
  ];

  return (
    <section id="research" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-extrabold font-display text-slate-800 dark:text-slate-100"
          >
            Research & <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Achievements</span>
          </motion.h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((ach, idx) => {
            const Icon = ach.icon;
            // Span 2 columns on larger screens for the research paper card to highlight it
            const isFirst = idx === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border transition-all hover:scale-[1.02] flex flex-col justify-between ${isFirst && 'md:col-span-2 lg:col-span-2'
                  } ${isDarkMode
                    ? 'bg-slate-900/40 backdrop-blur-md border-slate-800/80 hover:border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.2)]'
                    : 'bg-white border-slate-200 shadow-sm hover:border-indigo-500/20 hover:shadow-md'
                  }`}
              >
                <div>
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${ach.color} text-white shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${isDarkMode
                        ? 'bg-slate-950/80 text-slate-400 border border-slate-800'
                        : 'bg-slate-50 text-slate-600 border border-slate-200'
                      }`}>
                      {ach.tag}
                    </span>
                  </div>

                  {/* Header Title */}
                  <h3 className={`font-bold font-display text-slate-800 dark:text-slate-100 ${isFirst ? 'text-xl md:text-2xl' : 'text-lg'
                    }`}>
                    {ach.title}
                  </h3>

                  <h4 className="text-xs font-semibold text-indigo-600 dark:text-cyan-400 mt-1 mb-4 uppercase tracking-wide">
                    {ach.subtitle}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed mb-6">
                    {ach.desc}
                  </p>
                </div>

                {isFirst && (
                  <div className="pt-4 border-t border-slate-200/20 dark:border-slate-800/40 flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      Accepted Conference Paper
                    </span>
                    <a
                      href="https://drive.google.com/file/d/1voG6Eh_Tf5Z5dhjnlJUoL5AopEv12NIm/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    >
                      Read Paper
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
