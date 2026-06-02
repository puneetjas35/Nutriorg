import React, { useState } from 'react'
import { FiEyeOff } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import toast from 'react-hot-toast';
import Axios from './utils/Axios';
import SummaryApi from './common/SummaryApi';
import AxiosToastError from './utils/AxiosToastError';
import { Link, useNavigate } from "react-router-dom";


const ForgotPassword = () => {
    const [data, setData] = useState({
        
        email: ""

    })
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })

    }
   
    const validValue = Object.values(data).every(el => el)

    const handleSubmit =async(e) =>{
     e.preventDefault()
    

    try {
         const response = await Axios({
        ...SummaryApi.forgot_password,
        data : data
     })

     if(response.data.error){
        toast.error(response.data.message)
     }
     if(response.data.success){
        toast.success(response.data.message)
          navigate("/verification-otp",{
            state : data
        })
        setData({
            email : ""
        })
      
     }
     
     
        
    } catch (error) {
        AxiosToastError(error)
        
    }
    
     
     
    }

    return (
        <section className='w-full container mx-auto px-2'>
            <div className='bg-white my-4 w-full max-w-lg rounded p-7 mx-auto'>
                <p className='font-semibold text-[20px] mb-2'>Forgot Password</p>
                <form action="" className='grid gap-4 mt-6' onSubmit={handleSubmit}>
            

                    <div className='grid gap-1'>
                        <label htmlFor="email" className='text-start'>Email :</label>
                        <input
                            type="email"
                            id="email"
                            autoFocus
                            className='bg-blue-50 p-2 rounded outline-none focus:border-yellow-400 border'
                            value={data.email}
                            placeholder='Enter Your Email'
                            name='email'

                            onChange={handleChange} />
                    </div>

                    <button disabled={!validValue} className={`${validValue ? "bg-[#5c8018] hover:bg-[#4a6613]" : "bg-gray-500"}
                          my-3 trcking-wide text-white py-2 rounded font-semibold`}>Send Otp</button>
                </form>
                 
                 <p>
                    Already have an Account ? <Link to={"/login"} className='font-semibold text-[#5c8018] hover:text-[#4a6613]'>Login</Link>
                 </p>

            </div>

        </section>
    )
}

export default ForgotPassword