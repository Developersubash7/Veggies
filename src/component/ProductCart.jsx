import React from "react";
import { assets } from '../assets/assets';
import { useAppContext } from "../context/AppContext";
export const ProductCart = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();

  return product && (
    <div
      onClick={() => { navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0, 0); }}
      className="bg-white border border-gray-300/50 rounded-lg overflow-hidden shadow-sm
                 flex flex-col items-stretch gap-3
                 p-3 md:p-4
                 w-full min-w-0 md:min-w-[14rem] max-w-full"
    >
      {/* Image */}
      <div className="w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-md bg-gray-50 flex items-center justify-center">
        <img
          src={product.image[0]}
          alt={product.name}
          className="w-full h-full object-contain transition-transform group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="text-gray-600/90 text-sm flex flex-col gap-2">
        <p className="text-xs text-gray-500">{product.category}</p>

        <p className="text-gray-800 font-medium text-base md:text-lg truncate">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array(5).fill('').map((_, i) => (
              <img
                key={i}
                className="w-3 md:w-3.5"
                src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                alt=""
              />
            ))}
          </div>
          <p className="text-xs md:text-sm text-gray-500">4</p>
        </div>

        <div className="mt-1 flex items-center justify-between gap-3">
          <p className="text-indigo-600 font-semibold md:text-xl text-sm">
            {currency}{product.offerPrice}
            <span className="text-gray-400 md:text-sm text-xs line-through ml-2">{currency}{product.price}</span>
          </p>
          <div onClick={(e) => { e.stopPropagation(); }} className="flex items-center">
            {!cartItems[product._id] ? (
              <button
                onClick={() => addToCart(product._id)}
                className="flex items-center justify-center gap-1 px-3 py-2 md:px-4 md:py-2 rounded-md
                           bg-primary/10 border border-primary/40 text-primary text-sm md:text-base"
                aria-label="Add to cart"
              >
                <img src={assets.cart_icon} className="w-4 h-4 md:w-5 md:h-5" alt="cart" />
                <span className="hidden xs:inline">Add</span>
              </button>
            ) : (
              <div className="flex items-center justify-center gap-0 sm:gap-1 md:gap-2 bg-indigo-50 rounded-md  md:px-3 h-9">
                <button onClick={() => removeFromCart(product._id)} className="px-2 md:px-3 text-base">-</button>
                <span className="w-6 text-center text-sm">{cartItems[product._id]}</span>
                <button onClick={() => addToCart(product._id)} className="px-2 md:px-3 text-base">+</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
