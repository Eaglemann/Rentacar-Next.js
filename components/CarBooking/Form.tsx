import React from "react";


function Form() {
  return (
    <div>
      {/* Booking Form */}
      <div className="space-y-5">
        {/* Location */}
        <div className="flex flex-col">
          <label className="text-gray-400 font-medium mb-1">
            📍 Pickup Location
          </label>
          <select className="select select-bordered w-full text-white bg-gray-800 border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500">
            <option disabled selected>
              Choose Location
            </option>
            <option>Berlin</option>
            <option>Munich</option>
          </select>
        </div>

        {/* Date & Time Inputs */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-400 font-medium mb-1">
              📅 Pickup Date
            </label>
            <input
              type="date"
              className="input input-bordered w-full text-white bg-gray-800 border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400 font-medium mb-1">
              📅 Return Date
            </label>
            <input
              type="date"
              className="input input-bordered w-full text-white bg-gray-800 border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        {/* Time Inputs */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-400 font-medium mb-1">
              ⏰ Pickup Time
            </label>
            <input
              type="time"
              className="input input-bordered w-full text-white bg-gray-800 border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400 font-medium mb-1">
              ⏰ Return Time
            </label>
            <input
              type="time"
              className="input input-bordered w-full text-white bg-gray-800 border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="text-gray-400 font-medium mb-1">
            📞 Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter phone number"
            className="input input-bordered w-full text-white bg-gray-800 border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
