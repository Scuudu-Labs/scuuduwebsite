import React from "react";
import logo from "../../assets/logo.png";
import profileImage from "../../assets/icons/profile-image-filler.svg";
import cart from "../../assets/icons/cart-icon.svg";

import "./StoreNavBar.css";
import { Link } from "react-router-dom";

const StoreNavBar = () => {
  return (
    <nav className="sw-store-navbar">
      <section className="sw-store-navbar--logo">
        <Link to="/">
          <img src={logo} alt="scuduu logo" />
        </Link>
      </section>
      <section className="sw-store-navbar--search">
        <input
          placeholder="Search products and categories"
          type="search"
          name="search-store"
          id="search-store"
        />
        <select name="select-category" id="select-category">
          <option value="0">All Categories</option>
          <option value="1">Shirts</option>
          <option value="2">Jeans</option>
        </select>
        <i className="fas fa-search"></i>
      </section>
      <section className="sw-store-navbar--profile">
        <div className="store--cart">
          <img src={cart} alt="cart icon" />
          <span className="item-count" id="item-count">
            1
          </span>
        </div>
        <img src={profileImage} alt="profile" />
      </section>
    </nav>
  );
};

export default StoreNavBar;
