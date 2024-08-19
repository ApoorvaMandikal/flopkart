import React from 'react'
import { FaceSmileIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const OrderPlaced = () => {
  return (
    <div>
    <div className='flex flex-col items-center bg-gray-100 h-2/4 justify-center p-20 m-44'>
       <p >Order Succesfully placed! </p>
       <p><FaceSmileIcon className='size-10'></FaceSmileIcon></p>
       <Link className='text-red-500 m-6 text-bold' href="/"> Go Home</Link>

       </div>
       </div>
  )
}

export default OrderPlaced
