import React from "react";

function SearchInputs() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <h2
        className="text-center text-[24px] font-semibold tracking-wide
                   bg-gradient-to-r from-blue-500 to-purple-500 
                   bg-clip-text text-transparent drop-shadow-md"
      >
        Search what you need
      </h2>

      <div className="flex justify-center w-full">
        <div
          className="flex bg-white shadow-md p-3 px-6 gap-4 rounded-full divide-x
                     border border-gray-300 transition-all duration-300 ease-in-out
                     hover:shadow-lg"
        >
          {/* Location Input */}
          <div className="flex items-center gap-3 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Location"
              className="p-2 outline-none bg-transparent text-lg text-gray-600 
                         focus:ring focus:ring-blue-300 rounded-md"
            />
          </div>

          {/* Date Input */}
          <div className="flex items-center px-4">
            <input
              type="date"
              className="p-2 outline-none bg-transparent text-lg text-gray-500
                         focus:ring focus:ring-blue-300 rounded-md cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchInputs;
