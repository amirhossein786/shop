"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/footer";
import Image from "next/image";
import FeaturesSection from '@/app/about/components/FeaturesSeaction';
import HeaderAbout from "@/app/about/components/HeaderAbout";
import ParallaxSection from "@/app/about/components/imageAbout";
import PesonAbout from "@/app/about/components/personAbout";
export default function page() {
 
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
              <h1 className="">About us</h1>
            </div>
            <div className="col-12 justify-center items-center text-center text-lg pt-5 ">
              <span className="p-2">Home</span>
              <span className="p-2">{">"}</span>
              <span className="p-2">About us</span>
            </div>
          </div>
        </div>
      </section>
      <HeaderAbout/>
      <FeaturesSection />
      <ParallaxSection />
      <PesonAbout />

      <Footer />
    </div>
  );
}

