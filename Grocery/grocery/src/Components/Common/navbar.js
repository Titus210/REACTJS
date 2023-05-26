import React from "react";

// import icons from react icons
import { VscAccount, VscBell } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-full h-16 relative">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center">
            <h1 className="text-center text-orange text-2xl font-bold">
              Green<span className="text-primary-green">Mart</span>
            </h1>
          </div>
        </div>
        <div className="absolute flex top-0  h-screen text-white bg-black w-80 lg:text-black lg:flex flex-col  items-center ml-8 lg:flex-row lg:relative lg:h-auto lg:bg-inherit">
          <h1 className="text-2xl mt-4 lg:mt-0 lg:text-lg font-semibold text-gray-500">
            Home
          </h1>
          <h1 className="text-2xl mt-4 lg:mt-0 lg:text-lg font-semibold text-gray-500 lg:ml-8">
            Products
          </h1>
          <h1 className="text-2xl mt-4 lg:mt-0 lg:text-lg font-semibold text-gray-500 lg:ml-8">
            Shop
          </h1>
          <h1 className="text-2xl mt-4 lg:mt-0 lg:text-lg font-semibold text-gray-500 lg:ml-8">
            Contact
          </h1>
          <div className="flex flex-col items-center ml-8 relative p-2 lg:hidden">
            <VscAccount className="w-6 h-6" />
            <p>Login</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center ml-8">
              <div className="flex flex-row items-center relative p-2  ">
                <h1 className="text-lg font-semibold text-gray-500 absolute -top-2 -right-1 text-purple">
                  0
                </h1>
                <FaShoppingCart className="w-6 h-6 ml-2 text-primary-green" />
              </div>
              <div className="hidden lg:flex flex-row items-center ml-8 relative p-2  ">
                <h1 className="text-lg font-semibold text-gray-500 absolute -top-2 right-1 text-red-500">
                  0
                </h1>
                <VscBell className="w-6 h-6 text-orange" />
              </div>
              <div className="flex flex-row items-center ml-8 relative p-2  ">
                <VscAccount className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
