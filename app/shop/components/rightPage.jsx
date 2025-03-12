import React from "react";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag, FiEye } from "react-icons/fi";
import products from "@/server/Data/shop";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
export default function rightPage() {
  return (
    <div>
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-200 pb-4 mb-8">
          <div className="flex items-center">
          <div className="flex pr-10  mb-4 sm:mb-0">
            <a
              href="#"
              className="mr-4 opacity-50 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/images/line/1.svg"
                alt="Grid view 2 columns"
                width={7}
                height={7}
              />
            </a>
            <a
              href="#"
              className="mr-4 opacity-50 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/images/line/2.svg"
                alt="Grid view 3 columns"
                width={10}
                height={10}
              />
            </a>
            <a
              href="#"
              className="mr-4 opacity-50 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/images/line/3.svg"
                alt="Grid view 4 columns"
                width={15}
                height={15}
              />
            </a>
            <a
              href="#"
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/images/line/4.svg"
                alt="List view"
                width={16}
                height={16}
              />
            </a>
          </div>

          <div className="text-sm text-gray-500  mb-4 sm:mb-0">
            Showing 1–12 of 48 results
          </div>
          </div>

          <div>
            <select className="border-0 text-sm text-gray-700 bg-transparent focus:outline-none cursor-pointer">
              <option value="">Default sorting</option>
              <option value="1">Sort by popularity</option>
              <option value="2">Sort by average rating</option>
              <option value="3">Sort by latest</option>
              <option value="4">Sort by price: low to high</option>
              <option value="5">Sort by price: high to low</option>
            </select>
          </div>
        </div>
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
                        className="w-full object-cover h-80  transition-transform duration-500 group-hover:scale-110"
                      />
                      {product.isNew && (
                        <span className="absolute top-4 left-4 bg-white text-gray-900 text-xs font-medium py-1 px-2">
                          NEW
                        </span>
                      )}
                      <div className="absolute  inset-0 h-[50%] flex flex-col self-end   bg-gradient-to-t from-black to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
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

        <div className="flex justify-center mt-12">
          <nav className="inline-flex">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 mr-4  "
            >
              <FaArrowLeft />
            </a>
            <a
              href="#"
              className="flex items-center rounded-full justify-center w-10 h-10  mr-4  hover:bg-gray-900 hover:text-white transition-colors"
            >
              01
            </a>
            <a
              href="#"
              className="flex items-center rounded-full justify-center w-10 h-10 mr-4  bg-gray-900 hover:text-white text-white"
            >
              02
            </a>
            <a
              href="#"
              className="flex items-center rounded-full justify-center w-10 h-10  mr-4  hover:bg-gray-900 hover:text-white transition-colors"
            >
              03
            </a>
            <a
              href="#"
              className="flex items-center rounded-full justify-center w-10 h-10  mr-7  hover:bg-gray-900 hover:text-white transition-colors"
            >
              04
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10   "
            >
              <FaArrowRight />
            </a>
          </nav>
        </div>
      </div>
  );
}
