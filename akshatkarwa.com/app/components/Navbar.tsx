"use client";
import Link from 'next/link';
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white shadow-md fixed top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-4 md:py-6 md:px-6">
        <div className="text-xl md:text-2xl font-bold hover:text-gray-300 transition duration-300">
          <Link href="/">AKSHAT KARWA</Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden flex-col justify-center items-center"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1.5 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex font-bold text-xl space-x-20">
          <Link href="#home" className="hover:text-gray-300 transition duration-300">
            Home
          </Link>
          <Link href="#about" className="hover:text-gray-300 transition duration-300">
            About
          </Link>
          <Link href="#projects" className="hover:text-gray-300 transition duration-300">
            Projects
          </Link>
          <Link href="#academics" className="hover:text-gray-300 transition duration-300">
            Academics
          </Link>
        </div>

        {/* Navigation Links - Mobile */}
        <div className={`${isOpen ? 'flex' : 'hidden'} w-full md:hidden`}>
          <div className="flex flex-col items-center w-full space-y-4 pt-4">
            <Link href="#home" className="hover:text-gray-300 transition duration-300 w-full text-center py-2">
              Home
            </Link>
            <Link href="#about" className="hover:text-gray-300 transition duration-300 w-full text-center py-2">
              About
            </Link>
            <Link href="#projects" className="hover:text-gray-300 transition duration-300 w-full text-center py-2">
              Projects
            </Link>
            {/* Academics link removed from mobile menu */}
          </div>
        </div>
      </div>
    </nav>
  );
}