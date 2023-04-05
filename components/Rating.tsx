import type { NextComponentType } from "next";
import Image from "next/image";
import user1 from "../images/avatar.png";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import NextImg from "../images/next-slide.svg";
import PrevImg from "../images/prev-slide.svg";
const Rating: NextComponentType = () => {
  return (
    <>
      <section className="sm:py-[50px] py-[30px] review-slider">
        <div className="innerDiv mx-auto relative">
          <div className="text-center">
            <a className="text-[#27874E] text-[20px]">
              <i className="fa fas fa-star"></i>
            </a>
            <a className="text-[#27874E] text-[20px] ml-1">
              <i className="fa fas fa-star"></i>
            </a>
            <a className="text-[#27874E] text-[20px] ml-1">
              <i className="fa fas fa-star"></i>
            </a>
            <a className="text-[#27874E] text-[20px] ml-1">
              <i className="fa-regular fa-star-half-stroke"></i>
            </a>
            <a className="text-[#27874E] text-[20px] ml-1">
              <i className="fa-regular fa-star-half-stroke"></i>
            </a>
          </div>
          <div className="lg:w-[80%] mx-auto">
            <Swiper
              grabCursor={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 60,
                },
              }}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="bg-white rounded-[16px] my-[100px] pt-[32px] px-[24px] pb-[24px] card-filter">
                  <p className="text-[#263162] font-[300] pb-[40px]">
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint.
                  </p>
                  <Image src={user1} alt="" />
                  <h4 className="font-[600] text-[#263162] mt-[15px]">Kieu Trinh</h4>
                  <p className="text-[#263162] font-[300]">Anzamie Consultant</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-[16px] my-[100px] pt-[32px] px-[24px] pb-[24px] card-filter">
                  <p className="text-[#263162] font-[300] pb-[40px]">
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint.
                  </p>
                  <Image src={user1} alt="" />
                  <h4 className="font-[600] text-[#263162] mt-[15px]">Kieu Trinh</h4>
                  <p className="text-[#263162] font-[300]">Anzamie Consultant</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-[16px] my-[100px] pt-[32px] px-[24px] pb-[24px] card-filter">
                  <p className="text-[#263162] font-[300] pb-[40px]">
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint.
                  </p>
                  <Image src={user1} alt="" />
                  <h4 className="font-[600] text-[#263162] mt-[15px]">Kieu Trinh</h4>
                  <p className="text-[#263162] font-[300]">Anzamie Consultant</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-[16px] my-[100px] pt-[32px] px-[24px] pb-[24px] card-filter">
                  <p className="text-[#263162] font-[300] pb-[40px]">
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint.
                  </p>
                  <Image src={user1} alt="" />
                  <h4 className="font-[600] text-[#263162] mt-[15px]">Kieu Trinh</h4>
                  <p className="text-[#263162] font-[300]">Anzamie Consultant</p>
                </div>
              </SwiperSlide>
            </Swiper>
              <div className="prev">
                <Image src={PrevImg} alt="" />
              </div>
              <div className="next">
                <Image src={NextImg} alt="" />
              </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Rating;
