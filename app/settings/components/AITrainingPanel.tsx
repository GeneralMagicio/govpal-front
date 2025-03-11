'use client'

import { useState } from 'react';
import Tag from './Tag';

interface AITrainingPanelProps {
  onSettingsChange: () => void;
}

const AITrainingPanel: React.FC<AITrainingPanelProps> = ({ onSettingsChange }) => {
  const [interests, setInterests] = useState([
    'DeFi Governance', 'Protocol Security', 'Treasury Management',
    'Tokenomics', 'Staking Mechanisms', 'Community Building',
    'Governance Frameworks', 'Decentralization'
  ]);
  
  const [interestInput, setInterestInput] = useState('');
  const [historyImported, setHistoryImported] = useState(false);
  const [importingHistory, setImportingHistory] = useState(false);
  
  const [feedbackItems, setFeedbackItems] = useState([
    { id: 1, text: 'Proposal #32: Fee Structure Change', isPositive: true },
    { id: 2, text: 'Treasury Update for Q2', isPositive: null },
    { id: 3, text: 'New Delegate Announcement', isPositive: false }
  ]);
  
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  
  const handleAddInterest = () => {
    if (interestInput && !interests.includes(interestInput)) {
      setInterests([...interests, interestInput]);
      setInterestInput('');
      onSettingsChange();
    }
  };
  
  const handleRemoveInterest = (interest: string) => {
    setInterests(interests.filter(i => i !== interest));
    onSettingsChange();
  };
  
  const handleFeedback = (id: number, isPositive: boolean) => {
    setFeedbackItems(feedbackItems.map(item => 
      item.id === id ? { ...item, isPositive } : item
    ));
    onSettingsChange();
  };
  
  const handleImportHistory = () => {
    setImportingHistory(true);
    
    // Simulate an import process
    setTimeout(() => {
      setImportingHistory(false);
      setHistoryImported(true);
      onSettingsChange();
    }, 2000);
  };

  return (
    <div className="bg-cards-bg rounded-xl p-6 shadow-glow-sm transition-all duration-300 hover:shadow-glow">
      <h2 className="text-2xl font-bold mb-6">AI Training</h2>
      
      <div className="space-y-8">
        {/* Interests section */}
        <section>
          <h3 className="text-xl font-semibold mb-4 text-primary-accent">Governance Interests</h3>
          <p className="text-light-gray mb-4">
            These interests help the AI understand what is most relevant to you
          </p>
          
          <div className="mb-4">
            <div className="flex flex-wrap gap-3 mb-4">
              {interests.map((interest) => (
                <Tag 
                  key={interest} 
                  text={interest} 
                  onRemove={() => handleRemoveInterest(interest)} 
                />
              ))}
            </div>
            
            <div className="flex">
              <input 
                type="text" 
                value={interestInput}
                onChange={(e) => setInterestInput(e.target.value)}
                placeholder="Add a new interest..."
                className="flex-1 px-4 py-2 bg-secondary-bg border border-secondary-bg/50 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-transparent"
              />
              <button
                onClick={handleAddInterest}
                className="px-4 py-2 bg-primary-accent text-white rounded-r-lg hover:bg-primary-accent/80 transition-colors"
              >
                Add
              </button>
            </div>
          </div>
        </section>
        
        {/* Governance history import */}
        <section>
          <h3 className="text-xl font-semibold mb-4 text-primary-accent">Governance History</h3>
          <p className="text-light-gray mb-4">
            Import your past governance activities to help the AI understand your preferences
          </p>
          
          <button
            onClick={handleImportHistory}
            disabled={historyImported || importingHistory}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center
              ${historyImported
                ? 'bg-highlights/20 text-highlights cursor-default'
                : importingHistory
                  ? 'bg-secondary-bg/50 text-light-gray cursor-wait'
                  : 'bg-primary-accent text-white hover:bg-primary-accent/80'
              }`}
          >
            {importingHistory && (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            
            {historyImported ? (
              <>
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                History Imported
              </>
            ) : (
              importingHistory ? 'Importing...' : 'Import Governance History'
            )}
          </button>
        </section>
        
        {/* Feedback on past notifications */}
        <section>
          <h3 className="text-xl font-semibold mb-4 text-primary-accent">Notification Feedback</h3>
          <p className="text-light-gray mb-4">
            Rate past notifications to help the AI deliver more relevant content
          </p>
          
          <div className="space-y-3">
            {feedbackItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-secondary-bg/30 p-3 rounded-lg">
                <p className="text-sm">{item.text}</p>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleFeedback(item.id, true)}
                    className={`p-1.5 rounded-md transition-colors ${
                      item.isPositive === true ? 'bg-highlights/20 text-highlights' : 'text-light-gray hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => handleFeedback(item.id, false)}
                    className={`p-1.5 rounded-md transition-colors ${
                      item.isPositive === false ? 'bg-alerts/20 text-alerts' : 'text-light-gray hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Reset AI learning */}
        <section>
          <h3 className="text-xl font-semibold mb-4 text-primary-accent">Reset AI Learning</h3>
          <p className="text-light-gray mb-4">
            Clear all learned preferences and start fresh. This cannot be undone.
          </p>
          
          <div>
            {!showResetConfirm ? (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="px-4 py-2 bg-alerts/20 text-alerts rounded-lg hover:bg-alerts/30 transition-colors"
              >
                Reset AI Learning
              </button>
            ) : (
              <div className="bg-secondary-bg/50 p-4 rounded-lg">
                <p className="text-sm text-light-gray mb-3">
                  Are you sure? This will erase all AI personalization data.
                </p>
                <div className="flex space-x-3">
                  <button
                    className="px-4 py-2 bg-alerts text-white rounded-lg hover:bg-alerts/80 transition-colors"
                  >
                    Yes, Reset
                  </button>
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="px-4 py-2 bg-secondary-bg text-white rounded-lg hover:bg-secondary-bg/80 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AITrainingPanel;