import React from "react";
import CarCard from "../Home/CarCard";
import Form from "./Form";

function BookingModal({ car }: any) {
  return (
    <form
      method="dialog"
      className="modal-box w-11/12 max-w-5xl p-6 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700"
    >
      {/* Header with Neon Gradient */}
      <div className="border-b-[1px] pb-3 mb-5 border-gray-700">
        <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          🚗 Book Your Ride
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Car Card */}
        <div className="shadow-lg p-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all">
          <CarCard car={car} />
        </div>

        <Form />
      </div>

      {/* Modal Actions */}
      <div className="modal-action mt-5 flex justify-between">
        <button className="btn text-white text-lg font-medium py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition-all">
          🚀 Confirm Booking
        </button>
        <button className="btn text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-lg px-5 py-2 transition-all">
          ❌ Close
        </button>
      </div>
    </form>
  );
}

export default BookingModal;
