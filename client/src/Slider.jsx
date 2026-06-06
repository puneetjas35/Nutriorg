import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom"
import 'swiper/css';
import 'swiper/css/navigation';

const ImageCarousel = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop={true}
      spaceBetween={20}
      navigation
      autoplay={{ delay: 3500 }}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Link to="/product/aloeamla">
        <img
          src="https://nutriorg.com/cdn/shop/files/Juice_Web.jpg?v=1754546468"
          alt="Image 1"
         className='w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover cursor-pointer'
        />
        </Link>
      </SwiperSlide>
     
     
      <SwiperSlide>
        <Link to="/category/cold-pressed-oils">
        <img
          src="https://nutriorg.com/cdn/shop/files/Oil_web.jpg?v=1754546468"
          alt="Image 2"
         className='w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover cursor-pointer'
        />
        </Link>
      </SwiperSlide>
      
      
      
      <SwiperSlide>
        <Link to="/product/seabuckthorn">
        <img
          src="https://nutriorg.com/cdn/shop/files/Sea_Buckthorn_Web_828b8ef8-07a7-467f-94b1-23623e3481de.jpg?v=1754546592"
          alt="Image 3"
          className='w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover cursor-pointer'
        />
        </Link>
      </SwiperSlide>
      
    </Swiper>
  );
};

export default ImageCarousel;
