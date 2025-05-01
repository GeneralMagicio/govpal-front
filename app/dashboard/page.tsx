'use client';

import React from 'react';
import Head from 'next/head';

// Import Section Components (ensure paths are correct)
import DelegateIdentification from './components/DelegateIdentification';
import VoteList from './components/VoteList';
import ForumFeedback from './components/ForumFeedback';
import DelegateScore from './components/DelegateScore';
import ActivityFeed from './components/ActivityFeed';

// Import Shared Chatbot Component
import { activityData, forumData, offchainData, onchainData, scoreData } from './mockData';
import Chatbot from '../settings/components/Chatbox';


// --- Define interfaces for type safety ---
interface Vote {
  title: string; id_reference: string; author_snippet: string; time_remaining: string; vote_status: string | null; reason_status: string;
}
interface ForumPost {
  title: string; tags: string[]; engagement_metric_1: string | null; date?: string; feedback_status: string; ai_score: string;
}
interface ActivityItem { type: string; subject: string; action: string; }
// --- End interfaces ---


const DashboardPage: React.FC = () => {
  // Extract data with types
  const onchainVotes: Vote[] = onchainData.data.onchain_votes;
  const offchainVotes: Vote[] = offchainData.data.offchain_votes;
  const forumPosts: ForumPost[] = forumData.data.forum_feedback_posts;
  const dipScore = scoreData.data.dip_score_filter;
  const activityFeed: ActivityItem[] = activityData.data.activity_feed;

  const delegateName = "Zeptimus.eth"; // Placeholder delegate name

  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-primary-bg">
      <Head>
        <title>Dashboard | GovPal</title>
        <meta name="description" content="Delegate Governance Dashboard" />
      </Head>

      {/* Optional subtle background */}
      <div className="absolute inset-0 bg-grid-pattern bg-dots-size opacity-[0.03] pointer-events-none"></div>

      <main className="relative z-10 p-4 md:p-6 lg:p-8"> {/* Responsive padding */}
        {/* Main Grid Layout - adjusted for potentially better spacing */}
        <div className="grid grid-cols-6 grid-rows-10 gap-4 md:gap-6 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)]"> {/* Responsive gap and height */}

          {/* Delegate Identification (R1, C1) */}
          <div className="col-span-2 col-start-1 row-start-1">
            <DelegateIdentification name={delegateName} imageUrl='https://avatars.githubusercontent.com/u/74430951?v=4' />
          </div>

          {/* Onchain Votes (R2-3, C1-3) */}
          <div className="col-span-2 col-start-1 row-span-4 row-start-2 overflow-hidden"> {/* Added overflow-hidden */}
            <VoteList title="ONCHAIN VOTES" votes={onchainVotes} />
          </div>

          {/* Offchain Votes (R4-5, C1-3) */}
          <div className="col-span-2 col-start-1 row-span-4 row-start-6 overflow-hidden"> {/* Added overflow-hidden */}
            <VoteList title="OFFCHAIN VOTES" votes={offchainVotes} />
          </div>

          {/* Forum Posts (R2-5, C4-5) */}
          <div className="col-span-3 col-start-3 row-start-2 overflow-hidden row-span-8"> {/* Added overflow-hidden */}
            <ForumFeedback posts={forumPosts} />
          </div>

          {/* Delegate Score (R4-5, C5-6) */}
           <div className="col-span-2 col-start-5 row-start-1">
            <DelegateScore scores={dipScore} />
           </div>

          {/* Activity Feed (R2-5, C6) */}
          <div className="col-span-1 col-start-6 row-start-2 overflow-hidden row-span-8"> {/* Added overflow-hidden */}
            <ActivityFeed activities={activityFeed} />
          </div>

        </div>
      </main>

      {/* Chatbot Feature */}
      <Chatbot />

    </div>
  );
};

export default DashboardPage;