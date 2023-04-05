import type { NextComponentType } from "next";
import Image from "next/image";
import Category1 from "../images/nuts.png";
import Category2 from "../images/healthy-mix.png";
import Category3 from "../images/seeds.png";
import Category4 from "../images/dried-fruits.png";
import Category5 from "../images/spices.png";
const Category: NextComponentType = () => {
  return (
    <>
      <section className="sm:py-[50px] py-[30px]">
        <div className="title border-b border-b-[#F0F0F0] mb-4">
          <div className="innerDiv mx-auto">
            <h3 className="text-[26px] font-[700] border-b-[3px] border-b-[#27874E] inline-block">Category</h3>
          </div>
        </div>
        <div className="innerDiv mx-auto">
          <div className="bg-[#F8FAF7] rounded-[14px] py-[20px] px-6 filter-box">
            <ul className="flex justify-between flex-wrap sm:-mx-3">
              <li className="text-center sm:px-3 lg:w-[20%] md:w-[25%] sm:w-1/3 w-1/2 lg:mb-0 mb-4">
                <span>
                  <Image src={Category1} width={130} height={130} alt="" />
                </span>
                <h4 className="text-[18px] font-[700] text-[#3A3A3A] mt-2">Nuts</h4>
              </li>
              <li className="text-center sm:px-3 lg:w-[20%] md:w-[25%] sm:w-1/3 w-1/2 lg:mb-0 mb-4">
                <span>
                  <Image src={Category2} width={130} height={130} alt="" />
                </span>
                <h4 className="text-[18px] font-[700] text-[#3A3A3A] mt-2">Healthy Mix</h4>
              </li>
              <li className="text-center sm:px-3 lg:w-[20%] md:w-[25%] sm:w-1/3 w-1/2 lg:mb-0 mb-4">
                <span>
                  <Image src={Category3} width={130} height={130} alt="" />
                </span>
                <h4 className="text-[18px] font-[700] text-[#3A3A3A] mt-2">Seeds</h4>
              </li>
              <li className="text-center sm:px-3 lg:w-[20%] md:w-[25%] sm:w-1/3 w-1/2 lg:mb-0 mb-4">
                <span>
                  <Image src={Category4} width={130} height={130} alt="" />
                </span>
                <h4 className="text-[18px] font-[700] text-[#3A3A3A] mt-2">Dried Fruits</h4>
              </li>
              <li className="text-center sm:px-3 lg:w-[20%] md:w-[25%] sm:w-1/3 w-1/2 lg:mb-0 mb-4">
                <span>
                  <Image src={Category5} width={130} height={130} alt="" />
                </span>
                <h4 className="text-[18px] font-[700] text-[#3A3A3A] mt-2">Spices</h4>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Category;
