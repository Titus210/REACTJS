import React from "react";

import "../../Styles/hero.css";

function Hero() {
  return (
    <>
      <div className="md:h-max w-full mx-auto">
        <div className="flex flex-col justify-between items-center h-2/3 lg:flex-row-reverse">
          <div className="hero-image w-full h-96 rounded-3xl  lg:w-7/12"> </div>
          <div className="flex items-center justify-center flex-col md:justify-evenly  h-2/4 md:w-9/12 lg:w-5/12">
            <div className="">
              <h1 className="text-3xl md:text-5xl text-center lg:text-start">
                The Fresh <span className="text-primary-green"> Organic </span> products
              </h1>
            </div>
            <div className=" flex mt-5 md:mt-0">
              <p className="p-2 text-center md:text-3xl  text-white border bg-orange-yellow outline-0 rounded-xl hover:bg-black hover:text-orange-yellow ">
                View Shop
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
