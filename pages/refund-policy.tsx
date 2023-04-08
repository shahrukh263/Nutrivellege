import type { NextPage } from "next";
import Head from "next/head";
const RefundPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nutrivellege</title>
      </Head>
      <section className="py-[50px]">
        <div className="border-b border-b-[#F0F0F0] mb-4">
          <div className="innerDiv mx-auto">
            <h1 className="text-[26px] font-[700] text-black inline-block border-b-[3px] border-b-[#27874E]">Return & Refund Policy</h1>
          </div>
        </div>
        <div className="innerDiv mx-auto">
          <h3 className="font-[700] text-[22px] text-black mb-7">Refunds, Returns & Cancellations Policy for Nutrivillage</h3>
          <p className="text-[18px] text-[#3A3A3A] font-[500] leading-[28px] tracking-[.5px]">
            At Nutrivillage, we take great pride in maintaining high product preparation, service, and delivery standards. In case you have faced any issue with our product or would like to share your feedback, we would love to hear that on
            <a className="text-[#2D71E5] underline" href="#">
              info@nutrivillage.in.
            </a>
          </p>

          <p className="text-[18px] text-[#3A3A3A] font-[500] leading-[28px] tracking-[.5px] my-5">Our returns, refunds, and exchange policies are pre-defined and mentioned below for everyone’s reference:</p>
          <h3 className="font-[700] text-[22px] text-black">Refunds</h3>
          <p className="text-[18px] text-[#3A3A3A] font-[500] leading-[28px] tracking-[.5px] mb-5">
            Due to the nature of our products, unfortunately, we at Nutrivillage do not have any refund policy. However, in a special case, the discretion to provide a refund will lie with the brand. In case of a refund, we would initiate a store credit or
            coupon code for the refund amount.
          </p>
          <h3 className="font-[700] text-[22px] text-black">Exchanges/Returns</h3>
          <p className="text-[18px] text-black font-[500] leading-[28px] tracking-[.5px]">
            We at Nutrivillage follow a 48-hour exchange policy.  Post 48 hours from delivery of the goods; it would not be possible for us to take any return or exchange request. To be eligible for a return, your item must be unused and in the same
            condition as delivered. It must be in the original packaging.
          </p>
          <p className="my-6 text-[18px] text-black font-[500] leading-[28px] tracking-[.5px]">
            We would only be able to provide a replacement in case of any defect or damage to the product delivered. In such cases, please send us an email at{" "}
            <a className="text-[#2D71E5] underline" href="#">
              info@nutrivillage.in
            </a>{" "}
            with the reason for return/exchange and any image(s) to support the claim, and the team will surely get back to you with a suitable solution.
          </p>
          <h3 className="font-[700] text-[22px] text-black">Cancellations</h3>
          <p className="mb-6 text-[18px] text-black font-[500] leading-[28px] tracking-[.5px]">Due to the nature of the products, once the order has been processed for dispatch, it would not be possible for us to accept any cancellations.</p>
        <div className="mt-12 bg-[#FFF7EC] rounded-[21px] py-[80px] px-3">
            <h4 className="text-center font-[700] md:text-[42px] text-[36px] text-[#3A3A3A]">Get 10% Off Your Order</h4>
        </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;
