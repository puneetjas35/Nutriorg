import React from 'react'
import { useNavigate, Link } from "react-router-dom";


const Gallery = () => {
    const navigate = useNavigate();
    return (
        <div className='main_Gallery_Sectionn mt-10'>
            <div className='image_configure flex flex-col sm:flex-row flex-wrap justify-center gap-6 items-center'>
                <div className='outerWrapper w-full sm:w-[90%] md:w-[31%] h-[260px] sm:h-[367px] relative overflow-hidden group'>
                    <img className='w-full h-full object-cover' src="https://nutriorg.com/cdn/shop/files/Our_Story_1080x.jpg?v=1647066251" alt="" />
                    <div className='innerWrapper absolute inset-0 flex items-center justify-center'>
                        <div className='feature-subheader bg-[#eaeaea]/90 px-8 py-6 text-center'>
                            <p className='text-[#446408] text-[20px] font-["Montserrat",sans-serif] font-medium tracking-wide mb-2 leading-[1.4em]'>Our Story</p>
                            <a className="text-[#446408] text-[1em] font-normal underline " href="/OurStory">Read More</a>
                        </div>

                    </div>

                </div>
                <div className='outerWrapper w-full sm:w-[90%] md:w-[31%] h-[260px] sm:h-[367px] relative overflow-hidden group'>
                    <img className='w-full h-full object-cover' src="https://nutriorg.com/cdn/shop/files/empowering_14bdabe7-e635-4a2d-adda-263dbdf1475c.png?v=1664125247" alt="" />
                    <div className='innerWrapper absolute inset-0 flex items-center justify-center'>
                        <div className='feature-subheader bg-[#eaeaea]/90 px-8 py-6 text-center'>
                            <p className='text-[#446408] text-[20px] font-["Montserrat",sans-serif] font-medium tracking-wide mb-2 leading-[1.4em]'>Our<br></br> Contributions</p>
                            <Link className="text-[#446408] text-[1em] font-normal underline " to="/ourcontributions">Read More</Link>
                        </div>

                    </div>

                </div>

                <div className='outerWrapper w-full sm:w-[90%] md:w-[31%] h-[260px] sm:h-[367px] relative overflow-hidden group'>
                    <img className='w-full h-full object-cover' src="https://nutriorg.com/cdn/shop/files/our_Farms_1512x.jpg?v=1647066280" alt="" />
                    <div className='innerWrapper absolute inset-0 flex items-center justify-center'>
                        <div className='feature-subheader bg-[#eaeaea]/90 px-8 py-6 text-center'>
                            <p className='text-[#446408] text-[20px] font-["Montserrat",sans-serif] font-medium tracking-wide mb-2 leading-[1.4em]'>Our Farms</p>
                            <Link className="text-[#446408] text-[1em] font-normal underline " to="/ourvalues">Read More</Link>
                        </div>

                    </div>

                </div>
            </div>
            
                      <section className="mt-8 bg-[#f6f9ef]">
                  <div className="max-w-[1180px] mx-auto px-6 py-16">
                
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                
                      {/* Left */}
                      <div className="lg:max-w-[550px] text-center lg:text-left">
                        <h2 className="text-4xl font-semibold text-[#446408] mb-4">
                          Get Free Consultation
                        </h2>
                
                        <p className="text-gray-600 text-lg leading-8 mb-8">
                          Connect with our certified dietitian and get personalized
                          guidance for your health goals. Book your free consultation today.
                        </p>
                
                        <button
                          onClick={() => navigate("/consultation")}
                          className="bg-[#5c8018] text-white px-8 py-4 rounded-full font-medium hover:bg-[#4e6f14] transition mx-auto
                                        lg:mx-0 block"
                        >
                          Book Consultation
                        </button>
                      </div>
                
                      {/* Right */}
                      <div>
                        <img
                          src="https://nutriorg.com/cdn/shop/files/Ditesion.png?v=1647061394"
                          alt=""
                          className="w-[260px] sm:w-[320px] lg:w-[420px]"
                        />
                      </div>
                
                    </div>
                
                  </div>
                </section>

        </div>
    )
}

export default Gallery
