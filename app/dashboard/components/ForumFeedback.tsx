import React from 'react';
import { EyeIcon, UserIcon, CheckIcon, XIcon } from './icons';

interface ForumPost {
  title: string;
  tags: string[];
  engagement_metric_1: string | null;
  date?: string;
  feedback_status: string;
  ai_score: string;
}

interface ForumFeedbackProps {
  posts: ForumPost[];
}

const ForumFeedback: React.FC<ForumFeedbackProps> = ({ posts }) => {
  return (
    <div className="flex flex-col h-full p-4 border rounded-lg bg-cards-bg shadow-glow-sm border-arb-border">
      <h3 className="mb-4 text-lg font-semibold tracking-wider uppercase text-primary-accent">Forum post requiring feedback</h3>
      <div className="flex-grow overflow-auto scrollbar-thin scrollbar-thumb-arb-border scrollbar-track-secondary-bg">
        <table className="w-full text-sm text-left min-w-[600px]">
          <thead className="sticky top-0 z-10 text-xs uppercase text-light-gray bg-secondary-bg/50">
            <tr>
              <th scope="col" className="px-4 py-2 font-medium">Topic</th>
              <th scope="col" className="px-4 py-2 font-medium text-center">Engagement</th>
              <th scope="col" className="px-4 py-2 font-medium text-center whitespace-nowrap">Feedback task</th>
              <th scope="col" className="px-4 py-2 font-medium text-center whitespace-nowrap">AI Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-arb-border/50">
            {posts.map((post, index) => (
              <tr key={index} className="align-top cursor-pointer hover:bg-secondary-bg/30">
                <td className="px-4 py-3">
                  <p className="mb-1 font-medium text-highlights">{post.title}</p>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs bg-primary-accent/20 text-primary-accent px-1.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-center text-light-gray">
                   <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                    {/* Engagement Icons - Using placeholders */}
                    {post.engagement_metric_1 && (
                       <span className='flex items-center space-x-1 text-xs'><EyeIcon className="w-3.5 h-3.5"/> <span>{post.engagement_metric_1}</span></span>
                    )}
                     <span className='flex items-center space-x-1 text-xs'><UserIcon className="w-3.5 h-3.5" /> <span>1</span></span> {/* Placeholder user icon */}
                     {post.date && <span className="text-xs whitespace-nowrap">{post.date}</span>}
                   </div>
                </td>
                <td className="px-4 py-3 text-center">
                  {post.feedback_status === 'Complete' ? (
                    <CheckIcon className="inline-block w-5 h-5 text-arb-success" />
                  ) : (
                    <XIcon className="inline-block w-5 h-5 text-alerts" />
                  )}
                </td>
                <td className={`px-4 py-3 font-medium text-center ${parseInt(post.ai_score.split('/')[0]) === 0 ? 'text-alerts' : 'text-highlights'}`}>
                  {post.ai_score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
         {posts.length === 0 && (
           <p className="py-6 text-sm text-center text-light-gray">No forum posts requiring feedback found.</p>
        )}
      </div>
    </div>
  );
};

export default ForumFeedback;