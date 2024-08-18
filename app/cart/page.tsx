"use client";
import React, { useState } from "react";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import EmptyCart from "./EmptyCart";
import { useCart } from "../context/CartContext";

const page = () => {
  const { cartItems, totalPrice } = useCart();
  const [quantity, setQuantity] = useState(0);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <div className="container px-4 flex-grow m-10">
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          cartItems.map((item, index) => (
            <div className="flex justify-evenly">
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden mb-4 flex w-3/5 p-9"
            >
              <div className="flex flex-col">
                <div className="flex flex-row py-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 object-contain mx-4"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-black truncate">
                      {item.title}
                    </h2>
                    <p className="text-gray-700">{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center mt-8">
                  <button
                    onClick={handleDecreaseQuantity}
                    className="bg-blue-500 text-white py-2 px-4 rounded-l hover:bg-blue-600"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncreaseQuantity}
                    className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600"
                  >
                    +
                  </button>
                  <button className="text-red-800 py-2 px-4">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 w-1/4">
              <p> Total price</p>
              <p> {item.price} </p>
            </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default page;
