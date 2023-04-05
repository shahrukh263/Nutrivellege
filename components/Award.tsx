import type { NextComponentType } from "next";
import Image from "next/image";
import Nature from "../images/nature.png";
import Health from "../images/health.png";
import Hypoallergenic from "../images/hypoallergenic.png";
const Award: NextComponentType = () => {
  return (
    <>
      <section className="sm:py-[50px] py-[30px]">
        <div className="innerDiv mx-auto">
          <div className="gradient-bg py-[30px] sm:px-[40px] px-6 rounded-[20px] shadow-[0px_44px_43px_-36px_rgba(73,7,150,0.1)]">
            <div className="flex items-center justify-between flex-wrap md:-sm-3">
              <div className="lg:w-1/3 md:w-1/2 w-full md:px-3">
                <div className="bg-[#FAAC40] rounded-[20px] px-[35px] py-[25px] inline-flex">
                  <div className="text-center sm:pr-6 pr-4 border-r border-[#F0E3FF]">
                    <h4 className="font-bold text-[40px] text-white">4.9</h4>
                    <p className="text-[#F0E3FF] sm:text-base text-sm">10K ratings</p>
                  </div>
                  <div className="text-center sm:pl-6 pl-4">
                    <h4 className="font-bold text-[40px] text-white">1M+</h4>
                    <p className="text-[#F0E3FF] sm:text-base text-sm">Total Sale</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full md:px-3 md:mt-0 mt-6">
                <p className="text-[#FAAC40] text-[20px]">
                  Trusted by over <strong>350,000+</strong> potenial customers accross the globe since 2010
                </p>
              </div>
              <div className="lg:w-1/3 w-full md:px-3">
                <div className="flex lg:justify-between justify-center lg:mt-0 mt-6">
                  <span>
                    <Image src={Nature} alt="" />
                  </span>
                  <span className="mx-2">
                    <Image src={Health} alt="" />
                  </span>
                  <span>
                    <Image src={Hypoallergenic} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Award;
