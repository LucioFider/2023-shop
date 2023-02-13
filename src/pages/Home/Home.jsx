import React from "react";
import { FeaturedProducts, Slider } from "../../components";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  );
};

export default Home;
