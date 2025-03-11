interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
}

const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min,
  max,
  step = 1
}) => {
  const percentage = ((value - min) / (max - min)) * 100;
  
  return (
    <div className="relative h-2 flex-1 rounded-full bg-secondary-bg">
      <div 
        className="absolute h-full rounded-full bg-gradient-to-r from-primary-accent to-secondary-accent"
        style={{ width: `${percentage}%` }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute w-full h-full opacity-0 cursor-pointer z-10"
      />
      <div 
        className="absolute w-4 h-4 rounded-full bg-white shadow-md transform -translate-y-1/2 -translate-x-2"
        style={{ left: `${percentage}%`, top: '50%' }}
      />
    </div>
  );
};

export default Slider;