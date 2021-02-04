import React from "react";
import "./TopHeader.css";
import { Link } from "react-router-dom";

class TopHeader extends React.Component {
  render() {
    return (
      <div id="top-header-container">
        <div id="top-nav-inner-container">
          <div id="contact-container">
            <div id="top-header-email">
              <i className="fas fa-envelope"></i>
              {"hello@scuudu.com"}
            </div>
            <div id="top-header-phone">
              <i className="fas fa-phone-alt"></i>
              {"+234 (0)812 3456 789 "}
            </div>
          </div>
          <div id="social-media-container">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default TopHeader;
