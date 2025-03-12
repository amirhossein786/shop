"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import blogPosts from "@/server/Data/blog";
export default function BlogGrid() {
  return (
    <div>
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
              <h1 className="">Latest blog</h1>
            </div>
            <div className="col-12 justify-center items-center text-center text-lg pt-5 ">
              <span className="p-2">Home</span>
              <span className="p-2">{">"}</span>
              <span className="p-2">Latest blog</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="blog-item animate-fadeIn">
                    <div className="card bg-transparent border-0 h-full">
                      <div className="blog-image relative overflow-hidden rounded-md">
                        <Link href={post.link}>
                          <div className="aspect-w-4 aspect-h-3 relative">
                            <Image
                              src={post.image}
                              alt={post.title}
                              width={500}
                              height={375}
                              className="w-full h-full object-contain hover:scale-110 transition-transform   "
                              style={{ transitionDuration: "700ms" }}
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="pt-7 pb-7">
                        <span className="text-xs uppercase block mb-1 font-medium">
                          <Link
                            href={`/blog/category/${post.category.toLowerCase()}`}
                            className="text-gray-800  text-lg mr-2"
                          >
                            {post.category} <span className="opacity-40">●</span>
                          </Link>
                          <Link href="#" className="text-gray-500 text-sm">
                            {post.date}
                          </Link>
                        </span>
                        <Link
                          href={post.link}
                          className="text-xl w-72 font-semibold leading-tight text-gray-800 hover:text-gray-600 block transition-colors duration-300"
                        >
                          {post.title}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <nav className="inline-flex">
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 mr-4  "
                  >
                    <FaArrowLeft />
                  </a>
                  <a
                    href="#"
                    className="flex items-center rounded-full justify-center w-10 h-10  mr-4  hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    01
                  </a>
                  <a
                    href="#"
                    className="flex items-center rounded-full justify-center w-10 h-10 mr-4  bg-gray-900 hover:text-white text-white"
                  >
                    02
                  </a>
                  <a
                    href="#"
                    className="flex items-center rounded-full justify-center w-10 h-10  mr-4  hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    03
                  </a>
                  <a
                    href="#"
                    className="flex items-center rounded-full justify-center w-10 h-10  mr-7  hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    04
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10   "
                  >
                    <FaArrowRight />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
