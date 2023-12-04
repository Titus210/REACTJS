import React from "react";

import "../../Styles/hero.css";
import PrimaryButton from "../Common/button/PrimaryButton";

function Hero() {
  return (
    <>
      <div className="w-full mx-auto   flex items-center py-8">
        <div className="flex flex-col  justify-between items-center mx-auto w-10/12 md:flex-row-reverse">
          <div className="hero-image w-full  rounded-3xl  md:w-7/12"> </div>
          <div className="flex  flex-col justify-center items-center  px-6  lg:w-5/12 ">
            <div className="">
              <p className="text-4xl text-center  md:text-start text-accent font-bold md:text-6xl ">
                Fresh <span className=""> Organic </span> products
              </p>
            </div>
            {/* <div className="flex flex-col my-4">
              <p className="text-white text-2xl">We give the best grocery products</p>
            </div> */}
            <div className="flex items-center mt-5 w-6/12 justify-center md:justify-start">
              {/* <p className="p-2 text-center text- border-0 text-xl font-bold bg-orange-yellow outline-0 rounded-lg  hover:bg-black hover:text-orange-yellow w-8/12 md:w-7/12">
                View Shop
              </p> */}
              <PrimaryButton btnText='Shop Now' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
