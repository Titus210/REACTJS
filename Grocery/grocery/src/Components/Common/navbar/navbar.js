import React, { useState } from "react";
import { VscAccount, VscBell } from "react-icons/vsc";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Navbar() {
  // State for menu open/close
  const [menuOpen, setMenuOpen] = useState(false);
  // State for shopping cart visibility
  const [cartVisible, setCartVisible] = useState(true);

  // Function to toggle the menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setCartVisible(true); // Show the cart when the menu is closed
  };

  // Function to toggle the shopping cart visibility
  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div className="flex flex-row justify-between items-center w-full h-16 relative mx-auto bg-slate-600 px-7">
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          {/* Logo */}
          <h1 className="text-center text-orange text-2xl font-bold">
            Green<span className="text-primary-green">Mart</span>
          </h1>
        </div>
      </div>

      {/* Menu bar */}
      <div
        className={`absolute flex top-0 -right-5 h-screen w-11/12 md:w-11/12 md:-right-20 text-white bg-grayish-blue lg:text-black lg:flex lg:flex-row flex-col items-center ml-8 lg:relative lg:h-auto lg:bg-inherit ${menuOpen ? "" : "hidden lg:flex"
          }`}
      >
        {/* Menu items */}
        <h1 className="text-2xl mt-4 text-green p-2 uppercase font-semibold text-gray-500 lg:ml-8 lg:mt-0 lg:text-lg">
          Home
        </h1>
        <h1 className="text-2xl mt-4 text-white uppercase font-semibold text-gray-500 lg:ml-8 lg:mt-0 lg:text-lg">
          Products
        </h1>
        <h1 className="text-2xl mt-4 text-white uppercase font-semibold text-gray-500 lg:ml-8 lg:mt-0 lg:text-lg">
          Shop
        </h1>
        <h1 className="text-2xl mt-4 text-white uppercase font-semibold text-gray-500 lg:ml-8 lg:mt-0 lg:text-lg">
          Contact
        </h1>
        <div className="flex flex-col items-center md:w-9/12 w-full absolute bottom-4 p-2 mt-4 lg:hidden">
          {/* Login */}
          <VscAccount className="hidden w-6 h-6 mb-3" />
          <p className="p-2 text-center text-white border bg-orange-yellow outline-0 rounded-xl w-9/12 hover:bg-black hover:text-orange-yellow md:w-11/12">
            <Link to='/login'>Login</Link>
          </p>
        </div>
      </div>

      {/* Navigation icons */}
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center ml-8 relative">
            {/* Shopping cart */}
            {cartVisible && (
              <div className="absolute right-12 flex flex-row items-center lg:relative lg:right-0 p-2">
                <h1 className="text-lg font-semibold text-gray-500 absolute -top-2 -right-1 text-orange">
                  0
                </h1>
                <FaShoppingCart className="w-6 h-6 ml-2 text-primary-green" />
              </div>
            )}
            {/* Notification bell */}
            <div className="hidden lg:flex flex-row items-center ml-8 relative p-2">
              <h1 className="text-lg font-semibold text-gray-500 absolute -top-2 right-1 text-red-500">
                0
              </h1>
              <VscBell className="w-6 h-6 text-orange" />
            </div>
            {/* Account icon */}
            <div className="hidden flex-row items-center ml-8 relative p-2 lg:flex">
              <VscAccount className="w-6 h-6 text-white" />
            </div>
            {/* Menu icon */}
            <div
              className={`flex flex-row items-center ml-8 absolute right-0 p-2 lg:hidden ${menuOpen ? "hidden" : ""
                }`}
              onClick={toggleMenu}
            >
              <FaBars className="w-6 h-6 text-white" />
            </div>
            {/* Close icon */}
            <div
              className={`flex text-white flex-row items-center ml-8 absolute right-0 p-2 lg:hidden ${!menuOpen ? "hidden" : ""
                }`}
              onClick={toggleMenu}
            >
              <AiOutlineClose className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
