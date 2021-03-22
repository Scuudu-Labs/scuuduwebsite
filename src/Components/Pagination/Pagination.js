import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({ totalPosts, itemsPerPage, paginate }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <ul className="sw-store--pagination-container">
      <li className="pagination-container--item">Page</li>
      {pages.map((number) => (
        <li
          key={number}
          onClick={() => paginate(number)}
          className="pagination-container--item"
        >
          {number}
        </li>
      ))}
      <li className="pagination-container--item">
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.35288e-05 9.25003L14.5861 9.25003L9.29306 14.543L10.7071 15.957L18.4141 8.25003L10.7071 0.54303L9.29306 1.95703L14.5861 7.25003L6.37037e-05 7.25003L6.35288e-05 9.25003Z"
            fill="black"
          />
        </svg>
      </li>
    </ul>
  );
};

export default Pagination;
