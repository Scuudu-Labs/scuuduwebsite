import React from "react";
import "./Footer.css";

function Footer() {
  return (
<footer id="contact" className="footer">
  <img src="/footer-drum.png" alt="drum" className="footer-drum" />
  <div className="footer-container">
    <p className="copyright">
      Developed by Scuudu Labs in partnership with Enugu State Tourism Board
    </p>
  </div>
  <img src="/footer-frond.svg" alt="frond" className="footer-frond" />
</footer>
  );
}

export default Footer;
