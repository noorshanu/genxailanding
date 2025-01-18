// src/components/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className=" text-white py-16  relative">
      <img src="images/blur.png" alt="" className="absolute top-0 left-0 w-full h-full object-cover hidden sm:block" />
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between relative z-50">
        <div className="text-center md:text-left space-y-4 w-full sm:w-1/2 sm:ml-16">
          <h2 className="text-4xl md:text-7xl font-bold lh-1_3 font-sf">
            Create, Generate <br /> Trade AI Agents, <br />
            Any Agents with <br /> <span className="text-accent font-extrabold">GenX AI</span>
          </h2>
        
        </div>
        <div className="w-full sm:w-1/2">
    <img
          src="images/hero.png"
          alt="Hero AI"
          className="w-full border border-[#263248] rounded-lg shadow-lg "
        />
    </div>
      </div>
    </section>
  );
};

export default HeroSection;
