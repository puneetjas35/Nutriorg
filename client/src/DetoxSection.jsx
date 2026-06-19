import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import SummaryApi from "./common/SummaryApi"
import AxiosToastError from "./utils/AxiosToastError"
import Axios from "./utils/Axios"
import toast from "react-hot-toast";
import { useGlobalContext } from "./provider/GlobalProvider";
import AddToCartButton from "./AddToCartButton";


const DetoxSection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
 

    

   useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await Axios({
                ...SummaryApi.getProduct("detox")
            });

            if (response.data.success) {
                setProducts(response.data.data); // your product array
            }
        } catch (error) {
            console.log(error);
        }
    };

    fetchProducts();
}, []);





    return (
        <div className="main_detox_section pt-10 md:pt-12 bg-[#f4f2e9]">
            {/* Heading */}
           <div className="heading px-4 py-4 md:px-6 flex items-center justify-between leading-[1.4em]">
                <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold uppercase tracking-normal text-[#9A8F96] hover:text-[#6a5b5c] transition-colors duration-300">
                    <a href="#" className="font-[Montserrat,sans-serif]">
                        DETOX JUICES
                    </a>
                </h2>

                <a
                    href="/category/detox-juice"
                    className="text-[14px] sm:text-[16px] font-[Montserrat,sans-serif] text-[#A18E96] underline underline-offset-4"
                >
                    View all
                </a>
            </div>

            {/* Swiper */}
            <div className="relative w-full px-2 sm:px-4 overflow-visible mt-4 md:mt-6">


                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    loop={products.length > 4}
                   breakpoints={{
                          0: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 10,
                          },
                          640: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 14,
                          },
                          768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 16,
                          },
                          1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 20,
                          },
                        }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product._id} className="h-full flex">

                            {/* Product Image */}
                            <div className="bg-white rounded-xl shadow flex flex-col w-full h-full pt-3 pb-2">

                                <Link to={`/product/${product.slug || product._id}`}>
                                    <div className="relative group w-full h-[100px] sm:h-[140px] md:h-[180px] flex items-center justify-center">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="absolute inset-0 max-w-full max-h-full object-contain transition-opacity duration-300 group-hover:opacity-0"

                                        />
                                        <img
                                            src={product.hoverImage}
                                            alt={product.name}
                                            className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                        />
                                    </div>
                                </Link>


                                <div className="flex grow justify-between mt-2 min-h-[70px] font-[Montserrat,sans-serif]">

                                    {/* Product Name */}
                                    <div className="leftSectionDetox p-2 flex-1">
                                        <p className="product_title text-[12px] line-clamp-2 leading-[1.4em] mb-3 text-[#3a3a3a]">
                                            {product.title}
                                        </p>
                                    </div>

                                    {/* Right: Price Details */}
                                   <div className="rightSectionDetox space-y-1 pr-2 text-right min-h-[60px] shrink-0">

                                        {/* Selling Price */}
                                        <p className="font-semibold text-[12px] mr-3 text-[#000]">
                                            ₹{product.price}
                                        </p>



                                        {/* MRP + Discount */}
                                        {product.mrp && product.discount && (
                                            <div className="flex flex-wrap justify-end items-center gap-1 text-[11px]">
                                                <span className="line-through text-gray-400">
                                                    ₹{product.mrp}
                                                </span>

                                                <span className="border border-green-800 text-[#28a745] mt-0 leading-4 rounded text-[10px]">
                                                    {product.discount}% OFF
                                                </span>
                                            </div>
                                        )}


                                        {/* You Save */}
                                        {product.saved && (
                                            <div className="text-[11px] text-green-600 flex mt-1">
                                                <p>
                                                    You Save ₹{product.saved}
                                                </p>
                                            </div>
                                        )}

                                    </div>


                                </div>

                                {/* Button */}
                                <div className="w-full bg-[#97b924] rounded p-2 mt-auto min-h-[40px]">
                                   <AddToCartButton data={product}/>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default DetoxSection;
