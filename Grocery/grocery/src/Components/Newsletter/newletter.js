import React from "react";

function Newsletter() {
  return (
    <>
      <div className="conatiner flex flex-col bg-black items-center justify-center py-2 md:flex-row h-32">
        <div className="flex justify-center lg:w-3/12 " >
          <p className="text-orange font-semibold text-lg md:text-xl">Subcribe to our newsletter</p>
        </div>
        <div className="flex flex-row items-center justify-center w-11/12 md:w-8/12">
          <input type="text" placeholder="Enter your email here.." className="w-11/12 md:w-4/12 py-1 md:px-2" />
          <p className="flex flex-col items-center justify-center  text-white py-1 px-2 bg-orange-yellow">
            subscribe
          </p>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
