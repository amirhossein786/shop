import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/footer";
export default function page() {
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
              <h1 className="">My account</h1>
            </div>
            <div className="col-12 justify-center items-center text-center text-lg pt-5 ">
              <span className="p-2">Home</span>
              <span className="p-2">{">"}</span>
              <span className="p-2">My account</span>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto py-20 px-4">
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          <div className="w-full lg:w-[500px] bg-white  p-10 rounded-md">
            <h1 className="font-bold text-2xl mb-6 text-gray-800">Login</h1>

            <form className="space-y-5">
              <div className="flex flex-col space-y-2">
                <label className="font-medium text-gray-700">
                  Username or email address
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your username or email"
                  className="border bg-gray-100 focus:bg-white placeholder:text-gray-400 rounded-md px-4 py-3 focus:outline-none  transition-all"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="font-medium text-gray-700">
                  Password<span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="border bg-gray-100 focus:bg-white rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none  transition-all"
                />
              </div>
              <div className="flex justify-between">
                <div className=" items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="remember" className="text-gray-400">
                    Remember me
                  </label>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-black border-b-2 border-black transition-colors"
                  >
                    Forget your password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-colors duration-300"
              >
                Member login
              </button>
            </form>
          </div>

          <div className="w-full lg:w-[500px] bg-white shadow-lg mt-10 p-10 ml-40 rounded-md">
            <h1 className="font-bold text-2xl mb-6 text-gray-800">
              Create an account
            </h1>

            <form className="space-y-5">
              <div className="flex flex-col space-y-2">
                <label className="font-medium text-gray-700">
                  Username<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="border  bg-gray-100 placeholder:text-gray-400  rounded-md px-4 py-3 focus:outline-none focus:bg-white transition-all"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="font-medium text-gray-700">
                  Email address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border bg-gray-100 rounded-md placeholder:text-gray-400 px-4 py-3 focus:outline-none focus:bg-white transition-all"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="font-medium text-gray-700">
                  Password<span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="border bg-gray-100 placeholder:text-gray-400 rounded-md px-4 py-3 focus:outline-none focus:bg-white transition-all"
                />
              </div>

              <p className="text-gray-400 text-sm">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  privacy policy
                </a>
                .
              </p>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-colors duration-300"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
