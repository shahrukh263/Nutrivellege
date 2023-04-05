import type { NextPage } from "next";
import Head from "next/head";
import cart1 from "../images/pfoduct-detail-img.png";
import Image from "next/image";
const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nutrivellege</title>
      </Head>
      <section className="py-[60px]">
        <div className="border-b border-b-[#F0F0F0]">
          <div className="innerDiv mx-auto">
            <ul className="flex space-x-12">
              <li>
                <a className="text-[26px] font-[700] text-[#3A3A3A] border-b-[3px] border-b-[#27874E] block">Shopping Cart</a>
              </li>
              <li>
                <a className="text-[26px] font-[700] text-[#A6A6AA] block">Shipping</a>
              </li>
              <li>
                <a className="text-[26px] font-[700] text-[#A6A6AA] block">Payment</a>
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
              <div className="lg:w-8/12 sm:px-3">
                <ul>
                  <li className="bg-[#F8FAF7] rounded-[6px] flex items-center border border-[rgba(166,166,170,.6)] py-[20px] px-[20px]">
                    <div>
                        <Image src={cart1} width={100} height={100} objectFit="cover" alt=""/>
                    </div>
                    <div>
                      <h4 className="text-[18px] font-[700] uppercase">Dried khajoor</h4>
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
                    <div></div>
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

export default Cart;
