"use client";

import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";
import useCart from "@/store/useCart";
import { bestSellers } from "@/server/Data/BestSellers";

const ProductList = ({ products = bestSellers }) => { 
  const addToBasket = useCart((state) => state.addToBasket);

  if (!Array.isArray(products) || products.length === 0) {
    return <p className="text-center text-gray-500">محصولی برای نمایش وجود ندارد.</p>;
  }

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <li
          key={product.id}
          className="bg-white hover:shadow-xl rounded-xl overflow-hidden p-4 relative group transition-all duration-300"
        >
          <div className="relative">
            <Image
              src={product.image}
              width={200}
              height={200}
              alt={product.name}
              className="rounded-lg object-cover w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          </div>

          <button
            onClick={() => addToBasket(product)}
            className="bg-white p-2 rounded-full w-14 h-14 flex justify-center items-center shadow-md opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl delay-500"
          >
            <FiShoppingBag size={20} />
          </button>

          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="mt-1 text-gray-600">
              {product.oldPrice && <del className="text-red-500 mr-2">${product.oldPrice}</del>}
              <span className="text-xl font-bold">${product.price}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
