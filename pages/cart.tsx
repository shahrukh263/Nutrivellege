import type { NextPage } from "next";
import Head from "next/head";
import cart1 from "../images/pfoduct-detail-img.png";
import Image from "next/image";
import cartIcon from "../images/cart.svg";
import DiscountIcon from "../images/discount-icon.svg";
const Cart: NextPage = () => {
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
                <a className="sm:text-[26px] text-[16px] sm:font-[700] font-[500] text-[#3A3A3A] border-b-[3px] border-b-[#27874E] block">Shopping Cart</a>
              </li>
              <li>
                <a className="sm:text-[26px] text-[16px] sm:font-[700] font-[500] text-[#A6A6AA] block">Shipping</a>
              </li>
              <li>
                <a className="sm:text-[26px] text-[16px] sm:font-[700] font-[500] text-[#A6A6AA] block">Payment</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart-data mt-12">
          <div className="innerDiv mx-auto">
            <p className="text-[#A6A6AA] text-[24px] mb-6">
              There are <span className="text-[#27874E]">3 Product</span> in the cart
            </p>
            <div className="flex flex-wrap sm:-mx-3">
              <div className="lg:w-8/12 sm:px-3 w-full">
                <ul>
                  <li className="bg-[#F8FAF7] rounded-[6px] flex items-center mb-6 sm:flex-row flex-col flex-wrap sm:justify-between justify-center border border-[rgba(166,166,170,.6)] py-[20px] sm:px-[20px] px-[15px]">
                    <div className="sm:inline-flex items-center gap-x-2">
                      <div className="sm:text-left text-center">
                        <Image src={cart1} width={100} height={100} objectFit="cover" alt="" />
                      </div>
                      <div>
                        <h4 className="text-[18px] font-[700] uppercase sm:text-left text-center">Dried khajoor</h4>
                        <div className="mt-3 flex space-x-4">
                          <select className="appearance-none border border-[#D7DADD] outline-none inline-block py-[6px] pl-[10px] rounded-[6px] text-[#424551] font-[700] text-sm">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          <select className="appearance-none border border-[#D7DADD] outline-none inline-block py-[6px] pl-[10px] rounded-[6px] text-[#424551] font-[700] text-sm">
                            <option>Size / Weight: 500gm</option>
                            <option>Size / Weight: 500gm</option>
                            <option>Size / Weight: 500gm</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="text-center sm:block flex sm:mt-0 mt-4 sm:gap-x-0 gap-x-2">
                      <a className="sm:mb-6 inline-block">
                        <i className="fa-solid fa-trash-can"></i>
                      </a>
                      <h4 className="text-[#27874E] sm:text-[22px] text-[18px] font-[900]">
                        <span className="font-[700]">₹</span>350
                      </h4>
                    </div>
                  </li>
                  <li className="bg-[#F8FAF7] rounded-[6px] flex items-center mb-6 sm:flex-row flex-col flex-wrap sm:justify-between justify-center border border-[rgba(166,166,170,.6)] py-[20px] sm:px-[20px] px-[15px]">
                    <div className="sm:inline-flex items-center gap-x-2">
                      <div className="sm:text-left text-center">
                        <Image src={cart1} width={100} height={100} objectFit="cover" alt="" />
                      </div>
                      <div>
                        <h4 className="text-[18px] font-[700] uppercase sm:text-left text-center">Dried khajoor</h4>
                        <div className="mt-3 flex space-x-4">
                          <select className="appearance-none border border-[#D7DADD] outline-none inline-block py-[6px] pl-[10px] rounded-[6px] text-[#424551] font-[700] text-sm">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          <select className="appearance-none border border-[#D7DADD] outline-none inline-block py-[6px] pl-[10px] rounded-[6px] text-[#424551] font-[700] text-sm">
                            <option>Size / Weight: 500gm</option>
                            <option>Size / Weight: 500gm</option>
                            <option>Size / Weight: 500gm</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="text-center sm:block flex sm:mt-0 mt-4 sm:gap-x-0 gap-x-2">
                      <a className="sm:mb-6 inline-block">
                        <i className="fa-solid fa-trash-can"></i>
                      </a>
                      <h4 className="text-[#27874E] sm:text-[22px] text-[18px] font-[900]">
                        <span className="font-[700]">₹</span>350
                      </h4>
                    </div>
                  </li>
                  <li className="bg-[#F8FAF7] rounded-[6px] flex items-center mb-6 sm:flex-row flex-col flex-wrap sm:justify-between justify-center border border-[rgba(166,166,170,.6)] py-[20px] sm:px-[20px] px-[15px]">
                    <div className="sm:inline-flex items-center gap-x-2">
                      <div className="sm:text-left text-center">
                        <Image src={cart1} width={100} height={100} objectFit="cover" alt="" />
                      </div>
                      <div>
                        <h4 className="text-[18px] font-[700] uppercase sm:text-left text-center">Dried khajoor</h4>
                        <div className="mt-3 flex space-x-4">
                          <select className="appearance-none border border-[#D7DADD] outline-none inline-block py-[6px] pl-[10px] rounded-[6px] text-[#424551] font-[700] text-sm">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          <select className="appearance-none border border-[#D7DADD] outline-none inline-block py-[6px] pl-[10px] rounded-[6px] text-[#424551] font-[700] text-sm">
                            <option>Size / Weight: 500gm</option>
                            <option>Size / Weight: 500gm</option>
                            <option>Size / Weight: 500gm</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="text-center sm:block flex sm:mt-0 mt-4 sm:gap-x-0 gap-x-2">
                      <a className="sm:mb-6 inline-block">
                        <i className="fa-solid fa-trash-can"></i>
                      </a>
                      <h4 className="text-[#27874E] sm:text-[22px] text-[18px] font-[900]">
                        <span className="font-[700]">₹</span>350
                      </h4>
                    </div>
                  </li>
                </ul>
                <button className="text-white font-[700] text-sm text-center bg-[#FAAC40] rounded-[6px] mt-2 py-[15px] inline-flex gap-x-2 lg:mb-0 mb-6 sm:w-auto w-full justify-center items-center px-5">
                  <i className="fa-solid fa-arrow-left"></i> <span>Continue Shopping</span>
                </button>
              </div>
              <div className="lg:w-1/3 w-full sm:px-3">
                <div className="bg-[#F8FAF7] rounded-[6px] mb-12 border border-[#A6A6AA] py-[40px] px-[30px]">
                  <ul>
                    <li className="flex justify-between pb-[15px] mb-[15px] border-b border-b-[#A6A6AA] border-dashed">
                      <h4 className="text-[#A6A6AA] font-[500]">Subtotal : </h4>
                      <span className="font-[500] text-[18px] text-black">900</span>
                    </li>
                    <li className="flex justify-between pb-[15px] mb-[15px] border-b border-b-[#A6A6AA] border-dashed">
                      <h4 className="text-[#A6A6AA] font-[500]">Discount : </h4>
                      <span className="font-[500] text-[18px] text-black">-100</span>
                    </li>
                    <li className="flex justify-between pb-[15px] mb-[15px] border-b border-b-[#A6A6AA] border-dashed">
                      <h4 className="text-[#A6A6AA] font-[500]">Shipping : </h4>
                      <span className="font-[500] text-[18px] text-black">Free</span>
                    </li>
                    <li className="flex justify-between pb-[15px] mb-[15px] border-b border-b-[#A6A6AA] border-dashed">
                      <h4 className="text-[#A6A6AA] font-[500]">Total : </h4>
                      <span className="font-[700] text-[18px] text-black">800</span>
                    </li>
                  </ul>
                  <button className="text-white font-[700] text-sm text-center bg-[#27874E] rounded-[6px] py-[15px] w-full flex justify-center items-center px-6 mt-9">
                    <Image src={cartIcon} alt="" /> <span>Checkout</span>
                  </button>
                </div>
                <div className="bg-[#F8FAF7] rounded-[6px] mb-12 border border-[#A6A6AA] py-[40px] px-[30px]">
                  <h4 className="text-[#3A3A3A] text-[18px] font-[500] mb-2">Apply Coupen</h4>
                  <div className="flex gap-x-2 flex-wrap">
                    <input type="text" placeholder="Enter Coupon" className="border border-[#D7DADD] mb-2 rounded-[6px] inline-block py-[10px] px-5 placeholder:text-[#A6A6AA]" />
                    <button className="text-white font-[700] text-sm text-center bg-[#FAAC40] rounded-[6px] mb-2 py-[15px] inline-flex justify-center items-center px-5">
                      <Image src={DiscountIcon} alt="" /> <span>Apply</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
