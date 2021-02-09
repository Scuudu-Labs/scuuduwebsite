import React from 'react';
import ClientAndPatners from './Components/ClientsAndPatners/ClientAndPatners';
import Footer from './Components/Footer/Footer';
import MeetTheTeamBanner from './Components/MeetTheTeamBanner/MeetTheTeamBanner';
import MeetTheTeamGallery from './Components/MeetTheTeamGallery/MeetTheTeamGallery';
import MoreAboutUs from './Components/MoreAboutUs/MoreAboutUs';
import NavBar from './Components/NavBar/NavBar';
import Subscribe from './Components/Subscribe/Subcribe';
import TopHeader from './Components/TopHeader/TopHeader';


class MeetTheTeam extends React.Component{
    render(){
        return(
            <div>
                <TopHeader />
                <NavBar />
                <MeetTheTeamBanner />
                <MoreAboutUs />
                <MeetTheTeamGallery />
                <ClientAndPatners />
                <Subscribe />
                <Footer />
            </div>
        )
    }
}

export default MeetTheTeam