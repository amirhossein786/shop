"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/footer";
import products from "@/server/Data/collections";
export default function page() {
  const persianNumbers = ["02", "03", "05", "03", "08", "04"];

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
              <h1 className="">Collections</h1>
            </div>
            <div className="col-12 justify-center items-center text-center text-lg pt-5 ">
              <span className="p-2">Home</span>
              <span className="p-2">{">"}</span>
              <span className="p-2">Collections</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-10">
          {" "}
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {products &&
              products.length > 0 &&
              products.map((product, index) => (
                <li
                  key={product.id}
                  custom={index}
                  className="bg-white hover:shadow-xl rounded-xl overflow-hidden p-4 relative group 
             transition-all duration-300 hover:-translate-y-2"
                >
                  <div
                    className="absolute -top-2  -right-2 w-10 h-10 bg-blue-950 rounded-full z-50 opacity-0 
               flex items-center justify-center text-white text-sm
               transform scale-0 group-hover:scale-100 group-hover:opacity-100
               transition-all duration-300"
                  >
                    {persianNumbers[index]}
                  </div>
                  <div className="relative bg-gray-100">
                    <a href="#">
                      <Image
                        src={product.image}
                        width={200}
                        height={200}
                        alt={product.name}
                        className="w-full object-cover h-80 transition-all duration-500 
               group-hover:opacity-75"
                      />
                    </a>
                  </div>

                  <div className="mt-4 text-center relative">
                    <a
                      href="#"
                      className="relative inline-block group-hover:-translate-y-1 transition-transform duration-300"
                    >
                      {product.name}
                      <span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-black 
                   group-hover:w-full transition-all duration-300 
                   selection:ease-in-out"
                      ></span>
                    </a>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
