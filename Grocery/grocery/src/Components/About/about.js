import React from "react";

import "../../Styles/about.css";
function About() {
  return (
    <>
      <h1 className="text-center text-bold text-3xl">About Us</h1>
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-11/12 mx-auto">
        <div className="farmer-image  w-full md:w-3/4 h-96 md:h-80 rounded-3xl lg:w-7/12  hover:bg-slate-400 shadow-sm shadow-opacity-50 hover:shadow-md hover:shadow-opacity-100"></div>
        <div className="flex-flex-col w-full lg:w-2/4">
          <div className="flex items-center justify-center">
            <p className="text-center text-lg  text-white md:text-xl">
              We offer variety of fruits, giving the best fruits right from the
              local farms. We offer variety of fruits, giving the best fruits
              right from the local farms. We offer variety of fruits, giving the
              best fruits right from the local farms.. <span className="text-primary-blue underline">read more</span>
            </p>
          </div>
          <div className="display-icons">
            <div className="p"></div>
            <div className="p"></div>
            <div className="p"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
