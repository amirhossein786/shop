import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import products from "@/server/Data/shop";
import Image from 'next/image';
export default function leftPage() {
  return (
    <div>
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Filter by categories
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-4 h-4 hover:flex justify-center items-center rounded-full border border-gray-300 hover: mr-3">
                        <span className=" bg-black    w-2 h-2 rounded-full">
                          {" "}
                        </span>
                      </span>
                      Chairs
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100">
                      22
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-4 h-4 hover:flex justify-center items-center rounded-full border border-gray-300 hover: mr-3">
                        <span className=" bg-black    w-2 h-2 rounded-full">
                          {" "}
                        </span>
                      </span>
                      Decor
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100">
                      28
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-4 h-4 hover:flex justify-center items-center rounded-full border border-gray-300 hover: mr-3">
                        <span className=" bg-black    w-2 h-2 rounded-full">
                          {" "}
                        </span>
                      </span>
                      Furnitures
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100">
                      36
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-4 h-4 hover:flex justify-center items-center rounded-full border border-gray-300 hover: mr-3">
                        <span className=" bg-black    w-2 h-2 rounded-full">
                          {" "}
                        </span>
                      </span>
                      Lighting
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100">
                      24
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center  text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-4 h-4 hover:flex justify-center items-center rounded-full border border-gray-300 hover: mr-3">
                        <span className=" bg-black    w-2 h-2 rounded-full">
                          {" "}
                        </span>
                      </span>
                      Sofas
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100">
                      26
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-4 h-4 hover:flex justify-center items-center rounded-full border border-gray-300 hover: mr-3">
                        <span className=" bg-black    w-2 h-2 rounded-full">
                          {" "}
                        </span>
                      </span>
                      Stools
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100">
                      33
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-4 h-4 hover:flex justify-center items-center rounded-full border border-gray-300 hover: mr-3">
                        <span className=" bg-black    w-2 h-2 rounded-full">
                          {" "}
                        </span>
                      </span>
                      Mirrors
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100">
                      22
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-10">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Filter by color
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-4 h-4 hover:flex justify-center items-center bg-black rounded-full mr-3">
                        {" "}
                        <span className=" bg-white    w-2 h-2 rounded-full">
                          {" "}
                        </span>
                      </span>
                      Black
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100">
                      05
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-4 h-4 hover:flex justify-center items-center bg-[#8E412E] rounded-full mr-3">
                        <span className=" bg-white    w-2 h-2 rounded-full">
                          {" "}
                        </span>
                      </span>
                      Brown
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100">
                      24
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-4 h-4 hover:flex justify-center items-center bg-[#E0A699] rounded-full mr-3">
                        {" "}
                        <span className=" bg-white    w-2 h-2 rounded-full">
                          {" "}
                        </span>
                      </span>
                      Pastel Pink
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100">
                      32
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-4 h-4 hover:flex justify-center items-center bg-[#9DA693] rounded-full mr-3">
                        {" "}
                        <span className=" bg-white    w-2 h-2 rounded-full">
                          {" "}
                        </span>
                      </span>
                      Light Green
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100">
                      09
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-4 h-4 hover:flex justify-center items-center bg-[#E7C06D] rounded-full mr-3">
                        <span className=" bg-white    w-2 h-2 rounded-full">
                          {" "}
                        </span>
                      </span>
                      Yellow
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100">
                      06
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-10">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Filter by fabric
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-6 h-6 hover:flex justify-center items-center rounded-full mr-3 border border-gray-200 overflow-hidden">
                        <Image
                          src="/images/fillter/1.jpg"
                          width={24}
                          height={24}
                          alt="Polyolefin"
                        />
                        <span className=" bg-white absolute top-[394] left-[350]    w-3 h-3 rounded-full z-50">
                          {" "}
                        </span>
                      </span>
                      Polyolefin
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100">
                      08
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-6 h-6 hover:flex justify-center items-center rounded-full mr-3 border border-gray-200 overflow-hidden">
                        <Image
                          src="/images/fillter/2.jpg"
                          width={24}
                          height={24}
                          alt="Jute Fabric"
                        />
                        <span className=" bg-white absolute top-[394] left-[350]    w-3 h-3 rounded-full z-50">
                          {" "}
                        </span>
                      </span>
                      Jute Fabric
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100">
                      03
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-6 h-6 hover:flex justify-center items-center rounded-full mr-3 border border-gray-200 overflow-hidden">
                        <Image
                          src="/images/fillter/3.jpg"
                          width={24}
                          height={24}
                          alt="Crepe Fabric"
                        />
                        <span className=" bg-white absolute top-[394] left-[350]    w-3 h-3 rounded-full z-50">
                          {" "}
                        </span>
                      </span>
                      Crepe Fabric
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100">
                      20
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-6 h-6 hover:flex justify-center items-center rounded-full mr-3 border border-gray-200 overflow-hidden">
                        <Image
                          src="/images/fillter/4.jpg"
                          width={24}
                          height={24}
                          alt="Wool Fabric"
                        />
                        <span className=" bg-white absolute top-[394] left-[350]    w-3 h-3 rounded-full z-50">
                          {" "}
                        </span>
                      </span>
                      Wool Fabric
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100">
                      08
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-10">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Filter by price
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-4 h-4 hover:flex justify-center items-center rounded-full border border-gray-300 mr-3">
                        {" "}
                        <span className=" bg-black    w-2 h-2 rounded-full">
                          {" "}
                        </span>
                      </span>
                      Less than $25
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100 ">
                      08
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-4 h-4 hover:flex justify-center items-center rounded-full border border-gray-300 mr-3">
                        <span className=" bg-black    w-2 h-2 rounded-full">
                          {" "}
                        </span>
                      </span>
                      $25 - $50
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100 ">
                      05
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-4 h-4 hover:flex justify-center items-center rounded-full border border-gray-300 mr-3">
                        <span className=" bg-black    w-2 h-2 rounded-full">
                          {" "}
                        </span>
                      </span>
                      $50 - $100
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100 ">
                      25
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-4 h-4 hover:flex justify-center items-center rounded-full border border-gray-300 mr-3">
                        <span className=" bg-black    w-2 h-2 rounded-full">
                          {" "}
                        </span>
                      </span>
                      $100 - $200
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100 ">
                      18
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-4 h-4 hover:flex justify-center items-center rounded-full border border-gray-300 mr-3">
                        <span className=" bg-black    w-2 h-2 rounded-full">
                          {" "}
                        </span>
                      </span>
                      $200 and above
                    </a>
                    <span className="text-gray-400 px-1.5 py-1  rounded-full bg-gray-100 ">
                      36
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mb-10">
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800">
                    New arrivals
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      className="w-7 h-7 flex items-center justify-center   hover:bg-gray-100 transition-colors"
                      id="prev-new-arrivals"
                    >
                      <FaArrowLeft />
                    </button>
                    <button
                      className="w-7 h-7 flex items-center justify-center  hover:bg-gray-100 transition-colors"
                      id="next-new-arrivals"
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>

                <Swiper
                  modules={[Navigation, Autoplay]}
                  slidesPerView={1}
                  spaceBetween={20}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    prevEl: "#prev-new-arrivals",
                    nextEl: "#next-new-arrivals",
                  }}
                  className="new-arrivals-swiper"
                >
                  {products &&
                    // تقسیم محصولات به گروه‌های 3 تایی
                    Array(Math.ceil(products.length / 3))
                      .fill()
                      .map((_, slideIndex) => (
                        <SwiperSlide key={`slide-${slideIndex}`}>
                          <div className="space-y-4">
                            {products
                              .slice(slideIndex * 3, slideIndex * 3 + 3)
                              .map((product, index) => (
                                <div
                                  key={
                                    product.id || `new-${slideIndex}-${index}`
                                  }
                                  className="flex mb-4 group"
                                >
                                  <div className="w-20 h-20 mr-4 overflow-hidden">
                                    <a href="#" className="block relative">
                                      <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={80}
                                        height={80}
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                      />
                                    </a>
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <a
                                      href="#"
                                      className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors"
                                    >
                                      {product.name}
                                    </a>
                                    <div className="mt-1">
                                      {product.oldPrice && (
                                        <del className="text-gray-400 mr-2 text-xs">
                                          $
                                          {parseFloat(product.oldPrice).toFixed(
                                            2
                                          )}
                                        </del>
                                      )}
                                      <span className="text-gray-900 text-sm font-medium">
                                        ${parseFloat(product.price).toFixed(2)}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </SwiperSlide>
                      ))}
                </Swiper>
              </div>

              <div className="mb-10">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Filter by tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="#"
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    Chairs
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    Decor
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    Furniture
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    Lighting
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    Mirrors
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    Modern
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    Sofas
                  </a>
                </div>
              </div>
            </div>
  )
}
