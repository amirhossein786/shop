"use client";
import React, { useState, useEffect } from "react";
import { FaMapPin, FaEnvelope, FaPhone, FaUsers } from "react-icons/fa";
import { BiChat } from "react-icons/bi";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/footer";
const RotatingText = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
     
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setCurrentText(texts[(currentIndex + 1) % texts.length]);
        setIsAnimating(false);
      }, 500);
      
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentIndex, texts]);

  return (
    <span className="inline-block min-w-[100px]">
      <span className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
        {currentText.split('').map((char, index) => (
          <span 
            key={index} 
            className="inline-block transition-all duration-300"
            style={{ 
              transitionDelay: `${index * 50}ms`,
              transform: isAnimating ? 'rotateX(90deg)' : 'rotateX(0deg)'
            }}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
};

export default function ContactPage() {
  const greetings = ["hello!", "hallå!", "salve!"];

  return (
    <>
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
                  <h1 className="">Contact us</h1>
                </div>
                <div className="col-12 justify-center items-center text-center text-lg pt-5 ">
                  <span className="p-2">Home</span>
                  <span className="p-2">{">"}</span>
                  <span className="p-2">Contact us</span>
                </div>
              </div>
            </div>
          </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeIn">
            <div className="mb-9 md:mb-0">
              <span className="text-lg font-semibold flex items-center border-b border-gray-800 text-gray-800 pb-4 mb-4 w-[90%] sm:w-full">
                <FaMapPin className="mr-2.5 text-gray-800" />
                Office location
              </span>
              <div>
                <p className="w-full m-0">
                  16122 Collins street,<br /> Melbourne, Australia
                </p>
              </div>
            </div>
            <div className="mb-9 md:mb-0">
              <span className="text-lg font-semibold flex items-center border-b border-gray-800 text-gray-800 pb-4 mb-4 w-[90%] sm:w-full">
                <FaEnvelope className="mr-2.5 text-gray-800" />
                Send a message
              </span>
              <a href="mailto:info@yourdomain.com" className="block hover:text-gray-600 transition-colors duration-300">info@yourdomain.com</a>
              <a href="mailto:sales@yourdomain.com" className="block hover:text-gray-600 transition-colors duration-300">sales@yourdomain.com</a>
            </div>
            <div className="mb-9 xs:mb-0">
              <span className="text-lg font-semibold flex items-center border-b border-gray-800 text-gray-800 pb-4 mb-4 w-[90%] sm:w-full">
                <FaPhone className="mr-2.5 text-gray-800" />
                Call us directly
              </span>
              <a href="tel:1800222000" className="block hover:text-gray-600 transition-colors duration-300">1-800-222-000</a>
              <a href="tel:1800222002" className="block hover:text-gray-600 transition-colors duration-300">1-800-222-002</a>
            </div>
            <div>
              <span className="text-lg font-semibold flex items-center border-b border-gray-800 text-gray-800 pb-4 mb-4 w-[90%] sm:w-full">
                <FaUsers className="mr-2.5 text-gray-800" />
                Join our team
              </span>
              <a href="mailto:hire@yourdomain.com" className="block hover:text-gray-600 transition-colors duration-300">hire@yourdomain.com</a>
              <a href="mailto:hr@yourdomain.com" className="block hover:text-gray-600 transition-colors duration-300">hr@yourdomain.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-5">
            <div className="lg:w-10/12 md:w-full animate-slideRight">
              <Image 
                src="/images/demo-decor-store-contact-01.jpg" 
                alt="Contact Image" 
                width={1200} 
                height={800}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-end">
            <div className="lg:w-7/12 md:w-full mt-4 md:mt-0 transform translate-x-20 translate-y-5">
              <span className="text-[120px] xs:text-[75px] font-semibold opacity-30 block lg:inline-block text-center whitespace-nowrap xs:normal-case text-gray-200">
                Get in touch!
              </span>
            </div>
            <div className="w-1/3 relative lg:-mt-[422px] z-10 animate-fadeInUp">
              <div className="bg-gray-800 p-16 lg:p-10 relative overflow-hidden mt-12">
                <Image src='/images/icon.png' width={150} height={150} alt="icon" className="text-[140px] text-white opacity-10 absolute top-[-30px] right-[-20px]" />
                <h2 className="font-semibold text-white text-start ml-10 mb-8 mt-10 text-5xl tracking-tight">
                  Say <RotatingText texts={greetings} />
                </h2>
                <form>
                  <div className="relative mb-2.5">
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white">
                      <FaUsers className="text-sm" />
                    </span>
                    <input 
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder-gray-400 py-2 pl-8 focus:outline-none"
                      type="text" 
                      name="name" 
                      placeholder="Your name*" 
                    />
                  </div>
                  <div className="relative mb-2.5">
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white">
                      <FaEnvelope className="text-sm" />
                    </span>
                    <input 
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder-gray-400 py-2 pl-8 focus:outline-none"
                      type="email" 
                      name="email" 
                      placeholder="Your email address*" 
                    />
                  </div>
                  <div className="relative mt-2.5">
                    <textarea 
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder-gray-400 py-2 pl-8 focus:outline-none"
                      name="comment" 
                      placeholder="Your message" 
                      rows="3"
                    ></textarea>
                    <span className="absolute left-0 top-4 text-white">
                      <BiChat className="text-sm" />
                    </span>
                    <button 
                      className="mt-8 bg-white text-gray-800 font-semibold py-3 px-8 rounded-md hover:bg-gray-200 transition-colors duration-300"
                      type="submit"
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-0 rounded-md lg:rounded-none overflow-hidden mt-16" id="location">
        <div className="w-full h-[500px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95582!3d-37.81724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0xb6899234e561db11!2sCollins%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1625761214619!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </section>
      <Footer/>
    </>
  );
}
