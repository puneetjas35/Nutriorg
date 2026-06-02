import React from 'react'
import { useGlobalContext } from './provider/GlobalProvider'
import { FaCartShopping } from 'react-icons/fa6'
import { DisplayPriceInRupees } from './utils/DisplayPriceInRupees'
import { Link } from 'react-router-dom'
import { FaCaretRight } from 'react-icons/fa6'
import { useSelector } from 'react-redux'

const CartMobileLink = () => {
    const { totalPrice, totalQty } = useGlobalContext()
    const cartItem = useSelector(state => state.cartItem.cart)

    return (
        <>
            {
                cartItem[0] && (
                    <div className="p-2 sticky bottom-4">
                        <div className="bg-[#5c8018] text-neutral-100 rounded px-2 py-2 flex items-center justify-between gap-3 text-sm lg:hidden">
                            <div className='flex items-center gap-2'>
                                <div className='p-2 bg-[#1b5a40] rounded w-fit'>
                                    <FaCartShopping size={20} />
                                </div>

                                <div className='text-xs'>
                                    <p>{totalQty} items</p>
                                    <p>{DisplayPriceInRupees(totalPrice)}</p>
                                </div>
                            </div>

                            <Link to={"/cart"} className='flex items-center gap-1'>
                                <span className='text-sm'>View Cart</span>
                                <FaCaretRight />
                            </Link>

                        </div>
                    </div>
                )
            }
        </>


    )
}

export default CartMobileLink