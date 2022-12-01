import React from "react";
import "./Hero.css";

import homeImg from "../assets/Investment_SVG.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* LEFT */}
        <div className="left">
          <p>Buy & Sell Crypto 7/24</p>
          <h1>All your Crypto Assets on one platform</h1>
          <p>Buy, Sell, and store hundreds of Cryptocurrencies</p>
          <div className="input__container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
        {/* RIGHT */}
        <div className="right">
          <div className="img__container">
            <img src={homeImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
