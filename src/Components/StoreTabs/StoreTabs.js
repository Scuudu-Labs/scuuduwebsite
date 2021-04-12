import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./StoreTabs.css";

const StoreTabs = () => {
  return (
    <ul className="sw-store-tabs">
      <NavLink
        to="/Store"
        activeClassName="is-active"
        className="store-tabs--tab-item"
      >
        Popular
      </NavLink>
      <NavLink
        to="/NewArrivals"
        activeClassName="is-active"
        className="store-tabs--tab-item"
      >
        New Arrivals
      </NavLink>
      <NavLink
        to="/BestSellers"
        activeClassName="is-active"
        className="store-tabs--tab-item"
      >
        Best Sellers
      </NavLink>
      <NavLink
        to="/Special"
        activeClassName="is-active"
        className="store-tabs--tab-item"
      >
        Specials
      </NavLink>
    </ul>
  );
};

export default StoreTabs;
