'use client'

import { useState, useRef, useEffect, useCallback } from 'react';
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

// Define chat message structure
interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

const Settings = () => {
  const [activeSection, setActiveSection] = useState<SettingsSection>('Notification Preferences');
  const [hasChanges, setHasChanges] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // --- Chat State ---
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatMessagesEndRef = useRef<HTMLDivElement>(null);
  // --- End Chat State ---

  // Function to handle changes in settings
  const handleSettingsChange = () => {
    setHasChanges(true);
  };

  // Function to save settings
  const saveSettings = () => {
    console.log('Saving settings...');
    setHasChanges(false);
  };

  // Function to revert changes
  const revertChanges = () => {
    console.log('Reverting changes...');
    setHasChanges(false);
  };

  // --- Chat Functions ---
  const scrollToBottom = () => {
    chatMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isChatOpen) {
        // Add initial greeting if chat is opened and empty
        if (messages.length === 0) {
            setMessages([{ sender: 'ai', text: 'Hello! How can I help you with your settings today?' }]);
        }
        scrollToBottom();
    }
  }, [isChatOpen, messages]); // Rerun when chat opens or messages change

  const handleSendMessage = useCallback(async () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isLoading) return;

    const newUserMessage: ChatMessage = { sender: 'user', text: trimmedInput };
    const currentMessages = [...messages, newUserMessage];

    setMessages(currentMessages);
    setInputValue('');
    setIsLoading(true);
    scrollToBottom(); // Scroll after adding user message

    // Prepare API payload
    const chatContext = messages // Use messages *before* adding the new user message
      .map(msg => `${msg.sender === 'user' ? 'User' : 'AI'}: ${msg.text}`)
      .join('\n');
    const query = trimmedInput;

    try {
      const response = await fetch(`http://65.109.203.160:2345/chat/${process.env.NEXT_PUBLIC_TENANT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chatContext, query }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      const aiResponse: ChatMessage = { sender: 'ai', text: data.reply || "Sorry, I couldn't process that." };

      setMessages(prevMessages => [...prevMessages, aiResponse]);

    } catch (error) {
      console.error("Chat API error:", error);
      const errorResponse: ChatMessage = { sender: 'ai', text: 'Sorry, I encountered an error. Please try again.' };
      setMessages(prevMessages => [...prevMessages, errorResponse]);
    } finally {
      setIsLoading(false);
      // Use setTimeout to ensure scroll happens after state update and render
      setTimeout(scrollToBottom, 0);
    }
  }, [inputValue, isLoading, messages]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent default Enter behavior (like newline)
      handleSendMessage();
    }
  };
  // --- End Chat Functions ---

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

      {/* --- Chat Icon --- */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed z-30 p-3 text-white transition-transform duration-200 rounded-full shadow-lg bottom-4 left-4 bg-gradient-to-r from-primary-accent to-secondary-accent hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-bg focus:ring-primary-accent"
        aria-label="Open AI Chat"
      >
        {/* Simple Chat Icon SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* --- Chat Interface --- */}
      {isChatOpen && (
        <div className="fixed z-30 flex flex-col w-full max-w-md bg-white rounded-lg shadow-xl bottom-20 left-4 md:max-w-sm" style={{ maxHeight: '45vh' }}>
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-gray-200 rounded-t-lg bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800">GovPal AI</h3>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
              aria-label="Close Chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-white">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-lg shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="max-w-[80%] px-3 py-2 rounded-lg shadow-sm bg-gray-200 text-gray-500">
                    <div className="flex items-center space-x-1">
                       <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></span>
                       <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
                       <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                    </div>
                 </div>
              </div>
            )}
            {/* Invisible div to target for scrolling */}
            <div ref={chatMessagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-gray-200 rounded-b-lg bg-gray-50">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-primary-accent"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="px-4 py-2 text-sm font-medium text-white transition-opacity rounded-lg bg-primary-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-accent disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
      {/* --- End Chat Interface --- */}


      {hasChanges && !isChatOpen && ( // Hide save button if chat is open to avoid overlap
        <SaveButton
          onSave={saveSettings}
          onRevert={revertChanges}
        />
      )}
    </div>
  );
};

export default Settings;