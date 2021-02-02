import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: "/logo.svg",
      test: "",
    };
    console.log(this.state.logo);
  }
  changeLogo = (logo) => {
    this.setState({
      logo: logo,
    });
  };
  render() {
    return (
      <div>
        <div id="navbar-container">
          <div id="navbar-inner-container">
            <div id="logo-container">
              <Link onClick={() => this.changeLogo("/logo.svg")} to="/">
                <img src={this.state.logo} alt="scuudu logo" />
              </Link>
            </div>
            <div id="navigation-container">
              <i className="fas fa-bars"></i>
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
              <button>Start a Project</button>
            </div>
          </div>
        </div>
        {/* <div id='mobile-nav'>
          <div id="mobile-navigation-container">
            <i className="fas fa-bars"></i>
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
            <button>Start a Project</button>
          </div>
      </div> */}
      </div>
    );
  }
}

export default NavBar;
