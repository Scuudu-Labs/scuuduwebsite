import React from "react";
import "./FirstHero.css";

function FirstHero() {
  return (
    <section id="intro" className="first-hero">
      <div className="first-hero-container">
        <div className="first-hero-content">
        <button className="virtual-reality-btn">Virtual Reality</button>
         <img src="/bead.png" alt="bead" className="bead"/>
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
              <button className="buy-tickets-btn"><b>GET TICKETS</b></button>
              <img src="/leaf.png" alt="leaf" className="leaf"/>
              
        </div>
        <div className="first-hero-image">
            <img src="/leaves.png" alt="leaves"  style={{ height: "auto", width: "50%", position: "absolute", right: "0"}} className="leaves"/>
            <img src="/ochemba-shield.png" alt="Ochemba Enugu Logo" style={{ height: "auto", width: "70%", paddingLeft:"100px", paddingTop:"100px"}} className="ochemba-shield" />
            <img src="/mask.png" alt="mask" style={{ height: "auto", position: "absolute", right: "0", top:"65%"}} className="mask"/>
            <p className="first-hero-text"><b>The Virtual Reality Experience</b></p>
  
        </div>
      </div>
    </section>
  );
}

export default FirstHero;
