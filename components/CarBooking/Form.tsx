import { BookingCreatedContext } from "@/app/context/BookingCreatedContext";
import { getStoreLocations, createBooking } from "@/services/api";
import React, { use, useContext, useEffect, useState } from "react";

function Form({ car }: any) {
  const [storeLocation, setStoreLocation] = useState<string[]>([]);
  const { showToastMessage, setShowToastMessage } = useContext(
    BookingCreatedContext
  );
  const today = new Date().toISOString().split("T")[0];
  const [formValue, setFormValue] = useState({
    pickupLocation: "",
    pickupDate: "",
    returnDate: "",
    pickupTime: "",
    returnTime: "",
    phoneNumber: "",
    username: "denistola",
    carList: "",
  });

  useEffect(() => {
    _getStoreLocations();
  }, []);

  useEffect(() => {
    if (car) {
      setFormValue({
        ...formValue,
        carList: car.id,
      });
    }
  }, [car]);

  const _getStoreLocations = async () => {
    try {
      const res: any = await getStoreLocations();
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

  const handleChange = (event: any) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitRequest = async () => {
    const createCarBooking = await createBooking(formValue);
    if (createCarBooking) {
      setShowToastMessage(true);
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
          <select
            className="select select-bordered w-full 
          text-white bg-gray-800 border-gray-600 rounded-lg 
          focus:ring-2 focus:ring-cyan-500"
            name="pickupLocation"
            onChange={handleChange}
          >
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
              name="pickupDate"
              onChange={handleChange}
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
              name="returnDate"
              onChange={handleChange}
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
              name="pickupTime"
              onChange={handleChange}
              className="input input-bordered w-full text-white bg-gray-800 border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400 font-medium mb-1">
              ⏰ Return Time
            </label>
            <input
              type="time"
              name="returnTime"
              onChange={handleChange}
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
            name="phoneNumber"
            onChange={handleChange}
            className="input input-bordered w-full text-white bg-gray-800 border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        {/* Modal Actions */}
        <div className="modal-action mt-5 flex justify-between">
          <button
            className="btn text-white text-lg font-medium
         py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500
          to-blue-500 hover:opacity-90 transition-all"
            onClick={handleSubmitRequest}
          >
            🚀 Confirm Booking
          </button>
          <button className="btn text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-lg px-5 py-2 transition-all">
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
