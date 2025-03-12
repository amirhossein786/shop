"use client";
import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import Footer from "@/components/footer";
import Link from "next/link";
import { FiUser, FiScissors } from "react-icons/fi";
import countryList from "react-select-country-list";
import ClientOnlySelect from '@/app/Checkout/components/ClientOnlySelect';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("direct_bank");
  const [createAccount, setCreateAccount] = useState(false);
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const products = [
    {
      id: 1,
      name: "Table clock",
      color: "Pink",
      price: 23.0,
      quantity: 1,
    },
    {
      id: 2,
      name: "Decorative pot",
      color: "Brown",
      price: 35.0,
      quantity: 2,
    },
    {
      id: 3,
      name: "Ceramic mug",
      color: "White",
      price: 15.0,
      quantity: 1,
    },
  ];

  const calculateSubtotal = () => {
    return products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = 19.29;
  const total = subtotal;

  const [selectedCountry, setSelectedCountry] = useState(null);
  const options = useMemo(() => countryList().getData(), []);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "1px solid #e2e8f0",
      borderRadius: "0.375rem",
      padding: "0.25rem",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9CA3AF",
    }),
  };

  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };
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
            className="w-screen h-[400px] object-cover"
          />
          <div className="absolute top-40 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-6xl font-bold mb-5">
              <h1>Checkout</h1>
            </div>
            <div className="text-lg">
              <span className="p-2">Home</span>
              <span className="p-2">{">"}</span>
              <span className="p-2">Checkout</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8 lg:mb-20 text-xl items-center">
            <div className="flex items-center mr-5">
              <div className="mr-1">
                <FiUser className="text-gray-700" />
              </div>
              <div>
                <span className="text-gray-700">
                  Returning customer?{" "}
                  <Link
                    href="#"
                    className="font-semibold text-gray-700 border-b border-gray-700"
                  >
                    Click here to login
                  </Link>
                </span>
              </div>
            </div>
            <div className="hidden lg:block mx-5 h-5 w-px bg-gray-300"></div>
            <div className="flex items-center ml-5">
              <div className="mr-1">
                <FiScissors className="text-gray-700" />
              </div>
              <div>
                <span className="text-gray-700">
                  Have a coupon?{" "}
                  <Link
                    href="#"
                    className="font-semibold text-gray-700 border-b border-gray-700"
                  >
                    Click here to enter your code
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-7/12 lg:pr-12 mb-12 lg:mb-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                Billing details
              </h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-2 text-gray-400">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-md px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-400">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-md px-3 py-2"
                      required
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block mb-2 text-gray-400">
                    Company name (optional)
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>

                <div className="mt-5">
                  <label className="block mb-2 text-gray-400">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <ClientOnlySelect
                    options={options}
                    onChange={handleChange}
                    placeholder="Select a country"
                    styles={customStyles}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        primary: "#1e3a8a",
                        primary25: "#eff6ff",
                      },
                    })}
                  />
                </div>

                <div className="mt-5">
                  <label className="block mb-2">
                    Street address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="House number and street name"
                    className="w-full border rounded-md px-3 py-2 mb-5"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suite, unit etc. (optional)"
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>

                <div className="mt-5">
                  <label className="block mb-2">
                    Town / City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md px-3 py-2"
                    required
                  />
                </div>

                <div className="mt-5">
                  <label className="block mb-2">
                    State <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border rounded-md px-3 py-2">
                    <option>Select a state</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label className="block mb-2">
                    ZIP <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md px-3 py-2"
                    required
                  />
                </div>

                <div className="mt-5">
                  <label className="block mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full border rounded-md px-3 py-2"
                    required
                  />
                </div>

                <div className="mt-5">
                  <label className="block mb-2">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full border rounded-md px-3 py-2"
                    required
                  />
                </div>

                <div className="mt-5">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="create_account"
                      checked={createAccount}
                      onChange={() => setCreateAccount(!createAccount)}
                      className="mr-2"
                    />
                    <label htmlFor="create_account">Create an account?</label>
                  </div>

                  {createAccount && (
                    <div className="pl-8 mt-4 space-y-4">
                      <div>
                        <label className="block mb-2">
                          Account username{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full border rounded-md px-3 py-2"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2">
                          Create account password{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="password"
                          className="w-full border rounded-md px-3 py-2"
                          required
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-5">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="ship_different"
                      checked={shipToDifferentAddress}
                      onChange={() =>
                        setShipToDifferentAddress(!shipToDifferentAddress)
                      }
                      className="mr-2"
                    />
                    <label htmlFor="ship_different">
                      Ship to a different address?
                    </label>
                  </div>

                  {shipToDifferentAddress && (
                    <div className="pl-8 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block mb-2">
                            First name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            className="w-full border rounded-md px-3 py-2"
                            required
                          />
                        </div>
                        <div>
                          <label className="block mb-2">
                            Last name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            className="w-full border rounded-md px-3 py-2"
                            required
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block mb-2">
                          Company name (optional)
                        </label>
                        <input
                          type="text"
                          className="w-full border rounded-md px-3 py-2"
                        />
                      </div>

                      <div className="mt-4">
                        <label className="block mb-2">
                          Country <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full border rounded-md px-3 py-2">
                          <option value="">Select a country</option>
                          <option value="USA">United States</option>
                          <option value="UK">United Kingdom</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                        </select>
                      </div>

                      <div className="mt-4">
                        <label className="block mb-2">
                          Street address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="House number and street name"
                          className="w-full border rounded-md px-3 py-2 mb-4"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Apartment, suite, unit etc. (optional)"
                          className="w-full border rounded-md px-3 py-2"
                        />
                      </div>

                      <div className="mt-4">
                        <label className="block mb-2">
                          Town / City <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full border rounded-md px-3 py-2"
                          required
                        />
                      </div>

                      <div className="mt-4">
                        <label className="block mb-2">
                          State <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full border rounded-md px-3 py-2">
                          <option>Select a state</option>
                        </select>
                      </div>

                      <div className="mt-4">
                        <label className="block mb-2">
                          ZIP <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full border rounded-md px-3 py-2"
                          required
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-5">
                  <label className="block mb-2">Order notes (optional)</label>
                  <textarea
                    rows="5"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    className="w-full border rounded-md px-3 py-2"
                  ></textarea>
                </div>
              </form>
            </div>

            <div className="lg:w-5/12 lg:pl-12">
              <div className="bg-gray-100 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                  Your order
                </h2>
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 font-semibold text-gray-800 w-3/5">
                        Product
                      </th>
                      <th className="text-left py-4 font-semibold text-gray-800">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-b">
                        <td className="py-4">
                          <div>
                            <Link
                              href="#"
                              className="text-gray-800 font-medium hover:text-gray-600"
                            >
                              {product.name} x {product.quantity}
                            </Link>
                          </div>
                          <div className="text-sm text-gray-500">
                            Color: {product.color}
                          </div>
                        </td>
                        <td className="py-4 text-left">
                          ${(product.price * product.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                    <tr className="border-b">
                      <th className="text-left py-4 font-semibold text-gray-800">
                        Subtotal
                      </th>
                      <td className="py-4 text-left font-semibold text-gray-800">
                        ${subtotal.toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left py-4 font-semibold text-gray-800">
                        Shipping
                      </th>
                      <td className="py-4 text-left">
                        <ul className="space-y-2 text-left">
                          <li className="flex items-center ">
                            <input
                              id="free_shipping"
                              type="radio"
                              name="shipping-option"
                              className="mr-2"
                              defaultChecked
                            />
                            <label htmlFor="free_shipping">Free shipping</label>
                          </li>
                          <li className="flex items-center ">
                            <input
                              id="flat"
                              type="radio"
                              name="shipping-option"
                              className="mr-2"
                            />
                            <label htmlFor="flat">Flat: $12.00</label>
                          </li>
                          <li className="flex items-center ">
                            <input
                              id="local_pickup"
                              type="radio"
                              name="shipping-option"
                              className="mr-2"
                            />
                            <label htmlFor="local_pickup">Local pickup</label>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left py-4 font-semibold text-gray-800">
                        Total
                      </th>
                      <td className="py-4 text-left">
                        <div className="font-bold text-xl text-gray-800">
                          ${total.toFixed(2)}
                        </div>
                        <div className="text-sm text-gray-500">
                          (Includes ${tax.toFixed(2)} tax)
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="mt-8 bg-white p-6 rounded-lg shadow-md mb-6">
                  <div>
                    <div className="mb-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="payment-method"
                          value="direct_bank"
                          checked={paymentMethod === "direct_bank"}
                          onChange={() => setPaymentMethod("direct_bank")}
                          className="mr-2"
                        />
                        <span className="text-gray-800 font-medium">
                          Direct bank transfer
                        </span>
                      </label>
                      {paymentMethod === "direct_bank" && (
                        <div className="mt-4 p-4 bg-gray-100 text-sm">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="payment-method"
                          value="check"
                          checked={paymentMethod === "check"}
                          onChange={() => setPaymentMethod("check")}
                          className="mr-2"
                        />
                        <span className="text-gray-800 font-medium">
                          Check payments
                        </span>
                      </label>
                      {paymentMethod === "check" && (
                        <div className="mt-4 p-4 bg-gray-100 text-sm">
                          Please send a check to store name, store street, store
                          town, store state / county, store postcode.
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="payment-method"
                          value="cash"
                          checked={paymentMethod === "cash"}
                          onChange={() => setPaymentMethod("cash")}
                          className="mr-2"
                        />
                        <span className="text-gray-800 font-medium">
                          Cash on delivery
                        </span>
                      </label>
                      {paymentMethod === "cash" && (
                        <div className="mt-4 p-4 bg-gray-100 text-sm">
                          Pay with cash upon delivery.
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="payment-method"
                          value="paypal"
                          checked={paymentMethod === "paypal"}
                          onChange={() => setPaymentMethod("paypal")}
                          className="mr-2"
                        />
                        <span className="text-gray-800 font-medium flex items-center">
                          PayPal
                          <Image
                            src="/images/checkout.jpg"
                            alt="PayPal"
                            width={120}
                            height={40}
                            className="ml-2"
                          />
                        </span>
                      </label>
                      {paymentMethod === "paypal" && (
                        <div className="mt-4 p-4 bg-gray-100 text-sm">
                          You can pay with your credit card if you don't have a
                          PayPal account.
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our{" "}
                  <Link
                    href="#"
                    className="text-gray-800 font-medium border-b border-gray-800"
                  >
                    privacy policy
                  </Link>
                  .
                </p>

                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={() => setTermsAccepted(!termsAccepted)}
                      className="mr-2"
                    />
                    <span className="text-sm">
                      I have agree to the website{" "}
                      <Link
                        href="#"
                        className="text-gray-800 font-medium border-b border-gray-800"
                      >
                        terms and conditions
                      </Link>
                      .
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 rounded-md text-white font-medium transition-colors ${
                    termsAccepted
                      ? "bg-blue-950 hover:bg-blue-900"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!termsAccepted}
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
