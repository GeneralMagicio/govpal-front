'use client'

import { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';

interface PlatformConnectionsPanelProps {
  onSettingsChange: () => void;
}

interface Platform {
  id: string;
  name: string;
  status: 'connected' | 'disconnected' | 'coming-soon';
  icon: string;
  description: string;
  configOptions?: Record<string, boolean | string | number>;
}

const PlatformConnectionsPanel: React.FC<PlatformConnectionsPanelProps> = ({ onSettingsChange }) => {
  const [platforms, setPlatforms] = useState<Platform[]>([
    {
      id: 'agora',
      name: 'Agora',
      status: 'connected',
      icon: '🏛️',
      description: 'Governance forum integration for proposal monitoring',
      configOptions: {
        importHistory: true,
        trackNewProposals: true
      }
    },
    {
      id: 'tally',
      name: 'Tally',
      status: 'connected',
      icon: '📊',
      description: 'On-chain voting analytics and participation',
      configOptions: {
        voteAlerts: true,
        resultNotifications: true
      }
    },
    {
      id: 'snapshot',
      name: 'Snapshot',
      status: 'coming-soon',
      icon: '📷',
      description: 'Off-chain governance voting platform'
    },
    {
      id: 'trello',
      name: 'Trello',
      status: 'disconnected',
      icon: '📋',
      description: 'Task management for governance workflows'
    }
  ]);

  const [showAddMenu, setShowAddMenu] = useState(false);
  const [availableServices] = useState([
    { id: 'discord', name: 'Discord', icon: '💬' },
    { id: 'telegram', name: 'Telegram', icon: '📱' },
    { id: 'github', name: 'GitHub', icon: '📦' },
  ]);

  const handleConfigChange = (platformId: string, option: string, value: boolean | string | number) => {
    setPlatforms(platforms.map(platform => {
      if (platform.id === platformId) {
        return {
          ...platform,
          configOptions: {
            ...platform.configOptions,
            [option]: value
          }
        };
      }
      return platform;
    }));
    onSettingsChange();
  };

  const connectPlatform = (platformId: string) => {
    setPlatforms(platforms.map(platform => {
      if (platform.id === platformId) {
        return {
          ...platform,
          status: 'connected',
          configOptions: { importHistory: true, trackNewProposals: true }
        };
      }
      return platform;
    }));
    onSettingsChange();
  };

  return (
    <div className="bg-cards-bg rounded-xl p-6 shadow-glow-sm transition-all duration-300 hover:shadow-glow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Platform Connections</h2>
        
        <div className="relative">
          <button 
            onClick={() => setShowAddMenu(!showAddMenu)}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-lg hover:opacity-90 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Add Integration
          </button>
          
          {showAddMenu && (
            <div className="absolute right-0 mt-2 w-60 bg-secondary-bg rounded-lg shadow-lg overflow-hidden z-10 animate-fadeIn">
              <ul>
                {availableServices.map((service) => (
                  <li key={service.id}>
                    <button
                      className="w-full px-4 py-3 text-left hover:bg-primary-accent/20 flex items-center"
                    >
                      <span className="mr-2">{service.icon}</span>
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      <div className="space-y-6">
        {platforms.map((platform) => (
          <div 
            key={platform.id}
            className="bg-secondary-bg/30 rounded-lg p-4 transition-all duration-300 hover:shadow-glow-sm transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-secondary-bg rounded-lg mr-3 text-xl">
                  {platform.icon}
                </div>
                <div>
                  <h3 className="font-medium">{platform.name}</h3>
                  <p className="text-sm text-light-gray">{platform.description}</p>
                </div>
              </div>
              
              <div>
                {platform.status === 'connected' && (
                  <div className="flex items-center">
                    <span className="text-sm mr-3 flex items-center text-highlights">
                      <span className="w-2 h-2 bg-highlights rounded-full mr-1"></span>
                      Connected
                    </span>
                    <button
                      className="text-sm underline text-light-gray hover:text-white"
                    >
                      Disconnect
                    </button>
                  </div>
                )}
                
                {platform.status === 'disconnected' && (
                  <button
                    onClick={() => connectPlatform(platform.id)}
                    className="px-3 py-1 bg-primary-accent text-white text-sm rounded-md hover:bg-primary-accent/80 transition-colors"
                  >
                    Connect
                  </button>
                )}
                
                {platform.status === 'coming-soon' && (
                  <span className="text-sm px-3 py-1 bg-secondary-bg rounded-md">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
            
            {platform.status === 'connected' && platform.configOptions && (
              <div className="mt-4 border-t border-secondary-bg pt-4 space-y-3">
                <h4 className="text-sm font-medium mb-2">Configuration Options</h4>
                
                {Object.entries(platform.configOptions).map(([option, value]) => (
                  <div key={option} className="flex items-center justify-between">
                    <label className="text-sm text-light-gray capitalize">
                      {option.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </label>
                    <ToggleSwitch
                      enabled={Boolean(value)}
                      onChange={(newValue) => handleConfigChange(platform.id, option, newValue)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformConnectionsPanel;