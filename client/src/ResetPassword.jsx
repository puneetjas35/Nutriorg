import React, { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { FiEyeOff } from 'react-icons/fi'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SummaryApi from './common/SummaryApi'
import toast from 'react-hot-toast'
import AxiosToastError from './utils/AxiosToastError'
import Axios from './utils/Axios'

const ResetPassword = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        newPassword: "",
        confirmPassword: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const validValue = Object.values(data).every(el => el)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(data.newPassword !== data.confirmPassword){
            toast.error("New password and Confirm password must be same")
            return
        }
        try {
            const response = await Axios({
                ...SummaryApi.resetPassword,
                data: data
            })

            if (response.data.error) {
                toast.error(response.data.message)
            }
            if (response.data.success) {
                toast.success(response.data.message)
                navigate("/login")
                setData({
                    email: "",
                    newPassword: "",
                    confirmPassword: ""
                })

            }



        } catch (error) {
            AxiosToastError(error)

        }



    }

    useEffect(() => {
        if (!location?.state?.data?.success) {
            navigate('/')
        }
        if (location?.state?.email) {
            setData((preve) => {
                return {
                    ...preve,
                    email: location?.state?.email
                }
            })
        }

    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })

    }



    return (
        <section className='w-full container mx-auto px-2'>
            <div className='bg-white my-4 w-full max-w-lg rounded p-7 mx-auto'>
                <p className='font-semibold text-[20px] mb-2'>Enter Your Password</p>
                <form action="" className='grid gap-4 mt-6' onSubmit={handleSubmit}>


                    <div className='grid gap-1'>
                        <label htmlFor="newPassword" className='text-start'>New Password</label>


                        <div className='bg-blue-50 p-2 rounded focus-within:border-[#5c8018] border flex items-center'>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                autoFocus
                                className='w-full outline-none focus:border-yellow-400 border'
                                value={data.newPassword}
                                name='newPassword'
                                placeholder='Enter your new password'
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
                        <label htmlFor="confirmPassword" className='text-start'>Confirm Password</label>


                        <div className='bg-blue-50 p-2 rounded focus-within:border-[#5c8018] border flex items-center'>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="password"
                                autoFocus
                                className='w-full outline-none focus:border-yellow-400 border'
                                value={data.confirmPassword}
                                name='confirmPassword'
                                placeholder='Enter your confirm password'
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
                          my-3 trcking-wide text-white py-2 rounded font-semibold`}>Change Password</button>
                </form>

                <p>
                    Already have an Account ? <Link to={"/login"} className='font-semibold text-[#5c8018] hover:text-[#4a6613]'>Login</Link>
                </p>

            </div>

        </section>
    )
}

export default ResetPassword