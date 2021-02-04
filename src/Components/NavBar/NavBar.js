import React, { Fragment } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg';
import textLogo from '../../assets/text-logo.svg';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: "/logo.svg",
      test: "",
      barDisplay: "",
      timesDisplay: "none",
      mobileNavDisplay: "none",
    };
    console.log(this.state.logo);
  }
  changeLogo = (logo) => {
    // this.setState({
    //   logo: logo,
    // });
  };

  openMobileNav = () => {
    this.setState({
      barDisplay: "none",
      timesDisplay: "block",
      mobileNavDisplay: "flex",
    });
  };

  closeMobileNav = () => {
    this.setState({
      barDisplay: "block",
      timesDisplay: "none",
      mobileNavDisplay: "none",
    });
  };
  render() {
    return (
      <Fragment>
              <div id="navbar-container">
          <div id="navbar-inner-container">
            <div id="logo-container">
              <Link onClick={() => this.changeLogo("/logo.svg")} to="/">
                <img src={this.props.logo ? textLogo : logo} alt="scuudu logo" />
              </Link>
            </div>
            <div id="navigation-container">
              <i
                style={{ display: this.state.barDisplay }}
                className="fas fa-bars"
                onClick={() => {
                  this.openMobileNav();
                }}
              ></i>
              <i
                style={{ display: this.state.timesDisplay }}
                className="fas fa-times"
                onClick={() => {
                  this.closeMobileNav();
                }}
              ></i>
              <Link to="/Products" onClick={() => this.changeLogo("/logo.svg")}>
                Products
              </Link>
              <Link
                to="/ServicePage"
                onClick={() => this.changeLogo("/logo.svg")}
              >
                Services
              </Link>
              <Link
                to="/AboutUs"
                onClick={() => this.changeLogo("/text-logo.svg")}
              >
                About Us
              </Link>
              <Link
                to="/MeetTheTeam"
                onClick={() => this.changeLogo("/text-logo.svg")}
              >
                Meet The Team
              </Link>
              <Link to="/Store" onClick={() => this.changeLogo("/logo.svg")}>
                Store
              </Link>
              <Link to='/Services/ContactUs' id='button'>Start a Project</Link>
            </div>
          </div>
        </div>
        <div style={{ display: this.state.mobileNavDisplay }} id="mobile-nav">
          <div id="mobile-navigation-container">
            <div id="mobile-nav-inner-container">
              <Link to="/Products" onClick={() => this.changeLogo("/logo.svg")}>
                Products
              </Link>
              <Link
                to="/ServicePage"
                onClick={() => this.changeLogo("/logo.svg")}
              >
                Services
              </Link>
              <Link
                to="/AboutUs"
                onClick={() => this.changeLogo("/text-logo.svg")}
              >
                About Us
              </Link>
              <Link
                to="/MeetTheTeam"
                onClick={() => this.changeLogo("/text-logo.svg")}
              >
                Meet The Team
              </Link>
              <Link to="/Store" onClick={() => this.changeLogo("/logo.svg")}>
                Store
              </Link>
              <Link to='/Services/ContactUs' id='button'>Start a Project</Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NavBar;
