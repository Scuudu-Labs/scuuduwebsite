import React from "react";
import "./WhoWeAre.css";
import Kaosy from '../../assets/kaosy.png'
import Franky from '../../assets/franky-working.png'
import FrankyWorking from '../../assets/franky-oculus.png'
import FrankyHand from '../../assets/franky-hand.png'
import Emeka from '../../assets/emeka-smiling.png'
import WorkSpace from '../../assets/workspace.png'

class WhoWeAre extends React.Component {
  render() {
    return (
      <div id="who-we-are">
        <h1>Who We Are</h1>
        <p>
          We are designers, developers, writers, thinkers, and problem solvers.
          Small enough to be simple and fast, but big enough to deliver your
          project scope at the pace you need.
        </p>
        <div id="who-we-are-image-container">
          <div>
            <img src={Kaosy} />
            <img src={Franky} />
          </div> 
          <div id='center'>
            <img src={FrankyWorking} />
            <img src={FrankyHand} />
          </div>
          <div>
            <img src={Emeka} />
            <img src={WorkSpace} />
          </div>
        </div>
      </div>
    );
  }
}

export default WhoWeAre;
