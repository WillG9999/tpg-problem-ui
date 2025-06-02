import React from 'react';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';

const events = [
  {
    title: 'Problem Created',
    date: '2025-05-30',
    description: 'User submitted a new problem regarding local transport issues.',
  },
  {
    title: 'Requirement Added',
    date: '2025-06-01',
    description: 'A requirement for more frequent buses was added.',
  },
  {
    title: 'Votes Reached 100',
    date: '2025-06-05',
    description: 'The problem gained traction and reached 100 votes.',
  },
];

export default function CustomHorizontalTimeline() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Timeline</h2>
      <div className="relative flex items-start justify-between space-x-8 overflow-x-auto pb-6">
        {events.map((event, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[200px]">
            {/* Connector Line */}
            {idx !== events.length - 1 && (
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gray-300 z-0" />
            )}

            {/* Icon Circle */}
            <div className="z-10 w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full ring-4 ring-white">
              <CalendarDaysIcon className="w-5 h-5" />
            </div>

            {/* Event Content */}
            <div className="mt-4 text-center">
              <div className="text-sm text-gray-500">{event.date}</div>
              <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mt-1">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
