import React, { useState } from "react";
import "./Checkout.css";
import axios from "axios";

const Checkout = ({ type = "", amount = 0 }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [email, setEmail] = useState("");

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Implement the logic to handle checkout form submission
    alert("Order placed successfully!");
  };

  const getTypeImage = (type)=>{
    switch(type){
        case "clan":
            return "/ticket-clan.png"
        case "couple":
            return "/ticket-couple.png"
        case "single":
            return "/ticket-single.png"
        default:
        return "/ticket-single.png"
    }
  }

  const handleGetTickets = async (ticket) => {
    const { type, price } = ticket;
    const ticketType = type;
    const amount = price;

    if (!email) {
      alert("Please enter your email to proceed with the purchase.");
      return;
    }

    const data = {
      email,
      amount,
      metadata: {
        ticketType,
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/payment/initialize",
        data
      );
      if (res.data.status) {
        window.location.href = res.data.data.authorization_url;
      } else {
        alert("Failed to initialize payment");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while initializing payment");
    }
  };

  return (
    <div className="page-main">
      <h1 className="title">Checkout</h1>
      <div className="container">
        <div className="main-page-wrapper">
          <form
            className="checkout woocommerce-checkout"
            onSubmit={handlePlaceOrder}
          >
            <h2>Billing details</h2>
            <div className="woocommerce-billing-fields__field-wrapper">
              <p className="form-row form-row-first validate-required">
                <label>
                  First name{" "}
                  <abbr className="required" title="required">
                    *
                  </abbr>
                </label>
                <input
                  type="text"
                  className="input-text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </p>
              <p className="form-row form-row-first validate-required">
                <label>
                  Last name{" "}
                  <abbr className="required" title="required">
                    *
                  </abbr>
                </label>
                <input
                  type="text"
                  className="input-text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </p>

              <p className="form-row form-row-first validate-required">
                <label>
                  Phone number{" "}
                  <abbr className="required" title="required">
                    *
                  </abbr>
                </label>
                <input
                  type="tel"
                  className="input-text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </p>
              <p className="form-row form-row-wide address-field">
                <label className="screen-reader-text">
                  Address (optional)
                </label>
                <input
                  type="text"
                  className="input-text"
                  placeholder="Address (optional)"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </p>

              <p className="form-row form-row-wide validate-required validate-email">
                <label>
                  Email address{" "}
                  <abbr className="required" title="required">
                    *
                  </abbr>
                </label>
                <input
                  type="email"
                  className="input-text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </p>
              <p>{"Your email address will help us support your shopping experience throughout the site. \n"}
                {"Please check our Privacy Policy to see how we use your personal data. \n"}</p>
            </div>
          </form>
        </div>
        <div className="bill-page-wrapper">
          <h2>Product details</h2>
          <div className="ticket">
            <img
              src={getTypeImage()}
              // style={{width: "37%", height: "auto"}}
              alt="Clan Ticket"
              className="ticket-image"
            />
            <h3 className="ticket-status">Clan</h3>
            <p className="ticket-price">₦10,000</p>

          </div>
          <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
          <button
              className="buy-tickets-button"
              onClick={() => handleGetTickets({ type: "Clan", price: 10000 })}
            >
              Place order
            </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
