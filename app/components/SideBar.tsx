import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden lg:block w-2/4 bg-white p-4 m-2">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Categories</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Electronics</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">TVs & Appliances</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Men</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Women</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Baby & Kids</a></li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Price</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Under ₹1,000</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">₹1,000 - ₹5,000</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">₹5,000 - ₹10,000</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">₹10,000 - ₹20,000</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Over ₹20,000</a></li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Brand</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Samsung</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Apple</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Sony</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">LG</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">OnePlus</a></li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Customer Ratings</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-700 hover:text-blue-600">4★ & above</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">3★ & above</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">2★ & above</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">1★ & above</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
