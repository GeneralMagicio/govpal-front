'use client'

import { useState } from 'react';

const HelpSupportPanel: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs: Array<{question: string, answer: string}> = [
    {
      question: "How does Gov AI determine what's important to me?",
      answer: "Gov AI learns from your interactions, votes, interests, and explicitly stated preferences. The more you use the platform, the better it gets at identifying what matters to you. You can also directly train the AI in the AI Training section."
    },
    {
      question: "Can I export my data from the platform?",
      answer: "Yes, you can request a full export of your data in the Data & Privacy section. This includes your preferences, notification history, and all personalized settings."
    },
    {
      question: "What do I do if I miss an important governance proposal?",
      answer: "Gov AI keeps a history of all governance updates in your notification center. You can always go back and review past notifications even if you missed them initially."
    },
    {
      question: "How do I connect a new DAO?",
      answer: "Go to the DAO Preferences panel and click on 'Add New DAO'. You can then search for the DAO you want to track, select it, and configure your preferences for that specific DAO."
    },
    {
      question: "Can I use Gov AI on mobile?",
      answer: "Yes, Gov AI is fully responsive and works on mobile browsers. For an enhanced experience, you can also download our mobile app by scanning the QR code in the Notification Channels section."
    }
  ];
  
  const resourceLinks: Array<{name: string, url: string, icon: string}> = [
    { name: "Documentation", url: "#", icon: "📄" },
    { name: "API Reference", url: "#", icon: "🔌" },
    { name: "Community Forum", url: "#", icon: "👥" },
    { name: "Video Tutorials", url: "#", icon: "🎥" },
    { name: "Governance Blog", url: "#", icon: "📝" }
  ];

  const toggleFaq = (index: number): void => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="bg-cards-bg rounded-xl p-6 shadow-glow-sm transition-all duration-300 hover:shadow-glow">
      <h2 className="text-2xl font-bold mb-6">Help & Support</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column - Contact */}
        <div className="md:col-span-2 space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-4 text-primary-accent">Frequently Asked Questions</h3>
            
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-secondary-bg/30 rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-secondary-bg/50"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  
                  <div 
                    className={`px-4 py-3 text-light-gray text-sm transition-all duration-300 ${
                      expandedFaq === index ? 'max-h-40 border-t border-secondary-bg/50' : 'max-h-0'
                    }`}
                    style={{ maxHeight: expandedFaq === index ? '500px' : '0' }}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-4 text-primary-accent">Need More Help?</h3>
            
            <button className="w-full md:w-auto px-6 py-3 mb-4 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-lg hover:opacity-90 transition-all duration-300 shadow-glow-sm">
              Contact Support
            </button>
            
            <p className="text-sm text-light-gray">
              Our support team is available Monday through Friday, 9am-5pm UTC.
              Typical response time is within 24 hours.
            </p>
          </section>
        </div>
        
        {/* Right column - Resources */}
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-4 text-primary-accent">Resources</h3>
            
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    className="flex items-center px-4 py-2 rounded-lg hover:bg-secondary-bg/30 transition-colors"
                  >
                    <span className="mr-3 text-xl">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-4 text-primary-accent">System Information</h3>
            
            <div className="bg-secondary-bg/30 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-light-gray">Version</span>
                <span className="text-sm">1.5.2</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-light-gray">Last Updated</span>
                <span className="text-sm">May 15, 2023</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-light-gray">Build</span>
                <span className="text-sm">3420-beta</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HelpSupportPanel;