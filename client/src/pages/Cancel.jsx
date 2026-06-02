import React from 'react'
import { Link } from 'react-router-dom'

const Cancel = () => {
  return (
  <div className='m-2 w-full max-w-md bg-red-200 p-4 py-5 flex flex-col justify-center items-center gap-5 rounded mx-auto'>
       <p className='text-red-800 font-bold text-lg text-center'>Order Cancelled</p>
         <Link to="/" className='border text-red-900 hover:bg-red-900 hover:text-white transition-all border-[#5c8018] px-4 py-1'>Go To Home</Link>
    </div>
  )
}

export default Cancel