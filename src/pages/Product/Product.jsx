import React, { useState } from "react";
import "./product.scss";
import { images } from "../../constants";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";
import { GiLifeInTheBalance } from "react-icons/gi";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={images[0]}
            alt="product-img"
            onClick={(e) => setSelectedImg(0)}
          />
          <img
            src={images[1]}
            alt="product-img"
            onClick={(e) => setSelectedImg(1)}
          />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="product-img" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span class="price">K85</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nulla
          illo quia possimus libero dolores, sequi esse sed. Et voluptas
          necessitatibus quaerat quas inventore at delectus cupiditate mollitia
          laudantium officiis!
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>

        <button className="add">
          <AiOutlineShopping className="icon" /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <AiOutlineHeart className="icon" /> ADD TO WISHLIST
          </div>
          <div className="item">
            <GiLifeInTheBalance className="icon" /> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
