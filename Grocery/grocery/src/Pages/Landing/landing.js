import React from "react";
import Navbar from "../../Components/Common/navbar";
import Hero from "../../Components/Hero/hero";
import QuickServices from "../../Components/Common/quickServices";
import Trending from "../../Components/Products/trending";
import Feature from "../../Components/Products/feature";
import About from "../../Components/About/about";
import Newletter from "../../Components/Newsletter/newletter";
import Footer from "../../Components/Common/footer";

function Landing() {
  return (
    <>
      <div className=" flex flex-col bg-slate-500 md:h-max ">
        <Navbar />
        <Hero />
        <QuickServices />
        <Trending />
        <Feature />
        <About />
        <Newletter/>
        <Footer/>
      </div>
    </>
  );
}

export default Landing;
