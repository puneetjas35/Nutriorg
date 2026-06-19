import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-5 md:-left-8 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-[#6a5b5c] text-3xl font-bold"
  >
    ‹
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-5 md:-right-8 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-[#6a5b5c] text-3xl font-bold"
  >
    ›
  </button>
);



const ShopCategory = () => {

const width = window.innerWidth;

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow:
    width < 768 ? 2 :
    width < 1200 ? 3 :
    5,
  slidesToScroll: 2,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

  return (
    <section className='border-top shop-category-slider collection-section py-4 overflow-visible'>
      <div className='flex items-center shop-category-slider justify-between'>
        <h2 className='font-[Montserrat,sans-serif] leading-[1.2em] text-[#6a5b5c] m-7 font-semibold text-[24px]'>SHOP BY CATEGORY</h2>
      </div>
      <div>
        <div className="w-full relative shop-category-slider px-6 md:px-12">
           <Slider {...settings}>
            <div className="category-slider">
              <Link to={"/category/detox-juice"}>
              <img className="w-full h-auto rounded-md" src="https://nutriorg.com/cdn/shop/collections/1_460x.jpg?v=1733133942" alt="" />
              </Link>
            </div>
            <div className="category-slider">
              <Link to={"/category/skin-hair"}>
                <img className="w-full h-auto rounded-md" src="https://nutriorg.com/cdn/shop/collections/6_460x.jpg?v=1733133980" alt="" />
              </Link>
            </div>
            <div className="category-slider">
              <Link to={"/category/healthy-breakfast"}>
                <img className="w-full h-auto rounded-md" src="https://nutriorg.com/cdn/shop/collections/4_460x.jpg?v=1733137260" alt="" />
              </Link>
            </div>
            <div className="category-slider">
              <Link to={"/category/healthy-powder"}>
              <img className="w-full h-auto rounded-md" src="https://nutriorg.com/cdn/shop/collections/5_460x.jpg?v=1733125861" alt="" />
              </Link>
            </div>
            <div className="category-slider">
              <Link to={"/category/cold-pressed-oils"}>
              <img className="w-full h-auto rounded-md" src="https://nutriorg.com/cdn/shop/collections/3_460x.jpg?v=1733137358" alt="" />
            </Link>
            </div>
            <div className="category-slider">
              <Link to="#">
              <img className="w-full h-auto rounded-md" src="https://nutriorg.com/cdn/shop/collections/9_460x.jpg?v=1733142353" alt="" />
              </Link>
            </div>
            <div className="category-slider">
              <Link to="#">
              <img className="w-full h-auto rounded-md" src="https://nutriorg.com/cdn/shop/collections/10_1_460x.jpg?v=1733142411" alt="" />
              </Link>
            </div>
            <div className="category-slider">
              <Link to="#">
              <img className="w-full h-auto rounded-md" src="https://nutriorg.com/cdn/shop/collections/2_460x.jpg?v=1733142378" alt="" />
              </Link>
            </div> 
          </Slider>
        </div>


      </div>

    </section>

  )
}

export default ShopCategory
