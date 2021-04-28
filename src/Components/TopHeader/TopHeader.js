import React from "react";
import "./TopHeader.css";

class TopHeader extends React.Component {
  render() {
    return (
      <div id="top-header-container">
        <div id="top-nav-inner-container">
          <div id="contact-container">
            <a href="mailt:hello@scuudu.com" >
            <div id="top-header-email">
              <i className="fas fa-envelope"></i>
              {"hello@scuudu.com"}
            </div>
            </a>
            <a href="tel:+234 (0)812 3456 789">
            <div id="top-header-phone">
              <i className="fas fa-phone-alt"></i>
              {"+234 (0)812 3456 789 "}
            </div>
            </a>
          </div>
          <div id="social-media-container">
            <a href="https://www.facebook.com/Scuudu-Labs-102626038152628"><i className="fab  fa-facebook-f"></i></a>
            <a href="https://www.twitter.com/scuudu1"><i className="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com/channel/UCE7jVa4vScMfRPjnZlWrCkg"><i className="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/scuudu"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default TopHeader;
