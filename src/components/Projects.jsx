import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronRight, CheckCircle2, AlertCircle, Info } from 'lucide-react';

export default function Projects({ isDarkMode }) {
  const projects = [
    {
      id: 'pushup',
      title: 'AI-Based Push-Up Trainer',
      tagline: 'Presented at ICAMC-2026',
      problem: 'Recruits and fitness enthusiasts frequently execute push-ups with incorrect posture, causing minor/severe joint injuries and reduced workout effectiveness due to the absence of real-time coaching.',
      features: [
        'Real-time joint coordinate monitoring using MediaPipe pose estimation',
        'Mathematical angle calculation algorithms to determine body alignment accuracy',
        'Interactive audio-visual posture correction warnings during workout session',
        'Completed research paper accepted and presented at ICAMC-2026 conference'
      ],
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Deep Learning', 'PyQt'],
      github: 'https://github.com/vaishalipremani/ai-pushup-trainer',
      demo: 'https://github.com/vaishalipremani/ai-pushup-trainer',
      accent: 'border-cyan-500/20 text-cyan-400 hover:border-cyan-500/40'
    },
    {
      id: 'rag',
      title: 'End-to-End RAG LLM Application',
      tagline: 'Intelligent Document QA',
      problem: 'Traditional PDF/document Q&A relies on keyword matching which misses contextual alignment, and standard LLMs suffer from hallucinations when answering questions about customized private documents.',
      features: [
        'Engineered optimized vector indexing for multi-format dense PDFs using LlamaIndex',
        'Integrated semantic context injection strategies using custom LLM prompt engineering',
        'Equipped with Vector Store Database retrieval to reduce LLM hallucination rates',
        'Deployed fully interactive UI frontend dashboard using Streamlit engine'
      ],
      tech: ['Python', 'RAG', 'LlamaIndex', 'Vector DB', 'Streamlit', 'Hugging Face'],
      github: 'https://github.com/Vaishali-Premani/End-To-End-RAG-App-using-Llamaindex',
      demo: 'https://github.com/Vaishali-Premani/End-To-End-RAG-App-using-Llamaindex',
      accent: 'border-indigo-500/20 text-indigo-400 hover:border-indigo-500/40'
    },
    {
      id: 'youtube-rag',
      title: 'YouTube RAG Chatbot',
      tagline: 'Conversational Video Intelligence',
      problem: 'Extracting specific information or answers from long-duration YouTube videos is highly time-consuming, requiring manual video scrubbing or reading linear transcripts without contextual understanding.',
      features: [
        'Engineered an end-to-end RAG pipeline to extract, parse, and process YouTube video transcripts dynamically',
        'Generated dense vector embeddings utilizing Hugging Face models and indexed with FAISS for semantic retrieval',
        'Implemented conversational memory buffers to maintain multi-turn, context-aware question answering',
        'Developed interactive source chunk visualization in Streamlit to display referenced video transcript timestamps'
      ],
      tech: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Hugging Face', 'Llama 3.1'],
      github: 'https://github.com/Vaishali-Premani/Youtube_chatbot_using_RAG',
      demo: 'https://github.com/Vaishali-Premani/Youtube_chatbot_using_RAG',
      accent: 'border-emerald-500/20 text-emerald-400 hover:border-emerald-500/40'
    },
    {
      id: 'forecast',
      title: 'Retail Demand Forecasting Engine',
      tagline: 'Time-Series Supply Chain Optimizer',
      problem: 'Retail inventories suffer from extreme overstocking and understocking, resulting in overhead storage fees or stock-outs due to basic non-dynamic moving average prediction engines.',
      features: [
        'Engineered dynamic rolling feature columns and lag values across high-volume inventory rows',
        'Constructed advanced gradient boosted models using extreme gradient boosting (XGBoost)',
        'Modeled seasonality components using multi-seasonal time-series forecasting techniques',
        'Reduced demand forecast error rates by 18% compared to traditional models'
      ],
      tech: ['Python', 'XGBoost', 'Machine Learning', 'Time Series', 'Pandas', 'Scikit-learn'],
      github: 'https://github.com/vaishalipremani/retail-demand-forecasting',
      demo: 'https://github.com/vaishalipremani/retail-demand-forecasting',
      accent: 'border-purple-500/20 text-purple-400 hover:border-purple-500/40'
    },
    {
      id: 'sentiment',
      title: 'Sentiment Analysis System',
      tagline: 'NLP-Driven Customer Feedback Classifier',
      problem: 'Businesses struggle to quickly tag and structure thousands of daily text-based customer reviews into active sentiment insights, leading to delayed service updates.',
      features: [
        'Formulated custom text cleaning and tokenization natural language processing pipelines',
        'Extracted semantic components using TF-IDF feature vectorization techniques',
        'Constructed sentiment classifiers deployed as an operational microservice',
        'Created developer API backend endpoints utilizing lightweight Flask framework'
      ],
      tech: ['Python', 'NLP', 'Flask', 'XGBoost', 'NLTK', 'Scikit-learn'],
      github: 'https://github.com/Vaishali-Premani/Product_Review_Sentiment_Analyzer',
      demo: 'https://github.com/Vaishali-Premani/Product_Review_Sentiment_Analyzer',
      accent: 'border-pink-500/20 text-pink-400 hover:border-pink-500/40'
    }
  ];

  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-900/10 dark:bg-slate-950/20">
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-extrabold font-display text-slate-800 dark:text-slate-100"
          >
            Featured <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((proj) => (
            <motion.div
              layout
              key={proj.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all hover:shadow-xl group ${isDarkMode
                ? `bg-slate-900/45 backdrop-blur-md border-slate-800/80 hover:bg-slate-900/70 shadow-[0_4px_30px_rgba(0,0,0,0.2)] ${proj.accent.split(' ')[0]} ${proj.accent.split(' ')[2]}`
                : `bg-white border-slate-200 shadow-sm hover:border-indigo-500/30 ${proj.accent.split(' ')[2]}`
                }`}
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/20">
                    {proj.tagline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-display text-slate-800 dark:text-slate-100 mb-4 group-hover:text-cyan-400 transition-colors">
                  {proj.title}
                </h3>

                {/* Problem Statement */}
                <div className="flex gap-2.5 items-start mb-6 p-4 rounded-xl bg-slate-900/10 dark:bg-slate-950/40 border border-slate-200/5 dark:border-slate-800/60">
                  <AlertCircle className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">Problem Statement</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{proj.problem}</p>
                  </div>
                </div>

                {/* Interactive Details Toggle */}
                <button
                  onClick={() => toggleExpand(proj.id)}
                  className="flex items-center gap-1 text-xs font-bold text-indigo-500 dark:text-cyan-400 hover:opacity-80 transition-opacity mb-4 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  {expandedId === proj.id ? 'Hide Features' : 'Show Core Features'}
                  <ChevronRight className={`w-3 h-3 transition-transform ${expandedId === proj.id ? 'rotate-90' : ''}`} />
                </button>

                {/* Expandable Core Features */}
                <AnimatePresence>
                  {expandedId === proj.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mb-6 pl-1.5">
                        {proj.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex gap-2 items-start text-xs text-slate-600 dark:text-slate-350 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Tech badging */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${isDarkMode
                        ? 'bg-slate-950/70 text-slate-400 border border-slate-800'
                        : 'bg-slate-50 text-slate-600 border border-slate-200'
                        }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Anchors */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200/20 dark:border-slate-800/40">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800/80 text-xs font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub Code
                </a>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold shadow-[0_2px_10px_rgba(6,182,212,0.15)] hover:shadow-[0_2px_15px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
