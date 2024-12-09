import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <img src="/footer-frond.png" alt="frond" className="footer-frond" />
        <p className="copyright"> Developed by Scuudu Labs in partnership with Enugu State Tourism Board</p>
        <img src="/footer-drum.png" alt="drum" className="footer-drum" />
      </div> 
    </footer>
  );
}

export default Footer;
