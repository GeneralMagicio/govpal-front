'use client'

import { useState } from 'react';

interface SaveButtonProps {
  onSave: () => void;
  onRevert: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ onSave, onRevert }) => {
  const [saved, setSaved] = useState(false);
  
  const handleSave = () => {
    onSave();
    
    // Show success state
    setSaved(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div className="fixed bottom-8 right-8 flex space-x-3 items-center">
      {!saved ? (
        <>
          <button
            onClick={onRevert}
            className="px-4 py-2 bg-secondary-bg text-white rounded-lg hover:bg-secondary-bg/80 transition-colors shadow-glow-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-gradient-to-r from-primary-accent to-secondary-accent text-white rounded-lg hover:from-primary-accent/90 hover:to-secondary-accent/90 transition-all duration-300 shadow-glow animate-pulse"
          >
            Save Changes
          </button>
        </>
      ) : (
        <div className="flex items-center bg-highlights/20 text-highlights px-6 py-2 rounded-lg animate-fadeIn shadow-glow-sm">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
          Changes Saved
        </div>
      )}
    </div>
  );
};

export default SaveButton;