import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">
        <div className="footer-info">
          <div className="footer-info-item">
          <i class="fas fa-home"></i>
          <span>Pay Us a Visit Unity Park, Independence Layout, Enugu</span>
          </div>

          <div className="footer-info-item">
          <i class="fas fa-phone"></i>
          <span>Give Us a Call +234 810 888 3022</span>
          </div>

          <div className="footer-info-item">
          <i class="fas fa-envelope"></i>
          <span>Send Us a Message hello@Scuudu.com</span>
          </div>   
        </div>

        <div className="footer-main">
          <div className="footer-main-item logo-section">
            <img src="path-to-footer-logo.svg" alt="Footer Logo" className="footer-logo" />
          </div>

          <div className="footer-main-item nav-section">
            <nav>
              <ul class="footer-nav">
                <li><a href="#about">ABOUT US</a></li>
                <li><a href="#tickets" className="buy-tickets-btn">BUY TICKETS</a></li>
                <li><a href="#contact">CONTACT US</a></li>
              </ul>
            </nav>
          </div>
        
          <div className="footer-main-item social-section">
          <p class="social-text">SOCIALIZE WITH SCUUDU LABS</p>
          <div class="social-icons">
            <i class="fab fa-youtube"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin"></i>
          </div>
          <button className="buy-tickets-btn">BUY TICKET</button>
        </div>
        <hr className="footer-line"></hr>
        <p className="copyright"> 2024 &copy; Ochemba Landing PAGE - by Scuudu Labs - All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
