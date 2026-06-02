import React, {  useState } from 'react'
import { FiEyeOff } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import toast from 'react-hot-toast';
import Axios from './utils/Axios';
import SummaryApi from './common/SummaryApi';
import AxiosToastError from './utils/AxiosToastError';
import { Link, useNavigate } from "react-router-dom";
import fetchUserDetails from './utils/fetchUserDetails';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

const Login = () => {
    const [data, setData] = useState({
        
        email: "",
        password: ""

    })
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

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
        ...SummaryApi.login,
        data : data
     })

     if(response.data.error){
        toast.error(response.data.message)
     }
     if(response.data.success){
        toast.success(response.data.message)
        localStorage.setItem('accesstoken', response.data.data.accessToken)
        localStorage.setItem('refreshtoken', response.data.data.refreshToken)
        
        const userDetails = await fetchUserDetails()
        console.log("Fetched userDetails:", userDetails)
        dispatch(setUserDetails(userDetails.data.data))

        setData({
            email : "",
            password : "",
        })
        navigate("/")
     }
     
     
        
    } catch (error) {
        AxiosToastError(error)
        
    }
    
     
     
    }

    return (
        <section className='w-full container mx-auto px-2'>
            <div className='bg-white my-4 w-full max-w-lg rounded p-7 mx-auto'>
                <p className='font-semibold text-[20px]'>Login</p>
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
                        <Link to={"/forgot-password"} className='block ml-auto hover:text-[#5c8018]'>Forgot Password ? </Link>
                    </div>

                    <button disabled={!validValue} className={`${validValue ? "bg-[#5c8018] hover:bg-[#4a6613]" : "bg-gray-500"}
                          my-3 trcking-wide text-white py-2 rounded font-semibold`}>Login</button>
                </form>
                 
                 <p>
                    Don't have an Account ? <Link to={"/register"} className='font-semibold text-[#5c8018] hover:text-[#4a6613]'>Register</Link>
                 </p>

            </div>

        </section>
    )
}

export default Login