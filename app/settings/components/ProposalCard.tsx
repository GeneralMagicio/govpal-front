import React, { useState } from 'react';

export type Proposal = {
  title: string;
  summary: string;
  ifItPasses: string;
  ifItDoesNotPass: string;
  link: string;
}


interface ProposalCardProps {
  proposal: Proposal;
}

const ProposalCard: React.FC<ProposalCardProps> = ({ proposal }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="transition-all duration-300 rounded-lg bg-cards-bg shadow-glow-sm hover:shadow-glow">
      <div className="p-5">
        <a href={proposal.link} target='_blank'>
          <h3 className="mb-2 text-lg font-semibold text-white">{proposal.title}</h3>
        </a>
        <p className="mb-4 text-light-gray">{proposal.summary}</p>
        
        <button 
          className="flex items-center justify-between w-full p-3 transition-colors rounded-lg text-primary-accent hover:text-highlights bg-secondary-bg bg-opacity-30"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          <span className="font-medium">
            {isExpanded ? 'Hide Outcomes' : 'View Potential Outcomes'}
          </span>
          <svg 
            className={`ml-2 w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {isExpanded && (
          <div className="mt-4 space-y-5 animate-fadeIn">
            <div className="p-4 border-l-4 rounded-lg bg-secondary-bg bg-opacity-20 border-highlights">
              <h4 className="mb-2 font-medium text-highlights">If It Passes</h4>
              <p className="text-light-gray">{proposal.ifItPasses}</p>
            </div>
            
            <div className="p-4 border-l-4 rounded-lg bg-secondary-bg bg-opacity-20 border-alerts">
              <h4 className="mb-2 font-medium text-alerts">If It Does Not Pass</h4>
              <p className="text-light-gray">{proposal.ifItDoesNotPass}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface GovernanceProposalsProps {
  proposals: Proposal[];
}

const GovernanceProposals: React.FC<GovernanceProposalsProps> = ({ proposals }) => {
  return (
    <div className="p-6 bg-cards-bg rounded-xl">
      <div className="pb-4 mb-6 border-b border-secondary-bg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Governance Proposals</h2>
            <p className="mt-1 text-sm text-light-gray">Review active proposals that may affect your ENS experience</p>
          </div>
          {/* <a 
            href="/governance" 
            className="flex items-center text-sm transition-colors text-primary-accent hover:text-highlights"
          >
            View All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a> */}
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {proposals.map((proposal, index) => (
          <ProposalCard key={index} proposal={proposal} />
        ))}
      </div>
    </div>
  );
};

export default GovernanceProposals;

export const proposals: Proposal[] = [
  {
    "title": "[EP 5.28] [Executable] Reimbursement of eth.limo's ongoing legal fees",
    "link": "https://discuss.ens.domains/t/ep-5-28-executable-reimbursement-of-eth-limo-s-ongoing-legal-fees/20004",
    "summary": "This proposal seeks reimbursement for eth.limo's legal fees incurred while operating ENS gateway services, addressing unexpected legal challenges from maintaining public infrastructure.",
    "ifItPasses": "ENS DAO will transfer 240,632.38 USDC to cover eth.limo's legal fees, enabling continued operation of their public gateway service without financial strain.",
    "ifItDoesNotPass": "eth.limo may exhaust its resources, potentially compromising its ability to maintain the public ENS gateway service and support ecosystem integrations."
  },
  {
    "title": "[EP 5.26] [Executable] Implementation of [EP 5.19]'s ENS Governance Distribution Pilot Program",
    "link": "https://discuss.ens.domains/t/ep-5-26-executable-implementation-of-ep-5-19-s-ens-governance-distribution-pilot-program/19878",
    "summary": "This proposal executes the approved Governance Distribution Pilot Program, transferring 30,000 ENS tokens to be distributed via quadratic funding to contributors across ecosystem, public goods, metagov, and bounty categories.",
    "ifItPasses": "30,000 ENS will be distributed to recipients through 2-year vesting contracts, rewarding community contributions according to the quadratic funding formula approved in EP5.19.",
    "ifItDoesNotPass": "The approved governance distribution program will not be implemented, delaying rewards for ecosystem contributors and potentially affecting future participation incentives."
  },
  {
    "title": "[EP 6.1] [Executable] Convert 6,000 ETH to USDC for DAO Operating Expenses",
    "link": "https://discuss.ens.domains/t/ep-6-1-executable-convert-6-000-eth-to-usdc-for-dao-operating-expenses/20138",
    "summary": "Proposal to convert 6,000 ETH to USDC to replenish depleted reserves, ensuring 12 months of operational runway for ENS DAO expenses including ENS Labs payments and working groups.",
    "ifItPasses": "6,000 ETH will be converted via TWAP swaps (1,000 ETH immediately and 5,000 ETH over 3 months) to USDC, managed through a new multi-sig Safe with ENS and karpatkey signers.",
    "ifItDoesNotPass": "ENS DAO will lack sufficient USDC reserves to cover operational expenses, potentially disrupting payments to service providers, working groups, and ENS Labs commitments."
  },
  {
    "title": "Accountability: [EP 5.29] Funding request for Unruggable",
    "link": "https://discuss.ens.domains/t/accountablity-ep-5-29-funding-request-for-unruggable/20013/1",
    "summary": "Follow-up detailing accountability measures for Unruggable's funding proposal, including cancelable payment streams and clear milestones for gateway development and optimization.",
    "ifItPasses": "Unruggable receives streamed payments contingent on meeting technical milestones, with built-in cancellation mechanisms allowing DAO to reclaim funds if commitments aren't met.",
    "ifItDoesNotPass": "Unruggable's gateway development work would need alternative funding, potentially delaying infrastructure improvements for ENSv2 across multiple L2 chains."
  }
];
