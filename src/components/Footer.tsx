// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <h4 className="font-bold mb-2">About</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-accent">About Us</a></li>
            <li><a href="#" className="hover:text-accent">Careers</a></li>
            <li><a href="#" className="hover:text-accent">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">FAQ</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-accent">Account</a></li>
            <li><a href="#" className="hover:text-accent">Orders</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            © 2024-2025 GenX AI, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
