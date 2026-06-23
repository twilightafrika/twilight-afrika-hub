"use client";

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-surface dark:bg-primary-container text-primary">
      <nav className="flex justify-between items-center w-full px-6 py-4">
        <a href="/" className="flex items-center gap-3 transition-transform">
          <img src="/logo.jpeg" alt="TwilightAfrika Hub Logo" className="h-12 w-auto object-contain rounded-md" />
          <span className="text-xl font-bold text-gray-900 tracking-tight">TwilightAfrika Hub</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-secondary">About</a>
          <a href="#services" className="text-secondary">Services</a>
          <a href="#contact" className="text-secondary">Contact</a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary p-2"
        >
          <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b shadow-xl p-6 flex flex-col gap-4 z-50">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-700 text-lg">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-gray-700 text-lg">Services</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-700 text-lg">Contact</a>
        </div>
      )}
    </header>
  );
}