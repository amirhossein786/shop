"use client";
import React, { useState, useEffect } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/footer";

import { faqData, categories } from "@/server/Data/FAQs";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [openAccordions, setOpenAccordions] = useState({});

  useEffect(() => {
    setOpenAccordions({});
  }, [selectedCategory]);

  const toggleAccordion = (questionIndex) => {
    setOpenAccordions((prev) => {
      const newState = {};
      newState[questionIndex] = !prev[questionIndex];
      return newState;
    });
  };

  return (
    <div className="bg-white">
      <section>
        <Navbar />
        <Navbar2 className="bg-none" />
        <div className="w-full">
          <Image
            src="/images/store-bg.jpg"
            alt="bg"
            width={1000}
            height={1000}
            className="w-screen h-[400px]"
          />
          <div className="row absolute top-40 right-[47%]">
            <div className="col-12 justify-center items-center text-center text-6xl font-bold">
              <h1 className="">FAQs</h1>
            </div>
            <div className="col-12 justify-center items-center text-center text-lg pt-5 ">
              <span className="p-2">Home</span>
              <span className="p-2">{">"}</span>
              <span className="p-2">FAQs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col pl-40 lg:flex-row">
            <div className="w-1/5 mb-8 bg-gray-200   lg:mb-0">
              <div className="sticky top-20">
                <ul className="flex flex-col ">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setSelectedCategory(category.key)}
                        className={`w-full h-16 flex items-center px-4 py-3  border-b-2 border-gray-300 text-left relative rounded-md overflow-hidden group
                          ${
                            selectedCategory === category.key
                              ? "bg-blue-600 text-white"
                              : "text-gray-700"
                          }`}
                      >
                        {selectedCategory !== category.key && (
                          <span
                            className="absolute inset-0 bg-blue-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform "
                            style={{ transitionDuration: "500ms" }}
                          ></span>
                        )}

                        <span className="flex items-center relative z-10 group-hover:text-white transition-colors duration-500">
                          {category.icon}
                          <span className="font-medium">{category.name}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-4/6 pl-40">
              <div className="bg-white">
                {faqData[selectedCategory] &&
                  faqData[selectedCategory].map((faq, questionIndex) => (
                    <div
                      key={questionIndex}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      <button
                        onClick={() => toggleAccordion(questionIndex)}
                        className="w-full px-4 py-5 text-left bg-white flex justify-between items-center"
                      >
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 text-blue-600">
                          {openAccordions[questionIndex] ? (
                            <BiMinus className="w-4 h-4" />
                          ) : (
                            <BiPlus className="w-4 h-4" />
                          )}
                        </div>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openAccordions[questionIndex]
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-4 py-4 pb-5">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
