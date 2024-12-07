import React from "react";
import "./BuyTickets.css";

function BuyTicket() {
  return (
    <div className="container-buy-ticket">
      <div id="tickets" className="buy-ticket">
        <h2 className="ticket-info">Available Tickets</h2>
        <p className="ticket-note">5 mins per session</p>
        <img src="/ticket-line.png" style={{width: "100%", height: "auto"}} alt="line" />
        <div className="tickets">
          <div className="ticket">
            <img src="/ticket-single.png" alt="Single Ticket" className="ticket-image" />
            <h3 className="ticket-status">Singles</h3>
            <p className="ticket-price">₦3,000</p>
            <button className="buy-tickets-btn">Get Tickets</button>
          </div>
          <div className="ticket">
            <img src="/ticket-couple.png" alt="Couples Ticket" className="ticket-image" />
            <h3 className="ticket-status">Couples</h3>
            <p className="ticket-price">₦5,000</p>
            <button className="buy-tickets-btn">Get Tickets</button>
          </div>
          <div className="ticket">
              <img src="/ticket-clan.png" style={{width: "37%", height: "auto"}} alt="Clan Ticket" className="ticket-image" />
            <h3 className="ticket-status">Clan</h3>
            <p className="ticket-price">₦10,000</p>
            <button className="buy-tickets-btn">Get Tickets</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyTicket;
