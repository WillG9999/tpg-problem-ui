import React from 'react';

const ProblemRequirementBox = ({ problemFields, requirementFields }) => {
  return (
    <>
    {/* <div className="bg-blue-500 text-white p-4 rounded">Tailwind is working!</div> */}

  
    
    <div className="p-6 bg-gray-100 rounded-2xl border border-gray-300 shadow-inner">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Problem Section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Problem</h2>
          <ul className="space-y-2">
            {problemFields.map((field, index) => (
              <li key={index} className="p-3 bg-gray-50 rounded-md border border-gray-100">
                <strong className="text-gray-700">{field.label}:</strong>{' '}
                <span className="text-gray-600">{field.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirement Section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Requirement</h2>
          <ul className="space-y-2">
            {requirementFields.map((field, index) => (
              <li key={index} className="p-3 bg-gray-50 rounded-md border border-gray-100">
                <strong className="text-gray-700">{field.label}:</strong>{' '}
                <span className="text-gray-600">{field.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProblemRequirementBox;
