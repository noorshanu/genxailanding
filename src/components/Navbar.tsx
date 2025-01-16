// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-dark text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">GenX AI</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#create" className="hover:text-accent">Create</a>
          <a href="#generate" className="hover:text-accent">Generate</a>
          <a href="#trade" className="hover:text-accent">Trade</a>
          <a href="#buy" className="hover:text-accent">Buy SGNXAI</a>
          <a href="#blog" className="hover:text-accent">Blog</a>
          <a href="#twitter" className="hover:text-accent">Twitter/X</a>
        </nav>
        <button className="bg-accent py-2 px-4 rounded-lg shadow-md hover:bg-purple-700">
          Connect
        </button>
      </div>
    </header>
  );
};

export default Navbar;
