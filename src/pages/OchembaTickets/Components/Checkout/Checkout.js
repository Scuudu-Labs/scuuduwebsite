import React, { useState } from "react";
import "./Checkout.css";

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
                <p>{"Your email address will help us support your shopping experience throughout the site. \n"}
                {"Please check our Privacy Policy to see how we use your personal data. \n"}</p>
                <p>{"Your email address will help us support your shopping experience throughout the site. \n"}
                {"Please check our Privacy Policy to see how we use your personal data. \n"}</p>
                <p>{"Your email address will help us support your shopping experience throughout the site. \n"}
                {"Please check our Privacy Policy to see how we use your personal data. \n"}</p>
            </div>
          </form>
        </div>
        <div className="bill-page-wrapper">
          <h2>Product details</h2>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
