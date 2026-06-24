import React from 'react'
import { useNavigate, Link } from "react-router-dom";


const Gallery = () => {
    const navigate = useNavigate();
    return (
        <div className='main_Gallery_Sectionn mt-10'>
            <div className='image_configure flex flex-col sm:flex-row flex-wrap justify-center gap-6 items-center'>
                <div className='outerWrapper w-full sm:w-[323px] h-[260px] sm:h-[367px] relative overflow-hidden group'>
                    <img className='w-full h-full object-cover' src="https://nutriorg.com/cdn/shop/files/Our_Story_1080x.jpg?v=1647066251" alt="" />
                    <div className='innerWrapper absolute inset-0 flex items-center justify-center'>
                        <div className='feature-subheader bg-[#eaeaea]/90 px-8 py-6 text-center'>
                            <p className='text-[#446408] text-[20px] font-["Montserrat",sans-serif] font-medium tracking-wide mb-2 leading-[1.4em]'>Our Story</p>
                            <a className="text-[#446408] text-[1em] font-normal underline " href="/OurStory">Read More</a>
                        </div>

                    </div>

                </div>
                <div className='outerWrapper w-full sm:w-[323px] h-[260px] sm:h-[367px] relative overflow-hidden group'>
                    <img className='w-full h-full object-cover' src="https://nutriorg.com/cdn/shop/files/empowering_14bdabe7-e635-4a2d-adda-263dbdf1475c.png?v=1664125247" alt="" />
                    <div className='innerWrapper absolute inset-0 flex items-center justify-center'>
                        <div className='feature-subheader bg-[#eaeaea]/90 px-8 py-6 text-center'>
                            <p className='text-[#446408] text-[20px] font-["Montserrat",sans-serif] font-medium tracking-wide mb-2 leading-[1.4em]'>Our<br></br> Contributions</p>
                            <Link className="text-[#446408] text-[1em] font-normal underline " to="/ourcontributions">Read More</Link>
                        </div>

                    </div>

                </div>

                <div className='outerWrapper w-full sm:w-[323px] h-[260px] sm:h-[367px] relative overflow-hidden group'>
                    <img className='w-full h-full object-cover' src="https://nutriorg.com/cdn/shop/files/our_Farms_1512x.jpg?v=1647066280" alt="" />
                    <div className='innerWrapper absolute inset-0 flex items-center justify-center'>
                        <div className='feature-subheader bg-[#eaeaea]/90 px-8 py-6 text-center'>
                            <p className='text-[#446408] text-[20px] font-["Montserrat",sans-serif] font-medium tracking-wide mb-2 leading-[1.4em]'>Our Farms</p>
                            <Link className="text-[#446408] text-[1em] font-normal underline " to="/ourvalues">Read More</Link>
                        </div>

                    </div>

                </div>
            </div>
            
          <section className="border-t border-gray-200">
           <div className="main_gallery_text_consultation
                    flex flex-col md:flex-row items-center
                    justify-between gap-12 lg:gap-20
                    max-w-[1180px] mx-auto mt-8 px-4 sm:px-6 py-10 bg-white rounded-xl shadow-sm">

                {/* LEFT CONTENT */}
                <div className="w-full md:w-[70%] flex flex-col justify-center text-center md:text-left leading-[1.6em] text-[rgb(161,142,150)]">

                    <h2 className="text-[20px] sm:text-[25px] font-semibold mb-5 font-['Montserrat',sans-serif]">
                        Get Free Consultation!!
                    </h2>

                    <p className="text-[14px] sm:text-[16px] font-normal font-['Montserrat',sans-serif] mb-6">
                        Connect with our Dietitian for a free consultation.<br />
                        Fill out this form and book a free appointment now!
                    </p>

                    <button
                        onClick={() => navigate("/consultation")}
                        className="
                                w-full md:w-auto
                                bg-[#5c8018]
                                text-white
                                px-10 py-3
                                font-medium
                                rounded-md
                                hover:bg-[#4e6f14]
                                transition-all duration-300"
                         >
                        Click Here
                    </button>

                </div>

                {/* RIGHT IMAGE */}
               <div className="w-full md:w-[30%] flex justify-center md:justify-end mt-6 md:mt-0 flex-shrink-0">
                    <div className="w-[240px] sm:w-[300px] md:w-[360px]">
                        <img
                            className="h-full w-auto object-cover rounded-sm"
                            src="https://nutriorg.com/cdn/shop/files/Ditesion.png?v=1647061394"
                            alt=""
                        />
                    </div>
                </div>

            </div>
          </section>

        </div>
    )
}

export default Gallery
