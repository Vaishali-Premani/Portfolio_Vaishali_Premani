import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor({ isDarkMode }) {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  
  const mouseRef = useRef({ x: 0, y: 0 });      // True pointer target position
  const dotPos = useRef({ x: 0, y: 0 });        // Current dot coordinate
  const outlinePos = useRef({ x: 0, y: 0 });    // Current outer ring coordinate
  
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setHidden(false);
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Dynamic detection of interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('clickable')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // High performance render loop via requestAnimationFrame (avoids React re-render overhead)
    let rafId;
    const animate = () => {
      const targetX = mouseRef.current.x;
      const targetY = mouseRef.current.y;

      // Elastic interpolation (lerp) - snappier coefficients
      dotPos.current.x += (targetX - dotPos.current.x) * 0.45;
      dotPos.current.y += (targetY - dotPos.current.y) * 0.45;

      outlinePos.current.x += (targetX - outlinePos.current.x) * 0.22;
      outlinePos.current.y += (targetY - outlinePos.current.y) * 0.22;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x - 4}px, ${dotPos.current.y - 4}px, 0)`;
      }
      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${outlinePos.current.x - 16}px, ${outlinePos.current.y - 16}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Responsive: disable on touch/mobile devices
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice || hidden) return null;

  return (
    <>
      {/* Small inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
      >
        <div
          className={`w-2 h-2 rounded-full transition-transform duration-150 ${
            isDarkMode ? 'bg-cyan-400' : 'bg-indigo-600'
          } ${clicked ? 'scale-75' : ''}`}
        />
      </div>

      {/* Ambient outer glowing ring */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
      >
        <div
          className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
            isDarkMode 
              ? 'border-cyan-400/55 bg-cyan-400/5 shadow-[0_0_15px_rgba(6,182,212,0.2)]' 
              : 'border-indigo-600/55 bg-indigo-600/5 shadow-[0_0_15px_rgba(99,102,241,0.2)]'
          } ${clicked ? 'scale-[0.8]' : ''} ${
            hovered ? 'scale-150 border-purple-500 bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.3)]' : ''
          }`}
        />
      </div>
    </>
  );
}
