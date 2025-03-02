// ProductCard.jsx
"use client";
import Image from "next/image";
import useCart from "@/store/useCart";
import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ product }) {
  const { actions } = useCart();

  const handleAddToCart = () => {
    if (!product || !product.id || !product.price) {
      console.error("محصول اطلاعات کافی ندارد:", product);
      return;
    }

    const productToAdd = {
      id: product.id,
      name: product.name || "محصول بدون نام",
      price: product.price,
      image: product.image || "/placeholder-image.jpg", 
    };

    actions.addToBasket(productToAdd);
  };

  return (
    <div className="product-card">
      {product.image && (
        <Image 
          src={product.image} 
          alt={product.name || "محصول"} 
          width={300} 
          height={300} 
          className="object-cover"
        />
      )}
      <h3>{product.name || "محصول بدون نام"}</h3>
      <p>${product.price}</p>
      
      <button 
        onClick={handleAddToCart}
        className="bg-black text-white py-2 px-4 mt-2 flex items-center justify-center gap-2 hover:bg-gray-800 transition"
      >
        <FiShoppingCart />
        افزودن به سبد خرید
      </button>
    </div>
  );
}
