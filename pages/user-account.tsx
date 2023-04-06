import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import userImage from "../images/account-profile.svg";
import LocationIcon from "../images/location-icon.svg";
import OrderIcon from "../images/order-icon.svg";
import WishlistIcon from "../images/wishlist-icon.svg";
import BulkOrderIcon from "../images/bulkorder-icon.svg";
import feedbackIcon from "../images/feedback-icon.svg";
import supportIcon from "../images/support-icon.svg";
import logOutIcon from "../images/logout-icon.svg";
import Link from "next/link";
const UserAccount: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Head>
        <title>Nutrivellege</title>
      </Head>
      <section className="pt-[60px] pb-[100px]">
        <div className="border-b border-b-[#F0F0F0]">
          <div className="innerDiv mx-auto">
            <ul className="flex sm:gap-x-12 gap-x-6">
              <li>
                <a className="sm:text-[26px] text-[16px] sm:font-[700] font-[500] text-[#A6A6AA] block">Sign Up</a>
              </li>
              <li>
                <a className="sm:text-[26px] text-[16px] sm:font-[700] font-[500] text-[#A6A6AA] block">Sign In</a>
              </li>
              <li>
                <a className="sm:text-[26px] text-[16px] sm:font-[700] font-[500] text-[#3A3A3A] border-b-[3px] border-b-[#27874E] block">Your Account</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <div className="innerDiv mx-auto">
            <div className="flex flex-wrap sm:-mx-3">
              <div className="xl:w-1/2 lg:w-7/12 sm:px-3 w-full">
                <ul>
                  <li className="bg-[#F8FAF7] rounded-[16px] border border-[rgba(166,166,170,.6)]  md:py-[80px] sm:py-[60px] py-[40px]  lg:px-[60px] md:px-[50px] px-[20px]">
                    <div className="bg-[#27874E] rounded-[7px] py-[15px] px-[15px] mb-6 flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-[900] text-[18px]">Mansi Shah</h4>
                        <p className="text-[#FFF9CC] text-xs">703000043</p>
                      </div>
                      <div>
                        <div className="w-[50px] h-[50px] border-[2px] flex items-center justify-center border-white rounded-full">
                          <Image src={userImage} alt="" />
                        </div>
                      </div>
                    </div>
                    <ul className="mb-12">
                      <li className="flex sm:gap-x-4 gap-x-2 sm:gap-y-0 gap-y-4 flex-wrap sm:flex-nowrap justify-center text-center">
                        <a className="bg-[#27874E] rounded-[5px] sm:w-full w-[48%] pt-[20px] pb-2 inline-block px-4">
                          <Image src={LocationIcon} alt="" />
                          <h4 className="text-white text-xs font-[500] mt-2">Add Address</h4>
                        </a>
                        <a className="bg-[#27874E] rounded-[5px] sm:w-full w-[48%] pt-[28px] pb-2 inline-block px-4">
                          <Image src={OrderIcon} alt="" />
                          <h4 className="text-white text-xs font-[500] mt-2">Your orders</h4>
                        </a>
                        <a className="bg-[#27874E] rounded-[5px] sm:w-full w-[48%] pt-[27px] pb-2 inline-block px-4">
                          <Image src={WishlistIcon} alt="" />
                          <h4 className="text-white text-xs font-[500] mt-2">Wish list</h4>
                        </a>
                        <a className="bg-[#27874E] rounded-[5px] sm:w-full w-[48%] pt-[23px] pb-2 inline-block px-4">
                          <Image src={BulkOrderIcon} alt="" />
                          <h4 className="text-white text-xs font-[500] mt-2">Bulk Order</h4>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li className="mb-6"><a className="text-[#595454] font-[500] flex justify-between items-center"><span><Image src={feedbackIcon} alt=""/> <span className="align-super ml-2">Send feedback</span></span> <i className="fas fa-chevron-right"></i></a></li>
                      <li className="mb-6"><a className="text-[#595454] font-[500] flex justify-between items-center"><span><Image src={supportIcon} alt=""/> <span className="align-super ml-2">Support</span></span> <i className="fas fa-chevron-right"></i></a></li>
                      <li className=""><a className="text-[#595454] font-[500] flex justify-between items-center"><span><Image src={logOutIcon} alt=""/> <span className="align-super ml-2">Log out</span></span> <i className="fas fa-chevron-right"></i></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserAccount;
