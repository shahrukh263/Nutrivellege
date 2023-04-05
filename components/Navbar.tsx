import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";
import Logo from "../images/logo.png";
import User from "../images/user.svg";
import cartImg from "../images/cart.svg";
import offerImg from "../images/offer.svg";
import { useRef, useState } from "react";
import { useOnHoverOutside } from "../hooks/useOnHoverOutside";
const Navbar: NextComponentType = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);
  return (
    <>
      <div className="border-b-[#A6A6AA] pb-6 border-b">
        <header className="bg-[#F8FAF7]">
          <div className="px-6">
            <div className="lg:hidden flex items-center justify-between">
              <Link href={"/"} passHref>
                <a className="inline-block py-2">
                  <Image src={Logo} alt="" />
                </a>
              </Link>
              <div className="inline-flex gap-x-6 items-center">
                <a>
                  <Image src={User} alt="" />
                </a>
                <a className="bg-[#27874E] rounded-[15px] py-[10px] px-[12px] inline-flex items-center text-sm font-[600] text-white">
                  <Image src={cartImg} alt="" className="inline-block" />
                  <span>Cart :</span>
                </a>
                <a
                  className="inline-block text-[24px] show-menu"
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                >
                  <i className="fa-solid fa-bars"></i>
                </a>
              </div>
            </div>
            <nav className={"lg:flex items-center justify-between flex-wrap transition-all ease-in-out " + (showMenu ? "" : "hidden")} id="showMenu">
              <ul className="lg:flex xl:gap-x-12 lg:gap-x-6 items-center">
                <li className="lg:block hidden">
                  <Link href={"/"} passHref>
                    <a className="inline-block py-2">
                      <Image src={Logo} alt="" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={'/'} passHref>
                  <a className="inline-block text-black font-[700] text-base lg:py-0 py-4">Home</a>
                  </Link>
                </li>
                <li className="relative" ref={dropdownRef}>
                  <a onMouseOver={() => setMenuDropDownOpen(true)} className="inline-block text-black cursor-pointer font-[700] text-base lg:py-[32px] py-4">
                    All product <i className="fa-solid fa-caret-down"></i>
                  </a>
                  {isMenuDropDownOpen ? (
                    <ul className="lg:absolute bg-[#F8FAF7] top-full z-[9] lg:min-w-[190px] lg:shadow-[0px_2px_15px_rgba(0,0,0,0.1)]">
                      <li>
                        <Link href={"/product"} passHref>
                          <a className="block text-sm text-[#3A3A3A] py-[12px] px-[27px] border-b border-b-[#A6A6AA]">Nuts</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/product"} passHref>
                          <a className="block text-sm text-[#3A3A3A] py-[12px] px-[27px] border-b border-b-[#A6A6AA]">Healthy Mix</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/product"} passHref>
                          <a className="block text-sm text-[#3A3A3A] py-[12px] px-[27px] border-b border-b-[#A6A6AA]">Seeds</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/product"} passHref>
                          <a className="block text-sm text-[#3A3A3A] py-[12px] px-[27px] border-b border-b-[#A6A6AA]">Seeds</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/product"} passHref>
                          <a className="block text-sm text-[#3A3A3A] py-[12px] px-[27px] border-b border-b-[#A6A6AA]">Spices</a>
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li>
                  <a className="inline-block text-black font-[700] text-base lg:py-0 py-4">About us</a>
                </li>
                <li>
                  <a className="inline-block text-black font-[700] text-base lg:py-0 py-4">Blogs</a>
                </li>
              </ul>
              <div className="lg:inline-flex items-center gap-x-6">
                <div className="relative inline-block lg:pb-0 pb-4">
                  <input type="text" className="border border-[#6F6F6F] outline-none inline-block py-3 px-4 rounded-[40px] bg-transparent xl:min-w-[300px] lg:min-w-[260px] min-w-[250px]" placeholder="Search for Product" />
                  <span className="bg-[#FAAC40] flex justify-center items-center w-[30px] h-[30px] rounded-full text-white absolute right-[10px] top-[10px]">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </div>
                <a className="lg:inline-flex items-center block lg:pb-0 pb-4">
                  <Image src={offerImg} className="inline-block" alt="" />
                  <span className="font-[700] inline-block">Offers</span>
                </a>
              </div>
              <div className="lg:inline-flex hidden gap-x-6 items-center">
                <a>
                  <Image src={User} alt="" />
                </a>
                <a className="bg-[#27874E] rounded-[15px] py-3 px-[20px] inline-flex items-center text-sm font-[600] text-white">
                  <Image src={cartImg} alt="" className="inline-block" />
                  <span>Cart :</span>
                </a>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
