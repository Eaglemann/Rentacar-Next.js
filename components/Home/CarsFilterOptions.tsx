import React from "react";

function CarsFilterOptions() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
      {/* Left Section - Title */}
      <div>
        <h2
          className="text-[36px] font-bold tracking-wide  
                     bg-gradient-to-r from-blue-500 to-purple-500  
                     bg-clip-text text-transparent drop-shadow-md"
        >
          Cars Catalog
        </h2>
        <h2 className="text-gray-500 text-lg">Find the car you might like.</h2>
      </div>

      {/* Right Section - Filters */}
      <div className="flex flex-wrap gap-5">
        {/* Price Filter */}
        <select
          className="bg-white shadow-md border border-gray-300  
                     rounded-lg px-4 py-2 text-gray-700 
                     focus:ring focus:ring-blue-300 transition-all"
          defaultValue="Price"
        >
          <option disabled>Price</option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>

        {/* Model Filter */}
        <select
          className="bg-white shadow-md border border-gray-300  
                     rounded-lg px-4 py-2 text-gray-700  
                     focus:ring focus:ring-blue-300 transition-all"
          defaultValue="Choose Model"
        >
          <option disabled>Choose Model</option>
          <option>Audi</option>
          <option>BMW</option>
          <option>Mercedes</option>
        </select>
      </div>
    </div>
  );
}

export default CarsFilterOptions;
