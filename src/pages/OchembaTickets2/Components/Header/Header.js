import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path-to-logo.png" alt="Scuudu Labs Logo" className="logo-image" />
        <img src="" alt="" className="logo-image2" />
      </div>
      <div className="header-buttons">
        <button className="direction-btn">Direction to Unity Park</button>
        <button className="map">Map</button>
        <button className="buy-tickets-btn">Get Tickets</button>
      </div>
    </header>
  );
}

export default Header;
