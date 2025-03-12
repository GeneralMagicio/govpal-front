import React, { useState } from 'react';

interface TopicPickerProps {
  onSelectionChange?: (selectedTopics: string[]) => void;
}

const daoTopics: string[] = [
  "Budget & Treasury Management",
  "Protocol Upgrades & Governance Forks",
  "Governance Incentives & Participation",
  "Quadratic Voting & Funding",
  "Delegated Governance & Reputation Systems",
  "Decentralized Identity (DID) & Soulbound Tokens (SBTs)",
  "Retroactive Public Goods Funding (RPGF)",
  "Optimistic Governance & Dispute Resolution",
  "Legal & Regulatory Compliance",
  "SubDAOs & Layered Governance",
  "ZK Governance & Private Voting",
  "Multi-Sig vs. Smart Contract Governance",
  "Economic Attacks on DAOs (51%, Sybil, Bribery, etc.)",
  "MEV Protection in DAO Votes & Transactions",
  "DAO Tokenomics & Voting Power Distribution",
  "Cross-Chain Governance",
  "AI & Automation in Governance",
  "Slashing & Incentive Mechanisms",
  "DAO Tooling & Smart Contract Audits",
  "Reputation-Based Voting vs. Token-Based Voting"
];

const TopicPicker: React.FC<TopicPickerProps> = ({ onSelectionChange }) => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const MAX_TOPICS = 5;
  
  const handleTopicSelect = (topic: string): void => {
    if (selectedTopics.includes(topic)) {
      // Remove if already selected
      const updatedTopics = selectedTopics.filter(t => t !== topic);
      setSelectedTopics(updatedTopics);
      onSelectionChange?.(updatedTopics);
    } else if (selectedTopics.length < MAX_TOPICS) {
      // Add if under the limit
      const updatedTopics = [...selectedTopics, topic];
      setSelectedTopics(updatedTopics);
      onSelectionChange?.(updatedTopics);
    }
  };
  
  const handleTopicRemove = (topic: string): void => {
    const updatedTopics = selectedTopics.filter(t => t !== topic);
    setSelectedTopics(updatedTopics);
    onSelectionChange?.(updatedTopics);
  };
  
  return (
    <div className="bg-cards-bg rounded-xl shadow-glow p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Select DAO Topics (Max 5)</h2>
      
      {/* Selected Topics Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl text-light-gray">Selected Topics</h3>
          <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
            selectedTopics.length === MAX_TOPICS ? 'bg-alerts' : 'bg-primary-accent'
          }`}>
            {selectedTopics.length}/{MAX_TOPICS}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-3 min-h-[60px]">
          {selectedTopics.length === 0 ? (
            <p className="text-light-gray opacity-70 py-2">No topics selected yet.</p>
          ) : (
            selectedTopics.map(topic => (
              <div 
                key={topic} 
                className="bg-secondary-bg text-white px-4 py-2 rounded-full flex items-center gap-2 animate-fadeIn shadow-glow-sm"
              >
                <span>{topic}</span>
                <button 
                  onClick={() => handleTopicRemove(topic)}
                  className="text-light-gray hover:text-alerts transition-colors"
                  aria-label={`Remove ${topic}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      
      {/* Topic Selection Grid */}
      <div>
        <h3 className="text-xl text-light-gray mb-3">Available Topics</h3>
        
        {selectedTopics.length === MAX_TOPICS && (
          <div className="mb-4 p-3 bg-secondary-bg bg-opacity-50 rounded-lg border border-alerts text-light-gray animate-fadeIn">
            You have selected the maximum number of topics. Remove a topic to select a different one.
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {daoTopics.map(topic => {
            const isSelected = selectedTopics.includes(topic);
            const isDisabled = selectedTopics.length >= MAX_TOPICS && !isSelected;
            
            return (
              <button
                key={topic}
                onClick={() => handleTopicSelect(topic)}
                disabled={isDisabled}
                className={`
                  px-4 py-3 rounded-lg text-left transition-all
                  ${isSelected 
                    ? 'bg-primary-accent text-white shadow-glow-sm' 
                    : 'bg-secondary-bg text-light-gray hover:bg-secondary-accent hover:text-white'
                  }
                  ${isDisabled
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:shadow-glow-sm'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <span>{topic}</span>
                  {isSelected && (
                    <span className="text-highlights">✓</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopicPicker;