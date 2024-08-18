"use client"; // This makes the component a Client Component

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const pathname = usePathname();
  const { cartItems } = useCart();

  return (
    <nav
      className="text-white flex items-center h-14"
      style={{ backgroundColor: "#2874f0" }} // Flipkart signature blue color
    >
      <div className="flex w-full justify-between items-center lg:mx-28 py-1 px-4">
        <div className="text-xl italic font-bold pl-4 lg:pl-16 mr-4">
          <Link href="/">Flopkart</Link>
        </div>
        <div className="flex-grow relative max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <MagnifyingGlassIcon className="absolute text-blue-500 h-6 w-6 right-4 top-2" />
        </div>
        <div className="hidden sm:flex items-center mx-2 lg:mx-4">
          <button className="bg-white text-blue-500 font-bold px-4 py-2 hover:bg-blue-600 hover:text-white w-24 sm:w-28 lg:w-32 h-8 flex items-center justify-center">
            Login
          </button>
        </div>

        {pathname !== "/cart" && (
          <>
            <div className="hidden lg:flex text-base font-semibold space-x-4 mx-2 lg:mx-4">
              <Link href="/">Become a Seller</Link>
            </div>
            <div className="hidden lg:flex items-center text-base font-semibold mx-2 lg:mx-4">
              <Link href="/">More</Link>
              <ChevronDownIcon className="text-white h-4 w-4 ml-1" />
            </div>

            <div className="sm:flex items-center mx-2 lg:mx-4 text-base font-semibold">
              <Link
                href="/cart"
                className="flex justify-between text-center px-3 py-2"
              >
                <div className=" relative mx-1 px-2 py-1">
                  <ShoppingCartIcon className="text-white size-6 mx-1" />
                  <div className=" absolute text-xs bg-red-600 text-white size-4 rounded-2xl right-0 top-0 ">
                    {cartItems.length}
                  </div>
                </div>
                <p className="items-center py-1">Cart </p>
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
