import React from "react";
import Navbar from "../../Components/Common/navbar/navbar";
import Hero from "../../Components/Hero/hero";
import QuickServices from "../../Components/Common/quickServices/quickServices";
import Trending from "../../Components/Products/trending";
import Feature from "../../Components/Products/feature";
import About from "../../Components/About/about";
import Newletter from "../../Components/Newsletter/newletter";
import Footer from "../../Components/Common/footer/footer";
import Category from "../../Components/Products/Category/category";

function Landing() {
  return (
    <>
      {/* Main Content */}
      <div className="flex flex-col md:h-max w-full mx-auto ">
        <Navbar />
        <Hero />
        <div className=" py-5 bg-slate-100">
          <QuickServices />
        </div>
        <div className="w-full mx-auto">
          <div className="mt-4  bg-slate-100">
            <Category />
          </div>
          <div className="mt-4  ">
            <Trending />
          </div>
          <div className="mt-4  bg-slate-100">
            <Feature />
          </div>
          <div className="mt-4">
            <About />
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col">
          <div className="mt-4">
            <Newletter />
          </div>
          <div className="mt-4">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
