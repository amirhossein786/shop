"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiShoppingBag, FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import navItems2 from "@/server/Data/NavItems";
import SearchModal from "@/components/SearchModal";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { bestSellers } from "@/server/Data/BestSellers";
import { newArrivals } from "@/server/Data/NewArrivals";
import useCart from "@/store/useCart";

import {
  categories1,
  categories2,
  categories3,
  categories4,
  categories5,
} from "@/server/Data/Categories";

export default function Navbar() {
  const [activeSearch, setActiveSearch] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { items, invoice, actions } = useCart();
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    console.log("Search term:", searchTerm);

    if (searchTerm === "") {
      setActiveSearch([]);
      return;
    }

    try {
      const validBestSellers = Array.isArray(bestSellers) ? bestSellers : [];
      const validNewArrivals = Array.isArray(newArrivals) ? newArrivals : [];

      const filteredBestSellers = validBestSellers
        .filter(
          (item) =>
            item &&
            typeof item === "object" &&
            item.name &&
            typeof item.name === "string" &&
            item.name.toLowerCase().includes(searchTerm)
        )
        .slice(0, 8);

      const filteredNewArrivals = validNewArrivals
        .filter(
          (item) =>
            item &&
            typeof item === "object" &&
            item.name &&
            typeof item.name === "string" &&
            item.name.toLowerCase().includes(searchTerm)
        )
        .slice(0, 8);

      const results = [
        ...filteredBestSellers.map((item) => ({
          id: item.id || Math.random().toString(36).substr(2, 9),
          name: item.name || "",
          image: item.image || "",
          price: item.price || 0,
          oldPrice: item.oldPrice || null,
        })),
        ...filteredNewArrivals.map((item) => ({
          id: item.id || Math.random().toString(36).substr(2, 9),
          name: item.name || "",
          image: item.image || "",
          price: item.price || 0,
          oldPrice: item.oldPrice || null,
        })),
      ];

      console.log("Search results:", results);
      console.log(
        "Final results before setting state:",
        JSON.stringify(results)
      );

      setActiveSearch(results);
    } catch (error) {
      console.error("Error in handleSearch:", error);
      setActiveSearch([]);
    }
  };

  return (
    <div
      className={`${
        isHovered ? "bg-white z-50 border border-b-2 border-t-2" : "bg-blue-50"
      } flex transition-colors justify-start absolute items-center text-center  p-5 w-full`}
    >
      <div className="flex justify-start items-center z-20 gap-2">
        <Image
          src="/images/logo.webp"
          alt="لوگو"
          width={1000}
          height={1000}
          className="w-40 h-10 flex justify-start items-center"
        />
      </div>

      <ul className="flex justify-start items-center pl-20 z-50 gap-14 relative">
        <li>
          <Link href="/" className="text-gray-700 opacity-50 text-2xl">
            Home
          </Link>
        </li>

        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <li>
            <Link
              href="/"
              className="text-gray-700 text-2xl group-hover:opacity-50 "
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Shop
            </Link>
          </li>

          <div
            className="absolute mb-10 hidden group-hover:flex w-screen  bg-gray-50 shadow-md p-5 z-[9999] flex-col gap-5 items-center text-center -left-[380px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex flex-row pt-20 border-t-2 gap-10 justify-center">
              {[
                categories1,
                categories2,
                categories3,
                categories4,
                categories5,
              ].map((categories, index) => (
                <div key={index} className="flex flex-col">
                  {categories.map((category) => (
                    <p
                      key={category.id}
                      className="text-black opacity-70 hover:opacity-100 transition pl-24 text-left items-center justify-center text-lg"
                    >
                      {category.name}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-5 mt-5">
              <Image
                src="/images/shop1.jpg"
                alt="shop image 1"
                width={1000}
                height={1000}
                className="w-[600px] h-60 object-contain"
              />
              <Image
                src="/images/shop2.jpg"
                alt="shop image 2"
                width={1000}
                height={1000}
                className="w-[600px] h-60 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="relative group">
          <li>
            <Link
              href="/"
              className="text-gray-700 text-2xl group-hover:opacity-50"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Collections
            </Link>
          </li>

          <div
            className="absolute hidden group-hover:flex w-screen  bg-white shadow-md p-5 z-[9999] flex-col gap-5 items-center text-center -left-[500px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className=" justify-center items-center grid grid-cols-6 font-bold text-black pt-20 border-t-2  mt-5">
              <div>
                <Image
                  src="/images/Collections/1.jpg"
                  alt="shop image 1"
                  width={1000}
                  height={1000}
                  className="w-60 h-60 col-span-1   pr-5 object-contain"
                />
                designer stool
              </div>
              <div>
                <Image
                  src="/images/Collections/2.jpg"
                  alt="shop image 2"
                  width={1000}
                  height={1000}
                  className="w-60 h-60 col-span-1 pr-5  object-contain"
                />
                modern chair
              </div>
              <div>
                <Image
                  src="/images/Collections/3.jpg"
                  alt="shop image 1"
                  width={1000}
                  height={1000}
                  className="w-60 h-60 col-span-1 pr-5 object-contain"
                />
                table lamp
              </div>
              <div>
                <Image
                  src="/images/Collections/4.jpg"
                  alt="shop image 2"
                  width={1000}
                  height={1000}
                  className="w-60 h-60 col-span-1 pr-5 object-contain"
                />
                home decor
              </div>
              <div>
                <Image
                  src="/images/Collections/5.jpg"
                  alt="shop image 1"
                  width={1000}
                  height={1000}
                  className="w-60 h-60 col-span-1 pr-5 object-contain"
                />
                ceramic pots
              </div>
              <div>
                <Image
                  src="/images/Collections/6.jpg"
                  alt="shop image 2"
                  width={1000}
                  height={1000}
                  className="w-60 h-60 col-span-1 pr-5 object-contain"
                />
                wooden table
              </div>
            </div>

            <div className="flex justify-center items-center  mt-5">
              <Image
                src="/images/Collections/2-1.jpg"
                alt="shop image 1"
                width={1000}
                height={1000}
                className="w-[700px] h-60  object-contain"
              />
              <Image
                src="/images/Collections/2-2.jpg"
                alt="shop image 2"
                width={1000}
                height={1000}
                className="w-[700px] h-60 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="relative group">
          <li className="">
            <Link
              href="/"
              className="text-gray-700 text-2xl  group-hover:opacity-50"
            >
              Pages
            </Link>
          </li>

          <div className="absolute w-40 -right-20 hidden group-hover:flex top-9 bg-white shadow-md p-5 z-[9999] flex-col gap-5 items-center text-center ">
            <div className=" justify-center items-center flex font-bold text-black  ">
              <ul className="space-y-4 ">
                {navItems2.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className="flex items-center  justify-start"
                    >
                      <span className="mr-3 opacity-50 hover:opacity-80">
                        {item.name}
                      </span>
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <li className="group">
          <Link
            href="/"
            className="text-gray-700 text-2xl group-hover:opacity-50"
          >
            Blog
          </Link>
        </li>
        <li className="group">
          <Link
            href="/"
            className="text-gray-700 text-2xl group-hover:opacity-50"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="absolute right-5 z-50 top-1/2 transform -translate-y-1/2 flex items-center pr-5 gap-4">
        <div className="flex flex-col items-center justify-center  p-4">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2  text-black "
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>

          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => {
              setIsSearchOpen(false);
              setActiveSearch([]);
            }}
            onChange={(e) => handleSearch(e)}
            searchResults={activeSearch || []}
          />
        </div>

        <div className="relative group">
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setShowCart(true)}
        onMouseLeave={() => setShowCart(false)}
      >
        <FiShoppingBag className="size-6 text-black transition-transform duration-300 group-hover:scale-110" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </div>
      <div className="absolute w-80 max-h-96 overflow-y-auto -right-0 hidden group-hover:flex top-9 bg-white shadow-md p-5 z-[9999] flex-col gap-3 items-center text-center">
        {items.length === 0 ? (
          <p className="text-gray-500 py-4">سبد خرید شما خالی است</p>
        ) : (
          <>
            <div className="w-full max-h-40 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name || "محصول"}
                        width={50}
                        height={50}
                        className="object-cover rounded"
                      />
                    )}
                    <div className="ml-2 text-left">
                      <span className="text-sm">
                        {item.name 
                          ? (item.name.length > 15 
                              ? `${item.name.substring(0, 15)}...` 
                              : item.name)
                          : "محصول"}
                      </span>
                      <p className="text-xs text-gray-500">
                        {item.quantity} × ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button 
                      onClick={() => removeFromBasket(item)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <FiMinus size={14} />
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => addToBasket(item)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <FiPlus size={14} />
                    </button>
                    <button 
                      onClick={() => {
                        for (let i = 0; i < item.quantity; i++) {
                          removeFromBasket(item);
                        }
                      }}
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="w-full py-3 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-medium">مجموع:</span>
                <span className="font-bold">${invoice.totalprice.toFixed(2)}</span>
              </div>
            </div>
          </>
        )}
        
        <Link href="/cart" className="w-full">
          <button className="w-48 absolute top-44 right-6 border-4 p-2 items-center text-center justify-center hover:bg-gray-100 transition">
            مشاهده سبد خرید
          </button>
        </Link>
        <Link href="/checkout" className="w-full">
          <button className="w-48 absolute top-60 right-6 border-4 p-2 items-center text-center justify-center hover:bg-gray-700 transition">
            تسویه حساب
          </button>
            </Link>
          </div>
        </div>
        <span className="text-black">My Account</span>
      </div>
    </div>

       
  );
}
