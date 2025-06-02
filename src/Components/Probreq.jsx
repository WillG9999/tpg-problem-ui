import React, { useState, useRef } from 'react';
import MiniMap from './MiniMap';

const StyledProblemForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    statement: '',
    location: '',
    level: '',
    category: '',
    agree: false,
  });

  const [selectedCoords, setSelectedCoords] = useState(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);

  const smoothScroll = (ref, delay = 400) => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, delay);
  };

  const handleScrollToMap = () => {
    smoothScroll(mapRef, 300); // slower scroll
  };

  const handleCoordinateSelect = ([lat, lng]) => {
    const coordsString = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
    setSelectedCoords([lat, lng]);
    setFormData((prev) => ({ ...prev, location: coordsString }));
    smoothScroll(formRef, 500); // scroll back to form
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', formData);
  };

  return (
    <>
      {/* Form Section */}
      <div ref={formRef} className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
              Submit a Problem
            </h1>
            <p className="mt-1 md:text-lg text-gray-800">
              Share a challenge that needs solving. Others can add their solutions.
            </p>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-800">Why submit?</h2>
              <ul className="mt-2 space-y-2">
                {[
                  'Shape innovation',
                  'Attract the right problem-solvers',
                  'Drive local/global change',
                ].map((text) => (
                  <li className="flex gap-x-3" key={text}>
                    <svg
                      className="shrink-0 mt-0.5 size-5 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <polyline
                        points="20 6 9 17 4 12"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-gray-600">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="flex flex-col border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-10">
              <h2 className="text-xl font-semibold text-gray-800">Problem Details</h2>

              <form onSubmit={handleSubmit}>
                <div className="mt-6 grid gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="title" className="block mb-2 text-sm text-gray-700 font-medium">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="statement" className="block mb-2 text-sm text-gray-700 font-medium">
                      Statement
                    </label>
                    <textarea
                      name="statement"
                      id="statement"
                      rows="4"
                      value={formData.statement}
                      onChange={handleChange}
                      className="border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label htmlFor="location" className="block mb-2 text-sm text-gray-700 font-medium">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        value={formData.location}
                        readOnly
                        onClick={handleScrollToMap}
                        className="border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm bg-white cursor-pointer focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Click to choose on map"
                      />
                    </div>
                    <div>
                      <label htmlFor="level" className="block mb-2 text-sm text-gray-700 font-medium">
                        Level
                      </label>
                      <select
                        name="level"
                        id="level"
                        value={formData.level}
                        onChange={handleChange}
                        className="border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Select level</option>
                        <option value="local">Local</option>
                        <option value="regional">Regional</option>
                        <option value="national">National</option>
                        <option value="international">International</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="category" className="block mb-2 text-sm text-gray-700 font-medium">
                      PESTLE Category
                    </label>
                    <input
                      type="text"
                      name="category"
                      id="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mt-3 flex">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="shrink-0 mt-1.5 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500"
                  />
                  <div className="ms-3">
                    <label htmlFor="agree" className="text-sm text-gray-600">
                      I acknowledge the{' '}
                      <a className="text-blue-600 hover:underline font-medium" href="#">
                        privacy policy
                      </a>
                    </label>
                  </div>
                </div>

                <div className="mt-6 grid">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50"
                    disabled={!formData.agree}
                  >
                    Submit Problem
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500">Your problem helps inspire real-world solutions.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div
        ref={mapRef}
        className="mt-40 mb-32 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto"
      >
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div className="flex justify-center">
            <MiniMap
              selectedCoords={selectedCoords}
              onLocationSelect={handleCoordinateSelect}
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Choose Your Location
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Click on the map to pinpoint the location related to your problem.
              Once selected, the coordinates will be automatically filled in the
              form above.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyledProblemForm;
