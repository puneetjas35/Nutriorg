import React, { useEffect, useRef, useState } from 'react'
import { FiEyeOff } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import toast from 'react-hot-toast';
import Axios from './utils/Axios';
import SummaryApi from './common/SummaryApi';
import AxiosToastError from './utils/AxiosToastError';
import { Link, useLocation, useNavigate } from "react-router-dom";


const OtpVerification = () => {
    const [data, setData] = useState(["", "", "", "", "", ""])

    const navigate = useNavigate()
    const inputRef = useRef([])
    const validValue = data.every(el => el)
    const location = useLocation()

    useEffect(() => {
        if(!location?.state?.email){
           navigate("/forgot-password")
        }
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()


        try {
            const response = await Axios({
                ...SummaryApi.forgot_password_otp_verification,
                data: {
                    otp : data.join(""),
                    email : location?.state?.email
                }
            })

            if (response.data.error) {
                toast.error(response.data.message)
            }
            if (response.data.success) {
                toast.success(response.data.message)
                setData(["", "", "", "", "", ""])
                navigate("/reset-password", {
                    state : {
                       data : response.data,
                       email : location?.state?.email

                    }
                })
            }



        } catch (error) {
            AxiosToastError(error)

        }



    }

    return (
        <section className='w-full container mx-auto px-2'>
            <div className='bg-white my-4 w-full max-w-lg rounded p-7 mx-auto'>
                <p className='font-semibold text-[20px] mb-2'>Enter OTP</p>
                <form action="" className='grid gap-4 mt-6' onSubmit={handleSubmit}>


                    <div className='grid gap-1'>
                        <label htmlFor="otp" className='text-start'>Enter Your OTP</label>
                        <div className='flex items-center gap-2 justify-betwee mt-3'>
                            {
                                data.map((element, index) => {
                                    return (
                                        <input
                                            key={"otp" + index} type="Text"
                                            id="otp"
                                            ref={(ref) => {
                                                inputRef.current[index] = ref
                                                return ref
                                            }} value={data[index]}
                                            maxLength={1}
                                            autoFocus
                                            onChange={(e) => {
                                                const value = e.target.value
                                                console.log(value);
                                                const newData = [...data]
                                                newData[index] = value
                                                setData(newData)
                                                if (value && index < 5) {
                                                    inputRef.current[index + 1].focus()
                                                }
                                            }} className='bg-blue-100 p-2 w-full max-w-17 rounded outline-none focus:border-yellow-400 border text-center font-semibold'
                                        />

                                    )
                                })
                            }
                        </div>

                    </div>

                    <button disabled={!validValue} className={`${validValue ? "bg-[#5c8018] hover:bg-[#4a6613]" : "bg-gray-500"}
                          my-3 trcking-wide text-white py-2 rounded font-semibold`}>Verify OTP</button>
                </form>

                <p>
                    Already have an Account ? <Link to={"/login"} className='font-semibold text-[#5c8018] hover:text-[#4a6613]'>Login</Link>
                </p>

            </div>

        </section>
    )
}

export default OtpVerification