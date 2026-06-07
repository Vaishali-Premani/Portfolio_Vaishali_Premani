import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

export default function Experience({ isDarkMode }) {
  const experiences = [
    {
      role: 'Research Intern',
      company: 'NITI Aayog',
      duration: 'Winter 2025',
      location: 'New Delhi, India',
      desc: 'Conducted cutting-edge research on deepfake image and video detection systems. Focused on building robust active watermarking technologies and custom deep learning classifiers to protect digital media authenticity. Collaborated on policy formulations and technical strategies to address synthetic media challenges.',
      badge: 'Deep Learning & Media Security',
      tech: ['Python', 'Deep Learning', 'Active Watermarking', 'CNNs', 'OpenCV']
    },
    {
      role: 'Summer Trainee',
      company: 'IBM',
      duration: 'Summer 2024',
      location: 'ADGIPS, New Delhi, India',
      desc: 'Gained comprehensive industry experience with enterprise workflows. Applied standard Machine Learning and Deep Learning architectures (LSTM, Random Forest, XGBoost) to high-volume predictive modeling tasks. Successfully optimized data processing pipelines and accelerated feature selection techniques.',
      badge: 'Predictive Modeling',
      tech: ['Machine Learning', 'TensorFlow', 'Scikit-learn', 'Predictive Modeling', 'Python']
    },
    {
      role: 'Data Analytics & Data Science Intern',
      company: '360DigiTMG',
      duration: 'Spring 2024',
      location: 'India (Remote)',
      desc: 'Designed predictive algorithms to optimize factory operations and predict machinery faults. Formulated anomaly detection models and real-time visualization dashboards to achieve machine downtime optimization, improving uptime using advanced predictive data analytics techniques.',
      badge: 'Data Science & Optimization',
      tech: ['Python', 'EDA', 'Time Series Analysis', 'Anomaly Detection', 'Pandas', 'Seaborn']
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">

      {/* Decorative side blurs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-extrabold font-display text-slate-800 dark:text-slate-100"
          >
            Work <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical center timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500/20" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">

                  {/* Timeline Glowing Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 md:top-auto w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center z-20 node-pulse">
                    <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                  </div>

                  {/* Spacer or Left Side Panel */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:order-1' : 'md:order-2 md:text-left'}`} />

                  {/* Main Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:order-2' : 'md:order-1'}`}
                  >
                    <div className={`p-8 rounded-2xl border transition-all hover:scale-[1.01] ${isDarkMode
                        ? 'bg-slate-900/40 backdrop-blur-md border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.25)] hover:border-cyan-500/20'
                        : 'bg-white border-slate-200 shadow-sm hover:border-indigo-500/20 hover:shadow-md'
                      }`}>

                      {/* Meta header info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/20">
                          {exp.badge}
                        </span>
                        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs font-medium">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {exp.duration}
                        </div>
                      </div>

                      {/* Header title */}
                      <h3 className="text-xl font-bold font-display text-slate-800 dark:text-slate-100">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-4 mt-1.5 mb-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        <span>{exp.company}</span>
                        <span className="text-slate-300 dark:text-slate-700">|</span>
                        <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-normal">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Summary text */}
                      <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed mb-6">
                        {exp.desc}
                      </p>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/20 dark:border-slate-800/40">
                        {exp.tech.map((item, index) => (
                          <span
                            key={index}
                            className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${isDarkMode
                                ? 'bg-slate-950/80 border border-slate-800 text-slate-400'
                                : 'bg-slate-50 border border-slate-200 text-slate-600'
                              }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
