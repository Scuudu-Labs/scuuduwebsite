import React, { Fragment } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import textLogo from "../../assets/text-logo.svg";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: "/logo.svg",
      test: "",
      barDisplay: window.innerWidth <= 830 ? "block" : "none",
      timesDisplay: "none",
      mobileNavDisplay: "none",
      barIsOpen: false,
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
      navbar: "none",
      timesDisplay: "block",
      mobileNavDisplay: "flex",
      barIsOpen: true,
    });
  };

  closeMobileNav = () => {
    this.setState({
      barDisplay: "block",
      timesDisplay: "none",
      navbar: "flex",
      mobileNavDisplay: "none",
      barIsOpen: false,
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    if (window.innerWidth > 830){
      this.closeMobileNav();
    }
    
    if (!this.state.barIsOpen){
      this.setState({
        barDisplay: window.innerWidth <= 830 ? "block" : "none"
      });
    }

  };

  render() {
    return (
      <Fragment>
        <div id="navbar-container" style={{ display: this.state.navbar }}>
          <div id="navbar-inner-container">
            <div id="logo-container">
              <Link onClick={() => this.changeLogo("/logo.svg")} to="/">
                <img
                  src={this.props.logo ? textLogo : logo}
                  alt="scuudu logo"
                />
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
              <Link
                to="/about-us"
                onClick={() => this.changeLogo("/text-logo.svg")}
              >
                About Us
              </Link>
              <Link to="/products" onClick={() => this.changeLogo("/logo.svg")}>
                Products
              </Link>
              <Link to="/services" onClick={() => this.changeLogo("/logo.svg")}>
                Services
              </Link>
              <Link
                to="/meet-the-team"
                onClick={() => this.changeLogo("/text-logo.svg")}
              >
                Meet The Team
              </Link>
              <Link to="/store" onClick={() => this.changeLogo("/logo.svg")}>
                Store
              </Link>
              <Link to="/services/contact-us" id="button">
                Start a Project
              </Link>
            </div>
          </div>
        </div>
        <div style={{ display: this.state.mobileNavDisplay }} id="mobile-nav">
          <div id="mobile-navigation-container">
            <div id="mobile-nav-inner-container">
              <div
                style={{
                  width: "100%",
                  fontSize: "30px",
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 0px 30px 0px",
                  justifyContent: "space-between",
                }}
              >
                <div
                  id="logo-container"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0px 10px 0px 0px",
                  }}
                >
                  <Link
                    onClick={() => this.changeLogo("/logo.svg")}
                    to="/"
                    style={{
                      display: "flex",
                    }}
                  >
                    <img
                      src={this.props.logo ? textLogo : logo}
                      alt="scuudu logo"
                    />
                  </Link>
                </div>
                <div
                  id="logo-container"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0px 20px 0px 0px",
                  }}
                >
                  <i
                    style={{ display: this.state.barDisplay }}
                    className="fas fa-bars"
                    onClick={() => {
                      this.openMobileNav();
                    }}
                  ></i>
                  <i
                    style={{
                      display: this.state.timesDisplay,
                      fontSize: "40px",
                      color: "#555555",
                    }}
                    className="fas fa-times"
                    onClick={() => {
                      this.closeMobileNav();
                    }}
                  ></i>
                </div>
              </div>
              <Link
                to="/about-us"
                onClick={() => {
                  this.changeLogo("/text-logo.svg");
                  this.closeMobileNav();
                }}
              >
                About Us
              </Link>
              <Link
                to="/products"
                onClick={() => {
                  this.changeLogo("/logo.svg");
                  this.closeMobileNav();
                }}
              >
                Products
              </Link>
              <Link
                to="/services"
                onClick={() => {
                  this.changeLogo("/logo.svg");
                  this.closeMobileNav();
                }}
              >
                Services
              </Link>
              <Link
                to="/meet-the-team"
                onClick={() => {
                  this.changeLogo("/text-logo.svg");
                  this.closeMobileNav();
                }}
              >
                Meet The Team
              </Link>
              <Link
                to="/store"
                onClick={() => {
                  this.changeLogo("/logo.svg");
                  this.closeMobileNav();
                }}
              >
                Store
              </Link>
              <Link to="/services/contact-us" id="button">
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NavBar;
