import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

function NavBar() {
  return (
    <div className="flex items-center justify-between p-5 shadow-md border-b-[1px] border-gray-200">
      <div>
        {/* Modify this line to change the logo on the Navbar */}
        <Image src="/logo.png" alt="Logo" width={40} height={20} />
      </div>

      <div className="flex gap-8">
        <h2
          className="text-lg font-semibold tracking-wide hover:bg-blue-500 px-4 py-2 rounded-full 
                     hover:text-white transition-all duration-300 ease-in-out
                     hover:scale-105"
        >
          Home
        </h2>
        <h2
          className="text-lg font-semibold tracking-wide hover:bg-blue-500 px-4 py-2 rounded-full 
                     hover:text-white transition-all duration-300 ease-in-out
                     hover:scale-105"
        >
          History
        </h2>
        <h2
          className="text-lg font-semibold tracking-wide hover:bg-blue-500 px-4 py-2 rounded-full 
                     hover:text-white transition-all duration-300 ease-in-out
                     hover:scale-105"
        >
          Contact Us
        </h2>
      </div>

      <div className="flex items-center">
        <UserButton />
      </div>
    </div>
  );
}

export default NavBar;
