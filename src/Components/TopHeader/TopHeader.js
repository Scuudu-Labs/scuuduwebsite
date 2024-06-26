import React from "react";
import "./TopHeader.css";
import { FacebookURL, InstagramURL, TwitterURL, YoutubeURL } from "../../utils/Constants";

class TopHeader extends React.Component {
  render() {
    return (
      <div id="top-header-container">
        <div id="top-nav-inner-container">
          <div id="contact-container">
          <a href="mailto:hello@scuudu.com" rel="noopener noreferrer">
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
            <a href={FacebookURL} target="_blank" rel="noopener noreferrer"><i className="fab  fa-facebook-f"></i></a>
            <a href={TwitterURL} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href={YoutubeURL} target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            <a href={InstagramURL} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default TopHeader;
