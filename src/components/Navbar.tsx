// src/components/Navbar.tsx
"use client"
import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { HiBell } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#1C1E22] border-b border-[#535965] text-white py-4 px-6 shadow-lg relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">GenX AI</h1>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="space-x-6 hidden md:flex">
          <a href="#create" className="hover:text-accent">Create</a>
          <a href="#generate" className="hover:text-accent">Generate</a>
          <a href="#trade" className="hover:text-accent">Trade</a>
          <a href="#buy" className="hover:text-accent">Buy SGNXAI</a>
          <a href="#blog" className="hover:text-accent">Blog</a>
          <a href="#twitter" className="hover:text-accent">Twitter/X</a>
        </nav>

        {/* Mobile navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-dark py-4 px-6`}>
          <nav className="flex flex-col space-y-4">
            <a href="#create" className="hover:text-accent">Create</a>
            <a href="#generate" className="hover:text-accent">Generate</a>
            <a href="#trade" className="hover:text-accent">Trade</a>
            <a href="#buy" className="hover:text-accent">Buy SGNXAI</a>
            <a href="#blog" className="hover:text-accent">Blog</a>
            <a href="#twitter" className="hover:text-accent">Twitter/X</a>
          </nav>
        </div>

      <div className="flex gap-2 items-center" >
      <button className="bg-[#AEB3F6] py-2 px-4 rounded-lg shadow-md hover:bg-purple-700">
          Connect
        </button> 
        <HiBell className="text-2xl text-[#AEB3F6]"/>
        <FaMoon className="text-lg text-[#AEB3F6]"/>

      </div>
      </div>
    </header>
  );
};

export default Navbar;
