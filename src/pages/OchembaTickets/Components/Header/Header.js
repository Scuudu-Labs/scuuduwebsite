import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="header">
        <div className="logo">
          <img src="/logo-brand-name.svg" alt="Scuudu Labs Logo" className="logo-image desktop" />
          <img src="/logo.svg" alt="Scuudu Labs Logo Mobile" className="logo-image mobile" />
        </div>
        <nav className="header-buttons">
          <button href="#direction" className="button direction-btn">Direction to Unity Park</button>
          <button className="button map-btn">Map</button>
          <a href="#Ticket" className="button buy-tickets-btn">Get Tickets</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
