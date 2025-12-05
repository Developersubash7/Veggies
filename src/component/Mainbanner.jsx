import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

function Mainbanner() {
  return (
    <div className="relative">
      {/* Background images */}
      <img src={assets.main_banner_bg} alt="banner" className="w-full hidden md:block" />
      <img src={assets.main_banner_bg_sm} alt="banner" className="w-full block md:hidden relative -z-10" />
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center md:items-start pt-50 sm:pt-0  justify-center  md:pl-16 lg:pl-24 ">
        <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-[26rem] leading-tight lg:leading-[3.75rem]">
          Freshness You Can Trust, Savings You Will Love!
        </h1>

        {/* Buttons */}
        <div className="flex items-center mt-6 font-medium gap-4">
          <Link
            to="/products"
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition-opacity rounded text-white cursor-pointer"
          >
            Shop now
          
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Mainbanner;
