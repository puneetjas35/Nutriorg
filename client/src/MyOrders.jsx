import React from 'react'
import { useSelector } from 'react-redux'
import NoData from './Nodata';

const MyOrders = () => {
  const orders = useSelector(state=>state.orders.order)

  console.log("order items", orders);
  
  return (
    <div>
      <div className='bg-white shadow-md p-3 font-semibold'>
        <h1>Order</h1>
      </div>
      {
      !orders[0] && (
       <NoData />
      )
    }
    {
      orders.map((order, index)=>{
        return(
          <div key={order._id+index+"order"} className='order text-start rounded p-4 text-sm'>
                <p>Order No.{order?.OrderId}</p>
          <div className='flex items-center'>
            <img src={order.product_details.image}
            className='w-14 h-14' alt="" />
            <p className='font-semibold'>{order.product_details.name}</p>
          </div>
          
          </div>
        )
      })
    }
    </div>
  )
}

export default MyOrders