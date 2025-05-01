"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="grid items-center gap-12 px-6 mx-auto max-w-7xl md:px-12 md:grid-cols-2">
        <motion.div 
          className="z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-4xl font-bold text-transparent md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-white via-primary-accent to-secondary-accent">
            Governance Intelligence, Personalized
          </h1>
          <p className="max-w-lg mb-8 text-xl text-light-gray">
            Your AI assistant for tracking, understanding, and acting on DAO proposals across platforms.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <motion.button 
              className="h-12 px-8 text-lg font-medium text-white rounded-md bg-gradient-to-r from-primary-accent to-secondary-accent shadow-glow"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              Get Early Access
            </motion.button>
            <Link href="/dashboard" target='__blank' className="inline-flex items-center px-4 text-white transition-colors duration-300 hover:text-primary-accent">
              <motion.button 
                className="h-12 px-8 text-lg font-medium text-white rounded-md bg-gradient-to-r to-primary-accent from-secondary-accent shadow-glow"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                >
                Delegate Dashboard
              </motion.button>
            </Link>
            {/* <Link href="#how-it-works" className="inline-flex items-center px-4 py-3 text-white transition-colors duration-300 hover:text-primary-accent">
              See how it works <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link> */}
          </div>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-primary-accent/20 via-secondary-accent/10 to-transparent blur-xl"></div>
            
            <motion.div 
              className="absolute p-6 overflow-hidden border rounded-lg inset-2 bg-cards-bg border-secondary-accent/30 shadow-glow"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between mb-4">
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
                    className="p-3 border rounded-md bg-secondary-bg border-primary-accent/30"
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: item * 0.3, duration: 0.8 }}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 mr-3 rounded-full bg-gradient-to-r from-primary-accent to-secondary-accent"></div>
                      <div className="flex-1">
                        <div className="font-medium">Proposal #200</div>
                        <div className="text-sm text-light-gray">Treasury allocation vote</div>
                      </div>
                      <div className="px-2 py-1 text-xs rounded bg-highlights/20 text-highlights">
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