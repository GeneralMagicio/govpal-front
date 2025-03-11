
type SettingsSection = 
  | 'Profile'
  | 'Notification Preferences'
  | 'Platform Connections'
  | 'DAO Settings'
  | 'AI Training'
  | 'Data & Privacy'
  | 'Help & Support';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeSection: SettingsSection;
  setActiveSection: (section: SettingsSection) => void;
}

const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  activeSection,
  setActiveSection
}) => {
  const tabs: SettingsSection[] = [
    'Profile',
    'Notification Preferences',
    'Platform Connections',
    'DAO Settings',
    'AI Training',
    'Data & Privacy',
    'Help & Support'
  ];

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Personalize Your Experience
      </h1>
      <p className="text-light-gray mb-6">Configure how Gov AI Agent works for you</p>
      
      {/* Search bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search settings..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-96 px-4 py-2 pl-10 bg-cards-bg border border-secondary-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all duration-300 shadow-glow-sm focus:shadow-glow"
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
      
      {/* Tabs navigation - only visible on larger screens */}
      <div className="hidden md:flex overflow-x-auto space-x-4 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSection(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap
              ${activeSection === tab
                ? 'bg-secondary-bg text-white shadow-glow'
                : 'text-light-gray hover:bg-secondary-bg/30'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;