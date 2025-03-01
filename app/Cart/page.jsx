import React from "react";
import useCart from "@/store/useCart";
import Products from "@/server/Data/Data";
export default function products() {
  return (
    <div>
      {[<Products />].map((item, index) => (
        <div key={index} className="">
          <Image
            src={item.src}
            alt={item.label}
            width={1000}
            height={1000}
            className=""
          />
          <p className="">{item.label}</p>
          <p className="">{item.price}</p>
        </div>
      ))}
    </div>
  );
}
