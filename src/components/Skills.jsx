import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, BrainCircuit, MessageSquareCode, Library, BarChart3, Terminal } from 'lucide-react';

export default function Skills({ isDarkMode }) {
  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: Code,
      color: 'from-cyan-500 to-blue-500',
      skills: ['Python', 'SQL']
    },
    {
      id: 'ml_dl',
      title: 'Machine & Deep Learning',
      icon: BrainCircuit,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        'Machine Learning',
        'Deep Learning',
        'Predictive Modeling',
        'Feature Engineering',
        'Time Series Forecasting',
        'Recommender Systems'
      ]
    },
    {
      id: 'dl_arch',
      title: 'DL Architectures',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: ['CNN', 'RNN', 'LSTM', 'Transformers']
    },
    {
      id: 'nlp_genai',
      title: 'NLP & Generative AI',
      icon: MessageSquareCode,
      color: 'from-cyan-500 to-teal-500',
      skills: ['NLP', 'NLP Pipelines', 'LLMs', 'Prompt Engineering', 'RAG']
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: Library,
      color: 'from-blue-500 to-indigo-500',
      skills: [
        'TensorFlow',
        'Scikit-learn',
        'LangChain',
        'LlamaIndex',
        'NLTK',
        'Hugging Face',
        'FAISS VectorDB'
      ]
    },
    {
      id: 'data_analysis',
      title: 'Data Analysis & Viz',
      icon: BarChart3,
      color: 'from-indigo-500 to-pink-500',
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA', 'Excel']
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: Terminal,
      color: 'from-purple-500 to-teal-500',
      skills: [
        'Git',
        'GitHub',
        'Jupyter Notebook',
        'Google Colab',
        'VS Code',
        'GCP',
        'Flask',
        'Streamlit'
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-900/10 dark:bg-slate-950/20">
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-extrabold font-display text-slate-800 dark:text-slate-100"
          >
            Technical <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-4xl mx-auto">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${activeCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/80 hover:text-cyan-400'
              }`}
          >
            All Skills
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/80 hover:text-cyan-400'
                }`}
            >
              <cat.icon className="w-3.5 h-3.5" />
              {cat.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                layout
                key={category.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`p-6 rounded-2xl border transition-all hover:shadow-xl ${isDarkMode
                    ? 'bg-slate-900/40 backdrop-blur-md border-slate-800/80 hover:border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.2)]'
                    : 'bg-white border-slate-200 shadow-sm hover:border-indigo-500/20'
                  }`}
              >
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-slate-800 dark:text-slate-200">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${isDarkMode
                          ? 'bg-slate-950/65 border-slate-800/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]'
                          : 'bg-slate-50 border-slate-200/80 text-slate-600 hover:text-indigo-600 hover:border-indigo-500/30'
                        }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
