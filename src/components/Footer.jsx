import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaReddit } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col col__1">
          <h1>
            Coin<span className="primary">Ex</span>
          </h1>
        </div>
        <div className="col">
          <h5>Support</h5>
          <span className="bar"></span>
          <a href="/">Contact Us</a>
          <a href="/">Chat</a>
          <a href="/">Help Center</a>
          <a href="/">FAQ</a>
        </div>
        <div className="col">
          <h5>Developer</h5>
          <span className="bar"></span>
          <a href="/">Cloud</a>
          <a href="/">Commerce</a>
          <a href="/">DeFi</a>
          <a href="/">API</a>
        </div>
        <div className="col">
          <h5>Company</h5>
          <span className="bar"></span>
          <a href="/">About</a>
          <a href="/">Information</a>
          <a href="/">Legal</a>
          <a href="/">Privacy & Policy</a>
        </div>
        <div className="col">
          <h5>Social</h5>
          <span className="bar"></span>
          <a href="/">
            <FaFacebook className="icon" />
          </a>
          <a href="/">
            <FaLinkedin className="icon" />
          </a>
          <a href="/">
            <FaTwitter className="icon" />
          </a>
          <a href="/">
            <FaReddit className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
