import React from "react";
import "./EventDetails.css";

function EventDetails() {
  return (
    <div id="contact" className="event-details">
        <div className="event-details-info">
          <div className="event-info-item first">
              <img src="/event-calendar.webp" alt="calendar" className="event-icon" />
              <span>7th Dec, 2024 -<br /> 26th Dec, 2024</span>
          </div>

          <div className="event-info-item">
              <img src="/event-clock.webp" alt="clock" className="event-icon" />
              <span>9am - 10pm<br /> Daily</span>
          </div>

          <div className="event-info-item third">
            <img src="/event-map.webp" alt="map" className="event-icon" />
            <span> Unity Park,<br />Enugu</span>
          </div>   
        </div>
    </div>
  );
}

export default EventDetails;
