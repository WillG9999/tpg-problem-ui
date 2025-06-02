import React, { useState } from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/24/solid';
import CustomTimeline from '../../Components/CustomTimeline';
import PledgeViewer from '../../Components/PledgeViewer';
import CommentsSection from '../../Components/CommentsSection';
const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
];

const accordionData = [
  {
    title: 'Accordion Item 1',
    content: 'Detailed information related to the first item.',
  },
  {
    title: 'Accordion Item 2',
    content: 'Some more details in the second section of the accordion.',
  },
  {
    title: 'Accordion Item 3',
    content: 'Content for the third item goes here.',
  },
];

export default function IndiProblemView() {
  const [votes, setVotes] = useState(0);
  const [pledges, setPledges] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="min-h-screen bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-20">
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              This is where the problem title will be displayed
            </p>
            <p className="mt-6 text-lg text-gray-600">
              This is where the votes and number of pledges will be displayed. Users can vote on the problem
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-24">
            {/* Left side */}
            <div className="flex flex-col items-start justify-center">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  The Problem Statement
                </p>
                <p className="mt-6 text-lg text-gray-600">Text text text</p>
                <dl className="mt-10 space-y-8 text-base text-gray-600">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute top-1 left-1 size-5 text-indigo-600"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Right side */}
            <div className="flex flex-col items-start justify-center">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Requirements for solution
                </p>
                <p className="mt-6 text-lg text-gray-600">testt</p>
                <dl className="mt-10 space-y-8 text-base text-gray-600">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute top-1 left-1 size-5 text-indigo-600"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>








      {/* --------------Scroll-down Section----------- */}


      <div className="bg-white-50 py-12 sm:py-40 border-t border-gray-200">

          <div className="mx-auto max-w-2xl lg:text-center mb-20">
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              Problem Resolution Activty
            </p>
            <p className="mt-6 text-lg text-gray-600">
              See below who has pledged to fix this problem and the tracebility of there actions!
            </p>
          </div>

        <PledgeViewer/>

          <CustomTimeline/>

          <CommentsSection/>
      </div>
    </>
  );
}
