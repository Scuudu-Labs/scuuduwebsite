import React from 'react';
import Banner from './Components/Banner/Banner';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Services from './Components/Services/Services';
import Subscribe from './Components/Subscribe/Subcribe';
import TopHeader from './Components/TopHeader/TopHeader';


class HomePage extends React.Component{
    render(){
        return(
            <div id='homepage-container'>
                <TopHeader />
                <NavBar />
                <Banner />
                <Services />
                <ContactUs />
                <Subscribe />
                <Footer />
            </div>
        )
    }
}

export default HomePage