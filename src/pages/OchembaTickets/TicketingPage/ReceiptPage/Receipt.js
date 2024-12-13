import React from 'react';
import './Receipt.css';

const TicketPage = () => {
  return (
      <div className="ticket-container">
        <div className="ticket-left">
          <h3>ADMIT</h3>
          <div className="ticket-info">
            <p><strong>Name</strong>: Emeka Onyebuchi</p>
            <p><strong>Ticket</strong>: Singles Ticket</p>
            <p><strong>Reference no</strong>: BRN987654321</p>
          </div>
          <div className="qr-code">
            <img src="/qr-code-placeholder.png" alt="QR Code" />
          </div>
        </div>
        <div className="ticket-right">
          <div className="header">
            <img src="/logo.png" alt="Ochemba Enugu" className="logo" />
            <p>Congratulations! You’re eligible to play</p>
          </div>
          <div className="game-info">
            <h2>VIRTUAL REALITY</h2>
            <h3>Venue</h3>
            <p className="venue">UNITY PARK</p>
          </div>
        </div>
      </div>
  );
};

export default TicketPage;