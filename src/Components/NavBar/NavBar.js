import React from 'react';
import './NavBar.css'


class NavBar extends React.Component{
    render(){
        return(
            <div id='navbar-container'>
                <div id="logo-container">
                    <img src={this.props.logo} alt='scuudu logo' />
                </div>
                <div id="navigation-container">
                <i className="fas fa-bars"></i>
                    <a href='/'>Products</a>
                    <a href='/'>Services</a>
                    <a href='/'>About Us</a>
                    <a href='/'>Support</a>
                    <a href='/'>Store</a>
                    <button>Start a Project</button>
                </div>
            </div>
        )
    }
}

export default NavBar