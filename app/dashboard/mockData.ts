// Placeholder data (as provided in the prompt)
export const onchainData = {
  section: "Onchain Votes",
  data: {
    onchain_votes: [
      {
        title: "TMC ARB Recommendation",
        id_reference: "#9d13c",
        author_snippet: "0xb4c0...6f13",
        time_remaining: "3 days remaining",
        vote_status: null,
        reason_status: "Reason pending",
      },
      {
        title: "TMC Stablecoin Recommendation",
        id_reference: "#dd38e",
        author_snippet: "0xb4c0...6f13",
        time_remaining: "3 days remaining",
        vote_status: "Voted against",
        reason_status: "Reason pending",
      },
      {
        title: "OpCo - Oversight and Transparency Committee (OAT) Elections",
        id_reference: "#b4228",
        author_snippet: "0xb4c0...6f13",
        time_remaining: "3 days remaining",
        vote_status: "Voted for",
        reason_status: "Reason provided",
      },
    ],
  },
};

export const offchainData = {
  section: "Offchain Votes",
  data: {
    offchain_votes: [
      {
        title: "TMC ARB Recommendation",
        id_reference: "#9d13c",
        author_snippet: "0xb4c0...6f13",
        time_remaining: "3 days remaining",
        vote_status: null,
        reason_status: "Reason pending",
      },
      {
        title: "TMC Stablecoin Recommendation",
        id_reference: "#dd38e",
        author_snippet: "0xb4c0...6f13",
        time_remaining: "3 days remaining",
        vote_status: "Voted against",
        reason_status: "Reason pending",
      },
      {
        title: "OpCo - Oversight and Transparency Committee (OAT) Elections",
        id_reference: "#b4228",
        author_snippet: "0xb4c0...6f13",
        time_remaining: "3 days remaining",
        vote_status: "Voted for",
        reason_status: "Reason provided",
      },
    ],
  },
};

export const forumData = {
  section: "Forum Posts Requiring Feedback",
  data: {
    forum_feedback_posts: [
      {
        title: "About the proposals category",
        tags: ["#Proposals"],
        engagement_metric_1: "1",
        date: "Mar 2023",
        feedback_status: "Complete",
        ai_score: "3/10",
      },
      {
        title:
          "[Non-constitutional] Let's get our huddles (aka. video calls) in order",
        tags: ["#Proposals"],
        engagement_metric_1: "1.8k",
        feedback_status: "Complete",
        ai_score: "3/10",
      },
      {
        title:
          "[Non-constitutional][RFC] ARB Incentives: User Acquisition for dApps & Protocols",
        tags: ["#Proposals"],
        engagement_metric_1: null,
        feedback_status: "Complete",
        ai_score: "3/10",
      },
      {
        title:
          "Proposal [Non-constitutional]: Top-up for Hackathon Continuation Program",
        tags: ["#Proposals"],
        engagement_metric_1: null,
        feedback_status: "Incomplete",
        ai_score: "0/10",
      },
      {
        title: "DeFi Renaissance Incentive Program (DRIP)",
        tags: ["#Proposals", "#proposal"],
        engagement_metric_1: null,
        feedback_status: "Complete",
        ai_score: "3/10",
      },
    ],
  },
};

export const scoreData = {
  section: "DIP Score and Filter",
  data: {
    dip_score_filter: [
      { month: 'JANUARY', score: 83 }, 
      { month: 'FEBRUARY', score: 45 }, 
      { month: 'MARCH', score: 91 },    
      { month: 'APRIL', score: 22 },     
      { month: 'MAY', score: 78 },       
      { month: 'JUNE', score: 67 },
      { month: 'JULY', score: 50 },      
      { month: 'AUGUST', score: 99 },    
      { month: 'SEPTEMBER', score: 31 }, 
      { month: 'OCTOBER', score: 65 },   
      { month: 'NOVEMBER', score: 88 },  
      { month: 'DECEMBER', score: 29 }   
    ]
  },
};

export const activityData = {
  section: "Activity Feed",
  data: {
    activity_feed: [
      {
        type: "Offchain vote",
        subject: "Snapshot Vote: Arbitrum Grants Program - Round 5 Funding",
        action: "Voted for",
      },
      {
        type: "Onchain vote",
        subject: "AIP-7: Security Council Election Implementation",
        action: "Voted Against",
      },
      {
        type: "Offchain vote",
        subject: "Temperature Check: Proposed Sequencer Fee Rebate Model",
        action: "Voted For", // Note: Case difference from JSON, standardized below
      },
      {
        type: "Forum activity",
        subject: "Discussion: Potential ARB Staking Mechanism Enhancements",
        action: "Added a comment",
      },
      {
        type: "Forum activity",
        subject: "[Draft AIP] Framework for Arbitrum Orbit Chain Incentives",
        action: "Created this proposal",
      },
    ],
  },
};
