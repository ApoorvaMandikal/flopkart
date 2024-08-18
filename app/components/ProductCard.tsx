"use client";
import React, { useState } from "react";
import { IProductCardProps } from "../types/product";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product, currency }: IProductCardProps) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    addToCart(product);
    setQuantity(1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    addToCart(product);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currency,
  }).format(product.price);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden ">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-black truncate">
          {product.title}
        </h2>
        <p className="text-gray-700">{formattedPrice}</p>
        {quantity > 0 ? (
          <div className="flex items-center mt-4 w-full">
            <button onClick={handleDecreaseQuantity} className="bg-blue-500 text-white py-2 px-4 rounded-l hover:bg-blue-600">
              -
            </button>
            <span className="px-4 py-2 w-full text-center">{quantity}</span>
            <button onClick={handleIncreaseQuantity} className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600">
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
