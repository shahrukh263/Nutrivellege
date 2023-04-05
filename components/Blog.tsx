import type { NextComponentType } from "next";
import Image from "next/image";
import blogimg1 from "../images/blog-1.png";
import blogimg2 from "../images/blog-2.png";
import blogimg3 from "../images/blog-3.png";
const Blog: NextComponentType = () => {
  return (
    <>
      <section className="sm:py-[50px] py-[30px]">
        <div className="innerDiv mx-auto">
          <div className="flex flex-wrap justify-between sm:-mx-3">
            <div className="sm:px-3 lg:w-1/3 md:w-1/3 sm:w-1/2 w-full">
              <div className="rounded-[16px] border border-[#A6A6AA] p-[10px] md:mb-0 mb-6">
                <Image src={blogimg1} alt="" className="w-full block" width={500} />
                <div className="flex items-center mb-3">
                  <span className="text-sm font-[500]">Health</span>
                  <span className="inline-block mx-3 w-[6px] h-[6px] rounded-full bg-[#FAAC40]"></span>
                  <span className="text-sm font-[500]">Jan 22, 2023</span>
                </div>
                <h4 className="font-[700] text-[20px] text-[#3A3A3A] mb-3">Healthy Nuts that makes your life Healthy</h4>
              <p className="text-xs font-[700] text-[#A6A6AA] tracking-[.5px] pb-[10px]">Nutrivillage prioritise health & healthy snacking.Our products include dry fruits, coated dry fruits, nuts, healthy mixes, seeds and spices. When it comes to healthy snacking, there is no age restriction, and for everyone, enjoying an evening with electable taste without compromising health is a dream come true. <a className="text-[#27874E]">Read all</a></p>
              </div>
            </div>
            <div className="sm:px-3 lg:w-1/3 md:w-1/3 sm:w-1/2 w-full">
              <div className="rounded-[16px] border border-[#A6A6AA] p-[10px] md:mb-0 mb-6">
                <Image src={blogimg2} alt="" className="w-full block" width={500} />
                <div className="flex items-center mb-3">
                  <span className="text-sm font-[500]">Health</span>
                  <span className="inline-block mx-3 w-[6px] h-[6px] rounded-full bg-[#FAAC40]"></span>
                  <span className="text-sm font-[500]">Jan 22, 2023</span>
                </div>
                <h4 className="font-[700] text-[20px] text-[#3A3A3A] mb-3">Healthy Nuts that makes your life Healthy</h4>
              <p className="text-xs font-[700] text-[#A6A6AA] tracking-[.5px] pb-[10px]">Nutrivillage prioritise health & healthy snacking.Our products include dry fruits, coated dry fruits, nuts, healthy mixes, seeds and spices. When it comes to healthy snacking, there is no age restriction, and for everyone, enjoying an evening with electable taste without compromising health is a dream come true. <a className="text-[#27874E]">Read all</a></p>
              </div>
            </div>
            <div className="sm:px-3 lg:w-1/3 md:w-1/3 sm:w-1/2 w-full">
              <div className="rounded-[16px] border border-[#A6A6AA] p-[10px] md:mb-0 mb-6">
                <Image src={blogimg3} alt="" className="w-full block" width={500} />
                <div className="flex items-center mb-3">
                  <span className="text-sm font-[500]">Health</span>
                  <span className="inline-block mx-3 w-[6px] h-[6px] rounded-full bg-[#FAAC40]"></span>
                  <span className="text-sm font-[500]">Jan 22, 2023</span>
                </div>
                <h4 className="font-[700] text-[20px] text-[#3A3A3A] mb-3">Healthy Nuts that makes your life Healthy</h4>
              <p className="text-xs font-[700] text-[#A6A6AA] tracking-[.5px] pb-[10px]">Nutrivillage prioritise health & healthy snacking.Our products include dry fruits, coated dry fruits, nuts, healthy mixes, seeds and spices. When it comes to healthy snacking, there is no age restriction, and for everyone, enjoying an evening with electable taste without compromising health is a dream come true. <a className="text-[#27874E]">Read all</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;
