"use client";
import React, { useState, useCallback } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseLeave = useCallback(() => {
    if (window.innerWidth <= 1024) {
      setIsOpen(false);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      
      setTimeout(() => {
        const windowWidth = window.innerWidth;
        const offset = windowWidth < 640 ? -12 :
        windowWidth < 1024 ? -12:
        0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 10);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <nav className="w-full bg-black text-white shadow-md fixed top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-3 sm:py-3 sm:px-4 lg:py-4 lg:px-6">
        <div className="text-base sm:text-lg lg:text-xl font-bold hover:text-gray-300 transition duration-300">
          <a 
            href="#home" 
            onClick={(e) => handleClick(e, 'home')}
            onTouchEnd={(e) => handleClick(e, 'home')}
          >
            AKSHAT KARWA
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex lg:hidden flex-col justify-center items-center p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1.5 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex font-bold text-lg space-x-12 xl:space-x-16">
          <a 
            href="#home" 
            onClick={(e) => handleClick(e, 'home')}
            className="hover:text-gray-300 transition duration-300"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleClick(e, 'about')}
            className="hover:text-gray-300 transition duration-300"
          >
            About
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleClick(e, 'projects')}
            className="hover:text-gray-300 transition duration-300"
          >
            Projects
          </a>
          <a 
            href="#academics" 
            onClick={(e) => handleClick(e, 'academics')}
            className="hover:text-gray-300 transition duration-300"
          >
            Academics
          </a>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div 
            className="absolute top-full left-0 w-full lg:hidden bg-black shadow-lg"
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col items-center w-full">
              <a 
                href="#home"
                onClick={(e) => handleClick(e, 'home')}
                onTouchEnd={(e) => handleClick(e, 'home')}
                className="w-full text-center py-3 hover:bg-gray-800 transition duration-300 text-sm sm:text-base"
              >
                Home
              </a>
              <a 
                href="#about"
                onClick={(e) => handleClick(e, 'about')}
                onTouchEnd={(e) => handleClick(e, 'about')}
                className="w-full text-center py-4 hover:bg-gray-800 transition duration-300 text-base sm:text-lg"
              >
                About
              </a>
              <a 
                href="#projects"
                onClick={(e) => handleClick(e, 'projects')}
                onTouchEnd={(e) => handleClick(e, 'projects')}
                className="w-full text-center py-4 hover:bg-gray-800 transition duration-300 text-base sm:text-lg"
              >
                Projects
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}