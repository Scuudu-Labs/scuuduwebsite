import React from "react";
import AboutUs from "./AboutUs";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from './HomePage';
import ServicesPage from './ServicesPage';
import NavBar from "./Components/NavBar/NavBar";
import logo from "./assets/logo.svg";
import TopHeader from "./Components/TopHeader/TopHeader";

class App extends React.Component {
  render() {
    return (
        <div id="app-container">
            <BrowserRouter>
            <TopHeader />
            <NavBar logo={logo} />
                <Route path='/' exact component={HomePage} />
                <Route path='/ServicePage' component={ServicesPage} />
                <Route path='/AboutUs' component={AboutUs} />
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
