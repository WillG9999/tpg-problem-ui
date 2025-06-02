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
<div className="bg-white">
  <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
    {/* Title */}
    <div className="max-w-3xl mb-10 lg:mb-14">
      <h2 className="text-black font-semibold text-2xl md:text-4xl md:leading-tight">Our approach</h2>
      <p className="mt-2 text-gray-700">
        Our approach begins with the clear definition of problems and their associated requirements, captured at any scale—from local communities to global challenges. Each problem is geotagged and categorized to provide clarity, relevance, and actionable context.
      </p>
            <p className="mt-4 text-gray-700">
We then track these problems through a transparent lifecycle, where community members propose, refine, and prioritize requirements linked to real solutions. This process ensures full traceability from the initial problem definition to every proposed outcome.
      </p>

      <p className="mt-4 text-gray-700">
Critically, the platform enables the public to hold individuals, companies, governments, and other entities accountable by making all data, discussions, and actions fully visible. Through this open system, everyone has equal access to information, empowering communities to drive change, monitor progress, and verify that promises translate into outcomes.
      </p>
            <p className="mt-4 text-gray-700">
By combining local insight with global visibility, we create a living system of accountability and action that brings clarity, participation, and pressure where it's needed most.
      </p>


      

    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
      <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
        <img
          className="w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop"
          alt="Features Image"
        />
      </div>

      {/* Timeline */}
      <div>
        <div className="mb-4">
          <h3 className="text-black-500 text-xs font-medium uppercase">Steps</h3>
        </div>

{[1, 2, 3, 4].map((step, i) => {
  const titles = [
    "Problem Identification and Local Insight",
    "Requirement Definition and Community Collaboration",
    "Transparency, Awareness, and Accountability",
    "Solution Deployment and Traceable Impact",
  ];
  const descriptions = [
    "Clearly identify problems at the local, regional, national, or global level, capturing geographic and contextual metadata to ensure relevance and clarity.",
    "Define requirements linked to each problem and invite individuals, companies, governments, and other entities to collaborate openly on potential solutions.",
    "Make all problems, requirements, and actions visible to the public to encourage broad participation and hold stakeholders accountable through full transparency.",
    "Deploy and track solutions with continuous feedback and visible results, ensuring every step from problem to resolution is traceable and community-verified.",
  ];
  
  return (
            <div key={step} className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-gray-300 text-blue-500 font-semibold text-xs uppercase rounded-full">
                    {step}
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base text-gray-700">
                  <span className="text-black font-medium">{titles[i]}:</span> {descriptions[i]}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  </div>
</div>
    </div>
  );
}
