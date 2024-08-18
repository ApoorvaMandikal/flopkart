"use client";
import React from 'react';
import { IProductCardProps } from '../types/product';

  const ProductCard = ({ product, currency }: IProductCardProps) => {

    const formattedPrice = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: currency,
      }).format(product.price);


  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden ">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-black truncate">{product.title}</h2>
        <p className="text-gray-700">{formattedPrice}</p>
        <button
        //   onClick={addToCart}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
