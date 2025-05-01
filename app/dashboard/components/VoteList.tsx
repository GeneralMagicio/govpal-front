import React from 'react';
import { CheckIcon } from './icons';

interface Vote {
  title: string;
  id_reference: string;
  author_snippet: string;
  time_remaining: string;
  vote_status: string | null;
  reason_status: string; // "Reason pending" or "Reason provided"
}

interface VoteListProps {
  title: string;
  votes: Vote[];
}

const VoteList: React.FC<VoteListProps> = ({ title, votes }) => {
  const getVoteStatusClass = (status: string | null): string => {
    if (status === 'Voted for') return 'text-arb-success'; // Green
    if (status === 'Voted against') return 'text-alerts'; // Red
    return 'text-light-gray'; // Default/Pending
  };

  const getReasonStatusComponent = (status: string) => {
    if (status === 'Reason provided') {
      return (
        <span className="flex items-center text-xs text-arb-success">
          <CheckIcon className="w-4 h-4 mr-1" /> Reason
        </span>
      );
    }
    return (
      <span className="text-xs text-light-gray">{status}</span>
    );
  };

  return (
    <div className="flex flex-col h-full p-4 border rounded-lg bg-cards-bg shadow-glow-sm border-arb-border">
      <h3 className="mb-4 text-lg font-semibold tracking-wider uppercase text-primary-accent">{title}</h3>
      <div className="flex-grow pr-2 space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-arb-border scrollbar-track-secondary-bg">
        {votes.length > 0 ? votes.map((vote, index) => (
          <div key={index} className="p-3 border rounded-md cursor-pointer hover:bg-secondary-bg/30 bg-secondary-bg border-arb-border/50">
            <p className="mb-1 text-sm font-medium text-white">{vote.title}</p>
            <div className="flex flex-wrap mb-2 text-xs gap-x-3 gap-y-1 text-light-gray"> {/* Added flex-wrap */}
              <span>{vote.id_reference}</span>
              <span>by {vote.author_snippet}</span>
              <span>{vote.time_remaining}</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className={`text-xs font-medium ${getVoteStatusClass(vote.vote_status)}`}>
                {vote.vote_status ?? 'Vote Pending'}
              </span>
              {getReasonStatusComponent(vote.reason_status)}
            </div>
          </div>
        )) : (
           <p className="py-4 text-sm text-center text-light-gray">No active votes.</p>
        )}
      </div>
    </div>
  );
};

export default VoteList;