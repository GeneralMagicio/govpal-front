'use client'

import { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';

interface DataPrivacyPanelProps {
  onSettingsChange: () => void;
}

const DataPrivacyPanel: React.FC<DataPrivacyPanelProps> = ({ onSettingsChange }) => {
  // Data collection preferences
  const [collectUsageData, setCollectUsageData] = useState<boolean>(true);
  const [shareAnonymousData, setShareAnonymousData] = useState<boolean>(true);
  const [allowPersonalization, setAllowPersonalization] = useState<boolean>(true);
  const [storeVotingHistory, setStoreVotingHistory] = useState<boolean>(true);
  
  // Data export/delete states
  const [exportRequested, setExportRequested] = useState<boolean>(false);
  const [exportProgress, setExportProgress] = useState<number>(0);
  const [exportReady, setExportReady] = useState<boolean>(false);
  
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState<string>('');
  
  // Simulate data export process
  const requestDataExport = (): void => {
    setExportRequested(true);
    setExportProgress(0);
    
    const interval = setInterval(() => {
      setExportProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setExportReady(true);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };
  
  // Handle settings changes
  const handleChange = (): void => {
    onSettingsChange();
  };

  return (
    <div className="bg-cards-bg rounded-xl p-6 shadow-glow-sm transition-all duration-300 hover:shadow-glow">
      <h2 className="text-2xl font-bold mb-6">Data & Privacy</h2>
      
      <div className="space-y-8">
        {/* Data collection settings */}
        <section>
          <h3 className="text-xl font-semibold mb-4 text-primary-accent">Data Collection</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium">Usage Analytics</label>
                <p className="text-sm text-light-gray">Collect anonymous usage data to improve the platform</p>
              </div>
              <ToggleSwitch 
                enabled={collectUsageData} 
                onChange={(val) => { setCollectUsageData(val); handleChange(); }} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium">Anonymous Sharing</label>
                <p className="text-sm text-light-gray">Share anonymized data to improve governance analytics</p>
              </div>
              <ToggleSwitch 
                enabled={shareAnonymousData} 
                onChange={(val) => { setShareAnonymousData(val); handleChange(); }} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium">AI Personalization</label>
                <p className="text-sm text-light-gray">Allow the AI to learn from your interactions</p>
              </div>
              <ToggleSwitch 
                enabled={allowPersonalization} 
                onChange={(val) => { setAllowPersonalization(val); handleChange(); }} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium">Voting History Storage</label>
                <p className="text-sm text-light-gray">Store your voting history for better recommendations</p>
              </div>
              <ToggleSwitch 
                enabled={storeVotingHistory} 
                onChange={(val) => { setStoreVotingHistory(val); handleChange(); }} 
              />
            </div>
          </div>
        </section>
        
        {/* Data export section */}
        <section>
          <h3 className="text-xl font-semibold mb-4 text-primary-accent">Export Your Data</h3>
          <p className="text-light-gray mb-4">
            Download a copy of all your data stored on Gov AI in a machine-readable format
          </p>
          
          {!exportRequested ? (
            <button
              onClick={requestDataExport}
              className="px-4 py-2 bg-primary-accent text-white rounded-lg hover:bg-primary-accent/80 transition-colors"
            >
              Request Data Export
            </button>
          ) : !exportReady ? (
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-light-gray">Preparing export...</span>
                <span className="text-sm">{exportProgress}%</span>
              </div>
              <div className="w-full bg-secondary-bg rounded-full h-2">
                <div 
                  className="bg-primary-accent h-2 rounded-full transition-all duration-300"
                  style={{ width: `${exportProgress}%` }}
                ></div>
              </div>
            </div>
          ) : (
            <div className="flex space-x-3">
              <button
                className="px-4 py-2 bg-highlights text-primary-bg rounded-lg hover:bg-highlights/80 transition-colors font-medium"
              >
                Download Export
              </button>
              <button
                onClick={() => {
                  setExportRequested(false);
                  setExportReady(false);
                }}
                className="px-4 py-2 bg-secondary-bg text-white rounded-lg hover:bg-secondary-bg/80 transition-colors"
              >
                Request New Export
              </button>
            </div>
          )}
        </section>
        
        {/* Data retention and deletion */}
        <section>
          <h3 className="text-xl font-semibold mb-4 text-primary-accent">Data Retention</h3>
          <p className="text-light-gray mb-2">
            Your data is stored securely and retained according to our privacy policy
          </p>
          
          <div className="bg-secondary-bg/30 p-4 rounded-lg mb-6">
            <h4 className="font-medium mb-2">Retention Periods</h4>
            <ul className="text-sm text-light-gray space-y-2">
              <li className="flex justify-between">
                <span>Account information:</span>
                <span>Until account deletion</span>
              </li>
              <li className="flex justify-between">
                <span>Notification history:</span>
                <span>12 months</span>
              </li>
              <li className="flex justify-between">
                <span>Voting history:</span>
                <span>36 months</span>
              </li>
              <li className="flex justify-between">
                <span>Usage analytics:</span>
                <span>24 months</span>
              </li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mb-4 text-alerts">Delete Account & Data</h3>
          <p className="text-light-gray mb-4">
            Permanently delete your account and all associated data. This action cannot be undone.
          </p>
          
          {!showDeleteConfirm ? (
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="px-4 py-2 bg-alerts/20 text-alerts rounded-lg hover:bg-alerts/30 transition-colors"
            >
              Delete Account
            </button>
          ) : (
            <div className="bg-secondary-bg/50 p-4 rounded-lg">
              <p className="text-sm text-light-gray mb-3">
                This will permanently delete your account and all data. Type <strong>DELETE</strong> to confirm:
              </p>
              <div className="mb-3">
                <input
                  type="text"
                  value={deleteConfirmText}
                  onChange={(e) => setDeleteConfirmText(e.target.value)}
                  className="w-full px-4 py-2 bg-secondary-bg border border-secondary-bg/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-alerts"
                  placeholder="Type 'DELETE' to confirm"
                />
              </div>
              <div className="flex space-x-3">
                <button
                  disabled={deleteConfirmText !== 'DELETE'}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    deleteConfirmText === 'DELETE'
                      ? 'bg-alerts text-white hover:bg-alerts/80'
                      : 'bg-alerts/20 text-alerts/50 cursor-not-allowed'
                  }`}
                >
                  Permanently Delete Account
                </button>
                <button
                  onClick={() => {
                    setShowDeleteConfirm(false);
                    setDeleteConfirmText('');
                  }}
                  className="px-4 py-2 bg-secondary-bg text-white rounded-lg hover:bg-secondary-bg/80 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default DataPrivacyPanel;