import React from "react";
import "./EventDetails.css";

function EventDetails() {
  return (
    <div id="contact" className="event-details">
        <div className="event-details-info">
          <div className="event-info-item" style={{marginTop:'100px'}}>
              <img src="/event-calendar.png" alt="calendar" className="event-icon" />
              <span>7th Dec, 2024 -<br /> 5th Jan, 2025</span>
          </div>

          <div className="event-info-item">
              <img src="/event-clock.png" alt="clock" className="event-icon" />
              <span>9am - 10pm<br /> Daily</span>
          </div>

          <div className="event-info-item">
            <img src="/event-map.png" alt="map" className="event-icon" />
            <span> Unity Park,<br />Enugu</span>
          </div>   
        </div>
    </div>
  );
}

export default EventDetails;