import React from 'react';

const ProblemViewer = ({ problem }) => {
  return (
<div className="w-full">
      <article className="flex items-start gap-6 border rounded-xl shadow-md bg-white p-6 w-full">
        <img
          alt=""
          src={problem.imageUrl}
          className="h-48 w-80 object-cover rounded-lg shadow-md flex-shrink-0"
        />

        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-900">{problem.title}</h3>
          <p className="mt-3 text-gray-700">{problem.description}</p>
        </div>
      </article>
    </div>
  );
};

export default ProblemViewer;
