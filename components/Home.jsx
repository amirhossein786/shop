"use client";
import Image from "next/image";
import Navbar2 from "./Navbar2";
import { RiShoppingBag3Fill } from "react-icons/ri";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaDribbble,
} from "react-icons/fa";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag, FiEye } from "react-icons/fi";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import { bestSellers } from "@/server/Data/BestSellers";
import { newArrivals } from "@/server/Data/NewArrivals";
import { product } from "@/server/Data/Product";
import { offers, offers2 } from "@/server/Data/Offers";
import useCart from "@/store/useCart";

export default function Home() {
  const { actions } = useCart();
  console.log("Added to Cart:", actions);
  const [activeTab, setActiveTab] = useState("bestSellers");

  const products = activeTab === "bestSellers" ? bestSellers : newArrivals;

  return (
    <div>
      <section>
        <div className="w-screen overflow-x-hidden h-[1050px] bg-blue-50 text-white relative z-20">
          <Navbar2 className="absolute bg-blue-50 top-20 w-full z-50" />
          <div className="absolute inset-0 flex justify-end">
            <Image
              src="/images/bg.jpg"
              width={1000}
              height={1000}
              className="h-full w-[600px] z-10 object-cover"
              alt="Background"
            />
          </div>

          <Image
            src="/images/mobl.webp"
            width={1000}
            height={1000}
            className="h-[800px] absolute w-[1700px] top-60  -right-[800px] z-30"
            alt="Mobl"
          />

          <div className="absolute z-20 top-96 left-[25%] text-black">
            <h1 className="text-9xl font-bold">Corby</h1>
            <h1 className="text-9xl font-bold">Sofas</h1>
            <p className="text-4xl opacity-55 pt-10">
              Price starting from
              <span className="text-black underline "> $199.00</span>
            </p>

            <button className="w-48 flex items-center justify-center gap-2 text-white text-lg p-4 rounded-full bg-blue-950 hover:shadow-2xl mt-10 transition">
              <RiShoppingBag3Fill />
              SHOP NOW
            </button>
          </div>

          <div className="-rotate-90 fixed -left-32 z-[9999] top-[500px] text-black flex items-center space-x-6">
            {[
              { icon: <FaFacebookF />, label: "Facebook" },
              { icon: <FaDribbble />, label: "Dribbble" },
              { icon: <FaTwitter />, label: "Twitter" },
              { icon: <FaInstagram />, label: "Instagram" },
            ].map(({ icon, label }, index) => (
              <span key={index} className="flex items-center z-[9999] gap-x-2">
                {icon} {label}
              </span>
            ))}
          </div>

          <div className="absolute top-[870px] left-72 flex">
            <div className="relative w-44 h-44 bg-slate-200 flex items-center justify-center text-4xl font-bold overflow-hidden group">
              <span className="absolute inset-0 bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700"></span>
              <span className="relative z-10 group-hover:text-white text-black transition-colors duration-700">
                Next
              </span>
            </div>

            <Image
              src="/images/Next.jpg"
              width={1000}
              height={1000}
              className="h-44 w-60 object-cover  bg-slate-200"
              alt="Next"
            />
          </div>
          <div className="bg-white w-[900px] h-[900px] rounded-full absolute top-32  right-60"></div>
        </div>
      </section>
      <section>
        <div className="container mx-auto flex flex-row items-center justify-center pt-20">
          <div className="text-black justify-start items-start flex flex-col gap-2 pr-20">
            <span className="text-xl">❤ on demand</span>
            <span className="text-4xl font-bold ">Featured</span>
            <span className="text-4xl font-bold">categories</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-28 font-bold text-black">
            {[
              { src: "/images/icons/1.webp", label: "lamp" },
              { src: "/images/icons/2.webp", label: "stool" },
              { src: "/images/icons/3.webp", label: "chair" },
              { src: "/images/icons/4.webp", label: "cabinet" },
              { src: "/images/icons/5.webp", label: "light" },
              { src: "/images/icons/6.webp", label: "sofa" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={1000}
                  height={1000}
                  className="w-20 h-20 object-contain"
                />
                <p className="mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto flex justify-center p-20">
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="relative">
              <Image
                src="/images/photo/1.jpg"
                width={1000}
                height={1000}
                className="w-full h-auto object-cover"
              />
              <h1 className="absolute bottom-40 left-20 flex flex-col items-start justify-start text-black text-5xl ">
                Wooden{" "}
                <span className="block text-5xl font-bold">classic table</span>
              </h1>
              <Link
                href="/"
                className="absolute bottom-20 left-40 transform -translate-x-1/2 text-white bg-black px-4 py-2 rounded"
              >
                Explore category
              </Link>
            </div>

            <div className="grid grid-rows-2 gap-4">
              <div className="relative">
                <Image
                  src="/images/photo/2.jpg"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
                <h1 className="absolute bottom-40 left-20 flex flex-col items-center justify-center text-black text-5xl">
                  Pottery{" "}
                  <span className="block text-5xl font-bold">products</span>
                </h1>
                <Link
                  href="/"
                  className="absolute bottom-20 left-40 transform -translate-x-1/2 text-white bg-black px-4 py-2 rounded"
                >
                  Explore category
                </Link>
              </div>

              <div className="relative">
                <Image
                  src="/images/photo/3.jpg"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
                <h1 className="absolute bottom-40 left-20 flex flex-col items-center justify-center text-black text-5xl">
                  Florence{" "}
                  <span className="block text-5xl font-bold">compact</span>
                </h1>
                <Link
                  href="/"
                  className="absolute bottom-20 left-40 transform -translate-x-1/2 text-white bg-black px-4 py-2 rounded"
                >
                  Explore category
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center">
          <ul className="flex space-x-10">
            <li>
              <button
                onClick={() => setActiveTab("bestSellers")}
                className={`flex flex-col items-center text-2xl font-bold ${
                  activeTab === "bestSellers" ? "text-black" : "text-gray-600"
                } transition-all duration-300`}
              >
                Best Sellers
                <span
                  className={`w-full h-[2px] mt-1 transition-all duration-300 ${
                    activeTab === "bestSellers"
                      ? "bg-black w-full"
                      : "bg-transparent"
                  }`}
                ></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("newArrivals")}
                className={`flex flex-col items-center text-2xl font-bold ${
                  activeTab === "newArrivals" ? "text-black" : "text-gray-600"
                } transition-all duration-300`}
              >
                New Arrivals
                <span
                  className={`w-full h-[2px] mt-1 transition-all duration-300 ${
                    activeTab === "newArrivals"
                      ? "bg-black w-full"
                      : "bg-transparent"
                  }`}
                ></span>
              </button>
            </li>
          </ul>
        </div>

        <div className="container mx-auto py-10">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <li
                key={product.id}
                className="bg-white hover:shadow-xl rounded-xl overflow-hidden p-4 relative group transition-all duration-300"
              >
                <div className="relative">
                  <a href="#">
                    <Image
                      src={product.image}
                      width={200}
                      height={200}
                      alt={product.name}
                      className="rounded-lg object-cover w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  </a>

                  <div className="absolute bottom-5 left-20 grid grid-cols-3 justify-center items-center text-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <button className="bg-white p-2 rounded-full w-14 h-14 flex justify-center items-center shadow-md opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl delay-300">
                      <CiHeart size={20} />
                    </button>
                    <button
                      onClick={() => actions.addToBasket(products)}
                      className="bg-white p-2 rounded-full w-14 h-14 flex justify-center items-center shadow-md opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl delay-500"
                    >
                      <FiShoppingBag size={20} />
                    </button>
                    <button className="bg-white p-2 rounded-full w-14 h-14 flex justify-center items-center shadow-md opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl delay-700">
                      <FiEye size={20} />
                    </button>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <a
                    href="#"
                    className="text-lg font-semibold text-gray-800 hover:text-gray-600"
                  >
                    {product.name}
                  </a>
                  <div className="mt-1 text-gray-600">
                    {product.oldPrice && (
                      <del className="text-red-500 mr-2">
                        ${product.oldPrice}
                      </del>
                    )}
                    <span className="text-xl font-bold">${product.price}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div className="relative w-full  py-5 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-1/12 h-full   z-50 "
            style={{
              background:
                "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)",
            }}
          ></div>
          <div
            className="absolute top-0 left-40 w-1/6 h-full  z-50  "
            style={{
              background:
                "linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)",
            }}
          ></div>
          <div
            className="absolute top-0 right-0 w-1/12 h-full   z-50 "
            style={{
              background:
                "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)",
            }}
          ></div>
          <div
            className="absolute top-0 right-40 w-1/6 h-full   z-50 "
            style={{
              background:
                "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)",
            }}
          ></div>

          <Swiper
            spaceBetween={20}
            slidesPerView="3"
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={10000}
            modules={[Autoplay]}
            className="w-full"
          >
            {offers.map((offer, index) => (
              <SwiperSlide
                key={index}
                className="w-auto pr-10 flex items-center"
              >
                <span className=" font-bold text-black text-4xl whitespace-nowrap">
                  {offer}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row w-full  gap-6 p-6">
        <div className="relative w-2/3  h-[500px]">
          <Image
            src="/images/swiper/1.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            alt="Lounge Collection"
          />
          <div className="absolute inset-0  flex flex-col items-center justify-center text-white text-center p-4">
            <span className="text-xl text-black  border-b-2 border-black  ">
              SAVE UP TO 50% OFF
            </span>
            <h1 className="text-4xl text-black ">
              Lounge{" "}
              <span className="text-black font-bold flex">Collection</span>
            </h1>
            <Link
              href="/"
              className="mt-4 bg-black text-white px-5 py-2 rounded-lg font-semibold"
            >
              Explore category
            </Link>
          </div>
        </div>

        <div className=" w-1/3">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="rounded-lg shadow-lg"
          >
            {product.map((product) => (
              <SwiperSlide key={product.id} className="relative text-center">
                <Image
                  src={product.image}
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-contain rounded-lg"
                  alt={product.name}
                />
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-lg font-semibold text-gray-800 hover:text-gray-600"
                  >
                    {product.name}
                  </a>
                  <div className="mt-1 text-gray-600">
                    {product.oldPrice && (
                      <del className="text-red-500 mr-2">
                        ${product.oldPrice}
                      </del>
                    )}
                    <span className="text-xl font-bold">${product.price}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section>
        <div className="relative w-full  py-5 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-1/12 h-full   z-50 "
            style={{
              background:
                "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)",
            }}
          ></div>
          <div
            className="absolute top-0 left-40 w-1/6 h-full  z-50  "
            style={{
              background:
                "linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)",
            }}
          ></div>
          <div
            className="absolute top-0 right-0 w-1/12 h-full   z-50 "
            style={{
              background:
                "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)",
            }}
          ></div>
          <div
            className="absolute top-0 right-40 w-1/6 h-full   z-50 "
            style={{
              background:
                "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)",
            }}
          ></div>

          <Swiper
            spaceBetween={20}
            slidesPerView="4"
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={10000}
            modules={[Autoplay]}
            className="w-full"
          >
            {offers2.map((offer, index) => (
              <SwiperSlide key={index} className="w-auto flex items-center">
                <span className=" font-bold text-black text-5xl whitespace-nowrap">
                  {offer}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* <section>
        <div>
          <div>
            <span>Designers ideas</span>
            <h4>The decor article</h4>
          </div>
          <div>
            <ul>
              <li>
                <div>
                  <Image
                    src="/images/article/1.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    alt="1"
                  />
                </div>
                <div>
                  <span>
                    {" "}
                    <a href="">DECOR</a>
                    <a href="">08 AUGUST 2023</a>
                  </span>
                  <a>The best influencers to fllow for sartorial inspiration</a>
                </div>
              </li>
              <li>
                <div>
                  <Image
                    src="/images/article/2.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    alt="1"
                  />
                </div>
                <div>
                  <span>
                    {" "}
                    <a href="">DESIGN</a>
                    <a href="">12 AUGUST 2023</a>
                  </span>
                  <a>Everything you need to know about decor's big night out</a>
                </div>
              </li>
              <li>
                <div>
                  <Image
                    src="/images/article/3.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    alt="1"
                  />
                </div>
                <div>
                  <span>
                    {" "}
                    <a href="">DECOR</a>
                    <a href="">20 UGUST 2023</a>
                  </span>
                  <a>All the best looks & moments from the met gala 2023</a>
                </div>
              </li>
              <li>
                <div>
                  <Image
                    src="/images/article/4.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    alt="1"
                  />
                </div>
                <div>
                  <span>
                    {" "}
                    <a href="">DECOR</a>
                    <a href="">26 AUGUST 2023</a>
                  </span>
                  <a>Find a colour palettes that reflects you passion</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
    </div>
  );
}



