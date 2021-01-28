import React from 'react';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Subscribe from './Components/Subscribe/Subcribe';
import TopHeader from './Components/TopHeader/TopHeader';
import logo from './assets/logo.svg'
import LatestProduct from './Components/LatestProducts/LatestProducts';
import HomePageBanner from './Components/HomePageBanner/HomePageBanner';
import WhoWeAre from './Components/WhoWeAre/WhoWeAre';


class HomePage extends React.Component{
    render(){
        return(
            <div>
            <TopHeader />
            <NavBar  logo={logo} />
            <HomePageBanner />
            <LatestProduct />
            <WhoWeAre />
            <Subscribe />
            <Footer />
            </div>
        )
    }
}

export default HomePage