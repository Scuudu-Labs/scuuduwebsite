import React from "react";
import "./FirstHero.css";

function FirstHero() {
  return (
    <section id="intro" className="first-hero">
        <div className="first-hero-content">
        <button className="virtual-reality-btn">Virtual Reality</button>
            <h1>
                Unleash the warrior <span className="highlight">within in Virtual Reality</span>
            </h1>
            <p>
                Dive into the thrilling world of Ochemba, where every battle is a<br />
                test of courage, skill, and strategy. Step into the shoes of a fearless<br />
                Enugu warrior, wield ancient powers, and face off against<br />
                formidable evil gods. With Stunning visuals, heart-pounding action,<br />
                and an immersive storyline, Ochemba delivers non-stop excitement<br />
                and unforgettable gameplay. Are you ready to rewrite destiny?
            </p>
              <button className="buy-tickets-btn">GET TICKETS</button>
        </div>
        <div className="first-hero-image">
            <img src="path-to-Ochemba-Logo.png" alt="Ochemba Enugu Logo" />
            <span className="first-hero-text">The Virtual Reality Experience</span>
        </div>
    </section>
  );
}

export default FirstHero;
