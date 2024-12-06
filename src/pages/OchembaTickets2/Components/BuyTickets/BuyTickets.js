import React from "react";
import "./BuyTicket.css";

function BuyTicket() {
  return (
    <section id="tickets" className="buy-ticket">
      <h2 className="ticket-info">Available Tickets</h2>
      <p className="ticket-note">5 mins per session</p>
      <img src="" alt="" />
      <div className="tickets">
        <div className="ticket">
          <div className="">
            <img src="path-to-single-ticket.png" alt="Single Ticket Image" className="ticket-image" />
          </div>
          <h3 className="ticket-status">Single</h3>
          <p className="ticket-price">₦3,000</p>
          <button className="buy-tickets-btn">Get Tickets</button>
        </div>
        <div className="ticket">
          <p className="ticket-time">5 mins</p>
          <div className="couples-ticket-image">
            <img src="path-to-couples-ticket.png" alt="Couples Ticket Image" className="ticket-image" />
          </div>
          <h3 className="ticket-status">Couples</h3>
          <p className="ticket-price">₦5,000</p>
          <button className="buy-tickets-btn">Get Tickets</button>
        </div>
        <div className="ticket">
          <p className="ticket-time">5 mins</p>
          <div className="clan-ticket-image">
            <img src="path-to-clan-ticket.png" alt="Clan Ticket Image" className="ticket-image" />
          </div>
          <h3 className="ticket-status">Clan</h3>
          <p className="ticket-price">₦10,000</p>
          <button className="buy-tickets-btn">Get Tickets</button>
        </div>
      </div>
    </section>
  );
}

export default BuyTicket;
