// components/settings/Sidebar.tsx
type SettingsSection = 
  | 'Profile'
  | 'Notification Preferences'
  | 'Platform Connections'
  | 'Proposals'
  | 'AI Training'
  | 'Data & Privacy'
  | 'Help & Support';

interface SidebarProps {
  activeSection: SettingsSection;
  setActiveSection: (section: SettingsSection) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection
}) => {
  const sections: SettingsSection[] = [
    'Profile',
    'Notification Preferences',
    'Platform Connections',
    'Proposals',
    'AI Training',
    'Data & Privacy',
    'Help & Support'
  ];

  return (
    <div className="sticky w-full p-4 transition-all duration-300 md:w-64 bg-cards-bg rounded-xl h-fit top-8 hover:shadow-glow-sm">
      <nav>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => setActiveSection(section)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center relative
                  ${activeSection === section
                    ? 'text-white font-medium'
                    : 'text-light-gray hover:text-white hover:bg-secondary-bg/30'
                  }`}
              >
                {activeSection === section && (
                  <span 
                    className="absolute left-0 w-1 h-8 -translate-y-1/2 rounded-r-full top-1/2 bg-primary-accent shadow-glow-intense" 
                    style={{ 
                      boxShadow: '0 0 15px rgba(59, 130, 246, 0.7), 0 0 10px rgba(59, 130, 246, 0.5), 0 0 5px rgba(59, 130, 246, 0.3)' 
                    }}
                  />
                )}
                {section}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;