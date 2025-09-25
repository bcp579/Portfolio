// app/components/SkillAccordion.js
"use client";

import React from 'react';

// --- SVG Icons ---
const CodeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const DatabaseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
  </svg>
);

const ServerIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <line x1="6" x2="6" y1="6" y2="6" />
    <line x1="6" x2="6" y1="18" y2="18" />
  </svg>
);

const ChevronDownIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const iconMap = {
  code: CodeIcon,
  database: DatabaseIcon,
  server: ServerIcon,
};

export default function SkillAccordion({ skillGroup, isOpen, onClick }) {
  const Icon = iconMap[skillGroup.icon];

  return (
    <div className="bg-[var(--background)] rounded-lg overflow-hidden">
      <button 
        onClick={onClick} 
        className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
      >
        <div className="flex items-center space-x-4">
          <Icon className="w-6 h-6 text-[hsl(225,69%,61%)]" />
          <div>
            <h3 className="text-xl font-bold text-[var(--foreground)]">{skillGroup.category}</h3>
            <p className="text-sm text-[var(--foreground)] opacity-70">{skillGroup.level}</p>
          </div>
        </div>
        <ChevronDownIcon className={`w-6 h-6 text-[var(--foreground)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {/* This is the updated part */}
      <div className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-6 space-y-4">
          {skillGroup.items.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-[var(--foreground)]">{item.name}</span>
                <span className="text-[var(--foreground)] opacity-70">{item.percentage}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[hsl(225,69%,81%)] bg-opacity-10 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-[hsl(225,69%,51%)]"
                  style={{ width: item.percentage }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}