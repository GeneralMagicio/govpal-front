'use client'

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0F172A] py-4 px-6 md:px-12 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4C8.13401 4 5 7.13401 5 11C5 14.866 8.13401 18 12 18C15.866 18 19 14.866 19 11C19 7.13401 15.866 4 12 4Z" stroke="url(#brain-gradient)" strokeWidth="1.5" />
            <path d="M12 8V14M9 11H15" stroke="url(#brain-gradient)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8 7L6 5M16 7L18 5M8 15L6 17M16 15L18 17" stroke="url(#brain-gradient)" strokeWidth="1.5" strokeLinecap="round" />
            <defs>
              <linearGradient id="brain-gradient" x1="5" y1="5" x2="19" y2="18" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-accent to-secondary-accent">GovPal</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <Link href="#features" className="text-light-gray hover:text-white transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-light-gray hover:text-white transition-colors">How It Works</Link>
            <Link href="#" className="text-light-gray/50 cursor-not-allowed">Pricing</Link>
            <Link href="#faq" className="text-light-gray hover:text-white transition-colors">FAQs</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="border border-primary-accent text-white px-4 py-2 rounded-md hover:bg-primary-accent/10 transition-all duration-300">
              Login
            </button>
            <motion.button 
              className="bg-gradient-to-r from-primary-accent to-secondary-accent text-white px-6 py-2 rounded-md shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-4">
          <Link href="#features" className="block text-light-gray hover:text-white transition-colors py-2">Features</Link>
          <Link href="#how-it-works" className="block text-light-gray hover:text-white transition-colors py-2">How It Works</Link>
          <Link href="#" className="block text-light-gray/50 cursor-not-allowed py-2">Pricing</Link>
          <Link href="#faq" className="block text-light-gray hover:text-white transition-colors py-2">FAQs</Link>
          
          <div className="flex flex-col space-y-3 pt-3 border-t border-gray-700">
            <button className="border border-primary-accent text-white px-4 py-2 rounded-md hover:bg-primary-accent/10 transition-all duration-300">
              Login
            </button>
            <motion.button 
              className="bg-gradient-to-r from-primary-accent to-secondary-accent text-white px-6 py-2 rounded-md shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      )}
    </nav>
  );
}