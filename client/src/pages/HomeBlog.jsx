import React from 'react'

const blogData = [
    {
        id: 1,
        image: "https://nutriorg.com/cdn/shop/articles/Seabuckthorn_Aloe_Vera_Amla_Juice_The_Ultimate_Health_Boost_536296ca-5436-4425-aaab-19ba92f40909_1728x.jpg?v=1772014102",
        heading: "The Story Behind Our New Seabuckthorn Aloe Vera Amla Juice",
        description: "Posted on February 25, 2026 Karan Singh Tomar"
    },
    {
        id: 2,
        image: "https://nutriorg.com/cdn/shop/articles/Strong_from_the_Inside_8f2a9e18-b04d-420d-9ad4-af4a8a779adc_460x.jpg?v=1767869072",
        heading: "Vital Nutrition for Men: How Fruits, Seeds & Organic Foods Build Everyday Strength",
        description: "Posted on January 08, 2026 Karan Singh Tomar"
    },
    {
        id: 3,
        image: "https://nutriorg.com/cdn/shop/articles/Amla_for_Mental_Clarity_ecdc677c-f5f3-4ffe-bdfd-c1634d68ae53_460x.jpg?v=1766733493",
        heading: "Amla for Mental Clarity: The Brain-Boosting Benefits of India’s Wonder Fruit",
        description: "Posted on December 26, 2025 Karan Singh Tomar"
    },
    {
        id: 4,
        image: "https://nutriorg.com/cdn/shop/articles/Why_Omega-7_is_Nature_s_Secret_to_Radiant_Skin_7474c238-65bf-456c-a3b8-0ad5e1550357_460x.jpg?v=1765960870",
        heading: "Beauty Omegas: Why Omega-7 in Sea Buckthorn Makes It a Radiance Powerhouse",
        description: "Posted on December 17, 2025 Karan Singh Tomar"
    },
    {
        id: 5,
        image: "https://nutriorg.com/cdn/shop/articles/WhatsApp_Image_2025-12-10_at_3.07.00_PM_76aa8335-5344-4eb2-9a1f-1ab9850a26bf_460x.jpg?v=1765359749",
        heading: "Organic Sweeteners Showdown: Jaggery, Stevia & Honey — Which Wins for Your Skin and Mood?",
        description: "Posted on December 10, 2025 Karan Singh Tomar"
    },
    {
        id: 6,
        image: "https://nutriorg.com/cdn/shop/articles/Nutriorg_Sea_buckthorn_Juice_8c4b7814-011f-40cb-9b57-182dd732d791_460x.jpg?v=1744364041",
        heading: "Why Sea Buckthorn Juice Should Be Part of Your Daily Routine?",
        description: "Posted on April 18, 2025 Karan Singh Tomar"
    },
    {
        id: 7,
        image: "https://nutriorg.com/cdn/shop/articles/Your_paragraph_text_460x.png?v=1739451559",
        heading: "What Are Lifestyle Disorders & How Can They Be Prevented?",
        description: "Posted on February 13, 2025 Karan Singh Tomar"
    },
    {
        id: 8,
        image: "https://nutriorg.com/cdn/shop/articles/Chyawanprash_f19a28f1-c310-424c-893d-2f97418006ab_460x.jpg?v=1737117108",
        heading: "Nutriorg Vedic Chyawanprash: Your Health’s Best Friend, All Year Round!",
        description: "Posted on January 13, 2025 Karan Singh Tomar"
    },
    {
        id: 9,
        image: "https://nutriorg.com/cdn/shop/articles/jamun_thumbnail-min_460x.jpg?v=1724157135",
        heading: "What is Jamun, and What Are Its Health Benefits?",
        description: "Posted on August 20, 2024 Karan Singh Tomar"
    },
    {
        id: 10,
        image: "https://nutriorg.com/cdn/shop/articles/Wheat_Grass1-min_460x.jpg?v=1723896447",
        heading: "What is Wheat Grass, and What Are Its Health Benefits?",
        description: "Posted on August 17, 2024 Karan Singh Tomar"
    },
    {
        id: 11,
        image: "https://nutriorg.com/cdn/shop/articles/Why_is_Jaggery_a_Healthier_Alternative_to_Sugar_-_Nutriorg_460x.jpg?v=1722946928",
        heading: "Why is Jaggery a Healthier Alternative to Sugar?",
        description: "Posted on August 06, 2024 Karan Singh Tomar"
    }, {
        id: 12,
        image: "https://nutriorg.com/cdn/shop/articles/10_powders_thumbnial-min_460x.jpg?v=1722688157",
        heading: "10 Amazing Organic Powders for Skin, Hair, & Overall Body",
        description: "Posted on August 03, 2024 Karan Singh Tomar"
    }
]

const HomeBlog = () => {
    return (
        <div>

            <h5 className='text-start ml-6 mt-4 font-medium text-gray-500'>
                Home / Blogs
            </h5>

            <h4 className='text-center mt-7 text-[30px] font-semibold text-[#6a5b5c] mb-10'>
                Blogs
            </h4>

            <div className="max-w-[1400px] mx-auto px-6 py-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {blogData.map((item) => (
                        <div
                            key={item.id}
                            className="overflow-hidden rounded-xl shadow-lg group bg-white"
                        >

                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="w-full h-[280px] object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-4">

                                <h2 className="text-[18px] font-semibold mb-3 leading-7 text-[#2b2b2b]">
                                    {item.heading}
                                </h2>

                                <p className="text-gray-500 text-[14px]">
                                    {item.description}
                                </p>
                               
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default HomeBlog