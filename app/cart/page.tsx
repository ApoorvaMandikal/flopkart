import React from 'react'
import { FaceFrownIcon } from '@heroicons/react/24/outline'
import EmptyCart from './EmptyCart'

const page = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex '>
       <div className="container mx-auto px-4 py-8 flex-grow ">
       <EmptyCart></EmptyCart>
       </div>
    </div>
  )
}

export default page
