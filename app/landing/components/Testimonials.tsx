"use client"

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "The AI notifications saved me from missing critical votes multiple times. It's like having a governance assistant that knows exactly what I care about.",
    author: "Alex K.",
    title: "DAO Council Member"
  },
  {
    id: 2,
    content: "I no longer spend hours reading through every proposal. The contextual summaries help me focus on what matters to my role.",
    author: "Maria T.",
    title: "Governance Contributor"
  },
  {
    id: 3,
    content: "Setting up took minutes, and the AI quickly learned my interests. Now I only get alerts for proposals I actually care about.",
    author: "Devon R.",
    title: "Token Holder"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-secondary-bg/40 bg-grid-pattern bg-[length:40px_40px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Early Users Are Saying</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="bg-cards-bg rounded-xl p-6 border border-white/10 hover-float"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary-accent/60" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="mb-6 text-light-gray">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-primary-accent to-secondary-accent flex items-center justify-center">
                  <span className="text-lg font-bold text-white">{testimonial.author[0]}</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-light-gray">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}