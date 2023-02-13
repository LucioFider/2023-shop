import React from "react";
import "./featuredProducts.scss";
import { featuredProducts } from "../../constants";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum maiores
          libero, quisquam, dolor qui aspernatur repudiandae excepturi quia odio
          sint exercitationem officiis nobis autem, est laborum reprehenderit
          fugit soluta rerum.
        </p>
      </div>
      <div className="bottom">
        {featuredProducts.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
