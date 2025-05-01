import Link from "next/link";

type SettingsSection = 
  | 'Profile'
  | 'Notification Preferences'
  | 'Platform Connections'
  | 'Proposals'
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
    'Proposals',
    'AI Training',
    'Data & Privacy',
    'Help & Support'
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4C8.13401 4 5 7.13401 5 11C5 14.866 8.13401 18 12 18C15.866 18 19 14.866 19 11C19 7.13401 15.866 4 12 4Z" stroke="url(#brain-gradient)" strokeWidth="1.5" />
            <path d="M12 8V14M9 11H15" stroke="url(#brain-gradient)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8 7L6 5M16 7L18 5M8 15L6 17M16 15L18 17" stroke="url(#brain-gradient)" strokeWidth="1.5" strokeLinecap="round" />
            <defs>
              <linearGradient id="brain-gradient" x1="5" y1="5" x2="19" y2="18" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent">GovPal</span>
        </Link>
        <h1 className="text-2xl font-bold text-transparent text-white bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text">
          Personalize Your Experience
        </h1>
      </div>
      <p className="mb-6 text-light-gray">Configure how GovPal works for you</p>
      
      {/* Search bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search settings..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 pl-10 transition-all duration-300 border rounded-lg md:w-96 bg-cards-bg border-secondary-bg focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent shadow-glow-sm focus:shadow-glow"
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
      <div className="hidden pb-2 space-x-4 overflow-x-auto md:flex">
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