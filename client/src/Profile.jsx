import React, { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { FaRegUserCircle } from "react-icons/fa"
import Axios from "./utils/Axios"
import { setUserDetails } from "./store/userSlice"
import { useEffect } from "react"
import SummaryApi from "./common/SummaryApi"
import AxiosToastError from "./utils/AxiosToastError"
import toast from "react-hot-toast"
import fetchUserDetails from "./utils/fetchUserDetails"

const Profile = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const fileInputRef = useRef()
  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
    mobile: user.mobile,
  })
   const [loading,setLoading] = useState(false)
   

  useEffect(() => {
    if (user) {
      setUserData({
        name: user.name || "",
        email: user.email || "",
        mobile: user.mobile || ""
      })
    }
  }, [user])

  const handleOnchange = (e) => {
    const { name, value } = e.target
    setUserData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const handleUploadAvatar = async (e) => {
    try {
      const file = e.target.files[0]
      if (!file) return

      const formData = new FormData()
      formData.append("avatar", file)

      const response = await Axios.put(
        "/api/user/upload-avatar",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )

      dispatch(setUserDetails(response.data.data))
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const response = await Axios({
        ...SummaryApi.updateUserDetails,
        data : userData
      })

      const { data : responseData } = response
      if(responseData.success){
           toast.success(responseData.message)
           const userData = await fetchUserDetails()
           dispatch(setUserDetails(userData.data))
      }
      
    } catch (error) {
      AxiosToastError(error)

    }finally{
      setLoading(false)

    }
  }

  return (
    <div className="flex flex-col ml-4 items-start gap-4">

      {/* Avatar */}
      <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex items-start justify-center">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <FaRegUserCircle size={90} />
        )}
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleUploadAvatar}
      />

      {/* Edit Button */}
      <button
        onClick={() => fileInputRef.current.click()}
        className="bg-white border border-[rgb(92,128,24)] hover:bg-yellow-500 px-6 py-1 rounded-full font-medium"
      >
        Edit
      </button>

      {/* name,mobile, email, change password  */}
      <form action="" onSubmit={handleSubmit} className="my-4 grid gap-4 w-full">
        <div className="grid text-left">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="py-2 bg-blue-50 outline-none border focus-within:border-[rgb(92,128,24)] rounded"
            value={userData.name}
            name='name'
            onChange={handleOnchange}
            required
          />
        </div>

        <div className="grid text-left">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="py-2 bg-blue-50 outline-none border focus-within:border-[rgb(92,128,24)] rounded"
            value={userData.email}
            name='email'
            onChange={handleOnchange}
            required
          />
        </div>

        <div className="grid text-left">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            placeholder="Enter your mobile"
            className="py-2 bg-blue-50 outline-none border focus-within:border-[rgb(92,128,24)] rounded"
            value={userData.mobile}
            name='mobile'
            onChange={handleOnchange}
            required
          />
        </div>

        <button type="submit" className="border px-4 py-2 font-semibold hover:bg-[rgb(92,128,24)] rounded border-[rgb(92,128,24)]">
          {
            loading ? "Loading..." : "Submit"
          }
          </button>
      </form>

    </div>
  )
}

export default Profile