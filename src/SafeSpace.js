import React from 'react'
import TopHeader from './Components/TopHeader/TopHeader';
import NavBar from './Components/NavBar/NavBar'
import DownloadDetails from './Components/DownloadDetails/DownloadDetails'
import SocialDistancing from './Components/SocialDistancing/SocialDistancing';
import HealthBuzz from './Components/HealthBuzz/HealthBuzz'
import HealthTips from './Components/HealthTips/HealthTips';
import ClientAndPatners from './Components/ClientsAndPatners/ClientAndPatners'
import Footer from './Components/Footer/Footer';
import Subscribe from './Components/Subscribe/Subcribe';



const SafeSpace = () => {
    return (
        <div className="safe-space">
            <TopHeader />
            <NavBar />
            <DownloadDetails />
            <SocialDistancing />
            <HealthBuzz />
            <HealthTips />
            <ClientAndPatners isGrey />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default SafeSpace;