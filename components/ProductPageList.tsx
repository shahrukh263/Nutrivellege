import type { NextComponentType } from "next";
import Image from "next/image";
import Product1 from "../images/product-1.png";
import like from "../images/heart-icon.svg";
import cart from "../images/cart-icon.svg";
import star from "../images/yellow-star.svg";
import FilterIcon from "../images/filter.svg";
import { useState } from "react";
const ProductPageList: NextComponentType = () => {
  const [showMe, setShowMe] = useState(false);
  const [showDrop, setShowDrop] = useState(false);

  return (
    <>
      <section className="sm:py-[50px] py-[30px]">
        <div className="title border-b border-b-[#F0F0F0] mb-4">
          <div className="innerDiv mx-auto">
            <div className="sm:flex justify-between items-center">
              <h3 className="text-[26px] font-[700] border-b-[3px] sm:mb-0 mb-6 border-b-[#27874E] inline-block pb-3">Nuts</h3>
              <div className="sm:inline-flex sm:space-x-2">
                <div className="relative sm:mb-0 mb-4">
                  <a
                  onClick={() => {
                    setShowMe(!showMe);
                  }}
                  className="text-xs font-[700] text-[#3A3A3A] bg-[#F8FAF7] border border-[#A6A6AA] rounded-[6px] py-[7px] px-[15px] inline-flex sm:w-auto w-full justify-center items-center cursor-pointer">
                    <Image src={FilterIcon} alt="" /> <span>Filter by category</span> <i className="fas fa-chevron-down ml-1"></i>{" "}
                  </a>
                  <ul className={"absolute bg-[#F8FAF7] top-full z-[9] min-w-[190px] lg:shadow-[0px_2px_15px_rgba(0,0,0,0.1)] " + (showMe ? "":"hidden")}>
                    <li>
                      <a className="flex justify-between text-sm text-[#3A3A3A] py-[12px] px-[27px] border-b border-b-[#A6A6AA]">
                        <span>Almonds</span> <span className="inline-block text-[#A6A6AA]">8</span>
                      </a>
                    </li>
                    <li>
                      <a className="flex justify-between text-sm text-[#3A3A3A] py-[12px] px-[27px] border-b border-b-[#A6A6AA]">
                        <span>Nuts</span> <span className="inline-block text-[#A6A6AA]">4</span>
                      </a>
                    </li>
                    <li>
                      <a className="flex justify-between text-sm text-[#3A3A3A] py-[12px] px-[27px] border-b border-b-[#A6A6AA]">
                        <span>Dates</span> <span className="inline-block text-[#A6A6AA]">3</span>
                      </a>
                    </li>
                    <li>
                      <a className="flex justify-between text-sm text-[#3A3A3A] py-[12px] px-[27px] border-b border-b-[#A6A6AA]">
                        <span>More Nuts</span> <span className="inline-block text-[#A6A6AA]">3</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="relative">
                  <a
                  onClick={() => {
                    setShowDrop(!showDrop);
                  }}
                  className="cursor-pointer text-xs font-[700] text-[#3A3A3A] bg-[#F8FAF7] border border-[#A6A6AA] rounded-[6px] py-[7px] px-[15px] inline-flex sm:w-auto w-full justify-center items-center">
                    <Image src={FilterIcon} alt="" /> <span>Filter by Weight</span> <i className="fas fa-chevron-down ml-1"></i>{" "}
                  </a>

                  <ul className={"absolute bg-[#F8FAF7] top-full z-[9] min-w-[190px] lg:shadow-[0px_2px_15px_rgba(0,0,0,0.1)] " + ( showDrop ?"":"hidden")}>
                    <li>
                      <a className="flex justify-between text-sm text-[#3A3A3A] py-[12px] px-[27px] border-b border-b-[#A6A6AA]">
                        <span>250</span> <span className="inline-block text-[#A6A6AA]">gm</span>
                      </a>
                    </li>
                    <li>
                      <a className="flex justify-between text-sm text-[#3A3A3A] py-[12px] px-[27px] border-b border-b-[#A6A6AA]">
                        <span>500</span> <span className="inline-block text-[#A6A6AA]">gm</span>
                      </a>
                    </li>
                    <li>
                      <a className="flex justify-between text-sm text-[#3A3A3A] py-[12px] px-[27px] border-b border-b-[#A6A6AA]">
                        <span>1</span> <span className="inline-block text-[#A6A6AA]">kg</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
                  <a className="flex items-center">
                    <Image src={star} alt="" /> <span className="text-xs font-[700] ml-1 text-[rgba(0,0,0,0.6)]">4/5</span>
                  </a>
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
                  <a className="flex items-center">
                    <Image src={star} alt="" /> <span className="text-xs font-[700] ml-1 text-[rgba(0,0,0,0.6)]">4/5</span>
                  </a>
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
                  <a className="flex items-center justify-center">
                    <Image src={star} alt="" /> <span className="text-xs font-[700] ml-1 text-[rgba(0,0,0,0.6)]">4/5</span>
                  </a>
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
                  <a className="flex items-center">
                    <Image src={star} alt="" /> <span className="text-xs font-[700] ml-1 text-[rgba(0,0,0,0.6)]">4/5</span>
                  </a>
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
                  <a className="flex items-center">
                    <Image src={star} alt="" /> <span className="text-xs font-[700] ml-1 text-[rgba(0,0,0,0.6)]">4/5</span>
                  </a>
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
                  <a className="flex items-center justify-center">
                    <Image src={star} alt="" /> <span className="text-xs font-[700] ml-1 text-[rgba(0,0,0,0.6)]">4/5</span>
                  </a>
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
                  <a className="flex items-center">
                    <Image src={star} alt="" /> <span className="text-xs font-[700] ml-1 text-[rgba(0,0,0,0.6)]">4/5</span>
                  </a>
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
                  <a className="flex items-center">
                    <Image src={star} alt="" /> <span className="text-xs font-[700] ml-1 text-[rgba(0,0,0,0.6)]">4/5</span>
                  </a>
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
                  <a className="flex items-center justify-center">
                    <Image src={star} alt="" /> <span className="text-xs font-[700] ml-1 text-[rgba(0,0,0,0.6)]">4/5</span>
                  </a>
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
export default ProductPageList;
