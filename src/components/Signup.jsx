import React from "react";
import "./Signup.css";

import signupImg from "../assets/Email_SVG.svg";

const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        {/* LEFT */}
        <div className="left">
          <img src={signupImg} alt="/" />
        </div>
        {/* RIGHT */}
        <div className="right">
          <h2>Earn passive income with crypto.</h2>
          <p>Sign Up and learn more.</p>
          <div className="input__container">
            <input type="email" placeholder="Enter your email." />
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
