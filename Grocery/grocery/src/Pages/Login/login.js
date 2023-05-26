import React from "react";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";

import "../../Styles/login.css";
function LoginPage() {
  return (
    <>
      <div className="w-screen">
        <div className="  mx-auto h-screen w-screen  flex flex-col justify items-center  bg-[#214462] lg:flex-row lg:justify-evenly relative">
          <div className="hidden login-bg bg-cover bg-no-repeat bg-center  justify-center items-center bg-slate-500 h-1/2 w-2/5 lg:flex"></div>

          <div className=" flex justify-center items-center  w-full h-1/4 top-1 lg:absolute ">
            <p className="text-3xl text-center text-orange-yellow md:text-5xl font-bold">
              Green<span className="text-primary-green">Mart</span>
            </p>
          </div>
          {/* here */}

          <div className="w-full h-3/4 flex flex-col justify-between items-center  bg-slate-100 rounded-t-3xl shadow-2xl md:rounded-b-3xl md:w-2/4 lg:w-1/4 md:h-1/2 md:border-0 md:p-2">
            <div className="text-start">
              <p className="text-center text-2xl font-bold text-orange-yellow ">
                Welcome Back
              </p>
            </div>
            <div className="flex flex-col justify-start items-center  w-full">
              <label
                htmlFor="email"
                className="ml-4 self-start text-primary-blue text-xl "
              >
                Enter your email
              </label>
              <input
                type="text"
                className="border-gray  w-11/12 py-1 rounded-lg bg-slate-300"
              />
              <label
                htmlFor="password"
                className="ml-4 mt-4 self-start text-primary-blue text-xl "
              >
                Enter your password
              </label>
              <input
                type="text"
                className="border-gray w-11/12 py-1 rounded-lg bg-slate-300"
              />
            </div>
            <div className="flex flex-row justify-evenly  w-full ">
              <div className="flex flex-row">
                <input type="checkbox" name="remember me" id="remember-me" />
                <p className="text-xl ml-1 lg:text-lg">Remember me</p>
              </div>
              <p className="text-primary-blue text-xl underline lg:text-lg">
                Forgot password
              </p>
            </div>
            <div className="login-button w-full flex justify-center">
              <p className="p-2 text-center text-white border bg-orange-yellow  outline-0 rounded-xl w-9/12  hover:bg-black hover:text-orange-yellow md:w-11/12">
                Login
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex flex-row items-center justify-center mb-4 w-9/12 lg:mb-2 md:w-11/12">
                <div className="line"></div>
                <p className="text-xl">OR</p>
                <div className="line"></div>
              </div>
              <div className="flex flex-row justify-evenly items-center  w-7/12 ">
                <FaFacebook className="w-6 h-6 t text-blue-500 cursor-pointer hover:scale-125" />
                <FaGoogle className="w-6 h-6 t text-red-500 cursor-pointer hover:scale-125" />
                <FaApple className="w-6 h-6 t text-gray-500 cursor-pointer hover:scale-125" />
              </div>
            </div>
            <div className="login-button w-full flex justify-center mb-4 lg:mt-2">
              <p className="text-xl">
                Continue as{" "}
                <span className="text-primary-blue underline">guest</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
