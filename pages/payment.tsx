import type { NextPage } from "next";
import Head from "next/head";
import UpiIcon from "../images/upi-icon.svg";
import cardIcon from "../images/card-payment.svg";
import WalletIcon from "../images/wallet-payment.svg";
import NetbankingIcon from "../images/netbanking-icon.svg";
import secureIcon from "../images/secure-icon.svg";
import Image from "next/image";
const Payment: NextPage = () => {
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
                <a className="sm:text-[26px] text-[16px] sm:font-[700] font-[500] text-[#A6A6AA] block">Shopping Cart</a>
              </li>
              <li>
                <a className="sm:text-[26px] text-[16px] sm:font-[700] font-[500] text-[#A6A6AA] block">Shipping</a>
              </li>
              <li>
                <a className="sm:text-[26px] text-[16px] sm:font-[700] font-[500] text-[#3A3A3A] border-b-[3px] border-b-[#27874E] block">Payment</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-[80px]">
          <div className="innerDiv mx-auto">
            <ul className="lg:w-1/2 w-full">
              <li className="mb-4">
                <label className="flex items-center justify-between border border-[#E4E7EC] rounded-[6px] py-[12px] px-[12px]">
                  <div className="inline-flex gap-x-3">
                  <input type="radio" className="w-[15px]" name="payment" />
                  <div>
                    <h4 className="font-[700] text-[#344054]">Pay Via UPI</h4>
                    <p className="text-[#667085] text-sm">Use any registered UPI ID</p>
                  </div>
                  </div>
                  <a>
                    <Image src={UpiIcon} alt="" />
                  </a>
                </label>
              </li>
              <li className="mb-4">
                <label className="flex items-center justify-between border border-[#E4E7EC] rounded-[6px] py-[12px] px-[12px]">
                  <div className="inline-flex gap-x-3">
                  <input type="radio" className="w-[15px]" name="payment" />
                  <div>
                    <h4 className="font-[700] text-[#344054]">Debit/Credit cards</h4>
                    <p className="text-[#667085] text-sm">Visa, Mastercard, RuPay & more</p>
                  </div>
                  </div>
                  <a>
                    <Image src={cardIcon} alt="" />
                  </a>
                </label>
              </li>
              <li className="mb-4">
                <label className="flex items-center justify-between border border-[#E4E7EC] rounded-[6px] py-[12px] px-[12px]">
                  <div className="inline-flex gap-x-3">
                  <input type="radio" className="w-[15px]" name="payment" />
                  <div>
                    <h4 className="font-[700] text-[#344054]">Wallets</h4>
                    <p className="text-[#667085] text-sm">Paypal, Airtel, PayZapp & more</p>
                  </div>
                  </div>
                  <a>
                    <Image src={WalletIcon} alt="" />
                  </a>
                </label>
              </li>
              <li className="mb-4">
                <label className="flex items-center justify-between border border-[#E4E7EC] rounded-[6px] py-[12px] px-[12px]">
                  <div className="inline-flex gap-x-3">
                  <input type="radio" className="w-[15px]" name="payment" />
                  <div>
                    <h4 className="font-[700] text-[#344054]">Netbanking</h4>
                    <p className="text-[#667085] text-sm">Select from a list of banks</p>
                  </div>
                  </div>
                  <a>
                    <Image src={NetbankingIcon} alt="" />
                  </a>
                </label>
              </li>
            </ul>
            <p className="text-sm text-[#3A3A3A]"><Image src={secureIcon} alt=""/> <span className="align-super">We protect your payment information using encryption to provide bank-level security.</span></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
