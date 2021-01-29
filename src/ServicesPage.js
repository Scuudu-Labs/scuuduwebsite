import React from 'react';
import logo from './assets/logo.svg'
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
// import NavBar from './Components/NavBar/NavBar';
// import TopHeader from './Components/TopHeader/TopHeader';
import Services from './Components/Services/Services';
import Subscribe from './Components/Subscribe/Subcribe';
import ContactUs from './Components/ContactUs/ContactUs';


class ServicesPage extends React.Component{
    render(){
        
        return(
            <div id='homepage-container'>
                
                {/* <TopHeader /> */}
                {/* <NavBar  logo={logo} /> */}
                <Banner />
                <Services />
                <ContactUs />
                <Subscribe />
                <Footer />
            </div>
        )
    }
}

export default ServicesPage