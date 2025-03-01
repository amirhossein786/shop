import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";

export default function Navbar() {
  return (
<div className="w-full h-10 bg-white flex justify-between z-50 items-center px-20">
  <div>
    <span>
      Free Delivery on orders over £120. Don't miss discount. 
      <a href="#" className="underline"> Shop now</a>
    </span>
  </div>
  
  <div className="flex space-x-6">
    <span className="flex items-center">
      <FiPhoneCall /> Customer Service
    </span>
    <span className="flex items-center">
    <LuMapPin /> Find Our Store</span>
    <span className="flex items-center">
    <TbWorld /> English</span>
  </div>
</div>

  )
}
