import React from 'react'
import { IoChevronUpSharp } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube, FaInstagram, FaPinterest } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = ({ scrollToSearch }) => {
  return (
    <div className='containerFooter py-8'>
      <div className="mx-auto max-w-[1440px] w-[90%] px-4 sm:px-6">
        <div className='flex items-center justify-center'>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1 text-sm sm:text-base md:text-lg font-['Montserrat',sans-serif] tracking-wide"
          >
          Back to the top
  <IoChevronUpSharp size={15} />
</button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 px-4 sm:px-6 lg:px-16 my-8">
        <div className="text-start subscribeBar w-full max-w-md flex relative border border-[#5c8018] rounded overflow-hidden">
          <input type="email" placeholder='Email Address' name="contact[email]" 
             className="w-full h-10 px-3 pr-32 outline-none text-sm text-[#2d2d2d]" />
          <input
          type="submit"
          value="Subscribe"
          className="absolute right-0 top-0 h-full px-5 bg-[#5c8018] text-white cursor-pointer"
          />
        </div>
        <div className='social_icons'>
          <ul className="flex justify-center gap-4 text-xl">
            <li><a href="" className="transition-colors duration-300 hover:text-[#5c8018]"><FaSquareFacebook /></a></li>
            <li><a href="" className="transition-colors duration-300 hover:text-[#5c8018]"><FaYoutube /></a></li>
            <li><a href="" className="transition-colors duration-300 hover:text-[#5c8018]"><FaInstagram /></a></li>
            <li><a href="" className="transition-colors duration-300 hover:text-[#5c8018]"><FaPinterest /></a></li>
            <li><a href="" className="transition-colors duration-300 hover:text-[#5c8018]"><AiOutlineLinkedin /></a></li>
          </ul>

        </div>
      </div>

      <div className="LogoText max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        <div className="LogoColumn flex justify-center lg:justify-start">
          <a href="">
            <img className='h-12 w-auto max-w-full h-12 block flex-none' src="https://nutriorg.com/cdn/shop/files/logos_-_Copy_90d33648-a865-459e-ac93-e7f7d8dab71c_500x.png?v=1614320101" alt="nutriorg logo" />
          </a>
        </div>
        <div className="text_second_column md:col-span-2 lg:col-span-2 text-start">
          <p className="text-[#2c2528] text-sm sm:text-base font-['Montserrat', sans-serif] font-normal break-words leading-[1.55em]">If It's Organic & Pure, It's NutriOrg. </p>
          <p className="text-[#2c2528] text-sm sm:text-base font-['Montserrat', sans-serif] space-y-3 font-normal break-words leading-[1.55em]">Marketed By - Ananta Svastha Pvt. Ltd, Basement, Plot 35-36, Tilak Vihar B, Near cafe 206 Gokulpura Kalwar Road Jhotwara Jaipur Rajasthan- 302012</p>
          <p className="text-[#2c2528] text-sm sm:text-base font-['Montserrat', sans-serif] font-normal break-words leading-[1.55em]">
            <br />
            Manufactured By- Rattan Organic Foods Pvt. Ltd, Plot NO 35&36, Tilak Vihar B, Near Cafe 206 Gokulpura Kalwar Road Jhotwara Jaipur Rajasthan- 302012
          </p>
          <p className="text-[#2c2528]text-sm sm:text-base font-['Montserrat', sans-serif] font-normal break-words leading-[1.55em]"><br />
            Email : sales@nutriorg.com
            <br />
            Phone: +91 9119105555
          </p>

        </div>
        <div className='text_third_column text-start'>
          <ul className='space-y-2 text-sm sm:text-base px-3'>
            <li> <button onClick={scrollToSearch} className="cursor-pointer">
              Search
            </button></li>
            <li><Link className="hover:text-[#5c8018] transition-colors duration-300" to="/orderstracking">Orders Tracking</Link></li>
            <li><Link className="hover:text-[#5c8018] transition-colors duration-300" to="/faq">FAQs</Link></li>
            <li><Link className="hover:text-[#5c8018] transition-colors duration-300" to="/shipping">Shipping&Delivery</Link></li>
            <li><Link className="hover:text-[#5c8018] transition-colors duration-300" to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div className='text_fourth_column text-start'>
          <ul className="space-y-2 text-sm sm:text-base px-3">
            <li><Link className="hover:text-[#5c8018] transition-colors duration-300" to="/about">About us</Link></li>
            <li><Link className="hover:text-[#5c8018] transition-colors duration-300" to="/ourstory">Brand Story</Link></li>
            <li><Link className="hover:text-[#5c8018] transition-colors duration-300" to="/founder">Founder's Note</Link></li>
            <li><Link className="hover:text-[#5c8018] transition-colors duration-300" to="/ourvalues">Our Values</Link></li>
            <li><Link className="hover:text-[#5c8018] transition-colors duration-300" to="/sustainable">Our <br />Responsibility</Link></li>
            <li><Link className="hover:text-[#5c8018] transition-colors duration-300" to="/ourcontributions">Our <br />Contributions</Link></li>
          </ul>
        </div>
        <div className='text_fifth_column text-start'>
          <ul className="space-y-2 text-sm sm:text-base px-3">
            <li><Link className="hover:text-[#5c8018] transition-colors duration-300" to="/privacypolicy">Privacy Policy</Link></li>
            <li><Link className="hover:text-[#5c8018] transition-colors duration-300" to="/return">Returns & <br />Exchanges</Link></li>
            
          </ul>
        </div>

      </div>
     <div className="copyright_section border-t mt-8 pt-6 px-4 sm:px-6 lg:px-10 text-center sm:text-left">
        <div className='copy text-[0.9em] leading-[1.4em]'>Copyright © 2026 <a href="">Nutriorg</a>
        </div>
        <a href="">Powered by Shopify</a>
      </div>

    </div>
  )
}

export default Footer
