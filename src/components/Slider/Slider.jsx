import React from "react";
import "./slider.scss";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Slider = () => {
  const data = ["/img/slide1.png", "/img/slide2.png", "/img/slide3.png"];

  return (
    <div className="slider">
      <div className="container">
        <img src={data[0]} alt="slide1" />
        <img src={data[1]} alt="slide2" />
        <img src={data[2]} alt="slide3" />
      </div>
      <div className="icons">
        <div className="icon">
          <ArrowLeftIcon />
        </div>
        <div className="icon">
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
