import React from "react";

import { FaFacebook, FaGoogle, FaApple, FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-evenly items-center w-full relative bg-slate-600">
        <div className="social-login flex flex-col">
          <h1 className="text-center text-orange text-2xl font-bold">
            Green<span className="text-primary-green">Mart</span>
          </h1>
          <div className="flex flex-row justify-evenly items-center  w-7/12 ">
            <FaFacebook className="w-6 h-6  text-blue-500 cursor-pointer hover:scale-125" />
            <FaGoogle className="w-6 h-6  text-red-500 cursor-pointer hover:scale-125" />
            <FaApple className="w-6 h-6  text-gray-500 cursor-pointer hover:scale-125" />
          </div>
        </div>
        <div className="flex  justify-between  w-11/12 md:w-4/12">
          <div className="service">
            <h1 className="text-2xl">Services</h1>
            <p>Home</p>
            <p>About us</p>
            <p>products</p>
            <p>Shop</p>
          </div>

          <div className="faqs w-6/12 md:w-auto">
            <h1 className="text-2xl">FAQ</h1>
            <p>Where are we located?</p>
            <p>What other services do we provide?</p>
            <p>Making purchases?</p>
            <p>delivery options?</p>
          </div>
        </div>

        <div className="contact-us flex justify-center items-center flex-col bg-slate-200 w-full md:w-4/12">
          <div className=" flex items-center">
            <textarea className="md:w-4/5" />
            <button className="self-end">Calls us</button>
          </div>
          <div className="flex flex-row">
            <div>
              <MdLocationOn className="w-6 h-6 cursor-pointer hover:scale-125" />
              <div className="location flex">Nakuru, Kenya</div>
            </div>
            <div className="flex items-center flex-col">
              <FaPhone className="w-6 h-6" />
              <div>
                <p>+253722212</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
