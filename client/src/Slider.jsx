import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom"
import 'swiper/css';

const ImageCarousel = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop={true}
      spaceBetween={20}
      autoplay={{ delay: 3500 }}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Link to="/product/aloeamla">
        <div className="w-full h-full">
          <picture>
              <source
                media="(max-width: 767px)"
                srcSet="https://nutriorg.com/cdn/shop/files/Web_Ver_copy_1.jpg?v=1779805449"
              />
            <img
              src="https://nutriorg.com/cdn/shop/files/Juice_Web.jpg?v=1754546468"
              alt="Image 1"
              className="w-full h-full object-cover cursor-pointer"
              draggable="false"
            />
         </picture>
        </div>
        </Link>
      </SwiperSlide>
     
     
      <SwiperSlide>
        <Link to="/category/cold-pressed-oils">
        <div className="w-full h-full">
        <picture>
            <source
              media="(max-width: 767px)"
              srcSet="https://nutriorg.com/cdn/shop/files/1-_SBT_Tri.jpg?v=1779358987"
            />
            <img
              src="https://nutriorg.com/cdn/shop/files/Oil_web.jpg?v=1754546468"
              alt="Image 2"
              className="w-full h-full object-cover cursor-pointer"
              loading="lazy"
              draggable="false"
            />
        </picture>
        </div>
        </Link>
      </SwiperSlide>
      
      
      
      <SwiperSlide>
        <Link to="/product/seabuckthorn">
        <div className="w-full h-full">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="https://nutriorg.com/cdn/shop/files/Nutriorg_BAU_banner_web_1.jpg?v=1779691387"
          />
          <img
            src="https://nutriorg.com/cdn/shop/files/Sea_Buckthorn_Web_828b8ef8-07a7-467f-94b1-23623e3481de.jpg?v=1754546592"
            alt="Image 3"
            className="w-full h-full object-cover cursor-pointer"
            loading="lazy"
            draggable="false"
          />
      </picture>
        </div>
        </Link>
      </SwiperSlide>
      
    </Swiper>
  );
};

export default ImageCarousel;
