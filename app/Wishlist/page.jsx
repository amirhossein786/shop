'use client'
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/footer";
import products from "@/server/Data/shop";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag, FiEye } from "react-icons/fi";


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
              <h1 className="">Wishlist</h1>
            </div>
            <div className="col-12 justify-center items-center text-center text-lg pt-5 ">
              <span className="p-2">Home</span>
              <span className="p-2">{">"}</span>
              <span className="p-2">Wishlist</span>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="container mx-auto py-10">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {products &&
              products.map((product, index) => (
                <li
                  key={product.id || index}
                  className="bg-white hover:shadow-xl rounded-xl overflow-hidden p-4 relative group transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <a href="#" className="block">
                      <Image
                        src={product.image}
                        width={300}
                        height={300}
                        alt={product.name}
                        className="w-full object-cover h-80  transition-transform duration-500"
                      />
                      {product.isNew && (
                        <span className="absolute top-4 left-4 bg-white text-gray-900 text-xs font-medium py-1 px-2">
                          NEW
                        </span>
                      )}
                      <div className="absolute  inset-0 h-[50%] flex flex-col self-end   bg-gradient-to-t from-black opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </a>

                    <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-100">
                        <CiHeart size={18} />
                      </button>
                      <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75 hover:bg-gray-100">
                        <FiShoppingBag size={18} />
                      </button>
                      <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150 hover:bg-gray-100">
                        <FiEye size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <a
                      href="#"
                      className="block text-gray-800 font-medium text-base hover:text-gray-600 transition-colors"
                    >
                      {product.name}
                    </a>
                    <div className="mt-1">
                      {product.oldPrice && (
                        <del className="text-gray-400 mr-2 text-sm">
                          ${parseFloat(product.oldPrice).toFixed(2)}
                        </del>
                      )}
                      <span className="text-gray-900 font-medium">
                        ${parseFloat(product.price).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
