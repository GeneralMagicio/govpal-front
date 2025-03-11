interface ToggleSwitchProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

// ${enabled ? 'bg-purple-900' : 'bg-gray-400'}`}


const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ enabled, onChange }) => {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none
        ${enabled ? 'bg-primary-bg' : 'bg-gray-400'}`}
    >
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${
          enabled ? 'shadow-glow-sm' : ''
        }`}
      />
    </button>
  );
};

export default ToggleSwitch;