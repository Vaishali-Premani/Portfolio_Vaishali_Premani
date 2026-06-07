import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer({ isDarkMode }) {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t transition-all ${isDarkMode
      ? 'bg-slate-950/60 border-slate-900 text-slate-400'
      : 'bg-slate-50 border-slate-200/80 text-slate-500'
      }`}>
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo / copyright */}
        <div className="text-center md:text-left">
          <div
            onClick={() => scrollTo('home')}
            className="font-bold font-display text-lg bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity inline-block mb-2"
          >
            Vaishali Premani
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold">
          {['home', 'about', 'skills', 'experience', 'projects', 'research', 'resume', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="hover:text-cyan-400 transition-colors uppercase tracking-wider cursor-pointer"
            >
              {id === 'home' ? 'Top' : id}
            </button>
          ))}
        </div>

        {/* Social Icons & Signature */}
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/vaishali-premani-825072299/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Vaishali-Premani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:premanivaishali@gmail.com"
              className="hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="text-[10px] text-slate-500 flex items-center gap-1">
            Designed & Developed by Vaishali Premani
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-pulse" />
          </div>
        </div>

      </div>
    </footer>
  );
}
