import React from "react";
import "./SpecialThanks.css";

function SpecialThanks() {
  return (
    <div className="container-special-thanks">
        <div className="mini-container-special">
          <p className="special-thanks-note">Special thanks to</p>
        <div className="thanks">
          <div className="thank">
              <img 
              src="/peter-mbah.webp" 
              alt="Peter Mbah" 
              className="ticket-image" />
              <img 
              src="/fgn-logo.webp" 
              alt="fgn" 
              className="fgn-logo" />
              <div className="special-details">
                <p className="thank-status">His Excellency</p>
                <p className="thank-name">Dr. Peter Ndubuisi Mbah</p>
                <p className="thank-designation">Governor of Enugu State</p>
              </div>
          </div>
          <div className="thank">
              <img 
              src="/rita-mbah.webp" 
              alt="Rita Mbah" 
              className="ticket-image" />
              <img 
              src="/enugu-tourism-logo.webp" 
              alt="enugu-tourism" 
              className="enugu-tourism" />
              <div className="special-details">
                <p className="thank-status">Her Honourable</p>
                <p className="thank-name">Lady Rita Mbah</p>
                <p className="thank-designation">Chairman, Enugu State Tourism Board</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialThanks;
