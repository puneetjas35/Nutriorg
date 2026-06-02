import React, { useState } from 'react'
import { FiEyeOff } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import toast from 'react-hot-toast';
import Axios from './utils/Axios';
import SummaryApi from './common/SummaryApi';
import AxiosToastError from './utils/AxiosToastError';
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""

    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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

     if(data.password !== data.confirmPassword){
       toast.error(
        "Password and confirm Password must be same"
       )
       return 
     }
    

    try {
         const response = await Axios({
        ...SummaryApi.register,
        data : data
     })

     if(response.data.error){
        toast.error(response.data.message)
     }
     if(response.data.success){
        toast.success(response.data.message)
        setData({
            name : "",
            email : "",
            password : "",
            confirmPassword : ""
        })
        navigate("/login")
     }
     
     
        
    } catch (error) {
        AxiosToastError(error)
        
    }
    
     
     
    }

    return (
        <section className='w-full container mx-auto px-2'>
            <div className='bg-white my-4 w-full max-w-lg rounded p-7 mx-auto'>
                <p className='font-semibold text-[20px]'>Welcome to Nutriorg</p>
                <form action="" className='grid gap-4 mt-6' onSubmit={handleSubmit}>
                    <div className='grid gap-1'>
                        <label htmlFor="name" className='text-start'>Name :</label>
                        <input
                            type="text"
                            id="name"
                            autoFocus
                            className='bg-blue-50 p-2 rounded outline-none focus:border-yellow-400 border'
                            value={data.name}
                            name='name'
                            placeholder='Enter Your Name'
                            onChange={handleChange} />
                    </div>

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

                    <div className='grid gap-1'>
                        <label htmlFor="password" className='text-start'>Password :</label>
                        <div className='bg-blue-50 p-2 rounded focus-within:border-[#5c8018] border flex items-center'>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                autoFocus
                                className='w-full outline-none focus:border-yellow-400 border'
                                value={data.password}
                                name='password'
                                placeholder='Enter Password'
                                onChange={handleChange} />
                            <div onClick={() => setShowPassword(preve => !preve)} className="cursor-pointer">
                                {
                                    showPassword ? (
                                        <FaEye />
                                    ) : (
                                        <FiEyeOff />
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className='grid gap-1'>
                        <label htmlFor="confirmPassword" className='text-start'>Confirm Password :</label>
                        <div className='bg-blue-50 p-2 rounded focus-within:border-[#5c8018] border flex items-center'>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                autoFocus
                                className='w-full outline-none focus:border-yellow-400 border'
                                value={data.confirmPassword}
                                name='confirmPassword'
                                placeholder='Enter Confirm Password'
                                onChange={handleChange} />
                            <div onClick={() => setShowConfirmPassword(preve => !preve)} className="cursor-pointer">
                                {
                                    showConfirmPassword ? (
                                        <FaEye />
                                    ) : (
                                        <FiEyeOff />
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <button disabled={!validValue} className={`${validValue ? "bg-[#5c8018] hover:bg-[#4a6613]" : "bg-gray-500"}
                          my-3 trcking-wide text-white py-2 rounded font-semibold`}>Register</button>
                </form>
                 
                 <p>
                    Already have account ? <Link to={"/login"} className='font-semibold text-[#5c8018] hover:text-[#4a6613]'>Login</Link>
                 </p>

            </div>

        </section>
    )
}

export default Register