import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="container-header">
      <header className="header">
        <div className="logo">
          <img src="/logo-brand-name.svg" alt="Scuudu Labs Logo" className="logo-image" />
          <img src="/logo.svg" alt="logo" className="logo-image2" />
        </div>
        <div className="header-buttons">
          <a href="#direction" className="direction-btn">Direction to Unity Park</a>
          <button className="map">Map</button>
          <a href="#Ticket" className="buy-tickets-btn">Get Tickets</a>
        </div>
      </header>
    </div>
  );
}

export default Header;
