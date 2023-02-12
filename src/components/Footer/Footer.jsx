import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            illum voluptatibus hic ratione. Optio atque dolorem blanditiis amet
            laboriosam ex consequatur odit. Autem delectus unde dignissimos vero
            minus. Obcaecati, enim?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            accusamus fugit quo, ut consequatur vero nihil repellendus aut neque
            tempora dolores explicabo eligendi nesciunt architecto, voluptates
            rem qui eos incidunt.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Sello Theme</span>
          <span className="copyright">Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
