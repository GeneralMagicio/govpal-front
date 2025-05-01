import React from 'react';
// import Image from 'next/image';

interface DelegateIdentificationProps {
  name: string;
  imageUrl?: string;
}

const DelegateIdentification: React.FC<DelegateIdentificationProps> = ({ name, imageUrl = "" }) => {
  return (
    <div className="flex items-center h-full p-4 space-x-4 border rounded-lg bg-cards-bg shadow-glow-sm border-arb-border">
      <div className="flex items-center justify-center w-16 h-16 overflow-hidden border-2 rounded-full bg-secondary-bg border-primary-accent">
        {/* Using placeholder logic */}
        <img src={imageUrl} alt="Delegate Profile Picture" className="object-cover w-full h-full bg-secondary-bg" />
        {/* Placeholder text if needed */}
        {/*!imageUrl && <span className="text-2xl font-bold text-primary-accent">{name ? name.charAt(0).toUpperCase() : '?'}</span>*/}
      </div>
      <h2 className="text-2xl font-bold truncate text-highlights">{name}</h2>
    </div>
  );
};

export default DelegateIdentification;