"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-accent to-secondary-accent">
            Governance Intelligence, Personalized
          </h1>
          <p className="text-xl text-light-gray mb-8 max-w-lg">
            Your AI assistant for tracking, understanding, and acting on DAO proposals across platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              className="bg-gradient-to-r from-primary-accent to-secondary-accent text-white px-8 py-3 rounded-md font-medium shadow-glow text-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              Get Early Access
            </motion.button>
            <Link href="#how-it-works" className="inline-flex items-center text-white hover:text-primary-accent transition-colors duration-300 px-4 py-3">
              See how it works <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-accent/20 via-secondary-accent/10 to-transparent rounded-lg blur-xl"></div>
            
            <motion.div 
              className="absolute inset-2 bg-cards-bg border border-secondary-accent/30 rounded-lg shadow-glow p-6 overflow-hidden"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-semibold">Dashboard</div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-alerts"></div>
                  <div className="w-3 h-3 rounded-full bg-highlights"></div>
                  <div className="w-3 h-3 rounded-full bg-primary-accent"></div>
                </div>
              </div>
              
              {/* Notification cards flowing into interface */}
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <motion.div 
                    key={item}
                    className="bg-secondary-bg p-3 rounded-md border border-primary-accent/30"
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: item * 0.3, duration: 0.8 }}
                  >
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary-accent to-secondary-accent mr-3 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="font-medium">Proposal #200</div>
                        <div className="text-sm text-light-gray">Treasury allocation vote</div>
                      </div>
                      <div className="bg-highlights/20 text-highlights text-xs px-2 py-1 rounded">
                        High Priority
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}