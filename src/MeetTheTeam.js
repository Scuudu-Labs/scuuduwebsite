import React from 'react';
import ClientAndPatners from './Components/ClientsAndPatners/ClientAndPatners';
import Footer from './Components/Footer/Footer';
import MeetTheTeamBanner from './Components/MeetTheTeamBanner/MeetTheTeamBanner';
import MeetTheTeamGallery from './Components/MeetTheTeamGallery/MeetTheTeamGallery';
import MoreAboutUs from './Components/MoreAboutUs/MoreAboutUs';
import Subscribe from './Components/Subscribe/Subcribe';


class MeetTheTeam extends React.Component{
    render(){
        return(
            <div>
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