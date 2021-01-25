import React from 'react';
import Banner from './Components/Banner/Banner';
import ContactUs from './Components/ContactUs/ContactUs';
import NavBar from './Components/NavBar/NavBar';
import Services from './Components/Services/Services';
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
            </div>
        )
    }
}

export default App;
