import React, { useState } from 'react'
import {
  HeartIcon, PaperAirplaneIcon, SpeakerXMarkIcon,
  SpeakerWaveIcon
} from '@heroicons/react/24/outline'
import AddToCartButton from "./AddToCartButton"


const videos = [
  {
    src: "https://video.gumlet.io/64661d8e673536e1fe9044e2/668b9090517fbad3e8086ac6/main.mp4",
    poster: "https://video.gumlet.io/64661d8e673536e1fe9044e2/668b908dc770c53a5de12e0d/thumbnail-1-0.png",
    text: "Healthy Oats",
    productId: "65fabc123456",
  },
  {
    src: "https://video.gumlet.io/64661d8e673536e1fe9044e2/66266ed24d91ce7d6197e998/main.mp4",
    poster: "https://video.gumlet.io/64661d8e673536e1fe9044e2/66266ecf69e64c70c27b300f/thumbnail-1-0.png",
    text: "High Altitude Honey Certified Organic",
    productId: "65fabc123457",
    Sellingprice: "237",
    OriginalPrice: "250",
    Discount: "5",
    img: "https://cdn.shopify.com/s/files/1/0522/2826/0008/files/frnt_8349c9fd-9fe9-46c1-8040-39313b863312.jpg?v=1687431462&height=150&width=150",
    button: "Buy Now"
  },
  {
    src: "https://video.gumlet.io/64661d8e673536e1fe9044e2/66266fe44d91ce7d6197edfe/main.mp4",
    poster: "https://video.gumlet.io/64661d8e673536e1fe9044e2/66266fe169e64c70c27b349b/thumbnail-1-0.png",
    text: "Wheatgrass powder 75g Certified Organic",
    productId: "65fabc123458",
    Sellingprice: "310",
    OriginalPrice: "345",
    Discount: "10",
    img: "https://cdn.shopify.com/s/files/1/0522/2826/0008/products/frnt_4b475779-57d6-415e-a2ad-8fbf5712c4fd.jpg?v=1653025638&height=150&width=150",
    button: "Buy Now"
  },
  {
    src: "https://video.gumlet.io/64661d8e673536e1fe9044e2/67b9c3fe1ed9a426fa716a5a/main.mp4",
    poster: "https://video.gumlet.io/64661d8e673536e1fe9044e2/67b9c3fe1ed9a426fa716a5a/thumbnail-1-0.png",
    text: "Wheatgrass powder 75g Certified Organic",
    productId: "65fabc123459",
    Sellingprice: "325",
    OriginalPrice: "305",
    Discount: "16",
    img: "https://cdn.shopify.com/s/files/1/0522/2826/0008/files/1_a3416db9-52a3-44e6-ab91-01d9a2d1281d.jpg?v=1768978340&height=150&width=150",
    button: "Buy Now"
  },
];

const WatchShop = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [muted, setMuted] = useState(true);
  const [likes, setLikes] = useState({});

  return (
    <div className=''>
      <div className='heading_WatchShop px-4 md:px-8 my-6'>
        <p className="text-[rgb(87, 100, 52)] font-normal text-[18px] md:text-[23px] font-['Montserrat',sans-serif]">
          Watch & Shop Now
        </p>
      </div>

      <div className='video_section flex flex-wrap justify-center gap-3 md:gap-4 px-2 md:px-4 lg:px-6'>
        {videos.map((video, index) => (
          <div key={index}
            onClick={() => setActiveVideo(video)}
            className="
                    w-[48%]
                    md:w-[31%]
                    lg:w-[240px]
                     bg-white rounded-[6px]
                    border border-[rgba(203,203,203,0.5)]
                    shadow-[0_4px_8px_rgba(0,0,0,0.2)]
                    transition-all duration-300
                    md:hover:-translate-y-1 md:hover:scale-105
                    hover:shadow-[0_8px_16px_rgba(0,0,0,0.25)]
                    pb-4 cursor-pointer
                    ">

            {/* Video */}
            <div className="relative h-[250px] sm:h-[300px] md:h-[330px] rounded-lg overflow-hidden rounded-t-[6px]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                playsInline
                loop
                poster={video.poster}
              >
                <source src={video.src} type="video/mp4" />
              </video>

              {/* Bottom-right icons */}
              <div className="absolute bottom-3 right-3 flex">
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
            </div>

            {/* BottomText */}
            <div className="categoryName mt-3 px-2 font-['Montserrat',sans-serif]">
              <p className="text-[15px] font-medium text-start truncate">{video.text}</p>

              {/* Price Image */}
              <div className='mt-1 flex items-center gap-3'>
                {video.img && (
                  <img src={video.img} alt={video.text} className="w-8 h-8 rounded-full object-cover border-2 border-[rgba(203,203,203,0.5)] shadow-[0_2px_4px_#0003] bg-white"
                  />
                )}


                {/* Price Row */}

                {video.Sellingprice && (
                  <>
                    <span className='text-[#000000] text-[12px] font-semibold'>₹ {video.Sellingprice}</span>

                    {video.OriginalPrice && (
                      <span className='text-[#84848d] line-through text-[12px]' >₹ {video.OriginalPrice}</span>
                    )}
                  </>
                )}
              </div>

              {/* Discount */}
              <div className='text-start ml-11 -mt-2'>
                {video.Discount && (
                  <span className='text-[rgb(21,106,5)] font-normal text-[12px]'>{video.Discount}% Off</span>
                )}
              </div>

              {/* Button */}
              {/* {video.button && (
                <div className='w-full bg-[rgb(92,128,24)] rounded-[6px] text-[12px] p-2 mt-2'>
                  <button type='submit' className='text-[rgb(255,255,255)] font-medium'>{video.button}</button>
                </div>
              )} */}
              {video.productId && (
                <div className='w-full bg-[rgb(92,128,24)] rounded-[6px] text-[12px] p-2 mt-2 text-center'>
                  <AddToCartButton productId={video.productId} />
                </div>
              )}

            </div>

          </div>
        ))}
      </div>
      {activeVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          {/* Modal Box */}
          <div className="relative w-[92vw] max-w-[320px] bg-white rounded-xl overflow-hidden">

            {/* ❌ CLOSE BUTTON (ADD THIS BACK) */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 left-3 z-50 bg-black/50 text-white px-2 py-1 rounded-full"
            >
              ✕
            </button>

            {/* VIDEO CONTAINER */}
            <div className="relative w-full h-[70vh] max-h-[600px]">

              <video
                className="w-full h-full object-cover"
                autoPlay
                muted={muted}
                playsInline
                loop
              >
                <source src={activeVideo.src} type="video/mp4" />
              </video>

              {/* 🔊 MUTE */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMuted(!muted);
                }}
                className="absolute top-3 right-3 bg-black/50 p-2 rounded-full text-white z-50"
              >
                {muted ? (
                  <SpeakerXMarkIcon className="w-5 h-5" />
                ) : (
                  <SpeakerWaveIcon className="w-5 h-5" />
                )}
              </button>

              {/* RIGHT SIDE */}
              <div className="absolute right-3 top-[200px] -translate-y-1/2 z-50">

                <div className="bg-gray-800/40 backdrop-blur-md px-3 py-2 rounded-lg flex flex-col items-center gap-2 text-white">

                  {/* Views */}
                  <div className="text-center">
                    <p className="text-sm font-semibold">1.5K</p>
                    <p className="text-[10px] opacity-80">Views</p>
                  </div>

                  {/* ❤️ Like */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLikes(prev => ({
                        ...prev,
                        modal: !prev.modal
                      }));
                    }}
                    className="flex flex-col items-center"
                  >
                    <HeartIcon
                      className={`w-6 h-6 ${likes.modal ? "fill-red-500 text-red-500" : "text-white"
                        }`}
                    />
                    <span className="text-xs">16</span>
                  </button>

                  {/* ✈️ Share */}
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="flex flex-col items-center"
                  >
                    <PaperAirplaneIcon
                      className="w-5 h-5"
                      style={{ transform: "rotate(320deg)" }}
                    />
                    <span className="text-xs">4</span>
                  </button>

                </div>
              </div>
              {activeVideo?.productId && (
                <div className="absolute bottom-4 left-0 w-full px-3 z-50">

                  <div className="bg-gray-700/40 backdrop-blur-md rounded-xl p-3 shadow-lg">

                    {/* LEFT SIDE */}
                    <div className="flex items-start gap-1">

                      {activeVideo.img && (
                        <img
                          src={activeVideo.img}
                          alt={activeVideo.text}
                          className="w-10 h-10 rounded-md object-cover border"
                        />
                      )}

                      <div>
                        <p className="text-sm text-white line-clamp-1">
                          {activeVideo.text}
                        </p>

                        {activeVideo.Sellingprice && (
                          <p className="text-sm font-semibold text-start px-4 py-1 text-white">
                            ₹ {activeVideo.Sellingprice}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* RIGHT SIDE BUTTON */}
                    <div className='w-full bg-[rgb(92,128,24)] rounded-[6px] text-[12px] p-2 mt-2 text-center'>
                    <AddToCartButton  productId={activeVideo.productId} />
                    </div>

                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WatchShop;
