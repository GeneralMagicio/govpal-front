// app/dashboard/components/TaskManager.tsx
'use client';

import React, { useState } from 'react';
import { ChecklistIcon } from './icons';

// Define Task structure
interface Task {
    id: number;
    description: string;
    status: 'in-progress' | 'completed' | 'not-started';
}

// Placeholder Arbitrum-related Tasks
const placeholderTasks: Task[] = [
    // In Progress
    { id: 1, description: "Review AIP-15: Implement Sequencer Fee Sharing Model", status: 'in-progress' },
    { id: 2, description: "Analyze impact of EIP-4844 (Proto-Danksharding) on Arbitrum fees", status: 'in-progress' },
    { id: 3, description: "Draft feedback on the latest Arbitrum Orbit incentive proposal", status: 'in-progress' },
    // Completed
    { id: 4, description: "Vote on AIP-12: Security Council Election Results", status: 'completed' },
    { id: 5, description: "Delegate voting power for Snapshot proposal #AFG34", status: 'completed' },
    { id: 6, description: "Submit Q2 delegate performance report for DIP", status: 'completed' },
    { id: 7, description: "Test Arbitrum Stylus upgrade on Sepolia testnet", status: 'completed' },
    // Not Started
    { id: 8, description: "Research potential DeFi protocols for the DRIP incentive program", status: 'not-started' },
    { id: 9, description: "Prepare summary of the upcoming Arbitrum Bridge V3 changes", status: 'not-started' },
];


const TaskManager: React.FC = () => {
    const [isTaskOpen, setIsTaskOpen] = useState(false);

    const inProgressTasks = placeholderTasks.filter(task => task.status === 'in-progress');
    const completedTasks = placeholderTasks.filter(task => task.status === 'completed');
    const notStartedTasks = placeholderTasks.filter(task => task.status === 'not-started');

    const TaskItem: React.FC<{ task: Task }> = ({ task }) => (
        <div className={`bg-secondary-bg p-2.5 rounded-md border border-arb-border/50 text-sm mb-2
        ${task.status === 'completed' ? 'line-through text-light-gray/70' : task.status === 'not-started' ? 'text-red-400' : 'text-highlights'}`}>
            {task.description}
        </div>
    );

    return (
        <>
            {/* Task Manager Icon Button */}
            <button
                onClick={() => setIsTaskOpen(!isTaskOpen)}
                className="fixed z-30 p-3 text-white transition-transform duration-200 rounded-full shadow-lg bottom-6 left-6 bg-gradient-to-r from-secondary-accent to-primary-accent hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-bg focus:ring-secondary-accent" // Adjusted gradient
                aria-label="Toggle Task Manager"
            >
                <ChecklistIcon className="w-6 h-6" />
            </button>

            {/* Task Manager Panel */}
            {isTaskOpen && (
                <div className="fixed z-40 flex flex-col w-full max-w-md border rounded-lg shadow-xl bottom-20 left-6 bg-cards-bg border-arb-border animate-fadeIn" style={{ height: '70vh', maxHeight: '550px' }}>
                    {/* Header */}
                    <div className="flex items-center justify-between p-3 border-b border-arb-border">
                        <h3 className="text-lg font-semibold text-highlights">Task Manager</h3>
                        <button
                            onClick={() => setIsTaskOpen(false)}
                            className="text-light-gray hover:text-white focus:outline-none"
                            aria-label="Close Task Manager"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    {/* Task Sections Area */}
                    <div className="flex-1 p-3 space-y-4 overflow-y-auto bg-secondary-bg scrollbar-thin scrollbar-thumb-arb-border scrollbar-track-secondary-bg">
                        {/* In Progress Section */}
                        <div>
                            <h4 className="mb-2 text-sm font-semibold tracking-wider uppercase text-arb-warning">In Progress ({inProgressTasks.length})</h4>
                            {inProgressTasks.length > 0 ? (
                                inProgressTasks.map(task => <TaskItem key={task.id} task={task} />)
                            ) : (
                                <p className="px-2 text-xs italic text-light-gray/70">No tasks in progress.</p>
                            )}
                        </div>

                         {/* Divider */}
                        <hr className="border-arb-border/30" />

                        {/* Completed Section */}
                        <div>
                            <h4 className="mb-2 text-sm font-semibold tracking-wider uppercase text-arb-success">Completed ({completedTasks.length})</h4>
                             {completedTasks.length > 0 ? (
                                completedTasks.map(task => <TaskItem key={task.id} task={task} />)
                             ) : (
                                <p className="px-2 text-xs italic text-light-gray/70">No completed tasks.</p>
                             )}
                        </div>

                        {/* Divider */}
                        <hr className="border-arb-border/30" />

                        {/* Not Started Section */}
                        <div>
                            <h4 className="mb-2 text-sm font-semibold tracking-wider uppercase text-light-gray">Not Started ({notStartedTasks.length})</h4>
                            {notStartedTasks.length > 0 ? (
                                notStartedTasks.map(task => <TaskItem key={task.id} task={task} />)
                            ) : (
                                <p className="px-2 text-xs italic text-light-gray/70">No pending tasks.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TaskManager;