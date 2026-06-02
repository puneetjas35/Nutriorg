import React from 'react'

const About = () => {
    return (
        <div className='ml-4 mr-8'>
            <div className='flex items-start'>
                <h4 className='heading about-us font-montserrat text-[25px]  font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>
                    About Us
                </h4>
            </div>
            <h1 className='text-black font-montserrat text-[25px] font-semibold flex items-start mb-4'>WELCOME TO NUTRIORG</h1>
            <div className='content text-start'>
                <p>Established in 2011, Nutriorg has swiftly become a leading name in the health and wellness industry, renowned for
                    its commitment to organic detox and holistic wellness. Nutriorg's journey began with a mission to address the rising
                    lifestyle disorders and the deficiency of essential nutrients in the nation's diet. Founded by the visionary trio of
                    Mr. Satish Raghav, Mr. Karan Singh Tomar, and their mentor, Mr. Rattan Pal Singh, Nutriorg has grown exponentially, guided by a steadfast dedication to quality and sustainability.</p>

            </div>
            <div className='mt-9'>
                <h4 className='heading about-us font-montserrat text-[25px]  font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>
                    Our Farms and Products
                </h4>
                <div className="relative">
                    <a
                        href="https://www.youtube.com/watch?v=3btL62ymPs8"
                        class="ytSpecButtonShapeNextHost ytSpecButtonShapeNextTonal ytSpecButtonShapeNextOverlayDark ytSpecButtonShapeNextSizeL"
                    >
                        <img
                            src="https://img.youtube.com/vi/3btL62ymPs8/maxresdefault.jpg"
                            alt="Video"
                            className="rounded-xl"
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-red-600 w-16 h-12 rounded-xl flex items-center justify-center shadow-lg">
                                <div className="w-0 h-0 
                                      border-t-[10px] border-t-transparent
                                       border-b-[10px] border-b-transparent
                                      border-l-[16px] border-l-white
                                       ml-1"
                                />
                            </div>
                        </div>
                    </a>
                    <div className='text-start mt-3'>
                        <p>Nutriorg operates primarily in Rajasthan, where the majority of our production takes place. Our company-owned and certified organic farmlands span 1000 hectares across seven states, cultivating a diverse range of herbs, raw materials, and fruits such as Amla, Aloe vera, Ashwagandha, Shatavari, Tulsi, Neem, Lemon, Kinnoo, Stevia, Giloy, and Cissus. These ingredients are meticulously grown and harvested under stringent organic standards to ensure the highest quality and efficacy.</p>
                    </div>
                </div>
            </div>
            <div className='mt-9 items-center'>
                <h4 className='heading about-us font-montserrat text-[25px]  font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>
                    Our Commitment to Quality and Sustainability
                </h4>
                <div className="text-center">
                    <img className="mx-auto" src="https://cdn.shopify.com/s/files/1/0522/2826/0008/files/about_main_banner_51112e84-eaea-466a-8d11-579d567bff4b.png?v=1608895909" alt="" />
                    <p className='mt-2 px-6'>At Nutriorg, we believe that eating right is the key to a healthy life. Our entire product range is designed to improve immunity, aid in detoxification, and replenish the body's nutrients. We ensure that our products are available in their purest form, maintaining their effectiveness due to their organic nature. Our processing unit is strategically located on the farming premises to enable the immediate use of fresh produce in the manufacturing of all Nutriorg products, ensuring maximum potency and freshness.</p>
                </div>
            </div>
            <div className='mt-9 items-center'>
                <h4 className='heading about-us font-montserrat text-[25px]  font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>
                    Empowering Communities and Promoting Sustainability
                </h4>
                <p className='mt-4 px-6'>Nutriorg's commitment extends beyond just products. We work closely with local farmers, promoting organic farming methods and helping them enhance their income. Over 80% of our workforce in farming projects comprises women, reflecting our dedication to empowering communities and creating job opportunities in rural areas. We also prioritize eco-friendly practices, using recyclable and reusable packaging and solar-powered manufacturing units to minimize our environmental footprint.</p>
            </div>
            <div className='mt-9 items-center'>
                <h4 className='heading about-us font-montserrat text-[25px]  font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>
                    Global Presence And Recognition
                </h4>
                <img className='ml-6' src="https://cdn.shopify.com/s/files/1/0522/2826/0008/files/desk_99c829aa-7d17-4fa1-8bd2-7db90584120d.jpg?v=1664383591" alt="" />
                <p className='mt-3'>Starting from Rajasthan, Nutriorg has expanded its presence across India and internationally, including markets in the Gulf countries and Singapore. Our unwavering quality and excellence have earned us numerous awards and recognitions, such as the Suryaratna National Lifetime Achievement Award and the Indo International Achiever Award.</p>
            </div>
             <div className='mt-9 items-center'>
                <h4 className='heading about-us font-montserrat text-[25px]  font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>
                    Our Vision and Mission
                </h4>
                <img src="https://cdn.shopify.com/s/files/1/0522/2826/0008/files/FireShot_Capture_093_-_NutriOrg_-_nutriorg.com_-_Copy.png?v=1608887400" alt="" />
             </div>
             <div className='mt-9 items-center'>
                <h4 className='heading about-us font-montserrat text-[25px]  font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>
                    Join Us on Our Journey
                </h4>
                <p>Nutriorg invites you to join us on our journey towards holistic wellness and sustainable living. Together, we can create a future that celebrates health, wellness, and environmental responsibility.</p>
                </div>
            </div>

            )
}

            export default About