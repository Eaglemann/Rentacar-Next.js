import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
      <div className="flex-col justify-center space-y-6">
        <h2
          className="text-[40px] md:text-[60px] font-bold tracking-wide
                     bg-gradient-to-r from-blue-500 to-purple-500
                     bg-clip-text text-transparent drop-shadow-md
                     hover:drop-shadow-lg transition-all duration-300 ease-in-out"
        >
          Luxury Vehicles at Your Fingertips
        </h2>

        <h2
          className="text-[20px] md:text-[24px] pr-20 font-semibold tracking-wide 
                     bg-gradient-to-r from-blue-500 to-purple-500 
                     bg-clip-text text-transparent drop-shadow-md 
                     hover:drop-shadow-lg transition-all duration-300 ease-in-out"
        >
          Secure your premium driving experience today!
        </h2>

        <button
          className="p-3 mt-5 bg-blue-500 text-white font-bold px-6 rounded-full
                     hover:scale-105 transition-all duration-300 ease-in-out
                     shadow-lg hover:shadow-xl hover:bg-blue-600 active:scale-95"
        >
          Explore
        </button>
      </div>

      <div className="relative">
        <Image
          // Change the hero logo
          src="/hero.png"
          alt="hero"
          width={400}
          height={500}
          className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  );
}

export default Hero;
