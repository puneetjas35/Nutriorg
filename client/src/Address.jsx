import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import AddAddress from './pages/AddAddress'
import { MdDelete } from "react-icons/md"
import { MdEdit } from "react-icons/md"
import EditAddressDetail from './EditAddressDetail'
import Axios from './utils/Axios'
import SummaryApi from './common/SummaryApi'
import toast from 'react-hot-toast'
import AxiosToastError from './utils/AxiosToastError'
import { useGlobalContext } from './provider/GlobalProvider'

const Address = () => {
  const addressList = useSelector(state => state.addresses.addressList)
  const [openAddress, setOpenAddress] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [editData, setEditData] = useState({})
  const { fetchAddress } = useGlobalContext() 

  const handleDisableAddress = async(id)=>{
    try {
      const response = await Axios({
        ...SummaryApi.disableAddress,
        data : {
          _id : id
        }
      })
       if(response.data.success){
        toast.success("Address Removed")
        if(fetchAddress){
          fetchAddress()
        }
       }

    } catch (error) {
      AxiosToastError(error)
    }
  }

  return (
    <div>
      <div className='bg-white shadow-lg px-2 py-2 flex items-center justify-between gap-4'>
        <h2 className='font-semibold text-ellipsis line-clamp-1'>Address</h2>
        <button onClick={() => setOpenAddress(true)} className='border border-[#5c8018] text-[#4e6425] rounded-full hover:bg-[#5c8018] hover:text-white px-3 py-1'>
          Add Address
        </button>
      </div>


      <div className='text-start bg-blue-50 p-2'>
        {
          addressList.map((address, index) => {
            return (


              <div
              key={address._id}
               className={`border rounded p-3 m-2 gap-3 flex bg-white ${!address.status ? 'hidden' : ''}`}>
                <div className='w-full'>
                  <p>{address.address_line}</p>
                  <p>{address.city}</p>
                  <p>{address.state}</p>
                  <p>{address.country} - {address.pincode}</p>
                  <p>{address.mobile}</p>
                </div>
                <div className=''>
                  <button onClick={()=>{
                    setOpenEdit(true)
                    setEditData(address)
                  }}  className='bg-green-200 p-1 rounded hover:text-white hover:bg-[#5c8018] '>
                    <MdEdit />
                  </button>
                  <button onClick={()=>
                    handleDisableAddress(address._id)
                  } className='bg-red-200 p-1 rounded hover:text-white hover:bg-red-600'>
                  <MdDelete size={17} />
                  </button>
                </div>
              </div>

            )
          })
        }
        <div onClick={() => setOpenAddress(true)} className='h-16 bg-blue-50 border-2 border-dotted flex items-center justify-center cursor-pointer'>
          Add Address
        </div>
      </div>

      {
        openAddress && (
          <AddAddress close={() => setOpenAddress(false)} />
        )
      }
      {
        openEdit && (
          <EditAddressDetail data={editData} close={()=> setOpenEdit(false)} />
        )
      }
    </div>
  )
}

export default Address