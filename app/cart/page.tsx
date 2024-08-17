import React from 'react'
import { FaceFrownIcon } from '@heroicons/react/24/outline'

const page = () => {
  return (
    <div>
       <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
       <div className='flex flex-col items-center'>
       <p >Your cart is empty! </p>
       <p><FaceFrownIcon className='size-10'></FaceFrownIcon></p>
       </div>
       </div>
    </div>
  )
}

export default page
