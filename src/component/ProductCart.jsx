// import React from "react";
// import {assets} from '../assets/assets'
// import { useAppContext } from "../context/AppContext";

// export const ProductCart = ({product}) => {
//     const {currency,addToCart,removeFromCart,cartItems,navigate}=useAppContext()

//     return product &&(
//         <div onClick={()=>{navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0,0)}} className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full">
//             <div className="group cursor-pointer flex items-center justify-center px-2">
//                 <img className="group-hover:scale-105 transition max-w-26 md:max-w-36" src={product.image[0]} alt={product.name} />
//             </div>
//             <div className="text-gray-500/60 text-sm">
//                 <p>{product.category}</p>
//                 <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
//                 <div className="flex items-center gap-0.5">
//                     {Array(5).fill('').map((_, i) => (
//                             <img className="md:w-3.5 w-3" src={i<4 ? assets.star_icon: assets.star_dull_icon} alt=""/>
//                     ))}
//                     <p>{4}</p>
//                 </div>
//                 <div className="flex items-end justify-between mt-3">
//                     <p className="md:text-xl text-base font-medium text-indigo-500">
//                         {currency}{product.offerPrice}{" "} <span className="text-gray-500/60 md:text-sm text-xs line-through">{currency}{product.price}</span>
//                     </p>
//                     <div onClick={(e)=>{e.stopPropagation();}} className="text-indigo-500">
//                         {!cartItems[product._id]? ( //Magic area
//                             <button className=" cursor-pointer flex items-center justify-center gap-1 bg-primary/10 border border-primary/40 md:w-[80px] w-[64px] h-[34px] rounded text-primary/65 font-medium" onClick={() => addToCart(product._id)} >
//                                 <img src={assets.cart_icon} alt="" />
//                                 Add
//                             </button>
//                         ) : (
//                             <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-indigo-500/25 rounded select-none">
                            
//                                 <button onClick={() => removeFromCart(product._id)} className="cursor-pointer text-md px-2 h-full">-</button>
//                                 <span className="w-5 text-center">{cartItems[product._id]}</span>
                            
//                                 <button onClick={() => addToCart(product._id)} className="cursor-pointer text-md px-2 h-full">+</button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
import React from "react";
import { assets } from '../assets/assets';
import { useAppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

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

        <div className="mt-1 flex items-end justify-between gap-3">
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
              <div className="flex items-center justify-center gap-2 bg-indigo-50 rounded-md px-2 md:px-3 h-9">
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
