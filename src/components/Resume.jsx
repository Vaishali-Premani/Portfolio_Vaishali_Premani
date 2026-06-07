import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Eye, EyeOff, FileText, ChevronRight } from 'lucide-react';

export default function Resume({ isDarkMode }) {
  const [showPreview, setShowPreview] = useState(false);



  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-slate-900/10 dark:bg-slate-950/20">
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-extrabold font-display text-slate-800 dark:text-slate-100"
          >
            My <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Resume</span>
          </motion.h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">

          {/* Interactive CV Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className={`p-8 rounded-2xl border transition-all ${isDarkMode
              ? 'bg-slate-900/40 backdrop-blur-md border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.2)]'
              : 'bg-white border-slate-200 shadow-sm'
              }`}>
              <div className="flex items-center gap-2 mb-6 border-b border-slate-200/20 dark:border-slate-800/60 pb-4">
                <FileText className="w-5 h-5 text-indigo-500 dark:text-cyan-400" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Interactive CV Summary
                </h4>
              </div>

              {/* Interactive CV outline panel */}
              <div className="space-y-6 text-left">
                {/* Header */}
                <div>
                  <h5 className="text-base font-bold text-slate-800 dark:text-slate-100">Vaishali Premani</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">AI/ML Engineer • Delhi, India • vaishalipremani@gmail.com</p>
                </div>

                {/* Section Education */}
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 border-b border-slate-200/10 dark:border-slate-800/20 pb-0.5">
                    Education
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline text-xs font-semibold text-slate-700 dark:text-slate-200 mt-1">
                      <span>B.Tech in Artificial Intelligence &amp; Machine Learning</span>
                      <span className="text-[10px] font-medium text-slate-500">2022 - 2026</span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400">Guru Gobind Singh Indraprastha University (GGSIPU) • CGPA: 9.29/10.0</p>
                  </div>
                </div>

                {/* Section Experience */}
                <div className="space-y-3">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 border-b border-slate-200/10 dark:border-slate-800/20 pb-0.5">
                    Professional Experience
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between items-center text-xs font-semibold text-slate-700 dark:text-slate-250">
                        <span>Research Intern — NITI Aayog</span>
                        <span className="text-[10px] font-medium text-slate-500">Winter 2025</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">Deepfake image and video detection using active watermarking &amp; DL approaches.</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center text-xs font-semibold text-slate-700 dark:text-slate-250">
                        <span>Summer Trainee — IBM</span>
                        <span className="text-[10px] font-medium text-slate-500">Summer 2024</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">Applied ML and DL models to complex industrial predictive modeling tasks.</p>
                    </div>
                  </div>
                </div>

                {/* Section Projects */}
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 border-b border-slate-200/10 dark:border-slate-800/20 pb-0.5">
                    Featured Projects
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between items-center text-xs font-semibold text-slate-700 dark:text-slate-250">
                        <span>YouTube RAG Chatbot</span>
                        <span className="text-[10px] font-medium text-slate-500">2026</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                        End-to-end RAG pipeline for conversational Q&A on YouTube video transcripts via FAISS search.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section Skills */}
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 border-b border-slate-200/10 dark:border-slate-800/20 pb-0.5">
                    Core Expertise
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    Python • SQL • ML/DL • CNN/RNN/Transformers • NLP &amp; Pipelines • LLMs • RAG (LangChain &amp; LlamaIndex) • TensorFlow • Scikit-learn • Streamlit • GCP • Git
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://drive.google.com/file/d/1Xr9vjrgmpIjTz0gaP09aTbgzxBPZNFT8/view?usp=drive_link"
              download
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-xs text-center shadow-[0_4px_15px_rgba(6,182,212,0.25)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Download PDF Resume
            </a>

            <button
              onClick={() => setShowPreview(!showPreview)}
              className="px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              {showPreview ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Hide CV Summary
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Preview CV Summary
                </>
              )}
            </button>
          </motion.div>

        </div>

        {/* Expandable full screen preview in modal style */}
        <AnimatePresence>
          {showPreview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className={`w-full max-w-4xl max-h-[85vh] overflow-y-auto p-8 sm:p-12 rounded-3xl border ${isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-800 shadow-2xl'
                  }`}
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b border-slate-200/20 dark:border-slate-800/60 pb-6 mb-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-800 dark:text-slate-100">
                      Full Resume Outline Preview
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Interactive structure matching Vaishali's actual CV details</p>
                  </div>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:text-cyan-400 border border-slate-200/60 dark:border-slate-800 text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>

                {/* Styled Document Sheet */}
                <div className={`p-6 sm:p-10 rounded-2xl border text-left space-y-8 font-sans ${isDarkMode ? 'bg-slate-950/50 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                  }`}>
                  {/* CV Identity */}
                  <div className="text-center space-y-2 border-b border-slate-200/20 dark:border-slate-800/60 pb-6">
                    <h1 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-slate-800 dark:text-white">
                      VAISHALI PREMANI
                    </h1>
                    <p className="text-xs font-semibold text-indigo-500 dark:text-cyan-400 uppercase tracking-widest">
                      AI/ML Engineer • Generative AI Enthusiast
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Delhi, India • vaishalipremani@gmail.com • +91 XXXXX XXXXX • github.com/vaishalipremani • linkedin.com/in/vaishali-premani
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-500 dark:text-cyan-400 border-b border-slate-200/10 dark:border-slate-800/20 pb-1">
                      Professional Summary
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed">
                      Final-year B.Tech student specializing in Artificial Intelligence and Machine Learning with hands-on experience in Machine Learning, Deep Learning, NLP, and Generative AI. Skilled in building end-to-end AI solutions using Python, TensorFlow, LangChain, and LLM-based architectures, with experience in research, predictive modeling, and real-time intelligent systems.
                    </p>
                  </div>

                  {/* Education */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-500 dark:text-cyan-400 border-b border-slate-200/10 dark:border-slate-800/20 pb-1">
                      Education
                    </h4>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-xs font-bold text-slate-800 dark:text-slate-200">
                        <span>B.Tech in Artificial Intelligence & Machine Learning</span>
                        <span>2022 - 2026</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-slate-600 dark:text-slate-400">
                        <span>Guru Gobind Singh Indraprastha University (GGSIPU), Delhi</span>
                        <span className="font-bold text-emerald-500">CGPA: 9.29 / 10.0</span>
                      </div>
                    </div>
                  </div>

                  {/* Internships */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-500 dark:text-cyan-400 border-b border-slate-200/10 dark:border-slate-800/20 pb-1">
                      Experience
                    </h4>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-xs font-bold text-slate-800 dark:text-slate-200">
                          <span>Research Intern — NITI Aayog</span>
                          <span>Winter 2025</span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">Deepfake Image & Video Security</p>
                        <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed pl-3 border-l border-cyan-500/30">
                          Worked on deepfake image and video detection using active watermarking and deep learning approaches. Developed neural network models to identify synthetic pixels.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-xs font-bold text-slate-800 dark:text-slate-200">
                          <span>Summer Trainee — IBM</span>
                          <span>Summer 2024</span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">Machine Learning division</p>
                        <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed pl-3 border-l border-cyan-500/30">
                          Applied Machine Learning and Deep Learning concepts to predictive modeling tasks. Handled data preprocessing pipelines, optimized feature selection, and tested ensembles.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-xs font-bold text-slate-800 dark:text-slate-200">
                          <span>Data Analytics & Data Science Intern — 360DigiTMG</span>
                          <span>Spring 2024</span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">Operations Analytics</p>
                        <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed pl-3 border-l border-cyan-500/30">
                          Worked on machine downtime optimization using data analytics techniques. Cleaned and analyzed operations datasets, reducing false failures by 12%.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-500 dark:text-cyan-400 border-b border-slate-200/10 dark:border-slate-800/20 pb-1">
                      Academic & Personal Projects
                    </h4>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-xs font-bold text-slate-800 dark:text-slate-200">
                          <span>YouTube RAG Chatbot</span>
                          <span>2026</span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">Python, Streamlit, LangChain, FAISS, Hugging Face, Llama 3.1</p>
                        <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed pl-3 border-l border-cyan-500/30">
                          Built an end-to-end RAG pipeline to process YouTube video transcripts, generate embeddings, and perform semantic retrieval using FAISS vector search. Implemented conversational memory, context-aware question answering, and source chunk visualization.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certifications and achievements */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-500 dark:text-cyan-400 border-b border-slate-200/10 dark:border-slate-800/20 pb-1">
                      Achievements
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-350">
                      <div className="flex gap-1.5 items-center">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                        Research paper accepted at ICAMC-2026
                      </div>
                      <div className="flex gap-1.5 items-center">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                        GATE-DA 2026 Qualified
                      </div>
                      <div className="flex gap-1.5 items-center">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                        1st Position: Perfection in Prompting
                      </div>
                      <div className="flex gap-1.5 items-center">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                        23rd Rank: ML Mastery Challenge
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-8 flex justify-end gap-4">
                  <a
                    href="https://drive.google.com/file/d/1Xr9vjrgmpIjTz0gaP09aTbgzxBPZNFT8/view?usp=drive_link"
                    download
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] flex items-center gap-1.5"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF Document
                  </a>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}