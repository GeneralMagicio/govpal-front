// app/shared/Chatbot.tsx
'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

// Define chat message structure
interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatMessagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isChatOpen) {
      // Add initial greeting if chat is opened and empty
      if (messages.length === 0) {
        setMessages([{ sender: 'ai', text: 'Hello! How can I help you today?' }]);
      }
       // Use timeout to ensure scroll happens after initial render/state update
       setTimeout(scrollToBottom, 100);
    }
  }, [isChatOpen]); // Only trigger when chat opens

  useEffect(() => {
    // Scroll whenever messages change and chat is open
    if (isChatOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isChatOpen]);


  const handleSendMessage = useCallback(async () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isLoading) return;

    const newUserMessage: ChatMessage = { sender: 'user', text: trimmedInput };
    const currentMessages = [...messages, newUserMessage]; // Add new message immediately

    setMessages(currentMessages); // Update state with user message
    setInputValue('');
    setIsLoading(true);
    // Scroll after adding user message might need a slight delay
    setTimeout(scrollToBottom, 0);

    // Prepare API payload using the *previous* message context
    const contextMessages = messages; // Messages *before* adding the new user one
    const chatContext = contextMessages
      .map((msg) => `${msg.sender === 'user' ? 'User' : 'AI'}: ${msg.text}`)
      .join('\n');
    const query = trimmedInput;

    try {
      // Simulate API call - replace with your actual API endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/chat/${process.env.NEXT_PUBLIC_TENANT}`, {
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

      setMessages((prevMessages) => [...prevMessages, aiResponse]); // Add AI response

    } catch (error) {
      console.error('Chat API error:', error);
      const errorResponse: ChatMessage = { sender: 'ai', text: 'Sorry, I encountered an error. Please try again.' };
      setMessages((prevMessages) => [...prevMessages, errorResponse]); // Add error response
    } finally {
      setIsLoading(false);
      // Scroll after AI response might need a slight delay
      setTimeout(scrollToBottom, 0);
    }
  }, [inputValue, isLoading, messages]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent default Enter behavior
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Icon */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed z-30 p-3 text-white transition-transform duration-200 rounded-full shadow-lg bottom-6 right-6 bg-gradient-to-r from-primary-accent to-secondary-accent hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-bg focus:ring-primary-accent"
        aria-label="Toggle AI Chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Chat Interface */}
      {isChatOpen && (
        <div className="fixed z-40 flex flex-col w-full max-w-md border rounded-lg shadow-xl bottom-20 right-6 bg-cards-bg border-arb-border animate-fadeIn" style={{ height: '70vh', maxHeight: '550px' }}>
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-arb-border">
            <h3 className="text-lg font-semibold text-highlights">GovPal AI Assistant</h3>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-light-gray hover:text-white focus:outline-none"
              aria-label="Close Chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-secondary-bg scrollbar-thin scrollbar-thumb-arb-border scrollbar-track-secondary-bg">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3 py-2 rounded-lg shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-primary-accent text-white'
                    : 'bg-cards-bg text-highlights' // Use highlights for AI text for contrast
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="max-w-[80%] px-3 py-2 rounded-lg shadow-sm bg-cards-bg text-light-gray">
                    <div className="flex items-center space-x-1.5">
                       <span className="w-1.5 h-1.5 bg-light-gray rounded-full animate-bounce" style={{animationDelay: '0s'}}></span>
                       <span className="w-1.5 h-1.5 bg-light-gray rounded-full animate-bounce" style={{animationDelay: '0.15s'}}></span>
                       <span className="w-1.5 h-1.5 bg-light-gray rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></span>
                    </div>
                 </div>
              </div>
            )}
            {/* Invisible div to target for scrolling */}
            <div ref={chatMessagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-arb-border bg-cards-bg">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about governance..."
                className="flex-1 px-3 py-2 text-sm border rounded-lg bg-secondary-bg border-arb-border text-highlights focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-primary-accent placeholder-light-gray/70"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="px-4 py-2 text-sm font-medium text-white transition-opacity rounded-lg bg-primary-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-accent disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;