import React from 'react';

const ControlPage = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600">Welcome to Control</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            What would you like to do?
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Choose from the core actions below to begin contributing to the problem-solving ecosystem.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">

            {/* Create a New Problem */}
            <div className="relative pl-16">
              <dt className="text-base font-semibold text-gray-900">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                Create a New Problem
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                Define a problem that matters to you and make it visible to others.
              </dd>
            </div>

            {/* Explore Problems */}
            <div className="relative pl-16">
              <dt className="text-base font-semibold text-gray-900">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25M8.25 9V5.25M3 18.75h18M4.5 12.75h15" />
                  </svg>
                </div>
                Explore Global Problems
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                Browse through problems submitted from different parts of the world.
              </dd>
            </div>

            {/* View Your Problems */}
            <div className="relative pl-16">
              <dt className="text-base font-semibold text-gray-900">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25h13.5v13.5H5.25z" />
                  </svg>
                </div>
                View Your Problems
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                Track and manage the problems you’ve submitted previously.
              </dd>
            </div>

            {/* Most Reacted Problems */}
            <div className="relative pl-16">
              <dt className="text-base font-semibold text-gray-900">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 9l-2 3m0 0l-2-3m2 3V3m8.485 9a9 9 0 11-16.97 0 9 9 0 0116.97 0z" />
                  </svg>
                </div>
                Most Reacted Problems
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                See which problems are receiving the most community engagement.
              </dd>
            </div>

          </dl>
        </div>
      </div>
    </div>
  );
};

export default ControlPage;
