import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex justify-evenly items-center w-full relative bg-slate-600">
        <div className="social-login flex flex-col">
          <h1 className="text-center text-orange text-2xl font-bold">
            Green<span className="text-primary-green">Mart</span>
          </h1>
        </div>
        <div className="faqs">
          <h1>FAQ</h1>
          <p>Where are we located</p>
          <p>What other services do we provide</p>
        </div>

        <div className="service">
          <p>Home`</p>
          <p>About us</p>
          <p></p>
          <p></p>
        </div>
        <div className="contact-us">
          <input type="text" />
          <button>Calls us</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
