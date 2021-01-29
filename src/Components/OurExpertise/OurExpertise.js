import React from "react";
import "./OurExpertise.css";

class OurExpertise extends React.Component {
  render() {
    return (
      <div id="our-expertise-container">
        <div id="inner-container">
          <h1>Our Expertise</h1>
          <p>
            We have been working on a variety of projects and across different
            industries across disciplines, making our work an appropriate,
            versatile and functional response to the unique needs of our
            clients. Our capabilities cover the following areas;
          </p>
          <div>
            <ul>
              <li>Content Creation</li>
              <li>Hardware Development</li>
              <li>Deep Technology</li>
              <li>Data Analytics, Research & Consultancy</li>
            </ul>
            <ul>
              <li>Branding & Product Design</li>
              <li>Game Design & Development</li>
              <li>Web Design & Development</li>
              <li>Software Design & Development</li>
            </ul>
          </div>
          <div id='linkCon'>
          <a href='/'>learn more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default OurExpertise;
