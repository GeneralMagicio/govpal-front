'use client'

import { useState, useRef, ChangeEvent } from 'react';

interface ProfilePanelProps {
  onSettingsChange: () => void;
}

interface UserProfile {
  displayName: string;
  username: string;
  email: string;
  bio: string;
  profileImage: string | null;
  preferredLanguage: string;
  timeZone: string;
}

const ProfilePanel: React.FC<ProfilePanelProps> = ({ onSettingsChange }) => {
  const [profile, setProfile] = useState<UserProfile>({
    displayName: 'Alex Johnson',
    username: 'alexj',
    email: 'alex.johnson@example.com',
    bio: 'Governance enthusiast and active DAO contributor. Interested in treasury management and community-driven decision making.',
    profileImage: null,
    preferredLanguage: 'en',
    timeZone: 'UTC-5'
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showChangePassword, setShowChangePassword] = useState<boolean>(false);
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  
  // Languages and timezones
  const languages: Array<{code: string, name: string}> = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ja', name: 'Japanese' }
  ];
  
  const timeZones: string[] = [
    'UTC-12', 'UTC-11', 'UTC-10', 'UTC-9', 'UTC-8', 'UTC-7', 
    'UTC-6', 'UTC-5', 'UTC-4', 'UTC-3', 'UTC-2', 'UTC-1',
    'UTC+0', 'UTC+1', 'UTC+2', 'UTC+3', 'UTC+4', 'UTC+5', 
    'UTC+6', 'UTC+7', 'UTC+8', 'UTC+9', 'UTC+10', 'UTC+11', 'UTC+12'
  ];
  
  // Handle profile changes
  const handleProfileChange = (field: keyof UserProfile, value: string): void => {
    setProfile({
      ...profile,
      [field]: value
    });
    onSettingsChange();
  };
  
  // Handle profile image upload
  const handleImageUpload = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (files && files[0]) {
      // In a real app, you'd upload the file to a server
      // For this demo, we'll just create a data URL
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        handleProfileChange('profileImage', result);
      };
      reader.readAsDataURL(files[0]);
    }
  };
  
  // Handle password change
  const handlePasswordChange = (): void => {
    // Validation would go here
    if (newPassword !== confirmPassword) {
      // Show error
      return;
    }
    
    // In a real app, you'd submit the password change to a server
    console.log('Password changed');
    setShowChangePassword(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    onSettingsChange();
  };

  return (
    <div className="bg-cards-bg rounded-xl p-6 shadow-glow-sm transition-all duration-300 hover:shadow-glow">
      <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column - profile image and basic info */}
        <div className="md:col-span-1">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-secondary-bg rounded-full overflow-hidden mb-4 relative">
              {profile.profileImage ? (
                <img 
                  src={profile.profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-primary-accent">
                  {profile.displayName.charAt(0)}
                </div>
              )}
              
              <button
                onClick={handleImageUpload}
                className="absolute bottom-0 right-0 w-8 h-8 bg-primary-accent rounded-full flex items-center justify-center hover:bg-primary-accent/80 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </button>
              
              <input 
                type="file" 
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            
            <p className="text-sm text-light-gray mb-6">
              Upload a profile picture (max 5MB)
            </p>
            
            <div className="w-full space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Display Name</label>
                <input
                  type="text"
                  value={profile.displayName}
                  onChange={(e) => handleProfileChange('displayName', e.target.value)}
                  className="w-full px-4 py-2 bg-secondary-bg border border-secondary-bg/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Username</label>
                <input
                  type="text"
                  value={profile.username}
                  onChange={(e) => handleProfileChange('username', e.target.value)}
                  className="w-full px-4 py-2 bg-secondary-bg border border-secondary-bg/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Right column - account details */}
        <div className="md:col-span-2 space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-4 text-primary-accent">Account Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleProfileChange('email', e.target.value)}
                  className="w-full px-4 py-2 bg-secondary-bg border border-secondary-bg/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Bio</label>
                <textarea
                  value={profile.bio}
                  onChange={(e) => handleProfileChange('bio', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 bg-secondary-bg border border-secondary-bg/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                />
                <p className="text-xs text-light-gray mt-1">
                  Brief description about yourself (max 200 characters)
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Preferred Language</label>
                  <select
                    value={profile.preferredLanguage}
                    onChange={(e) => handleProfileChange('preferredLanguage', e.target.value)}
                    className="w-full px-4 py-2 bg-secondary-bg border border-secondary-bg/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Time Zone</label>
                  <select
                    value={profile.timeZone}
                    onChange={(e) => handleProfileChange('timeZone', e.target.value)}
                    className="w-full px-4 py-2 bg-secondary-bg border border-secondary-bg/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                  >
                    {timeZones.map((zone) => (
                      <option key={zone} value={zone}>
                        {zone}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-1">Password</h4>
                {!showChangePassword ? (
                  <button
                    onClick={() => setShowChangePassword(true)}
                    className="text-sm text-primary-accent hover:text-primary-accent/80 transition-colors"
                  >
                    Change Password
                  </button>
                ) : (
                  <div className="bg-secondary-bg/30 p-4 rounded-lg space-y-3">
                    <div>
                      <label className="block text-sm text-light-gray mb-1">Current Password</label>
                      <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full px-4 py-2 bg-secondary-bg border border-secondary-bg/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-light-gray mb-1">New Password</label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-4 py-2 bg-secondary-bg border border-secondary-bg/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-light-gray mb-1">Confirm New Password</label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 bg-secondary-bg border border-secondary-bg/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                      />
                    </div>
                    
                    <div className="flex space-x-3">
                      <button
                        onClick={handlePasswordChange}
                        className="px-4 py-2 bg-primary-accent text-white rounded-lg hover:bg-primary-accent/80 transition-colors"
                      >
                        Update Password
                      </button>
                      <button
                        onClick={() => {
                          setShowChangePassword(false);
                          setCurrentPassword('');
                          setNewPassword('');
                          setConfirmPassword('');
                        }}
                        className="px-4 py-2 bg-secondary-bg text-white rounded-lg hover:bg-secondary-bg/80 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-4 text-primary-accent">Connected Accounts</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-secondary-bg/30 p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-secondary-bg rounded-lg flex items-center justify-center mr-3">
                    <span className="text-xl">🦊</span>
                  </div>
                  <div>
                    <h4 className="font-medium">MetaMask</h4>
                    <p className="text-xs text-light-gray">0x71C...95e3</p>
                  </div>
                </div>
                <button className="text-sm text-alerts hover:text-alerts/80 transition-colors">
                  Disconnect
                </button>
              </div>
              
              <div className="flex items-center justify-between bg-secondary-bg/30 p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-secondary-bg rounded-lg flex items-center justify-center mr-3">
                    <span className="text-xl">🔑</span>
                  </div>
                  <div>
                    <h4 className="font-medium">WalletConnect</h4>
                    <p className="text-xs text-light-gray">Not connected</p>
                  </div>
                </div>
                <button className="text-sm px-3 py-1 bg-primary-accent rounded-md hover:bg-primary-accent/80 transition-colors">
                  Connect
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;