'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NotificationShowcase() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Interactive notification demo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-cards-bg border border-primary-accent/30 rounded-lg shadow-glow overflow-hidden">
              <div className="p-4 bg-secondary-bg/50 border-b border-primary-accent/20 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-alerts"></div>
                  <div className="w-3 h-3 rounded-full bg-highlights"></div>
                  <div className="w-3 h-3 rounded-full bg-primary-accent"></div>
                </div>
                <div className="text-sm text-light-gray">Notification</div>
              </div>
              
              <motion.div 
                className="p-5"
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="bg-secondary-bg rounded-lg border border-primary-accent/30 p-4 shadow-glow-sm cursor-pointer"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-start">
                    <div className="bg-alerts/20 text-alerts text-xs font-medium px-2 py-1 rounded mr-2">
                      High Priority
                    </div>
                    <h3 className="text-lg font-semibold flex-1">Treasury Allocation Proposal</h3>
                  </div>
                  
                  <motion.p 
                    className="text-light-gray mt-3"
                    initial={{ height: 'auto' }}
                  >
                    Based on your governance interests, this proposal requires your attention. Voting closes in 6 hours.
                  </motion.p>
                  
                  <motion.div 
                    className="mt-4 flex space-x-3"
                    animate={isExpanded ? { height: 'auto', opacity: 1 } : { height: 'auto', opacity: 1 }}
                  >
                    <button className="bg-gradient-to-r from-primary-accent to-secondary-accent text-white px-4 py-2 rounded shadow-glow-sm text-sm">
                      View Details
                    </button>
                    <button className="bg-white/10 text-white hover:bg-white/20 px-4 py-2 rounded text-sm">
                      Add to Tasks
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Feature benefits */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Never Miss Important Votes Again</h2>
            <ul className="space-y-4 mb-8">
              {[
                "Personalized based on your governance interests",
                "Contextual summaries of complex proposals",
                "Priority alerts for time-sensitive votes",
                "One-click actions to manage your response"
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="bg-gradient-to-r from-primary-accent to-secondary-accent p-1 rounded-full">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <button className="bg-gradient-to-r from-primary-accent to-secondary-accent text-white px-6 py-3 rounded-md shadow-glow hover:shadow-glow-intense transition-all duration-300 w-fit">
              Explore AI Notifications
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}