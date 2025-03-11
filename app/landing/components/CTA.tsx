"use client"

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with particle effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-bg via-secondary-bg to-primary-bg opacity-70"></div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Be at the Forefront of AI-Powered Governance</h2>
          <p className="text-xl text-light-gray mb-10 max-w-3xl mx-auto">
            Join our community of governance innovators and shape the future of DAOs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              className="bg-gradient-to-r from-primary-accent to-secondary-accent text-white px-8 py-4 rounded-md font-medium text-lg shadow-glow"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(139, 92, 246, 0.6)' }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Now
            </motion.button>
            <motion.a 
              href="#" 
              className="inline-flex items-center justify-center text-white hover:text-primary-accent transition-colors duration-300 px-6 py-4"
              whileHover={{ x: 5 }}
            >
              Schedule a Demo
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}