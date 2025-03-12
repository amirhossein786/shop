import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaDribbble,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      className="  pt-20 pb-10 border-t border-gray-200"
      style={{ backgroundColor: "rgba(23, 33, 45, 1)" }}
    >
      <div className=" container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 container justify-center items-center lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/images/logo-footer.webp"
                alt="Corby Logo"
                width={150}
                height={40}
                className="mb-6"
              />
            </Link>
            <p className="text-gray-500 mb-6 pr-4">
              We create possibilities for the connected world. Be Bold.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full   flex items-center justify-center text-white  hover:text-blue-600 transition-all duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full  flex items-center justify-center text-white  hover:text-red-500 transition-all duration-300"
              >
                <FaDribbble size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full  flex items-center justify-center text-white  hover:text-blue-300 transition-all duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full  flex items-center justify-center text-white  hover:text-red-700 transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 uppercase">
              Categories
            </h3>
            <ul className="space-y-3">
              {["Bedroom", "Living Room", "Lightning", "Fabrics Sofa"].map(
                (item, index) => (
                  <li key={index} className="group">
                    <Link
                      href="/shop"
                      className="text-gray-500 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <span>{item}</span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 uppercase">
              Information
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Contact Us", path: "/Contact" },
                { name: "FAQs", path: "/FAQs" },
                { name: "payment", path: "/FAQs" },
              ].map((item, index) => (
                <li key={index} className="group">
                  <Link
                    href={item.path}
                    className="text-gray-500 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h3 className="text-lg text-white font-bold mb-6 uppercase">
              Account
            </h3>
            <ul className="space-y-3">
              {["My Account", "Orders", "Checkout", "My Wishlists"].map(
                (item, index) => (
                  <li key={index} className="group">
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <span className="">{item}</span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-white uppercase">
              Newsletter
            </h3>
            <p className="text-gray-500 mb-6">
              Get everything you need to succeed. Subscribe to our newsletter.
            </p>
            <form className="flex mb-6">
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full py-3 px-4 border border-gray-500 opacity-35    focus:outline-none"
                  style={{ backgroundColor: "rgba(23, 33, 45, 1)" }}
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-4 bg-none text-white flex items-center justify-center"
                >
                  <FiMail size={20} />
                </button>
              </div>
            </form>
            <div className="flex space-x-3">
              <a href="#">
                <Image
                  src="/images/footer/visa.webp"
                  alt="Visa"
                  width={50}
                  height={30}
                />
              </a>
              <a href="#">
                <Image
                  src="/images/footer/paypal.webp"
                  alt="PayPal"
                  width={50}
                  height={30}
                />
              </a>
              <a href="#">
                <Image
                  src="/images/footer/klarna.webp"
                  alt="Klarna"
                  width={50}
                  height={30}
                />
              </a>
              <a href="#">
                <Image
                  src="/images/footer/way.webp"
                  alt="Way"
                  width={50}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t text-center justify-center items-center border-gray-700 mt-16 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400">
        <div className="md:col-span-1 justify-start text-left ml-80 w-[600px] items-center">
          <p className="text-sm mb-2">
            This site is protected by reCAPTCHA and the Google
            <a href="#" className="text-white border-b-2 ml-1">
              privacy policy
            </a>
            <span className="mx-1">and</span>
            terms of service apply.
          </p>
          <p className="text-sm">
            © 2024 Crafto is Proudly Powered by
            <a href="#" className="text-white border-b-2  ml-1">
              ThemeZaa
            </a>
          </p>
        </div>

        <div className="md:col-span-1 flex flex-col ml-[500px] justify-end items-start  ">
          <span className="text-sm text-gray-500 mb-1">Need support?</span>
          <a
            href="tel:+12345678910"
            className="text-white hover:text-blue-400 transition-colors font-medium"
          >
            +1 234 567 8910
          </a>
        </div>

        <div className="md:col-span-1 flex flex-col justify-center items-start ">
          <span className="text-sm text-gray-500 mb-1">Customer care</span>
          <a
            href="mailto:info@domain.com"
            className="text-white hover:text-blue-400 transition-colors font-medium"
          >
            info@domain.com
          </a>
        </div>
      </div>
    </footer>
  );
}
