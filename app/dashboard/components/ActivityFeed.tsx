import React from 'react';

interface ActivityItem {
  type: string;
  subject: string;
  action: string;
}

interface ActivityFeedProps {
  activities: ActivityItem[];
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  const getActionClass = (action: string): string => {
    const lowerAction = action.toLowerCase();
    if (lowerAction.includes('for')) return 'text-arb-success';
    if (lowerAction.includes('against')) return 'text-alerts';
    if (lowerAction.includes('added') || lowerAction.includes('created')) return 'text-primary-accent';
    return 'text-light-gray'; // Default
  };

  return (
    <div className="flex flex-col h-full p-4 border rounded-lg bg-cards-bg shadow-glow-sm border-arb-border">
      <h3 className="mb-4 text-lg font-semibold tracking-wider uppercase text-primary-accent">Activity</h3>
      <div className="flex-grow space-y-2.5 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-arb-border scrollbar-track-secondary-bg">
        {activities.length > 0 ? activities.map((activity, index) => (
          <div key={index} className="p-3 text-sm border rounded-lg shadow-sm cursor-pointer bg-secondary-bg border-arb-border/50"> {/* Slightly enhanced styling */}
             <p> {/* Wrap text for better structure */}
                <span className="mr-1 text-light-gray/80">{activity.type} /</span>
                <span className="text-white mr-1.5 font-medium">{activity.subject}</span>
                <span className={`font-semibold ${getActionClass(activity.action)}`}>{activity.action}</span>
             </p>
          </div>
        )) : (
           <p className="py-4 text-sm text-center text-light-gray">No recent activity.</p>
        )}
      </div>
    </div>
  );
};

export default ActivityFeed;