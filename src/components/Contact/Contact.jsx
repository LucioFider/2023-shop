import React from "react";
import "./contact.scss";
import { CiInstagram, CiFacebook, CiTwitter } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Keep in touch</span>
        <div className="mail">
          <input type="text" placeholder="Enter your email..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <CiFacebook className="icon" />
          <CiTwitter className="icon" />
          <CiInstagram className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
