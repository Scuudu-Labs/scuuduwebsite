import React from "react";
import "./Footer.css";
import { FacebookURL, InstagramURL, TwitterURL, YoutubeURL } from "../../utils/Constants";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer-container">
        <div id="links-container">
          <div id="footer-nav-link-container">
            <div id="footer-company">
              <ul>
                <li>Company</li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/products">Product</a>
                </li>
                <li>
                  <a href="/news">News</a>
                </li>
                <li>
                  <a href="/career">Career</a>
                </li>
              </ul>
            </div>
            <div id="footer-support">
              <ul>
                <li>Support</li>
                <li>
                  <a href="/FAQ">FAQs</a>
                </li>
                <li>
                  <a href="/Download">Downloads</a>
                </li>
                <li>
                  <a href="/Resources">Resources</a>
                </li>
                <li>
                  <a href="/Help">Help</a>
                </li>
              </ul>
            </div>
            <div id="footer-follow">
              <ul>
                <li>Follow</li>
                <li>
                  <a href={FacebookURL} target="_blank" rel="noopener noreferrer">FaceBook</a>{" "}
                </li>
                <li>
                  <a href={TwitterURL} target="_blank" rel="noopener noreferrer">Twitter</a>{" "}
                </li>
                <li>
                  <a href={YoutubeURL} target="_blank" rel="noopener noreferrer">Youtube</a>{" "}
                </li>
                <li>
                  <a href={InstagramURL} target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
              </ul>
            </div>
            <div id="footer-contact-us">
              <ul>
                <li>Contact Us</li>
                <li>
                  <a href="mailt:hello@scuudu.com">info@scuudu.com</a>
                </li>
                <li>
                  <a href="tel:+234 (0)812 3456 789">+234 (0)812 345 6789</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/scuudu">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <div id="privacy-policy-container">
            <div id="privacy-polict-wrapper">
              <a href="/">Terms of Service</a>
              <a href="/privacy-policy/tranzakt">Privacy Policy</a>
              <a href="/">Site Map</a>
            </div>
            <select>
              <option>English</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
        </div>
        {/* <div id='back-to-top-button'></div> */}
        <div id="right-reserved">© 2021 Scuudu Labs. All Rights Reserved.</div>
      </div>
    );
  }
}

export default Footer;
