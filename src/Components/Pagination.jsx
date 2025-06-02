import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];

  // Optional: only show up to 5 pages for now
  const maxVisible = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  const endPage = Math.min(totalPages, startPage + maxVisible - 1);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex justify-center gap-1 text-gray-900 mt-10 pt-1 pb-8 ">
      {/* Prev */}
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 disabled:opacity-50"
          aria-label="Previous page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>

      {/* Page Numbers */}
      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            onClick={() => onPageChange(number)}
            className={`block size-8 rounded border text-center text-sm font-medium transition-colors ${
              number === currentPage
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'border-gray-200 hover:bg-gray-50'
            }`}
          >
            {number}
          </button>
        </li>
      ))}

      {/* Next */}
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 disabled:opacity-50"
          aria-label="Next page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
