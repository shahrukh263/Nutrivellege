import type { NextComponentType } from "next";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper";
import SliderImg1 from "../images/pfoduct-detail-img.png";
import Image from "next/image";
import cartIcon from "../images/cart.svg";
const ProductDetails: NextComponentType = () => {
  return (
    <>
      <section className="lg:py-[100px] md:py-[80px] py-[60px] product-details">
        <div className="innerDiv mx-auto">
          <div className="flex flex-wrap sm:-mx-3">
            <div className="lg:w-1/2 sm:px-2 w-full lg:mb-0 mb-12">
              <div className="border border-[#A6A6AA] rounded-[6px] py-[40px] lg:px-[60px] md:px-[40px] px-[20px] text-center">
                <Swiper
                  navigation={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Navigation, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Image src={SliderImg1} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src={SliderImg1} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src={SliderImg1} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="lg:w-1/2 w-full sm:px-3">
              <h1 className="text-[26px] font-[700] mb-[5px] text-black uppercase">Dried khajoor</h1>
              <div className="flex space-x-1">
                <a className="inline-block cursor-pointer text-[#FAAC40] text-xl">
                  <i className="fa-sharp fa-regular fa-star"></i>
                </a>
                <a className="inline-block cursor-pointer text-[#FAAC40] text-xl">
                  <i className="fa-sharp fa-regular fa-star"></i>
                </a>
                <a className="inline-block cursor-pointer text-[#FAAC40] text-xl">
                  <i className="fa-sharp fa-regular fa-star"></i>
                </a>
                <a className="inline-block cursor-pointer text-[#FAAC40] text-xl">
                  <i className="fa-sharp fa-regular fa-star"></i>
                </a>
                <a className="inline-block cursor-pointer text-[#FAAC40] text-xl">
                  <i className="fa-sharp fa-regular fa-star"></i>
                </a>
                <span className="text-[#3A3A3A] font-[500]">(4.0)</span>
              </div>
              <p className="mt-2 text-[#3A3A3A] font-[500]">Price for one</p>
              <div className="flex items-center">
                <h4 className="text-[#27874E] sm:text-[22px] text-[18px] font-[900] inline-block">
                  <span className="font-[700]">₹</span>350
                </h4>
                <div className="text-white text-sm font-[700] bg-[#FAAC40] rounded-[7px] py-[8px] px-[20px] rotate-card mt-6 inline-block ml-4">30% Off</div>
              </div>
              <p className="mt-8 text-[#3A3A3A] text-sm">
                Dried dates is soft and sticky, and has a sweet, caramel-like flavor that becomes more pronounced as they are dried. They are often used as a natural sweetener in baking, cooking, and smoothies, or as a healthy snack on their own.
              </p>
              <ul className="text-xs text-[#3A3A3A] mt-4 list-disc pl-4">
                <li className="mb-1">Fiber: Dried dates are a good source of dietary fiber, which is important for digestive health and helping to regulate blood sugar levels.</li>
                <li className="mb-1">Energy: Dried dates are high in natural sugars, including glucose, fructose, and sucrose, which provide a quick source of energy.</li>
                <li className="mb-1">Vitamins and Minerals: Dried dates are rich in vitamins and minerals, including potassium, magnesium, and vitamins B6 and K.</li>
                <li className="mb-1">Antioxidants: Dried dates contain antioxidants that help protect against cellular damage and may have anti-inflammatory effects.</li>
              </ul>
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
              <div className="mt-6 sm:flex sm:items-center sm:space-x-3">
                <a className="text-sm font-[700] text-white bg-[#FAAC40] inline-block py-[16px] px-[40px] rounded-[6px] sm:w-auto w-full text-center sm:mb-0 mb-4">Buy Now</a>
                <a className="text-sm font-[700] text-white bg-[#27874E] inline-block py-[12px] px-[40px] rounded-[6px] sm:w-auto w-full text-center">
                  <Image src={cartIcon} width={22} alt="" /> <span className="align-super">Add to cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="title border-b border-b-[#F0F0F0] mb-4 mt-[50px]">
          <div className="innerDiv mx-auto">
            <h3 className="text-[26px] font-[700] border-b-[3px] border-b-[#27874E] inline-block">Description</h3>
          </div>
        </div>
        <div className="innerDiv mx-auto">
          <p className="text-[#3A3A3A] text-[18px] mb-3">Eating almonds is the best legacy we have from our grandparents! Almonds are loaded with health benefits and are renowned worldwide for the same.</p>
          <p className="text-[#3A3A3A] text-[18px] mb-3">
            NutriVillage Sonora Almonds are as healthy and raw as they look. Our premium quality almonds are unprocessed, unsalted, and unroasted! Hygienically packed and delivered straight from our farmers to your home, these raw nuts are the perfect
            snack (that's healthy too!) for fitness enthusiasts and the all-time binger.
          </p>
          <p className="text-[#3A3A3A] text-[18px] mb-3">
            Our high-quality almonds can be a sprinkle of nutrition in your morning cereal or your tea time buddy. Consume it whichever way you like to lead a healthy lifestyle. And yes, our promise to maintain quality standards and provide you with the
            best is still strong!
          </p>
          <p className="text-[#3A3A3A] text-[18px] mb-3">So, leave the worries behind and consume only the best in the market.</p>
          <ul className="text-[18px] text-[#3A3A3A] mt-4 list-disc pl-4">
            <li className="mb-1">Fiber: Dried dates are a good source of dietary fiber, which is important for digestive health and helping to regulate blood sugar levels.</li>
            <li className="mb-1">Energy: Dried dates are high in natural sugars, including glucose, fructose, and sucrose, which provide a quick source of energy.</li>
            <li className="mb-1">Vitamins and Minerals: Dried dates are rich in vitamins and minerals, including potassium, magnesium, and vitamins B6 and K.</li>
            <li className="mb-1">Antioxidants: Dried dates contain antioxidants that help protect against cellular damage and may have anti-inflammatory effects.</li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
