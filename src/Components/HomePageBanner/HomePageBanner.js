import React from "react";
import "./HomePageBanner.css";

class HomePageBanner extends React.Component {
  render() {
    return (
      <div className="home-banner-container">
        <h1 id="hashtag">#weAreScuudu</h1>
        <h1 id="activity">
          Scuudu designs & builds awesome digital experiences
        </h1>
        <p id='description'>
          The startup which kicked off operations in 2019, dreams to change the
          Nigerian tech story for good through avant garde technologies.
        </p>
        <span id='trend'>Prevent the spread of Coronavirus. #StayHome.</span>
      </div>
    );
  }
}

export default HomePageBanner;
