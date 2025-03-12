"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/footer";
import LeftPage from "@/app/shop/components/leftPage";

import "swiper/css";
import "swiper/css/navigation";
import RightPage from "@/app/shop/components/rightPage";
export default function Page() {
  return (
    <div>
      <section>
        <Navbar />
        <Navbar2 className="bg-none" />
        <div className="w-full">
          <Image
            src="/images/store-bg.jpg"
            alt="bg"
            width={1000}
            height={1000}
            className="w-screen h-[400px]"
          />
          <div className="row absolute top-40 right-[47%]">
            <div className="col-12 justify-center items-center text-center text-6xl font-bold">
              <h1 className="">Shop</h1>
            </div>
            <div className="col-12 justify-center items-center text-center text-lg pt-5 ">
              <span className="p-2">Home</span>
              <span className="p-2">{">"}</span>
              <span className="p-2">shop</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/5 w-full lg:pr-8 mb-8 lg:mb-0">
              <LeftPage />
            </div>
            <div className="lg:w-4/5 w-full">
              <RightPage />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
