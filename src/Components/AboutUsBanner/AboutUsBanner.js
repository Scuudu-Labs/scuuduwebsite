import React from "react";
import "./AboutUsBanner.css";
import greenLogo from "../../assets/logo.svg";
import textLogo from "../../assets/text-logo.svg";

class AboutUsBanner extends React.Component {
  render() {
    return (
      <div id="aboutUsBanner">
        <div id="inner-container">
          <img src={greenLogo} alt="" id="greenLogo" />
          <img src={textLogo} alt="" />
          <h1>/ sku.du /</h1>
          <p>
            The startup which kicked off operations in 2019, dreams to change
            the Nigerian tech story for good through avant garde technologies.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutUsBanner;
