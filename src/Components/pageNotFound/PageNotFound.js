import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";
import transparentLogo from '../../assets/transparentLogo.svg'

class PageNotFound extends React.Component {
  state = {};
  render() {
    return (
      <div className="page-not-found-container">
        <div className='bigWrapper'>
        <div className='logoContainer'>
        <Link to="/">
          <img src={transparentLogo} />
            </Link>
        </div>
        <div className='page-not-found-inner-container'>
          <h1>oops!</h1>
          <p className='errorMessage'>
            This page is currently under construction, please check back in two weeks time.
          </p>
            <Link to="/">
            <button className='backToHome'>Back To Home</button>
            </Link>
          <p className='foooter'>© 2020 Scuudu Labs. All Rights Reserved. </p>
        </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
