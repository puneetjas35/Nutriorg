import React from 'react'

const NewsBlog = () => {
    return (
        <div className="main_news_section bg-[#f4f2e9]">
            {/* Heading */}
            <div className="heading px-16 py-10  flex items-center justify-between leading-[1.4em]">
                <h2 className="text-[24px] font-semibold uppercase tracking-normal text-[#9A8F96] hover:text-[#6a5b5c] transition-colors duration-300">
                    <a href="#" className="font-[Montserrat,sans-serif]">
                        NEWS & BLOG
                    </a>
                </h2>

                <a
                    href="#"
                    className="text-[17px] font-[Montserrat,sans-serif] text-[#A18E96] underline underline-offset-4"
                >
                    View all
                </a>
            </div>

            {/* CONTENT */}
            <div className="news_content max-w-[1180px] mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* FIRST NEWS IMAGE AND CONTENT */} 
                <div className='firstContent flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition'>
                    <div className='images_news_section w-full aspect-[16/9] overflow-hidden'>
                        <img className='w-full h-full object-cover block' src="https://nutriorg.com/cdn/shop/articles/Strong_from_the_Inside_8f2a9e18-b04d-420d-9ad4-af4a8a779adc_540x.jpg?v=1767869072" alt="" />
                    </div>
                    
                         <div className="p-4 flex flex-col flex-1">
                        <h2 className="text-[23px] text-start font-semibold text-[#6a5b5c] leading-[1.4em] mt-4 mb-2 font-['Montserrat',sans-serif]">
                            <a href="">Vital Nutrition for Men: How Fruits, Seeds & Organic Foods Build Everyday Strength</a>
                        </h2>
                   
                    <div className='para_text text-[16px] text-start text-[#2d2d2d] leading-[1.6em] mb-4'>
                        <p>When we think about
                            <em> nutrition for men</em>
                            , images of protein shakes, gym routines, and muscle supplements often come to mind. But true strength doesn’t start in the gym — it starts deep within your cells.
                        </p>
                        <p>Your body depends on
                            <strong>vitamins and minerals</strong>
                            to fuel energy, sharpen focus, support hormones, and protect long-term health. While the fundamentals of nutrition apply to everyone,
                            <strong>men have unique nutritional needs</strong>
                            , especially when it comes to
                            <strong>immunity, stamina, fertility, bone strength, and hormonal balance</strong>
                        </p>
                        <p>Let’s explore the
                            <strong>essential vitamins and minerals men need</strong>
                            , their natural food sources, and how
                            <strong>Nutriorg</strong>
                            helps you meet these needs organically and authentically.
                        </p>

                    </div>
                    
                        <a href="" className='text-[16px] leading-[1.4em] text-[#404040] inline-block underline underline-offset-4 font-medium font-["Montserrat",sans-serif] tracking-[0.04em] hover:text-[#000] transition-colors duration-20'>Read more</a>
                   
                </div>
            </div>

                {/* SECOND IMAGE AND CONTENT */}
                <div className='SecondContent flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition'>
                    <div className='images_news2_section h-[187px] w-full overflow-hidden'>
                        <img className='w-full h-full object-cover block' src="https://nutriorg.com/cdn/shop/articles/Amla_for_Mental_Clarity_ecdc677c-f5f3-4ffe-bdfd-c1634d68ae53_540x.jpg?v=1766733493" alt="" />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                        <h2 className="text-[23px] text-start font-semibold text-[#6a5b5c] leading-[1.4em] mt-4 mb-2 font-['Montserrat',sans-serif]">
                            <a href="">Amla for Mental Clarity: The Brain-Boosting Benefits of India’s Wonder Fruit</a>
                        </h2>
                   
                    <div className='para2_text text-[16px] text-start leading-[1.6em] text-[#2d2d2d] mb-4'>
                        <p>Amla isn’t just for immunity—it’s a powerful brain tonic. Discover how this Ayurvedic superfruit supports mental clarity, focus, memory, and emotional balance naturally.</p>
                    </div>
                    <div className='text-start anchor_readMore'>
                        <a href="" className='text-[16px] leading-[1.4em] text-[#404040] inline-block underline underline-offset-4 font-medium font-["Montserrat",sans-serif] tracking-[0.04em] hover:text-[#000] transition-colors duration-20'>Read more</a>
                    </div>
                </div>
                </div>

                {/* THIRD IMAGE AND CONTENT */}
                <div className='thirdContent flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition'>
                    <div className='images_news3_section  h-[187px] w-full overflow-hidden'>
                        <img className="w-full h-full object-cover block" src="https://nutriorg.com/cdn/shop/articles/Why_Omega-7_is_Nature_s_Secret_to_Radiant_Skin_7474c238-65bf-456c-a3b8-0ad5e1550357_540x.jpg?v=1765960870" alt="" />
                    </div>
                
                <div className="p-4 flex flex-col flex-1">
                    <h2 className="text-[23px] font-semibold text-[#6a5b5c] text-start leading-[1.4em] mt-4 mb-2 font-['Montserrat',sans-serif]">
                        <a href="">Beauty Omegas: Why Omega-7 in Sea Buckthorn Makes It a Radiance Powerhouse</a>
                    </h2>
                
                <div className='para3_text text-[16px] text-start leading-[1.6em] text-[#2d2d2d] mb-4'>
                    <p>Discover why Omega-7 from Sea Buckthorn is known as the “beauty omega.” Learn how this rare fatty acid supports glowing skin, gut health, and overall wellness—naturally, with Nutriorg.</p>
                </div>
                <div className='text-start anchor_readMore'>
                    <a href="" className='text-[16px] leading-[1.4em] text-[#404040] inline-block underline underline-offset-4 font-medium font-["Montserrat",sans-serif] tracking-[0.04em] hover:text-[#000] transition-colors duration-20'>Read more</a>
                </div>
                </div>
            </div>
        </div>
        </div>
    )

}

export default NewsBlog
