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
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <main 
      className="flex flex-col items-center justify-center min-h-screen bg-white relative"
      style={{
        backgroundImage: 'url("../images/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        WebkitOverflowScrolling: 'touch'
      }}
    >
    <style jsx global>{`
      @supports (-webkit-overflow-scrolling: touch) {
        main {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
      }
      
      section {
        background: transparent !important;
      }
    `}</style>

      <Navbar />
      <Home />
      <About />
      <Projects />
      <div className={`w-full ${isMounted && !isDesktop ? 'hidden' : 'block'}`}>
        <Academics />
      </div>
    </main>
  );
}