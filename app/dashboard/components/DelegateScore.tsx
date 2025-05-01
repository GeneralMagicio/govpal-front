import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';

interface DelegateScoreProps {
  month: string;
  score: number;
}

const DelegateScore: React.FC<{scores: DelegateScoreProps[]}> = ({scores}) => {

  const [month, setMonth] = useState('MAY')


  return (
    <div className="flex flex-col justify-center h-full p-4 border rounded-lg bg-cards-bg shadow-glow-sm border-arb-border">
       <h4 className="mb-3 text-sm font-medium text-center uppercase text-light-gray">DIP SCORE</h4>
       <div className="flex items-center justify-center space-x-3">
          {/* Basic Select */}
          <div className="relative">
             <select
                defaultValue={month} // Set default based on prop
                className="appearance-none bg-secondary-bg border border-arb-border text-white text-sm font-medium rounded-md pl-3 pr-8 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary-accent cursor-pointer"
                aria-label="Select month for DIP Score"
                onChange={(e) => setMonth(e.target.value)}
             >
                <option value="JANUARY">JANUARY</option>
                 <option value="FEBRUARY">FEBRUARY</option>
                 <option value="MARCH">MARCH</option>
                 <option value="APRIL">APRIL</option>
                 <option value="MAY">MAY</option>
                 <option value="JUNE">JUNE</option>
                 <option value="JULY">JULY</option>
                 <option value="AUGUST">AUGUST</option>
                 <option value="SEPTEMBER">SEPTEMBER</option>
                 <option value="OCTOBER">OCTOBER</option>
                 <option value="NOVEMBER">NOVEMBER</option>
                 <option value="DECEMBER">DECEMBER</option>
             </select>
             <ChevronDownIcon className="absolute right-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-light-gray pointer-events-none" />
          </div>

          <div className="px-5 py-1 text-2xl font-bold text-white rounded-md shadow-md bg-gradient-to-r from-primary-accent to-secondary-accent">
             {scores.find((el) => el.month === month)?.score}
          </div>
       </div>
    </div>
  );
};

export default DelegateScore;