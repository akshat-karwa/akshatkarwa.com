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
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
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