'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How does the AI know what notifications to send me?",
    answer: "Our AI analyzes your voting history, governance participation, and explicitly stated preferences to determine which proposals match your interests. Over time, it learns from your interactions to further refine its recommendations."
  },
  // {
  //   question: "Can I connect multiple DAOs to my account?",
  //   answer: "Absolutely! You can connect as many DAOs as you participate in. Our platform currently supports major governance platforms like Agora, Tally, Snapshot, and custom integrations are available for larger organizations."
  // },
  {
    question: "Is my governance data secure?",
    answer: "Security is our top priority. All your data is encrypted both in transit and at rest. We never share your personal information with third parties, and you can delete your data at any time."
  },
  {
    question: "How do I customize my notification preferences?",
    answer: "In your user dashboard, you'll find a 'Notification Settings' section where you can set preferences for notification types, frequency, delivery methods (email, mobile, browser), and priority thresholds."
  },
  {
    question: "What features are coming next on the roadmap?",
    answer: "We're working on cross-DAO intelligence, member insights, and task management integrations. Our public roadmap is available on our GitHub, and we welcome feature suggestions from our community."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl px-6 mx-auto md:px-12">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary-accent to-secondary-accent"></div>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="overflow-hidden transition-colors duration-300 border rounded-lg border-white/10 bg-cards-bg hover:border-primary-accent/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className="flex items-center justify-between w-full px-6 py-4 text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-primary-accent transition-transform duration-200 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-light-gray">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="inline-flex items-center transition-colors duration-300 text-primary-accent hover:text-highlights">
            Don&apos;t see your question? Contact our team
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}