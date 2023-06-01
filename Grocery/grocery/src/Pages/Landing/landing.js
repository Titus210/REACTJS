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
      <div className="flex flex-col md:h-max">
        <Navbar />
        <Hero />
        <div className="mt-4"> 
          <QuickServices />
        </div>
        <div className="mt-4"> 
          <Trending />
        </div>
        <div className="mt-4"> 
          <Feature />
        </div>
        <div className="mt-4"> 
          <About />
        </div>
        <div className="mt-4"> 
          <Newletter />
        </div>
        <div className="mt-4"> 
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Landing;
