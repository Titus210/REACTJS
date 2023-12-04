import React from "react";

import { FaFacebook, FaGoogle, FaApple, FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-evenly items-center py-5 w-full relative ">
        <div className="social-login flex flex-col items-center">
          <h1 className="text-center text-orange text-2xl font-bold">
            Green<span className="text-primary-green">Mart</span>
          </h1>
          <div className="flex flex-row justify-evenly items-center  w-7/12 ">
            <FaFacebook className="w-8 h-8   text-blue-500 cursor-pointer hover:scale-125" />
            <FaGoogle className="w-6 h-6 mx-2  text-red-500 cursor-pointer hover:scale-125" />
            <FaApple className="w-6 h-6  text-gray-500 cursor-pointer hover:scale-125" />
          </div>
        </div>
        <div className="flex flex-wrap  justify-between  w-11/12 md:w-4/12">
          <div className="service">
            <h3 className="text-xl text-orange">Store</h3>
            <p className="text-white">Milk</p>
            <p className="text-white">Vegetables</p>
            <p className="text-white">Meat</p>
            <p className="text-white">Shop</p>
          </div>

          <div className="faqs w-6/12 md:w-auto">
            <h3 className="text-xl text-orange ">Services</h3>
            <p className="text-white">FAQ</p>
            <p className="text-white">Contact</p>
            <p className="text-white">Privacy policy</p>
            <p className="text-white">Delivery options?</p>
          </div>

        </div>
      </div>
    </div >
  );
}

export default Footer;
