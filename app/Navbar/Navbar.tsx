"use client"; // This makes the component a Client Component

import React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav
      className="text-white flex items-center h-14"
      style={{ backgroundColor: "#2874f0" }}
    >
      <div className="flex w-full justify-between items-center lg:mx-28 py-1 px-4">
        <div className="text-xl italic font-bold pl-4 lg:pl-16 mr-4">
          <Link href="/">Flopkart</Link>
        </div>

        <div className="flex-grow relative max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <MagnifyingGlassIcon className="absolute text-blue-500 h-6 w-6 right-4 top-2" />
        </div>

        <div className="hidden sm:flex items-center mx-2 lg:mx-4">
          <button className="bg-white text-blue-600 font-bold px-4 py-2 hover:bg-blue-600 hover:text-white w-24 sm:w-28 lg:w-32 h-8 flex items-center justify-center">
            Login
          </button>
        </div>

        <div className="hidden lg:flex text-base font-semibold space-x-4 mx-2 lg:mx-4">
          <Link href="/">Become a Seller</Link>
        </div>

        <div className="hidden lg:flex items-center text-base font-semibold mx-2 lg:mx-4">
          <Link href="/">More</Link>
          <ChevronDownIcon className="text-white h-4 w-4 ml-1" />
        </div>

        <div className="hidden sm:flex items-center mx-2 lg:mx-4">
          <button className="bg-green-500 px-3 py-2 rounded hover:bg-green-600">
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
