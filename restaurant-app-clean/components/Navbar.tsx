"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">

        {/* Logo */}
        <h1 className="font-bold text-lg">
          Tokyo by LYA
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <a href="#menu" className="hover:text-red-400">Menu</a>
          <a href="#experience" className="hover:text-red-400">Experience</a>
          <a href="#contact" className="hover:text-red-400">Contact</a>
        </div>

        {/* Mobile Button */}
        <button 
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4">
          <a href="#menu" onClick={() => setOpen(false)}>Menu</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}