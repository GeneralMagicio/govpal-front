'use client'

import { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import Slider from './Slider';
import TopicPicker from './TopicPicker';

interface NotificationPanelProps {
  onSettingsChange: () => void;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({ onSettingsChange }) => {
  const [learningMode, setLearningMode] = useState<number>(65);
  // const [topics, setTopics] = useState<string[]>(['Governance Proposals', 'Treasury Updates', 'Voting Reminders']);
  const [priorityThreshold, setPriorityThreshold] = useState<number>(3);
  const [notificationFrequency, setNotificationFrequency] = useState<string>('daily');
  
  const [inAppNotifications, setInAppNotifications] = useState<boolean>(true);
  const [emailNotifications, setEmailNotifications] = useState<boolean>(true);
  const [emailFrequency, setEmailFrequency] = useState<string>('daily');
  const [browserNotifications, setBrowserNotifications] = useState<boolean>(false);
  const [mobileNotifications, setMobileNotifications] = useState<boolean>(false);
  
  const [detailLevel, setDetailLevel] = useState<number>(70);
  const [includeSummaries, setIncludeSummaries] = useState<boolean>(true);
  const [includeRecommendations, setIncludeRecommendations] = useState<boolean>(true);
  
  const handleChange = () => {
    onSettingsChange();
  };

  return (
    <div className="bg-cards-bg rounded-xl p-6 shadow-glow-sm transition-all duration-300 hover:shadow-glow">
      <h2 className="text-2xl font-bold mb-6">Notification Preferences</h2>
      
      <div className="space-y-8">
        {/* AI Notification preferences */}
        <section>
          <h3 className="text-xl font-semibold mb-4 text-primary-accent">AI Notification Preferences</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Learning Mode</label>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-light-gray">Conservative</span>
                <Slider 
                  value={learningMode} 
                  onChange={(val) => { setLearningMode(val); handleChange(); }} 
                  min={0} 
                  max={100} 
                />
                <span className="text-sm text-light-gray">Aggressive</span>
              </div>
              <p className="mt-1 text-sm text-light-gray">
                Determines how proactive the AI is in suggesting new content based on your behavior
              </p>
            </div>
            
            <div>
              <label className="block mb-2 font-medium">Topics of Interest</label>
              {/* <div className="flex flex-wrap gap-2 mb-2">
                {topics.map((topic) => (
                  <span key={topic} className="inline-flex items-center px-3 py-1 rounded-lg text-sm bg-primary-accent/20 text-primary-accent">
                    {topic}
                    <button 
                      onClick={() => {
                        setTopics(topics.filter(t => t !== topic));
                        handleChange();
                      }}
                      className="ml-2"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div> */}
              <TopicPicker/>
            </div>
            
            <div>
              <label className="block mb-2 font-medium">Priority Threshold</label>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-light-gray">Lower</span>
                <Slider 
                  value={priorityThreshold} 
                  onChange={(val) => { setPriorityThreshold(val); handleChange(); }} 
                  min={1} 
                  max={5} 
                  step={1}
                />
                <span className="text-sm text-light-gray">Higher</span>
              </div>
              <p className="mt-1 text-sm text-light-gray">
                Only receive notifications with this priority level or higher
              </p>
            </div>
            
            <div>
              <label className="block mb-2 font-medium">Notification Frequency</label>
              <select 
                className="w-full md:w-64 px-4 py-2 bg-secondary-bg rounded-lg border border-secondary-bg/50 focus:outline-none focus:ring-2 focus:ring-primary-accent"
                value={notificationFrequency}
                onChange={(e) => { 
                  setNotificationFrequency(e.target.value); 
                  handleChange(); 
                }}
              >
                <option value="realtime">Real-time</option>
                <option value="hourly">Hourly</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>
          </div>
        </section>
        
        {/* Notification Channels */}
        <section>
          <h3 className="text-xl font-semibold mb-4 text-primary-accent">Notification Channels</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium">In-app Notifications</label>
                <p className="text-sm text-light-gray">Receive notifications within the application</p>
              </div>
              <ToggleSwitch 
                enabled={inAppNotifications} 
                onChange={(val) => { setInAppNotifications(val); handleChange(); }} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium">Email Notifications</label>
                <p className="text-sm text-light-gray">Receive notifications to your email</p>
              </div>
              <ToggleSwitch 
                enabled={emailNotifications} 
                onChange={(val) => { setEmailNotifications(val); handleChange(); }} 
              />
            </div>
            
            {emailNotifications && (
              <div className="ml-6 mt-2">
                <label className="block mb-2 text-sm font-medium">Email Frequency</label>
                <select 
                  className="w-full sm:w-64 px-4 py-2 bg-secondary-bg rounded-lg border border-secondary-bg/50"
                  value={emailFrequency}
                  onChange={(e) => { 
                    setEmailFrequency(e.target.value); 
                    handleChange(); 
                  }}
                >
                  <option value="realtime">Real-time</option>
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily Digest</option>
                  <option value="weekly">Weekly Summary</option>
                </select>
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium">Browser Notifications</label>
                <p className="text-sm text-light-gray">Receive desktop notifications when browser is open</p>
              </div>
              <div className="flex items-center">
                {!browserNotifications && (
                  <button 
                    onClick={() => {
                      setBrowserNotifications(true);
                      handleChange();
                    }}
                    className="mr-4 text-sm px-3 py-1 bg-primary-accent rounded-md hover:bg-primary-accent/80 transition-colors"
                  >
                    Enable
                  </button>
                )}
                <ToggleSwitch 
                  enabled={browserNotifications} 
                  onChange={(val) => { 
                    setBrowserNotifications(val);
                    handleChange();
                  }} 
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium">Mobile Push Notifications</label>
                <p className="text-sm text-light-gray">Receive notifications on your mobile device</p>
              </div>
              <div className="flex items-center">
                {!mobileNotifications && (
                  <button 
                    onClick={() => {
                      setMobileNotifications(true);
                      handleChange();
                    }}
                    className="mr-4 text-sm px-3 py-1 bg-primary-accent rounded-md hover:bg-primary-accent/80 transition-colors"
                  >
                    Set Up
                  </button>
                )}
                <ToggleSwitch 
                  enabled={mobileNotifications} 
                  onChange={(val) => { setMobileNotifications(val); handleChange(); }} 
                />
              </div>
            </div>
            
            {mobileNotifications && (
              <div className="mt-4 bg-secondary-bg/50 p-4 rounded-lg flex flex-col items-center">
                <p className="text-sm text-light-gray mb-2">Scan this QR code with your mobile device</p>
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                  {/* Placeholder for QR code */}
                  <span className="text-primary-bg">QR Code</span>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Content Preferences */}
        <section>
          <h3 className="text-xl font-semibold mb-4 text-primary-accent">Content Preferences</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block mb-2 font-medium">Detail Level</label>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-light-gray">Brief</span>
                <Slider 
                  value={detailLevel} 
                  onChange={(val) => { setDetailLevel(val); handleChange(); }} 
                  min={0} 
                  max={100} 
                />
                <span className="text-sm text-light-gray">Comprehensive</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium">Include Summaries</label>
                <p className="text-sm text-light-gray">Show summaries of proposals and decisions</p>
              </div>
              <ToggleSwitch 
                enabled={includeSummaries} 
                onChange={(val) => { setIncludeSummaries(val); handleChange(); }} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium">Include Voting Recommendations</label>
                <p className="text-sm text-light-gray">Get AI suggestions on how to vote based on your preferences</p>
              </div>
              <ToggleSwitch 
                enabled={includeRecommendations} 
                onChange={(val) => { setIncludeRecommendations(val); handleChange(); }} 
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotificationPanel;