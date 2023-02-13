import React from "react";
import { cartItems } from "../../constants";
import "./cart.scss";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {cartItems?.map((item) => (
        <div className="item">
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x {item.price}</div>
          </div>
          <AiOutlineDelete className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>K80</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
