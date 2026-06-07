import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Linkedin, Github, CheckCircle, Copy, AlertCircle } from 'lucide-react';

export default function Contact({ isDarkMode }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  const myEmail = 'premanivaishali@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">

      {/* Decorative background glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 left-[10%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-tr from-cyan-500/5 to-purple-500/10 blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-extrabold font-display text-slate-800 dark:text-slate-100"
          >
            Get In <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Unified Contact Links Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4"
        >
          {/* Email box */}
          <div className={`flex-1 flex items-center justify-between gap-3 p-4 rounded-2xl border transition-all ${isDarkMode
            ? 'bg-slate-900/40 border-slate-800/80 hover:border-cyan-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]'
            : 'bg-slate-50 border-slate-200 hover:border-indigo-300'
            }`}>
            <div className="flex items-center gap-2.5 min-w-0">
              <Mail className="w-4 h-4 text-indigo-500 dark:text-cyan-400 shrink-0" />
              <span className="text-sm font-bold font-display text-indigo-600 dark:text-cyan-400 select-all truncate">
                {myEmail}
              </span>
            </div>
            <button
              onClick={handleCopyEmail}
              className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all shrink-0 ${copied
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500'
                : isDarkMode
                  ? 'bg-slate-950/80 border-slate-800 text-slate-300 hover:text-cyan-400'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-indigo-600'
                }`}
            >
              {copied ? <CheckCircle className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          {/* LinkedIn box */}
          <a
            href="https://www.linkedin.com/in/vaishali-premani-825072299/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2.5 p-4 rounded-2xl border transition-all hover:scale-[1.02] active:scale-[0.98] text-xs font-bold ${isDarkMode
              ? 'bg-slate-900/40 border-slate-800/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30'
              : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-300'
              }`}
          >
            <Linkedin className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0" />
            LinkedIn
          </a>

          {/* GitHub box */}
          <a
            href="https://github.com/Vaishali-Premani"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2.5 p-4 rounded-2xl border transition-all hover:scale-[1.02] active:scale-[0.98] text-xs font-bold ${isDarkMode
              ? 'bg-slate-900/40 border-slate-800/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30'
              : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-300'
              }`}
          >
            <Github className="w-4 h-4 shrink-0" />
            GitHub
          </a>

        </motion.div>

      </div>
    </section>
  );
}
