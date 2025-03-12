"use client";
import Image from "next/image";
import Navbar2 from "./Navbar2";
import { useState, useEffect } from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import bestSellers from "@/server/Data/BestSellers";
import newArrivals from "@/server/Data/NewArrivals";
import { product } from "@/server/Data/Product";
import { offers, offers2 } from "@/server/Data/Offers";
import useCart from "@/store/useCart";
import { motion, useScroll, useSpring } from "framer-motion";
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const fadeIndown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: custom * 0.1,
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const persianNumbers = ["02", "03", "05", "03", "08", "04"];

  const { actions } = useCart();
  const [activeTab, setActiveTab] = useState("bestSellers");

  const products = activeTab === "bestSellers" ? bestSellers : newArrivals;

  return (
    <div>
      <motion.div
        className="fixed right-5 top-[50%] transform -translate-y-1/2 flex  flex-col items-center z-[9999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="-rotate-90 mb-14 text-xs tracking-widest font-medium text-black text-bold origin-center inline-block transform translate-y-6">
          SCROLL
        </span>
        <div className="h-20 flex justify-center">
          <motion.div
            className="w-0.5  bg-black origin-top"
            style={{ scaleY }}
          />
        </div>
      </motion.div>
      <section>
        <motion.div
          initial="hidden"
          animate="visible"
          className="w-screen overflow-x-hidden h-[1050px] bg-blue-50 text-white relative z-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <Navbar2 className="absolute bg-blue-50 top-20 w-full z-50" />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute inset-0 flex justify-end"
          >
            {" "}
            <Image
              src="/images/bg.jpg"
              width={1000}
              height={1000}
              className="h-full w-[600px] z-10 object-cover"
              alt="Background"
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 70,
                  damping: 20,
                  duration: 0.6,
                  delay: 1.5,
                },
              },
            }}
          >
            {" "}
            <Image
              src="/images/mobl.webp"
              width={1000}
              height={1000}
              className="h-[800px] absolute w-[1700px] top-60 -right-[800px] z-30"
              alt="Mobl"
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 2 }}
            className="absolute z-20 top-72 left-[20%] text-black"
          >
            {" "}
            <h1 className="text-9xl font-bold">Corby</h1>
            <h1 className="text-9xl font-bold">Sofas</h1>
            <p className="text-3xl text-gray-500 pt-10">
              Price starting from
              <span className="text-black border-b-2  border-black ">
                {" "}
                $199.00
              </span>
            </p>
            <motion.button
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 2.5 }}
              className="w-48 flex items-center justify-center gap-2 text-white text-lg p-4 rounded-full bg-blue-950 hover:shadow-2xl mt-10 transition"
            >
              {" "}
              <RiShoppingBag3Fill />
              SHOP NOW
            </motion.button>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 0.6,
                },
              },
            }}
            className="-rotate-90 fixed -left-32 top-[500px] text-black flex items-center space-x-6 "
            style={{
              pointerEvents: "none",
              zIndex: 10000,
            }}
          >
            {[
              { icon: <FaFacebookF />, label: "Facebook" },
              { icon: <FaDribbble />, label: "Dribbble" },
              { icon: <FaTwitter />, label: "Twitter" },
              { icon: <FaInstagram />, label: "Instagram" },
            ].map(({ icon, label }, index) => (
              <motion.span
                key={index}
                className="flex items-center gap-x-2 cursor-pointer"
                style={{ pointerEvents: "auto" }}
              >
                {icon} {label}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 3 }}
            className="absolute top-[870px] left-72 flex"
          >
            {" "}
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
          </motion.div>
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="bg-white w-[900px] h-[900px] rounded-full absolute top-32 right-60"
          ></motion.div>{" "}
        </motion.div>
      </section>
      <section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="container mx-auto flex flex-row items-center justify-center pt-20"
        >
          <motion.div
            variants={fadeInUp}
            className="text-black justify-start items-start flex flex-col gap-2 pr-20"
          >
            <span className="text-xl">❤ on demand</span>
            <span className="text-4xl font-bold ">Featured</span>
            <span className="text-4xl font-bold">categories</span>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-wrap justify-center gap-x-28 font-bold text-black"
          >
            {" "}
            {[
              { src: "/images/icons/1.webp", label: "lamp" },
              { src: "/images/icons/2.webp", label: "stool" },
              { src: "/images/icons/3.webp", label: "chair" },
              { src: "/images/icons/4.webp", label: "cabinet" },
              { src: "/images/icons/5.webp", label: "light" },
              { src: "/images/icons/6.webp", label: "sofa" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={slideInFromRight}
                className="text-center relative group"
              >
                {" "}
                <div
                  className="absolute -top-2  -right-2 w-10 h-10 bg-blue-950 rounded-full z-40 opacity-0 
                        flex items-center justify-center text-white text-sm
                        transform scale-0 group-hover:scale-100 group-hover:opacity-100
                        transition-all duration-300"
                >
                  {persianNumbers[index]}
                </div>
                <Image
                  src={item.src}
                  alt={item.label}
                  width={1000}
                  height={1000}
                  className="w-20 h-20 object-contain group-hover:-translate-y-1 transition-transform duration-300 hover:opacity-60 "
                />
                <div className="mt-2 relative inline-block">
                  <p className="group-hover:-translate-y-1 transition-transform duration-300">
                    {item.label}
                  </p>

                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-black 
                          group-hover:w-full transition-all duration-300 
                          group-hover:opacity-70"
                  ></span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="container mx-auto flex justify-center p-20"
        >
          {" "}
          <div className="grid grid-cols-2 gap-4 items-center">
            <motion.div variants={fadeInUp} className="relative">
              {" "}
              <Image
                src="/images/photo/1.jpg"
                alt="picture"
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
            </motion.div>

            <div className="grid grid-rows-2 gap-4">
              <motion.div variants={fadeInUp} className="relative">
                {" "}
                <Image
                  src="/images/photo/2.jpg"
                  alt="picture2"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
                <h1 className="absolute bottom-32 left-16 flex flex-col items-start justify-start text-black text-4xl">
                  Pottery{" "}
                  <span className="block text-4xl font-bold">products</span>
                </h1>
                <Link
                  href="/"
                  className="absolute bottom-16 left-[140px] transform -translate-x-1/2 text-white bg-black px-4 py-2 rounded"
                >
                  Explore category
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                {" "}
                <Image
                  src="/images/photo/3.jpg"
                  alt="hi"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
                <h1 className="absolute bottom-32 right-20 flex flex-col items-start justify-start text-black text-4xl">
                  Florence{" "}
                  <span className="block text-4xl font-bold">compact</span>
                </h1>
                <Link
                  href="/"
                  className="absolute bottom-16 right-0 transform -translate-x-1/2 text-white bg-black px-4 py-2 rounded"
                >
                  Explore category
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      <section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="flex justify-center items-center"
        >
          {" "}
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
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="container mx-auto py-10"
        >
          {" "}
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {products &&
              products.length > 0 &&
              products.map((product, index) => (
                <motion.li
                  key={product.id}
                  variants={fadeInUp}
                  custom={index}
                  className="bg-white hover:shadow-xl rounded-xl overflow-hidden p-4 relative group transition-all duration-300"
                >
                  <div className="relative">
                    <a href="#">
                      <Image
                        src={product.image}
                        width={200}
                        height={200}
                        alt={product.name}
                        className="w-full object-cover h-80  transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 h-[50%] flex flex-col self-end bg-gradient-to-t from-black to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
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
                    <div className="mt-1 text-gray-400">
                      {product.oldPrice && (
                        <del className="text-gray-400 mr-2">
                          ${parseFloat(product.oldPrice).toFixed(2)}
                        </del>
                      )}
                      <span className="text-xl ">
                        ${parseFloat(product.price).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </motion.li>
              ))}
          </ul>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {" "}
        <div className="relative w-full  py-5 overflow-hidden">
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
            {" "}
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
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="flex flex-col lg:flex-row w-full gap-6 p-6"
      >
        {" "}
        <motion.div variants={fadeInUp} className="relative w-2/3 h-[500px]">
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
        </motion.div>
        <motion.div variants={fadeInUp} className="w-1/3">
          {" "}
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
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {" "}
        <div className="relative w-full  py-5 overflow-hidden">
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
            <div
              className="absolute top-0 left-0 w-[300px] h-full   z-50 "
              style={{
                background:
                  "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)",
              }}
            ></div>
            <div
              className="absolute top-0 left-72 w-[400px] h-full  z-50  "
              style={{
                background:
                  "linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)",
              }}
            ></div>
            <div
              className="absolute top-0 right-0 w-[300px] h-full   z-50 "
              style={{
                background:
                  "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)",
              }}
            ></div>
            <div
              className="absolute top-0 right-72 w-[400px] h-full   z-50 "
              style={{
                background:
                  "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)",
              }}
            ></div>
            {offers2.map((offer, index) => (
              <SwiperSlide key={index} className="w-auto flex items-center">
                <span className=" font-bold text-black text-5xl whitespace-nowrap">
                  {offer}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2 block">
              Designers ideas
            </span>
            <h4 className="text-3xl md:text-4xl font-semibold text-gray-900">
              The decor article
            </h4>
          </div>
          <div className="max-w-7xl mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <li className="group">
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/images/article/1.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg transition-transform duration-500 group-hover:scale-110"
                    alt="Decor article"
                  />
                </div>
                <div className="px-1">
                  <span className="flex items-center gap-3 text-xs uppercase tracking-wider mb-2">
                    <a href="#" className="text-gray-900 font-medium ">
                      DECOR
                    </a>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <a href="#" className="text-gray-500 hover:text-black ">
                      08 AUGUST 2023
                    </a>
                  </span>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900  transition-colors"
                  >
                    The best influencers to follow for sartorial inspiration
                  </a>
                </div>
              </li>

              <li className="group">
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/images/article/2.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg transition-transform duration-500 group-hover:scale-110"
                    alt="Design article"
                  />
                </div>
                <div className="px-1">
                  <span className="flex items-center gap-3 text-xs uppercase tracking-wider mb-2">
                    <a href="#" className="text-gray-900 font-medium ">
                      DESIGN
                    </a>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <a href="#" className="text-gray-500 hover:text-black ">
                      12 AUGUST 2023
                    </a>
                  </span>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900  transition-colors"
                  >
                    Everything you need to know about decor's big night out
                  </a>
                </div>
              </li>

              <li className="group">
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/images/article/3.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg transition-transform duration-500 group-hover:scale-110"
                    alt="Decor article"
                  />
                </div>
                <div className="px-1">
                  <span className="flex items-center gap-3 text-xs uppercase tracking-wider mb-2">
                    <a href="#" className="text-gray-900 font-medium ">
                      DECOR
                    </a>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <a href="#" className="text-gray-500 hover:text-black ">
                      20 AUGUST 2023
                    </a>
                  </span>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900  transition-colors"
                  >
                    All the best looks & moments from the met gala 2023
                  </a>
                </div>
              </li>

              <li className="group">
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/images/article/4.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg transition-transform duration-500 group-hover:scale-110"
                    alt="Decor article"
                  />
                </div>
                <div className="px-1">
                  <span className="flex items-center gap-3 text-xs uppercase tracking-wider mb-2">
                    <a href="#" className="text-gray-900 font-medium ">
                      DECOR
                    </a>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <a href="#" className="text-gray-500 hover:text-black ">
                      26 AUGUST 2023
                    </a>
                  </span>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900  transition-colors"
                  >
                    Find a colour palette that reflects your passion
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pt-12 bg-white">
        <div className=" mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            <div className="flex items-center justify-center border p-10 border-gray-100 ">
              <div className="mr-4">
                <Image
                  src="/images/home-footer/1.webp"
                  alt="Free shipping"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">
                  Free shipping
                </span>
                <span className="text-sm text-gray-500">
                  Free return & exchange
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center p-10 border border-gray-100 ">
              <div className="mr-4">
                <Image
                  src="/images/home-footer/2.webp"
                  alt="Store locator"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">
                  Store locator
                </span>
                <span className="text-sm text-gray-500">
                  Find nearest store
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center p-10  border border-gray-100 ">
              <div className="mr-4">
                <Image
                  src="/images/home-footer/3.webp"
                  alt="Secure payment"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">
                  Secure payment
                </span>
                <span className="text-sm text-gray-500">
                  100% secure method
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center p-10 border border-gray-100  ">
              <div className="mr-4">
                <Image
                  src="/images/home-footer/4.webp"
                  alt="Online support"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">
                  Online support
                </span>
                <span className="text-sm text-gray-500">
                  24/7 support center
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
