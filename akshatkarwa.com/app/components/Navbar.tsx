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
        const offset = 96;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 10);
    }
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    scrollToSection(id);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Selected Works" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-white/70 text-black shadow-sm transition-all duration-300 font-sans">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-3 px-4 lg:py-4 lg:px-6">
        
        {/* Brand */}
        <div className="text-2xl sm:text-3xl hover:text-neutral-500 transition duration-300">
          <a
            href="#home"
            onClick={(e) => handleClick(e, "home")}
            onTouchEnd={(e) => handleClick(e, "home")}
          >
            Akshat Karwa
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex lg:hidden flex-col justify-center items-center p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black mb-1.5 transform transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black mb-1.5 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transform transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex text-xl sm:text-2xl space-x-8 xl:space-x-16">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className="hover:text-neutral-500 transition duration-300 px-2"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div
            className="absolute top-full left-0 w-full lg:hidden bg-white/90 shadow-lg"
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col items-center w-full">
              {navItems.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  onTouchEnd={(e) => handleClick(e, id)}
                  className="w-full text-center py-4 hover:bg-neutral-100 transition duration-300 text-lg sm:text-xl text-black"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
