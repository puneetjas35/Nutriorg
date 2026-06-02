import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import Ourcontributions from './pages/Ourcontributions';

const Gallery = () => {
    const navigate = useNavigate();
    return (
        <div className='main_Gallery_Sectionn mt-10'>
            <div className='image_configure flex justify-evenly items-center'>
                <div className='outerWrapper h-[367px] w-[323px] relative overflow-hidden group'>
                    <img className='w-full h-full object-cover' src="https://nutriorg.com/cdn/shop/files/Our_Story_1080x.jpg?v=1647066251" alt="" />
                    <div className='innerWrapper absolute inset-0 flex items-center justify-center'>
                        <div className='feature-subheader bg-[#eaeaea]/90 px-8 py-6 text-center'>
                            <p className='text-[#446408] text-[20px] font-["Montserrat", sans-serif] font-medium tracking-wide mb-2 leading-[1.4em]'>Our Story</p>
                            <a className="text-[#446408] text-[1em] font-normal underline " href="/OurStory">Read More</a>
                        </div>

                    </div>

                </div>
                <div className='outerWrapper h-[367px] w-[323px] relative overflow-hidden group'>
                    <img className='w-full h-full object-cover' src="https://nutriorg.com/cdn/shop/files/empowering_14bdabe7-e635-4a2d-adda-263dbdf1475c.png?v=1664125247" alt="" />
                    <div className='innerWrapper absolute inset-0 flex items-center justify-center'>
                        <div className='feature-subheader bg-[#eaeaea]/90 px-8 py-6 text-center'>
                            <p className='text-[#446408] text-[20px] font-["Montserrat", sans-serif] font-medium tracking-wide mb-2 leading-[1.4em]'>Our<br></br> Contributions</p>
                            <Link className="text-[#446408] text-[1em] font-normal underline " to="/ourcontributions">Read More</Link>
                        </div>

                    </div>

                </div>

                <div className='outerWrapper relative h-[367px] w-[441px] overflow-hidden group'>
                    <img className='w-full h-full object-cover' src="https://nutriorg.com/cdn/shop/files/our_Farms_1512x.jpg?v=1647066280" alt="" />
                    <div className='innerWrapper absolute inset-0 flex items-center justify-center'>
                        <div className='feature-subheader bg-[#eaeaea]/90 px-8 py-6 text-center'>
                            <p className='text-[#446408] text-[20px] font-["Montserrat", sans-serif] font-medium tracking-wide mb-2 leading-[1.4em]'>Our Farms</p>
                            <Link className="text-[#446408] text-[1em] font-normal underline " to="/ourvalues">Read More</Link>
                        </div>

                    </div>

                </div>
            </div>

            <div className="main_gallery_text_consultation
                flex items-center
                max-w-[1180px] mx-auto
                mt-16 px-6  h-[450px]">

                {/* LEFT CONTENT */}
                <div className="w-[70%] flex flex-col justify-center
                  leading-[1.6em] mr-0 text-[rgb(161,142,150)]">

                    <h2 className="text-[25px] font-semibold mb-5 font-['Montserrat', sans-serif]">
                        Get Free Consultation!!
                    </h2>

                    <p className="text-[16px] font-normal font-['Montserrat',sans-serif] mb-6">
                        Connect with our Dietitian for a free consultation.<br />
                        Fill out this form and book a free appointment now!
                    </p>

                    <button
                        onClick={() => navigate("/consultation")}
                        className="inline-block w-full max-w-[750px]
                 bg-[#5c8018] text-white text-[18px] font-medium
                 py-2 px-10 text-center
                 rounded-sm border-2 border-[#5c8018]
                 hover:bg-[#4e6f14] transition-all duration-300"
                    >
                        Click Here
                    </button>

                </div>

                {/* RIGHT IMAGE */}
                <div className="w-[30%] flex justify-end flex-shrink-0 h-full mb-14">
                    <div className="w-[360px] h-full overflow-hidden">
                        <img
                            className="h-full w-auto object-cover rounded-sm"
                            src="https://nutriorg.com/cdn/shop/files/Ditesion.png?v=1647061394"
                            alt=""
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Gallery