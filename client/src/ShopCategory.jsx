import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-20 text-[35px] md:text-[50px] text-[#6a5b5c]"
  >
    ‹
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-20 text-[35px] md:text-[50px] text-[#6a5b5c]"
  >
    ›
  </button>
);



const ShopCategory = () => {
  const settings = {
  infinite: true,
  speed: 500,
  slidesToShow : 5,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
      {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
      },
  ],
};

  return (
    <section className='border-top collection-section py-4 overflow-visible'>
      <div className='flex items-center justify-between'>
        <h2 className='font-[Montserrat,sans-serif] leading-[1.2em] text-[#6a5b5c] m-7 font-semibold text-[24px]'>SHOP BY CATEGORY</h2>
      </div>
      <div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <Slider {...settings}>
            <div className="">
              <Link to={"/category/detox-juice"}>
                <img className="w-full h-auto rounded-md" src="https://nutriorg.com/cdn/shop/collections/1_460x.jpg?v=1733133942" alt="" />
              </Link>
            </div>
            <div>
              <Link to={"/category/skin-hair"}>
                <img className="w-full h-auto rounded-md" src="https://nutriorg.com/cdn/shop/collections/6_460x.jpg?v=1733133980" alt="" />
              </Link>
            </div>
            <div>
              <Link to={"/category/healthy-breakfast"}>
                <img className="w-full h-auto rounded-md" src="https://nutriorg.com/cdn/shop/collections/4_460x.jpg?v=1733137260" alt="" />
              </Link>
            </div>
            <div>
              <Link to={"/category/healthy-powder"}>
              <img className="w-full h-auto rounded-md" src="https://nutriorg.com/cdn/shop/collections/5_460x.jpg?v=1733125861" alt="" />
              </Link>
            </div>
            <div>
              <Link to={"/category/cold-pressed-oils"}>
              <img className="w-full h-auto rounded-md" src="https://nutriorg.com/cdn/shop/collections/3_460x.jpg?v=1733137358" alt="" />
            </Link>
            </div>
            <div>
              <img className="w-full h-auto rounded-md" src="https://nutriorg.com/cdn/shop/collections/9_460x.jpg?v=1733142353" alt="" />
            </div>
            <div>
              <img className="w-full h-auto rounded-md" src="https://nutriorg.com/cdn/shop/collections/10_1_460x.jpg?v=1733142411" alt="" />
            </div>
            <div>
              <img className="w-full h-auto rounded-md" src="https://nutriorg.com/cdn/shop/collections/2_460x.jpg?v=1733142378" alt="" />
            </div>
          </Slider>
        </div>


      </div>

    </section>

  )
}

export default ShopCategory
