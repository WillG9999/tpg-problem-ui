import React, { useState } from 'react';
import ProblemViewer from '../../Components/ProblemViewer';
import Pagination from '../../Components/Pagination';
import Sidebar from '../../Components/ProblemViewSidebar'; // Ensure this includes the MiniMap

import Image1 from '../../assets/pexels-pixabay-268533.jpg'; // Example image import, adjust path as needed

export default function ProblemView() {
  // Dummy problem data
  const problems = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `Problem ${i + 1}`,
    description: `This is a description of problem number ${i + 1}.`,
    imageUrl: Image1 
  }));

  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(problems.length / perPage);
  const currentProblems = problems.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="w-full px-4">

{/* --- Search and Results Per Page Row --- */}
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 mt-8">

  {/* Search Section */}
  <div className="max-w-xl w-full">
    <form>
      <div className="relative z-10 flex gap-x-3 p-3 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
        <div className="w-full">
          <label htmlFor="hs-search-article-1" className="sr-only">Search article</label>
          <input
            type="text"
            name="hs-search-article-1"
            id="hs-search-article-1"
            className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="e.g. NW3 4HD"
          />
        </div>
        <div>
          <button
            type="button"
            className="size-11 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
          >
            <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  </div>

  {/* Results Per Page Dropdown */}
  <div className="w-full max-w-xs pr-6">
    <label htmlFor="perPage">
      <span className="text-sm font-medium text-gray-700"> Results per page </span>
      <select
        name="perPage"
        id="perPage"
        value={perPage}
        onChange={(e) => {
          setPerPage(Number(e.target.value));
          setCurrentPage(1);
        }}
        className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
      >
        <option value="">Please select</option>
        <option value="5">5 results</option>
        <option value="10">10 results</option>
        <option value="20">20 results</option>
        <option value="50">50 results</option>
        <option value="100">100 results</option>
      </select>
    </label>
  </div>
</div>


      {/* --- Layout: 75% Cards | 25% Sidebar --- */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Cards Column */}
        <div className="w-full md:w-3/4 flex flex-col gap-6">
          {currentProblems.map((problem) => (
            <ProblemViewer key={problem.id} problem={problem} />
          ))}

          {/* Pagination */}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
