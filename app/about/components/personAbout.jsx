"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
  FaFacebookF,
} from "react-icons/fa";
import "swiper/css";

const TeamSection = () => {
  const teamMembers = [
    {
      image: "/images/about-us/7.jpg",
      name: "Jeremy dupont",
      role: "Director",
      icon: <FaTwitter />,
      link: "https://www.twitter.com/",
    },
    {
      image: "/images/about-us/8.jpg",
      name: "Jessica dover",
      role: "Founder",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/",
    },
    {
      image: "/images/about-us/9.jpg",
      name: "Matthew taylor",
      role: "Manager",
      icon: <FaBehance />,
      link: "https://www.behance.net/",
    },
    {
      image: "/images/about-us/10.jpg",
      name: "Johncy parker",
      role: "Manager",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/",
    },
  ];

  const clients = [
    "/images/about-us/15.webp",
    "/images/about-us/13.webp",
    "/images/about-us/11.webp",
    "/images/about-us/12.webp",
    "/images/about-us/14.webp",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="uppercase text-sm tracking-[2px] font-semibold text-gray-600">
            Core people
          </span>
          <h4 className="text-3xl font-bold text-gray-900 mt-2">
            Company leaders
          </h4>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -15, scale: 1.1, rotateX: 50 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative  rounded-lg overflow-hidden  group"
            >
              <div className="relative ">
                <a href="#">
                  <Image
                    src={member.image}
                    width={200}
                    height={200}
                    alt={member.name}
                    className="w-full object-cover hover:scale-y-125   "
                  />
                  <div className="absolute bottom-0 inset-0 h-full flex flex-col self-end bg-gradient-to-t from-black  opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                </a>

                <div className="absolute bottom-5 left-20 grid grid-cols-3 justify-center items-center text-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="text-white">
                    <span className="whitespace-nowrap w-40 items-center text-left overflow-hidden text-ellipsis block font-medium">
                      {member.name}
                    </span>
                    <span className="text-sm text-left w-40 text-ellipsis text-white/80">{member.role}</span>
                  </div>
                  
                 
                  <button className="bg-white p-2 ml-20 rounded-full w-14 h-14 flex justify-center items-center ">
                   {member.icon}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="py-8"
          >
            {[...clients, ...clients].map((client, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <div className="px-8 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Image
                    src={client}
                    alt={`Client ${index + 1}`}
                    width={150}
                    height={60}
                    className="w-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
