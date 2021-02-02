import React from "react";
import "./ComingSoonComponent.css";
import { Link } from "react-router-dom";
import transparentLogo from "../../assets/transparentLogo.svg";

class ComingSoon extends React.Component {
  state = {};
  render() {
    return (
      <div className="coming-soon-container">
        <div className="bigWrapper">
          <div className="logoContainer">
          <Link to="/">
          <img src={transparentLogo} />
            </Link>
          </div>
          <div className="coming-soon-inner-container">
            <h1>Swift!</h1>
            <p className="errorMessage">
              We know you can't wait to get the Scuudu Drips but our store is
              currently under construction, please check back in two weeks time.
            </p>
            <Link to="/">
              <button className="backToHome">Back To Home</button>
            </Link>
            <p className="foooter">© 2020 Scuudu Labs. All Rights Reserved. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ComingSoon;
