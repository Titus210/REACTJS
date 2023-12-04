import React from "react";

import { FaTruck, FaChartLine } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

function QuickServices() {
  return (
    <>
      <div className="flex justify-evenly items-center px-3   md:w-full mx-auto ">
        <div className="flex flex-col justify-center items-center">
          <p className="p-5 bg-white rounded-full md:p-7">
            <FaTruck className="h-6 w-6 md:h-9 text-primary-green md:w-9" />
          </p>
          <p className="text-center text-primary-green text-sm md:text-xl mt-2">Quick delivery</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="p-5 bg-secondary-green rounded-full md:p-7">
            <RiSecurePaymentLine className="h-6 w-6  text-orange md:h-9 md:w-9 " />
          </p>
          <p className="text-center text-primary-green text-sm md:text-xl mt-2">Secure Transactions</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="p-5 bg-secondary-green rounded-full md:p-7">
            <FaChartLine className="h-6 w-6 md:h-9  text-orange md:w-9" />
          </p>
          <p className="text-center text-primary-green text-sm md:text-xl mt-2">Affordable Pricing</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="p-5 bg-secondary-green rounded-full md:p-7">
            <BiSupport className="h-6 w-6 md:h-9 text-orange md:w-9 " />
          </p>
          <p className="text-center text-primary-green text-sm md:text-xl mt-2">24/7 support</p>
        </div>
      </div>
    </>
  );
}

export default QuickServices;
