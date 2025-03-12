'use client'
import React,{useRef} from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeaderAbout() {
   const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"],
    });
  
    const y1 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
    const y2 = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const y3 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  return (
    <div>
      <section className="pb-3 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center text-center sm:text-left mb-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full lg:w-2/12 md:w-3/12 sm:w-4/12 mb-5 sm:mb-0"
            >
              <div className="relative flex items-center justify-center w-[165px] h-[165px] mx-auto">
                <Image
                  src="/images/about-us/1.webp"
                  alt="Center icon"
                  width={80}
                  height={80}
                  className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                />
                <Image
                  src="/images/about-us/2.webp"
                  alt="Rotating circle"
                  width={165}
                  height={165}
                  className="animate-spin-slow"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-5/12 md:w-7/12 sm:w-8/12"
            >
              <span className="uppercase text-sm tracking-[2px] font-semibold mb-1 block">
                Decor store story
              </span>
              <h1 className="text-gray-900 flex font-bold text-3xl">
                Commitment to
              </h1>
              <h1 className="text-gray-900 flex font-bold text-3xl">
                quality product.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full lg:w-5/12 mt-8 md:mt-0"
            >
              <p className="text-gray-600 w-96">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. lorem ipsum has been the industry's standard dummy
                text ever since the lorem ipsum is simply dummy text of the
                printing and typesetting.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container-fluid overflow-hidden" ref={containerRef}>
          <div className="flex flex-wrap  items-center">
            <div className="w-full md:w-1/4  text-center  md:p-[15px]">
              <motion.div style={{ y: y1 }} transition={{ duration: 0.5 }}>
                <Image
                  src="/images/about-us/3.jpg"
                  alt=""
                  width={400}
                  height={500}
                  className="w-full p-20"
                />
              </motion.div>
            </div>

            <div className="w-full md:w-6/12 text-center">
              <motion.div style={{ y: y2 }} transition={{ duration: 0.5 }}>
                <Image
                  src="/images/about-us/4.jpg"
                  alt=""
                  width={800}
                  height={600}
                  className="w-full"
                />
              </motion.div>
            </div>

            <div className="w-full md:w-1/4  text-center p-4 md:p-[15px]">
              <motion.div style={{ y: y3 }} transition={{ duration: 0.5 }}>
                <Image
                  src="/images/about-us/5.jpg"
                  alt=""
                  width={400}
                  height={500}
                  className="w-full p-20"
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-full absolute top-1/3  text-center -z-10 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee font-bold text-[200px] lg:text-[200px] md:text-[200px] tracking-[-5px] text-blue-950 mt-5 lg:mt-5 md:mt-15 sm:mt-22">
            classic products
          </div>
        </div>
      </section>
    </div>
  )
}
