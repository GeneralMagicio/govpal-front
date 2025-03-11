"use client"

import { motion } from 'framer-motion';

export default function FeatureBanner() {
  return (
    <motion.div 
      className="bg-secondary-bg/50 border-t border-b border-primary-accent/20 shadow-glow-sm backdrop-blur-sm py-3"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-center sm:justify-between">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <span className="text-2xl">🎉</span>
          <span className="font-medium">NEW: AI Personal Notifications Now Available!</span>
        </div>
        <motion.a 
          href="#" 
          className="text-primary-accent flex items-center hover:text-highlights transition-colors duration-300"
          whileHover={{ x: 3 }}
        >
          Try it today 
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}