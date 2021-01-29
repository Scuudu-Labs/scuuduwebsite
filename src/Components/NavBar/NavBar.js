import React from 'react';
import './NavBar.css'
import { Link } from "react-router-dom";


class NavBar extends React.Component{
    render(){
        return(
            <div id='navbar-container'>
                <div id="logo-container">
                    <Link to='/'><img src={this.props.logo} alt='scuudu logo' /></Link>
                </div>
                <div id="navigation-container">
                <i className="fas fa-bars"></i>
                    <Link to='/'>Products</Link>
                    <Link to='/ServicePage'>Services</Link>
                    <Link to='/AboutUs'>About Us</Link>
                    <Link to='/Support'>Support</Link>
                    <Link to='/Store'>Store</Link>
                    <button>Start a Project</button>
                </div>
            </div>
        )
    }
}

export default NavBar