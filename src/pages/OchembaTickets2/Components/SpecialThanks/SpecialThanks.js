import React from "react";
import "./SpecialThanks.css";

function SpecialThanks() {
  return (
    <section id="tickets" className="special-thanks">
      <p className="special-thanks-note">Special thanks to</p>
      <div className="thanks">
        <div className="thank">
          <div className="">
            <img src="path-to-single-ticket.png" alt="Single Ticket Image" className="ticket-image" />
          </div>
            <p className="thank-status">His Excellency</p>
            <p className="thank-name"><b>Dr. Peter Ndubuisi Mbah</b></p>
            <p className="thank-designation">Governor of Enugu State</p>
        </div>
        <div className="thank">
            <div className="">
                <img src="path-to-single-ticket.png" alt="Single Ticket Image" className="ticket-image" />
            </div>
            <p className="thank-status">Her Honourable</p>
            <p className="thank-name"><b>Lady Rita Mbah</b></p>
            <p className="thank-designation">Chairman, Enugu State Tourism Board</p>
        </div>
      </div>
    </section>
  );
}

export default SpecialThanks;
