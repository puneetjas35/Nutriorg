import React from 'react'
import { IoChevronUpSharp } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube, FaInstagram, FaPinterest } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = ({ scrollToSearch }) => {
  return (
    <div className='containerFooter'>
      <div className='mx-auto max-w-[1440px] mt-8 w-[90%] px-[20px]'>
        <div className='flex items-center justify-center'>
          <a href="" className='flex items-center gap-1 font-["Montserrat", sans-serif] font-normal text-[18px] leading-[0.05em] tracking-wider'>Back to the top<IoChevronUpSharp size={15} color="#000" /></a>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='text-start subscribeBar mx-16 my-7 flex items-start w-[400px] rounded-[3px] relative border border-[#5c8018]'>
          <input type="email" placeholder='Email Address' name="contact[email]" className='required h-[40px] p-2 font-medium text-[1em] leading-[1.2em] text-[#2d2d2d] tracking-wide min-h[32px] max-w-[100%] font-montserrat' />
          <input type="submit" value="Subscribe" className='max-w-[128px] items-center border w-full absolute top-0 right-0 h-auto bg-[#5c8018] text-white cursor-pointer p-2' />
        </div>
        <div className='social_icons mr-9'>
          <ul className='flex items-center justify-center gap-3 text-[20px]'>
            <li><a href=""><FaSquareFacebook /></a></li>
            <li><a href=""><FaYoutube /></a></li>
            <li><a href=""><FaInstagram /></a></li>
            <li><a href=""><FaPinterest /></a></li>
            <li><a href=""><AiOutlineLinkedin /></a></li>
          </ul>

        </div>
      </div>

      <div className='LogoText flex items-start justify-center'>
        <div className='LogoColumn  w-[120px] flex-shrink-0'>
          <a href="">
            <img className='items-start max-w-full h-12 block flex-none' src="https://nutriorg.com/cdn/shop/files/logos_-_Copy_90d33648-a865-459e-ac93-e7f7d8dab71c_500x.png?v=1614320101" alt="" />
          </a>
        </div>
        <div className='text_second_column w-[38%] flex-[0_0_38%] px-5 text-start'>
          <p className="text-[#2c2528] text-[16px] font-['Montserrat', sans-serif] font-normal break-words leading-[1.55em]">If It's Organic & Pure, It's NutriOrg. </p>
          <p className="text-[#2c2528] text-[16px] font-['Montserrat', sans-serif] font-['Montserrat', sans-serif] space-y-3 font-normal break-words leading-[1.55em]">Marketed By - Ananta Svastha Pvt. Ltd, Basement, Plot 35-36, Tilak Vihar B, Near cafe 206 Gokulpura Kalwar Road Jhotwara Jaipur Rajasthan- 302012</p>
          <p className="text-[#2c2528] text-[16px] font-['Montserrat', sans-serif] font-normal break-words leading-[1.55em]">
            <br />
            Manufactured By- Rattan Organic Foods Pvt. Ltd, Plot NO 35&36, Tilak Vihar B, Near Cafe 206 Gokulpura Kalwar Road Jhotwara Jaipur Rajasthan- 302012
          </p>
          <p className="text-[#2c2528] text-[16px] font-['Montserrat', sans-serif] font-normal break-words leading-[1.55em]"><br />
            Email : sales@nutriorg.com
            <br />
            Phone: +91 9119105555
          </p>

        </div>
        <div className='text_third_column leading-[1.8em] flex-[0_0_14%] px-3 text-start'>
          <ul className=''>
            <li> <button onClick={scrollToSearch} className="cursor-pointer">
              Search
            </button></li>
            <li><Link to="/orderstracking">Orders Tracking</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/shipping">Shipping&Delivery</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div className='text_fourth_column leading-[1.8em] flex-[0_0_14%] px-3 text-start'>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/ourstory">Brand Story</Link></li>
            <li><Link to="/founder">Founder's Note</Link></li>
            <li><Link to="/ourvalues">Our Values</Link></li>
            <li><Link to="/sustainable">Our <br />Responsibility</Link></li>
            <li><Link to="/ourcontributions">Our <br />Contributions</Link></li>
          </ul>
        </div>
        <div className='text_fifth_column leading-[1.8em] flex-[0_0_14%] px-3 text-start'>
          <ul>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
            <li><Link to="/return">Returns & <br />Exchanges</Link></li>
            
          </ul>
        </div>

      </div>
      <div className='copyright_section w-full text-left px-[3em] mt-9 py-0'>
        <div className='copy text-[0.9em] leading-[1.4em]'>Copyright © 2026 <a href="">Nutriorg</a>
        </div>
        <a href="">Powered by Shopify</a>
      </div>

    </div>
  )
}

export default Footer