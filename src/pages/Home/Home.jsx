import React from "react";
import {
  FeaturedProducts,
  Slider,
  Categories,
  Contact,
} from "../../components";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
