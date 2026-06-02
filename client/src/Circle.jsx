import React from 'react'

const Circle = () => {
    return (
        <div className='main_videoCircle block mt-[45px]'>
            <div className='relative'>
                <div className='flex justify-center items-start gap-6'>


                    {/* Circle 1 */}
                    <div className='flex flex-col items-center gap-2'>

                        {/* Border Circle */}
                        <div className='h-[140px] w-[140px] rounded-full border-[3px] border-[rgb(92,128,24)] flex justify-center items-center'>


                            {/* Video Mask */}
                            <div className='w-[125px] h-[125px]  rounded-full overflow-hidden'>
                                <video
                                    src="https://video.gumlet.io/64661d8e673536e1fe9044e2/662914f3989e3752bb364a92/main.mp4"
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    className="w-full h-full object-cover"
                                />
                                </div>
                                </div>
                                
                                <p className="text-[rgb(0,0,0)] font-semibold font-['Montserrat', sans-serif]">Nutriorg Stall</p>
                              
                            </div>
                       


        {/* ===== Circle 2 ===== */}
          <div className="flex flex-col items-center gap-2">
            {/* Border Circle */}
            <div className="w-[140px] h-[140px] rounded-full border-[3px] border-[rgb(92,128,24)] flex items-center justify-center">
              
              {/* Video Mask */}
              <div className="w-[125px] h-[125px] rounded-full overflow-hidden">
                <video
                  src="https://video.gumlet.io/64661d8e673536e1fe9044e2/6629159a989e3752bb364f9b/main.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            <p className="text-black font-semibold font-montserrat text-center leading-tight">
              Healthy <br /> Breakfast
            </p>
          </div>

        </div>
      </div>
    </div>
    )
}

export default Circle