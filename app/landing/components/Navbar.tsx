'use client'

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0F172A] py-4 px-6 md:px-12 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
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
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent">GovPal</span>
        </Link>

        <div className="items-center hidden space-x-8 md:flex">
          <div className="flex space-x-6">
            <Link href="#features" className="transition-colors text-light-gray hover:text-white">Features</Link>
            <Link href="#how-it-works" className="transition-colors text-light-gray hover:text-white">How It Works</Link>
            {/* <Link href="#" className="cursor-not-allowed text-light-gray/50">Pricing</Link> */}
            <Link href="#faq" className="transition-colors text-light-gray hover:text-white">FAQs</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-white transition-all duration-300 border rounded-md border-primary-accent hover:bg-primary-accent/10">
              Login
            </button>
            <motion.button 
              className="px-6 py-2 text-white rounded-md bg-gradient-to-r from-primary-accent to-secondary-accent shadow-glow"
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
        <div className="pb-4 mt-4 space-y-4 md:hidden">
          <Link href="#features" className="block py-2 transition-colors text-light-gray hover:text-white">Features</Link>
          <Link href="#how-it-works" className="block py-2 transition-colors text-light-gray hover:text-white">How It Works</Link>
          {/* <Link href="#" className="block py-2 cursor-not-allowed text-light-gray/50">Pricing</Link> */}
          <Link href="#faq" className="block py-2 transition-colors text-light-gray hover:text-white">FAQs</Link>
          
          <div className="flex flex-col pt-3 space-y-3 border-t border-gray-700">
            <button className="px-4 py-2 text-white transition-all duration-300 border rounded-md border-primary-accent hover:bg-primary-accent/10">
              Login
            </button>
            <motion.button 
              className="px-6 py-2 text-white rounded-md bg-gradient-to-r from-primary-accent to-secondary-accent shadow-glow"
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