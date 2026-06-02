import React, { useState, useEffect, useRef } from "react";
import { FiHeart } from "react-icons/fi";
import {
    SpeakerXMarkIcon,
    SpeakerWaveIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import img1 from "../assets/images/image1.avif";
import img2 from "../assets/images/image2.avif";
import img3 from "../assets/images/image3.avif";
import img4 from "../assets/images/image4.avif";
import img5 from "../assets/images/image5.avif";
import img6 from "../assets/images/image6.avif";
import img7 from "../assets/images/image7.avif";
import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.webp";
import photo3 from "../assets/images/photo3.webp";
import photo4 from "../assets/images/photo4.webp";
import photo5 from "../assets/images/photo5.webp";
import photo6 from "../assets/images/photo6.jpg";
import photo7 from "../assets/images/photo7.webp";
import CustomerReview from "./CustomerReview";









const variants = [
    {
        id: 1,
        label: "500ml",
        price: 449.0,
        image:
            "https://nutriorg.com/cdn/shop/products/frnt_f513af3d-bcd7-4875-b4af-fb18b43d9a89.jpg?v=1667041676",
    },
    {
        id: 2,
        label: "250ml",
        price: 189,
        oldPrice: 199,
        image:
            "https://nutriorg.com/cdn/shop/files/immunitybooster250ml.jpg?v=1758715264",
    },
];

const images = [

    {
        main: photo1,
        thumb: img1
    },
    {
        main: photo2,
        thumb: img2
    },
    {
        main: photo3,
        thumb: img3
    },
    {
        main: photo4,
        thumb: img4
    },
    {
        main: photo5,
        thumb: img5
    },
    {
        main: photo6,
        thumb: img6
    },
    {
        main: photo7,
        thumb: img7
    },
];

const ImmunityBooster = () => {
    const [selectedVariant, setSelectedVariant] = useState(variants[0]);
    const [qty, setQty] = useState(1);
    const [fade, setFade] = useState(true);
    const [open, setOpen] = useState(false);
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(true);
    const [activeImage, setActiveImage] = useState(images[0].main);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showSignup, setShowSignup] = useState(false)
    // const isLoggedIn = Boolean(localStorage.getItem("token"));












    return (
        <div className="mx-auto px-6">
            <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="flex flex-col items-center sticky -top-10 self-start">
                    <div
                        className="w-full bg-gray-200 flex items-center justify-center
                                overflow-hidden"
                    >
                        {/* IMAGE WRAPPER */}
                        <div className="w-full h-full
                        flex items-center justify-center
                          overflow-hidden group"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = ((e.clientX - rect.left) / rect.width) * 100;
                                const y = ((e.clientY - rect.top) / rect.height) * 100;
                                e.currentTarget
                                    .querySelector("img")
                                    .style.transformOrigin = `${x}% ${y}%`;
                            }}
                        >
                            <img
                                src={activeImage}
                                alt="Immunity Booster Juice"
                                className="max-w-full max-h-full object-contain
                                        transition-transform duration-200
                                         group-hover:scale-150"
                            />
                        </div>
                    </div>

                    {/* THUMBNAIL SLIDER */}
                    <div className="flex gap-3 overflow-x-auto scrollbar-hide max-w-md">
                        {images.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveImage(img.main)}
                                className={`flex-shrink-0 w-20 h-20 border rounded-md p-1
              ${activeImage === img.main ? "border-green-600" : "border-gray-300"}
            `}
                            >
                                <img
                                    src={img.thumb}
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* PRODUCT DETAILS */}
                <div className="text-start w-full font-montserrat leading-[1.4em]">
                    <h1 className="text-[25px] text-black font-medium mt-10 mb-3">
                        Immunity Booster Juice
                    </h1>

                    {/* PRICE */}
                    <div className="flex items-center gap-3">
                        <span className="text-[#89C21E] font-semibold text-[1.6em]">
                            ₹ {(selectedVariant.price * qty).toFixed(2)}
                        </span>

                        {selectedVariant.oldPrice && (
                            <span className="text-[1.2em] opacity-75 line-through">
                                ₹ {(selectedVariant.oldPrice * qty).toFixed(2)}
                            </span>
                        )}
                    </div>

                    <p className="mt-4 text-sm">
                        Tax included. Shipping calculated at checkout
                    </p>

                    {/* VARIANTS */}
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        {variants.map((variant) => (
                            <button
                                key={variant.id}
                                onClick={() => setSelectedVariant(variant)}
                                className={`rounded-lg border p-3 text-left transition
                              ${selectedVariant.id === variant.id
                                        ? "border-black ring-2 ring-black bg-white"
                                        : "border-gray-300"
                                    }`}
                            >
                                <p className="font-semibold text-gray-800">{variant.label}</p>
                                <p className="font-semibold text-gray-900">
                                    ₹ {variant.price}.00
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* QUANTITY + CART */}
                    <div className="mt-12 flex items-stretch w-full gap-4">
                        <div className="flex items-center border border-[#5c8018] shadow-[inset_0_0_0_1px_#a1ad88] overflow-hidden rounded-sm h-[42px]">
                            <button
                                onClick={() => qty > 1 && setQty(qty - 1)}
                                className="w-12 h-full bg-[#a1ad88] text-lg hover:bg-[#96a47a] transition"
                            >
                                −
                            </button>

                            <span className="w-12 text-center font-medium">{qty}</span>

                            <button
                                onClick={() => setQty(qty + 1)}
                                className="w-12 h-full text-lg bg-[#5c8018] hover:bg-[#4f6f14] transition text-white"
                            >
                                +
                            </button>
                        </div>

                        <button
                            // onClick={handleAddToCart}
                            className="flex-[8] h-[42px] rounded-sm text-[#5c8018] border-2 border-[#5c8018] bg-white text-[17px] font-semibold">
                            Add to cart
                        </button>
                    </div>

                    {/* BUY NOW */}
                    <div className="flex items-center justify-center w-full mt-4 bg-[#5c8018] text-white cursor-pointer">
                        <button className="px-[15px] py-[10px] text-[15px] font-semibold">
                            Buy It Now
                        </button>
                    </div>

                    {/* VIDEO */}
                    <div className="relative video-Immunitybooster rounded-[8px] w-[218px] h-[330px] overflow-hidden mt-10 mx-auto">
                        <video
                            src="https://video.gumlet.io/64661d8e673536e1fe9044e2/662914f3989e3752bb364a92/main.mp4"
                            poster="https://video.gumlet.io/64661d8e673536e1fe9044e2/662914ee9feeeb354606deb6/thumbnail-1-0.png?v=1713968366692"
                            autoPlay
                            muted
                            playsInline
                            loop
                            className="rounded-[8px] object-cover cursor-pointer" onClick={() => setOpen(true)}
                        />
                        {/* Bottom-right icons */}
                        <div className="absolute bottom-0 right-0 flex">
                            <button className="p-2 text-white text-xl hover:scale-110 transition">
                                <HeartIcon className="w-6 h-6 stroke-[3]" />
                            </button>
                            <button className="p-2  text-white text-xl hover:scale-110 transition">
                                <PaperAirplaneIcon
                                    className="w-6 h-6 text-white"
                                    style={{
                                        transform: "rotate(320deg) translateY(-6px)",
                                        strokeWidth: 3,
                                        stroke: "white",
                                        fill: "none"
                                    }}
                                />
                            </button>
                        </div>

                        {/* Modal */}
                        {open && (
                            <div
                                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                                onClick={() => setOpen(false)}
                            >
                                <div
                                    className="relative"
                                    onClick={(e) => e.stopPropagation()}
                                >

                                    {/* RIGHT ICONS */}
                                    <div className="absolute right-3 top-1/3 flex flex-col items-center gap-4 z-10 p-2 py-5 rounded-xl bg-black/35 backdrop-blur-sm text-white">
                                        <div className="flex flex-col items-center leading-none text-[10px] font-semibold">
                                            <span>73</span>
                                            <span className="opacity-80">Views</span>
                                        </div>

                                        <button className="flex flex-col items-center font-bold">
                                            <FiHeart size={18} className="stroke-[3.8]" />
                                            <span className="text-xs">2</span>
                                        </button>

                                        <button className="flex flex-col items-center justify-center leading-none text-white">
                                            <PaperAirplaneIcon
                                                className="w-4 h-4"
                                                style={{
                                                    transform: "rotate(320deg) translateY(-2px)",
                                                    strokeWidth: 3,
                                                    stroke: "white",
                                                    fill: "none"
                                                }}
                                            />
                                            <span className="text-[10px] opacity-80 mt-[4px] font-bold">0</span>
                                        </button>
                                    </div>

                                    {/* Big centered video */}
                                    <div className="overflow-hidden relative">
                                        <video
                                            ref={videoRef}
                                            src="https://video.gumlet.io/64661d8e673536e1fe9044e2/662914f3989e3752bb364a92/main.mp4"
                                            autoPlay
                                            playsInline
                                            loop
                                            muted={muted}
                                            className="w-full h-[450px] md:h-[500px] rounded-xl object-cover"
                                        />

                                        {/* TOP CONTROLS */}
                                        <div className="absolute top-2 left-2 right-2 z-10 flex items-center justify-between">
                                            {/* Left icons */}
                                            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                                                <button
                                                    onClick={() => setMuted((prev) => !prev)}
                                                    className="flex items-center justify-center"
                                                >
                                                    {muted ? (
                                                        <SpeakerXMarkIcon className="w-4 h-4 text-white" />
                                                    ) : (
                                                        <SpeakerWaveIcon className="w-4 h-4 text-white" />
                                                    )}
                                                </button>
                                            </div>
                                            {/* Close */}
                                            <button
                                                onClick={() => setOpen(false)}
                                                className="bg-white rounded-full p-1">
                                                <XMarkIcon className="w-4 h-4 text-black" />
                                            </button>
                                        </div>

                                        {/* Bottom Add to Cart block */}
                                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] max-w-[320px] z-10">
                                            <div className="bg-black/40 backdrop-blur-md rounded-xl px-4 py-3 text-center">

                                                <p className="text-white text-sm font-medium mb-2">
                                                    Immunity Booster Juice
                                                </p>

                                                <button
                                                    onClick={handleAddToCart}
                                                    className="w-full bg-black text-white py-2 rounded-lg text-sm font-semibold hover:bg-neutral-900 transition"
                                                >
                                                    Add to cart
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}


                    </div>


                    {/* PRODUCT DESCRIPTION SECTION */}
                    <div className="product-description leading-[1.4em] mt-20 text-[18px] font-montserrat">
                        <div className="leading-9 mb-[40px] text-[#6a5b5c]">
                            <p ><strong className="font-bold">M.R.P. (250ml) : ₹369</strong></p>
                            <p><strong className="font-bold">500ml : ₹615</strong></p>
                            <p><strong className="font-bold">500ml*2 : ₹1230</strong></p>
                            <p><strong className="font-bold">(Inclusive of all Taxes)</strong></p>
                        </div>
                        <div className="mt-[1em] mb-[1em]">
                            <h2 className="text-[23px] mb-6 text-[#6a5b5c]"><strong>Description</strong></h2>
                            <div className="text leading-[1.6em] font-medium text-[18px] break-words text-black">
                                <p>Nutriorg Immuinty Booster juice is a combination of Giloy, Tulsi, Neem, Haldi, Dalchini , Lemon, Kinnow, Noni, Honey and Amla. All these ingredients are renowned for working wonders for the immune system.</p>
                                <p>The main purpose of the immune system is to act as a watchdog against the harmful alien cells that are the root cause of certain diseases. A robust immune system helps the body in its daily pursuits of fighting germs that we come in contact with everyday.</p>
                                <p>The Nutriorg Immunity Booster Juice helps to build a strong immunity and for it to function actively so that your body can fight any type of germs to protect it from various ailments. They have strong immunity boosting properties that boost the body’s immunity very swiftly. It improves your digestion.</p>
                                <p>This juice is also very beneficial to reduce acne scars and other forms of pigmentation on the skin. The ingredients together balances out the hormones. In an aggregate the Nutriorg Immunity Booster Juice is a boon in disguise for everyone who aims to strengthen their immunity to fight diseases.</p>
                            </div>
                            <br />

                            <h2><strong className="text-[#6a5b5c] font-bold text-[23px]">Benefits</strong></h2>
                            <br />
                            <ul className="list-disc ml-10 flex flex-col gap-4 text-[16px] font-medium">
                                <li>The Nutriorg Immunity Booster Juice helps to build a strong immunity that protects our health.</li>
                                <li>Prevents Bacterial and Fungal Infections</li>
                                <li>This juice is also very beneficial to reduce acne scars and other forms of pigmentation on the skin.</li>
                                <li>It has good anti-ageing properties.</li>
                                <li>The ingredients together balances out the hormones.</li>
                                <li>Improves Respiratory health</li>

                            </ul>

                            <h2 className="mt-7"><strong className="text-[#6a5b5c] font-[23px]">How to use</strong></h2>
                            <ul className="list-disc ml-10 text-[16px] font-medium mt-6">
                                <li>Mix 20-30 ml of Immunity booster Juice with 200ml of lukewarm water in a non-metallic glass.</li>
                                <li>Consume empty stomach twice a day (Morning & Evening).</li>
                                <li>Do not consume anything 30 minutes before and after consumption of the juice</li>
                                <li>For best results use regularly for 6 months.</li>
                            </ul>
                        </div>
                    </div>

                </div>



            </div >
            <div>
                <CustomerReview />
            </div>

            {showSignup && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60">
                    <div className="bg-white w-[380px] rounded-lg p-6 relative">

                        <button
                            onClick={() => setShowSignup(false)}
                            className="absolute top-3 right-3"
                        >
                            <XMarkIcon className="w-5 h-5" />
                        </button>

                        <h2 className="text-xl font-semibold mb-4 text-center">
                            Sign up to continue
                        </h2>

                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border w-full mb-3 p-2 rounded"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border w-full mb-3 p-2 rounded"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border w-full mb-4 p-2 rounded"
                        />

                        <button
                            onClick={handleSignup}

                            className="w-full bg-[#5c8018] text-white py-2 rounded font-semibold"
                        >
                            Sign Up
                        </button>

                        <p className="text-sm text-center mt-4">
                            Already have an account?{" "}
                            <span
                                className="text-[#5c8018] cursor-pointer font-semibold"
                                onClick={() => {
                                    setShowSignup(false);
                                    window.location.href = "/login?next=/cart";
                                }}
                            >
                                Login
                            </span>
                        </p>

                    </div>
                </div>
            )}

        </div>
    );
};

export default ImmunityBooster;
