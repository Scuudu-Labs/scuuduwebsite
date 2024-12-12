import React from "react";
import "./BuyTickets.css";
import { useHistory } from 'react-router-dom';


function BuyTicket() {

  const history = useHistory();

  const handleGetTickets = (ticket) => {
    history.push('/ochemba/tickets/checkout', { ticket });
  };


  return (
    <div className="container-buy-ticket">
      <div id="tickets" className="buy-ticket">
        <h2 className="ticket-info">Available Tickets</h2>
        <div className="ticket-container">
          <p className="ticket-note">5mins per session</p>
          <img src="/ticket-line.webp" alt="line" className="line" />
        </div>
        <div className="tickets">
          <div className="ticket">
            <img
              src="/ticket-single.webp"
              alt="Single Ticket"
              className="ticket-image"
            />
            <h3 className="ticket-status">Singles</h3>
            <p className="ticket-price">₦3,000</p>
            <button className="buy-tickets-button" onClick={()=>handleGetTickets({ type: "single", price: 3000 })}>Get Tickets</button>
          </div>
          <div className="ticket">
            <img src="/ticket-couple.webp" alt="Couples Ticket" className="ticket-image" />
            <h3 className="ticket-status">Couple</h3>
            <p className="ticket-price">₦5,000</p>
            <button className="buy-tickets-button" onClick={()=>handleGetTickets({ type: "couple", price: 5000 })}>Get Tickets</button>
          </div>
          <div className="ticket">
            <img
              src="/ticket-clan.webp"
              alt="Clan Ticket"
              className="ticket-image"
            />
            <h3 className="ticket-status">Clan</h3>
            <p className="ticket-price">₦10,000</p>
            <button
              className="buy-tickets-button"
              onClick={() => handleGetTickets({ type: "clan", price: 10000 })}
            >
              Get Tickets
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default BuyTicket;
