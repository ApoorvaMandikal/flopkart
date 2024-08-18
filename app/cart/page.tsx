"use client"
import React from 'react'
import { FaceFrownIcon } from '@heroicons/react/24/outline'
import EmptyCart from './EmptyCart'
import { useCart } from '../context/CartContext'

const page = () => {
  const { cartItems, totalPrice } = useCart();

  return (
    <div className='bg-gray-100 min-h-screen flex '>
       <div className="container mx-auto px-4 py-8 flex-grow ">
        {cartItems.length === 0 ? (<EmptyCart></EmptyCart>)
        :(
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="border-b py-4">
                  <div className="flex justify-between">
                    <p>{item.title}</p>
                    <p>₹{item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-lg font-semibold">Total: ₹{totalPrice}</p>
            </div>
          </>
        )}
       
       </div>
    </div>
  )
}

export default page
