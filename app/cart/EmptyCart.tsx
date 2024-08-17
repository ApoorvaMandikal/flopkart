import React from 'react'
import { FaceFrownIcon } from '@heroicons/react/24/outline'

const EmptyCart = () => {
  return (
    <div className='flex flex-col items-center bg-white h-2/4 justify-center '>
       <p >Your cart is empty! </p>
       <p><FaceFrownIcon className='size-10'></FaceFrownIcon></p>
       </div>
  )
}

export default EmptyCart
