import type { NextPage } from "next";
import Head from "next/head";
import ProductDetails from "../components/ProductDetails";
import RelatedProducts from "../components/RelatedProducts";
import Image from "next/image";
import DetailsImg from "../images/product-detail-img.png";
const ProductDetailsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nutrivellege</title>
      </Head>
      <ProductDetails />
      <RelatedProducts />
      <div className="lg:pb-[100px] md:pb-[80px] sm:pb-[60px] pb-[40px]">
      <div className="innerDiv mx-auto">
        <Image src={DetailsImg} alt="" />
      </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
