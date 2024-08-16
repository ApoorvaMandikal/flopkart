import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const CategoriesBar = () => {
  const categories = [
    "Electronics",
    "TVs & Appliances",
    "Men",
    "Women",
    "Baby & Kids",
    "Home & Furniture",
    "Sports, Books & More",
  ];

  return (
    <div className="hidden lg:block bg-white text-black drop-shadow">
      <div className="flex justify-between items-center px-6 py-2 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center text-xs lg:text-sm font-semibold cursor-pointer space-x-2"
          >
            <span>{category}</span>
            <ChevronDownIcon className="text-gray-500 size-3" />
          </div>
        ))}
        <div className="flex items-center space-x-2 text-sm lg:text-sm font-semibold cursor-pointer">
          <span>Flights</span></div>
          <div className="flex items-center space-x-2 text-sm lg:text-sm font-semibold cursor-pointer">
          <span>Offer Zone</span>
        </div>
      </div>
    </div>
  );
};

export default CategoriesBar;
