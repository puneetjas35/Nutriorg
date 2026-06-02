import React from 'react'

const OurStory = () => {
    return (
        <div className='ml-6'>
            <div className='text-[#6a5b5c] font-montserrat'>
                <h3 className='font-semibold mb-4  text-start text-[25px]'>Brand Story</h3>
                <p className='text-start text-black'>Founded in 2014 by the innovative minds of Mr. Satish
                    Raghav, Mr. Karan Singh Tomar, and their mentor,
                    Mr. Rattan Pal Singh, Nutriorg was born from a commitment to revolutionize the way we
                    nourish our bodies. The founders recognized that eating right is the key to a
                    healthy life, and this belief became the cornerstone of Nutriorg.</p>
            </div>
            <div className="max-w-5xl mt-6 mb-8 mx-auto">
            <div className="relative rounded-xl overflow-hidden cursor-pointer group">
                <a
                    href="https://www.youtube.com/watch?v=2dksd0vSGRc"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* Thumbnail */}
                    <img
                        src="https://img.youtube.com/vi/2dksd0vSGRc/maxresdefault.jpg"
                        alt="Nutriorg Video"
                        className="w-full rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20"></div>

                    {/* YouTube Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-red-600 w-20 h-14 rounded-2xl flex items-center justify-center shadow-xl">
                            <div
                                className="w-0 h-0 
                                        border-t-[12px] border-t-transparent
                                        border-b-[12px] border-b-transparent
                                         border-l-[20px] border-l-white
                                          ml-1"
                            />
                        </div>
                    </div>
                </a>
            </div>
            </div>
            <div className=''>
                <h3 className='font-semibold text-[25px] mb-6 text-[#6a5b5c]'>Empowering Farmers, Promoting Sustainability</h3>
                <img style={{ display: "block", margin: "0 auto" }} src="https://cdn.shopify.com/s/files/1/0522/2826/0008/files/story2.png?v=1608892296" alt="" />
                <p className='text-black mt-3 mb-8'>Nutriorg’s journey is not just about producing organic food; it’s about creating a sustainable future. The company has fostered strong relationships with farmers, encouraging them to adopt organic farming practices. By purchasing their produce at fair prices, Nutriorg helps increase their income and reduce their reliance on harmful chemicals and pesticides. This holistic approach ensures that everyone in the ecosystem benefits, from the growers to the consumers.</p>
            </div>
            <div>
                <h4 className='font-semibold text-[25px] mb-6 text-[#6a5b5c]'>Innovative and Eco-Friendly Practices</h4>
                <img style={{ display: "block", margin: "0 auto" }} src="https://cdn.shopify.com/s/files/1/0522/2826/0008/files/story1.png?v=1608889302" />
            </div>
        </div>
    )
}

export default OurStory