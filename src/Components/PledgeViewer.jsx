import React, { useState } from 'react';

const pledgeTypes = ['Entrepreneur', 'Company', 'Government', 'Political Party', 'Other Entity'];

const pledgers = {
  Entrepreneur: ['Alice', 'Bob'],
  Company: ['Acme Corp', 'InnovateX'],
  Government: ['Dept of Transport', 'Local Council'],
  'Political Party': ['Green Future Party'],
  'Other Entity': ['Community Group A'],
};

const pledgesDetails = {
  Alice: 'Alice pledged to deploy low-cost bike rentals in the area.',
  Bob: 'Bob is prototyping a ride-sharing platform.',
  'Acme Corp': 'They’re investing in local electric bus infrastructure.',
  InnovateX: 'Launching an AI route optimizer trial.',
  'Dept of Transport': 'Allocated funding for rural bus expansion.',
  'Local Council': 'Organizing public consultations.',
  'Green Future Party': 'Proposed free green transport policy.',
  'Community Group A': 'Running a petition for rail service reinstatement.',
};

export default function PledgeViewer() {
  const [selectedType, setSelectedType] = useState('Entrepreneur');
  const [selectedPledger, setSelectedPledger] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Filter below to see who has contributed to the resultion</h2>

      {/* Toggle buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {pledgeTypes.map((type) => (
          <button
            key={type}
            onClick={() => {
              setSelectedType(type);
              setSelectedPledger(null);
            }}
            className={`px-4 py-2 rounded-full border ${
              selectedType === type
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* List of pledgers (can be styled as accordion later) */}
      <div className="border rounded-lg p-4 bg-gray-50 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{selectedType}s</h3>
        <ul className="space-y-2">
          {pledgers[selectedType]?.map((name) => (
            <li key={name}>
              <button
                onClick={() => setSelectedPledger(name)}
                className={`w-full text-left px-4 py-2 rounded ${
                  selectedPledger === name
                    ? 'bg-indigo-100 text-indigo-800 font-medium'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Selected pledge detail section */}
      {selectedPledger && (
        <div className="flex items-start space-x-6 border-t pt-6">
          <div className="w-1/4 font-semibold text-gray-900">Selected:</div>
          <div className="w-3/4">
            <h4 className="text-xl font-bold text-indigo-700 mb-2">{selectedPledger}</h4>
            <p className="text-gray-700">{pledgesDetails[selectedPledger]}</p>
          </div>
        </div>
      )}
    </div>
  );
}
