"use client"

import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: "AI Personal Notifications",
    description: "Get notified about proposals that matter to you based on your interests and voting history.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="url(#bell-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="url(#bell-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="bell-gradient" x1="3" y1="2" x2="21" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6"/>
            <stop offset="1" stopColor="#8B5CF6"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    status: "Available Now",
    highlighted: true,
  },
  {
    id: 2,
    title: "Cross-DAO Intelligence",
    description: "Spot patterns across DAOs and learn from successful governance strategies.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    status: "Coming Soon",
  },
  {
    id: 3,
    title: "Member Insights",
    description: "Understand how members are likely to vote based on their governance history.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    status: "Coming Soon",
  },
  {
    id: 4,
    title: "Task Management Integration",
    description: "Turn governance actions into Trello tasks with smart deadlines and reminders.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 7H7V15H9V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 7H15V11H17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    status: "Coming Soon",
  },
];

export default function KeyFeatures() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your DAO Governance Companion</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className={`rounded-xl overflow-hidden ${feature.highlighted ? 'border-2 border-primary-accent shadow-glow' : 'border border-white/10'} bg-cards-bg p-6 hover-float`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={`flex items-start ${feature.highlighted ? 'space-x-5' : 'space-x-4'}`}>
                <div className={`p-3 rounded-lg ${feature.highlighted ? 'bg-gradient-to-br from-primary-accent/20 to-secondary-accent/20' : 'bg-secondary-bg'}`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="font-bold text-xl">{feature.title}</h3>
                    <div className={`ml-3 text-xs px-2 py-1 rounded-full ${feature.highlighted ? 'bg-highlights/20 text-highlights' : 'bg-light-gray/20 text-light-gray'}`}>
                      {feature.status}
                    </div>
                  </div>
                  <p className="text-light-gray">{feature.description}</p>
                  {feature.highlighted && (
                    <button className="mt-4 bg-gradient-to-r from-primary-accent to-secondary-accent text-white px-4 py-2 rounded shadow-glow-sm hover:shadow-glow transition-all duration-300">
                      Try Now
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}