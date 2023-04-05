/** @format */

import type { NextComponentType } from "next";
import Image from "next/image";
import Logo from "../images/logo.png";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import Twitter from "../images/twitter.svg";
import Linkedin from "../images/linkedin.svg";

const Footer: NextComponentType = () => {
  return (
    <>
      <footer className="bg-[#F8FAF7] sm:py-[50px] py-[30px]">
        <div className="border-b border-b-[#DFDFE0] pb-[50px] mb-[50px]">
          <div className="innerDiv mx-auto">
            <div className="lg:w-[75%] mx-auto xl:w-1/2">
              <h4 className="text-center text-[26px] font-[700]">Newsletter</h4>
              <p className="text-center text-[#3A3A3A] mb-6">Be the first one to know about discounts, offers and events weekly in your mailbox. Unsubscribe whenever you like with one click.</p>
              <div className="relative">
                <i className="fa-regular fa-envelope text-[#9A9EA6] absolute left-[20px] top-[25px]"></i>
                <input type="text" placeholder="Enter your email" className="block outline-none placeholder:text-[#9A9EA6] h-[64px] w-full py-[8px] pl-[50px] pr-[8px] rounded-[40px] shadow-[0px_2px_8px_rgba(0,0,0,0.1)]" />
                <button className="text-sm font-[700] text-white bg-[#27874E] py-[15px] inline-block px-[45px] rounded-[30px] absolute right-[8px] text-center top-[8px]">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="innerDiv mx-auto">
            <div className="flex flex-wrap sm:-mx-3 justify-between">
              <div className="sm:px-3 lg:w-1/3 md:w-1/2 w-full md:mb-0 mb-6">
                <Image src={Logo} alt="" />
                <p className="mt-3 text-[#3A3A3A] text-sm">Nutrivillage prioritise health & healthy snacking.</p>
                <p className="text-[#3A3A3A] text-sm">
                  Our products include dry fruits, coated dry fruits, nuts, healthy mixes, seeds and spices. When it comes to healthy snacking, there is no age restriction, and for everyone, is a dream come true....{" "}
                  <a className="text-[#4475F2] font-[700]">Read More</a>
                </p>
                <ul className="flex mt-3 gap-x-2">
                  <li>
                    <a>
                      <Image src={Facebook} alt="" />
                    </a>
                  </li>
                  <li>
                    <a>
						<Image src={Instagram} alt=""/>
					</a>
                  </li>
                  <li>
                    <a>
						<Image src={Twitter} alt=""/>
					</a>
                  </li>
				  <li>
                    <a>
						<Image src={Linkedin} alt=""/>
					</a>
                  </li>
                </ul>
              </div>
              <div className="sm:px-3 lg:w-2/12 md:w-2/12 sm:w-1/2 w-full md:mb-0 mb-6">
				<h4 className="font-[700] text-[18px] text-black mb-4">info</h4>
				<ul>
					<li><a className="text-sm text-[#3A3A3A] leading-[19px] mb-4 block">About us</a></li>
					<li><a className="text-sm text-[#3A3A3A] leading-[19px] mb-4 block">Terms & Condition</a></li>
					<li><a className="text-sm text-[#3A3A3A] leading-[19px] mb-4 block">Return & Refund</a></li>
					<li><a className="text-sm text-[#3A3A3A] leading-[19px] mb-4 block">Privacy Policy</a></li>
				</ul>
			  </div>
              <div className="sm:px-3 lg:w-2/12 md:w-2/12 sm:w-1/2 w-full md:mb-0 mb-6">
			  <h4 className="font-[700] text-[18px] text-black mb-4">Extra</h4>
				<ul>
					<li><a className="text-sm text-[#3A3A3A] leading-[19px] mb-4 block">Contact us</a></li>
					<li><a className="text-sm text-[#3A3A3A] leading-[19px] mb-4 block">Bulk Order</a></li>
					<li><a className="text-sm text-[#3A3A3A] leading-[19px] mb-4 block">Your Account</a></li>
					<li><a className="text-sm text-[#3A3A3A] leading-[19px] mb-4 block">Wish list</a></li>
				</ul>
			  </div>
              <div className="sm:px-3 lg:w-2/12 md:w-2/12 sm:w-1/2 w-full">
			  <h4 className="font-[700] text-[18px] text-black mb-4">Follow Us</h4>
				<ul>
					<li><a className="text-sm text-[#3A3A3A] leading-[19px] mb-4 block">Instagram </a></li>
					<li><a className="text-sm text-[#3A3A3A] leading-[19px] mb-4 block">Facebook</a></li>
					<li><a className="text-sm text-[#3A3A3A] leading-[19px] mb-4 block">Twitter</a></li>
					<li><a className="text-sm text-[#3A3A3A] leading-[19px] mb-4 block">LinkdIn</a></li>
				</ul>
			  </div>
            </div>
          </div>
        </div>
		<p className="text-center text-sm text-[#9A9EA6]">© 2000-2021, All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
