import React from "react";
import "./SpecialThanks.css";

function SpecialThanks() {
  return (
    <div className="container-special-thanks">
        <div className="mini-container-special">
          <p className="special-thanks-note">Special thanks to</p>
        <div className="thanks">
          <div className="thank">
              <img src="/peter-mbah.png" alt="Peter Mbah" style={{width: "200px", height: "200px"}} className="ticket-image" />
              <img src="/fgn-logo.png" alt="fgn" style={{position: "absolute",top:"40%", left:"46%"}} className="fgn-logo" />
              <p className="thank-status">His Excellency</p>
              <p className="thank-name"><b>Dr. Peter Ndubuisi Mbah</b></p>
              <p className="thank-designation">Governor of Enugu State</p>
          </div>
          <div className="thank">
              <img src="/rita-mbah.png" alt="Rita Mbah" style={{width: "200px", height: "200px"}} className="ticket-image" />
              <img src="/enugu-tourism-logo.png" alt="enugu-tourism" style={{position: "absolute",top:"41%", left:"46%"}} className="enugu-tourism" />
              <p className="thank-status">Her Honourable</p>
              <p className="thank-name"><b>Lady Rita Mbah</b></p>
              <p className="thank-designation">Chairman, Enugu State Tourism Board</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialThanks;
