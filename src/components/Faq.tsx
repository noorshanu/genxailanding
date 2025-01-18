/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Dummy FAQ data
  const faqs = [
    {
      question: "What is GenX AI?",
      answer:
        "GenX AI is the future of AI-driven projects, transforming your ideas into reality with cutting-edge technology and seamless execution.",
    },
    {
      question: "Why GenX AI?",
      answer:
        "We offer a wide range of tools and options to bring your vision to life without the need for a team or unnecessary complexities. GenX AI makes project creation simple and hassle-free.",
    },
    {
      question: "How is GenX AI the Future?",
      answer:
        "GenX AI is bridging the gap between AI and human potential, providing innovative solutions that will revolutionize industries and empower creators, businesses, and individuals worldwide.GenX AI is bridging the gap between AI and human potential, providing innovative solutions that will revolutionize industries and empower creators, businesses, and individuals worldwide.",
    },
    {
      question:
        "Why Invest in GenX AI?",
      answer:
        "As a holder or staker, you’ll unlock exponential benefits, gaining access to exclusive features and rewards that set you ahead in the rapidly evolving Web 3.0 landscape.",
    },
    {
      question: "Where to Buy?",
      answer:
        "Stay tuned our platform will be live soon, offering easy access to purchase and engage with GenX AI.",
    },
    
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" text-white py-16 relative">

      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-4 relative z-50">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-500/10 to-black/30 rounded-lg p-6 border border-[#656565] shadow-lg"
            >
              {/* Question */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <FiChevronUp size={24} className="text-purple-400" />
                ) : (
                  <FiChevronDown size={24} className="text-purple-400" />
                )}
              </div>

              {/* Answer */}
              {activeIndex === index && (
                <p className="mt-4 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;