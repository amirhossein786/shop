"use client";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  FaShoppingCart,
  FaUser,
  FaChevronDown,
  FaExclamation,
  FaHome,
} from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { RiContactsBook3Fill } from "react-icons/ri";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: "Home", path: "/", icons: <FaHome /> },
    { name: "Shop", path: "/", icons: <FaExclamation /> },
    { name: "Collections", path: "/contact", icons: <RiContactsBook3Fill /> },
    { name: "Pages", path: "/contact", icons: <RiContactsBook3Fill /> },
    { name: "Blog", path: "/contact", icons: <RiContactsBook3Fill /> },
    { name: "Contact", path: "/contact", icons: <RiContactsBook3Fill /> },
  ];

  const [categories1] = useState([
    {
      id: 1,
      name: "Furniture",
      path: "/digital",
    },
    {
      id: 2,
      name: "Modern chair",
      path: "/digital",
    },
    {
      id: 3,
      name: "Luxurious sofa ",
      path: "/digital",
    },
    {
      id: 4,
      name: "Sitting tables",
      path: "/digital",
    },
    {
      id: 5,
      name: "Century cabinet",
      path: "/digital",
    },
    {
      id: 6,
      name: "Wooden stool",
      path: "/digital",
    },
    {
      id: 7,
      name: "Dining tabl",
      path: "/digital",
    },
  ]);
  const [categories2] = useState([
    {
      id: 1,
      name: "Lighting",
      path: "/digital",
    },
    {
      id: 2,
      name: "Table lamps",
      path: "/digital",
    },
    {
      id: 3,
      name: "Wall lights",
      path: "/digital",
    },
    {
      id: 4,
      name: "Ceiling lights",
      path: "/digital",
    },
    {
      id: 5,
      name: "Chandeliers",
      path: "/digital",
    },
    {
      id: 6,
      name: "Smart lights",
      path: "/digital",
    },
    {
      id: 7,
      name: "Outdoor lights",
      path: "/digital",
    },
  ]);
  const [categories3] = useState([
    {
      id: 1,
      name: "Decor",
      path: "/digital",
    },
    {
      id: 2,
      name: "Home decor",
      path: "/digital",
    },
    {
      id: 3,
      name: "Kitchen decor",
      path: "/digital",
    },
    {
      id: 4,
      name: "Office decor",
      path: "/digital",
    },
    {
      id: 5,
      name: "Wooden mirrors",
      path: "/digital",
    },
    {
      id: 6,
      name: "Designer clocks",
      path: "/digital",
    },
    {
      id: 7,
      name: "Spiritual",
      path: "/digital",
    },
  ]);
  const [categories4] = useState([
    {
      id: 1,
      name: "Cabinetry",
      path: "/digital",
    },
    {
      id: 2,
      name: "Wardrobes",
      path: "/digital",
    },
    {
      id: 3,
      name: "Shoe racks",
      path: "/digital",
    },
    {
      id: 4,
      name: "Movable",
      path: "/digital",
    },
    {
      id: 5,
      name: "Folding storage",
      path: "/digital",
    },
    {
      id: 6,
      name: "Wooden units",
      path: "/digital",
    },
    {
      id: 7,
      name: "Kids storage",
      path: "/digital",
    },
  ]);
  const [categories5] = useState([
    {
      id: 1,
      name: "Commercial",
      path: "/digital",
    },
    {
      id: 2,
      name: "Hotel furniture",
      path: "/digital",
    },
    {
      id: 3,
      name: "Bar furniture",
      path: "/digital",
    },
    {
      id: 4,
      name: "School furniture",
      path: "/digital",
    },
    {
      id: 5,
      name: "Public furniture",
      path: "/digital",
    },
    {
      id: 6,
      name: "Office furniture",
      path: "/digital",
    },
    {
      id: 7,
      name: "Lab furniture",
      path: "/digital",
    },
  ]);

  const product = [
    {
      id: 1,
      name: "Product 1",
      price: 49.99,
      oldPrice: 69.99,
      image: "/images/swiper/2-1.webp",
    },
    {
      id: 2,
      name: "Product 2",
      price: 39.99,
      oldPrice: 59.99,
      image: "/images/swiper/2-2.png",
    },
    {
      id: 3,
      name: "Product 3",
      price: 29.99,
      oldPrice: 49.99,
      image: "/images/swiper/2-3.webp",
    },
  ];

  const [navItems2] = useState([
    {
      id: 1,
      name: "About",
      path: "/About",
    },
    {
      id: 2,
      name: "FAQs",
      path: "/FAQs",
    },
    {
      id: 3,
      name: "Wishlist",
      path: "/Wishlist",
    },
    {
      id: 4,
      name: "Account",
      path: "/about",
    },
    {
      id: 5,
      name: "Cart",
      path: "/Cart",
    },
    {
      id: 6,
      name: "Checkout",
      path: "/Checkout",
    },
  ]);

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
        <IoMdSearch className="size-6 text-black" />
        <div className="relative group">
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setShowCart(true)}
            onMouseLeave={() => setShowCart(false)}
          >
            <FiShoppingBag className="size-6 text-black transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="absolute w-60 h-80 -right-0 hidden group-hover:flex top-9 bg-white shadow-md p-5 z-[9999] flex-col gap-5 items-center text-center ">
            <div className=" justify-center items-center flex font-bold text-black  ">
              <ul className="space-y-4 ">
                <li></li>
                <button className="absolute w-48  top-44 right-6 border-4 p-2 items-center text-center justify-center " >view cart</button>
                <button className="absolute w-48  top-60 right-6 border-4 p-2 items-center text-center justify-center">Checkout</button>
              </ul>
            </div>
          </div>

          
        </div>
        <span className="text-black ">My Account</span>
      </div>
    </div>
  );
}
