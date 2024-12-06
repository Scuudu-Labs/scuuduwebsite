import React from "react";
import "./OtherHero.css";

function OtherHero() {
  return (
    <section id="intro" className="other-hero">
        <div className="other-hero-content">
            <h2>Introduction</h2>
            <p>
                In a land where legends come alive and ancient forces clash, Ochemba takes<br />
                you on an epic journey like no other. Set in the vibrant heart of Enugu, you play<br />
                as a courageous warrior chosen to protect your people from the wrath of<br />
                vengeful gods. Armed with ancestral powers and an indomitable spirit, you<br />
                must fight through treacherous landscapes, outsmart cunning foes, and<br /> 
                uncover hidden secrets. 
            </p>
            <p>
                With every step, you'll face intense action, forge your path as a hero, and<br />
                become the last line of defense between your homeland and destruction. Get<br />
                ready to immerse yourself in a world where bravery and skill shape density.<br />
                This is Ochemba--are you ready for the challenge?
            </p>
            <button className="buy-tickets-btn">BUY TICKETS</button>
      </div>
      <div className="other-hero-image">
            <img src="path-to-Ochemba-Logo.png" alt="Ochemba Enugu Logo" />
      </div>
    </section>
  );
}

export default OtherHero;
