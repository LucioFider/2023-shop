import React from "react";
import "./categories.scss";
import { feat01, feat02, feat03, feat04, feat05, feat06 } from "../../assets";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src={feat01} alt="featured-product" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img src={feat02} alt="featured-product" />
          <button>
            <Link className="link" to="/products/2">
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src={feat03} alt="featured-product" />
          <button>
            <Link className="link" to="/products/3">
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src={feat04} alt="featured-product" />
              <button>
                <Link className="link" to="/products/4">
                  Sale
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src={feat05} alt="featured-product" />
              <button>
                <Link className="link" to="/products/5">
                  Sale
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={feat06} alt="featured-product" />
          <button>
            <Link className="link" to="/products/6">
              Sale
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
