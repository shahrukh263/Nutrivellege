import type { NextComponentType } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import SliderImg from "../images/slider-1.png";
import Image from "next/image";
const Hero: NextComponentType = () => {
  return (
    <>
      <div className="pt-[35px] hero-slider">
        <div className="innerDiv mx-auto">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src={SliderImg} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={SliderImg} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={SliderImg} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={SliderImg} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default Hero;
