// src/components/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-dark text-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            Create, Generate <br /> Trade AI Agents, <br />
            Any Agents with <span className="text-accent">GenX AI</span>
          </h2>
          <p className="text-gray-300">
            Below will be demo AI agents, available for your use.
          </p>
        </div>
        <img
          src="/images/hero-image.png"
          alt="Hero AI"
          className="w-full md:w-1/2 max-w-lg mt-8 md:mt-0"
        />
      </div>
    </section>
  );
};

export default HeroSection;
