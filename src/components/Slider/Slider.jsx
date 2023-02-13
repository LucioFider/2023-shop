import React, { useState } from "react";
import "./slider.scss";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = ["/img/slide1.png", "/img/slide2.png", "/img/slide3.png"];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="slide1" />
        <img src={data[1]} alt="slide2" />
        <img src={data[2]} alt="slide3" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowLeftIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
