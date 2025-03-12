'use client'
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Navbar2 from '@/components/Navbar2'
import Image from 'next/image'
import Footer from '@/components/footer'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'
import { IoCutSharp } from "react-icons/io5";


export default function CartPage() {
  const [quantities, setQuantities] = useState({
    1: 1,
    2: 1,
    3: 1
  });
  
  const [shippingOption, setShippingOption] = useState('free');
  const [isShippingAccordionOpen, setIsShippingAccordionOpen] = useState(false);

  const handleQuantityChange = (id, change) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, prev[id] + change)
    }));
  };

  const products = [
    {
      id: 1,
      name: "Table clock",
      color: "Pink",
      price: 23.00,
      image: "/images/product/1.jpg"
    },
    {
      id: 2,
      name: "Designer pot",
      color: "Brown",
      price: 35.00,
      image: "/images/product/2.jpg"
    },
    {
      id: 3,
      name: "Ceramic mug",
      color: "White",
      price: 15.00,
      image: "/images/product/3.jpg"
    }
  ];

  const calculateTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const calculateSubtotal = () => {
    return products.reduce((total, product) => {
      return total + (product.price * quantities[product.id]);
    }, 0).toFixed(2);
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
              <h1>Cart</h1>
            </div>
            <div className="text-lg">
              <span className="p-2">Home</span>
              <span className="p-2">{">"}</span>
              <span className="p-2">Cart</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 lg:pr-12 mb-12 lg:mb-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="w-10"></th>
                      <th className="font-semibold text-left py-4">Product</th>
                      <th></th>
                      <th className="font-semibold text-left py-4">Price</th>
                      <th className="font-semibold text-left py-4">Quantity</th>
                      <th className="font-semibold text-left py-4">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <tr key={product.id} className="border-b">
                        <td className="py-4">
                          <button className="text-2xl font-medium">×</button>
                        </td>
                        <td className="py-4">
                          <Link href="/product-details">
                            <Image 
                              src={product.image} 
                              width={80} 
                              height={80} 
                              alt={product.name}
                              className="object-cover"
                            />
                          </Link>
                        </td>
                        <td className="py-4">
                          <Link href="/product-details" className="text-gray-800 font-medium block hover:text-gray-600">
                            {product.name}
                          </Link>
                          <span className="text-sm text-gray-500">Color: {product.color}</span>
                        </td>
                        <td className="py-4">${product.price.toFixed(2)}</td>
                        <td className="py-4">
                          <div className="flex border rounded-md w-28">
                            <button 
                              type="button" 
                              className="px-3 py-1"
                              onClick={() => handleQuantityChange(product.id, -1)}
                            >
                              -
                            </button>
                            <input 
                              type="text" 
                              value={quantities[product.id]} 
                              readOnly
                              className="w-10 text-center border-x"
                              aria-label="quantity"
                            />
                            <button 
                              type="button" 
                              className="px-3 py-1"
                              onClick={() => handleQuantityChange(product.id, 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4">${calculateTotal(product.price, quantities[product.id])}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex flex-col md:flex-row  justify-between items-start md:items-center mt-8">
                <div className="flex w-full md:w-[500px] border-2 items-center mb-4 md:mb-0">
                  <IoCutSharp className='text-3xl ml-5 opacity-50'/>
                  <input 
                    type="text" 
                    placeholder="Coupon code" 
                    className="border-none rounded-l-md outline-none px-4 py-2 w-full"
                  />
                  <button className=" text-black px-6 py-2 rounded-r-md text-sm font-semibold uppercase transition-colors">
                    Apply
                  </button>
                </div>
                <div className="flex space-x-4 mr-20">
                  <button className="border border-gray-300 px-4 py-2  rounded-md text-black hover:text-white hover:bg-blue-950 transition-colors">
                    Empty cart
                  </button>
                  <button className="border border-gray-300 px-4 py-2 rounded-md  text-black hover:text-white hover:bg-blue-950 transition-colors">
                    Update cart
                  </button>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/4">
              <div className="bg-gray-100 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Cart totals</h2>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <th className="text-left py-4 font-semibold text-gray-800">Subtotal</th>
                      <td className=" py-4 pl-10  font-bold text-xl text-gray-800">${calculateSubtotal()}</td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left py-4 font-semibold text-gray-800 align-top">Shipping</th>
                      <td className="text-right py-4">
                        <ul className="space-y-2 text-left pl-10 ">
                          <li className="flex items-center justify-start">
                            <input 
                              id="free_shipping" 
                              type="radio" 
                              name="shipping-option" 
                              className="mr-2"
                              checked={shippingOption === 'free'}
                              onChange={() => setShippingOption('free')}
                            />
                            <label htmlFor="free_shipping">Free shipping</label>
                          </li>
                          <li className="flex items-center justify-start">
                            <input 
                              id="flat" 
                              type="radio" 
                              name="shipping-option" 
                              className="mr-2"
                              checked={shippingOption === 'flat'}
                              onChange={() => setShippingOption('flat')}
                            />
                            <label htmlFor="flat">Flat: $12.00</label>
                          </li>
                          <li className="flex items-center  justify-start">
                            <input 
                              id="local_pickup" 
                              type="radio" 
                              name="shipping-option" 
                              className="mr-2"
                              checked={shippingOption === 'local'}
                              onChange={() => setShippingOption('local')}
                            />
                            <label htmlFor="local_pickup">Local pickup</label>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th colSpan={2} className="py-4">
                        <button 
                          className="flex items-center justify-between w-full"
                          onClick={() => setIsShippingAccordionOpen(!isShippingAccordionOpen)}
                        >
                          <span className="font-semibold text-gray-800">Calculate shipping</span>
                          <FiChevronDown className={`transition-transform ${isShippingAccordionOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {isShippingAccordionOpen && (
                          <div className="mt-4 space-y-4">
                            <select className="w-full border rounded-md px-3 py-2">
                              <option>Select a country</option>
                              <option value="USA">United States</option>
                              <option value="UK">United Kingdom</option>
                              <option value="Canada">Canada</option>
                              <option value="Australia">Australia</option>
                            </select>
                            
                            <select className="w-full border rounded-md px-3 py-2">
                              <option>Select state</option>
                            </select>
                            
                            <input 
                              type="text" 
                              placeholder="Town/City" 
                              className="w-full border rounded-md px-3 py-2"
                            />
                            
                            <input 
                              type="text" 
                              placeholder="ZIP" 
                              className="w-full border rounded-md px-3 py-2"
                            />
                            
                            <button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition-colors">
                              Update
                            </button>
                          </div>
                        )}
                      </th>
                    </tr>
                    <tr>
                      <th className="text-left py-4 font-semibold text-gray-800">Total</th>
                      <td className=" py-4 pl-10">
                        <span className="block font-bold justify-start text-gray-800 text-xl">${calculateSubtotal()}</span>
                        <span className="text-sm text-gray-500">(Includes $19.29 tax)</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                
                <Link 
                  href="/checkout" 
                  className="block w-[90%] h-14 items-center ml-5  bg-blue-950 justify-center   text-white text-center py-3 rounded-md mt-6 font-medium transition-colors"
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
