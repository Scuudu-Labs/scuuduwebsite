import React from "react";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import Subscribe from "./Components/Subscribe/Subcribe";
import Footer from "./Components/Footer/Footer";
import AboutUsBanner from "./Components/AboutUsBanner/AboutUsBanner";
import OurStory from "./Components/OurStory/OurStory";
import OurExpertise from "./Components/OurExpertise/OurExpertise";
import Awards from "./Components/Awards/Awards";

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <AboutUsBanner />
        <WhoWeAre pad='0px 0px'/>
        <OurStory />
        <OurExpertise />
        <Awards />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
