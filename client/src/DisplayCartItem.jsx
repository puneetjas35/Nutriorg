import React from 'react'
import { IoClose } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from './provider/GlobalProvider'
import { DisplayPriceInRupees } from './utils/DisplayPriceInRupees'
import { FaCaretRight } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import AddToCartButton from './AddToCartButton'
import imageEmpty from "./assets/empty_cart.webp"
import toast from 'react-hot-toast'

const DisplayCartItem = ({ close }) => {
    const { notDiscountTotalPrice, totalPrice, totalQty } = useGlobalContext()
    const cartItem = useSelector(state => state.cartItem.cart)
    const user = useSelector(state => state.user)
    const navigate = useNavigate()

    const redirectToCheckoutPage = () => {
        if (user?._id) {
            navigate("/checkout")
            if(close){
                close()
            }
            return
        }
        toast("Please Login")
    }


    return (
        <section className='bg-neutral-900 fixed z-50 top-0 bottom-0 right-0 left-0 bg-opacity-70'>
            <div className='bg-white w-full max-w-sm min-h-screen max-h-screen ml-auto'>
                <div className='flex items-center p-4 shadow-md gap-3 justify-between'>
                    <h2 className='font-semibold'>Cart</h2>
                    <Link to={"/"} className='lg:hidden'>
                        <IoClose size={25} />
                    </Link>
                    <button onClick={close} className='hidden lg:block'>
                        <IoClose size={25} />
                    </button>
                </div>
                <div className='min-h-[75vh] h-full bg-blue-50 max-h-[calc(100vh-150px)] p-2 flex flex-col gap-4'>
                    {/* Display Items */}
                    {
                        cartItem[0] ? (
                            <>
                                <div className='flex items-center p-2 bg-blue-100 text-blue-500 rounded-full px-4 py-2  justify-between'>
                                    <p>Your total Savings</p>
                                    <p>{DisplayPriceInRupees(notDiscountTotalPrice - totalPrice)}</p>
                                </div>
                                <div className='bg-white rounded-lg p-4 grid gap-2 overflow-auto'>
                                    {
                                        cartItem[0] && (
                                            cartItem.map((item, index) => {
                                                return (
                                                    <div key={item._id + "cartItemDisplay"} className='flex w-full gap-4'>
                                                        <div className='w-16 h-16 min-h-16 min-w-16 border rounded'>
                                                            <img src={item?.variantId?.image || item?.productId?.image} alt=""
                                                                className='object-scale-down h-full' />
                                                        </div>
                                                        <div className='w-full max-w-sm mt-4'>
                                                            <p className='text-xs text-ellipsis line-clamp-2'>{item?.productId?.title}</p>
                                                            <p className='font-semibold'>{DisplayPriceInRupees(item?.variantId?.price || item?.productId?.price)}</p>
                                                            <p className="text-xs text-gray-500">
                                                                {item?.variantId?.label}
                                                            </p>
                                                        </div>
                                                        <div className='bg-[#709825]  h-8 w-20 rounded-lg mt-4'>
                                                            <AddToCartButton data={item?.productId}
                                                                selectedVariant={item?.variantId}
                                                            />
                                                        </div>
                                                    </div>

                                                )
                                            })
                                        )
                                    }

                                </div>
                                <div className='bg-white p-4'>
                                    <h3 className='font-semibold'>Billing Details</h3>
                                    <div className='flex gap-4 justify-between ml-1'>
                                        <p>Items Total</p>
                                        <p className='flex items-center gap-2'><span className='line-through text-neutral-400'>{DisplayPriceInRupees(notDiscountTotalPrice)}</span><span>{DisplayPriceInRupees(totalPrice)}</span></p>
                                    </div>
                                    <div className='flex gap-4 justify-between ml-1'>
                                        <p>Total Quantity</p>
                                        <p className='flex items-center gap-2'>{totalQty} Item</p>
                                    </div>
                                    <div className='flex gap-4 justify-between ml-1'>
                                        <p>Delivery Charge</p>
                                        <p className='flex items-center gap-2'>Free</p>
                                    </div>
                                    <div className='font-semibold flex ml-1 items-center justify-between gap-4'>
                                        <p>Grand Total</p>
                                        <p>{DisplayPriceInRupees(totalPrice)}</p>
                                    </div>

                                </div>

                            </>
                        ) : (
                            <div className='bg-white flex flex-col justify-center items-center'>
                                <img
                                    src={imageEmpty}
                                    className='w-full h-full object-scale-down'
                                />
                                <Link onClick={close} to={"/"} className='block bg-[#5c8018] text-white px-4 py-2 rounded'>Shop Now</Link>
                            </div>
                        )
                    }

                </div>
                {
                    cartItem[0] && (
                        <div className='p-1'>
                            <div className='text-start bg-[#5c8018] text-neutral-100 px-4 font-bold text-base p-4 sticky bottom-3 rounded flex items-center  gap-4  justify-between'>
                                <div>
                                    {DisplayPriceInRupees(totalPrice)}
                                </div>


                                <button onClick={redirectToCheckoutPage} className='flex items-center gap-2'>Proceed
                                    <span>
                                        <FaCaretRight />
                                    </span>
                                </button>
                            </div>
                        </div>

                    )
                }


            </div>
        </section>
    )
}

export default DisplayCartItem