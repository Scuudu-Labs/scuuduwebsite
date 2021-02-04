import React from 'react';
import logo from './assets/logo.svg'
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
import Subscribe from './Components/Subscribe/Subcribe';
import ContactUs from './Components/ContactUs/ContactUs';


class ServicesPage extends React.Component{
    render(){
        
        return(
            <div id='homepage-container'>
                <Banner />
                <Services />
                <ContactUs />
                <Subscribe />
            </div>
        )
    }
}

export default ServicesPage