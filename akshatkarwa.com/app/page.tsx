"use client";
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Academics from './components/Academics';

export default function Main() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreenSize();
    let timeoutId: NodeJS.Timeout | undefined;
    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(checkScreenSize, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <>
      <div 
        className="fixed inset-0 w-full h-full bg-white"
        style={{
          backgroundImage: 'url("/images/background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
          willChange: 'transform',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden'
        }}
      />
      <main className="relative flex flex-col items-center justify-center min-h-screen">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <div className={`w-full ${isMounted && !isDesktop ? 'hidden' : 'block'}`}>
          <Academics />
        </div>
      </main>

      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
        
        section {
          background: transparent !important;
        }
        
        @media (min-width: 1024px) {
          .fixed {
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
          }
        }
      `}</style>
    </>
  );
}