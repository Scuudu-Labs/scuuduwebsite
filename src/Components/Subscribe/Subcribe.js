import React from "react";
import "./Subscribe.css";

class Subscribe extends React.Component {
  render() {
    return (
      <div id="subscribe-container">
        <div id="subscribe-bold-text">
          <h1>Let's stay in touch</h1>
        </div>
        <div className="subscribe-text">
          <p>
            By subscribing to our newsletter, you will join the list of those
            who are first to get the latest updates about our intriguing
            activities.
          </p>
          <form>
              <input id='email' type='text' placeholder='Email' />
              <input id='submit' type='submit' value='Subscribe' />
          </form>
        </div>
      </div>
    );
  }
}

export default Subscribe;
