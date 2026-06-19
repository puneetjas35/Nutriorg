import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Axios from "./utils/Axios"
import toast from "react-hot-toast";
import { useGlobalContext } from "./provider/GlobalProvider";
import AddToCartButton from "./AddToCartButton";
import SummaryApi from "./common/SummaryApi";
import { Link } from "react-router-dom";

// const products = [
//     {
//         id: 1,
//         name: "Extra Virgin Coconut Oil 250 ml | Cold-Pressed Oil Certified Organic",
//         price: 375,
//         image: "https://nutriorg.com/cdn/shop/files/BOTTLE_1_460x.jpg?v=1754545244",
//         backgroundImg: "https://nutriorg.com/cdn/shop/files/Artboard_1_0424930d-700e-4df3-9f1f-d26044fe47e2_540x.jpg?v=1754545244",
//     },
//     {
//         id: 2,
//         name: "Flaxseed Oil 200ml (Pack of 2* 100) | Wooden Cold-Pressed Oil Certified Organic",
//         price: 399,
//         oldPrice: 420,
//         sale: true,
//         discount: 5,
//         image: "https://nutriorg.com/cdn/shop/files/8908006315536_1_460x.jpg?v=1725686399",
//         backgroundImg: "https://nutriorg.com/cdn/shop/files/Artboard_2_e5e48b45-544e-4d67-aee8-0f1068e04793_540x.jpg?v=1754545900",
//         YouSave: 21
//     },
//     {
//         id: 3,
//         name: "Extra Virgin Coconut Oil 500ml | Wooden Cold-Pressed Oil Certified Organic",
//         price: 699,
//         image: "https://nutriorg.com/cdn/shop/files/frnt_2_d6dbfcc7-fdde-4aed-8e38-d59e235edc37_460x.jpg?v=1684232125",
//         backgroundImg: "https://nutriorg.com/cdn/shop/files/Artboard_1_de93bef0-3150-4150-8e68-a4da274de76d_540x.jpg?v=1754546214"
//     },
//     {
//         id: 4,
//         name: "Blackseed Oil 100ml | Wooden Cold-Pressed Oil Certified Organic",
//         price: 365,
//         oldPrice: 385,
//         sale: true,
//         discount: 5,
//         image: "https://nutriorg.com/cdn/shop/files/Artboard_1_824b2591-e299-4a0a-a219-54e5261c2b95_460x.jpg?v=1754545966",
//         backgroundImg: "https://nutriorg.com/cdn/shop/files/Artboard_3_9a73d25a-1c23-4066-9dd6-b0b2d6c78511_540x.jpg?v=1754545975",
//         YouSave: 20
//     },
//     {
//         id: 5,
//         name: "Rose Water Certified Organic",
//         price: 405,
//         oldPrice: 450,
//         sale: true,
//         discount: 10,
//         image: "https://nutriorg.com/cdn/shop/files/rose_water_produst_listing_1_460x.jpg?v=1754546505",
//         backgroundImg: "https://nutriorg.com/cdn/shop/files/rose_water_produst_listing_2_540x.jpg?v=1754546505",
//         YouSave: 45
//     },
//     {
//         id: 6,
//         name: "Flaxeed Oil 100ml Certified Organic",
//         price: 199,
//         oldPrice: 210,
//         sale: true,
//         discount: 5,
//         image: "https://nutriorg.com/cdn/shop/files/Artboard_1_38867d7f-2ab2-4da5-9e2f-5b1444ae78dd_460x.jpg?v=1758543969",
//         backgroundImg: "https://nutriorg.com/cdn/shop/files/Artboard_2_3f54260b-bc04-4a57-b98e-2fd0f3312777_540x.jpg?v=1758543969",
//         YouSave: 11
//     },
//     {
//         id: 7,
//         name: "Castor Oil 100ml Certified Organic",
//         price: 199,
//         oldPrice: 210,
//         sale: true,
//         discount: 5,
//         image: "https://nutriorg.com/cdn/shop/files/Artboard_1_607fcd0a-1844-49fd-88eb-0d4ac9df135d_460x.jpg?v=1758543906",
//         backgroundImg: "https://nutriorg.com/cdn/shop/files/Artboard_2_3b4518e7-9076-4f07-ab88-9543b79b0296_540x.jpg?v=1758543906",
//         YouSave: 11
//     }
// ];

const SkinHair = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)




    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await Axios({
                    ...SummaryApi.getProduct("skin-hair")
                });

                if (response.data.success) {
                    setProducts(response.data.data); 
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);

    const [emblaRef, emblaApi] = useEmblaCarousel({
          align: "start",
          slidesToScroll: 1,
          containScroll: "trimSnaps",
        });

    return (
        <section className="skincare bg-[rgb(244,242,233)] pb-8">
            {/* Heading */}
           <div className="heading px-4 md:px-6 py-2 md:py-4 flex items-center justify-between">
                <h2 className="text-[18px] md:text-[24px] font-semibold uppercase tracking-normal text-[#9A8F96] hover:text-[#6a5b5c] transition-colors duration-300">
                    <a href="#" className="font-['Montserrat',sans-serif]">
                        SKIN & HAIR CARE
                    </a>
                </h2>

                <a
                    href="category/skin-hair"
                    className="text-[14px] md:text-[17px] font-[Montserrat,sans-serif] text-[#A18E96] underline underline-offset-4"
                >
                    View all
                </a>
            </div>


            {/* Slider */}
            <div className="relative">
                {/* Left Arrow */}
                <button
                      onClick={() => emblaApi?.scrollPrev()}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center text-[#6a5b5c] w-10 h-10 rounded-full bg-white shadow-lg"
                    >
                    <ChevronLeft size={36} strokeWidth={1.5} />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={() => emblaApi?.scrollNext()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center text-[#6a5b5c] w-10 h-10 rounded-full bg-white shadow-lg"
                >
                    <ChevronRight size={36} strokeWidth={1.5} />
                </button>

                {/* Embla Viewport */}
                <div className="max-w-[1280px] mx-auto px-2 sm:px-4 md:px-6">
                    <div ref={emblaRef} className="overflow-hidden">
                        <div className="flex">
                            {products.map((item) => (
                                <div
                                    key={item._id}
                                    className="
                                      flex-[0_0_50%]
                                      md:flex-[0_0_33.333%]
                                      lg:flex-[0_0_25%]
                                      px-2
                                      box-border
                                    "
                                                                    >
                                    <Link to={`/product/${item.slug || item._id}`}>
                                        
                   <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-[300px] md:h-[400px]">



                                            <div className="relative h-[140px] md:h-[240px] p-4 overflow-hidden">

                                                {/* SALE BADGE */}
                                                {item.sale && (
                                                    <span className="absolute ml-2 top-3 left-3 z-20 bg-[#7ba428] text-white text-[10px]  px-2 py-[3px] rounded-full leading-none">
                                                        Sale
                                                    </span>
                                                )}

                                              <img
                                                src={item.image}
                                                alt={item.title}
                                                className="absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-300 group-hover:opacity-0"
                                             />

                                             <img
                                               src={item.hoverImage}
                                               alt=""
                                               className="absolute inset-0 w-full h-full object-contain p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                             />
                                            </div>



                                            <div className="px-3 text-[12px] flex-1 flex flex-col justify-between mt-4">
                                                <div className="flex justify-between gap-2">
                                                    {/* Name */}
                                                    <div className="w-[65%] overflow-hidden">
                                                        <p
                                                            className="text-[14px] text-[#2d2d2d] leading-[1.45] font-normal tracking-[0.02em] font-montserrat overflow-hidden text-start"
                                                            style={{
                                                                display: "-webkit-box",
                                                                WebkitLineClamp: 2,
                                                                WebkitBoxOrient: "vertical",
                                                            }}
                                                        >
                                                            {item.title}
                                                        </p>
                                                    </div>

                                                    {/* Price */}
                                                    <div className="w-[35%] text-right">
                                                        <p className="font-semibold">₹{item.price}</p>

                                                        {item.mrp && (
                                                            <div className="text-[11px]">
                                                                <span className="line-through text-gray-400">
                                                                    ₹{item.mrp}
                                                                </span>
                                                                <span className="ml-1 border border-green-700 text-green-700 px-1 rounded">
                                                                    {item.discount}% OFF
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Reserve space even if not present */}
                                                <div className="h-[16px] text-right text-green-600 text-[10px] mb-7 mr-3">
                                                    {item.saved && `You Save ₹${item.saved}`}
                                                </div>
                                            </div>

                                            {/* <button className="mx-3 mb-3 bg-[#7ba428] text-white py-2 rounded">
                                            Add to Cart
                                        </button> */}
                                            <div className="mx-3 mb-3 bg-[#7ba428] text-white py-2 rounded"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                }}>
                                                <AddToCartButton data={item} />
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default SkinHair
