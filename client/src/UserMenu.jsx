import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Divider from './Divider'
import { Link, useNavigate } from "react-router-dom";
import Axios from "./utils/Axios"
import SummaryApi from './common/SummaryApi';
import toast from 'react-hot-toast'
import AxiosToastError from './utils/AxiosToastError'
import { logout } from './store/userSlice';
import { HiOutlineExternalLink } from "react-icons/hi"
import { handleAddItemCart } from './store/cartProduct';

const UserMenu = ({ close }) => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClose = () => {
    if (close) {
      close()
    }
  }

  const handleLogout = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.logout
      })
      if (response.data.success) {
        dispatch(logout())
        dispatch(handleAddItemCart([]))
        localStorage.removeItem("accesstoken");
        localStorage.removeItem("refreshtoken");
        localStorage.removeItem("user");
        toast.success(response.data.message)
        navigate("/")
      }
    } catch (error) {
      AxiosToastError(error)

    }
  }
  return (
    <div className='leading-tight text-left ml-2'>
      <div className='font-semibold text-black text-[12px]'>My Account</div>
      <div className='text-neutral-700 text-[16px] m- flex items-center gap-2'>
        <span className='max-w-52 text-ellipsis line-clamp-1'>{user.name?.charAt(0).toUpperCase() + user.name?.slice(1)}</span>
        <Link onClick={handleClose} to={"/dashboard/profile"} className='hover:text-yellow-200'>
          <HiOutlineExternalLink className='' size={15} />

        </Link>
      </div>
      <Divider />
      <div className="text-sm text-left text-neutral-700 leading-relaxed">
        <Link onClick={handleClose} to={"/dashboard/myorders"} className="block  hover:bg-gray-100">
          My Orders
        </Link>
        <Link onClick={handleClose} to={"/dashboard/address"} className="block  hover:bg-gray-100">
          Save Address
        </Link>
        <button onClick={handleLogout} className="block w-full text-left bg-red-100">
          Log Out
        </button>

      </div>

    </div>
  )
}

export default UserMenu