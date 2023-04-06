import type { NextPage } from "next";
import Head from "next/head";
import cart1 from "../images/pfoduct-detail-img.png";
import Image from "next/image";
const Shipping: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nutrivellege</title>
      </Head>
      <section className="py-[60px]">
        <div className="border-b border-b-[#F0F0F0]">
          <div className="innerDiv mx-auto">
            <ul className="flex sm:gap-x-12 gap-x-6">
              <li>
                <a className="sm:text-[26px] text-[16px] sm:font-[700] font-[500] text-[#A6A6AA] block">Shopping Cart</a>
              </li>
              <li>
                <a className="sm:text-[26px] text-[16px] sm:font-[700] font-[500] text-[#3A3A3A] border-b-[3px] border-b-[#27874E] block">Shipping</a>
              </li>
              <li>
                <a className="sm:text-[26px] text-[16px] sm:font-[700] font-[500] text-[#A6A6AA] block">Payment</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-[80px]">
          <div className="innerDiv mx-auto">
            <div className="flex flex-wrap sm:-mx-3 lg:w-[75%]">
              <div className="sm:px-3 lg:w-1/2 md:w-1/2 w-full">
                <div className="mb-6">
                  <label className="block text-[#444150] font-[500] text-base mb-2">
                    E-mail<span className="text-[#27874E]">*</span>
                  </label>
                  <input type="text" className="block w-full border border-[#D9D9D9] py-[14px] px-4 rounded-[6px] outline-none" placeholder="Enter your email" />
                </div>
              </div>
              <div className="sm:px-3 lg:w-1/2 md:w-1/2 w-full">
                <div className="mb-6">
                  <label className="block text-[#444150] font-[500] text-base mb-2">
                    Mobile<span className="text-[#27874E]">*</span>
                  </label>
                  <input type="text" className="block w-full border border-[#D9D9D9] py-[14px] px-4 rounded-[6px] outline-none" placeholder="Enter your mobile" />
                </div>
              </div>
              <div className="sm:px-3 lg:w-1/2 md:w-1/2 w-full">
                <div className="mb-6">
                  <label className="block text-[#444150] font-[500] text-base mb-2">
                    Name<span className="text-[#27874E]">*</span>
                  </label>
                  <input type="text" className="block w-full border border-[#D9D9D9] py-[14px] px-4 rounded-[6px] outline-none" placeholder="Enter your full name" />
                </div>
              </div>
              <div className="sm:px-3 lg:w-1/2 md:w-1/2 w-full">
                <div className="mb-6">
                  <label className="block text-[#444150] font-[500] text-base mb-2">
                    Address<span className="text-[#27874E]">*</span>
                  </label>
                  <input type="text" className="block w-full border border-[#D9D9D9] py-[14px] px-4 rounded-[6px] outline-none" placeholder="Street,Apartment,suite,floor,etc." />
                </div>
              </div>
              <div className="sm:px-3 lg:w-1/2 md:w-1/2 w-full">
                <div className="mb-6">
                  <label className="block text-[#444150] font-[500] text-base mb-2">
                    Postal Code<span className="text-[#27874E]">*</span>
                  </label>
                  <input type="text" className="block w-full border border-[#D9D9D9] py-[14px] px-4 rounded-[6px] outline-none" placeholder="Enter your Code" />
                </div>
              </div>
              <div className="sm:px-3 lg:w-1/2 md:w-1/2 w-full">
                <div className="mb-6">
                  <label className="block text-[#444150] font-[500] text-base mb-2">
                    City<span className="text-[#27874E]">*</span>
                  </label>
                  <select className="block w-full border border-[#D9D9D9] py-[14px] px-4 rounded-[6px] outline-none appearance-none">
                    <option>Select your city</option>
                  </select>
                </div>
              </div>
              <div className="sm:px-3 lg:w-1/2 md:w-1/2 w-full">
                <div className="mb-6">
                  <label className="block text-[#444150] font-[500] text-base mb-2">
                  State<span className="text-[#27874E]">*</span>
                  </label>
                  <select className="block w-full border border-[#D9D9D9] py-[14px] px-4 rounded-[6px] outline-none appearance-none">
                    <option>Select your State</option>
                  </select>
                </div>
              </div>
              <div className="sm:px-3 lg:w-1/2 md:w-1/2 w-full">
                <div className="mb-6">
                  <label className="md:block text-[#444150] font-[500] text-base mb-2 hidden">
                  &nbsp;
                  </label>
                  <input type="submit" className="block w-full border border-[#27874E] bg-[#27874E] tracking-[.5px] text-white py-[14px] px-4 rounded-[6px] outline-none text-sm font-[700]" value={'Continue'} />
                </div>
              </div>
            </div>
            <label className="block mb-2">
              <input type="checkbox"/> <span className="text-sm font-[500] text-[#3A3A3A]">My billing and shipping adress are the same</span>
            </label>
            <label className="block">
              <input type="checkbox"/> <span className="text-sm font-[500] text-[#3A3A3A]">My billing and shipping adress are the same</span>
            </label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shipping;
