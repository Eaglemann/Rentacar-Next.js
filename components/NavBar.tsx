import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

function NavBar() {
  return (
    <div className="flex items-center justify-between p-5 shadow-sm border-b-[1px]">
      <div>
        {/* Modify this line to change the logo on the Navbar */}
        <Image src="/logo.png" alt="Logo" width={40} height={20} />
      </div>
      <div className="flex gap-5">
        <h2
          className="hover:bg-blue-500 px-3 cursor-pointer 
        p-2 rounded-full hover:text-white"
        >
          Home
        </h2>
        <h2
          className="hover:bg-blue-500 px-3 cursor-pointer 
        p-2 rounded-full hover:text-white"
        >
          History
        </h2>
        <h2
          className="hover:bg-blue-500 px-3 cursor-pointer 
        p-2 rounded-full hover:text-white"
        >
          Contact Us
        </h2>
      </div>
      <UserButton />
    </div>
  );
}

export default NavBar;
