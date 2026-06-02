import React, { useState, useEffect } from 'react'
import { useGlobalContext } from './provider/GlobalProvider';
import Axios from './utils/Axios';
import SummaryApi from './common/SummaryApi';
import toast from 'react-hot-toast';
import AxiosToastError from './utils/AxiosToastError';
import Loading from './Loading';
import { useSelector } from 'react-redux';
import { FaMinus, FaPlus } from 'react-icons/fa6'

const AddToCartButton = ({ data, selectedVariant }) => {
  const { fetchCartItem, updateCartItem, deleteCartItem } = useGlobalContext()
  const [loading, setLoading] = useState(false)
  const cartItem = useSelector(state => state.cartItem.cart)
  const [isAvailableCart, setIsAvailableCart] = useState(false)
  const [qty, setQty] = useState(0)
  const[cartItemDetails, setCartItemDetails] = useState()

 const handleAddToCart = async (e, data) => {
  console.log("product data:", data)
console.log("productId:", data?._id)
if (data?.variants?.length && !selectedVariant?._id) {
  toast.error("Please select a variant")
  return
}

  const token = localStorage.getItem("accesstoken");
  if (!token) {
    toast.error("Please login first");
    return;
  }

  e.preventDefault();
  e.stopPropagation();

  try {
    setLoading(true);


    const payload = { productId: data._id,
      variantId: selectedVariant?._id
     }
     if (selectedVariant?._id) payload.variantId = selectedVariant._id
    const response = await Axios({
      ...SummaryApi.addToCart,
      headers: { Authorization: `Bearer ${token}` },
      data: 
        payload
      
    });

    const { data: responseData } = response;

    if (responseData.success) {
      toast.success(responseData.message);
      fetchCartItem && fetchCartItem();
    } else {
      toast.error(responseData.message);
    }

  } catch (error) {
    AxiosToastError(error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    const checkingItem = cartItem.some(item => item.productId?._id === data?._id &&
    (selectedVariant?._id ? item.variantId === selectedVariant._id : true))

    setIsAvailableCart(checkingItem)
    const product = cartItem.find(item => item.productId?._id === data?._id &&
(selectedVariant?._id ? item.variantId === selectedVariant._id : true))
    setQty(product?.quantity || 0)
    setCartItemDetails(product)
  }, [data, cartItem, selectedVariant])

  const increaseQty = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    updateCartItem(cartItemDetails?._id,qty+1)
  }

  const decreaseQty = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if(qty === 1){
        deleteCartItem(cartItemDetails?._id)
    }else{

        updateCartItem(cartItemDetails?._id,qty-1)
    }
  }

  return (
    <div className="w-full">
      {isAvailableCart ? (
        <div className="flex justify-end items-center w-full rounded-lg p-1">
          {/* Quantity buttons on the right */}
          <div className="flex items-center gap-1">
            <button
              onClick={decreaseQty}
              className="w-6 h-6 bg-[rgb(60,120,90)] text-white rounded-md flex items-center justify-center transition"
            >
              <FaMinus size={10} />
            </button>

            <span className="px-1 font-semibold text-white">{qty}</span>

            <button
              onClick={increaseQty}
              className="w-6 h-6 bg-[rgb(60,120,90)] text-white rounded-md flex items-center justify-center transition"
            >
              <FaPlus size={10} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={(e) => handleAddToCart(e, data)}
          className="w-full font-medium text-white rounded-md py-1 text-center"
          type="button"
        >
          {loading ? <Loading /> : "Add To Cart"}
        </button>
      )}
    </div>
  )
}

export default AddToCartButton