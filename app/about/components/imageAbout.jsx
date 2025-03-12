"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { slideData } from "@/server/Data/slideData";
import "swiper/css";
import "swiper/css/navigation";

const ParallaxSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [showCircle, setShowCircle] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;
    setCirclePosition({ x, y });
  };

  return (
    <section 
      className="relative bg-cover bg-fixed bg-center py-24" 
      style={{ backgroundImage: "url('/images/about-us/6.jpg')" }}
    >
      <div className="absolute inset-0 bg-blue-950 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-end">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-5/12 md:w-7/12 w-full h-[400px]"
          >
            <div 
              className="bg-white p-20 rounded-md w-[600px] h-[400px] relative overflow-hidden"
              onMouseEnter={() => setShowCircle(true)}
              onMouseLeave={() => setShowCircle(false)}
              onMouseMove={handleMouseMove}
            >
              {showCircle && (
                <div 
                  className="pointer-events-none absolute  w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 z-50"
                  style={{ 
                    left: circlePosition.x,
                    top: circlePosition.y,
                  }}
                >
                  <div className="text-white flex items-center space-x-1">
                    <span className="transform rotate-180">&gt;</span>
                    <span>&gt;</span>
                  </div>
                </div>
              )}

              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                className="text-slider cursor-none" 
              >
                {slideData.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="mb-10">
                      <div className="uppercase text-xs text-gray-500 mb-1 tracking-[2px]">
                        {slide.category}
                      </div>
                      <h3 className="text-black font-bold text-4xl tracking-tight mb-3">
                        {slide.title}
                      </h3>
                      <p className="text-gray-500 w-[90%] lg:w-full">
                        {slide.description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              <div className="flex mt-4">
                <button
                  ref={prevRef}
                  className="w-10 h-10 border border-gray-300 rounded-full bg-white flex items-center justify-center mr-2 hover:bg-gray-100 transition-colors"
                >
                  <FaArrowLeft className="text-gray-800 text-sm" />
                </button>
                <button
                  ref={nextRef}
                  className="w-10 h-10 border border-gray-300 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <FaArrowRight className="text-gray-800 text-sm" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
