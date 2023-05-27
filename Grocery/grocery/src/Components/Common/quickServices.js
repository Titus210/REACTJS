import React from "react";

import { FaTruck, FaChartLine } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import {BiSupport} from "react-icons/bi";

function QuickServices() {
  return (
    <>
      <div className="flex justify-evenly items-center md:w-full ">
        <div className="flex flex-col justify-center items-center">
          <p className="p-5 bg-slate-400 rounded-full md:p-10">
            <FaTruck className="h-6 w-6 md:h-9 md:w-9" />
          </p>
          <p className="text-center">Quick delivery</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="p-5 bg-slate-400 rounded-full md:p-10">
            <RiSecurePaymentLine className="h-6 w-6 md:h-9 md:w-9" />
          </p>
          <p className="text-center">Secure Transactions</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="p-5 bg-slate-400 rounded-full md:p-10">
            <FaChartLine className="h-6 w-6 md:h-9 md:w-9" />
          </p>
          <p className="text-center">Affordable Pricing</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="p-5 bg-slate-400 rounded-full md:p-10">
            <BiSupport className="h-6 w-6 md:h-9 md:w-9" />
          </p>
          <p className="text-center">24/7 support</p>
        </div>
      </div>
    </>
  );
}

export default QuickServices;
