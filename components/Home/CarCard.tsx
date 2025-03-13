/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Image from "next/image";
import { PiSeatFill } from "react-icons/pi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbManualGearboxFilled } from "react-icons/tb";

function CarCard(props: any) {
  const [car, setCar] = useState(props.car);

  return (
    <div
      className="group bg-gray-50 p-4 border border-transparent 
      hover:bg-white hover:border-blue-500 shadow-md rounded-xl 
      transition-all duration-300 cursor-pointer relative"
    >
      {/* Car Name */}
      <h2
        className="text-[24px] font-bold tracking-wide 
        bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
      >
        {car.name}
      </h2>

      {/* Price */}
      <h2 className="text-[22px] font-bold mt-2 flex items-center gap-1 text-gray-700">
        <span className="text-[14px] font-light text-gray-500">$</span>
        {car.price}
        <span className="text-[14px] font-light text-gray-500"> / day</span>
      </h2>

      {/* Car Image */}
      <Image
        src={
          car.image?.[0]?.url && car.image[0].url.trim() !== ""
            ? car.image[0].url
            : "/fallback-image.jpg"
        }
        alt={car.name}
        width={250}
        height={150}
        className="w-full h-[180px] mt-4 rounded-lg object-cover shadow-lg 
        group-hover:scale-105 transition-transform duration-300"
      />

      {/* Rent Button */}
      <div className="absolute bottom-0 left-0 w-full group-hover:opacity-100 opacity-0 transition-opacity duration-300">
        <button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white 
          px-4 py-3 rounded-b-xl shadow-xl hover:from-blue-600 hover:to-purple-600 
          transition-colors duration-300 text-xl font-bold"
        >
          Rent Now
        </button>
      </div>

      {/* Car Details */}
      <div
        className="flex justify-around mt-4 opacity-90 
        group-hover:opacity-100 transition-opacity duration-300"
      >
        {/* Car Type */}
        <div className="text-center text-gray-500">
          <TbManualGearboxFilled className="text-[22px] mb-2 text-blue-500" />
          <h2 className="text-[14px] font-light">{car.carType}</h2>
        </div>

        {/* Seats */}
        <div className="text-center text-gray-500">
          <PiSeatFill className="text-[22px] mb-2 text-blue-500" />
          <h2 className="text-[14px] font-light">{car.seats} Seats</h2>
        </div>

        {/* MPG */}
        <div className="text-center text-gray-500">
          <BsFillFuelPumpFill className="text-[22px] mb-2 text-blue-500" />
          <h2 className="text-[14px] font-light">{car.carAvg} MPG</h2>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
