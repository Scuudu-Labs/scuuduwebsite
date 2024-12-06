import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path-to-logo.png" alt="Secudu Labs Logo" className="logo-image" />
        <span className="logo-text">Scuudu Labs</span>
      </div>
      <div className="header-buttons">
        <button className="contact-btn">Contact Us</button>
        <button className="buy-tickets-btn">Buy Tickets</button>
      </div>
    </header>
  );
}

export default Header;
