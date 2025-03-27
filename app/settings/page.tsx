'use client'

import { useState } from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NotificationPanel from './components/NotificationPanel';
import AITrainingPanel from './components/AITrainingPanel';
import ProfilePanel from './components/ProfilePanel';
import HelpSupportPanel from './components/HelpSupportPanel';
import SaveButton from './components/SaveButton';
import DataPrivacyPanel from './components/DataPrivacyPanel';
import PlatformConnectionsPanel from './components/PlatformConnectionPanel';
import GovernanceProposals, { proposals } from './components/ProposalCard';
// import DAOPreferencesPanel from './components/DAOPreferencePanel';

// Define the available sections
type SettingsSection = 
  | 'Profile'
  | 'Notification Preferences'
  | 'Platform Connections'
  | 'Proposals'
  | 'AI Training'
  | 'Data & Privacy'
  | 'Help & Support';

const Settings = () => {
  const [activeSection, setActiveSection] = useState<SettingsSection>('Notification Preferences');
  const [hasChanges, setHasChanges] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle changes in settings
  const handleSettingsChange = () => {
    setHasChanges(true);
  };

  // Function to save settings
  const saveSettings = () => {
    // Logic to save settings would go here
    console.log('Saving settings...');
    
    // Reset the changes flag
    setHasChanges(false);
  };

  // Function to revert changes
  const revertChanges = () => {
    // Logic to revert changes would go here
    console.log('Reverting changes...');
    
    // Reset the changes flag
    setHasChanges(false);
  };

  return (
    <div className="min-h-screen bg-primary-bg text-white bg-grid-pattern bg-[length:50px_50px] relative overflow-x-hidden">
      <Head>
        <title>Settings | GovPal</title>
        <meta name="description" content="Configure your GovPal settings" />
      </Head>

      {/* Background particles/stars effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle-container">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary-accent opacity-20"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 8 + 8}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 px-4 py-8 mx-auto">
        <Header 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <div className="flex flex-col gap-8 mt-8 md:flex-row">
          <Sidebar 
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          <div className="flex-1">
            {activeSection === 'Profile' && (
              <ProfilePanel onSettingsChange={handleSettingsChange} />
            )}
            
            {activeSection === 'Notification Preferences' && (
              <NotificationPanel onSettingsChange={handleSettingsChange} />
            )}
            
            {activeSection === 'Platform Connections' && (
              <PlatformConnectionsPanel onSettingsChange={handleSettingsChange} />
            )}
            
            {activeSection === 'Proposals' && (
              <GovernanceProposals proposals={proposals} />
            )}
             
            {activeSection === 'AI Training' && (
              <AITrainingPanel onSettingsChange={handleSettingsChange} />
            )}
            
            {activeSection === 'Data & Privacy' && (
              <DataPrivacyPanel onSettingsChange={handleSettingsChange} />
            )}
            
            {activeSection === 'Help & Support' && (
              <HelpSupportPanel />
            )}
          </div>
        </div>
      </div>

      {hasChanges && (
        <SaveButton 
          onSave={saveSettings}
          onRevert={revertChanges}
        />
      )}
    </div>
  );
};

export default Settings;