import type { NextComponentType } from "next";
import Image from "next/image";
import Product1 from "../images/product-1.png";
import like from "../images/heart-icon.svg";
import cart from "../images/cart-icon.svg";
import star from "../images/yellow-star.svg";
const BestSeller: NextComponentType = () => {
  return (
    <>
      <section className="sm:py-[50px] py-[30px]">
        <div className="title border-b border-b-[#F0F0F0] mb-4">
          <div className="innerDiv mx-auto">
            <h3 className="text-[26px] font-[700] border-b-[3px] border-b-[#27874E] inline-block">Best Seller</h3>
          </div>
        </div>
        <div className="innerDiv mx-auto">
          <div className="flex flex-wrap justify-between sm:-mx-3 mt-[100px]">
            <div className="sm:px-3 lg:w-[30%] md:w-1/2 sm:w-1/2 w-full">
              <div className="bg-white relative mb-[100px] rounded-[26px] shadow-[0px_2px_8px_rgba(0,0,0,0.1)] py-[25px] sm:px-[30px] px-[20px]">
                <div className="mt-[-100px]">
                  <Image src={Product1} alt="" />
                </div>
                <div className=" absolute right-[40px] top-[30px]">
                    <a className="flex items-center"><Image src={star} alt=""/> <span className="text-xs font-[700] ml-1 text-[rgba(0,0,0,0.6)]">4/5</span></a>
                </div>
                <h4 className="text-sm font-[700] uppercase text-black mb-4">Blackberry blustem</h4>
                <ul className="flex justify-between items-center">
                  <li className="border inline-flex items-center justify-center border-[rgba(0,0,0,.3] rounded-[5px]">
                    <a className="py-3 block px-4 border-r border-r-[rgba(0,0,0,.3]">
                      <Image src={like} alt="" />
                    </a>
                    <a className="block py-3 px-4">
                      <Image src={cart} alt="" />
                    </a>
                  </li>
                  <li>
                    <h4 className="text-[#27874E] sm:text-[22px] text-[18px] font-[900]">
                      <span className="font-[700]">₹</span>350
                    </h4>
                    <select className="text-sm font-[700] text-[#424551] border border-[#D7DADD] rounded-[6px] inline-block py-2 pl-2 outline-none appearance-none">
                      <option>500 gm</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sm:px-3 lg:w-[30%] md:w-1/2 sm:w-1/2 w-full">
              <div className="bg-white relative mb-[100px] rounded-[26px] shadow-[0px_2px_8px_rgba(0,0,0,0.1)] py-[25px] sm:px-[30px] px-[20px]">
                <div className="mt-[-100px]">
                  <Image src={Product1} alt="" />
                </div>
                <div className=" absolute right-[40px] top-[30px]">
                    <a className="flex items-center"><Image src={star} alt=""/> <span className="text-xs font-[700] ml-1 text-[rgba(0,0,0,0.6)]">4/5</span></a>
                </div>
                <h4 className="text-sm font-[700] uppercase text-black mb-4">Blackberry blustem</h4>
                <ul className="flex justify-between items-center">
                  <li className="border inline-flex items-center justify-center border-[rgba(0,0,0,.3] rounded-[5px]">
                    <a className="py-3 block px-4 border-r border-r-[rgba(0,0,0,.3]">
                      <Image src={like} alt="" />
                    </a>
                    <a className="block py-3 px-4">
                      <Image src={cart} alt="" />
                    </a>
                  </li>
                  <li>
                    <h4 className="text-[#27874E] sm:text-[22px] text-[18px] font-[900]">
                      <span className="font-[700]">₹</span>350
                    </h4>
                    <select className="text-sm font-[700] text-[#424551] border border-[#D7DADD] rounded-[6px] inline-block py-2 pl-2 outline-none appearance-none">
                      <option>500 gm</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sm:px-3 lg:w-[30%] md:w-1/2 sm:w-1/2 w-full">
              <div className="bg-white relative mb-[100px] rounded-[26px] shadow-[0px_2px_8px_rgba(0,0,0,0.1)] py-[25px] sm:px-[30px] px-[20px]">
                <div className="mt-[-100px]">
                  <Image src={Product1} alt="" />
                </div>
                <div className=" absolute right-[20px] top-[30px]">
                    <a className="flex items-center justify-center"><Image src={star} alt=""/> <span className="text-xs font-[700] ml-1 text-[rgba(0,0,0,0.6)]">4/5</span></a>
               <div className="text-white text-sm font-[700] bg-[#FAAC40] rounded-[7px] py-[8px] px-[20px] rotate-card mt-4">30% Off</div>
                </div>
                <h4 className="text-sm font-[700] uppercase text-black mb-4">Blackberry blustem</h4>
                <ul className="flex justify-between items-center">
                  <li className="border inline-flex items-center justify-center border-[rgba(0,0,0,.3] rounded-[5px]">
                    <a className="py-3 block px-4 border-r border-r-[rgba(0,0,0,.3]">
                      <Image src={like} alt="" />
                    </a>
                    <a className="block py-3 px-4">
                      <Image src={cart} alt="" />
                    </a>
                  </li>
                  <li>
                    <h4 className="text-[#27874E] sm:text-[22px] text-[18px] font-[900]">
                      <span className="font-[700]">₹</span>350
                    </h4>
                    <select className="text-sm font-[700] text-[#424551] border border-[#D7DADD] rounded-[6px] inline-block py-2 pl-2 outline-none appearance-none">
                      <option>500 gm</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
           
            <div className="sm:px-3 lg:w-[30%] md:w-1/2 sm:w-1/2 w-full">
              <div className="bg-white relative mb-[100px] rounded-[26px] shadow-[0px_2px_8px_rgba(0,0,0,0.1)] py-[25px] sm:px-[30px] px-[20px]">
                <div className="mt-[-100px]">
                  <Image src={Product1} alt="" />
                </div>
                <div className=" absolute right-[40px] top-[30px]">
                    <a className="flex items-center"><Image src={star} alt=""/> <span className="text-xs font-[700] ml-1 text-[rgba(0,0,0,0.6)]">4/5</span></a>
                </div>
                <h4 className="text-sm font-[700] uppercase text-black mb-4">Blackberry blustem</h4>
                <ul className="flex justify-between items-center">
                  <li className="border inline-flex items-center justify-center border-[rgba(0,0,0,.3] rounded-[5px]">
                    <a className="py-3 block px-4 border-r border-r-[rgba(0,0,0,.3]">
                      <Image src={like} alt="" />
                    </a>
                    <a className="block py-3 px-4">
                      <Image src={cart} alt="" />
                    </a>
                  </li>
                  <li>
                    <h4 className="text-[#27874E] sm:text-[22px] text-[18px] font-[900]">
                      <span className="font-[700]">₹</span>350
                    </h4>
                    <select className="text-sm font-[700] text-[#424551] border border-[#D7DADD] rounded-[6px] inline-block py-2 pl-2 outline-none appearance-none">
                      <option>500 gm</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sm:px-3 lg:w-[30%] md:w-1/2 sm:w-1/2 w-full">
              <div className="bg-white relative mb-[100px] rounded-[26px] shadow-[0px_2px_8px_rgba(0,0,0,0.1)] py-[25px] sm:px-[30px] px-[20px]">
                <div className="mt-[-100px]">
                  <Image src={Product1} alt="" />
                </div>
                <div className=" absolute right-[40px] top-[30px]">
                    <a className="flex items-center"><Image src={star} alt=""/> <span className="text-xs font-[700] ml-1 text-[rgba(0,0,0,0.6)]">4/5</span></a>
                </div>
                <h4 className="text-sm font-[700] uppercase text-black mb-4">Blackberry blustem</h4>
                <ul className="flex justify-between items-center">
                  <li className="border inline-flex items-center justify-center border-[rgba(0,0,0,.3] rounded-[5px]">
                    <a className="py-3 block px-4 border-r border-r-[rgba(0,0,0,.3]">
                      <Image src={like} alt="" />
                    </a>
                    <a className="block py-3 px-4">
                      <Image src={cart} alt="" />
                    </a>
                  </li>
                  <li>
                    <h4 className="text-[#27874E] sm:text-[22px] text-[18px] font-[900]">
                      <span className="font-[700]">₹</span>350
                    </h4>
                    <select className="text-sm font-[700] text-[#424551] border border-[#D7DADD] rounded-[6px] inline-block py-2 pl-2 outline-none appearance-none">
                      <option>500 gm</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sm:px-3 lg:w-[30%] md:w-1/2 sm:w-1/2 w-full">
              <div className="bg-white relative mb-[100px] rounded-[26px] shadow-[0px_2px_8px_rgba(0,0,0,0.1)] py-[25px] sm:px-[30px] px-[20px]">
                <div className="mt-[-100px]">
                  <Image src={Product1} alt="" />
                </div>
                <div className=" absolute right-[20px] top-[30px]">
                    <a className="flex items-center justify-center"><Image src={star} alt=""/> <span className="text-xs font-[700] ml-1 text-[rgba(0,0,0,0.6)]">4/5</span></a>
               <div className="text-white text-sm font-[700] bg-[#FAAC40] rounded-[7px] py-[8px] px-[20px] rotate-card mt-4">30% Off</div>
                </div>
                <h4 className="text-sm font-[700] uppercase text-black mb-4">Blackberry blustem</h4>
                <ul className="flex justify-between items-center">
                  <li className="border inline-flex items-center justify-center border-[rgba(0,0,0,.3] rounded-[5px]">
                    <a className="py-3 block px-4 border-r border-r-[rgba(0,0,0,.3]">
                      <Image src={like} alt="" />
                    </a>
                    <a className="block py-3 px-4">
                      <Image src={cart} alt="" />
                    </a>
                  </li>
                  <li>
                    <h4 className="text-[#27874E] sm:text-[22px] text-[18px] font-[900]">
                      <span className="font-[700]">₹</span>350
                    </h4>
                    <select className="text-sm font-[700] text-[#424551] border border-[#D7DADD] rounded-[6px] inline-block py-2 pl-2 outline-none appearance-none">
                      <option>500 gm</option>
                    </select>
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
export default BestSeller;
