import React from 'react';
import Banner from './Components/Banner/Banner';
import ClientAndPatners from './Components/ClientsAndPatners/ClientAndPatners';
import ContactUs from './Components/ContactUs/ContactUs';
import NavBar from './Components/NavBar/NavBar';
import Services from './Components/Services/Services';
import Subscribe from './Components/Subscribe/Subcribe';
import TopHeader from './Components/TopHeader/TopHeader';


class App extends React.Component{
    render(){
        return(
            <div>
                <TopHeader />
                <NavBar />
                <Banner />
                <Services />
                <ContactUs />
                <ClientAndPatners />
                <Subscribe />
            </div>
        )
    }
}

export default App;
