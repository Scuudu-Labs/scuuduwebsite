import React from "react";
import "./WhoWeAre.css";
import Kaosy from "../../assets/kaosyWorking.png";
import Franky from "../../assets/franky-working.png";
import FrankyWorking from "../../assets/franky-oculus.png";
import FrankyHand from "../../assets/franky-hand.png";
import Emeka from "../../assets/emeka-smiling.png";
import WorkSpace from "../../assets/workspace.png";

class WhoWeAre extends React.Component {
  render() {
    return (
      <div id="who-we-are" style={{padding: this.props.pad}}>
        <h1>{this.props.text}</h1>
        <p>{this.props.description}</p>
        <div id="who-we-are-image-container">
          <div>
            <img src={Kaosy} alt="" />
            <img src={Franky} alt="" />
          </div>
          <div id="center">
            <img src={FrankyWorking} alt="" />
            <img src={FrankyHand} alt="" />
          </div>
          <div>
            <img src={Emeka} alt="" />
            <img src={WorkSpace} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default WhoWeAre;
