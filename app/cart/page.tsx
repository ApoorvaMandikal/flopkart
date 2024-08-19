"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import EmptyCart from "./EmptyCart";
import { useCart } from "../context/CartContext";
import { IProduct } from "../types/product";

const Page = () => {
  const router = useRouter();

  const { cartItems, totalPrice, addToCart, clearCart } = useCart();
  const discount = (20 / 100) * totalPrice;
  const discPrice = (totalPrice - discount).toFixed(2);

  const handleIncreaseQuantity = (product: IProduct) => {
    addToCart(product, 1);
  };

  const handleDecreaseQuantity = (product: IProduct, quantity: number) => {
    if (quantity > 1) {
      addToCart(product, -1);
    } else {
      addToCart(product, -quantity);
    }
  };

  const handleRemove = (product: IProduct) => {
    addToCart(product, -(product.quantity || 1));
  };

  const handlePlaceOrder = () => {
    clearCart();
    router.push("/orderplaced");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <div className="px-4 flex-grow m-10 w-full">
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className="flex lg:w-full bg-white  p-4 mb-2 text- shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)] ">
              <span> Add more than 300 to get 20% off!</span>
            </div>
            <div className="flex justify-evenly flex-col lg:flex-row">
              <div className="bg-white shadow-md rounded-lg overflow-hidden w-full lg:w-3/5 border-t">
                {cartItems.map((item, index) => (
                  <div key={index} className="mb-4 flex p-9 border-t">
                    <div className="flex flex-col w-full">
                      <div className="flex flex-row py-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-48 size-48 object-contain mx-4"
                        />
                        <div className="p-4 overflow-y-auto">
                          <h2 className="text-lg font-semibold text-black truncate">
                            {item.title}
                          </h2>
                          <p className="text-gray-700">{item.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center mt-8">
                        <button
                          onClick={() =>
                            handleDecreaseQuantity(item, item.quantity)
                          }
                          className="bg-blue-500 text-white py-2 px-4 rounded-l hover:bg-blue-600"
                        >
                          -
                        </button>
                        <span className="px-4 py-2 text-center">
                          {item.quantity || 1}
                        </span>
                        <button
                          onClick={() => handleIncreaseQuantity(item)}
                          className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600"
                        >
                          +
                        </button>
                        <button
                          className="text-red-800 py-2 px-4"
                          onClick={() => handleRemove(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex lg:w-full justify-end shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)] ">
                  <button
                    className="bg-orange-600 text-white py-5 px-14 my-3 mx-8 "
                    onClick={handlePlaceOrder}
                  >
                    {" "}
                    Place Order{" "}
                  </button>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 my-4 lg:my-0 w-full lg:w-1/4 lg:h-48 ">
                <h2 className="text-xl font-semibold mb-4">Price Details</h2>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Price ({cartItems.length} items) </span>
                  <span className="text-gray-900 font-medium">
                    {totalPrice}
                  </span>
                </div>
                {totalPrice > 300 ? (
                  <>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Discount</span>
                      <span className="text-gray-900 font-medium">
                        {discount}
                      </span>
                    </div>{" "}
                    <div className="border-t mt-4 pt-4 flex justify-between">
                      <span className="text-lg font-semibold">
                        Total Amount
                      </span>
                      <span className="text-lg font-semibold text-gray-900">
                        {discPrice}
                      </span>
                    </div>{" "}
                  </>
                ) : (
                  <div className="border-t mt-4 pt-4 flex justify-between">
                    <span className="text-lg font-semibold">Total Amount</span>
                    <span className="text-lg font-semibold text-gray-900">
                      {totalPrice}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
