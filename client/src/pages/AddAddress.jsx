import React from 'react'
import { useForm} from "react-hook-form"
import Axios from "../utils/Axios"
import SummaryApi from '../common/SummaryApi'
import toast from "react-hot-toast"
import AxiosToastError from "../utils/AxiosToastError"
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from '../provider/GlobalProvider'

const AddAddress = ({ close }) => {
    const { register, handleSubmit, reset } = useForm()
    const {fetchAddress } = useGlobalContext()


    const onSubmit = async(data)=>{
      console.log("data", data);

      try {
        const response = await Axios({
          ...SummaryApi.createAddress,
          data : {
            address_line : data.addressline,
            city : data.city,
            state : data.state,
            country : data.country,
            pincode : data.pincode,
            mobile : data.mobile
          }
        })

       const { data : responseData } = response
        if(responseData.success){
          toast.success(responseData.message)
          if(close){
            close()
            reset()
            fetchAddress()
          }
        }
      } catch (error) {
        AxiosToastError(error)
        
      }
      
    }

  return (
    <section className='bg-black fixed top-0 left-0 bottom-0 right-0 z-50 bg-opacity-70'>
      <div className='bg-white p-4 w-full max-w-lg mt-6 mx-auto rounded max-h-[90vh] overflow-y-auto'>
        <div className='flex mb-2 items-center justify-between gap-4'>
          <h2 className='font-semibold text-[19px]'>Add Address</h2>
         <button onClick={close} className='hover:text-red-500'>
          <IoClose size={25} />
         </button>
        </div>
         <form  onSubmit={handleSubmit(onSubmit)}  action="" className='text-start grid gap-2'>
            <div className='grid'>
                <label htmlFor="addressline">Address Line :</label>
                <input 
                type="text"
                id='addressline'
                className='border bg-blue-50 p-1 rounded'
                {...register("addressline", {required: true})}
                />
            </div>
            <div className='grid'>
                <label htmlFor="city">City :</label>
                <input 
                type="text"
                id='city'
                className='border bg-blue-50 p-1 rounded'
                {...register("city", {required: true})}
                />
            </div>
             <div className='grid'>
                <label htmlFor="state">State :</label>
                <input 
                type="text"
                id='state'
                className='border bg-blue-50 p-1 rounded'
                {...register("state", {required: true})}
                />
            </div>
             <div className='grid'>
                <label htmlFor="pincode">Pincode :</label>
                <input 
                type="text"
                id='pincode'
                className='border bg-blue-50 p-1 rounded'
                {...register("pincode", {required: true})}
                />
            </div>
             <div className='grid'>
                <label htmlFor="country">Country :</label>
                <input 
                type="text"
                id='country'
                className='border bg-blue-50 p-1 rounded'
                {...register("country", {required: true})}
                />
            </div>
             <div className='grid'>
                <label htmlFor="mobile">Mobile No. :</label>
                <input 
                type="text"
                id='mobile'
                className='border bg-blue-50 p-1 rounded'
                {...register("mobile", {required: true})}
                />
            </div>
            <button type='submit' className='bg-yellow-500 w-full py-2 font-semibold mt-3 hover:bg-yellow-600'>Submit</button>
         </form>
      </div>
    </section>
  )
}

export default AddAddress