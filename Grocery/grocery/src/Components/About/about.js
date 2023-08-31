import React from "react";
import "../../Styles/about.css";

function About() {
  return (
    <>
      {/* About Us Section */}
      <h1 className="text-center text-orange font-bold text-bold text-3xl">
        About Us
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-11/12 mx-auto">
        {/* Farmer Image */}
        <div className="farmer-image w-full md:w-2/4 h-96 md:h-80 rounded-3xl lg:w-4/12 shadow-sm shadow-opacity-50 hover:shadow-md hover:shadow-opacity-100"></div>
        
        {/* Description and Read More */}
        <div className="flex-flex-col w-full lg:w-2/4">
          <div className="flex flex-col items-center justify-center">
            {/* Description Text */}
            <p className="text-center text-lg text-white md:text-xl">
              We offer a variety of fruits, providing the best fruits sourced
              directly from local farms. Our commitment is to deliver high-quality
              and fresh produce to our customers.
            </p>
            {/* Read More Button */}
            <p className="p-2 text-center border-0 text-xl font-bold bg-orange-yellow outline-0 rounded-lg mt-4 hover:bg-black hover:text-orange-yellow w-5/12 md:w-4/12">
              Read More
            </p>
          </div>
          {/* Display Icons (if any) */}
          <div className="display-icons">
            {/* Add any icons or content related to the about section */}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
