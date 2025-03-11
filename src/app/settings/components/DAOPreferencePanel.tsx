'use client'

import { useState } from 'react';
import Slider from './Slider';
import Tag from './Tag';

interface DAOPreferencesPanelProps {
  onSettingsChange: () => void;
}

const DAOPreferencesPanel: React.FC<DAOPreferencesPanelProps> = ({ onSettingsChange }) => {
  const [daoPreferences, setDaoPreferences] = useState([
    {
      id: 'dao1',
      name: 'MakerDAO',
      importance: 80,
      trackedTopics: ['Protocol Parameters', 'Treasury', 'Core Units'],
      keyMembers: ['core-team', 'contributors']
    },
    {
      id: 'dao2',
      name: 'Uniswap',
      importance: 70,
      trackedTopics: ['Governance', 'Fee Changes', 'Grants'],
      keyMembers: ['core-devs', 'delegates']
    },
    {
      id: 'dao3',
      name: 'Aave',
      importance: 60,
      trackedTopics: ['Interest Rates', 'New Markets', 'Risk Parameters'],
      keyMembers: []
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [editingDAOId, setEditingDAOId] = useState<string | null>(null);
  const [topicInput, setTopicInput] = useState('');
  // const [memberInput, setMemberInput] = useState('');

  const handleImportanceChange = (daoId: string, value: number) => {
    setDaoPreferences(daoPreferences.map(dao => {
      if (dao.id === daoId) {
        return { ...dao, importance: value };
      }
      return dao;
    }));
    onSettingsChange();
  };

  const addTopic = (daoId: string, topic: string) => {
    if (!topic) return;
    
    setDaoPreferences(daoPreferences.map(dao => {
      if (dao.id === daoId && !dao.trackedTopics.includes(topic)) {
        return {
          ...dao,
          trackedTopics: [...dao.trackedTopics, topic]
        };
      }
      return dao;
    }));
    
    setTopicInput('');
    onSettingsChange();
  };

  const removeTopic = (daoId: string, topic: string) => {
    setDaoPreferences(daoPreferences.map(dao => {
      if (dao.id === daoId) {
        return {
          ...dao,
          trackedTopics: dao.trackedTopics.filter(t => t !== topic)
        };
      }
      return dao;
    }));
    onSettingsChange();
  };

  const filteredDAOs = searchQuery
    ? daoPreferences.filter(dao => dao.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : daoPreferences;

  return (
    <div className="bg-cards-bg rounded-xl p-6 shadow-glow-sm transition-all duration-300 hover:shadow-glow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">DAO Preferences</h2>
        
        <button 
          className="flex items-center px-4 py-2 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-lg hover:opacity-90 transition-all duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Add New DAO
        </button>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search DAOs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 bg-secondary-bg/30 border border-secondary-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all duration-300"
          />
          <svg 
            className="absolute left-3 top-2.5 h-5 w-5 text-light-gray"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
      </div>
      
      <div className="space-y-6">
        {filteredDAOs.map((dao) => (
          <div 
            key={dao.id}
            className="bg-secondary-bg/30 rounded-lg p-5 transition-all duration-300 hover:shadow-glow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-secondary-bg rounded-full mr-3 overflow-hidden flex items-center justify-center text-xl">
                  {dao.name.substring(0, 1)}
                </div>
                <h3 className="font-medium">{dao.name}</h3>
              </div>
              
              <button
                onClick={() => setEditingDAOId(editingDAOId === dao.id ? null : dao.id)}
                className="text-sm underline text-light-gray hover:text-white"
              >
                {editingDAOId === dao.id ? 'Close' : 'Edit'}
              </button>
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Notification Importance</label>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-light-gray">Low</span>
                <Slider 
                  value={dao.importance} 
                  onChange={(val) => handleImportanceChange(dao.id, val)} 
                  min={0} 
                  max={100} 
                />
                <span className="text-sm text-light-gray">High</span>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Tracked Topics</label>
              
              <div className="flex flex-wrap gap-2 mb-2">
                {dao.trackedTopics.map((topic) => (
                  <Tag 
                    key={topic} 
                    text={topic} 
                    onRemove={editingDAOId === dao.id ? () => removeTopic(dao.id, topic) : undefined} 
                  />
                ))}
              </div>
              
              {editingDAOId === dao.id && (
                <div className="flex">
                  <input 
                    type="text" 
                    value={topicInput}
                    onChange={(e) => setTopicInput(e.target.value)}
                    placeholder="Add topic..."
                    className="flex-1 px-3 py-1 bg-secondary-bg border border-secondary-bg/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-accent"
                  />
                  <button
                    onClick={() => addTopic(dao.id, topicInput)}
                    className="ml-2 px-3 py-1 bg-primary-accent text-white text-sm rounded-md hover:bg-primary-accent/80 transition-colors"
                  >
                    Add
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DAOPreferencesPanel;