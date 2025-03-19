import { getStoreLocations } from "@/services/api";
import React, { useEffect, useState } from "react";

function Form() {
  const [storeLocation, setStoreLocation] = useState<string[]>([]);
  const today = new Date().toISOString().split("T")[0];
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    _getStoreLocations();
  }, []);

  const _getStoreLocations = async () => {
    try {
      const res: any = await getStoreLocations();
      console.log(res);
      setStoreLocation(
        res?.storesLocations?.map(
          (store: { storeLocation: any }) => store.storeLocation
        ) || []
      );
    } catch (error) {
      console.error("Error fetching store locations:", error);
      setStoreLocation([]); // Ensures no crash on failure
    }
  };

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
            <option disabled>Choose Location</option>
            {storeLocation.map((store, idx) => (
              <option key={idx} value={store}>
                {store}
              </option>
            ))}
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
              defaultValue={today}
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
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input input-bordered w-full text-white bg-gray-800 border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
