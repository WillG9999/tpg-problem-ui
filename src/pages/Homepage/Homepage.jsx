import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col relative isolate px-6 pt-14 lg:px-8">
      {/* Top background ... */}

      {/* Hero content */}
      <div className="mx-auto max-w-2xl flex-grow py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            The first step in solving your problem is defining it.
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
            Define your problems and let the ProbUI community help it be solutioned.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/login" className="text-sm font-semibold text-gray-900">
              Click Here <span aria-hidden="true">→</span>
            </Link>
            <Link
              to="/login"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>

      {/* Approach ---------------------*/}
<div className="bg-neutral-900">
  {/* Approach */}
  <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
    {/* Title */}
    <div className="max-w-3xl mb-10 lg:mb-14">
      <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Our approach</h2>
      <p className="mt-1 text-neutral-400">This profound insight guides our comprehensive strategy — from meticulous research and strategic planning to the seamless execution of brand development and website or product deployment.</p>
    </div>
    {/* End Title */}

    {/* Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
      <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
        <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Features Image" />
      </div>
      {/* End Col */}

      {/* Timeline */}
      <div>
        {/* Heading */}
        <div className="mb-4">
          <h3 className="text-[#ff0] text-xs font-medium uppercase">
            Steps
          </h3>
        </div>
        {/* End Heading */}

        {/* Item */}
        <div className="flex gap-x-5 ms-1">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
            <div className="relative z-10 size-8 flex justify-center items-center">
              <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                1
              </span>
            </div>
          </div>
          {/* End Icon */}

          {/* Right Content */}
          <div className="grow pt-0.5 pb-8 sm:pb-12">
            <p className="text-sm lg:text-base text-neutral-400">
              <span className="text-white">Market Research and Analysis:</span>
              Identify your target audience and understand their needs, preferences, and behaviors.
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}

        {/* Item */}
        <div className="flex gap-x-5 ms-1">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
            <div className="relative z-10 size-8 flex justify-center items-center">
              <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                2
              </span>
            </div>
          </div>
          {/* End Icon */}

          {/* Right Content */}
          <div className="grow pt-0.5 pb-8 sm:pb-12">
            <p className="text-sm lg:text-base text-neutral-400">
              <span className="text-white">Product Development and Testing:</span>
              Develop digital products or services that address the needs and preferences of your target audience.
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}

        {/* Item */}
        <div className="flex gap-x-5 ms-1">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
            <div className="relative z-10 size-8 flex justify-center items-center">
              <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                3
              </span>
            </div>
          </div>
          {/* End Icon */}

          {/* Right Content */}
          <div className="grow pt-0.5 pb-8 sm:pb-12">
            <p className="text-sm md:text-base text-neutral-400">
              <span className="text-white">Marketing and Promotion:</span>
              Develop a comprehensive marketing strategy to promote your digital products or services.
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}

        {/* Item */}
        <div className="flex gap-x-5 ms-1">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
            <div className="relative z-10 size-8 flex justify-center items-center">
              <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                4
              </span>
            </div>
          </div>
          {/* End Icon */}

          {/* Right Content */}
          <div className="grow pt-0.5 pb-8 sm:pb-12">
            <p className="text-sm md:text-base text-neutral-400">
              <span className="text-white">Launch and Optimization:</span>
              Launch your digital products or services to the market, closely monitoring their performance and user feedback.
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}

        <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-hidden" href="#">
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path><path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
          Schedule a call
        </a>
      </div>
      {/* End Timeline */}
    </div>
    {/* End Grid */}
  </div>
</div>
{/* End Approach */}

      {/* Bottom background ... */}
    </div>
  );
}
