import React from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="flag" />
            <ChevronDownIcon className="nav-icon" />
          </div>
          <div className="item">
            <span>PGK</span>
            <ChevronDownIcon className="nav-icon" />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            Sello-Theme
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <MagnifyingGlassIcon className="nav-icon" />
            <UserIcon className="nav-icon" />
            <HeartIcon className="nav-icon" />
            <div className="cartIcon">
              <ShoppingCartIcon className="nav-icon" />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
