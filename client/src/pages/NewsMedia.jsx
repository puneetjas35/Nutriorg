import React, { useState } from 'react'
import { Link } from "react-router-dom";

const newsData = [
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/Enorm-Gallery66722-outlook-banner-1690012796-64bb8c7c0df79.jpg?v=1690012799&&width=1080",
    link: "/news/business-outlook",
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0522/2826/0008/files/img-20240212-wa0022-1-1709486323-65e4b0f3d79e4.jpg?v=1709486326&&width=1080",
    link: "/news/award-2024",
  },
  {
    id: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0522/2826/0008/files/outlook-image-1705744017-65ab969138c31.jpg?v=1705744022&&width=1080",
    link: "/news/outlook-anniversary",
  },
  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/Enorm-Gallery66722-IIAA-Award-2023-1690019384-64bba6380f493.jpg?v=1690019387&&width=1080",
    link: "/news/shilpa-shetty"
  },
  {
    id : 5,
    image : "https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/Enorm-Gallery66722-aaj-ka-jaipur-1685439459-6475c3e38b037.jpg?v=1685439463&&width=1080",
    link : "/news/empowering"
  },
  {
    id: 6,
    image : "https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/Enorm-Gallery66722-Best-organic-food-brand-1-1661517434-6308be7aca926.jpg?v=1661517438&&width=1080",
    link : "/news/best-brand"
  }, 
  {
    id : 7,
    image : "https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/Enorm-Gallery66722-Best-of-industry-1661517437-6308be7de0b32.jpg?v=1661517441&&width=1080",
    link : "/news/industry-award"
  },
  {
    id : 8,
    image : "https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/Enorm-Gallery66722-Global-healthcare-award-1661517434-6308be7a1b291.jpg?v=1661517436&&width=1080",
    link : "news/esha-deol"
  },
  {
    id: 9,
    image : "https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/Enorm-Gallery66722-Most-trusted-brand-of-the-year-1-1661517428-6308be7439e32.jpg?v=1661517431&&width=1080",
    link : "/news/trusted-brand"
  },
  {
    id : 10,
    image: "https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/Enorm-Gallery66722-times-leading-entrepreneurs-1667627829-6365fb353dc44.jpg?v=1667627831&&width=1080",
    link : "/news/timesleading-entrepreneurs"
  },
  {
    id : 11,
    image: "https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/Enorm-Gallery66722-Women-empowerment-award-1661517428-6308be744d22e.jpg?v=1661517433&&width=1080",
    link : "/news/prominent-women"
  },
  {
    id : 12,
    image : "https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/Enorm-Gallery66722-pride-of-nation-awards-1667627712-6365fac0898df.jpg?v=1667627716&&width=1080",
    link : "/news/pride-nationaward"
  }, 
  {
    id: 13,
    image : "https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/Enorm-Gallery66722-iconic-business-summit-awards-1667627754-6365faeaa37a1.jpg?v=1667627757&&width=1080",
    link : "/news/business-summit"
  },
   {
     id : 14, 
     image : "https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/enap-photo-616fcf1858428.jpg?v=1634717465&&width=1080", 
     link : "/news/blossom-media"
  }, 
  {
    id : 15, 
    image : "https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/enap-photo-616fcf161095a.jpg?v=1634717463&&width=1080", 
    link : "/news/ms-rita"
  }, 
  {
    id : 16, 
    image : "https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/enap-photo-616fcf266ed82.jpg?v=1634717479&&width=1080",
    link : "/news/delicious-organic"
  }, 
  {
    id : 17, 
    image : "https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/enap-photo-616fcf242c923.jpg?v=1634717477&&width=1080",
    link : "news/times-group"
  }, 
  {
    id : 18,
    image : "https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/enap-photo-616fcf2189776.jpg?v=1634717475&&width=1080",
    link : "/news/hindi-paper"
  },
   {
     id : 19,
     image : "https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/enap-photo-616fcf1f2e7d3.jpg?v=1634717472&&width=1080",
     link : "/news/building-immunity"
  }
];

const NewsMedia = () => {
     const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>

      <h4 className='text-start px-8 heading about-us font-montserrat text-[25px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>
        News & Media
      </h4>

      <p className='px-8 text-start text-[16px] leading-7 text-gray-600'>
        Our exemplary performance in the field of Food and Wellness has lead us
        to grab a lot of media attention. We have been praised by various critics
        and bodies with awards multiple times for our unwavering quality and
        excellence in the field.
      </p>

      <h1 className='text-center text-black font-medium mt-6 text-[40px]'>
        NEWS & MEDIA
      </h1>

          <div className="max-w-[1400px] mx-auto px-6 py-10">

      {/* MASONRY GALLERY */}
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-5 space-y-5">

        {newsData.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item.image)}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg break-inside-avoid group"
          >
            <img
              src={item.image}
              alt=""
              className="w-full rounded-lg transition duration-500 group-hover:scale-105"
            />
          </div>
        ))}

      </div>

      {/* POPUP MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt=""
            className="max-w-[90%] max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}

    </div>
    </div>
  )
}

export default NewsMedia