
"use client";
import React from "react";
import { motion } from "framer-motion";
import { BiSmile, BiStar } from "react-icons/bi";

const FeaturesSection = () => {
  const featureVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const bottomVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const features = [
    {
      number: "01",
      title: "Business founded",
      description: "Lorem ipsum is simply text the printing typesetting standard dummy.",
      align: "self-start"
    },
    {
      number: "02",
      title: "Build new office",
      description: "Lorem ipsum is simply text the printing typesetting standard dummy.",
      align: "self-end",
      marginTop: "mt-[30px] lg:mt-0"
    },
    {
      number: "03",
      title: "Relocates headquarter",
      description: "Lorem ipsum is simply text the printing typesetting standard dummy.",
      align: "self-start",
    },
    {
      number: "04",
      title: "Revenues of millions",
      description: "Lorem ipsum is simply text the printing typesetting standard dummy.",
      align: "self-end",
      marginTop: "lg:mt-[30px]"
    }
  ];

  return (
    <section className="pt-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 relative mb-6 md:mb-8 lg:mt-5 px-0 sm:px-0 md:px-7 lg:px-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={featureVariants}
              className={`${feature.align} ${feature.marginTop || ""} mb-8 sm:mb-0 xs:mb-[30px]`}
            >
              <div className="text-left px-[30px] sm:px-[20px] relative">
                <div className="absolute left-0 -top-16">
                  <h1 className="text-[90px] font-extrabold tracking-[-1px] opacity-20 mb-0 text-outline text-outline-gray">
                    {feature.number}
                  </h1>
                </div>
                <div className="pt-[30px] lg:pt-[22px] xs:pt-[40px] relative z-10">
                  <span className="text-gray-800 text-lg font-semibold inline-block mb-[5px]">
                    {feature.title}
                  </span>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                  <span className="w-[60px] h-[2px] bg-gray-800 mt-[20px] inline-block"></span>
                </div>
              </div>
            </motion.div>
          ))}
          
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={bottomVariants}
          custom={0}
          className="flex justify-center rounded-full p-10"
        >
          <div className="xl:w-9/12 lg:w-10/12  w-full">
            <div className="flex flex-wrap items-center justify-center border rounded-full border-gray-300  ">
              <div className=" w-1/2 p-5 border-r-2 border-gray-300  text-center  flex items-center justify-center">
                <BiSmile className="text-gray-800 text-2xl mr-[10px]" />
                <span className="text-gray-800 text-lg text-left font-medium xs:leading-7">
                  Join the <span className="font-extrabold">10000+</span> people trusting us.
                </span>
              </div>
              <div className=" w-1/2 p-5 text-center  flex items-center justify-center">
                <BiStar className="text-gray-800 text-2xl mr-[10px]" />
                <span className="text-gray-800 text-lg text-left font-medium">
                  4.9 out of 5 - <span className="font-extrabold">8549</span> Total reviews.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
