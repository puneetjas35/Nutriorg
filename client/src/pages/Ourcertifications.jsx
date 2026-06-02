import React from 'react'

const Ourcertifications = () => {
  return (
    <div className='py-10'>
      
        <h4 className='text-start px-4 heading about-us font-montserrat text-[25px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>
          Our Certifications
        </h4>

      <h1 className='text-center text-black font-bold text-[30px] mb-8'>
        OUR CERTIFICATIONS
      </h1>

      <div className='flex flex-wrap justify-center items-center gap-8 px-4'>
        
        <img
          className='w-[300px] h-auto rounded-lg shadow-md object-contain'
          src="https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/Enorm-Gallery78483-Rattan-Organic-Foods-Pvt-Ltd-NOP-page-001-1648900790-62483ab64b9ee.jpg?v=1648900793&&width=1080"
          alt="Certification 1"
        />

        <img
          className='w-[300px] h-auto rounded-lg shadow-md object-contain'
          src="https://cdn.shopify.com/s/files/1/0522/2826/0008/t/5/assets/Enorm-Gallery78483-240052IN2100Z1E-EOS-page-001-1648900041-624837c9e57fc.jpg?v=1648900043&&width=1080"
          alt="Certification 2"
        />

      </div>
    </div>
  )
}

export default Ourcertifications