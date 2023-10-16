import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import fruits from "../../Assets/Data/fruits";
import SectionHeading from "../Common/headings/SectionHeading";



function Feature() {
  return (
    <>
      <div className="">
        <SectionHeading sctionHeading='Featured Products' />
      </div>
      <div className="flex  items-center mx-auto w-9/12 my-5">
        <p className="text-lg text-orange bg-primary-green rounded-full border border-slate-600 px-3">fruits</p>
        <p className="text-lg text-orange  ml-5 md:ml-8">vegetables</p>
        <p className="text-lg text-orange ml-5 md:ml-8">salads</p>
      </div>

    </>
  );
}

export default Feature



