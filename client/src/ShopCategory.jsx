import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 text-[50px] text-[#6a5b5c] font-light flex items-center justify-center"
  >
    ‹
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-0 top-1/2 -translate-y-1/2 z-20 text-[50px] text-[#6a5b5c] font-light flex items-center justify-center"
  >
    ›
  </button>
);



const ShopCategory = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };


  return (
    <section className='border-top collection-section py-4 overflow-visible'>
      <div className='flex items-center justify-between'>
        <h2 className='font-[Montserrat,sans-serif] leading-[1.2em] text-[#6a5b5c] m-7 font-semibold text-[24px]'>SHOP BY CATEGORY</h2>
        <a href="" className="text-[17px] mr-8 font-[Montserrat,sans-serif] text-[#A18E96] underline underline-offset-4">View all</a>
      </div>
      <div>
        <div className="relative max-w-6xl mx-auto pl-7">
          <Slider {...settings}>
            <div className="">
              <Link to={"/category/detox-juice"}>
                <img className='h-[190px]' src="https://nutriorg.com/cdn/shop/collections/1_460x.jpg?v=1733133942" alt="" />
              </Link>
            </div>
            <div>
              <Link to={"/category/skin-hair"}>
                <img className="h-[190px]" src="https://nutriorg.com/cdn/shop/collections/6_460x.jpg?v=1733133980" alt="" />
              </Link>
            </div>
            <div>
              <Link to={"/category/healthy-breakfast"}>
                <img className="h-[190px]" src="https://nutriorg.com/cdn/shop/collections/4_460x.jpg?v=1733137260" alt="" />
              </Link>
            </div>
            <div>
              <Link to={"/category/healthy-powder"}>
              <img className="h-[190px]" src="https://nutriorg.com/cdn/shop/collections/5_460x.jpg?v=1733125861" alt="" />
              </Link>
            </div>
            <div>
              <Link to={"/category/cold-pressed-oils"}>
              <img className="h-[190px]" src="https://nutriorg.com/cdn/shop/collections/3_460x.jpg?v=1733137358" alt="" />
            </Link>
            </div>
            <div>
              <img className="h-[190px]" src="https://nutriorg.com/cdn/shop/collections/9_460x.jpg?v=1733142353" alt="" />
            </div>
            <div>
              <img className="h-[190px]" src="https://nutriorg.com/cdn/shop/collections/10_1_460x.jpg?v=1733142411" alt="" />
            </div>
            <div>
              <img className="h-[190px]" src="https://nutriorg.com/cdn/shop/collections/2_460x.jpg?v=1733142378" alt="" />
            </div>
          </Slider>
        </div>


      </div>

    </section>

  )
}

export default ShopCategory