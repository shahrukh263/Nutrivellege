import type { NextComponentType } from "next";
import Image from "next/image";
import { useState } from "react";
const Faq: NextComponentType = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <section className="sm:py-[50px] py-[30px]">
        <div className="innerDiv mx-auto">
          <h4 className="text-center text-[36px] font-[700] text-[#18191F] mb-16">Frequently Asked Questions</h4>
          <div className="flex flex-wrap sm:-mx-3">
            <div className="sm:px-3 lg:w-1/2 w-full">
              <ul className="relative bg-white my-[40px] lg:w-[calc(100%+100px)]">
                <li className={"py-[24px] px-[16px] shadow-[0px_0px_1px_1px_rgba(0,0,0,0.15)] cursor-pointer " + (openTab === 1 ? "bg-[#FAFBFF]" : "bg-white")}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    className="flex justify-between items-center"
                  >
                    <div className="inline-flex items-center">
                      <span className={"inline-block sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] flex-shrink-0 rounded-full " + (openTab === 1 ? "bg-[rgba(39,135,78,1)]" : "bg-[rgba(39,135,78,0.6)]")}></span>
                      <span className="sm:text-[18px] text-base sm:ml-2 ml-1">Does Nutrivillage deliver products all over India?</span>
                    </div>
                    <i className="fa-solid fa-chevron-right text-[#27874E]"></i>
                  </a>
                </li>
                <li className={"py-[24px] px-[16px] shadow-[0px_0px_1px_1px_rgba(0,0,0,0.15)] cursor-pointer " + (openTab === 2 ? "bg-[#FAFBFF]" : "bg-white")}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    className="flex justify-between items-center"
                  >
                    <div className="inline-flex items-center">
                      <span className={"inline-block sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] flex-shrink-0 rounded-full " + (openTab === 2 ? "bg-[rgba(39,135,78,1)]" : "bg-[rgba(39,135,78,0.6)]")}></span>
                      <span className="sm:text-[18px] text-base sm:ml-2 ml-1">Does Nutrivillage deliver products all over India?</span>
                    </div>
                    <i className="fa-solid fa-chevron-right text-[#27874E]"></i>
                  </a>
                </li>
                <li className={"py-[24px] px-[16px] shadow-[0px_0px_1px_1px_rgba(0,0,0,0.15)] cursor-pointer " + (openTab === 3 ? "bg-[#FAFBFF]" : "bg-white")}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    className="flex justify-between items-center"
                  >
                    <div className="inline-flex items-center">
                      <span className={"inline-block sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] flex-shrink-0 rounded-full " + (openTab === 3 ? "bg-[rgba(39,135,78,1)]" : "bg-[rgba(39,135,78,0.6)]")}></span>
                      <span className="sm:text-[18px] text-base sm:ml-2 ml-1">Does Nutrivillage deliver products all over India?</span>
                    </div>
                    <i className="fa-solid fa-chevron-right text-[#27874E]"></i>
                  </a>
                </li>
                <li className={"py-[24px] px-[16px] shadow-[0px_0px_1px_1px_rgba(0,0,0,0.15)] cursor-pointer " + (openTab === 4 ? "bg-[#FAFBFF]" : "bg-white")}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(4);
                    }}
                    className="flex justify-between items-center"
                  >
                    <div className="inline-flex items-center">
                      <span className={"inline-block sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] flex-shrink-0 rounded-full " + (openTab === 4 ? "bg-[rgba(39,135,78,1)]" : "bg-[rgba(39,135,78,0.6)]")}></span>
                      <span className="sm:text-[18px] text-base sm:ml-2 ml-1">Does Nutrivillage deliver products all over India?</span>
                    </div>
                    <i className="fa-solid fa-chevron-right text-[#27874E]"></i>
                  </a>
                </li>
                <li className={"py-[24px] px-[16px] shadow-[0px_0px_1px_1px_rgba(0,0,0,0.15)] cursor-pointer " + (openTab === 5 ? "bg-[#FAFBFF]" : "bg-white")}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(5);
                    }}
                    className="flex justify-between items-center"
                  >
                    <div className="inline-flex items-center">
                      <span className={"inline-block sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] flex-shrink-0 rounded-full " + (openTab === 5 ? "bg-[rgba(39,135,78,1)]" : "bg-[rgba(39,135,78,0.6)]")}></span>
                      <span className="sm:text-[18px] text-base sm:ml-2 ml-1">Does Nutrivillage deliver products all over India?</span>
                    </div>
                    <i className="fa-solid fa-chevron-right text-[#27874E]"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="sm:px-3 lg:w-1/2 w-full">
              <div className="bg-[#FFF7EC] py-[24px] h-full lg:pr-[50px] lg:pl-[100px] px-[25px] rounded-[16px] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.15)]">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <h3 className="text-[18px] font-[700] text-[#18191F] mb-4">What is the shelf-life of snacks and other products of Nutrivillage?</h3>
                  <p className="text-[18px] text-black font-400]">Various products have a different shelf life and are mentioned on the product page or packaging. In addition, you may also contact us before ordering a particular product.</p>
                  <p className="text-[18px] text-black font-400]">Various products have a different shelf life and are mentioned on the product page or packaging. In addition, you may also contact us before ordering a particular product.</p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <h3 className="text-[18px] font-[700] text-[#18191F] mb-4">What is the shelf-life of snacks and other products of Nutrivillage?</h3>
                  <p className="text-[18px] text-black font-400]">Various products have a different shelf life and are mentioned on the product page or packaging. In addition, you may also contact us before ordering a particular product.</p>
                  <p className="text-[18px] text-black font-400]">In addition, you may also contact us before ordering a particular product.</p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <h3 className="text-[18px] font-[700] text-[#18191F] mb-4">What is the shelf-life of snacks and other products of Nutrivillage?</h3>
                  <p className="text-[18px] text-black font-400]">Various products have a different shelf life and are mentioned on the product page or packaging. In addition, you may also contact us before ordering a particular product.</p>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <h3 className="text-[18px] font-[700] text-[#18191F] mb-4">What is the shelf-life of snacks and other products of Nutrivillage?</h3>
                  <p className="text-[18px] text-black font-400]">Various products have a different shelf life and are mentioned on the product page or packaging. In addition, you may also contact us before ordering a particular product.</p>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <h3 className="text-[18px] font-[700] text-[#18191F] mb-4">What is the shelf-life of snacks and other products of Nutrivillage?</h3>
                  <p className="text-[18px] text-black font-400]">Various products have a different shelf life and are mentioned on the product page or packaging. In addition, you may also contact us before ordering a particular product.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Faq;
