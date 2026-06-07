import React, { useEffect, useState } from 'react';

export default function ScrollProgress({ isDarkMode }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.pageYOffset / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] z-[999] pointer-events-none">
      <div
        className={`h-full bg-gradient-to-r ${
          isDarkMode 
            ? 'from-cyan-400 via-purple-500 to-indigo-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]' 
            : 'from-indigo-600 via-purple-600 to-pink-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]'
        } transition-all duration-75 ease-out`}
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
