import type { NextPage } from "next";
import Head from "next/head";
import cart1 from "../images/pfoduct-detail-img.png";
import Image from "next/image";
import { useState } from "react";
import GoogleIcon from "../images/google-icon.svg";
import AppleIcon from "../images/apple-icon.svg";
import FacebookIcon from "../images/facebook-icon.svg";
import userIcon from "../images/user-login.svg";
import Link from "next/link";
const Login: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Head>
        <title>Nutrivellege</title>
      </Head>
      <section className="pt-[60px] pb-[100px]">
        <div className="border-b border-b-[#F0F0F0]">
          <div className="innerDiv mx-auto">
            <ul className="flex sm:gap-x-12 gap-x-6">
              <li>
                <a className="sm:text-[26px] text-[16px] sm:font-[700] font-[500] text-[#A6A6AA] block">Sign Up</a>
              </li>
              <li>
                <a className="sm:text-[26px] text-[16px] sm:font-[700] font-[500] text-[#3A3A3A] border-b-[3px] border-b-[#27874E] block">Sign In</a>
              </li>
              <li>
                <a className="sm:text-[26px] text-[16px] sm:font-[700] font-[500] text-[#A6A6AA] block">Your Account</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <div className="innerDiv mx-auto">
            <div className="flex flex-wrap sm:-mx-3">
              <div className="xl:w-1/2 lg:w-7/12 sm:px-3 w-full">
                <ul>
                  <li className="bg-[#F8FAF7] rounded-[16px] border border-[rgba(166,166,170,.6)]  py-[40px] xl:px-[90px] lg:px-[60px] md:px-[50px] px-[20px]">
                    <div className="text-center">
                      <Image src={userIcon} alt="" />
                    </div>

                    <div className="mb-6">
                      <label className="block text-[#444150] font-[500] text-base mb-2">
                        Email<span className="text-[#27874E]">*</span>
                      </label>
                      <input type="email" className="block w-full border border-[#D9D9D9] py-[14px] px-4 rounded-[6px] outline-none" placeholder="Enter your email" />
                    </div>
                    <div className="mb-6">
                      <label className="block text-[#444150] font-[500] text-base mb-2">
                        Password<span className="text-[#27874E]">*</span>
                      </label>
                      <div className="relative">
                        <input type={showPassword ? "text" : "password"} className="block w-full border border-[#D9D9D9] py-[14px] px-4 rounded-[6px] outline-none" placeholder="Enter Password" />
                        <a
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                          className="text-[#444150] text-[20px] absolute right-[10px] top-[12px] cursor-pointer"
                        >
                          <i className={showPassword ? "fa-sharp fa-solid fa-eye-slash" : "fa-regular fa-eye"}></i>
                        </a>{" "}
                      </div>
                    </div>
                    <div className="text-right mb-9">
                      <a className="block text-[#A6A6AA]">Forgot Password ?</a>
                    </div>
                    <div className="mb-9">
                      <input type="submit" className="block w-full text-[18px] font-[700] shadow-[0px_12px_21px_4px_rgba(68,97,242,0.15)] py-[14px] bg-[#27874E] px-4 rounded-[10px] text-white outline-none" value={"Sign In"} />
                    </div>
                    <div className="flex items-center mb-12">
                      <span className="inline-block h-[1px] w-[25%] bg-[#A6A6AA]"></span>
                      <span className="inline-block w-[50%] text-center text-[#A6A6AA] text-sm font-[500]">Or continue with</span>
                      <span className="inline-block h-[1px] w-[25%] bg-[#A6A6AA]"></span>
                    </div>
                    <div className="flex gap-x-4 mb-9">
                      <a className="bg-[#F6F6F6] hover:border-white hover:bg-white cursor-pointer transition-all ease-in-out hover:shadow-[0px_10px_13px_rgba(0,0,0,0.13)] border w-full border-[#DDDFDD] rounded-[10px] py-[15px] inline-flex justify-center items-center">
                        <Image src={GoogleIcon} alt="" />
                      </a>
                      <a className="bg-[#F6F6F6] hover:border-white border hover:bg-white cursor-pointer transition-all ease-in-out hover:shadow-[0px_10px_13px_rgba(0,0,0,0.13)] w-full border-[#DDDFDD] rounded-[10px] py-[15px] inline-flex justify-center items-center">
                        <Image src={AppleIcon} alt="" />
                      </a>
                      <a className="bg-[#F6F6F6] hover:border-white border hover:bg-white cursor-pointer transition-all ease-in-out hover:shadow-[0px_10px_13px_rgba(0,0,0,0.13)] w-full border-[#DDDFDD] rounded-[10px] py-[15px] inline-flex justify-center items-center">
                        <Image src={FacebookIcon} alt="" />
                      </a>
                    </div>
                    <p className="text-center text-[15px] font-[500] text-[#1E232C]">Don't have an account? <Link href={'/sign-up'} passHref><a className="text-[#FAAC40]">Register Now</a></Link></p>
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

export default Login;
