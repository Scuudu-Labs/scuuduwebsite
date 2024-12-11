import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <img src="/footer-frond.png" alt="frond" className="footer-frond" />
      <img src="/footer-drum.png" alt="drum" className="footer-drum" />
      <div className="footer-container">
        <p className="copyright">
          Developed by Scuudu Labs in partnership with Enugu State Tourism Board
        </p>
      </div>
    </footer>
  );
}

export default Footer;
