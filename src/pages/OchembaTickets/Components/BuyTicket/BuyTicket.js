import React from "react";
import "./BuyTicket.css";

function BuyTicket() {
  return (
    <section id="tickets" className="buy-ticket">
      <div>
        <hr className="center-line"></hr>
      </div>
      <h2 className="ticket-info">Ticket Info</h2>
      <p className="ticket-note">Pick your ticket, gear up, and step into the action-packed world of Ochemba!</p>
      <div className="tickets">
        <div className="ticket">
          <p className="ticket-time">5 mins</p>
          <div className="">
            <img src="path-to-single-ticket.png" alt="Single Ticket Image" className="ticket-image" />
          </div>
          <h3 className="ticket-status">Single</h3>
          <p className="ticket-price">₦5,000</p>
          <button className="buy-tickets-btn">BUY NOW</button>
        </div>
        <div className="ticket">
          <p className="ticket-time">5 mins</p>
          <div className="couples-ticket-image">
            <img src="path-to-couples-ticket.png" alt="Couples Ticket Image" className="ticket-image" />
          </div>
          <h3 className="ticket-status">Couples</h3>
          <p className="ticket-price">₦10,000</p>
          <button className="buy-tickets-btn">BUY NOW</button>
        </div>
        <div className="ticket">
          <p className="ticket-time">5 mins</p>
          <div className="clan-ticket-image">
            <img src="path-to-clan-ticket.png" alt="Clan Ticket Image" className="ticket-image" />
          </div>
          <h3 className="ticket-status">Clan</h3>
          <p className="ticket-price">₦20,000</p>
          <button className="buy-tickets-btn">BUY NOW</button>
        </div>
      </div>
    </section>
  );
}

export default BuyTicket;
