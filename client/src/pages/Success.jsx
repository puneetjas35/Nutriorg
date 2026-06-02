import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Success = () => {
    const location = useLocation()
      console.log("location",);
      

  return (
    <div className='m-2 w-full max-w-md bg-[#dbedbb] p-4 py-5 flex flex-col justify-center items-center gap-5 rounded mx-auto'>
       <p className='text-[#5c8018] font-bold text-lg text-center'>{Boolean(location?.state?.text) ? location?.state?.text : "Payment"} Successfully Completed</p>
         <Link to="/" className='border text-green-900 hover:bg-[#5c8018] hover:text-white transition-all border-[#5c8018] px-4 py-1'>Go To Home</Link>
    </div>
  )
}

export default Success