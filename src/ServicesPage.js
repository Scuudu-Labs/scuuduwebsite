import React from 'react';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
import Subscribe from './Components/Subscribe/Subcribe';
import ContactUs from './Components/ContactUs/ContactUs';
import TopHeader from './Components/TopHeader/TopHeader';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import ClientAndPatners from './Components/ClientsAndPatners/ClientAndPatners';


class ServicesPage extends React.Component{
    render(){
        
        return(
            <div id='homepage-container'>
                <TopHeader />
                <NavBar />
                <Banner />
                <Services />
                <ContactUs />
                <ClientAndPatners />
                <Subscribe />
                <Footer />
            </div>
        )
    }
}

export default ServicesPage