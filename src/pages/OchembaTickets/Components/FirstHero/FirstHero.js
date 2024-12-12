import React from "react";
import "./FirstHero.css";

function FirstHero() {
  return (
    <section id="intro" className="first-hero">
      <div className="first-hero-container">
        <div className="first-hero-content">
          <button className="virtual-reality-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <circle cx="8.63843" cy="8.55054" r="7.73022" fill="white" />
            </svg>
            Virtual Reality
          </button>
          <img src="/bead.webp" alt="bead" className="bead" />
          <h1 className="first-hero-head">
            Unleash the warrior<br />within in Virtual Reality
          </h1>
          <p className="first-hero-paragraph">
            Dive into the thrilling world of Ochemba, where every battle is a test of<br />
            courage, skill, and strategy. Step into the shoes of a fearless Enugu warrior,<br />
            wield ancient powers, and face off against formidable evil gods. With<br />
            stunning visuals, heart-pounding action, and an immersive storyline,<br />
            Ochemba delivers non-stop excitement and unforgettable gameplay.<br />
            Are you ready to rewrite destiny?
          </p>
          <div className="hero-buttons">
            <a href="#tickets" className="buy-tickets-btn">Get Tickets</a>
          </div>
          <img src="/leaf.webp" alt="leaf" className="leaf" />

        </div>
        <div className="first-hero-image">
          <img src="/leaves.webp" alt="leaves" className="leaves" />
          <img src="/ochemba-shield.webp" alt="Ochemba Enugu Logo" className="ochemba-shield" />
          <img src="/mask.svg" alt="webp" className="mask" />
          <p className="first-hero-text"><b>The Virtual Reality Experience</b></p>

        </div>
      </div>
    </section>
  );
}

export default FirstHero;
