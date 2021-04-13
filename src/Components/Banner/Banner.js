import React from "react";
import "./Banner.css";

class Banner extends React.Component {
  render(props) {
    return (
      <div id="services-banner-container">
        <div id='banner-inner-container'>
        <div id="banner-text">
          <h1 style={{fontWeight: 'bolder'}}>Think.</h1>
          <h1 style={{fontWeight: 'bolder'}}>Design.</h1>
          <h1 style={{fontWeight: 'bolder'}}>Create.</h1>
        </div>
        </div>
      </div>
    );
  }
}

export default Banner;
